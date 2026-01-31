import './TextInput.css';

const TextInput = ({ value, onChange, placeholder, disabled }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="text-input-container">
            <label className="text-input-label" htmlFor="statement-input">
                Your Statement
            </label>
            <textarea
                id="statement-input"
                className="text-input"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                rows={4}
            />
            <div className="text-input-footer">
                <span className="char-count">{value.length} characters</span>
            </div>
        </div>
    );
};

export default TextInput;
