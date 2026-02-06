
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProfessionalBio = async (companyName: string, sectors: string[], benefits: string[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a professional, high-end "About Us" narrative for a construction company named "${companyName}". 
      They specialize in: ${sectors.join(', ')}. 
      Their key competitive advantages are: ${benefits.join(', ')}. 
      Format the output as a compelling three-paragraph corporate bio that emphasizes reliability, quality, and technical expertise.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const generateConstructionImage = async (prompt: string, aspectRatio: "1:1" | "16:9" | "9:16" | "3:4" | "4:3" = "16:9") => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `A professional, high-quality architectural photograph of ${prompt}. Modern, clean aesthetic, construction excellence, cinematic lighting, 8k resolution, realistic.` }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    throw error;
  }
};
