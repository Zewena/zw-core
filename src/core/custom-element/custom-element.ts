import { ICustomElementConfig } from "./custom-element-config";
import { Lifecycle, OnConnected } from "./custom-element-lifecycle";

interface IConstructor {
  prototype: HTMLElement;
  new (...args: any[]): HTMLElement & OnConnected;
}

interface IMappedProps {}

const customElement = function(config: ICustomElementConfig) {
  return function decoratorFactory<T extends IConstructor>(
    Component: T
  ): T & IMappedProps {
    const template = document.createElement("template");
    template.innerHTML = config.template;

    class WrappedCustomComponent extends Component implements OnConnected {
      public static get is() {
        return config.selector;
      }

      constructor(...args: any[]) {
        super(...args);
      }

      public async connectedCallback() {
        const clonedNode = document.importNode(template.content, true);
        const shadowRoot = this.attachShadow({ mode: "open" });
        const styleSheet = new CSSStyleSheet();

        shadowRoot.appendChild(clonedNode);

        try {
          const sheet = await styleSheet.replace(config.style.toString());
          shadowRoot.adoptedStyleSheets = [sheet];
        } catch (error) {
          console.error(`Failed to inject stylesheets: ${error}`);
        } finally {
          super.connectedCallback();
        }
      }
    }

    if (!window.customElements.get(config.selector)) {
      window.customElements.define(config.selector, WrappedCustomComponent);
    }

    return WrappedCustomComponent;
  };
};
  


export default customElement;