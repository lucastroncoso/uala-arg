import PropTypes from 'prop-types';
import Container from '../container';
import parser from 'bbcode-to-react';
import Button from "./Button-story"
import Modal from "./Modal/Modal"
import { useState, useRef } from "react";

export default function Hero({
  titleColor,
  containerStyles,
  section,
  title,
  subtitle,
  img,
  reversed,
  callToActionText, callToActionLink,
  secondaryLinkText,
  secondaryLinkUrl,
  callToActionModal,
  ...props
}) {

 const [ openModal, setOpenModal ] = useState(false);
    const popupRef = useRef(null);

  return (
    <Container className={containerStyles || 'bg-coral-wave md:min-h-screen'}>
      <div className="grid lg:mb-20 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2">
        <div
          className={`flex flex-wrap content-center mb-12  ${
            reversed ? 'order-2 ml-10' : 'order-1'
          } md:mt-0 mt-8`}
        >
          <div className="w-full">
            <p className="text-xl w-5/6 ">
              <div className="">{section? section: ""}</div>
            </p>
          </div>
          <div className="w-full">
            <h1 className={` text-${titleColor?titleColor:"blue-250"} text-4xl font-semibold leading-snug md:text-5xl  md:w-5/6 mt-4`}>
              <div className="">{title}</div>
            </h1>
          </div>
          <div className="w-full mt-4">
            <div className="md:w-5/6 subtitle-1 ">{parser.toReact(subtitle)}</div>
          </div>
                   {
                      (!!callToActionText || !!secondaryLinkText) &&
                        <div className="flex flex-wrap items-center w-full mt-12">
                            {
                                !!callToActionText &&
                                <div className="mr-12">
                                    <Button 
                                        href={callToActionLink}
                                        text={callToActionText}
                                        modal={callToActionModal}
                                        onClick={() => setOpenModal(true)}
                                    />
                                    <Modal
                                        open={openModal}
                                        onClickOutside={() => setOpenModal(false)}
                                        popupRef={popupRef}
                                        >
                                        
                                    </Modal>
                                </div>
                            }
                            {
                                !!secondaryLinkText &&
                                <div className="">
                                    <i className="fas fa-play-circle text-blue-250 m-4 "></i><a href={secondaryLinkUrl} rel="noreferrer" className="link cursor-pointer">{secondaryLinkText}</a>
                                </div>
                            }
                        </div>
                    }
        </div>
        <div
          className={`flex items-center justify-center  ${
            reversed ? 'order-1' : 'order-2'
          }`}
        >
          <div className="rounded-3xl overflow-hidden flex">{img}</div>
        </div>
      </div>
    </Container>
  );
}

Hero.propTypes = {
   callToActionText: PropTypes.string, callToActionLink: PropTypes.string,
  secondaryLinkText: PropTypes.string,
  secondaryLinkUrl: PropTypes.string,
  titleColor: PropTypes.string,
  /**
   * Container styles
   */
  containerStyles: PropTypes.string,
  /**
   * Name of the section
   */
  section: PropTypes.string,
  /**
   * Name of the page
   */
  title: PropTypes.string,
  /**
   * Subtitle
   */
  subtitle: PropTypes.string,
  /**
   * Image
   */
  img: PropTypes.element,
  /**
   * Is the image first on mobile?
   */
  reversed: PropTypes.bool,
};
