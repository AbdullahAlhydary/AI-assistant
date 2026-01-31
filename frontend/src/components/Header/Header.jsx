import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <span className="logo-icon">✨</span>
                    <h1 className="header-title">AI Career Assistant</h1>
                </div>
                <p className="header-subtitle">
                    Transform your casual language into polished, professional statements
                </p>
            </div>
        </header>
    );
};

export default Header;
