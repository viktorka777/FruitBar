import React from 'react';
import kyivstarLogo from 'C:/FruitBar/fruitbar/src/components/assets/kyivstar_logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="welcome-message">
        <p>Ласкаво просимо на наш сайт з продажу плодових саджанців!</p>
      </div>
      <h1>Купити саджанці плодових дерев вроздріб та гуртом</h1>
      <div className="contacts">
        <img src={kyivstarLogo} alt="Kyivstar" className="kyivstar-logo" />
        <p>+380969430203</p>
      </div>
    </header>
  );
}

export default Header;

