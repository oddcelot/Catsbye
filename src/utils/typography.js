import Typography from 'typography'
import typographyTheme from 'typography-theme-github'

typographyTheme.baseFontSize = '16px'

typographyTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  h1: {
    marginBottom: rhythm(3 / 4),
  },
})

const typography = new Typography(typographyTheme)

export default typography
