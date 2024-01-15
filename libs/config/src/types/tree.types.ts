// generic type for hierarchical trees
export type NgynTree<T> = T & {
  ngynId?: string;
  name?: string;
  children?: NgynTree<T>[];
  detached?: boolean; // detached from the hierarchy
}
