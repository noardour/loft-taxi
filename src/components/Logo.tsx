import styles from './Logo.module.css';
import logo from '../assets/logo.svg';
import { FC } from 'react';

const Logo: FC = () => <img className={styles.logo} src={logo} alt="logo" data-testid="logo" />;

export default Logo;
