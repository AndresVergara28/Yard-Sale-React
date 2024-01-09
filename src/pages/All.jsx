import MainContainer from "../components/MainContainer/MainContainer";
import { useGetAllProducts } from "../hooks/useProducts";

const All = () => {
  const { productsData } = useGetAllProducts();

  return (
    <MainContainer productsData={productsData}/>
  )
};

export { All };
