export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "furniture", label: "furniture" },
      { id: "beauty", label: "beauty" },
      { id: "fragrances", label: "fragrances" },
      { id: "groceries", label: "groceries" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "Essence", label: "Essence" },
      { id: "Glamour Beauty", label: "Glamour Beauty" },
      { id: "Velvet Touch", label: "Velvet Touch" },
      { id: "Chic Cosmetics", label: "Chic Cosmetics" },
      { id: "Nail Couture", label: "Nail Couture" },
      { id: "Calvin Klein", label: "Calvin Klein" },
      { id: "Chanel", label: "Chanel" },
      { id: "Dior", label: "Dior" },
      { id: "Dolce & Gabbana", label: "Dolce & Gabbana" },
      { id: "Gucci", label: "Gucci" },
      { id: "Annibale Colombo", label: "Annibale Colombo" },
      { id: "Furniture Co.", label: "Furniture Co." },
      { id: "Knoll", label: "Knoll" },
      { id: "Bath Trends", label: "Bath Trends" },
      { id: "nil", label: "nil" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "beauty",
    label: "Beauty",
    path: "/shop/listing",
  },
  {
    id: "fragrances",
    label: "Fragrances",
    path: "/shop/listing",
  },
  {
    id: "furniture",
    label: "Furniture",
    path: "/shop/listing",
  },
  {
    id: "groceries",
    label: "Groceries",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  furniture: "furniture",
  beauty: "beauty",
  fragrances: "fragrances",
  groceries: "groceries",
};

export const brandOptionsMap = {
  Essence: "Essence",
  GlamourBeauty: "Glamour Beauty",
  CalvinKlein: "Calvin Klein",
  Chanel: "Chanel",
  Dior: "Dior",
  Gucci: "Gucci",
  AnnibaleColombo: "Annibale Colombo",
};

export const filterOptions = {
  category: [
    { id: "furniture", label: "furniture" },
    { id: "beauty", label: "beauty" },
    { id: "fragrances", label: "fragrances" },
    { id: "groceries", label: "groceries" },
  ],
  brand: [
    { id: "Essence", label: "Essence" },
    { id: "Glamour Beauty", label: "Glamour Beauty" },
    { id: "Calvin Klein", label: "Calvin Klein" },
    { id: "Chanel", label: "Chanel" },
    { id: "Dior", label: "Dior" },
    { id: "Gucci", label: "Gucci" },
    { id: "Annibale Colombo", label: "Annibale Colombo" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
