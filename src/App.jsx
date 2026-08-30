import { Suspense, useEffect, useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from 'react-redux';
// import './App.css'

import ProtectedRoute from './components/ProtectedRoute.jsx'
import { protectedRoutesConfig } from './config/protectedRoutesConfig.jsx';
import { routesConfig } from './config/routesConfig.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import { fetchProductsData } from './services/ThunkServices.js';

import Layout from './components/Layout.jsx'
// import Modal from './components/modal.jsx'


function App() {

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const products = useSelector((state) => state.product.productList);
  console.log('login rerender',userDetails);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <ScrollToTop/>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
        </ErrorBoundary>
        {/* <Modal open={open} setOpen={setOpen} message="Cart items removed!" /> */}
      </Layout>
    </>
  )
}

export default App
