import { BREAKFAST, LUNCH } from "../actions/actionTypes";

export default (
  state = {
    menuChoices: [],
    menuPrices: [],
  },
  action
) => {
  switch (action.type) {

    case BREAKFAST:
      return {
        ...state,

        menuChoices: [...state.menuChoices, action.payload.name],
        menuPrices: [...state.menuPrices, action.payload.value],
      }



    case LUNCH:
      return {
        ...state,
        menuChoices: [...state.menuChoices, action.payload.name],
        menuPrices: [...state.menuPrices, action.payload.value],
      }

    default: return state;
  }
}
