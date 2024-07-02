import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeCartItem}) => {
   return (
      <li className="liCartItens">
         <div className="divLiCartItens">
            <img src={product.img} alt={product.name} />
            <div className="cartItensNamePrice">
            <h3 className="heading three">{product.name}</h3>
            <h3 className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</h3>
            </div>
         <button className="deleteBtn" onClick={()=> removeCartItem(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
         </div>
      </li>
   );
};
