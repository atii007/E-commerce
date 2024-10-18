import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import kid_hero from "./Components/Assets/kid_hero.png";
import men_hero from "./Components/Assets/men_hero.png";
import women_hero from "./Components/Assets/women_hero.png";
import Profile from "./Pages/Profile";
import HeroCategories from "./Components/CategoriesHeroSection/HeroCategories";
import Dashboard from "./Pages/dashboard/Dashboard";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["token"]);

  const isAdmin =
    cookies.token && cookies.user && cookies.user.role === "admin";

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={
              <ShopCategory
                banner={
                  <HeroCategories
                    image={men_hero}
                    headingSpan="Explore Trends"
                    heading="Fashion for Him"
                    description="Discover a curated collection of stylish clothing and accessories designed for the modern man. From casual essentials to sharp formal wear, find everything you need to elevate your wardrobe."
                  />
                }
                category="men"
              />
            }
          />

          <Route
            path="/women"
            element={
              <ShopCategory
                banner={
                  <HeroCategories
                    image={women_hero}
                    headingSpan="Embrace Style"
                    heading="Trendy Fashion"
                    description="Dive into a world of feminine elegance and contemporary flair with our diverse range of women's fashion. Whether you're seeking casual chic or sophisticated glamour, we have the perfect pieces to reflect your unique style."
                  />
                }
                category="women"
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                banner={
                  <HeroCategories
                    image={kid_hero}
                    headingSpan="Adorable"
                    heading="Fashion for Kids"
                    description="Dress your little ones in adorable outfits that are as comfortable as they are cute. Explore our playful selection of children's clothing, designed to withstand playtime adventures while keeping them looking stylish."
                  />
                }
                category="kid"
              />
            }
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/profile" element={<Profile />} />
          {isAdmin && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/listProduct" element={<ListProduct />} /> */}
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
