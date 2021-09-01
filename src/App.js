import './App.scss';
import './App_Mobile.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from './components/layout/header'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

import Home from './pages/home'
import About from './pages/about'
import Whitepaper from './pages/whitepaper'
import Reserve from './pages/whitepaper'
import Claim from './pages/claim'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions()
  const [bodyOpen, setBodyOpen] = useState(false)
  const [navModalOpen, setNavModalOpen] = useState(false)
  const [currentTip, setCurrentTip] = useState("")
  const mobileMaxWidth = 625;
  let sidewidth = 862 * (height - 72) / 1864

  const bodywidth = width - sidewidth
  useEffect(() => {
    // Set side image size //
    document.getElementById("side-image").style.width = sidewidth + "px"
    document.getElementById("side-image").style.height = (height - 72) + "px"

    // Set mobile background size //
    document.getElementById("mobile-back").style.width = width + "px"
    document.getElementById("mobile-back").style.height = (width / 862 * 1864) + "px"

    // Set body container size (desktop&mobile) //
    if (width > mobileMaxWidth) {
      document.getElementById("body-container").style.marginLeft = sidewidth + "px"
    } else {
      document.getElementById("body-container").style.marginLeft = 0
      document.getElementById("body-container").style.width = "100%"
    }
  })

  const onClickBodyToggle = () => {
    if (bodyOpen) {
      document.getElementById("page-toggle-button").style.position = "fixed"
      document.getElementById("page-toggle-button").style.bottom = "0"
      document.getElementById("body-container").style.display = "none"
      setBodyOpen(false)
    } else {
      document.getElementById("page-toggle-button").style.position = "absolute"
      document.getElementById("page-toggle-button").style.bottom = "55%"
      document.getElementById("body-container").style.display = "block"
      setBodyOpen(true)
    }
  }

  const onClickModalToggle = () => {
    if (navModalOpen) {
      document.getElementById("nav-modal").style.display = "none"
      setNavModalOpen(false)
    } else {
      document.getElementById("nav-modal").style.display = "flex"
      setNavModalOpen(true)
    }
  }

  const onHandleTip = (tipType, disp) => {
    if (currentTip !== "") {
      document.getElementById("tip-card-" + currentTip).style.display = "none"
    }
    document.getElementById("tip-card-" + tipType).style.display = disp
    setCurrentTip(tipType)
  }
  return (
    <Router>
      <div>
        <Header />
        <div id="main-container">
          <div id="mobile-back">
            <button id="tip-button-shirt" className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
            <button id="tip-button-shorts" className="tip-button" onClick={() => onHandleTip("shorts", "block")}><img src="/icon-tip-button.svg" alt="tip butto icon" /></button>
            <button id="tip-button-boots" className="tip-button" onClick={() => onHandleTip("boots", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
          </div>
          <div id="side-image">
            <button id="tip-button-shirt" className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
            <button id="tip-button-shorts" className="tip-button" onClick={() => onHandleTip("shorts", "block")}><img src="/icon-tip-button.svg" alt="tip butto icon" /></button>
            <button id="tip-button-boots" className="tip-button" onClick={() => onHandleTip("boots", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
            <div className="social-wrapper" style={{ width: sidewidth }}>
              <div className="img-wrapper">
                <img src="/discord.png" alt="discord" />
              </div>
              <div className="img-wrapper">
                <img src="/telegram.png" alt="discord" />
              </div>
              <div className="img-wrapper">
                <img src="/twitter.png" alt="discord" />
              </div>
              <div className="img-wrapper">
                <img src="/medium.png" alt="discord" />
              </div>
            </div>
          </div>
          <div id="tip-card-shirt" className="tip-card">
            <div className="tip-title">SHIRT SKIRT</div>
            <div className="tip-category">
              <div className="tip-category-title">Item Name:</div>
              <div className="tip-category-text">SHIRT SKIRT</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Designed by:</div>
              <div className="tip-category-text">FAITH CONNEXION TRIBE</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Collection:</div>
              <div className="tip-category-text">PRE FALL 2015</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Item Type:</div>
              <div className="tip-category-text">SKIRT</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Materials:</div>
              <div className="tip-category-text">DENIM, COTON, WOOL</div>
            </div>
            <br />
            <div className="tip-content">
              The Shirt skirt is a pure and original creation
              from the Faith Connexion tribe ! This iconic skirt
              exists since season one, and has been declined
              many times : from Scottish wool to bleached
              fabrics and Japanese lurex cotton, the shirt skirt
              had also been fringed and embroidered, in both
              short and long versions; The British singer Rita
              Ora is a real fan of this item.
            </div>
            <button className="tip-close-button" onClick={() => onHandleTip("shirt", "none")}><img src="/btn-close.svg" alt="close button" /></button>
          </div>
          <div id="tip-card-shorts" className="tip-card">
            <div className="tip-title">PAINTER SHORTS</div>
            <div className="tip-category">
              <div className="tip-category-title">Item Name:</div>
              <div className="tip-category-text">PAINTER SHORTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Designed by:</div>
              <div className="tip-category-text">FAITH CONNEXION TRIBE</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Collection:</div>
              <div className="tip-category-text">PRE FALL 2021</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Item Type:</div>
              <div className="tip-category-text">SHORTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Materials:</div>
              <div className="tip-category-text">DENIM, COTON, WOOL</div>
            </div>
            <br />
            <div className="tip-content">
              The Painter Shorts is pure and original creation
              from the Faith Connexion tribe ! This iconic skirt
              exists since season one, and has been declined
              many times : from Scottish wool to bleached
              fabrics and Japanese lurex cotton, the shirt skirt
              had also been fringed and embroidered, in both
              short and long versions; The British singer Rita
              Ora is a real fan of this item.
            </div>
            <button className="tip-close-button" onClick={() => onHandleTip("shorts", "none")}><img src="/btn-close.svg" alt="close button" /></button>
          </div>
          <div id="tip-card-boots" className="tip-card">
            <div className="tip-title">TRAINING BOOTS</div>
            <div className="tip-category">
              <div className="tip-category-title">Item Name:</div>
              <div className="tip-category-text">TRAINING BOOTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Designed by:</div>
              <div className="tip-category-text">FAITH CONNEXION TRIBE</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Collection:</div>
              <div className="tip-category-text">PRE FALL 2021</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Item Type:</div>
              <div className="tip-category-text">SHORTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Materials:</div>
              <div className="tip-category-text">DENIM, COTON, WOOL</div>
            </div>
            <br />
            <div className="tip-content">
              The Painter Shorts is pure and original creation
              from the Faith Connexion tribe ! This iconic skirt
              exists since season one, and has been declined
              many times : from Scottish wool to bleached
              fabrics and Japanese lurex cotton, the shirt skirt
              had also been fringed and embroidered, in both
              short and long versions; The British singer Rita
              Ora is a real fan of this item.
            </div>
            <button className="tip-close-button" onClick={() => onHandleTip("boots", "none")}><img src="/btn-close.svg" alt="close button" /></button>
          </div>
          <button id="page-toggle-button" onClick={onClickBodyToggle}><img src={bodyOpen ? "/icon-toggle-close.svg" : "/icon-toggle-open.svg"} alt="toggle icon" /></button>
          <div id="body-container" className="body-container" style={{ width: bodywidth }}>
            <Navbar width={bodywidth} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/whitepaper">
                <Whitepaper />
              </Route>
              <Route path="/reserve">
                <Reserve />
              </Route>
              <Route path="/claim">
                <Claim />
              </Route>
            </Switch>
            <Footer />
          </div>
          <button id="nav-modal-toggle-button" onClick={onClickModalToggle}><img src={navModalOpen ? "/btn-close.svg" : "/icon-toggle-nav-modal-open.svg"} alt="toggle modal icon" /></button>
          <div id="nav-modal">
            <button className="button-blue-border width-100">CONNECT A WALLET</button>
            <div className="nav-text">HOME</div>
            <div className="nav-text">HOW IT WORKS</div>
            <div className="nav-text">WHITEPAPER</div>
            <div className="nav-text">RESERVE</div>
            <div className="nav-text">CLAIM</div>
            <div className="paris-menu-title">PARIS SHOWCASE</div>
            <div className="paris-menu-text">PROPOSALS</div>
            <div className="paris-menu-text">GOVERNANCE</div>
            <div className="paris-menu-text">SHOP</div>
            <div className="paris-menu-text">HELP</div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;