import styles from './Logo.module.css';
import logo from '../assets/logo.svg';

const Logo = () => <img className={styles.logo} src={logo} alt="logo" />;

export default Logo;