import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomRangeInput from "./RangeInput";

describe("CustomRangeInput Component", () => {
  it("renders with default props and handles range change", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <CustomRangeInput
        value={50}
        onChange={onChangeMock}
        min={0}
        max={100}
        step={1}
        disabled={false}
        additionalProps={{ "data-testid": "custom-range-input" }}
      />
    );

    const rangeInput = getByTestId("custom-range-input");

    expect(rangeInput).toBeInTheDocument();
    // expect(rangeInput).toHaveValue(50);

    fireEvent.change(rangeInput, { target: { value: "75" } });

    expect(onChangeMock).toHaveBeenCalledWith(75);
    // expect(rangeInput).toHaveValue(75);

    // Check for additionalProps
    expect(rangeInput).toHaveAttribute("data-testid", "custom-range-input");
  });

  // You can add more test cases for different scenarios here
});
