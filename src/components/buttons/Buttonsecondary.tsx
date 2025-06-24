interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disablad?: boolean;
}

const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-light-gray-3 text-primary hover:bg-secondary hover:text-light-gray-3 h-10 w-28 text-sm font-bold py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
