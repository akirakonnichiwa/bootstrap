import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { setLocale } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  email: yup
    .string("Введен неверный Email.")
    .email("Введен неверный Email.")
    .required("Это поле обязательно к заполнению!"),
  name: yup
    .string("Пожалуйста, перепроверьте.")
    .required("Это поле обязательно к заполнению!"),
  message: yup
    .string("Неправильно введеное сообщение.")
    .min(20, "Минимальная длина сообщение - 20 символов.")
    .max(1200, "Маскимальная длина сообщения - 1200 символов.")
    .required("Это поле обязательно к заполнению!"),
});

function Field({ isItMessage, rows, ...otherProps }) {
  if (isItMessage) {
    return <textarea rows={rows} {...otherProps} />;
  }
  return <input {...otherProps} />;
}

const ControlledInput = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      label={props.label}
      render={({
        field: { onChange, value },
        fieldState: { invalid, error },
      }) => (
        <>
          <p className="my-1">{props.label}</p>
          <Field
            className="form-control"
            rows="5"
            style={invalid ? { border: "3px solid red" } : undefined}
            name={props.name}
            onChange={onChange}
            value={value}
            isItMessage={props.field}
          />
          <div className="text-danger">{error?.message}</div>
        </>
      )}
    />
  );
};

function Forms() {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="text-light">
      <form onSubmit={handleSubmit(onSubmit)} className="text-light mt-4 w-50">
        <ControlledInput control={control} name="email" label="Email" />
        <ControlledInput control={control} name="name" label="Name" />
        <ControlledInput
          control={control}
          name="message"
          label="Message"
          field={true}
        />
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="bg-danger my-3"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default Forms;
