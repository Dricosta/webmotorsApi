import produce from 'immer';

const INITIAL_STATE = {
  makes: [],
  models: [],
  version: [],
  listFind: [],
  vehicles: [],
  vehiclesResult: [],
};

function carInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@CAR_INFORMATION/SET_MAKES': {
      return produce(state, (draft) => {
        const { makes } = action;
        draft.makes = makes;
      });
    }
    case '@CAR_INFORMATION/SET_MODELS': {
      return produce(state, (draft) => {
        const { models } = action;
        draft.models = models;
      });
    }
    case '@CAR_INFORMATION/SET_VERSION': {
      return produce(state, (draft) => {
        const { version } = action;
        draft.version = version;
      });
    }
    case '@CAR_INFORMATION/SET_VEHICLES': {
      return produce(state, (draft) => {
        const { vehicles } = action;
        draft.vehicles = vehicles;
      });
    }
    case '@CAR_INFORMATION/SET_FIND_VEHICLE': {
      return produce(state, (draft) => {
        const { data } = action;
        draft.listFind = data;
      });
    }
    case '@CAR_INFORMATION/SET_VEHICLE_RESULT': {
      return produce(state, (draft) => {
        const { result } = action;
        draft.vehiclesResult = result;
      });
    }
    case '@CAR_INFORMATION/CLEAN_FILTERS': {
      return produce(state, (draft) => {
        draft.listFind = [];
      });
    }
    default:
      return state;
  }
}

export default carInformation;
