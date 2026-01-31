/**
 * useRewrite Custom Hook
 * 
 * This hook encapsulates all the state management and logic for the
 * text rewriting feature. It follows the React hooks pattern to separate
 * business logic from UI components, making the code more reusable and testable.
 */

import { useState } from 'react';
import { rewriteService } from '../services/api';

/**
 * Custom hook for handling text rewriting functionality.
 * 
 * @returns {Object} An object containing:
 *   - data: The rewritten text result from the AI
 *   - loading: Boolean indicating if a request is in progress
 *   - error: Error message if something went wrong, null otherwise
 *   - processRewrite: Function to trigger the rewrite process
 */
export const useRewrite = () => {
    // State for storing the AI-generated rewritten text
    const [data, setData] = useState('');

    // State for tracking loading status during API calls
    const [loading, setLoading] = useState(false);

    // State for storing any error messages from failed requests
    const [error, setError] = useState(null);

    /**
     * Processes the text rewrite request.
     * 
     * This async function handles the entire flow of sending text to the API,
     * managing loading states, and handling success/error responses.
     * 
     * @param {string} text - The original text to be rewritten
     * @param {string} length - The desired output length ('short', 'medium', 'long')
     */
    const processRewrite = async (text, length) => {
        // Early return if the text is empty or only whitespace
        if (!text.trim()) return;

        // Set loading state to true to show loading indicator in UI
        setLoading(true);

        // Clear any previous errors before making a new request
        setError(null);

        try {
            // Call the API service with both text and length parameters
            const result = await rewriteService.fetchRefinedText(text, length);

            // Store the successful result in state
            setData(result);
        } catch (err) {
            // If an error occurs, store the error message
            setError(err.message);
        } finally {
            // Always set loading to false when done, whether success or failure
            setLoading(false);
        }
    };

    // Return only what the component needs to interact with this hook
    // This creates a clean API for components to consume
    return { data, loading, error, processRewrite };
};