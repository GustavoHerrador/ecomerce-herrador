import React, { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Metodo Some, que devuelve un valor booleano-item item-
  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  //ItemDetail
  const addItem = (item, productQuantity) => {
    const newItem = {
      ...item,
      productQuantity,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].stock += productQuantity;
      debugger;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //Vacia el Carrito-Cart-Boton
  const emptyCart = () => {
    setCart([]);
  };

  //Metodo Filter-Cart
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  //Metodo Reduce-CartWidget- Retorna la cantidad total de unidades del carrito
  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.productQuantity), 0);
  };

  //Metodo Reduce-Cart- Retorna precio total del carrito
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.productQuantity * x.price), 0);
  };

  return (
    <Provider
      value={{
        setCart,
        cart,
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
};

export default MyProvider;
