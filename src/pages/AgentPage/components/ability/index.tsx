import DropShadow from 'react-native-drop-shadow';
import {Image} from 'react-native';

import * as S from './style';

const AbilityCard = ({abilities}: any) => {
  if (!abilities.displayIcon) {
    return null;
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <DropShadow
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 3,
      }}>
      <S.AbilityContainer>
        <Image
          source={{uri: abilities.displayIcon}}
          style={{height: 100, width: 100}}
        />

        <S.TextContainer>
          <S.AbilityTitle>{abilities.displayName}</S.AbilityTitle>

          <S.AbilityDescription>{abilities.description}</S.AbilityDescription>
        </S.TextContainer>
      </S.AbilityContainer>
    </DropShadow>
  );
};

export default AbilityCard;
