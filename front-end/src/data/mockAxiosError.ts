type PrimaryType = string | number | boolean | null | undefined
export type DataErrorType = PrimaryType | object

export class MockAxiosError extends Error {
  public readonly status: string
  public readonly response: { data: DataErrorType; status: string }

  constructor(message: string, status: string, data: DataErrorType) {
    super(message)
    this.status = status
    this.response = { data, status: this.status }
  }
}

export default function mockAxiosError(
  message: string,
  status: string,
  data: DataErrorType
) {
  return new MockAxiosError(message, status, data)
}
