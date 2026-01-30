import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listAllModels() {
    try {
        // This is the "Call ListModels" part the error mentioned
        const models = await genAI.listModels();

        console.log("--- AVAILABLE MODELS FOR YOUR KEY ---");
        models.models.forEach((m) => {
            console.log(`Name: ${m.name} | Methods: ${m.supportedGenerationMethods}`);
        });
    } catch (error) {
        console.error("Could not list models:", error);
    }
}

listAllModels();