import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoriesSliceType {
  data: string[];
}

const initialState: CategoriesSliceType = { data: [] };

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);

      return state;
    },
    deleteCategory: state => {
      state.data = [];
    },
  },
});

export const { addCategory, deleteCategory } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
