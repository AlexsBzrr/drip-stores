interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-primary h-10 w-28 text-white text-sm font-bold py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
