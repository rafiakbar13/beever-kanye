"use client"
import { createSlice } from "@reduxjs/toolkit";

interface QuoteState {
    quote: string;
    myQuotes: string[];
    favQuotes: string[];
}


const initialState: QuoteState = {
    quote: "",
    myQuotes: [],
    favQuotes: [],
};


const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        setQuote: (state, action) => {
            state.quote = action.payload;

        },
        setMyQuotes: (state, action) => {
            state.myQuotes = action.payload;
            console.log(state.myQuotes);

        },
        setFavoriteQuotes: (state, action) => {
            state.favQuotes = action.payload;
            console.log(state.favQuotes);
        },
    }
});

export const { setQuote, setMyQuotes, setFavoriteQuotes } = quoteSlice.actions;

export default quoteSlice.reducer;

