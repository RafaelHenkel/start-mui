import { combineReducers } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';
import CategoriesSlice from './CategoriesSlice';
import ProductsSlice from './ProductsSlice';

export default combineReducers({
  counter: CounterSlice,
  categories: CategoriesSlice,
  products: ProductsSlice,
});
