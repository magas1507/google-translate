// export function useStore(){
//    const interchangeLenguage = () => {
//     dispatch({type: 'INTERCHANGE_LANGUAGE'})
//   }
  
//   const setFromLenguage = payload => {
//     dispatch({type: 'SET_FROM_LANGUAGE', payload})
//   }

//   const setToLenguage = payload => {
//     dispatch({type: 'SET_TO_LANGUAGE', payload})
//   }
  
//   const setFromText = payload => {
//     dispatch({type: 'SET_From_TEXT', payload})
//   }
//   const setResult = payload => {
//     dispatch({type: 'SET_RESULT', payload})
//   }
// }
// return{
//   fromLaguage
// }
import type { Action, State } from '../types';
import { useReducer } from 'react'
import { useStore } from './useStore';

//1. create inicial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}
function reducer(state: State, action: Action) {
  //recuperamos el tipo de la action
  //payload: es lo que se envia de información para poder enviar el estado
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }
  return state
}

export function useStore(){
  const [{
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading
  
    }, dispatch] = useReducer(reducer, initialState)
  return{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
  }
}