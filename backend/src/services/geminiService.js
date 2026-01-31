import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { config } from "../config/index.js";

// Initialize the Google Generative AI client using your secured API key
const genAI = new GoogleGenerativeAI(config.geminiKey);

/**
 * core business logic for interacting with Gemini.
 * @param {string} userInput - The unprofessional text from the user.
 * @param {string} length - The desired length ('short', 'medium', 'long').
 */
export const generateRewrittenText = async (userInput, length) => {
    /**
     * Use 'gemini-2.0-flash' as confirmed in your AI Studio model selection.
     * We dynamically build the 'systemInstruction' based on the 'length' variable.
     */
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
        systemInstruction: `You are a professional career editor. 
        Your task is to rewrite the input text to be professional for a job application.
        The output length must be ${length.toUpperCase()}.
        Provide ONLY the rewritten text without any quotes, intro, or formatting.`
    });

    // Execute the AI request with a strict JSON output schema
    const result = await model.generateContent({
        contents: [{ parts: [{ text: userInput }] }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: SchemaType.OBJECT,
                properties: {
                    rewritten: { type: SchemaType.STRING }
                }
            }
        }
    });

    // Extract the text from the response and parse the JSON string into an object
    const response = await result.response;
    const jsonResponse = JSON.parse(response.text());

    // Return the clean string directly to the controller
    return jsonResponse.rewritten;
};