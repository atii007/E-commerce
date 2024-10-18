import { createContext, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCartItems,
  openLoginModal,
  resetCart,
} from "../states-management/actions/actions";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.formData);
  const { formData } = store;
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await fetch(
          "http://localhost:4000/allproducts"
        );
        const productData = await productResponse.json();

        dispatch(getAllProducts(productData));

        if (cookies.token) {
          const cartResponse = await fetch("http://localhost:4000/getcart", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "auth-token": cookies.token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
          const cartData = await cartResponse.json();
          dispatch(getCartItems(cartData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cookies.token]);

  const LoginAction = async () => {
    let responseData;

    const updatedFormData = {
      email: formData.email,
      password: formData.password,
    };

    if (!updatedFormData.email) {
      toast.error("Email Required!");
    } else if (!updatedFormData.password) {
      toast.error("Password Required!");
    } else {
      await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        setCookies("user", JSON.stringify(responseData.newUser), { path: "/" });
        setCookies("token", responseData.accessToken, {
          path: "/",
        });
        toast.success("Welcome");
        dispatch(openLoginModal(false));
      } else {
        toast.error(responseData.errors);
      }
    }
  };

  const SignupAction = async () => {
    const roleData = { ...formData, role: "visitor" };

    let responseData;
    if (!formData.username) {
      toast.error("Username Required!");
    } else if (!formData.email) {
      toast.error("Email Required!");
    } else if (!formData.password) {
      toast.error("Password Required");
    } else {
      await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roleData),
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        setCookies("user", JSON.stringify(responseData.newUser), { path: "/" });
        setCookies("token", responseData.accessToken, { path: "/" });
        toast.success("Succesfully signed up");
        dispatch(openLoginModal(false));
      } else {
        toast.error(responseData.errors);
      }
    }
  };

  async function handleLogout() {
    dispatch(resetCart({}));
    removeCookie(["user"], { path: "/" });
    removeCookie(["token"], { path: "/" });
  }
  const contextValues = {
    LoginAction,
    SignupAction,
    handleLogout,
    cookies,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be inside the AuthProvider");
  }

  return context;
};
