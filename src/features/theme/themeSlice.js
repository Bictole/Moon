import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themes: ['Energy', 'Timeline', 'Facility', 'Aled']
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{}
})

export const selectThemes = state => state.theme.themes

export default themeSlice.reducer