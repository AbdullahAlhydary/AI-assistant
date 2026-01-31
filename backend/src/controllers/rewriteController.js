import { generateRewrittenText } from "../services/geminiService.js";

/**
 * Handles the incoming POST request from the frontend.
 */
export const handleRewrite = async (req, res) => {
    try {
        /**
         * DESTRUCTURING: We extract both 'text' and 'length' from the body.
         * We set 'medium' as a default value just in case the frontend forgets to send it.
         */
        const { text, length = 'medium' } = req.body;

        // Validation: Ensure the user actually provided text to work with
        if (!text) {
            return res.status(400).json({ error: "No text provided" });
        }

        /**
         * CALLING THE WORKER:
         * We pass both the statement and the length preference to the AI service.
         */
        const rewrittenText = await generateRewrittenText(text, length);

        // Success: Return the polished text to the user
        res.status(200).json({ rewritten: rewrittenText });

    } catch (error) {
        // Log the full error in your server terminal for debugging
        console.error("AI REWRITE ERROR:", error);

        // Send a structured error message back to the frontend
        res.status(500).json({
            error: "AI Service failed",
            details: error.message
        });
    }
};