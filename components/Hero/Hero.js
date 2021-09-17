import styles from './Hero.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Hero = ({ content }) => {
  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.paragraph}</p>
    </>
  );
};

Hero.propTypes = {
  content: PropTypes.object,
};

export default Hero;
