import { randomUUID } from "crypto";
import { Category } from "./Category";

export interface ProductProps {
  name: string;
  categories: Category[];
  qty: number;
  price: number;
}

export class Product {
  private _id: string;
  private props: ProductProps;

  constructor(props: ProductProps, id?: string) {
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

  public get qty(): number {
    return this.props.qty;
  }

  public set qty(qty: number) {
    this.props.qty = qty;
  }

  public get price(): number {
    return this.props.price;
  }

  public set price(price: number) {
    this.props.price = price;
  }
}
