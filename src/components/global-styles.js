export const colorThemes = {
  primary: {
    bgColor: 'indigo-600',
    hoverBgColor: 'indigo-700',
    text: 'white',
    focusRing: 'indigo-500',
    focusBorder: 'indigo-500',
  },
  secondary: {
    bgColor: 'indigo-100',
    hoverBgColor: 'indigo-200',
    text: 'indigo-700',
    focusRing: 'indigo-500',
  },
  danger: {
    bgColor: 'red-600',
    hoverBgColor: 'red-700',
    text: 'gray-600',
    focusRing: 'red-500',
  },
}

export const buttonTheme = {
  primary: {
    bgColor: colorThemes.primary.bgColor,
    hoverBgColor: colorThemes.primary.hoverBgColor,
    text: colorThemes.primary.text,
    focus: colorThemes.primary.focusRing,
    focusBorder: colorThemes.primary.focusBorder,
  },
  secondary: {
    bgColor: colorThemes.secondary.bgColor,
    hoverBgColor: colorThemes.secondary.hoverBgColor,
    text: colorThemes.secondary.text,
    focus: colorThemes.secondary.focusRing,
  },
  cancel: {
    bgColor: 'white',
    hoverBgColor: 'bg-gray-50',
    focus: 'indigo-500',
    text: 'gray-700',
  },
  danger: {
    bgColor: colorThemes.danger.bgColor,
    hoverBgColor: colorThemes.danger.hoverBgColor,
    text: colorThemes.danger.text,
    focus: colorThemes.danger.focusRing,
  },
}

export const inputTheme = {
  normal: {
    text: 'gray-600',
    bgColor: 'white',
    borderColor: 'gray-300',
    borderWidth: '2',
    placeholder: 'gray-300',
    focusRing: colorThemes.primary.focusRing,
    focusBorder: colorThemes.primary.focusRing,
    labelText: 'gray-700',
  },
  error: {
    text: 'red-900',
    border: 'red-300',
    placeholder: 'red-300',
    focusRing: 'red-500',
    focusBorder: 'red-500',
    ariaDescribe: 'error',
  },
}
