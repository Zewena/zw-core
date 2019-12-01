export interface OnConnected {
  connectedCallback(): void;
}

export interface OnDisconnected {
  disconnectedCallback(): void;
}

export interface OnAttributeChanged {
  attributeChangedCallback(
    attrName?: string,
    oldVal?: string,
    newVal?: string
  ): void;
}

export interface OnAdopted {
  adoptedCallback(): void;
}

export type Lifecycle = OnConnected &
  OnDisconnected &
  OnAttributeChanged &
  OnAdopted;