import React from "react";
import { useFormContext } from "react-hook-form";
import * as lodash from "lodash";
function Select({ options, name }) {
  const { register } = useFormContext();
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      {...register(name)}
    >
      <option disabled selected>
        {name}
      </option>
      {options.map((option) => {
        <option>{lodash.startCase(option)}</option>;
      })}
    </select>
  );
}

export default Select;
