import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateProductThunk } from "../../redux/products/products-slice";

import Button from "../../components/button/button.components";
import Input from "../../components/input/input.components";

export default function ProductDetail() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    list,
    category: cateList,
    status: statusList,
  } = useAppSelector((state) => state.products);
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const data = list.find((product) => product.id === Number(id));
    if (data) {
      setProductName(data.productName);
      setImage(data.image);
      setCategory(data.category);
      setPrice(data.price);
      setQuantity(data.quantity);
      setStatus(data.status);
    } else {
      navigate('/')
    }
  }, [id, list, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: {}) => {};

  const handleClick = () => {
    dispatch(updateProductThunk({ id: Number(id), productName, image, category, price, quantity, status }));
  };
  return (
    <div className="p-10 text-xl bg-gray-200 rounded-2xl">
      <form
        className="w-full max-w-lg px-5 py-5 bg-white rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label className="py-2">Product name</label>
          <Input
            {...register("productName", {
              required: productName ? false : "Vui lòng không bỏ trống",
            })}
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
          <p className="text-sm text-red-600">
            {errors?.productName?.message as string}
          </p>
        </div>

        <div className="flex flex-col">
          <label>Image</label>
          <Input
            {...register("image", {
              required: image ? false : "Vui lòng không bỏ trống",
            })}
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <p className="text-sm text-red-600">
            {errors?.image?.message as string}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="py-2">Category</label>
          <select
            {...register("category", {
              required: category ? false : "Hãy chọn danh mục!",
            })}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border border-gray-200 bg-gray-50 rounded w-full py-2 pl-2 rounded-lg text-gray-700"
          >
            {cateList.map((cate) => (
              <option key={cate.id} value={cate.name}>
                {cate.name}
              </option>
            ))}
          </select>
          <p className="text-sm text-red-600">
            {errors?.category?.message as string}
          </p>
        </div>

        <div className="flex flex-col">
          <label>Price</label>
          <Input
            type="number"
            {...register("price", {
              required: price > 0 ? false : "Mức giá phải lớn hơn 0!",
            })}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
          <p className="text-sm text-red-600">
            {errors?.price?.message as string}
          </p>
        </div>

        <div className="flex flex-col">
          <label>Quantity</label>
          <Input
            {...register("quantity", {
              required: quantity > 0 ? false : "Số lượng phải lớn hơn 0!",
            })}
            value={quantity}
            type="number"
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
          <p className="text-sm text-red-600">
            {errors?.quantity?.message as string}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="py-2">Status</label>
          <select
            {...register("status", {
              required: status ? false : "Hãy lựa chọn trạng thái!",
            })}
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="border border-gray-200 bg-gray-50 rounded w-full py-2 pl-2 rounded-lg text-gray-700"
          >
            {statusList.map((status) => (
              <option key={status.id} value={status.name}>
                {status.name}
              </option>
            ))}
          </select>
          <p className="text-sm text-red-600">
            {errors?.status?.message as string}
          </p>
        </div>

        <div className="flex mt-3 justify-end">
          <Button className="mr-3" onClick={() => navigate(-1)}>Cancel</Button>
          <Button
            type="submit"
            className="disabled:bg-gray-200"
            onClick={handleClick}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
