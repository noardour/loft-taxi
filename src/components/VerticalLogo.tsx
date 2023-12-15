import styles from './VerticalLogo.module.css';
import verticalLogo from '../assets/vertical-logo.svg';
import { FC } from 'react';

const VerticalLogo: FC = () => <img src={verticalLogo} alt="logo" className={styles.verticalLogo} />;

export default VerticalLogo;
