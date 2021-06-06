import React from 'react'

import ThemeContextProvider from "./src/contexts/themeContext";

require("prism-themes/themes/prism-coldark-cold.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

export const wrapRootElement = ({ element }) => {
  return(
    <ThemeContextProvider>
      { element }
    </ThemeContextProvider>
  )
}