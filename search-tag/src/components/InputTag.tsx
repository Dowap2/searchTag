import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const InputBox = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  border: 1px solid #000000;
  white-space: nowrap;
  overflow: auto;
`;
const Input = styled.input`
  width: 600px;
  height: 100%;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  background: none;
`;
const Tag = styled.div`
  height: 30px;
  border: 1px solid #000000;
  float: left;
  border-radius: 20px;
`;
const TagBox = styled.div``;
const TagName = styled.div`
  margin: 10px;
  text-align: center;
  line-height: 20px;
  float: left;
`;
const Xbutton = styled.button`
  width: 10px;
  height: 10px;
  margin: 10px;
  text-align: center;
  border: 0;
  background: none;
`;

export function InputTag(props: any) {
  const state = useSelector((state: any) => state.tagState.state);
  const tagArray: Array<any> = [];
  function enterFunc() {
    props.value(state.value.trim());
    const str: string = state.value.replace(/ /gi, "_");
    props.tag(state.tag.concat([str]));
    props.value("");
  }
  function deleteButtonClick(index: number) {
    const tagArrayCopy: Array<string> = state.tag;
    tagArrayCopy.splice(index, 1);
    props.tag(tagArrayCopy);
  }
  for (let index = 0; index < state.tag.length; index++) {
    if (state.tag[index] !== "" && state.tag[index] !== " ")
      tagArray[index] = (
        <Tag>
          <TagName>{state.tag[index]}</TagName>
          <Xbutton onClick={e => deleteButtonClick(index)}>x</Xbutton>
        </Tag>
      );
  }
  return (
    <InputBox>
      <TagBox>{tagArray}</TagBox>
      <Input
        placeholder="태그를 추가해주세요"
        value={state.value}
        onChange={e => props.value(e.target.value)}
        onKeyPress={e => {
          if (e.key === " ") {
            enterFunc();
          }
        }}
      />
    </InputBox>
  );
}
