import React from 'react'
import { Route, Routes, Link } from "react-router-dom"


export default function header() {
  return (
    <div>
         <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Abouts">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
    </div>
  )
}
