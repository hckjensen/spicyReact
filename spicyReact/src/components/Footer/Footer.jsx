import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import fb from '../../assets/images/Some-Facebook.png';
import tw from '../../assets/images/Some-Twitter.png';
import yt from '../../assets/images/Some-Youtube.png';

const Footer = ({ heading, heading2, contactInfo }) => { 

    const images = [fb, tw, yt];


    return (
        <div className={styles.footer}>
            <section className={styles.contact}>
                <h3>{heading}</h3>
                <ul className={styles.contactInfo}>
                    <li>{contactInfo.name}</li>
                    <li>{contactInfo.address.line1}</li>
                    <li>{contactInfo.address.line2}</li>
                    <li>{contactInfo.email}</li>
                    <li>{contactInfo.phone}</li>
                </ul>
                <div className={styles.followContainer}>
                    <div className={styles.circles}>
                        {images.map((image, index) => (
                        <span 
                            key={index} 
                            className={styles.circle} 
                            style={{
                                backgroundImage: `url(${image})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center'
                                }}
                        />
        ))}
    </div>
</div>
            </section>
            <section className={styles.map}>
                <h3>{heading2}</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="600"
                    height="450"
                    style={{border: "0"}}
                    allowFullScreen=""
                    loading="lazy"

                ></iframe>
             </section>
        </div>
    )
};



Footer.propTypes = {
    contactInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.shape({
          line1: PropTypes.string.isRequired,
          line2: PropTypes.string.isRequired,
        }).isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      }).isRequired,
    heading: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
};

export default Footer;