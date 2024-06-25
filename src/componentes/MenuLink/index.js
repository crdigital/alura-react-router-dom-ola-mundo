import styles from './MenuLink.module.css';
import { Link, useLocation } from 'react-router-dom';

const MenuLink = ({children, to}) => {

    const localizacao = useLocation();

    return(
        <Link to={to} className={`
            ${styles.link} 
            ${localizacao.pathname === to ? styles['link-destacado'] : ''}
            `}>
            {children}
        </Link>  
    );
}

export  {MenuLink };