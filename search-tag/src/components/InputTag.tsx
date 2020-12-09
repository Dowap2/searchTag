import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
`;
export function InputTag(props: any) {
  const state = useSelector((state: any) => state.tagState.state);
  function enterFunc() {
    props.tag(state.tag.concat([state.value]));
    props.value("");
  }

  return (
    <div>
      <Input
        value={state.value}
        onChange={e => props.value(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            enterFunc();
          }
        }}
      />
      {state.tag}
      <button onClick={e => console.log(state)}></button>
    </div>
  );
}
