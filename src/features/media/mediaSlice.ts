import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Media } from "utils/dataTypes";

export interface MediaState {
  list: Media[];
}

const initialState: MediaState = {
  list: [],
};

export const fetchData = createAsyncThunk("media/fetchData", async () => {
    const res = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
    })
    return [...(await res.json())];
})

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<Media>) => {
      const media = action.payload;
      const newMedia = {
        ...media,
        isBookmarked: !media.isBookmarked,
      };
      const newList = state.list.map((media: Media) =>
        media.title === newMedia.title ? newMedia : media
      );
      return {
        ...state,
        list: newList,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload
    })
  }
});


export const { toggleBookmark } = mediaSlice.actions;

export default mediaSlice.reducer;
