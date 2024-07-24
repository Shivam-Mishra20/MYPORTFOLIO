import { useState } from "react"
import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.css'
import Home from "./pages/Home";

import { Layout } from "./Components/Layout";

import { PortfolioDetails } from "./screens/portfolio/PortfolioDetails";




function App() {
  const [showLoader, setShowLoder] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoder(false)



    }, 2000);
    return () => clearTimeout(timer)

  }, [])


  return (
    <>
      {showLoader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

          <div className="preloader-heading">
            <div className="load-text">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
      )}

      {!showLoader && (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Layout>
                      <Home />
                    </Layout>
                  </>

                }
              />

              <Route path="/details" element={<>
                <Layout>
                  <PortfolioDetails />
                </Layout>

              </>} />

            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}







export default App
