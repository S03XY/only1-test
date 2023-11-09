import { createSlice } from "@reduxjs/toolkit";

export interface INewPostModal {
  isOpen: boolean;
}

const InitialState: INewPostModal = {
  isOpen: false,
};

const NewPostModalReducer = createSlice({
  name: "new post modal",
  initialState: InitialState,
  reducers: {
    toggleNewPostModal: (state: INewPostModal, actions) => {
      state.isOpen = actions.payload.isOpen;
    },
  },
});

export const { toggleNewPostModal } = NewPostModalReducer.actions;

export default NewPostModalReducer.reducer;
