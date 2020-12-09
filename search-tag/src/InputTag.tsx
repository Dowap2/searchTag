import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
`;
export function InputTag() {
  const [tag, setTag] = useState<any>([]);
  const [value, setValue] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  function pressFunc(key: any, tagName: string) {
    const tagItem = [
      <div>
        {tagName}
        <button onClick={e => deleteFunc(tag.length)}>x</button>
      </div>
    ];
    if (key === "Enter") {
      setTag(tag.concat(tagItem));
      setValue("");
      setIndex(index + 1);
    }
  }

  function deleteFunc(len: number) {
    console.log(tag);
  }

  return (
    <div>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => pressFunc(e.key, value)}
      />
      <button onClick={e => console.log(tag)}></button>
    </div>
  );
}
