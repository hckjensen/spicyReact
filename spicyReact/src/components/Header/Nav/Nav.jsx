import styles from './Nav.module.scss';
import PropTypes from 'prop-types';

const Nav = ({items}) => {
    return(
        <>
            <ul className={styles.navbar}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Nav