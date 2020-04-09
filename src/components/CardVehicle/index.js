import React from 'react';
import { IoIosColorPalette } from 'react-icons/io';
import * as S from './styles';

export default function CardVehicle({
  imageCar,
  model,
  version,
  price,
  year,
  km,
  color,
}) {
  return (
    <S.CardVehicle>
      <S.CardVehicleHeader>
        <img src={imageCar} alt="vehicle" />
      </S.CardVehicleHeader>
      <S.CardVehicleContent>
        <S.CardVehicleGroup>
          <S.CardVehicleModel>{model}</S.CardVehicleModel>
          <S.CardVehicleVersion>{version}</S.CardVehicleVersion>
        </S.CardVehicleGroup>

        <S.CardVehicleGroup>
          <S.CardVehicleGroup dflexColumn>
            <S.CardVehiclePrice>{price}</S.CardVehiclePrice>
            <div>
              <S.CardVehicleYear>{year}</S.CardVehicleYear>
              <S.CardVehicleKm>{`${km} km`}</S.CardVehicleKm>
            </div>
          </S.CardVehicleGroup>
        </S.CardVehicleGroup>
      </S.CardVehicleContent>

      <S.CardVehicleFooter>
        <S.CardVehicleColor>
          <IoIosColorPalette />
          {color}
        </S.CardVehicleColor>
      </S.CardVehicleFooter>
    </S.CardVehicle>
  );
}
