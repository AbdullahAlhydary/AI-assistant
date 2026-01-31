/**
 * Central Component Export File
 * 
 * This file serves as a barrel export for all components in the application.
 * It allows other parts of the app to import multiple components from a single
 * location, making imports cleaner and more maintainable.
 * 
 * Usage example:
 * import { Header, TextInput, Button } from './components';
 */

// Header component - Displays the app title and subtitle
export { default as Header } from './Header/Header';

// TextInput component - Textarea for user to enter their statement
export { default as TextInput } from './TextInput/TextInput';

// LengthSelector component - Dropdown for selecting output length
export { default as LengthSelector } from './LengthSelector/LengthSelector';

// Button component - Primary action button with loading state
export { default as Button } from './Button/Button';

// ResultCard component - Displays the AI-rewritten text with copy functionality
export { default as ResultCard } from './ResultCard/ResultCard';

// ErrorMessage component - Displays error messages with visual feedback
export { default as ErrorMessage } from './ErrorMessage/ErrorMessage';
