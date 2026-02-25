import { type FromLanguage, type Language } from "../types.d";


export async function translate({
  fromLanguage,
  toLanguage,
  text }: {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
  }): Promise<string> {
  if (fromLanguage === toLanguage) return text
  try {
    const response = await fetch('http://localhost:3001/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fromLanguage, toLanguage, text })
    });

    if (!response.ok) {
      throw new Error('Error en el servidor');
    }

    const data = await response.json();

    return data.translation;
  } catch (error) {
    console.error("Error en la traducción:", error);
    return "Error al traducir";
  }

}

