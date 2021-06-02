import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1, h2, h3': {
    marginTop: 'unset',
    marginBottom: 'unset'
  },

  'a': {
    color: 'unset',
    textShadow: 'none',
    backgroundImage: 'none'
  }
})

const typography = new Typography(fairyGateTheme)

export default typography