import React from "react";
import styled from "styled-components";
// import { BaseFormFieldProps, getInputProps } from "./formikUtils";
import FieldWrapper, {
  BaseFormFieldProps,
} from "../../components/FieldWrapper";

const SText = styled.input`
  display: block;
  width: 100%;
  cursor: text;
  font-weight: 600;
  background: var(--bg-secondary);
  &:focus {
    border-color: ${(p) => p.theme.color.primary};
  }
  height: 48px;
  outline: none;
  border: none;
  border-radius: none;
  color: var(--text-primary);
  padding: 0 1rem;
`;

const Embelishment = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;
  background: var(--border-color);
  font-size: 0.875rem;
  font-weight: 500;
`;

type WrapperProps = {
  disabled?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  border-radius: 5px;
  overflow: hidden;
  display: flex;
`;

type FocusRingProps = {
  disabled?: boolean;
  hasEmbelishment?: boolean;
};

const FocusRing = styled.div<FocusRingProps>`
  width: 100%;
  border: 1px solid var(--bg-secondary);
  border-radius: ${(p) => (p.hasEmbelishment ? "5px 0px 0px 5px" : "5px")};
  &:focus-within,
  &:hover {
    border-color: ${(p) => (p.disabled ? `none` : `var(--primary)`)};
  }
`;

export const TextField: React.FC<
  JSX.IntrinsicElements["input"] &
    BaseFormFieldProps & {
      embelishment?: React.ReactNode;
    }
> = (p) => {
  const {
    embelishment,
    autoComplete,
    spellCheck,
    type = "text",
    inputMode,
    min,
    pattern,
    ...props
  } = p;

  return (
    <FieldWrapper {...props}>
      <Wrapper disabled={props.disabled}>
        <FocusRing disabled={props.disabled} hasEmbelishment={!!embelishment}>
          <SText
            min={min}
            type={type}
            inputMode={inputMode}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            pattern={pattern}
            placeholder={props.placeholder}
            disabled={props.disabled}
            autoComplete={autoComplete}
            spellCheck={spellCheck}
            style={{ borderRadius: embelishment ? "5px 0 0 5px" : "5px" }}
          />
        </FocusRing>

        {embelishment && <Embelishment>{embelishment}</Embelishment>}
      </Wrapper>
    </FieldWrapper>
  );
};

export default TextField;
