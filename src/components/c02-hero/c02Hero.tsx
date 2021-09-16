import type { FunctionComponent } from 'react';
import CONTENT from '../../data/content/ar';
import * as S from './c02Hero.styles';

const C02Hero: FunctionComponent = () => {
  return (
    <S.styledSection backgroundImage={CONTENT.hero.background}>
      <S.styledContent>
        <p>{CONTENT.hero.eyebrow}</p>
        <h1>{CONTENT.hero.title}</h1>
        <p>{CONTENT.hero.paragraph}</p>
        <button type="button">{CONTENT.hero.buttonCopy}</button>
      </S.styledContent>
    </S.styledSection>
  );
};

export default C02Hero;
