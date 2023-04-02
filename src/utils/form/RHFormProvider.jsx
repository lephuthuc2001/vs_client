import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function RHFormProvider({ children, onSubmit, schema, mode }) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      {" "}
      <div className="card w-96 bg-base-100 shadow-xl">
        <form
          className="card-body"
          action="#"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </div>
    </FormProvider>
  );
}

export default RHFormProvider;
