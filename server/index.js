import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());//para que el /translate pueda enviar o body, para cualquier petición que necesite body

// CONFIGURACIÓN CRÍTICA: Forzamos la versión v1 globalmente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);



app.post('/translate', async (req, res) => {
  console.log('--- Nueva petición recibida ---');
  const { fromLanguage, toLanguage, text } = req.body;

  try {
    // USAMOS EL MODELO QUE TU CURL CONFIRMÓ: gemini-2.0-flash
    const model = genAI.getGenerativeModel(
      { model: "gemini-2.5-flash" },
      { apiVersion: 'v1beta' }
    );
    const prompt = `Translate this text to ${toLanguage}: "${text}". Return only the translation.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translation = response.text().trim();

    res.json({ translation });

  } catch (error) {
    console.error("❌ ERROR:");
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 SERVIDOR ACTIVO EN: http://localhost:${PORT}`);
});

