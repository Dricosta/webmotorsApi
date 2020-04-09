import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const CardVehicle = styled.div`
  background: ${variables.white};
  border-radius: ${variables.borderRadius4};
  box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;
  span {
    display: block;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CardVehicleHeader = styled.div`
  height: 185px;
  overflow: hidden;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 0px;
  }
`;

export const CardVehicleContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 180px;
`;

export const CardVehicleGroup = styled.div`
  display: flex;
  flex-direction: column;

  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    span {
      color: rgb(139, 140, 153);
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const CardVehicleModel = styled.span`
  font-size: 14px;
  color: rgb(46, 46, 55);
  font-weight: 700;
  margin-bottom: 5px;
`;

export const CardVehicleVersion = styled.span`
  font-size: 14px;
  color: rgb(139, 140, 153);
  font-weight: 700;
`;

export const CardVehiclePrice = styled.span`
  color: #686976;
  font-size: 22px;
  font-weight: 700;
`;

export const CardVehicleYear = styled.span``;

export const CardVehicleKm = styled.span``;

export const CardVehicleFooter = styled.div`
  border-top: 1px solid rgb(236, 237, 242);
  padding: 10px 15px;
`;

export const CardVehicleColor = styled.span`
  display: flex !important;
  align-items: center;
  color: ${variables.darkRed};
  font-weight: 700;
  svg {
    display: inline-block;
    color: ${variables.lightGreen};
    font-size: 22px;
    margin-right: 5px;
  }
`;
