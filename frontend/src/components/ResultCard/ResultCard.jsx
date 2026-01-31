import './ResultCard.css';

const ResultCard = ({ result }) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(result);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    if (!result) return null;

    return (
        <div className="result-card">
            <div className="result-header">
                <div className="result-title-group">
                    <span className="result-icon">💼</span>
                    <h3 className="result-title">Professional Version</h3>
                </div>
                <button className="copy-btn" onClick={handleCopy} title="Copy to clipboard">
                    <svg
                        className="copy-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy
                </button>
            </div>
            <div className="result-content">
                <p className="result-text">{result}</p>
            </div>
        </div>
    );
};

export default ResultCard;
