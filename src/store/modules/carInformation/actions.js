export function doSetMakes(makes) {
  return {
    type: '@CAR_INFORMATION/SET_MAKES',
    makes,
  };
}

export function doSetModels(models) {
  return {
    type: '@CAR_INFORMATION/SET_MODELS',
    models,
  };
}

export function doSetVersion(version) {
  return {
    type: '@CAR_INFORMATION/SET_VERSION',
    version,
  };
}

export function doSetVehicles(vehicles) {
  return {
    type: '@CAR_INFORMATION/SET_VEHICLES',
    vehicles,
  };
}

export function doSetFindVehicle(data) {
  return {
    type: '@CAR_INFORMATION/SET_FIND_VEHICLE',
    data,
  };
}

export function doSetVehiclesResult(result) {
  return {
    type: '@CAR_INFORMATION/SET_VEHICLE_RESULT',
    result,
  };
}

export function doCleanFilters() {
  return {
    type: '@CAR_INFORMATION/CLEAN_FILTERS',
  };
}
