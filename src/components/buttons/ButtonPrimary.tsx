interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <button
      className={`bg-primary text-white hover:bg-tertiary text-sm font-bold py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
