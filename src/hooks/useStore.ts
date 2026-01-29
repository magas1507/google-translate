import type { Action, Language, State, fromLanguage } from "../types";
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
  //parte de las acciones
  if (type === "INTERCHANGE_LANGUAGE") {
    if (state.fromLanguage === 'auto') return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }
  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }
  if (type === "SET_FROM_TEXT") {
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
  const setToLanguage = (payload: Language) => {
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
