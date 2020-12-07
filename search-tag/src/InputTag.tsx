import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 50px;
`;

export function InputTag() {
  return (
    <div>
      <input type="text" />
    </div>
  );
}
