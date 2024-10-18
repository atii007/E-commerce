import { Box, Button } from "@mui/material";
import { useAuth } from "../../context/authProvider";
import { connect } from "react-redux";
import { getCartItems } from "../../states-management/actions/actions";

export const Item = (props) => {
  const { cookies } = useAuth();

  const addToCart = (itemId) => {
    const newItem = {
      ...props.cartItem,
      [itemId]: (props.cartItem[itemId] || 0) + 1,
    };

    props.getCartItems(newItem);
    if (cookies.token) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${cookies.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <Box className="col-sm-6 col-md-4 col-lg-4">
      <Box className="box">
        <Box className="option_container">
          <Box className="options" sx={{ cursor: "pointer" }}>
            <Button
              className="option1"
              onClick={() => {
                addToCart(props.id);
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
        <Box className="img-box">
          <img src={props.image} alt="" />
        </Box>
        <Box className="detail-box">
          <h5>{props.name}</h5>
          <h5>${props.new_price}</h5>
          <h6 style={{ textDecoration: "line-through" }}>${props.old_price}</h6>
        </Box>
      </Box>
    </Box>
  );
};

function shopItemProps(state) {
  return {
    cartItem: state.cartItem,
  };
}

export default connect(shopItemProps, { getCartItems })(Item);
