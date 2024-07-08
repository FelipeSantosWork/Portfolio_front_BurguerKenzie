import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import axios from "axios";

const getInitialCartListState = () => {
   const cartList = localStorage.getItem("cartList");
   return cartList ? JSON.parse(cartList) : [];
};
const getInitialCartItensState = () => {
   const cartItens = localStorage.getItem("cartItens");
   return cartItens ? JSON.parse(cartItens) : 0;
};

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(getInitialCartListState);
   const [cartItens, setCartItens] = useState(getInitialCartItensState);

   // useEffect(
   //    () => {
   //       fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
   //          .then((response) => {
   //             return response.json()
   //          }).then((response) => {
   //             setProductList(response)
   //          }).catch((erro) => {
   //             window.alert(erro.message)
   //          });

   //    }, []
   // );
   useEffect(() => {
      const getProductList = async () => {

         const baseURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com";
         const api = axios.create({ baseURL, timeout: 5 * 1000 });
         const { data } = await api.get("/products");
         setProductList(data);

      }
      getProductList();
   });
   useEffect(() => {
      localStorage.setItem("cartList", JSON.stringify(cartList));

   }, [cartList]);
   useEffect(() => {
      localStorage.setItem("cartItens", JSON.stringify(cartItens));

   }, [cartItens]);

   const addToCart = (product) => {
      const productInCart = cartList.find(item => product.id === item.id)
      if (productInCart) {
      }

      else {
         setCartList((prevValue) => {
            setCartItens(cartItens + 1);
            return [...prevValue, product];

         });
      }
   };


   const removeCartItem = (id) => {
      const filteredCartItens = cartList.filter((product) => product.id !== id);
      setCartList(filteredCartItens);
      setCartItens(cartItens - 1);

   };
   const removeAllCartItem = () => {
      setCartList([]);
      setCartItens(0);

   };

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header cartItens={cartItens} />
         <main>
            <ProductList productList={productList} addToCart={addToCart} />
            <CartModal removeAllCartItem={removeAllCartItem} cartList={cartList} removeCartItem={removeCartItem} />

         </main>
      </>
   );
};
