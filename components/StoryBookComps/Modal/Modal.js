import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const Modal = ({ children, popupRef, onClickOutside, isYoutubePopup = false, open = false }) => {
  useEffect(() => {
    const clickListener = (evt) => {
      if (evt.target === popupRef.current.children) {
        // Box itself was clicked, do not close
        return;
      } else {
        let checkEl = evt.target;
        if (checkEl.parentElement) {
          while (checkEl.parentElement) {
            checkEl = checkEl.parentElement;
            if (checkEl === popupRef.current.children[0]) {
              // clicked inside the box
              return;
            }
          }
        }
        // If we clicked anywhere outside of the box, we close
        onClickOutside.call(self);
      }
    };

    if (open) {
      document.addEventListener('click', clickListener, true);
    } else {
      document.removeEventListener('click', clickListener, true);
    }
    return () => {
      document.removeEventListener('click', clickListener, true);
    };
  }, [popupRef, onClickOutside, open]);

  // open-close transition
  useEffect(() => {
    open
      ? (popupRef.current.style.pointerEvents = 'auto')
      : (popupRef.current.style.pointerEvents = 'none');

    if (!open) {
      gsap.set(popupRef.current, { autoAlpha: 0, y: -20 });
    } else {
      gsap.to(popupRef.current, {
        duration: 0.3,
        delay: 0.1,
        autoAlpha: 1,
        y: 0,
      });
    }
  }, [open]);

  return (
    <div ref={popupRef} className={styles.popupBackdrop}>
      <div className={`${isYoutubePopup ? styles.youtubePopupWrapper : styles.popupWrapper}`}>
        <div className={styles.modalContentWrapper}>
          {children}
          <button
            className={styles.closeButton}
            aria-label="Cerrar"
            onClick={onClickOutside}
          />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  popupRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  onClickOutside: PropTypes.func,
  onCloseButtonClick: PropTypes.func,
  isYoutubePopup: PropTypes.bool,
  open: PropTypes.bool,
};

export default Modal;
