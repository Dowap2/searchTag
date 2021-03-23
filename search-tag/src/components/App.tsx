import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TagComponent } from "../components/TagComponents";
import { BoxComponent } from "../ui/BoxComponent";

function App() {
  const Box = styled.div`
    background: ${(props: any) => props.color};
  `;
  const mode = useSelector((state: any) => state.tagState.state.mode);
  return (
    <Box color={mode === "light" ? "#ffffff" : "#000000"}>
      <TagComponent />
      <button onClick={e => console.log(mode)}>sdafafs</button>
    </Box>
  );
}

export default App;
