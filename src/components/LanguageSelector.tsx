import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { SectionType, type FromLanguage, type Language } from "../types.d";
import type { FunctionComponent } from "react";
import type React from "react";

// interface Props {
//   onChange: (Language: Language) => void
// }
type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (Language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (Language: Language) => void }

export const LanguageSelector: FunctionComponent<Props> = ({ onChange, value, type }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //forzar el tipo de Language
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Seleccionar idioma" onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
