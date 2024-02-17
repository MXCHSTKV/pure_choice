const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const CLEAN_THE_DISH = 'CLEAN_THE_DISH'
const UPDATE_WEIGHT = 'UPDATE_WEIGHT'
const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES'
  
const initialState = {  
  dish: [],
  productName: ""
}  
  
export default (state = initialState, action) => {  
  switch (action.type) {  
    case ADD_PRODUCT: {  
      const element = state.dish[0] ? Object.values(state.dish).find(it => it.name === action.name) : false
      const product = element ? {...element, weight: element.weight + 100} : {name: action.name, item: action.item, weight: 100, energy: 0, protein: 0, lipid: 0, carbohydrate: 0}
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
    case CLEAN_THE_DISH: {
      return {
        ...state,
        dish: []
      }
    }
    default:  
      return state  
  }  
}  
  
export function addProduct(name, item, weight) {  
  return { type: ADD_PRODUCT, name, item, weight}  
}  
  
export function updateProductName(name) {  
  return { type: UPDATE_PRODUCT, name}  
} 

export function cleanTheDish() {  
  return { type: CLEAN_THE_DISH }  
}

export function updateWeight(name, weight) {
  return { type: UPDATE_WEIGHT, name, weight}
}

export function updateProperties(name, property, value) {
  return { type: UPDATE_PROPERTIES, name, property, value}
}