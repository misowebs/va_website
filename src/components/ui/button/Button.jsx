import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ 
  children, 
  variant = 'outline', 
  size = 'md',
  to, 
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    secondary: 'btn-secondary'
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
