import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({ title, onClick }) => {
  return (
    <Button type="submit" onClick={onClick}>{title}</Button>
  )
}

const Button = styled.button`
  background: grey;
  color: #fff;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  border: 2px solid white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #fff;
    border: 2px solid black;
    color: #234465;
    font-style: italic;
  }
`

export default SubmitButton