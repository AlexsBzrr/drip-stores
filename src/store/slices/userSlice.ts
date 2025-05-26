import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  nome: string;
  token: string;
}

const initialState: UserState = {
  nome: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      return action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
