import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
const apiUrl = 'http://localhost:8100/users';

export const getCounters = createAsyncThunk(
  "counter/getCounters",
  async (params) => {
    return axios.get(apiUrl)
    .then(response => response.data)
    .catch(error => {
      throw(error);
    });
  }
);


export const updateCounters = createAsyncThunk(
  "counter/updateCounters",
  async (params) => {
    return axios.put(apiUrl + `/${params.id}`, params)
    .then(response => response.data)
    .catch(error => {
      throw(error);
    });
  }
);


export const addCounter = createAction('counter/addCounter');

export const reduceCounter = createAction('counter/reduceCounter');

export const addByValue = createAction('counter/addByValue');

export const reduceMyAmount = createAction('counter/reduceMyAmount');