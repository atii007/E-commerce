import styles from "./CartItems.module.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import CartItemFormat from "./CartItemFormat";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import { getCartItems } from "../../states-management/actions/actions";
import { useCookies } from "react-cookie";

export const CartItems = (props) => {
  const { allProducts, cartItem, getCartItems } = props;

  const [cookies] = useCookies(["token"]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in props.cartItem) {
      if (props.cartItem[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const removeFromCart = (itemId) => {
    const newItem = { ...cartItem, [itemId]: (cartItem[itemId] || 0) - 1 };
    getCartItems(newItem);
    if (cookies.token) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${cookies.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <Box className={styles.cartitems}>
      <CartItemFormat />
      <hr />
      {allProducts.map((e) => {
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

function cartItemProps(state) {
  return {
    allProducts: state.allProducts,
    cartItem: state.cartItem,
  };
}

export default connect(cartItemProps, { getCartItems })(CartItems);
