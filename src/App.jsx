import { Suspense, useEffect, useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from 'react-redux';
// import './App.css'

import ProtectedRoute from './components/ProtectedRoute.jsx'
import { protectedRoutesConfig } from './config/protectedRoutesConfig.jsx';
import { routesConfig } from './config/routesConfig.jsx';

import { setProducts } from './store/ProductSlice.jsx';

import Footer from './components/Footer.jsx'
import Layout from './components/Layout.jsx'
import Menu from './components/Menu.jsx'
import Header from './components/Header.jsx'
import Modal from './components/modal.jsx'


function App() {

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  console.log('login rerender',userDetails);
  const [open, setOpen] = useState(false);

  useEffect(
    useCallback(
    () => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:5173/data.json');
          const productsJSON = await response.json();
          // setData(jsonData);

          // const productsJSON = await fetch('https://dummyjson.com/products')
          // .then(res => res.json());
          // setData(prev => ({...prev, 
          //   ["products"] : productsJSON.products
          // }));
          dispatch(setProducts(productsJSON.products));

        } catch (error) {
          showBoundary(error);
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }),
  []);

  return (
    <>
      <Header />
      <Menu />
      <Layout>
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route element={<ProtectedRoute />}>
            {protectedRoutesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </ErrorBoundary>
        {/* <Modal open={open} setOpen={setOpen} message="Cart items removed!" /> */}
      </Layout>
      <Footer />
    </>
  )
}

export default App
