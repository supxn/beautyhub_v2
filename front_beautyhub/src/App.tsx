import Header from './components/CommonComp/HeaderComp/Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/CommonComp/FooterComp/Footer'
//import {Provider} from "react-redux";

import MainPage from './pages/mainPage/mainPage'
import LoginPage from './pages/inlet/inlet'
import RegisterPage from './pages/register/register'
import ProfilePage from './pages/profile/profile'
import CategoriesPage from './pages/listing categories/categories'
import MastersPage from './pages/listing masters/masters'
import FavoritePage from './pages/favorite/favorite'
import SettingsPage from './pages/settings/settings'
import PrivacyPolicyPage from './pages/privacyPolicy/privacyPolicy'


const AppContent: React.FC = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route>
          <Route path="main" element={<MainPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="/categories" element={<CategoriesPage/>} />
          <Route path="/masters" element={<MastersPage/>} />
          <Route path="/favorite" element={<FavoritePage/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

function App() {
  return (
    <div className="app">
        <AppContent/>
    </div>
  );
}

export default App
