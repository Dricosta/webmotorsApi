import React, { useState, useEffect } from 'react';
import { FaCarAlt, FaMotorcycle, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCloseCircle, IoIosArrowForward } from 'react-icons/io';
import { connect } from 'react-redux';
import * as S from './styles';
import Select from '../Select';
import api from '../../services/api';
import CardVehicle from '../CardVehicle';
import { formatPrice } from '../../util/format';
import * as CarInformationActions from '../../store/modules/carInformation/actions';

function Card({
  onSetMakes,
  onSetVehicles,
  vehicles,
  listFind,
  vehiclesResult,
  onSetVehiclesResult,
  onCleanFilters,
  onSetFindVehicle,
}) {
  const [typeCheckbox, setTypeCheckbox] = useState({ Novos: false, Usados: false });

  useEffect(() => {
    async function loadVehicles() {
      const responseVehicles = await api.get('/Vehicles?Page=1');
      const responseMakes = await api.get('/Make');

      const dataVehicle = responseVehicles.data.map((Vehicle) => ({
        ...Vehicle,
        priceFormatted: formatPrice(parseInt(Vehicle.Price, 10)),
        yearFormatted: `${Vehicle.YearFab}/${Vehicle.YearModel}`,
      }));

      onSetVehicles(dataVehicle);
      onSetVehiclesResult(dataVehicle);
      onSetMakes(responseMakes.data);
    }

    loadVehicles();
  }, [onSetVehicles, onSetVehiclesResult, onSetMakes]);

  function handleChangeType(type) {
    switch (type) {
      case 'usados':
        setTypeCheckbox({ ...typeCheckbox, Usados: !typeCheckbox.Usados });
        break;
      case 'novos':
        setTypeCheckbox({ ...typeCheckbox, Novos: !typeCheckbox.Novos });
        onSetFindVehicle({ ...listFind, KM: 0 });
        break;
      default:
        break;
    }
  }

  const ContentButton = [
    {
      icon: <FaCarAlt size={24} color="#333" />,
      subtext: 'comprar',
      vehicle: 'CARROS',
    },
    {
      icon: <FaMotorcycle size={24} color="#333" />,
      subtext: 'comprar',
      vehicle: 'MOTOS',
    },
  ];

  function handleSearchVehicles() {
    const filterVehicles = [];

    Object.values(listFind).map((item) => {
      return vehicles.map((vehicleItem) => {
        if (Object.values(vehicleItem).indexOf(item) > -1) {
          return filterVehicles.push(vehicleItem);
        }
        return false;
      });
    });

    const uniqueVehicles = Array.from(new Set(filterVehicles));

    onSetVehiclesResult(uniqueVehicles);
  }

  function handleCleanFilters() {
    setTypeCheckbox({ Novos: false, Usados: false });
    onCleanFilters();
  }

  return (
    <>
      <S.Card>
        <S.CardHeader>
          <S.GroupButton>
            {ContentButton.map((item, i) => {
              return (
                <S.ButtonSelect key={i}>
                  <div className="btn-container--icon">{item.icon}</div>
                  <div className="btn-container--text">
                    <span className="btn-container--subtext">{item.subtext}</span>
                    <span className="btn-container--vehicle">{item.vehicle}</span>
                  </div>
                </S.ButtonSelect>
              );
            })}
          </S.GroupButton>

          <S.ButtonSellCar>Vender meu carro</S.ButtonSellCar>
        </S.CardHeader>

        <S.CardContent>
          <S.CardContentGroup>
            <S.CardContentLeft>
              <S.GroupCheckbox>
                <label htmlFor="CheckeboxNovos">
                  <S.Checkbox
                    id="CheckeboxNovos"
                    checked={typeCheckbox.Novos}
                    onChange={() => handleChangeType('novos')}
                  />
                  Novos
                </label>
                <label htmlFor="CheckeboxUsados">
                  <S.Checkbox
                    id="CheckeboxUsados"
                    checked={typeCheckbox.Usados}
                    onChange={() => handleChangeType('usados')}
                  />
                  Usados
                </label>
              </S.GroupCheckbox>

              <S.GroupLeftTop>
                <S.CustomInput>
                  <FaMapMarkerAlt className="map" size={20} />
                  <input
                    type="text"
                    placeholder="Onde: São Paulo - SP"
                    defaultValue="Onde: São Paulo - SP"
                  />
                  <IoMdCloseCircle className="clean" size={20} />
                </S.CustomInput>
                <Select borderNoneLeftRadius overlap optionType="radius" />
              </S.GroupLeftTop>

              <S.GroupTwoSelect mt20>
                <Select optionType="year" />
                <Select optionType="price" />
              </S.GroupTwoSelect>
            </S.CardContentLeft>

            <S.CardContentRight>
              <S.GroupTwoSelect mt42>
                <Select optionType="make" overlap />
                <Select optionType="model" overlap />
              </S.GroupTwoSelect>
              <Select optionType="version" mt20 />
            </S.CardContentRight>
          </S.CardContentGroup>

          <S.CardFooter>
            <span className="searchAdvanced">
              <IoIosArrowForward size={12} />
              Busca avançada
            </span>

            <div>
              <span className="cleanFilter" onClick={() => handleCleanFilters()}>
                Limpar Filtros
              </span>
              <span className="buttonSearch" onClick={() => handleSearchVehicles()}>
                VER OFERTAS
              </span>
            </div>
          </S.CardFooter>
        </S.CardContent>
      </S.Card>

      <S.CardGroupVehicle>
        {vehiclesResult &&
          vehiclesResult.map((vehicleAux) => {
            return (
              <CardVehicle
                key={vehicleAux.ID}
                imageCar={vehicleAux.Image}
                model={vehicleAux.Model.toUpperCase()}
                version={vehicleAux.Version.toUpperCase()}
                price={vehicleAux.priceFormatted}
                year={vehicleAux.yearFormatted}
                km={vehicleAux.KM}
                color={vehicleAux.Color}
              />
            );
          })}
      </S.CardGroupVehicle>
    </>
  );
}

const mapStateToProps = (state) => ({
  vehicles: state.carInformation.vehicles,
  listFind: state.carInformation.listFind,
  vehiclesResult: state.carInformation.vehiclesResult,
});

const mapDispatchToProps = (dispatch) => ({
  onSetMakes: (makes) => dispatch(CarInformationActions.doSetMakes(makes)),
  onSetVehicles: (vehicles) => dispatch(CarInformationActions.doSetVehicles(vehicles)),
  onSetFindVehicle: (data) => dispatch(CarInformationActions.doSetFindVehicle(data)),
  onSetVehiclesResult: (result) =>
    dispatch(CarInformationActions.doSetVehiclesResult(result)),
  onCleanFilters: () => dispatch(CarInformationActions.doCleanFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
