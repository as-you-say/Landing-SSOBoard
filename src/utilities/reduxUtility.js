import produce from 'immer';

export function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    const handler = handlerMap[action.type];
    if (handler) {
      if (action[NOT_IMMUTABLE]) {
        return handler(state, action);
      } else {
        return produce(state, draft => {
          const handler = handlerMap[action.type];
          handler(draft, action);
        });
      }
    } else {
      return state;
    }
  };
}

// 액션 함수입니다. 기본형식은 아래와 같습니다.
// (data) => {type, data}
export function createSetValueAction(type) {
  // 아래와 같이 정의가 되어 있으므로
  // 함수명('키', '밸류') 로 호출하면 값을 저장하게 됩니다.
  return (key, value) => ({ type, key, value });
}
export function setValueReducer(state, action) {
  state[action.key] = action.value;
}

// 심볼 객체를 사용하여 유일한 프로퍼티
export const FETCH_PAGE = Symbol('FETCH_PAGE');
export const FETCH_KEY = Symbol('FETCH_KEY');
export const NOT_IMMUTABLE = Symbol('NOT_IMMUTABLE');