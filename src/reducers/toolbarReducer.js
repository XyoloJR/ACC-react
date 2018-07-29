export default (state= {}, action) => {
  switch (action.type) {
    case 'TOGGLE_VECT':
      return {
        result: action.payload
      }
    case 'TOGGLE_MESURE':
      return {
        result: action.payload
      }
    default: 
      return state
  }
}
