const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const CLEAR_THE_DISH = 'CLEAR_THE_DISH'
const UPDATE_WEIGHT = 'UPDATE_WEIGHT'
const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES'
const INCREASE_COUNTER = 'INCREASE_COUNTER'
const CLEAR_COUNTER = 'CLEAR_COUNTER'
  
const initialState = {  
  dish: [],
  productName: "",
  clickCounter: 0
}  
  
export default (state = initialState, action) => {  
  switch (action.type) {  
    case ADD_PRODUCT: {  
      const element = state.dish[0] ? Object.values(state.dish).find(it => it.name === action.name) : false
      const product = element ?
      {...element, weight: element.weight + 100} :
      {name: action.name, item: action.item, fdcId: action.fdcId, weight: 100, energy: 0, protein: 0, lipid: 0, carbohydrate: 0}
      return { 
        ...state,
        dish: element ? [ ...state.dish.map(it => it.name === action.name ? { ...it, weight: it.weight + 100 } : it ) ] : [ ...state.dish, product]
    }
    }
    case UPDATE_PRODUCT: {
      return {
        ...state,
        productName: action.name  
      }
    }
    case UPDATE_WEIGHT: {
      return {
        ...state,
        dish: [ ...state.dish.map(it => it.name === action.name ? { ...it, weight: action.weight} : it) ]
      }
    }
    case UPDATE_PROPERTIES: {
      return {
        ...state,
        dish: [ ...state.dish.map(it => it.name === action.name ? { ...it, [action.property]: action.value } : it) ]
      }
    }
    case CLEAR_THE_DISH: {
      return {
        ...state,
        dish: []
      }
    }
    case INCREASE_COUNTER: {
      return {
        ...state,
        clickCounter: state.clickCounter + 1
      }
    }
    case CLEAR_COUNTER: {
      return {
        ...state,
        clickCounter: 0
      }
    }
    default:  
      return state  
  }  
}  
  
export function addProduct(name, item, fdcId, weight) {  
  return { type: ADD_PRODUCT, name, item, fdcId, weight}  
}  
  
export function updateProductName(name) {  
  return { type: UPDATE_PRODUCT, name}  
} 

export function clearTheDish() {  
  return { type: CLEAR_THE_DISH }  
}

export function updateWeight(name, weight) {
  return { type: UPDATE_WEIGHT, name, weight}
}

export function updateProperties(name, property, value) {
  return { type: UPDATE_PROPERTIES, name, property, value}
}

export function increaseCounter() {
  return { type: INCREASE_COUNTER }
}

export function clearClickCounter() {
  return { type: CLEAR_COUNTER }
}