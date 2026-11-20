import React from 'react';
import PropTypes from 'prop-types';

export default function About({ mode = 'dark' }) {
  const isDark = mode === 'dark';
  const theme = {
    cardBg: isDark ? '#1e293b' : '#ffffff',
    text: isDark ? '#e2e8f0' : '#1e293b',
    mutedText: isDark ? '#94a3b8' : '#475569',
    borderColor: isDark ? '#334155' : '#cbd5e1',
    accent: isDark ? '#6366f1' : '#4f46e5',
  };

  return (
    <div className="container my-4" style={{ color: theme.text }}>
      <h2 className="mb-3 fw-bold">About TextUtils</h2>
      <p className="lead mb-4" style={{ color: theme.mutedText }}>
        TextUtils is a fast, lightweight utility for analyzing and transforming
        text right in your browser. Whether you are cleaning up formatting,
        checking word counts, or preparing copy, everything happens instantly
        with zero server uploads.
      </p>

      <div className="row g-3">
        <div className="col-md-4">
          <div
            className="card h-100 p-3"
            style={{
              backgroundColor: theme.cardBg,
              color: theme.text,
              border: `1px solid ${theme.borderColor}`,
            }}
          >
            <h5 className="fw-semibold" style={{ color: theme.accent }}>
              Instant Analysis
            </h5>
            <p className="mb-0" style={{ color: theme.mutedText }}>
              Track word count, character count, and estimated reading time in
              real time as you type.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card h-100 p-3"
            style={{
              backgroundColor: theme.cardBg,
              color: theme.text,
              border: `1px solid ${theme.borderColor}`,
            }}
          >
            <h5 className="fw-semibold" style={{ color: theme.accent }}>
              Quick Formatting
            </h5>
            <p className="mb-0" style={{ color: theme.mutedText }}>
              Convert case, strip extra spaces, and copy cleaned text to your
              clipboard with a single click.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card h-100 p-3"
            style={{
              backgroundColor: theme.cardBg,
              color: theme.text,
              border: `1px solid ${theme.borderColor}`,
            }}
          >
            <h5 className="fw-semibold" style={{ color: theme.accent }}>
              Private &amp; Browser-Based
            </h5>
            <p className="mb-0" style={{ color: theme.mutedText }}>
              All processing runs locally in your browser—your text is never
              stored or sent to any external server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
};