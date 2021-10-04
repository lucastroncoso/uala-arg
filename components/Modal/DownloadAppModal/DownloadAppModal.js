import React, { useCallback, useRef, useEffect } from 'react';
import styles from './DownloadAppModal.module.scss';
import Modal from '../Modal';
import Image from 'next/image';
import { useAppContext } from '../../../store/context';
import QR_IMAGE from '/public/assets/images/qr_mx.png';

const DownloadAppModal = ({ content }) => {
  const { downloadModalActiveState, setDownloadModalActiveState } = useAppContext();
  const popupRef = useRef(null);

  const handleModalCloseClick = useCallback(() => {
    downloadModalActiveState && setDownloadModalActiveState(false);
  }, [downloadModalActiveState, setDownloadModalActiveState]);

  return (
    <Modal
      open={downloadModalActiveState}
      onClickOutside={handleModalCloseClick}
      popupRef={popupRef}
    >
      <div className={styles.modalContentWrapper}>
        <Image src={QR_IMAGE} width={150} height={150} className={styles.qr} />
        <div className={`test, ${styles.copyWrapper}`}>
          <p className={styles.title}>{content.title}</p>
          <p className={styles.paragraph}>{content.paragraph}</p>
        </div>
        <button
          className={styles.closeButton}
          aria-label={content.close}
          onClick={handleModalCloseClick}
        />
      </div>
    </Modal>
  );
};

export default DownloadAppModal;
