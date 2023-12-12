import styles from './VerticalLogo.module.css';
import verticalLogo from '../assets/vertical-logo.svg';

const VerticalLogo = () => <img src={verticalLogo} alt="logo" className={styles.verticalLogo} />;

export default VerticalLogo;
