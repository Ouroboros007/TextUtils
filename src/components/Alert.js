import React from 'react';

export default function Alert(props) {
  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert" style={{
            backgroundColor: props.alert.type === 'success' ? '#10b981' : '', 
            color: props.alert.type === 'success' ? 'white' : '',             
            border: 'none',
            borderRadius: '0px' 
          }}>
           <strong>{props.alert.type === 'success' ? 'Success: ' : ''}</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}