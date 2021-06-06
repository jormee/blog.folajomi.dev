import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1, h2, h3': {
    marginTop: 'unset',
    marginBottom: 'unset',
    color: 'unset'
  },

  'a': {
    color: 'unset',
    textShadow: 'none',
    backgroundImage: 'none'
  },

  'blockquote': {
    borderLeft: '3px solid gray',
    color: 'unset'
  }
})

const typography = new Typography(fairyGateTheme)

export default typography