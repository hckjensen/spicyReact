import styles from './Favorite.module.scss';
import PropTypes from 'prop-types';
import Chili1 from "../../../assets/images/Product/Choose-01.jpg";
import Chili2 from "../../../assets/images/Product/Choose-02.jpg";
import Chili3 from "../../../assets/images/Product/Choose-03.jpg";
import Chili4 from "../../../assets/images/Product/Choose-04.jpg";
import Chili5 from "../../../assets/images/Product/Choose-05.jpg";





const Favorite = ({heading}) => {
    
    const bigImage = Chili1;
    
    const images = [
        // Add your image URLs here
        Chili2,
        Chili3,
        Chili4,
        Chili5
    ];

    return (
        <div className={styles.gallery}>
            <h3>{heading}</h3>
            <div className={styles.container}>
                <div className={styles.bigImage}>
                    <img src={bigImage} alt="" />
                </div>
                <div className={styles.grid}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
                </div>
            </div>
            
        </div>
    );
};

Favorite.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default Favorite;