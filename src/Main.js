import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
  const {show} = useAlert();
  return(
    <>
      <h1>Hello in example with Context</h1>
      <button className="btn btn-success" onClick={() => show('This text from Main.js')}>Show alert</button>
    </>
  )
}
