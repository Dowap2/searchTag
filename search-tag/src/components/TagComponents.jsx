import React from "react";
import { InputTagContainer } from "../containers/InputTagContainer";
import { AlreadySearchedTagContainer } from "../containers/AlreadySearchedTagContainer";
import { ColorToggleContainer } from "../containers/ColorToggleContainer";

export function TagComponent() {
  return (
    <div>
      <ColorToggleContainer />
      <InputTagContainer />
      <AlreadySearchedTagContainer />
    </div>
  );
}
