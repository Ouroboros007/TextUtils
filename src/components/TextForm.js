import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props){
    const [text, setText] = useState('Enter text here');
    const isDark = props.mode === 'dark';
    const theme = {
        text: isDark ? '#e2e8f0' : '#1e293b',             // Slate-200 (Dark) / Slate-800 (Light)
        textAreaBg: isDark ? '#1e293b' : '#ffffff',       // Slate-800 (Dark) / White (Light)
        textAreaBorder: isDark ? '#334155' : '#cbd5e1',   // Slate-700 (Dark) / Slate-300 (Light)
        buttonBg: isDark ? '#6366f1' : '#4f46e5',         // Indigo-500 (Dark) / Indigo-600 (Light)
        buttonText: '#ffffff',
    };
const btnClass = isDark ? "btn-dark-mode" : "btn-light-mode";
const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    };

const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
};
const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
};
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
};
const handleTitleCase = () => {
        let newText = text.split(/\s+/).map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
        props.showAlert("Converted to Title Case!", "success");
    };
const handleReverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed!", "success");
    };
const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking text...", "success");
    };      

const handleClearClick =()=>{
    setText("");
}

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const query = props.searchQuery ? props.searchQuery.trim() : '';
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matchCount = query
    ? (text.match(new RegExp(escapedQuery, 'gi')) || []).length
    : 0;

  const getHighlightedText = () => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          style={{
            backgroundColor: '#facc15',
            color: '#000',
            padding: '0 2px',
            borderRadius: '3px',
          }}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

    return(
        <div className="form-field" style={{ color: theme.text }}>
            <h1><b>{props.heading}</b></h1>
            <div className="containter mb-3">   
                <label htmlFor="exampleFormControlTextarea2" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea2" value={text} onChange={handleOnChange} rows="8" style={{
                        backgroundColor: theme.textAreaBg, 
                        color: theme.text,
                        border: `1px solid ${theme.textAreaBorder}`,
                        borderRadius: '8px',
                        padding: '12px'}}></textarea>
            </div>
{/* Replaced inline styles with the button-container class from App.css */}
                <div className="container mb-4 button-container">
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleUpClick}>Uppercase</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleLowClick}>Lowercase</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleTitleCase}>Title Case</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleReverseText}>Reverse Text</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleSpeak}>Speak 🔊</button>
                    <button disabled={text.length === 0 } className={`btn action-btn ${btnClass}`} onClick={handleClearClick}>Clear</button>
                </div>
            <div className="containter mb-3">
                <h2>Summary :</h2>
                {/* <p><b>words :{text.endsWith(" ") ? text.split(" ").length-1 : text.split(" ").length} &nbsp;&nbsp; &nbsp; &nbsp;   charecters :{text.length}</b> </p> */}
                <p>
                    <b>
                        words: {text.length === 0 ? 0 : text.trim().split(/\s+/).filter(word => word !== "").length} 
                        &nbsp;&nbsp;&nbsp;&nbsp; 
                        characters: {text.length}
                    </b> 
                    </p>
                <h2>Preview</h2>
                <p style={{ 
                    padding: '15px',
            backgroundColor: isDark ? '#0f172a' : '#f8fafc',
            borderRadius: '8px',
            border: `1px solid ${theme.textAreaBorder}`,
            whiteSpace: 'pre-wrap',
                }}>{text.length>0 ? getHighlightedText() : "Enter text in above area to Preview here"}</p>
            </div>     
        </div>
    );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
  showAlert: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};