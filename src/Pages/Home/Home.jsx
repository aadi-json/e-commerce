import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../context/data/myContext";
import Hero from "../../Components/Hero/Hero";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Track from "../../Components/Track/Track";
import Testimonial from "../../Components/Testomonial/Testtomonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/CartSlice";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  // console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <Layout>
      {/* <button className="bg-gray-400 p-5  " onClick={() => addCart()}>
        add
      </button>
      <button className="bg-gray-400 p-5  " onClick={() => deleteCart()}>
        delete
      </button> */}
      <Hero />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
