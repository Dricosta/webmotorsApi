import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import * as S from './styles';
import api from '../../services/api';
import * as CarInformationActions from '../../store/modules/carInformation/actions';

function Select({
  borderNoneLeftRadius,
  mt20,
  overlap,
  optionType,
  listMakes,
  listModels,
  listVersion,
  onSetModels,
  onSetVersion,
  listFind,
  onSetFindVehicle,
  vehicles,
}) {
  const [openSelect, setOpenSelect] = useState(false);
  const [itemSelected, setItemSelected] = useState('');
  const [optionName, setOptionName] = useState(null);
  const [optionsState, setOptionsState] = useState([]);
  const [disabledModel, setDisabledModel] = useState(true);
  const [disabledVersion, setDisabledVersion] = useState(true);

  useEffect(() => {
    const hasMakes = Object.keys(listFind).some((item) => item === 'Make');
    const hasModel = Object.keys(listFind).some((item) => item === 'Model');

    if (hasMakes) setDisabledModel(false);

    if (hasMakes && hasModel) setDisabledVersion(false);
  }, [listFind]);

  useEffect(() => {
    const optionsNames = [];
    const yearVehicle = [];
    const priceVehicle = [];
    switch (optionType) {
      case 'make':
        listMakes.map((make) => {
          return optionsNames.push(make);
        });

        setOptionsState(optionsNames);
        setOptionName('Marca:');
        break;
      case 'model':
        listModels.map((model) => {
          return optionsNames.push(model);
        });

        setOptionsState(optionsNames);
        setOptionName('Modelo:');
        break;
      case 'version':
        listVersion.map((version) => {
          return optionsNames.push(version);
        });

        setOptionsState(optionsNames);
        setOptionName('Versão:');
        break;
      case 'year':
        vehicles.map((vehicleAux) => {
          return yearVehicle.push({ Name: vehicleAux.yearFormatted });
        });

        setOptionsState(yearVehicle);
        setOptionName('Ano/modelo:');
        break;
      case 'price':
        vehicles.map((vehicleAux) => {
          return priceVehicle.push({ Name: vehicleAux.priceFormatted });
        });

        setOptionsState(priceVehicle);
        setOptionName('Faixa de preço:');
        break;
      case 'radius':
        setOptionName('Raio:');
        break;
      default:
        break;
    }
  }, [optionType, listMakes, listModels, listVersion, vehicles]);


  async function handleSelectedOption(id, name) {
    switch (optionType) {
      case 'make':
        const responseModels = await api.get(`/Model?MakeID=${id}`);

        const dataModel = responseModels.data;

        onSetFindVehicle({ ...listFind, Make: name });

        onSetModels(dataModel);
        setItemSelected(name);
        break;
      case 'model':
        const responseVersion = await api.get(`/Version?ModelID=${id}`);

        const dataVersion = responseVersion.data;

        onSetFindVehicle({ ...listFind, Model: name });

        onSetVersion(dataVersion);
        setItemSelected(name);
        break;
      case 'version':
        onSetFindVehicle({ ...listFind, Version: name });
        setItemSelected(name);
        break;

      case 'year':
        onSetFindVehicle({ ...listFind, Year: name });
        setItemSelected(name);
        break;

      case 'price':
        onSetFindVehicle({ ...listFind, Price: name });

        const priceNumber = name
          .split('R$')
          .map((item) => parseInt(item).toFixed(3).trim());

        setItemSelected(priceNumber[1]);
        break;

      case 'radius':
        setItemSelected('100km');
        break;
      default:
        return false;
    }
    return false;
  }

  function handleOpenSelect() {
    if (
      optionType === 'radius' ||
      (optionType === 'model' && disabledModel) ||
      (optionType === 'version' && disabledVersion)
    ) {
      return false;
    }

    return setOpenSelect(!openSelect);
  }

  function handleDisabledSelect() {
    if (optionType === 'model' && disabledModel) {
      return true;
    }
    if (optionType === 'version' && disabledVersion) {
      return true;
    }
    return false;
  }

  const handleRenderOptions = useCallback(() => {
    if (listFind.length <= 0 && optionType !== 'radius') return '';
    return optionType === 'radius' ? '100km' : itemSelected;
  }, [optionType, itemSelected, listFind]);

  return (
    <S.CustomSelect
      mt20={mt20}
      borderNoneLeftRadius={borderNoneLeftRadius}
      ArrowUp={openSelect}
      onClick={() => handleOpenSelect()}
      disabled={handleDisabledSelect()}
    >
      <span>{optionName}</span>
      <span>{handleRenderOptions()}</span>
      <S.Select open={openSelect} overlap={overlap}>
        {optionsState.map((options, i) => {
          return (
            <S.SelectOption
              key={i}
              onClick={() => handleSelectedOption(options.ID, options.Name)}
            >
              {options.Name}
            </S.SelectOption>
          );
        })}
      </S.Select>
    </S.CustomSelect>
  );
}

const mapStateToProps = (state) => ({
  listMakes: state.carInformation.makes,
  listModels: state.carInformation.models,
  listVersion: state.carInformation.version,
  listFind: state.carInformation.listFind,
  vehicles: state.carInformation.vehicles,
});

const mapDispatchToProps = (dispatch) => ({
  onSetModels: (models) => dispatch(CarInformationActions.doSetModels(models)),
  onSetVersion: (version) => dispatch(CarInformationActions.doSetVersion(version)),
  onSetFindVehicle: (data) => dispatch(CarInformationActions.doSetFindVehicle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
