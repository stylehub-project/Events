import { GoogleGenAI } from "@google/genai";
import { AspectRatio } from '../types';

// Helper to check for API key
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not available");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSceneImage = async (
  prompt: string, 
  aspectRatio: AspectRatio,
  onProgress?: (message: string) => void
): Promise<string> => {
  const ai = getClient();
  const model = 'gemini-3-pro-image-preview'; 

  if (onProgress) onProgress("Initializing concept generation...");

  try {
    // Call generateContent with imageConfig
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: "2K" 
        }
      }
    });

    if (onProgress) onProgress("Processing image...");

    // Extract the image from the response
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content?.parts;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData && part.inlineData.data) {
             const mimeType = part.inlineData.mimeType || 'image/png';
             return `data:${mimeType};base64,${part.inlineData.data}`;
          }
        }
      }
    }

    throw new Error("No image data returned from the model.");

  } catch (error: any) {
    console.error("Image generation failed:", error);
    // Handle the specific "entity not found" error which implies key issues or timeouts
    if (error.message && error.message.includes("Requested entity was not found")) {
        throw new Error("Session expired or invalid key. Please refresh and select key again.");
    }
    throw error;
  }
};