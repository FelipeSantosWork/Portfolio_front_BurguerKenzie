import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import cartIcon from "../../assets/cartIcon.svg"


export const Header = ({cartItens}) => {
   // const [value, setValue] = useState("");

   const showModal = () => {
      const button = document.querySelector(".openCart");
      const modalContainer = document.querySelector(".modalContainer");

      button.addEventListener("click", ()=>{
         modalContainer.showModal();
      })      
   };

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className="openCart" onClick={showModal}>
                <img src={cartIcon} alt="cart Icon"/>
                
                <span className="cartItensSpan">{cartItens}</span>
            </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
      </header>
   );
};
