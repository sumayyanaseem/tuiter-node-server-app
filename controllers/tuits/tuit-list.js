/*import {createSlice}
    from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findTuitsThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findTuitsThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           }
                                   },
                                   reducers: { ... }
                               });*/

