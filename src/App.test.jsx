import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

describe("Confirmation component", () => {
  it("should render", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("dialog")).toBeInTheDocument();
  });

  it('should have a title saying "Confirmation"', () => {
    const { getByText } = render(<App title="Confirmation" />);
    expect(getByText("Confirmation")).toBeInTheDocument();
  });

  it("should have a dynamic confirmation question", () => {
    const question = "Do you confirm?";
    const { getByText } = render(<App question={question} />);
    expect(getByText(question)).toBeInTheDocument();
  });

  it('should have an "OK" button', () => {
    const { getByRole } = render(<App />);
    expect(getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });

  it('should have a "Cancel" button', () => {
    const { getByRole } = render(<App />);
    expect(getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it('should be able to receive a handler for the "OK" button and execute it upon click', () => {
    // 🕵🏾‍♂️ function that will be called when the "OK" button is clicked
    const handleConfirmation = jest.fn();
    const { getByRole } = render(
      <App confirmationHandler={handleConfirmation} />
    );

    // Prioritize `getByRole` over `getByText`
    // https://testing-library.com/docs/queries/about#priority
    userEvent.click(getByRole("button", { name: /ok/i }));

    expect(handleConfirmation).toHaveBeenCalled();
  });

  it('should be able to receive a handler for the "Cancel" button and execute it upon click', () => {
    // 🕵🏾‍♂️ function that will be called when the "OK" button is clicked
    const handleCancel = jest.fn();
    const { getByRole } = render(<App cancelHandler={handleCancel} />);

    // Prioritize `getByRole` over `getByText`
    // https://testing-library.com/docs/queries/about#priority
    userEvent.click(getByRole("button", { name: /cancel/i }));

    expect(handleCancel).toHaveBeenCalled();
  });
});
