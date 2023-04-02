import React from "react";
import RHFormProvider from "../utils/form/RHFormProvider";
import TextField from "../utils/form/TextField";
import * as yup from "yup";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import apiService from "../app/apiService";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

function Login() {
  let [searchParams, setSearchParams] = useSearchParams({ mode: "login" });

  const location = useLocation();
  console.log(location);
  const pathname = location.state?.pathname;
  const navigate = useNavigate();
  const { login } = useAuth();
  const isLogIn = searchParams.get("mode") === "login";

  const schemaObject = {
    email: yup.string().email("Invalid Email!").required("Email is required!"),
    password: yup
      .string()
      .min(8, "Password length must be longer than 8")
      .required("Password is required"),
  };

  if (!isLogIn) {
    schemaObject.name = yup.string().required("Name is required");

    schemaObject.phone = yup
      .string()
      .matches(/^(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
      .required("Phone number is required");

    schemaObject.confirmation = yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match");
  }

  const schema = yup.object(schemaObject).required();

  const onSubmit = async (data) => {
    const { name, email, password, phone, confirmation } = data;
    try {
      if (isLogIn) {
        const res = await apiService.post("/auth", { email, password });
        const data = await res.data;

        const { accessToken, user } = data.data;

        localStorage.setItem("token", accessToken);
        window.localStorage.setItem("user", JSON.stringify(user));

        login(user, () =>
          navigate(pathname ? pathname : "/products", { state: location.state })
        );
      } else {
        const res = await apiService.post("/users/register", {
          name,
          email,
          password,
          phone,
          confirmation,
        });
        const data = await res.data;

        const { accessToken, user } = data.data;

        localStorage.setItem("token", accessToken);
        window.localStorage.setItem("user", JSON.stringify(user));
        login(user, () =>
          navigate(pathname ? pathname : "/products", { state: location.state })
        );
      }
    } catch (error) {
      const errorMessage = error.response?.data.errors.message;
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <RHFormProvider onSubmit={onSubmit} schema={schema}>
      {!isLogIn && (
        <TextField type="text" placeholder="Your Name" name="name" />
      )}
      <TextField type="email" placeholder="Your Email" name="email" />
      {!isLogIn && (
        <TextField type="text" placeholder="Your Phone Number" name="phone" />
      )}

      <TextField type="password" placeholder="Your Password" name="password" />
      {!isLogIn && (
        <TextField
          type="password"
          placeholder="Password Confirmation"
          name="confirmation"
        />
      )}

      <div className="form-control mt-6">
        <button className="btn btn-primary">
          {isLogIn ? "Log in" : "Register"}
        </button>
      </div>
      {isLogIn && (
        <div className="pt-6 pb-6 text-center prose form-control">
          <p>
            Don&#x27;t have an account?{" "}
            <button
              onClick={() => {
                setSearchParams({ mode: "register" });
              }}
              className="btn-link"
              type="button"
            >
              Register here.
            </button>
          </p>
        </div>
      )}
      {!isLogIn && (
        <div className="pt-6 pb-6 text-center prose form-control">
          <p>
            Have an account?{" "}
            <button
              onClick={() => {
                setSearchParams({ mode: "login" });
              }}
              className="btn-link"
              type="button"
            >
              Login here
            </button>
          </p>
        </div>
      )}
    </RHFormProvider>
  );
}

export default Login;
