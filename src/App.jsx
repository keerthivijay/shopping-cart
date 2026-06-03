import { Suspense, useEffect, useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer.jsx'
import Layout from './components/Layout.jsx'
import Menu from './components/Menu.jsx'
import Header from './components/Header.jsx'
import ProductsWidget from './components/ProductsWidget.jsx'

import ProductDetails from './page/ProductDetails.jsx'
import CartDetails from './page/CartDetails.jsx'
import ProductList from './page/ProductList.jsx'
import Contact from './page/Contact.jsx'
import DeliveryDetails from './page/DeliveryDetails.jsx'
import PaymentDetails from './page/PaymentDetails.jsx'
import OrderSuccess from './page/OrderSuccess.jsx'
import OrderFailure from './page/OrderFailure.jsx'
import Home from './page/Home.jsx'
import OrderDetails from './page/OrderDetails.jsx'
import OrderList from './page/OrderList.jsx'
import UserLogin from './page/UserLogin.jsx'
import SignUp from './page/SignUp.jsx'
import Modal from './components/modal.jsx'
import Counter from './page/Counter.jsx'

import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from './components/OrdeSlice.jsx';


import { ErrorBoundary } from "react-error-boundary";

function App() {

  const dispatch = useDispatch();

  const orderListRx = useSelector((state) => state.order.orderList);

  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    paymentOptions: [],
    deliveryInfo : {
      name: "",
      address: "",
      phone: ""
    },
    products: []
  });

  useEffect(
    useCallback(
    () => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:5173/data.json');
          const jsonData = await response.json();
          setData(jsonData);

          const productsJSON = await fetch('https://dummyjson.com/products')
          .then(res => res.json());
          setData(prev => ({...prev, 
            ["products"] : productsJSON.products
          }));

          // console.log("initial data", JSON.stringify(productsJSON.products));

          console.log("new product data", data.products);

        } catch (error) {
          showBoundary(error);
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }),
  []);


  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    address: "",
    phone: ""
  });
  const [paymentOption, setPaymentOption] = useState(null);

  const [orderDetails, setOrderDetails] = useState({
    id: null,
    cartProducts: [],
    deliveryInfo: {},
    paymentOption: null,
    total: 0
  });

  const [orderList, setOrderList] = useState([]);

  // const data = {
  //   paymentOptions: [
  //     { id: 1, name: "Credit Card" },
  //     { id: 2, name: "Debit Card" },
  //     { id: 3, name: "Net Banking" },
  //     { id: 4, name: "Cash on Delivery" },
  //     { id: 5, name: "UPI" }
  //   ],
  //   deliveryInfo : {
  //     name: "John Doe",
  //     address: "123 Main St, Anytown, USA",
  //     phone: "555-123-4567"
  //   },
  //   products: [
  //     { id: 1, name: "Product 1", price: 19.99 },
  //     { id: 2, name: "Product 2", price: 29.99 },
  //     { id: 3, name: "Product 3", price: 39.99 },
  //     { id: 4, name: "Product 4", price: 49.99 },
  //     { id: 5, name: "Product 5", price: 59.99 },
  //     { id: 6, name: "Product 6", price: 69.99 },
  //     { id: 7, name: "Product 7", price: 79.99 },
  //     { id: 8, name: "Product 8", price: 89.99 },
  //     { id: 9, name: "Product 9", price: 99.99 },
  //     { id: 10, name: "Product 10", price: 109.99 }
  //   ]
  // };



  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
    setCartCount(cartCount + 1);
  }

  const removeFromCart = (productId) => {
    setCartProducts(cartProducts.filter(product => product.id !== productId));
    setCartCount(cartCount - 1);
  }

  const clearCart = () => {
    setCartCount(0);
    setCartProducts([]);
    setOpen(true);
  }

  const addPaymentOption = (optionId) => {
    const option = data.paymentOptions.find(option => option.id === optionId);
    const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);
    setPaymentOption(option);
    handleCreateOrder({
      id: Date.now(),
      cartProducts: cartProducts,
      deliveryInfo: deliveryInfo,
      paymentOption: option,
      total: totalPrice
    });

    setCartProducts([]); // Clear cart after order is created
    setCartCount(0); // Reset cart count
  }

  const addDeliveryInfo = (info) => {
    setDeliveryInfo(info);
  }

  const handleCreateOrder = (orderDetails) => {

    dispatch(createOrder(orderDetails));
    setOrderDetails(orderDetails);
    setOrderList([...orderList, orderDetails]);
    console.log("Order created:", orderDetails);
  }

  return (
    <>
      <Header cartCount={cartCount} products={data.products} />
      <Menu />
      <Layout>
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails products={data.products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartDetails cartProducts={cartProducts} removeFromCart={removeFromCart} clearCart={clearCart} setOpen={setOpen} />} />
          <Route path="/products" element={<ProductList products={data.products} addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-details" element={<ProductDetails products={data.products} addToCart={addToCart} />} />
          <Route path="/delivery" element={<DeliveryDetails deliveryInfo={data.deliveryInfo} addDeliveryInfo={addDeliveryInfo} />} />
          <Route path="/payment" element={<PaymentDetails paymentOptions={data.paymentOptions} addPaymentOption={addPaymentOption} />} />
          <Route path="/order-success" element={<OrderSuccess orderDetails={orderDetails} />} />
          <Route path="/order-failure" element={<OrderFailure />} />
          <Route path="/orders" element={<OrderList orders={orderListRx} />} />
          <Route path="/order-details/:id" element={<OrderDetails orderList={orderListRx} />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        </ErrorBoundary>
        <Modal open={open} setOpen={setOpen} message="Cart items removed!" />
      </Layout>
      <Footer />
    </>
  )
}

export default App
