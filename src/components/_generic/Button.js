import { CheckIcon, MenuAlt2Icon, PlusSmIcon } from '@heroicons/react/solid'
import { MailSolid } from '@graywolfai/react-heroicons'
import { MailOutline } from '@graywolfai/react-heroicons'
import {
  RefreshIcon,
  PencilAltIcon,
  TrashIcon,
  XIcon,
  ReplyIcon,
  CodeIcon,
  TerminalIcon,
} from '@heroicons/react/outline'
import { buttonTheme } from '../global-styles'
// import { Link } from 'react-router-dom'

const SIZES = {
  extraSmall: 'px-1 py-0.5 text-xs items-center',
  small: 'px-3 py-2 text-sm leading-4 items-center',
  medium: 'px-4 py-2 text-base font-medium items-center',
  large: 'px-6 py-3 text-lg font-medium items-center',
  text: 'py-2 px-4 text-sm',
  mobileHamburger: 'p-2',
  null: '',
}

const LABEL_POSITION = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
}

const STATUSES = {
  primary: `bg-${buttonTheme.primary.bgColor} hover:bg-${buttonTheme.primary.hoverBgColor} text-${buttonTheme.primary.text} border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonTheme.primary.focus}`,
  secondary: `bg-${buttonTheme.secondary.bgColor} hover:bg-${buttonTheme.secondary.hoverBgColor} text-${buttonTheme.secondary.text} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonTheme.secondary.focus}`,
  cancel: `bg-${buttonTheme.cancel.bgColor} hover:bg-${buttonTheme.cancel.hoverBgColor} text-${buttonTheme.cancel.text} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonTheme.cancel.focus}`,
  CTA: 'text-snow bg-forestGreen hover:bg-russianGreen border border-transparent',
  text: 'block text-gray-700 hover:bg-gray-100',
  mobileHamburger:
    'bg-mediumPurple inline-flex items-center text-indigo-200 hover:text-white hover:bg-darkerPurple hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkerPurple focus:ring-white',
  null: '',
}

const ICON_SIZES = {
  extraSmall: 'h-3 w-3',
  small: 'h-4 w-4',
  medium: 'h-6 w-6',
  large: 'h-8 w-8',
}

const Button = ({
  type,
  title,
  buttonSize,
  buttonStatus,
  disabled,
  icon,
  onClick,
  to,
  customButtonStyle,
  overrideButtonStyle,
  customIconStyle,
  overrideIconStyle,
  role,
  labelPosition,
  children,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  srOnly,
}) => {
  const ICONS = {
    mailOutline: (
      <MailOutline
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    mailSolid: (
      <MailSolid
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    refresh: (
      <RefreshIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center animate-spin transform rotate-180 ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    edit: (
      <PencilAltIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    delete: (
      <TrashIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    xicon: (
      <XIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    check: (
      <CheckIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    reply: (
      <ReplyIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    code: (
      <CodeIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    terminal: (
      <TerminalIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    menu: (
      <MenuAlt2Icon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    plusSm: (
      <PlusSmIcon
        className={`${ICON_SIZES[buttonSize]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
  }

  //   if (type === 'link') {
  //     return (
  //       <Link
  //         to={to || '/'}
  //         disabled={disabled ?? false}
  //         onClick={onClick}
  //         style={overrideButtonStyle}
  //         aria-controls={ariaControls}
  //         aria-expanded={ariaExpanded}
  //         aria-haspopup={ariaHaspopup}
  //         role={role}
  //         className={`
  //                     inline-flex rounded-md shadow-sm
  //                     ${SIZES[buttonSize] ?? SIZES['medium']}
  //                     ${STATUSES[buttonStatus] ?? STATUSES['primary']}
  //                     ${LABEL_POSITION[labelPosition] ?? LABEL_POSITION['center']}
  //                     ${customButtonStyle}
  //                 `}
  //       >
  //         {ICONS[icon]}
  //         {title}
  //       </Link>
  //     )
  //   }

  return (
    <button
      type={type}
      disabled={disabled ?? false}
      onClick={onClick}
      style={overrideButtonStyle}
      role={role}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      className={`
            inline-flex rounded-md shadow-sm
            ${SIZES[buttonSize] ?? SIZES['medium']} 
            ${STATUSES[buttonStatus] ?? STATUSES['primary']}
            ${LABEL_POSITION[labelPosition] ?? LABEL_POSITION['center']}
            ${customButtonStyle}
        `}
    >
      {ICONS[icon]}
      {title}
      {children}
      {!!srOnly && <span className='sr-only'>{srOnly}</span>}
    </button>
  )
}

export default Button
