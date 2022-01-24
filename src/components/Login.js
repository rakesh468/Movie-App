import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Login.css";

const formValidationSchema = yup.object({
    email: yup.string().required("Email Id Required"),
    password: yup.string().min(8).max(12).required("Password Required"),
  });


  export function Login(){

    const history = useHistory();
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("Onsubmit", values);
        
      },
    });
      return(
        <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            type="email"
            variant="standard"
            label="Enter Email"
            error={errors.email && touched.email}
            value={values.email}
            helperText={errors.email && touched.email && errors.email}
          />
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            id="password"
            type="password"
            variant="standard"
            label="Enter Password"
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
          />
          <Button variant="contained" color="success" type="submit">
            Log In
          </Button>
          <p>Create an Account?</p>
          <Button onClick={() => history.push("/signup")} variant="contained">
            Sign up
          </Button>
        </form>
      </div>
      )
  }