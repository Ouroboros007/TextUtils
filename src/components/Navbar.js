import React from "react"
import PropTypes from 'prop-types';

export default function Navbar(props){
    const isDark = props.mode === 'dark';
    const theme = {
        navBg: isDark ? '#1e293b' : '#ffffff7e',           // Slate-800 / White
        text: isDark ? '#e2e8f0' : '#1e293b',            // Slate-200 / Slate-800
        drawerBg: isDark ? '#0f172a' : '#f8fafc',        // Slate-900 / Slate-50
        borderColor: isDark ? '#334155' : '#cbd5e1',     // Slate-700 / Slate-300
        buttonBg: isDark ? '#6366f1' : '#4f46e5',        // Indigo-500 / Indigo-600
        buttonText: '#ffffff',
        togglerBorder: isDark ? '#334155' : '#94a3b8'
    };
    return (
            <nav className={`navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`} style={{ 
                backgroundColor: theme.navBg, 
                color: theme.text, 
                borderBottom: `1px solid ${theme.borderColor}` 
            }}>
        <div className="container-fluid" style={{ color: theme.text, textDecoration: 'none' }}>
            <a className="navbarBrand" href="/"><h3><b>{props.navbarBrand}</b></h3></a>
            <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="drawer" 
    data-bs-target="#navbarTogglerDemo02" 
    aria-controls="navbarTogglerDemo02" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    style={{
        backgroundColor: isDark ? 'transparent' : '#f1f5f9', // Transparent in dark, light gray in light mode
        border: `1px solid ${theme.togglerBorder}`,
        borderRadius: '6px',
        padding: '4px 10px'
    }}>
    <span 
        className="navbar-toggler-icon" 
        aria-hidden="true" 
        style={{ 
            filter: isDark ? 'brightness(0) invert(1)' : 'brightness(0)' 
        }}
    ></span>
</button>
            <dialog className="drawer drawer-end" tabIndex={-1} id="navbarTogglerDemo02" aria-labelledby="navbarTogglerDemo02Label" style={{ backgroundColor: theme.drawerBg, color: theme.text }}>
            <div className="drawer-header" style={{ borderBottom: `1px solid ${theme.borderColor}` }}>
                <h5 className="drawer-title" id="navbarTogglerDemo02Label">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
            </div>
            <div className="drawer-body">
                <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/" style={{ color: theme.text }}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/" style={{ color: theme.text }}>About</a></li>
                <li className="nav-item"><a className="nav-link" href="/" aria-disabled="true" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Disabled</a></li>
                </ul>
                <ul className="navbar-nav me-auto mb-2">
                    <li className="form-field">
                    <div className="switch">
                        <input onClick={props.toggleMode} type="checkbox" value="" id="switchMdLabel" role="switch" switch/>
                    </div>
                    <label htmlFor="switchMdLabel">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{
                                    backgroundColor: theme.navBg,
                                    color: theme.text,
                                    border: `1px solid ${theme.borderColor}`
                                }}/>
                <button className="btn-outline theme-success" type="submit" style={{ backgroundColor: theme.buttonBg, color: theme.buttonText, border: 'none' }}>Search</button>
                </form>
            </div>
            </dialog>
        </div>
        </nav>
    )
}

Navbar.propTypes = {
  navbarBrand: PropTypes.string.isRequired,
//   aboutText: PropTypes.string
};

Navbar.defaultProps = {
  navbarBrand: 'Set title here',
//   aboutText: 'About'
};
