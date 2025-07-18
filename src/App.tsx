import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import type { Action, State } from './types';
import { useReducer } from 'react'

//1. create inicial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

//2.create the reducer
// un reducer siempre tiene que devolver un nuevo estado 
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
function App() {
  //3 usar el hook useReducer
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading

  }, dispatch] = useReducer(reducer, initialState)


  //console.log({ fromLanguage })
  return (
    <>
      <div className='App'>
        <h1>Google Traslate</h1>
        <button onClick={() => {
          dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })
        }}>Traducir</button>
      </div>
    </>
  )
}

export default App
