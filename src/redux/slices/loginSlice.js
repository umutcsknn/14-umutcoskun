import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../services/firebase';


export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      return {
        uid: user.uid,
        email: user.email,
        
      };
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);


const initialState = {
  user: null,
  loading: false,
  error: null,
};


const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutUser: (state) => {
     
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
