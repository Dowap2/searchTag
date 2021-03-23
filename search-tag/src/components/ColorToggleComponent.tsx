import React from "react";
import { useSelector } from "react-redux";

export function ColorToggleComponent(props: any) {
  const mode = useSelector((state: any) => state.tagState.state.mode);
  return (
    <div>
      {mode === "light" ? <label>DarkMode</label> : <label>LightMode</label>}
      <input
        type="checkbox"
        onClick={e =>
          mode === "light" ? props.mode("dark") : props.mode("light")
        }
      />
    </div>
  );
}
