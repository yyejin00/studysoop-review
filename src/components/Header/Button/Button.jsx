import styles from './Button.css.js';
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        // clsx말고 바닐라로 사용하기
        styles.button,
        styles[safeVariant],
        styles[safeSize],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
