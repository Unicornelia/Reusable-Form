import styled from "@emotion/styled";

export const Input = styled("input")(() => ({
  padding: "8px",
  margin: "8px",
  borderRadius: "4px",
  backgroundColor: "lightgrey"
}));


export const LabelTitle = styled("div")(() => ({
  fontWeight: 600,
}));


export const ValidationWrapper = styled("p")(() => ({
  color: 'red',
  fontWeight: 300,
  fontSize: '12px'
}));