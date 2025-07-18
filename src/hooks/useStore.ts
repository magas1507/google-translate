export function useStore(){
   const interchangeLenguage = () => {
    dispatch({type: 'INTERCHANGE_LANGUAGE'})
  }
  
  const setFromLenguage = payload => {
    dispatch({type: 'SET_FROM_LANGUAGE', payload})
  }

  const setToLenguage = payload => {
    dispatch({type: 'SET_TO_LANGUAGE', payload})
  }
  
  const setFromText = payload => {
    dispatch({type: 'SET_From_TEXT', payload})
  }
  const setResult = payload => {
    dispatch({type: 'SET_RESULT', payload})
  }
}
return{
  fromLaguage
}