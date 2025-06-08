import './Button.style.scss'

const buttonTypesClasses = {
  google : 'google-sign-in',
  inverted: 'inverted'
}

function Button({children,buttonType,...otherProps}) {
  return (
    <button className={`button-container ${buttonTypesClasses[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button;