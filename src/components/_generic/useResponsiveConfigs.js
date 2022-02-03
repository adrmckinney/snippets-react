export const useResponsiveConfigs = () => {
  const responsiveConfigs = expression => {
    switch (expression) {
      case 'sm':
        return 'sm:'
      case 'md':
        return 'md:'
      case 'lg':
        return 'lg:'
      case 'xl':
        return 'xl:'
      case '2xl':
        return '2xl:'
      default:
        return ''
    }
  }

  const mobileResponsive = expression => {
    switch (expression) {
      case true:
        return 'hidden'
      default:
        return ''
    }
  }

  return { responsiveConfigs, mobileResponsive }
}
