import React from 'react';
import './styles/index.css';
import Logo from '../../../images/ENEELogo.png';
import InputSearch from './components/inputSearch';
import SocialLogo from './components/socialLogo';

const Header = () => {
  return (
    <div className="ContainerMainWidth">
      <header className="ContainerMainHeader">
        <div className="ContainerSocial">
        	<SocialLogo />
        </div>

        <div className="flex items-center justify-center w-screen">
          <img className="h-10" src={Logo} alt="" />
        </div>
        <InputSearch />
      </header>
    </div>
  );
};

export default Header;
