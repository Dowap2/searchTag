import React from "react";
import { InputTag } from "../components/InputTag";
import { connect } from "react-redux";
import * as tagActions from "../store/modules/tagState";

export function InputTagContainer(props) {
  return (
    <div>
      <InputTag tag={props.tag} value={props.value} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDisPatchToProps = dispatch => ({
  tag: tagName => dispatch(tagActions.ChangeTag(tagName)),
  value: tagName => dispatch(tagActions.ChangeValue(tagName))
});

InputTagContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(InputTagContainer);
