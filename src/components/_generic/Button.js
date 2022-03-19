import { CheckIcon, MenuAlt2Icon, PlusSmIcon, MailIcon } from '@heroicons/react/solid'
import { MailIcon as MailOutline } from '@heroicons/react/outline'
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

const Button = ({
  as: CustomTag = 'button',
  type,
  title,
  size,
  status,
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
  ref,
  onKeyPress,
}) => {
  return (
    <CustomTag
      type={type}
      to={to || '/'}
      ref={ref}
      disabled={disabled ?? false}
      onClick={onClick}
      onKeyPress={onKeyPress}
      style={overrideButtonStyle}
      role={role}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      className={[
        'inline-flex',
        'rounded-md',
        'shadow-sm',
        `${SIZES[size] ?? SIZES['medium']}`,
        `${STATUSES[status] ?? STATUSES['primary']}`,
        `${LABEL_POSITION[labelPosition] ?? LABEL_POSITION['center']}`,
        `${customButtonStyle}`,
      ].join(' ')}
    >
      {icons({ customIconStyle, overrideIconStyle, size })[0][icon]}
      {title}
      {children}
      {!!srOnly && <span className='sr-only'>{srOnly}</span>}
    </CustomTag>
  )
}

export default Button

const SIZES = {
  extraSmall: ['px-1', 'py-0.5', 'text-xs', 'items-center'].join(' '),
  small: ['px-3', 'py-2', 'text-sm', 'leading-4', 'items-center'].join(' '),
  medium: ['px-4', 'py-2', 'text-base', 'font-medium', 'items-center'].join(' '),
  large: ['px-6', 'py-3', 'text-lg', 'font-medium', 'items-center'].join(' '),
  text: ['py-2', 'px-4', 'text-sm'].join(' '),
  mobileHamburger: 'p-2',
  null: '',
}

const LABEL_POSITION = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
}

const STATUSES = {
  primary: [
    `text-${buttonTheme.primary.text}`,
    `bg-${buttonTheme.primary.bgColor}`,
    `hover:bg-${buttonTheme.primary.hoverBgColor}`,
    'border',
    'border-transparent',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    `focus:ring-${buttonTheme.primary.focus}`,
  ].join(' '),
  secondary: [
    `text-${buttonTheme.secondary.text}`,
    `bg-${buttonTheme.secondary.bgColor}`,
    `hover:bg-${buttonTheme.secondary.hoverBgColor}`,
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    `focus:ring-${buttonTheme.secondary.focus}`,
  ].join(' '),
  cancel: [
    `text-${buttonTheme.cancel.text}`,
    `bg-${buttonTheme.cancel.bgColor}`,
    `hover:bg-${buttonTheme.cancel.hoverBgColor}`,
    'border',
    'border-gray-300',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    `focus:ring-${buttonTheme.cancel.focus}`,
  ].join(' '),
  CTA: [
    'text-snow',
    'bg-forestGreen',
    'hover:bg-russianGreen',
    'border',
    'border-transparent',
  ].join(' '),
  text: ['block', 'text-gray-700', 'hover:bg-gray-100'].join(' '),
  mobileHamburger: [
    'bg-mediumPurple',
    'inline-flex',
    'items-center',
    'text-indigo-200',
    'hover:text-white',
    'hover:bg-darkerPurple',
    'hover:bg-opacity-75',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-darkerPurple',
    'focus:ring-white',
  ].join(' '),
  icon: 'bg-transparent',
  null: '',
}

const ICON_SIZES = {
  extraSmall: 'h-3 w-3',
  small: 'h-4 w-4',
  medium: 'h-6 w-6',
  large: 'h-8 w-8',
}

const icons = ({ customIconStyle, overrideIconStyle, size }) => [
  {
    mailOutline: (
      <MailOutline
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    mailSolid: (
      <MailIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    refresh: (
      <RefreshIcon
        className={`${ICON_SIZES[size]} mr-2 self-center animate-spin transform rotate-180 ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    edit: (
      <PencilAltIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    delete: (
      <TrashIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    xicon: (
      <XIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    check: (
      <CheckIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    reply: (
      <ReplyIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    code: (
      <CodeIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    terminal: (
      <TerminalIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    menu: (
      <MenuAlt2Icon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
    plusSm: (
      <PlusSmIcon
        className={`${ICON_SIZES[size]} mr-2 self-center ${customIconStyle}`}
        style={overrideIconStyle}
        aria-hidden='true'
      />
    ),
  },
]
