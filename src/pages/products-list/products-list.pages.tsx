import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getCategoriesThunk,
  getProductsThunk,
  getStatusThunk,
} from "../../redux/products/products-slice";

import Header from "../../layouts/header.layouts";
import Filters from "../filters/filters.pages";
import ProductItem from "./product-item/product-item";
import Paginate from "../../components/paginate/paginate.components";

export default function ProductsList() {
  const dispatch = useAppDispatch();
  const { list, search, page, totalPages } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk(search));
    dispatch(getCategoriesThunk());
    dispatch(getStatusThunk());
  }, [dispatch, search, page]);
  return (
    <div className="w-full h-5/6 bg-gray-100 rounded-3xl">
      <div className="px-5 py-5">
        {/*  */}
        <Header />
        {/* Filters */}
        <Filters />
        {/* List */}
        {list?.map((product) => (
          <ProductItem key={product?.id} data={product} />
        ))}
        <Paginate page={page} totalPages={totalPages}/>
      </div>
    </div>
  );
}
