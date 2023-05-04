
export default class UserEntity
{
  private _id: number
  private _age: number
  private _firstName: string
  private _lastName: string

  public constructor(
    id: number,
    age: number,
    firstName: string,
    lastName: string,
  ) {
    this._id = id
    this._age = age
    this._firstName = firstName
    this._lastName = lastName
  }

  get id(): number {
    return this._id
  }

  get age(): number {
    return this._age
  }

  get firstName(): string {
    return this._firstName
  }

  get lastName(): string {
    return this._lastName
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
