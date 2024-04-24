import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Login operation
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/login',
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

// Logout operation
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('https://connections-api.herokuapp.com/logout');
      return null;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Register operation
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/register',
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
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        'https://connections-api.herokuapp.com/updateUser',
        {
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
