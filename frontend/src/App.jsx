/**
 * App Component - Main Application Entry Point
 * 
 * This is the root component of the AI Career Assistant application.
 * It orchestrates all child components and manages the main application state.
 * 
 * Features:
 * - Text input for unprofessional statements
 * - Length selection dropdown (short, medium, long)
 * - AI-powered text refinement
 * - Result display with copy functionality
 */

import { useState } from 'react';
import { useRewrite } from './hooks/useRewrite';
import {
  Header,
  TextInput,
  LengthSelector,
  Button,
  ResultCard,
  ErrorMessage,
} from './components';
import './App.css';

function App() {
  // ===== State Management =====

  // State for the user's input text that will be refined
  const [inputText, setInputText] = useState('');

  // State for the selected output length preference
  // Default to 'medium' as it provides a balanced result
  const [selectedLength, setSelectedLength] = useState('medium');

  // Destructure values from the custom rewrite hook
  // - data: The AI-generated refined text
  // - loading: Boolean for showing loading state
  // - error: Any error message from the API
  // - processRewrite: Function to trigger the API call
  const { data, loading, error, processRewrite } = useRewrite();

  /**
   * Handle the form submission.
   * Validates that input text exists before calling the API.
   * Passes both the text and selected length to the rewrite function.
   */
  const handleSubmit = () => {
    // Only proceed if the input has actual content (not just whitespace)
    if (inputText.trim()) {
      // Call the hook's process function with text and length preference
      processRewrite(inputText, selectedLength);
    }
  };

  return (
    // Main app wrapper - provides the gradient background
    <div className="app">
      {/* Centered container with max-width constraint */}
      <div className="app-container">
        {/* Header component with app title and subtitle */}
        <Header />

        {/* Main content area */}
        <main className="main-content">
          {/* Input section - contains all user input controls */}
          <div className="input-section">
            {/* Text input for the statement to be refined */}
            <TextInput
              value={inputText}
              onChange={setInputText}
              placeholder="Enter your casual or unprofessional statement here... For example: 'I'm really good at dealing with angry customers'"
              disabled={loading}
            />

            {/* Dropdown for selecting output length */}
            <LengthSelector
              value={selectedLength}
              onChange={setSelectedLength}
              disabled={loading}
            />

            {/* Submit button with loading state */}
            <Button
              onClick={handleSubmit}
              loading={loading}
              disabled={!inputText.trim()}
            >
              Refine Statement
            </Button>
          </div>

          {/* Output section - displays results or errors */}
          <div className="output-section">
            {/* Error message component - only renders if error exists */}
            <ErrorMessage message={error} />

            {/* Result card - only renders if data exists */}
            <ResultCard result={data} />
          </div>
        </main>

        {/* Footer with branding */}
        <footer className="footer">
          <p>Powered by AI • Transform your communication</p>
        </footer>
      </div>
    </div>
  );
}

export default App;