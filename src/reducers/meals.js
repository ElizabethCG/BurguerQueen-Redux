import { BREAKFAST, LUNCH } from "../actions/actionTypes2";

export default (
  state = {
    menuChoices :["hola"],
    menuPrices : ["ely"],
  },
  action
) => {
  switch(action.type){

    case BREAKFAST:
    return  {
      ...state,

      menuChoices: [...state.menuChoices, action.payload.name],
      menuPrices : [...state.menuPrices, action.payload.value],
    }



    case LUNCH:
      return {
        ...state,
        menuChoices: [...state.menuChoices, action.payload.name],
        menuPrices : [...state.menuPrices, action.payload.value],
      }

    default: return state;
  }
}
