import React from "react";
import { useFormContext } from "react-hook-form";
function CheckBox({ name }) {
  const { register } = useFormContext();
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{name}</span>
        <input
          type="checkbox"
          checked
          className="checkbox checkbox-primary"
          {...register(name)}
        />
      </label>
    </div>
  );
}

export default CheckBox;
