import { forwardRef } from "react";
import { RefCallBack } from "react-hook-form";

interface InputProps {
  register?: RefCallBack;
  type?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | undefined;
  defaultValue?: string | number | undefined;
  className?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  register,
  type = "text",
  placeholder,
  onChange,
  value,
  defaultValue,
  className = ''
}, ref) => {
  return (
    <input
    ref={ref}
    {...register}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      className={`border border-gray-200 bg-gray-50 rounded w-full py-2 pl-2 rounded-lg text-gray-700 focus:outline-none focus:bg-white ${className}`}
    />
  );
};

export default forwardRef(Input);
