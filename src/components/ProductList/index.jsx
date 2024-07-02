import { ProductCard } from "./ProductCard";
export const ProductList = ({ productList, addToCart }) => {
   
   return (
      <ul className="ulProductList">
         {productList.map((product) => (
            <ProductCard addToCart={addToCart} key={product.id} product={product} />
         ))}
      </ul>
   );

};