import './Button.css';

const Button = ({ onClick, disabled, loading, children }) => {
    return (
        <button
            className={`btn ${loading ? 'btn-loading' : ''}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading && <span className="btn-spinner"></span>}
            <span className={loading ? 'btn-text-hidden' : ''}>{children}</span>
        </button>
    );
};

export default Button;
