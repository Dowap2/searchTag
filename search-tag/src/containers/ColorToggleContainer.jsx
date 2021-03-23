import React from "react";
import { ColorToggleComponent } from "../components/ColorToggleComponent";
import { connect } from "react-redux";
import * as tagActions from "../store/modules/tagState";

export function ColorToggleContainer(props) {
  return (
    <div>
      <ColorToggleComponent mode={props.mode} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDisPatchToProps = dispatch => ({
  mode: mode => dispatch(tagActions.ChangeMode(mode))
});

ColorToggleContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(ColorToggleContainer);
