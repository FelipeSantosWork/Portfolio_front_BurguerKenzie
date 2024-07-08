import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, removeCartItem, removeAllCartItem }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const closeModal = () => {
      const button = document.querySelector(".closeModal");
      const modalContainer = document.querySelector(".modalContainer");

      button.addEventListener("click", () => {
         modalContainer.close();
      })
   }

   return (
      <dialog className="modalContainer">
         <div className="modalTittle">
            <h2 className="ModalTittleTypography">Carrinho de compras</h2>
            <button onClick={closeModal} className="closeModal" aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         <div>
            <ul className="ulCartItens">
               {cartList.map((product) => (
                  <CartItemCard removeCartItem={removeCartItem} key={product.id} product={product} />
               ))}
            </ul>
         </div>
         <div>
            <div className="cartItensTotalAmount">
               <span className="body semibold"> Total</span>
               <span className="body">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button className="removeAllBtn" onClick={removeAllCartItem}>Remover todos</button>
         </div>
      </dialog>
   );
};
