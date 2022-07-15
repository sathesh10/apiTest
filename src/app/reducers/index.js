import { createReducer } from '@reduxjs/toolkit';
import { getCounters, addCounter, reduceCounter, addByValue, updateCounters } from '../actions/index'


const initialState = {
    counters : null,
    loading: false,
    error: null,
    counter: 0,
    users: null,
    mainBalance: 1000,
    updateSuccess: false,
}

export default createReducer(initialState, {
    [getCounters.pending.toString()]: (state) => {
        state.loading = true;
        state.error = null;
        state.updateSuccess = false;
      },
      [getCounters.fulfilled.toString()]: (state, { payload }) => {
        state.loading = false;
        state.users = payload?.data;
      },
      [getCounters.rejected.toString()]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      },
      [updateCounters.pending.toString()]: (state) => {
        state.loading = true;
        state.error = null;
        state.updateSuccess = false;
      },
      [updateCounters.fulfilled.toString()]: (state, { payload }) => {
        state.loading = false;
        state.updateSuccess = true;
        // state.users = payload?.data;
      },
      [updateCounters.rejected.toString()]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.updateSuccess = false;
      },
      [addCounter]: (state) => {
          state.counter += 1;
      },
      [reduceCounter]: (state) => {
        state.counter -= 1;
    },
    [addByValue]: (state, actions) => {
        state.counter = actions.payload;
    }
});