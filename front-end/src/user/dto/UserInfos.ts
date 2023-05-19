export class UserInfos {
  private _firstName: string
  private _lastName: string
  private _age: number

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
  }

  get firstName(): string {
    return this._firstName
  }

  get lastName(): string {
    return this._lastName
  }

  get age(): number {
    return this._age
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`
  }
}
