import { zodResolver } from "@hookform/resolvers/zod";
import { Envelope, KeyFill, Person } from "react-bootstrap-icons";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Button from "./Button";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Required" })
    .regex(/^[A-Za-z]/, {
      message: "Name must start with an alphabet",
    }),
  email: z.string().email({ message: "Email Required" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 character" }),
});

type FormData = z.infer<typeof schema>;
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      {errors.name?.message && (
        <span className="text-danger">{errors.name?.message}</span>
      )}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <Person size={25} />
          </span>
        </div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="form-control"
          {...register("name", { required: true, minLength: 3 })}
        />
      </div>

      {/* Email */}
      {errors.email?.message && (
        <span className="text-danger">{errors.email.message}</span>
      )}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <Envelope size={24} />
          </span>
        </div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="form-control"
          {...register("email", { required: true })}
        />
      </div>

      {/* Password */}
      {errors.password?.message && (
        <span className="text-danger">{errors.password.message}</span>
      )}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <KeyFill size={24} />
          </span>
        </div>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="form-control"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
        />
      </div>
      <div className="d-flex justify-content-center mb-4 mt-4">
        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
};

export default SignUp;
