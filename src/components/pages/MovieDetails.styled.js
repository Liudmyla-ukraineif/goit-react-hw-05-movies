import styled from "styled-components";
import { Link } from "react-router-dom";

export const Input = styled.input`
  padding: 8px 64px 8px 8px;
  border-radius: 4px;
  border-color: #e3e3e3;
  font: inherit;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  border-bottom: 3px solid #e3e3e3;
`;

export const TitleMovie = styled.h2`
  font-family:sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #262626;
`;

export const TitleDetails = styled.h3`
  font-family:sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;

export const TextDetails = styled.p`
  font-family:sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #262626;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  padding: 8px;
  margin: 8px;
  align-items: center;
  text-align: center;
  font-family:sans-serif;
  font-size: 12px;
  color: #0d0d0d;
  line-height: 1.2;
  text-decoration: none;
  border-radius: 4px;
  border-color: #000000;
  background-color: #f2f2f2;
`;

export const LinkDetails = styled(Link)`
  font-family:sans-serif;
  font-size: 14px;
  color: blue;
  line-height: 1.8;
  text-decoration: underline;
  text-decoration-color: blue;
`;