import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/product-actions";
import { useEffect } from "react";



const Product = () => {
    const dispatch = useDispatch();

    // Ambil state dari Redux
    const { products, isLoading, error } = useSelector((state) => state.Product);
  
    useEffect(() => {
      dispatch(fetchProduct());
    }, [dispatch]);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.length > 0 ? (
        products.map((product) => (
            <Card className="w-full" key={product.id}>
            <CardHeader shadow={false} floated={false} className="h-52">
                <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-normal">
                    {product.title.substring(0, 30)}...
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                    ${product.price.toFixed(2)}
                </Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75 hidden sm:block">
                {product.description.substring(0, 100)}...
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-end relative">
                <Button
                ripple={false}
                className="bg-white-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 relative h-12 w-12"
                >
                <svg
                    className="absolute bottom-1 right-1 w-6 h-6 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                    stroke="currentColor"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                    />
                </svg>
                </Button>
            </CardFooter>
            </Card>
        ))) : (
            <div>No products available</div>
          )}
    </div>
  );
};

export default Product;
