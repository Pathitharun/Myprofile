import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Designed &amp; built by <span>Pathi Tarun Naidu</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
