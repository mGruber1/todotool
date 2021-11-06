import Styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Menu from './Menu/Menu';
import Profile from './Profile/Profile'

const Header = () => {
  return (
    <div className={Styles.header}>
      <Logo></Logo>
      <Menu></Menu>
      <Profile></Profile>
    </div>
  );
};

export default Header;
