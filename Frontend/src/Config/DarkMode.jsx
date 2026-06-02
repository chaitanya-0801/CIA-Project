import React from 'react'

const DarkMode = () => {
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark');
    }

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}

export default DarkMode
