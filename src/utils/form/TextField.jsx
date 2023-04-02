import React from "react";
import { useFormContext } from "react-hook-form";
import * as lodash from "lodash";

function TextField({ type, placeholder, name }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control gap-2">
      <label className="label">
        <span className="label-text text-sm prose">
          {lodash.startCase(name)}
        </span>
      </label>{" "}
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        {...register(name)}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && (
        <span className="text-sm text-error prose mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
