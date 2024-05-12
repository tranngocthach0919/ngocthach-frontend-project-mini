import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsType, categoryType, statusType, addProductType } from "../types/product-type";
import {
  addDataThunk,
  getDataThunk,
} from "../thunks/thunks";
import api from "../../api/api";

export interface IState {
  list: productsType[];
  category: categoryType[];
  status: statusType[];
  search: string;
  page: number;
  totalPages: number;
}

const initialState: IState = {
  list: [],
  category: [],
  status: [],
  search: '',
  page: 1,
  totalPages: 1
};


export const getProductsThunk = getDataThunk<productsType[]>("products/getProducts", "/products");

export const getCategoriesThunk = getDataThunk<categoryType[]>("products/getCategories","/categories");

export const getStatusThunk = getDataThunk<categoryType[]>("products/getstatus", "/status");

export const addProductThunk = addDataThunk<addProductType>("products/addProduct", "/product", "Add product successfully!")

export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async (product: productsType): Promise<productsType> => {
    try {
      const response = await api.patch(`/product/${product.id}`, product);
      

      const data: productsType = response.data;

      alert("Update product successfully!");

      return data;
    } catch (error) {
      console.error(`Failed to update product:`, error);

      throw error;
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  'product/deleteProduct',
  async (id: number): Promise<number> => {
    try {
      const response = await api.delete(`/product/${id}`,);
      
      const data = response.data;

      alert("Delete product successfully!");

      return data.id;

    } catch (error) {
      console.error(`Failed to delete product:`, error);

      throw error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        state.totalPages = Math.ceil(state.list?.length / 5);
        const index = (state.page - 1) * 5;
        state.list = state.list.slice(index, index + 5);
        
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(getStatusThunk.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        let listLength = state.list.length;
        
        const addId = listLength > 0 ? state.list[listLength - 1].id + 1 : 1
        
        state.list.push({id: addId, ...action.payload});
        
        window.location.href = '/';
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {        
        state.list.forEach((product) => {
          if (product.id === Number(action.payload.id)) return {...action.payload}
        })

        window.location.href = '/';
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== Number(action.payload));
      })
});

export const { setSearch, setPage } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
