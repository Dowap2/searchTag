import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const InputBox = styled.div`
  margin: 0;
  padding: 0;
  width: 80%;
  height: 60px;
  border: 1px solid #000000;
  white-space: nowrap;
  overflow: auto;
  float: left;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  background: none;
`;
const Tag = styled.div`
  margin: auto;
  margin: 3px;
  float: left;
  border-radius: 5px;
  background: rgba(245, 93, 0, 0.2);
`;
const TagBox = styled.div`
  margin: 5px;
`;
const TagName = styled.div`
  font-size: 14px;
  margin: auto;
  float: left;
`;
const Xbutton = styled.button`
  width: 10px;
  height: 10px;
  border: 0;
  background: none;
`;
const ConfirmButton = styled.button`
  margin: 3px;
  margin-right: 0;
  width: 10%;
  height: 60px;
  background: rgba(245, 93, 0, 0.2);
  border: 0;
  border-radius: 5px;
`;

export function InputTag(props: any) {
  const state = useSelector((state: any) => state.tagState.state);
  const tagArray: Array<any> = [];

  function enterFunc() {
    if (state.value !== " " && state.value !== null) {
      props.value(state.value.trim());
      const str: string = state.value.replace(/ /gi, "_");
      props.tag(state.tag.concat([str]));
      props.value("");
    }
    props.value("");
  }

  function deleteButtonClick(index: number) {
    const tagArrayCopy: Array<string> = state.tag;
    tagArrayCopy.splice(index, 1);
    props.tag(tagArrayCopy);
  }

  function confirmButtonClick() {
    props.searched(state.searched.concat(state.tag));
    props.tag([]);
    props.value("");
  }

  for (let index = 0; index < state.tag.length; index++) {
    if (state.tag[index] !== "" && state.tag[index] !== " ")
      tagArray[index] = (
        <Tag>
          <TagBox>
            <TagName>{state.tag[index]}</TagName>
            <Xbutton onClick={e => deleteButtonClick(index)}>x</Xbutton>
          </TagBox>
        </Tag>
      );
  }
  return (
    <div>
      <InputBox>
        <div>{tagArray}</div>
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
      <ConfirmButton onClick={e => confirmButtonClick()}>확인</ConfirmButton>
    </div>
  );
}
