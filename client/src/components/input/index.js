import React from 'react';

const Input = ({ label, error, id, value, onChange, onBlur, type }) => {
    return (
        <label>
            <span htmlFor={id}>{label}</span>
            <input type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
            {/* {error ? (<span>This is not a valid email!</span>) : null} */}
        </label>
    )
}

export default Input;