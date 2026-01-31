import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config/index.js";

// Initialize the Google AI tool
const genAI = new GoogleGenerativeAI(config.geminiKey);

export const generateRewrittenText = async (userInput) => {
    // Change this line in src/services/geminiService.js
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const instruction = `Rewrite the following text to be professional: "${userInput}"`;

    // We call generateContent and wait for the result
    const result = await model.generateContent(instruction);

    // In the latest library, we need to call .response first, then .text()
    const response = await result.response;
    const text = response.text();

    return text;
};