import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getDataThunk = <T>(typeName: string, apiUrl: string) => {
  return createAsyncThunk(
    typeName,
    async (search?: string): Promise<T> => {
      try {
        const response = await api.get(
          `${apiUrl}?search=${search}`
        );

        const data: T = response.data;

        return data;
      } catch (error) {
        console.error(`Failed to fetch data:`, error);

        throw error;
      }
    }
  );
};

export const addDataThunk = <T>(
  typeName: string,
  apiUrl: string,
  successMessage: string
) => {
  return createAsyncThunk(typeName, async (request: T): Promise<T> => {
    try {
      const response = await api.post(apiUrl, request);

      const data: T = response.data;

      alert(successMessage);

      return data;
    } catch (error) {
      console.error(`Failed to add!`, error);

      throw error;
    }
  });
};
