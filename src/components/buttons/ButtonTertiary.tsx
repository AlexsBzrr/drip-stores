interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonTertiary: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-yellow-1 text-white hover:bg-yellow-2 h-10 w-28 text-sm font-bold py-2 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonTertiary;
