import React from "react";

function Spinner() {
  return (
    <div
      class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-primary rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
export default Spinner;
