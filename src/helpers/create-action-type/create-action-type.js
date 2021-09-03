const createActionType = (actionName) => ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((actionTypes, status) => ({
  ...actionTypes,
  [status]: `${actionName}/${status}`,
}), {})

export default createActionType