import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
`;

export function InputTag() {
  const [tag, setTag] = useState<any>([]);
  const [value, setValue] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  function pressFunc(key: any, tagName: string) {
    const tagItem = [<div>{tagName}</div>];
    if (key === "Enter") {
      setTag(tag.concat(tagItem));
      setValue("");
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => pressFunc(e.key, value)}
      />
      <button onClick={e => console.log(tag)}></button>
      {tag}
    </div>
  );
}
