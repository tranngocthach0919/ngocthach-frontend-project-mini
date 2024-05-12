import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import Button from "../../components/button/button.components";
import { setSearch } from "../../redux/products/products-slice";

export default function Filters() {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = () => {
    dispatch(setSearch(searchInput));
  }

  return (
    <div className="flex justify-between items-center bg-white py-2 rounded-lg px-6 mb-2 w-5/6">
      <div className="flex">
        <div className="flex items-center gap-4 pr-5">
          <label className="w-[44%]">Product name</label>
          <input
            type="text"
            className="border border-gray-200 bg-gray-50 rounded w-5/6 py-2 pl-2 rounded-lg text-gray-700 focus:outline-none focus:bg-white"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
      </div>
      <div className="">
        <Button onClick={handleSearch}>
          Filter
        </Button>
      </div>
    </div>
  );
}
