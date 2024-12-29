import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBUN2-UViJJfmCLbCsKma5vCOyxQDfaySg");

export const getGeminiResponse = async(prompt) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Erreur lors de l'appel à Gemini:", error);
        throw error;
    }
};