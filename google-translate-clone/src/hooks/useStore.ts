import { AUTO_LANGUAGE } from "../constants";
import type { Action, State, fromLanguage } from "../types";
import { useReducer } from "react";

//1. create inicial state
const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

//2.create the reducer
// un reducer siempre tiene que devolver un nuevo estado
function reducer(state: State, action: Action) {
  //recuperamos el tipo de la action
  //payload: es lo que se envia de información para poder enviar el estado
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGE") {
    //logica del estado dentro del reducer
    // porque lo evitamos dentro del componente
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    const loading = state.fromText != ''

    return {
      ...state,
      loading,
      result: '',
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    if (state.fromLanguage == action.payload) return state
    const loading = state.fromText != ''

    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading
    };
  }
  if (type === "SET_TO_LANGUAGE") {

    if (state.toLanguage == action.payload) return state


    const loading = state.fromText != ''

    return {
      ...state,
      loading,
      toLanguage: action.payload,
      result: '',
    };
  }
  if (type === "SET_FROM_TEXT") {

    const loading = state.fromText != ''

    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }
  return state;
}
// no devolvamos directamente el dispatch,porque atamos nuestros componentes a un contrato en concreto porque cuando useStore
// dentro do hook exporta un contrato que siempre puedas utilizar en cualquier sitio
export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: "INTERCHANGE_LANGUAGE" });
  };

  const setFromLanguage = (payload: fromLanguage) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload });
  };
  const setToLanguage = (payload: string) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };
  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
