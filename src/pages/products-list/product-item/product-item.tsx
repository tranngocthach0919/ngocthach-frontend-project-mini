import React from "react";
import { useNavigate } from "react-router-dom";
import { productsType } from "../../../redux/types/product-type";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteProductThunk } from "../../../redux/products/products-slice";
import Button from "../../../components/button/button.components";

interface Props {
  data: productsType;
}

const ProductItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDeleted = (id: number) => {
    dispatch(deleteProductThunk(id));
  }
  return (
    <div className="flex items-center bg-white py-2 rounded-lg px-6 mb-2 gap-6">
      <div className="w-2/12">
        <img
          src={data.image}
          alt="error"
          className="rounded-full object-cover w-16 h-16 p-2"
        />
      </div>
      <div className="flex flex-col w-1/4">
        <div className="font-bold text-md text-gray-600">
          {data.productName}
        </div>
        <div>{data.category}</div>
      </div>
      <div className="w-2/12">{data.price}</div>
      <div className="w-2/12">{data.quantity}</div>
      <div className="w-2/12">{data.status}</div>
      <div className="flex w-1/10">
        <Button onClick={() => navigate(`/product-detail/${data.id}`)}>
          View
        </Button>
        <Button className="ml-4" onClick={() => handleDeleted(data.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
