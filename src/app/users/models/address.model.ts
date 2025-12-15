export {};

export class Address {
  constructor(
    public id: number,
    public street: string,
    public landmark: string,
    public city: string,
    public state: string,
    public pincode: string
  ) {}
}
