import ACardIcon from '../A-CardIcon/ACardIcon';
import styles from './StepsCard.module.scss';


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

export default StepsCard;
