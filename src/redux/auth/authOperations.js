import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Login operation
export const login = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/register',
        {
          name,
          email,
          password,
        }
      );

      if (response.data.success) {
        return response.data.token;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Logout operation
export const logout = createAsyncThunk(
  'auth/login',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('https://connections-api.herokuapp.com/login');
      return null;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Register operation
export const register = createAsyncThunk(
  'auth/logout',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/logout',
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        return response.data.token;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Update user operation
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        'https://connections-api.herokuapp.com/updateUser',
        {
          name,
          email,
          password,
        }
      );
      
      if (response.data.success) {
        return response.data.message;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
