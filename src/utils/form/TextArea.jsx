import React from "react";
import { useFormContext } from "react-hook-form";

function TextArea({ label, placeholder, name }) {
  const { register } = useFormContext();

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder={placeholder}
        {...register(name)}
      ></textarea>
    </div>
  );
}

export default TextArea;
