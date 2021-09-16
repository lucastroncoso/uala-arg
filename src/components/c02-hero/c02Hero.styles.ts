import styled from 'styled-components';

type HeroSection = {
  backgroundImage: string;
};

export const styledSection = styled.section<HeroSection>`
  padding-bottom: 42%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
`;

export const styledContent = styled.div`
  position: absolute;
`;
