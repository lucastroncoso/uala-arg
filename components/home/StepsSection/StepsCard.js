import ACardIcon from '../A-CardIcon/ACardIcon';
import styles from './StepsCard.module.scss';
import PropTypes from 'prop-types';



const StepsCard = ({ content }) => {
    return (
      <>
        <li className={styles.stepsCard}>
          <span className={styles.cardDot} />
          <div className={styles.cardWrapper} data-animation="list-item">
            <ACardIcon iconName={content.icon} className={styles.icon} />
            <h5 className={styles.number}>0{content.index + 1}.</h5>
            <p>{content.copy}</p>
          </div>
        </li>
      </>
    );
};


StepsCard.propTypes = {
  
  content: PropTypes.exact({
    /**
   * Text
   */
   copy: PropTypes.string,
   /**
    * Name of the icon
    */
    icon: PropTypes.string,
   /**
    * Index of the step
    */
    index: PropTypes.number,
  }),
};

StepsCard.defaultProps = {
  copy: "Descargá la app desde Play Store o App Store en tu celular.",
  icon: "pasos-envio-1",
  index: 0
};


export default StepsCard;
