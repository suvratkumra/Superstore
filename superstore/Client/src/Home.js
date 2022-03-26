import React from 'react';

export default function Home() {
  return (
    <div>
        <span class = "superstore_name">WELCOME TO SUPERSTORE</span>
        <button onClick = {event => window.location.href='/signup'}>signup</button>
    </div>
  )
}