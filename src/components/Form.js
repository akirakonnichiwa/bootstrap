import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";
import { Button, Form } from "react-bootstrap";

setLocale({
  mixed: {
    default: "field_invalid",
  },
  number: {
    min: ({ min }) => ({ key: "field_too_short", values: { min } }),
    max: ({ max }) => ({ key: "field_too_big", values: { max } }),
  },
});

let schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string(),
  message: yup.string().min(20).max(300),
});

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-light mt-4 w-50">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="my-1">Email</Form.Label>
        <Form.Control {...register("email")} />
        <p className="text-danger my-1">{errors.email?.message}</p>
        <Form.Label className="my-1">Name</Form.Label>
        <Form.Control {...register("name")} />
        <p className="text-danger my-1">{errors.name?.message}</p>
        <Form.Label className="my-1">Message</Form.Label>
        <textarea className="form-control" rows="5" {...register("message")} />
        <p className="text-danger my-1">{errors.message?.message}</p>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="bg-danger my-3"
        >
          Send
        </Button>
      </Form.Group>
    </form>
  );
}

export default Forms;
