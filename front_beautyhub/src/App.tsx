import Header from './components/HeaderComp/Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/FooterComp/Footer'
import { NotFound } from './pages/NotFound/NotFound'
//import {Provider} from "react-redux";

import MainPage from './pages/mainPage/mainPage'
import LoginPage from './pages/inlet/inlet'
import RegisterPage from './pages/register/register'
import ProfilePage from './pages/profile/profile'
import UslugiPage from './pages/listing uslugi/usligi'
import FavoritePage from './pages/favorite/favorite'
import SettingsPage from './pages/settings/settings'


const AppContent: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route>
<<<<<<< HEAD
          <Route path="main" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/masters" element={<MastersPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
          {/*не забыть доработать на сервере. нужно возвращение инекс штмл, т.к. при переходе на несущ. адрес будет серверная ошибка*/}
=======
          <Route path="main" element={<MainPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="/uslugi" element={<UslugiPage/>} />
          <Route path="/favorite" element={<FavoritePage/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
>>>>>>> parent of 01b4828 (Merge branch 'feature/frontend' of https://github.com/supxn/beautyhub_v2)
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

function App() {
  return (
    <div className="app">
      <AppContent />
    </div>
  );
}

export default App
