declare module "*.html" {
  const content: string;
  export default content;
}

declare module "*.css" {
  type Serializable = { toSting: () => string };
  const mdl: Serializable;
  export default mdl;
}