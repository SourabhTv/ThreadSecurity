import { render, fireEvent } from "@testing-library/react";
import CustomButton from "./Button";

describe("CustomButton Component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<CustomButton>Click me</CustomButton>);
    const button = getByText("Click me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-primary"); // Default variant should be primary
    expect(button).not.toBeDisabled(); // Default disabled state should be false
  });

  it("renders with specified props", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <CustomButton
        variant="success"
        onClick={onClickMock}
        disabled={true}
        size="lg"
        additionalProps={{ "data-testid": "custom-button" }}
      >
        Submit
      </CustomButton>
    );
    const button = getByText("Submit");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-success");
    expect(button).toHaveAttribute("disabled");
    expect(button).toHaveClass("btn-lg");

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);

    // Check for additionalProps
    expect(button).toHaveAttribute("data-testid", "custom-button");
  });
});
