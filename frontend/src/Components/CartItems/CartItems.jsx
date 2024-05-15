import React, { useContext } from "react";
import styles from "./CartItems.module.css";

import remove_icon from "../Assets/cart_cross_icon.png";
import CartItemFormat from "./CartItemFormat";
import { ShopContext } from "../../Context/Context";
import { Box } from "@mui/material";

const CartItems = () => {
  const { all_Product, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <Box className={styles.cartitems}>
      <CartItemFormat />
      <hr />
      {all_Product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <Box key={e.id}>
              <Box
                className={`${styles.cartitemFormatMain} ${styles.cartitemFormat}`}
              >
                <img
                  src={e.image}
                  alt=""
                  className={styles.carticonProductIcon}
                  width={75}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.cartitemQuantity}>
                  {cartItem[e.id]}
                </button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className={styles.cartitemRemoveIcon}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </Box>
              <hr />
            </Box>
          );
        }
        return null;
      })}
      <Box className={styles.cartitemDown}>
        <Box className={styles.cartitemTotal}>
          <h1>Cart Totals</h1>
          <Box>
            <Box className={styles.cartitemTotalitem}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </Box>
            <hr />
            <Box className={styles.cartitemTotalitem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </Box>
            <hr />
            <Box className={styles.cartitemTotalitem}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </Box>
          </Box>
          <button onClick={() => {}}>PROCEED TO CHECKOUT</button>
        </Box>
        <Box className={styles.cartitemPromo}>
          <p>If You have a Promo Code, Enter it here</p>
          <Box className={styles.cartitemPromobox}>
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItems;
