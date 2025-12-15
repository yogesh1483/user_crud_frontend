import { Address } from './address.model';

export class User {
  constructor(
    public userId: number | null,
    public name: string,
    public email: string,
    public contact: number,
    public activeStatus: boolean,
    public address: Address
  ) {}
}
