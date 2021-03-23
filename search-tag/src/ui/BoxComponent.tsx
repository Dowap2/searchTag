import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const BackgroundBox = styled.div`
  width: 1000px;
  height: 1000px;
  /* background: ${props => props.color}; */
`;
export function BoxComponent(props: any) {
  const mode = useSelector((state: any) => state.tagState.state.mode);
  return <BackgroundBox color={mode === "dark" ? "#000000" : "#ffffff"} />;
}
