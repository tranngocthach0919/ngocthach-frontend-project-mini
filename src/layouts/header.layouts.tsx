import { useNavigate } from "react-router-dom";
import Button from "../components/button/button.components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mb-5">
      <p className="font-bold text-xl text-gray-500">Products</p>
      <div>
        <Button onClick={() => navigate('/product-add')}>
          Add new product
        </Button>
      </div>
    </div>
  );
}
