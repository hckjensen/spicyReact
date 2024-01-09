import styles from './Gallery.module.scss';
import PropTypes from 'prop-types';
import Chili1 from "../../../assets/images/Product/Chili-01.jpg";
import Chili2 from "../../../assets/images/Product/Chili-02.jpg";
import Chili3 from "../../../assets/images/Product/Chili-03.jpg";
import Chili4 from "../../../assets/images/Product/Chili-04.jpg";
import Chili5 from "../../../assets/images/Product/Chili-05.jpg"
import Chili6 from "../../../assets/images/Product/Chili-06.jpg";



const Gallery = ({heading}) => {
    const images = [
        // Add your image URLs here
        Chili1,
        Chili2,
        Chili3,
        Chili4,
        Chili5,
        Chili6
    ];

    return (
        <div className={styles.gallery}>
            <h3>{heading}</h3>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

Gallery.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default Gallery;

