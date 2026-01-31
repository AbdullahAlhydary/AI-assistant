/**
 * API Service Module
 * 
 * This file handles all HTTP communication with the backend server.
 * It abstracts the fetch logic away from UI components, making the code
 * more maintainable and testable.
 */

// Base URL for all API endpoints - change this for different environments
const BASE_URL = 'http://localhost:5000/api';

/**
 * Rewrite Service Object
 * 
 * Contains all methods related to the text rewriting feature.
 * Using an object allows for easy extension with more methods in the future.
 */
export const rewriteService = {
    /**
     * Sends text to the backend for AI-powered refinement.
     * 
     * @param {string} text - The original unprofessional text to be rewritten
     * @param {string} length - The desired output length ('short', 'medium', 'long')
     * @returns {Promise<string>} - The professionally rewritten text
     * @throws {Error} - Throws an error if the API request fails
     */
    async fetchRefinedText(text, length) {
        // Make POST request to the rewrite endpoint
        const response = await fetch(`${BASE_URL}/rewrite`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Send both text and length preference to the backend
            body: JSON.stringify({ text, length }),
        });

        // Parse the JSON response from the server
        const data = await response.json();

        // Check if the request was successful (status 200-299)
        // If not, throw an error with the details from the backend
        if (!response.ok) throw new Error(data.details || 'API Error');

        // Return only the rewritten text to the caller
        return data.rewritten;
    }
};