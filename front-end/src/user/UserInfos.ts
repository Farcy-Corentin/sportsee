export default class UserInfos {
  private readonly _firstName: string
  private readonly _lastName: string
  private readonly _age: number

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
