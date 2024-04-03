export interface UserDTO {
  email: string
  password: string
  token?: number | undefined
  remermber?: boolean
}

export interface UsersDB {
  users: UserDTO[]
}
