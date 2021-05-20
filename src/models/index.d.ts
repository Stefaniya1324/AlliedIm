import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly wines?: (Wine | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Wine {
  readonly id: string;
  readonly title: string;
  readonly origin?: string;
  readonly year?: number;
  readonly rating?: number;
  readonly categoryID: string;
  readonly more?: (More | null)[];
  constructor(init: ModelInit<Wine>);
  static copyOf(source: Wine, mutator: (draft: MutableModel<Wine>) => MutableModel<Wine> | void): Wine;
}

export declare class More {
  readonly id: string;
  readonly name?: string;
  readonly front?: string;
  readonly back?: string;
  readonly sell?: string;
  readonly poster?: string;
  readonly wine?: Wine;
  constructor(init: ModelInit<More>);
  static copyOf(source: More, mutator: (draft: MutableModel<More>) => MutableModel<More> | void): More;
}