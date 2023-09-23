import "./App.css";
import "./styles/root.css";
import "./styles/navbar.css";
import "./styles/glowandstars.css";
import "./styles/landingpage.css";
import "./styles/footer.css";
import "./styles/media-query.css";
import "./styles/contactus.css";
import "./styles/register.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import ContactPage from "./Pages/Contact";
import RegisterPage from "./Pages/Register";
import NavWrapper from "./utils/NavWrapper";
import AppContext from "./Context";
import CustomCursor from "./utils/CustomCursor";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <AppContext>
          <CustomCursor>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<NavWrapper />}>
                  <Route index element={<LandingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CustomCursor>
        </AppContext>
      </div>
    </div>
  );
}

export default App;
