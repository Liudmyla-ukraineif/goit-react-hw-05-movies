import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  padding: 16px;
`;

export const Input = styled.input`
  padding: 8px 64px 8px 8px;
  border-radius: 4px;
  border-color: #e3e3e3;
  font: inherit;
`;

export const Button = styled.button`
  text-align: center;
  justify-content: center;
  font-family:sans-serif;
  font-size: 14px;
  padding: 8px 8px;
  margin-left: 8px;
  border-radius: 4px;
  border-color: #e3e3e3;
  font: inherit;
`;

export const LinkSearch = styled(Link)`
  font-family:sans-serif;
  font-size: 14px;
  color: blue;
  line-height: 1.2;
  text-decoration: underline;
  text-decoration-color: blue;
`;