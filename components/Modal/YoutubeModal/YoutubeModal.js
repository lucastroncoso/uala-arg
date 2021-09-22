import React, { useCallback, useRef, useEffect } from 'react';
import styles from './YoutubeModal.module.scss';
import Modal from '../Modal';
import { useAppContext } from '../../../store/context';
import YoutubeVideo from '../../YoutubeVideoIframe/YoutubeVideoIframe';

const YoutubeModal = () => {
  const { youtubeModalVideoId, setYoutubeModalVideoId } = useAppContext();
  const popupRef = useRef(null);
  console.log(youtubeModalVideoId);
  const handleModalCloseClick = useCallback(() => {
    setYoutubeModalVideoId('');
  }, [setYoutubeModalVideoId]);

  return (
    <Modal
      isYoutubePopup={true}
      open={!!youtubeModalVideoId}
      onClickOutside={handleModalCloseClick}
      popupRef={popupRef}
    >
      <div className={styles.youtubeModalContentWrapper} ref={popupRef}>
        <YoutubeVideo videoId={youtubeModalVideoId} />
        <button className={styles.closeButton} onClick={handleModalCloseClick} />
      </div>
    </Modal>
  );
};

export default YoutubeModal;
