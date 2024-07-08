import { useState } from "react"


export const ProductCard = ({ product, addToCart }) => {

    return (
        <li className="liProductCard">
            <div className="imgContainer">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="divProductCard">
                <h3 className="heading three">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body semibold">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button className="btn" onClick={() => { addToCart(product) }}>Adicionar</button>
            </div>
        </li>
    )
}