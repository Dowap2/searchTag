import React from "react";
import { AlreadySearchedTagComponent } from "../components/AlreadySearchedTagComponent";
import { connect } from "react-redux";
import * as tagActions from "../store/modules/tagState";

export function AlreadySearchedTagContainer(props) {
  return (
    <div>
      <AlreadySearchedTagComponent tag={props.tag} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDisPatchToProps = dispatch => ({
  tag: tagName => dispatch(tagActions.ChangeTag(tagName))
});

AlreadySearchedTagContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(AlreadySearchedTagContainer);
