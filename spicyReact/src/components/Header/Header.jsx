import Nav from './Nav/Nav';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';



const Header = ({ logoUrl}) => {
    const navItems = ["Start", "Om Spicy", "Galleri", "Favorit", "Kontakt"]

    return(
        <>
            <div className={styles.header}>
                
                <img className={styles.logo} src={logoUrl} alt="" />
                <Nav items={navItems}/>
            </div>
        
        
        </>
    )
}


Header.propTypes = {
    logoUrl: PropTypes.string.isRequired

};

export default Header