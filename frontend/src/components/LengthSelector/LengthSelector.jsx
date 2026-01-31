/**
 * LengthSelector Component
 * 
 * A dropdown component that allows users to select the desired length
 * of the AI-rewritten text. Options include 'short', 'medium', and 'long'.
 * This selection is sent to the backend to customize the AI response.
 */

import './LengthSelector.css';

/**
 * @param {string} value - The currently selected length value
 * @param {function} onChange - Callback function when selection changes
 * @param {boolean} disabled - Whether the dropdown is disabled (e.g., during loading)
 */
const LengthSelector = ({ value, onChange, disabled }) => {

    /**
     * Handle the change event from the select element.
     * Extracts the new value and passes it to the parent component.
     */
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    /**
     * Define the available length options.
     * Each option has a value (sent to backend) and a label (displayed to user).
     */
    const lengthOptions = [
        { value: 'short', label: 'Short', description: 'Brief and concise' },
        { value: 'medium', label: 'Medium', description: 'Balanced length' },
        { value: 'long', label: 'Long', description: 'Detailed and comprehensive' },
    ];

    return (
        <div className="length-selector-container">
            {/* Label for accessibility and user guidance */}
            <label className="length-selector-label" htmlFor="length-select">
                Output Length
            </label>

            {/* Wrapper for custom styling of the select dropdown */}
            <div className="length-selector-wrapper">
                <select
                    id="length-select"
                    className="length-selector"
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                >
                    {/* Map through options to create option elements */}
                    {lengthOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label} — {option.description}
                        </option>
                    ))}
                </select>

                {/* Custom dropdown arrow icon for better visual design */}
                <span className="length-selector-arrow">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.5 4.5L6 8L9.5 4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default LengthSelector;
