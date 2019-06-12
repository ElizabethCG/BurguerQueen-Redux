import { BREAKFAST, LUNCH } from "./actionTypes";

export const selectBreakFast = dispatch => {
  return (event) => {
    dispatch({
      type: BREAKFAST,
      payload: event

    })
  }
}


export const selectLunch = dispatch => (event) => {
  dispatch({
    type: LUNCH,
    payload: event,
  })
}
