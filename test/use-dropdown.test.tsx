import { useDropdown } from "../src";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useDropdown tests", () => {
  test("open", () => {
    const onOpen = jest.fn();
    const { result } = renderHook(() => useDropdown({ onOpen }));

    act(() => {
      result.current.open();
    });

    expect(onOpen).toBeCalled();
    expect(result.current.isOpen).toBeTruthy();
  });

  test("close", () => {
    const onClose = jest.fn();
    const { result } = renderHook(() => useDropdown({ onClose }));

    act(() => {
      result.current.close();
    });

    expect(onClose).toBeCalled();
    expect(result.current.isOpen).toBeFalsy();
  });

  test("open and close do nothing if disabled", () => {
    const onClose = jest.fn();
    const onOpen = jest.fn();
    const { result } = renderHook(() => useDropdown({ onClose, onOpen, disabled: true }));

    act(() => {
      result.current.open();
      result.current.close();
      result.current.open();
    });

    expect(result.current.isOpen).toBeFalsy();
    expect(onClose).not.toBeCalled();
    expect(onOpen).not.toBeCalled();
  });
});
