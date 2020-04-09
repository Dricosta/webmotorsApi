import styled from 'styled-components';
import React from 'react';
import * as variables from '../../styles/variables';

export const Card = styled.div``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const GroupButton = styled.div`
  display: flex;
`;

export const ButtonSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  min-width: 180px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  @media (max-width: 768px) {
    min-width: 50%;
    margin-top: 20px;
  }

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -1px;
    height: 3px;
    background: transparent;
    transition: background 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      background: ${variables.darkRed};
    }
    .btn-container--text {
      span:nth-child(2) {
        color: ${variables.darkRed};
      }
    }
  }

  .btn-container--icon {
    margin-right: 20px;
    margin-top: auto;
  }
  .btn-container--text {
    display: flex;
    flex-flow: column wrap;
    span {
      color: ${variables.lightGrey};
      display: block;
      line-height: 24px;
    }
    span:nth-child(2) {
      font-size: 24px;
      color: ${variables.darkGrey};
    }
  }
`;

export const ButtonSellCar = styled.button`
  text-align: center;
  padding: 10px 40px;
  align-self: flex-start;
  color: ${variables.lightGreen};
  background: transparent;
  font-weight: 700;
  height: min-content;
  border: 2px solid ${variables.lightGreen};
  border-radius: ${variables.borderRadius4};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${variables.lightGreen};
    color: ${variables.white};
  }
`;

export const CardContent = styled.div`
  padding: 40px 20px;
  background: ${variables.white};
  border: 1px solid #ddd;
`;

export const CardContentGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardContentLeft = styled.div``;

export const CardContentRight = styled.div``;

export const GroupCheckbox = styled.div`
  label {
    cursor: pointer;
    color: ${variables.darkGrey};
    margin-right: 30px;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? `${variables.darkRed}` : 'white')};
  border: 1px solid ${(props) => (props.checked ? 'transparent' : '#ddd')};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  margin-right: 10px;

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  } */

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export const GroupLeftTop = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CustomInput = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    border-radius: ${variables.borderRadius4};
  }

  svg {
    position: absolute;
    top: 10px;
    color: ${variables.lightGrey};
  }

  .map {
    left: 10px;
  }

  .clean {
    right: 10px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${variables.darkRed};
    }
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${variables.lightGrey};
    padding: 0px 40px;

    @media (max-width: 768px) {
      border-radius: ${variables.borderRadius4};
    }
  }
`;

export const GroupTwoSelect = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-column-gap: 4%;
  margin-top: ${(props) => (props.mt20 ? '20px' : '42px')};

  @media (max-width: 768px) {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .searchAdvanced {
    color: ${variables.darkRed};
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    svg {
      margin-right: 5px;
    }

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  .cleanFilter {
    color: ${variables.darkGrey};
    margin-right: 30px;
    cursor: pointer;
    display: inline-block;
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  .buttonSearch {
    background: ${variables.darkRed};
    color: ${variables.white};
    padding: 10px 100px;
    font-size: 18px;
    font-weight: 700;
    border-radius: ${variables.borderRadius4};
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
    display: inline-block;
    &:hover {
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      display: block;
      padding: 10px;
      text-align: center;
    }
  }
`;

export const CardGroupVehicle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 30px;

  margin-top: 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
