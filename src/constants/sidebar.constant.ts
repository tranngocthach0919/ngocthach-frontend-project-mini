export interface IMenu {
  id: number;
  link: string,
  title: string;
  className: {
    active: string,
    Inactive: string
  }
}

let activeClass = "bg-blue-500 shadow-md text-white w-2/3 rounded-3xl px-8 py-3 mb-5 w-full";
let InactiveClass = "bg-blue-600 shadow-md text-white w-2/3 rounded-3xl px-8 py-3 mb-5 w-full";
export const menus: IMenu[] = [
  {
    id: 1,
    link: '/',
    title: "Product List",
    className: {
      active: activeClass,
      Inactive: InactiveClass
    },
  },
  {
    id: 2,
    link: '/product-add',
    title: "Add New Product",
    className: {
      active: activeClass,
      Inactive: InactiveClass
    },
  }
];


