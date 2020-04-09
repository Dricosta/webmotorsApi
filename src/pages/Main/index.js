import React from 'react';
import * as S from './styles';
import Card from '../../components/Card';
import logo from '../../assets/images/webmotors-logo.png';

function Main() {
  return (
    <S.Container>
      <img src={logo} alt="logo" />
      <Card />
    </S.Container>
  );
}

export default Main;
