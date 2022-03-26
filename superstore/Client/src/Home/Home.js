import React from 'react';
import '../css/Home.css';     // two dots because you have to go to previous directory first
export default function WelcomePage() {
  return (
    <div>
        <span class = "superstore_name">WELCOME TO SUPERSTORE</span>
        <button onClick = {event => window.location.href='/signup'}>signup</button>
    </div>
  )
}