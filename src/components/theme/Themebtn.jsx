
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsFillMoonFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { Container } from '../../components/hooks/Countriesfetch'


function Themebtn() {

  const [themes, setThemes] = useState("darkTheme")
  const toggleTheme = () => {

    const newTheme = themes === "darkTheme" ? "lightTheme" : "darkTheme"
    setThemes(newTheme)
    document.body.dataset.themes = themes
  }

  return (
    <div>
      <button className='Btn' onClick={toggleTheme}>
        {themes === "darkTheme" ? 
        <motion.div variants={Container} initial="hidden" animate="visible" className='BtnTextDark'> <BsFillMoonFill /> Dark Mode </motion.div> : <motion.div variants={Container} initial="hidden" animate="visible" className='BtnTextLight'> <BsFillBrightnessHighFill /> Light Mode</motion.div>} </button>
    </div>
  )
}

export default Themebtn