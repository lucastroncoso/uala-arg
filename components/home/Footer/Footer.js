import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import UALA_ISO from '../../../public/assets/logos/uala-logo-wave.png';
import APP_STORE from '../../../public/assets/images/app_store.png';
import GOOGLE_PLAY from '../../../public/assets/images/google_play.png';
import SocialIcons from '../SocialIcons/SocialIcons';
import FooterBanner from '../FooterBanner/FooterBanner';
import Swal from 'sweetalert2';

const Footer = ({ content, banner }) => {
  const handlePopUp = () => {
    Swal.fire({
      showCloseButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3E6BFD',
      customClass: { popup: 'rounded-2xl', closeButton: 'focus:shadow-none', confirmButton: 'confirm-btn-popup' },
      html: `
                <div class='p-5 rounded-2xl' >
                    <p class='text-left text-sm text-gray-500 mb-8'>
                    La Ley N° 2.244 establece que las personas físicas o jurídicas que comercialicen, o presten servicios a consumidores y/o usuarios en el ámbito de la C.A.B.A. y posean página de internet, deberán agregar un enlace con la Dirección General de Defensa y Protección al Consumidor. 
                    </p>
                    <p class='text-left text-sm text-gray-500'>
                      <a class="link" target="_blank" href='https://www.buenosaires.gob.ar/defensaconsumidor/como-denunciar'>Podés realizar tu consulta aqui</a>
                    </p>
                    <p class='text-left text-sm text-gray-500'>
                      <a class="link" target="_blank" href='https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario'>Si te encontrás en otro lugar del país, podés consultar aquí</a>
                    </p>
                </div>
             `
      ,
    });
  };

  return (
    <>
      {banner && <FooterBanner content={content.footerBanner} />}
      <footer className={styles.footer}>
        <BlockWrapper customClass={[styles.footerWrapper]}>
          <div className={styles.about}>
            <Image src={UALA_ISO} width={54} height={30} />
            <h5 className={styles.title}>{content.title}</h5>
            <div className={styles.appStoreWrapper}>
              <a href={'https://uala.onelink.me/Mhko/b29136b4'}>
                <Image src={GOOGLE_PLAY} width={317} height={69} />
              </a>
              <a href={'https://uala.onelink.me/Mhko/1bc0d182'}>
                <Image src={APP_STORE} width={299} height={66} />
              </a>
            </div>
            <div className={styles.socialLinksWrapper}>
              {content.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={`social link ${link.name}`}
                  target="_blank"
                >
                  <SocialIcons icon={link.name} />
                </a>
              ))}
            </div>

            {content.contractsLegals.map((item, index) => {
              return (
                <div key={index} className={styles.link}>
                  {
                    item.url == "/defensa-consumidor"
                      ? <a
                        onClick={handlePopUp}
                        className="cursor-pointer" >
                        <span>{item.copy}</span>
                      </a>
                      : <a
                        {...item.hasTargetBlank ? { target: "_blank" } : null}
                        href={item.url}>
                        {item.copy}
                      </a>
                  }
                </div>
              )
            })}

          </div>
          <div>
            <ul className={styles.list}>
              <li className={styles.listTitle}>{content.functionabilities.title}</li>
              {content.functionabilities.submenu.map((link) => (
                <li key={link.copy} className={link.isNew ? styles.new : null}>
                  <a className={styles.link} href={link.url} {...link.hasTargetBlank ? { target: "_blank" } : null} >
                    {link.copy}
                  </a>
                  {link.isNew && <span>{link.isNew}</span>}
                </li>
              ))}
            </ul>

            {content.legalLinks &&
              <div className={styles.legalWrapper}>
                <a className={styles.listTitle} href={content.legalLinks.costs.url}>
                  {content.legalLinks.costs.copy}
                </a>
                <a className={styles.listTitle} href={content.legalLinks.legal.url}>
                  {content.legalLinks.legal.copy}
                </a>
                <a className={styles.listTitle} href={content.legalLinks.terms.url} target="_blank">
                  {content.legalLinks.terms.copy}
                </a>
              </div>
            }

          </div>
          <div>
            <ul className={styles.list}>
              <li className={styles.listTitle}>{content.about.title}</li>
              {content.about.submenu.map((link) => (
                <li key={link.copy}>
                  <a className={styles.link} href={link.url}>
                    {link.copy}
                  </a>
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              <li className={styles.listTitle}>{content.help.title}</li>
              {content.help.submenu.map((link) => (
                <li key={link.copy}>
                  <a className={styles.link} href={link.url}>
                    {link.copy}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {content.partnerLogo &&
            <img className={styles.partnerLogo} src={content.partnerLogo} />
          }

          {content.disclaimer &&
            <p
              className={styles.disclaimer}
              dangerouslySetInnerHTML={{ __html: content.disclaimer }}
            />
          }

          {content.footerEnd &&
            <div className={styles.footerEnd}>
              <p
                dangerouslySetInnerHTML={{ __html: content.footerEnd.ualaInfo }}
              />
              <div className={styles.logoWithText}>
                <img src={content.footerEnd.logo} />
                <p>{content.footerEnd.ualaAddress}</p>
              </div>
            </div>
          }
        </BlockWrapper>
      </footer>
    </>
  );
};

Footer.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Footer;
