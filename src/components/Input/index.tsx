import styled from "styled-components"
import { IconButton, Typography, Input } from "@material-ui/core";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { THEME_LIGHT } from "src/constants";
import { useAppSelector } from "src/hooks";

const ReInput = styled(Input)`
  width: "100%";
  padding: "16px 55px 16px 16px";
  font-size: "14px";
  font-weight: 400;
  border-radius: "24px";
  outline: "none";
  box-sizing: "border-box";
  border: "1px solid #0d132d";
  overflow: "auto";
`;
const InputBox = styled.div<{ top?: number}>`
width: "inherit";
marginTop: ${top + 'px'};
box-sizing: "border-box";
`;

const Label = styled(Typography)({
  marginBottom: "8px",
  color: "#83879e",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
});

const Warn = styled(Typography)({
  marginTop: "6px",
  paddingLeft: "18px",
  fontSize: "12px",
  color: "#ef4f75",
  lineHeight: "14px",
});

const InputWrap = styled.div`
width: "100%";
position: "relative";
`

const IconBox = styled.div`
display: "flex";
position: "absolute";
top: "0";
bottom: "0";
right: "15px";
align-items: "center";
`;

export interface NormalInputProps {
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  value?: any;
  onChange?: any;
  keyName: string;
}

export interface NormalInputGroupProps extends NormalInputProps {
  label?: string;
  correct?: boolean;
  width?: string;
  top?: number;
  warn?: string;
  error?: boolean;
  fullWidth?: boolean;
  onClear?: any;
}

export const NormalInput = ({
  onChange,
  value = "",
  type = "text",
  keyName,
  readOnly = false,
  placeholder = "input ...",
}: NormalInputProps) => {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <ReInput
      readOnly={readOnly}
      type={type}
      placeholder={placeholder}
      value={value}
      autoFocus
      style={{
        backgroundColor: "transparent",
        color: theme === THEME_LIGHT ? "#000" : "#F9FAFC",
      }}
      onChange={e => {
        typeof onChange === "function" && onChange(e.currentTarget.value, keyName);
      }}
    />
  );
};

export const NormalInputGroup = ({
  top = 0,
  width,
  label,
  warn,
  keyName,
  value,
  type,
  readOnly,
  error = false,
  correct = false,
  placeholder = "input ...",
  onClear,
  onChange,
}: NormalInputGroupProps) => {
  return (
    <InputBox top={top}>
      {label && <Label>{label}</Label>}
      <InputWrap>
        <NormalInput
          type={type}
          value={value}
          keyName={keyName}
          onChange={onChange}
          readOnly={readOnly}
          placeholder={placeholder}
        />
        {(correct || error) && (
          <IconBox>
            {error && value && (
              <IconButton
                onClick={() => {
                  onClear(keyName);
                }}
              >
                <CancelRoundedIcon viewBox={"0 0 24 24"} htmlColor="#EF4F75" />
              </IconButton>
            )}
            {correct && (
              <IconButton>
                <CheckCircleRoundedIcon viewBox={"0 0 24 24"} htmlColor="#1AC1B5" />
              </IconButton>
            )}
          </IconBox>
        )}
      </InputWrap>
      {warn && <Warn>{warn}</Warn>}
    </InputBox>
  );
};

export const FormFieldsGroup = ({ fields }: { fields: NormalInputGroupProps[] }) => {
  return (
    <>
      {fields.map((fieldProps, i) => {
        return <NormalInputGroup key={i} {...fieldProps} />;
      })}
    </>
  );
};
