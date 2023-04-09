import { randomUUID } from "crypto";

export interface CategoryPros {
  name: string;
  parent: Category | null;
}

export class Category {
  private _id: string;
  private props: CategoryPros;

  constructor(props: CategoryPros, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get parent(): Category | null {
    return this.props.parent;
  }

  public set parent(parent: Category | null) {
    this.props.parent = parent;
  }
}
