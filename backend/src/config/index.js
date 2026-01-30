import dotenv from 'dotenv';
dotenv.config();

export const config = {
    geminiKey: process.env.GEMINI_API_KEY,
    port: process.env.PORT || 5000,
};

