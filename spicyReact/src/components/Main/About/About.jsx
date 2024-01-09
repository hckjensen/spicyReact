import styles from './About.module.scss';
import PropTypes from 'prop-types';



const AboutSection = ({ text, heading }) => {
    return(
        <>
            <div className={styles.section}>
                <h4>{heading}</h4>
                {text.items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <p className={styles.readMore}>Læs Mere:</p>
                
            </div>
        
        
        </>
    )    
};

AboutSection.propTypes = {
    text: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    heading: PropTypes.string.isRequired,
 }


const About = ({ heading }) => {

    const sectionText = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt molestias ducimus eveniet aut, accusantium quia sint est, inventore, voluptate suscipit! Neque fugit quis error natus asperiores laudantium, consequuntur labore.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt molestias ducimus eveniet aut, accusantium quia sint est, inventore, voluptate suscipit! Neque fugit quis error natus asperiores laudantium, consequuntur labore.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt molestias ducimus eveniet aut, accusantium quia sint est, inventore, voluptate suscipit! Neque fugit quis error natus asperiores laudantium, consequuntur labore."]

    return(
        <>
            <div className={styles.about}>
                <h3>{heading}</h3>
                <div className={styles.container}>
                    <AboutSection heading="Konceptet Spicy" text={{items: sectionText}}/>
                    <AboutSection heading="Produkterne" text={{items: sectionText}}/>
                </div>
            </div>
        
        
        </>
    )    
};

About.propTypes = {
    heading: PropTypes.string.isRequired,
    
};
 


 export default About;