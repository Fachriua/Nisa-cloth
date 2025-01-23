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
import { useEffect, useState } from "react";

export function CardProduct() {
  const dispatch = useDispatch();

  const { products, isLoading, error } = useSelector((state) => state.Product);
  const [randomProduct, setRandomProduct] = useState(null); // State untuk menyimpan produk acak

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Pilih produk acak setelah `products` ter-update
  useEffect(() => {
    if (products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      setRandomProduct(products[randomIndex]);
    }
  }, [products]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {randomProduct ? (
        <Card className="w-32 h-80 md:w-52 lg:w-52" key={randomProduct.id}>
          <CardHeader shadow={false} floated={false} className="h-52">
            <img
              src={randomProduct.image}
              alt="card-image"
              className="h-24 w-full object-contain md:w-full md:h-full"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {randomProduct.title.substring(0,20)}...
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                ${randomProduct.price}
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}

export default CardProduct;
