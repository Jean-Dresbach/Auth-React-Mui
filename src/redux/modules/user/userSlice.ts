import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserDTO, UsersDB } from "../../../types/user"

const initialState: UsersDB = {
  users: []
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserDTO>) => {
      const index = state.users.findIndex(
        (u) => u.email === action.payload.email
      )

      if (index !== -1) {
        state.users.splice(index, 1, { ...action.payload, token: Date.now() })

        alert("Usuário logado!")
      } else {
        alert("Credenciais inválidas!")
      }
    },
    signUp: (state, action: PayloadAction<UserDTO>) => {
      return { users: [...state.users, { ...action.payload }] }
    }
  }
})

export const { signUp, signIn } = userSlice.actions
export default userSlice.reducer
