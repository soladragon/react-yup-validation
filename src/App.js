import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function App() {

  // The register() method allows registering an element and applying the appropriate validation rules.
  // The handleSubmit() function will receive the form data if validation is successful.
  // The reset() function will clear all form fields or reset to initial values.
  // In this case, we are using formState to return form errors in an easier way.

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Lets sign you in.</h2>
        <br />

        <input {...register("email")} placeholder="email" type="email" required />
        <p>{errors.email?.message}</p>
        <br />

        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>
        <br />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
