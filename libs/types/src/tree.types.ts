/**
 * Generic types for hierarchical trees
 */

export type Tree<T> = T & {
  name?: string;
  children?: Tree<T>[];
  detached?: boolean; // detached from the hierarchy
}

export type NgynTree<T> = T & {
  ngynId?: string;
  name?: string;
  children?: NgynTree<T>[];
  detached?: boolean;
}
