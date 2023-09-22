import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if you haven't already

interface CustomRangeInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  additionalProps?: Record<string, any>; // Additional props to pass to the Form.Control
}

const CustomRangeInput: React.FC<CustomRangeInputProps> = ({
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  additionalProps = {}
}) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const inputValue = parseFloat(e.target.value);
      onChange(inputValue);
    }
  };

  return (
    <Form.Control
      type="range"
      value={value}
      onChange={handleRangeChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      {...additionalProps}
    />
  );
};

export default CustomRangeInput;
