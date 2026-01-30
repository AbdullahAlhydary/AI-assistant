// Import the "Worker" function we just wrote in the Service layer
import { generateRewrittenText } from "../services/geminiService.js";

// Define the logic for handling a rewrite request
export const handleRewrite = async (req, res) => {
    try {
        // Extract the "text" field from the JSON data sent by the user (the request body)
        const { text } = req.body;

        // Check if the user actually sent any text; if not, stop and send a 400 error
        if (!text) return res.status(400).json({ error: "No text provided" });

        // Pass the text to the Service worker and wait for the AI's rewritten version
        const rewrittenText = await generateRewrittenText(text);

        // Send the successful result back to the user with a 200 "OK" status
        res.status(200).json({ rewritten: rewrittenText });

    } catch (error) {
        // If anything goes wrong (like a bad API key), print the error to your terminal
        console.error("DEBUGGING ERROR:", error);
        // Send a 500 "Server Error" message to the user so they know it's our fault, not theirs
        res.status(500).json({ error: "AI Service failed", details: error.message });
    }
};