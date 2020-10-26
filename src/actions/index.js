import sagaAction from './sagaAction';
import storeAction from './storeAction';

export const Types = {
  ...sagaAction.Types, 
  ...storeAction.Types,
};

export const actions = {
  ...sagaAction.actions,
  ...storeAction.actions,
};