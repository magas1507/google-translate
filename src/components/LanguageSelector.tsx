import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAGES } from "../constants";
import type { fromLanguage, Language } from "../types";
import type { FunctionComponent } from "react";
import type React from "react";

// interface Props {
//   onChange: (Language: Language) => void
// }
type Props =
  | { type: 'from', value: fromLanguage, onChange: (Language: fromLanguage) => void }
  | { type: 'to', value: Language, onChange: (Language: Language) => void }

export const LanguageSelector: FunctionComponent<Props> = ({ onChange, value, type }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //forzar el tipo de Language
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Seleccionar idioma" onChange={handleChange} value={value}>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
