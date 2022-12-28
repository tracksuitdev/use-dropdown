import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export type UseDropdownProps = {
  /**
   * Executes when {@link UseDropdown#open open} is called
   */
  onOpen?: () => void;
  /**
   * Executes when {@link UseDropdown#close close} is called
   */
  onClose?: () => void;
  /**
   * If true, {@link UseDropdown#open open} and {@link UseDropdown#close close} will do nothing
   */
  disabled?: boolean;
  /**
   * These refs will be used when determining what constitutes an event outside of dropdown.
   */
  additionalRefs?: RefObject<HTMLElement>[];
  /**
   * Event that triggers dropdown close if outside of dropdown, default is "click"
   */
  event?: "mousedown" | "click"
};

export type UseDropdown<T extends HTMLElement = HTMLUListElement> = {
  /**
   * Ref for dropdown element
   */
  dropdownRef: RefObject<T>;
  /**
   * Dropdown state
   */
  isOpen: boolean;
  /**
   * Sets isOpen to true
   */
  open: () => void;
  /**
   * Sets isOpen to false
   */
  close: () => void;
};

/**
 * Hook for managing dropdown state.
 *
 * Adds window listener that will {@link UseDropdown#close close} dropdown on clicks outside of
 * {@link UseDropdown#dropdownRef dropdownRef} and {@link UseDropdownProps#additionalRefs additional refs}
 */
export function useDropdown<T extends HTMLElement = HTMLUListElement>({
  onClose,
  onOpen,
  disabled,
  additionalRefs,
  event = "click"
}: UseDropdownProps = {}): UseDropdown<T> {
  const dropdownRef = useRef<T>(null);
  const additionalRefsRef = useRef(additionalRefs);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenRef = useRef(onOpen);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    additionalRefsRef.current = additionalRefs;
  }, [additionalRefs]);

  useEffect(() => {
    onOpenRef.current = onOpen;
  }, [onOpen]);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const open = useCallback(() => {
    if (!disabled) {
      setIsOpen(true);
      onOpenRef.current?.();
    }
  }, [disabled]);

  const close = useCallback(() => {
    if (!disabled) {
      setIsOpen(false);
      onCloseRef.current?.();
    }
  }, [disabled]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      const inAdditional = additionalRefsRef.current?.some(ref => ref?.current?.contains(e.target as Node));
      const inDropdown = dropdownRef.current?.contains(e.target as Node);
      if (!inDropdown && !inAdditional) {
        close();
      }
    }
    window.addEventListener(event, handler);

    return () => {
      window.removeEventListener(event, handler);
    };
  }, [close, event]);

  return {
    dropdownRef,
    isOpen,
    open,
    close,
  };
}
