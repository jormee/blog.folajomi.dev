import React, { useState, createContext, useEffect } from 'react'

const defaultTheme = {
  isLightTheme: true,
  themeToggle: () => {}
}

export const ThemeContext = createContext(defaultTheme)

const ThemeContextProvider = ({ children }) => {
  const [ isLightTheme, setTheme ] = useState(defaultTheme.isLightTheme)

  const theme = isLightTheme ? 'light' : 'dark'

  // toggle between light and dark themes and simultaneously updating the user's theme preference in the localStorage

  const themeToggle = () => {
    setTheme(!isLightTheme)
    localStorage.setItem("theme", JSON.stringify({isLightTheme: !isLightTheme}))
  }

  useEffect(() => {
    // check for user's theme preference in the local storage
    const themePreference = localStorage.getItem("theme")
    themePreference && setTheme(JSON.parse(themePreference).isLightTheme)

  }, [theme])

  return(
    <ThemeContext.Provider value={{isLightTheme, theme, themeToggle}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider