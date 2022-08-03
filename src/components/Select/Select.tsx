import React, { useRef } from "react";
import { useSelect, UseSelectProps } from "downshift";
import SVGArrow from "./SVGArrow";

import FieldWrapper, {
  BaseFormFieldProps,
} from "../../components/FieldWrapper";

import {
  SCSelectButton,
  Placeholder,
  SelectArrowSvg,
  DropdownList,
  DropdownItem,
  SelectContainer,
  SelectOptionButton,
} from "./components";

export { resetIdCounter } from "downshift";

export type SelectOption = {
  label: React.ReactNode;
  value: string;
};

type SelectButtonProps = {
  children: React.ReactNode;
  placeholder?: string;
  toggleButtonProps: any;
};

const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ children, placeholder, ...rest }, ref) => {
    return (
      <SCSelectButton ref={ref} {...rest}>
        {children || <Placeholder>{placeholder}</Placeholder>}
        <SelectArrowSvg>
          <SVGArrow />
        </SelectArrowSvg>
      </SCSelectButton>
    );
  }
);

type SelectProps = {
  disabled?: boolean;
} & UseSelectProps<SelectOption> &
  BaseFormFieldProps;

export const Select = (props: SelectProps) => {
  const { label, items, initialHighlightedIndex = -1, ...rest } = props;

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    selectedItem,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    initialHighlightedIndex,
    ...rest,
  });

  const selectContainerRef = useRef<HTMLDivElement>(null);
  const dropdownListRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    const checkFlip = () => {
      const dropdownBottom =
        dropdownListRef.current?.getBoundingClientRect().bottom || 0;

      // The dropdown bottom position if display at bottom
      const bottomPosition =
        selectContainerRef.current && dropdownListRef.current
          ? selectContainerRef.current?.getBoundingClientRect().bottom +
            dropdownListRef.current?.getBoundingClientRect().height
          : 0;

      if (isOpen) {
        bottomPosition > window.innerHeight ||
        dropdownBottom > window.innerHeight
          ? dropdownListRef.current?.classList.add("top")
          : dropdownListRef.current?.classList.remove("top");
      }
    };

    checkFlip();

    window.addEventListener("scroll", checkFlip);

    return () => {
      window.removeEventListener("scroll", checkFlip);
    };
  }, [isOpen]);

  return (
    <SelectContainer ref={selectContainerRef}>
      <FieldWrapper {...props} {...getLabelProps()}>
        <SelectButton type="button" {...getToggleButtonProps()}>
          {selectedItem?.label}
        </SelectButton>

        <DropdownList
          {...getMenuProps({ ref: dropdownListRef })}
          style={{
            width: "auto",
          }}
          isOpen={isOpen}
        >
          {isOpen &&
            items.map((item, index) => (
              <DropdownItem
                key={`${item.value}-${index}`}
                {...getItemProps({ index, item })}
              >
                <SelectOptionButton
                  size="sm"
                  active={selectedItem?.value === item.value}
                  highlighted={highlightedIndex === index}
                  value={item.value}
                >
                  {item.label}
                </SelectOptionButton>
              </DropdownItem>
            ))}
        </DropdownList>
      </FieldWrapper>
    </SelectContainer>
  );
};

export default Select;
