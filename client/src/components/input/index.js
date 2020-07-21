import React from 'react';

const Input = ({ label, id, value, onChange }) => {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} value={value} onChange={onChange} />
        </div>
    )
}

export default Input;