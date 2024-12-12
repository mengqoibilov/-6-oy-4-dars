import React, { useState } from "react";
import "./navbar.css";
import rasm1 from "./img/rasm1.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(true); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [isProfileListOpen, setIsProfileListOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); 
  };

  const toggleProfileList = () => {
    setIsProfileListOpen(!isProfileListOpen);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo" onClick={toggleMenu}>
          <div className="container">
            <input type="text" placeholder="Ara" className="search" />
          </div>
          <img src={rasm1} alt="Logo" className="logo-secondary" />
        </div>

        {isMenuOpen && (
          <ul className="menu">
            <li>Anasayfa</li>
            <li>Keşfet</li>
            <li>Abonelikler</li>
            <li>Kitaplık</li>
            <li>Geçmiş</li>
            <li>Videolarınız</li>
            <li>Daha sonra izle</li>
            <li>Beğendiğim videolar</li>
            <li>Daha fazla göster</li>
            <li>ABONELİKLER</li>
            <li>The game</li>
            <li>Lean Yo</li>
            <li>Best Kuaför</li>
            <li>Meyau Seu</li>
            <li>Discover Design</li>
            <li>Build Game</li>
            <li>Vlogger Man</li>
            <li>Daha fazla göster</li>
            <li>YOUTUBE’DEN DAHA FAZLA İÇERİK</li>
            <li>Youtube Premium</li>
          </ul>
        )}
      </div>

      <div className="main">
        <div className="navbar">
          <button className="nav-link active">Kino</button>
          <button className="nav-link">Comedy</button>
          <button className="nav-link">Mix</button>
          <button className="nav-link">Cartoons</button>
          <button className="nav-link">Muzik</button>
          <button className="nav-link">Futbol</button>
          <button className="nav-link">El sanatları</button>
          <button className="nav-link">UX Tasarım</button>
          <button className="nav-link">Animasyon</button>
          <button className="nav-link">Görsel sanatlar</button>
          <button className="nav-link">Son yüklenenler</button>
        </div>

        <div className="content">
          <div className="card">
            <button className="video-toggle" onClick={toggleVideo}>
              {isVideoOpen ? "Videoni Yopish" : "Videoni Ko'rsatish"}
            </button>
            {isVideoOpen && (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video 1"
                className="card-image"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <div className="card-text">
              <h3>Lorem Ipsum is simply dummy text of the printing</h3>
              <p>
                LOREM IPSUM <br />
                156 Görüntüleme · 4 Dakika önce
              </p>
            </div>
          </div>

        
          <button className="popup-toggle" onClick={togglePopup}>
            {isPopupOpen ? "Yopish" : "Profilni Ko'rsat"}
          </button>

          {isPopupOpen && (
            <div className="popup-menu">
              <h3 onClick={toggleProfileList}>Azizbek Mengobilov</h3>
              <p>mengobilovazizbek2@gmail.com</p>
              {isProfileListOpen && (
                <ul>
                  <li>Аккаунт Google</li>
                  <li>Сменить аккаунт</li>
                  <li>Выйти</li>
                  <li>Творческая студия YouTube</li>
                  <li>Покупки и платные подписки</li>
                  <li>Ваши данные на YouTube</li>
                  <li>Настройки</li>
                  <li>Справка</li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;




