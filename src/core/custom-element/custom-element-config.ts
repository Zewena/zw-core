export interface ICustomElementConfig {
  selector: string;
  template: string;
  style?: Partial<CSSStyleDeclaration>;
  extend?: keyof HTMLElementTagNameMap
}