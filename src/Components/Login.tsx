import { zodResolver } from "@hookform/resolvers/zod";
import { KeyFill, Person } from "react-bootstrap-icons";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Button from "./Button";

const schema = z.object({
  email: z.string().email({ message: "Enter Valid Email" }),
  password: z
    .string()
    .min(8, { message: "Password should be more than 8 character" }),
});

type FormData = z.infer<typeof schema>;
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onHandle = (data: FieldValues) => {
    console.log(data);
    reset();
  }
  return (
    <form className="mt-5"  onSubmit={handleSubmit(onHandle)}>
      {/* Email */}
      {errors.email?.message && (
        <span className="text-danger">{errors.email.message}</span>
      )}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <Person size={25} />
          </span>
        </div>
        <input
          type="email"
          id="email"
          placeholder="Username"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          {...register("email")}
        />
      </div>
      {/* Password */}
      {errors.password?.message && (
        <span className="text-danger">{errors.password.message}</span>
      )}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <KeyFill size={25} />
          </span>
        </div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          className="form-control w-25"
          {...register("password")}
        />
      </div>
      <div className="d-flex justify-content-center mb-4 mt-4">
        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Login;
