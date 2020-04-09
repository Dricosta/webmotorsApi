import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const CustomSelect = styled.div`
  @media (max-width: 768px) {
    border-top-left-radius: ${variables.borderRadius4};
    border-bottom-left-radius: ${variables.borderRadius4};
    margin-bottom: 15px;
    margin-top: 0px;
  }

  width: 100%;
  height: 40px;
  border: 1px solid ${variables.lightGrey};
  border-radius: ${variables.borderRadius4};
  border-top-left-radius: ${(props) =>
    props.borderNoneLeftRadius ? `0px` : `${variables.borderRadius4}`};
  border-bottom-left-radius: ${(props) =>
    props.borderNoneLeftRadius ? `0px` : `${variables.borderRadius4}`};
  background: ${(props) => (props.disabled ? '#ddd' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? '0.7' : '1')};
  margin-top: ${(props) => props.mt20 && '20px'};
  span {
    font-weight: 700;
  }

  span:nth-child(1) {
    margin-right: 5px;
    margin-left: 10px;
    color: ${variables.darkGrey};
  }

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: ${(props) => (props.ArrowUp ? '18px' : '14px')};
    right: 15px;
    display: block;
    transform: ${(props) => (props.ArrowUp ? 'rotate(225deg);' : 'rotate(45deg)')};
    transition: transform 0.3s ease-in-out;
    border-bottom: 2px solid ${variables.darkGrey};
    border-right: 2px solid ${variables.darkGrey};
  }
`;

export const Select = styled.ul`
  width: 100%;
  height: ${(props) => (props.open ? '150px' : '0px')};
  max-height: 150px;
  transition: height 0.2s ease-in-out;
  position: absolute;
  z-index: ${(props) => (props.overlap ? '999' : '99')};
  top: 100%;
  background: ${variables.white};
  overflow-y: scroll;
  border-bottom-left-radius: ${variables.borderRadius4};
  border-bottom-right-radius: ${variables.borderRadius4};
  border: ${(props) => (props.open ? `1px solid ${variables.lightGrey}` : 'none')};
  display: block;
  cursor: pointer;
  color: ${variables.darkGrey};
  font-weight: 500;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const SelectOption = styled.li`
  list-style: none;
  padding: 4px 10px;
  width: 100%;

  &:hover {
    background: ${variables.darkRed};
    color: ${variables.white};
  }
`;
