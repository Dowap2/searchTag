import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

export function AlreadySearchedTagComponent(props: any) {
  const searchedItem = useSelector(
    (state: any) => state.tagState.state.searched
  );
  const tag = useSelector((state: any) => state.tagState.state.tag);
  const searchedArray: Array<any> = [];
  for (let index = 0; index < searchedItem.length; index++) {
    searchedArray[index] = (
      <Tag onClick={e => props.tag(tag.concat(searchedItem[index]))}>
        <TagBox>
          <TagName>{searchedItem[index]}</TagName>
        </TagBox>
      </Tag>
    );
  }
  return (
    <div>
      검색 내역
      {searchedArray}
      <button onClick={e => console.log(searchedItem)}></button>
    </div>
  );
}
