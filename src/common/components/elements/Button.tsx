import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  children,
  isLoading,
  className = '',
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-[15px] font-medium text-brand-foreground transition-all duration-300 hover:bg-brand-muted dark:bg-brand dark:text-brand-foreground dark:hover:bg-brand-muted ${className}`}
      {...rest}
    >
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
