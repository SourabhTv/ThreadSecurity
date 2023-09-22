import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
type Tvariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link";
type Tsize = "sm" | "lg";
interface IbuttonProps {
  variant?: Tvariant;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode | string;
  size?: Tsize;
  additionalProps?: Record<string, any>; // Additional props to pass to the Button
}

const CustomButton: React.FC<IbuttonProps> = ({
  variant = "primary",
  onClick,
  disabled,
  children,
  size,
  additionalProps = {}
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      size={size}
      {...additionalProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
