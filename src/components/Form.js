import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Button, Form} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";

const ControlledInput = (props) => {
    return (
        <Controller
            control={props.control}
            name={props.name}
            label={props.label}
            rules={props.rules}
            render={({
                         field: {onChange, value},
                         fieldState: {invalid, error},
                     }) => (
                <>
                    <p className='my-1'>{props.label}</p>
                    <Form.Control
                        className="mb-2"
                        style={invalid ? {border: "3px solid red"} : undefined}
                        name={props.name}
                        onChange={onChange}
                        value={value}
                    />
                    <div className="text-danger">{error?.message}</div>
                </>
            )}
        />
    );
};

const ControlledEmail = (props) => {
    return (
      <Controller
        control={props.control}
        name={props.name}
        label={props.label}
        rules={{
          required: {
            value: true,
            message: "This field is required!",
          },
          minLength: {
            value: 20,
            message: "Too short (Min 20 symbols)!",
          },
          maxLength: {
            value: 300,
            message: "Too Long (Max 300 symbols)!",
          },
        }}
        render={({
          field: { onChange, value },
          fieldState: { invalid, error },
        }) => (
          <>
              <p className='my-1'>{props.label}</p>
            <textarea
              className="form-control"
              rows="5"
              style={invalid ? { border: "3px solid red" } : undefined}
              name={props.name}
              onChange={onChange}
              value={value}
            />
            <div className="text-danger">{error?.message}</div>
          </>
        )}
      />
    );
};

// setLocale({
//   mixed: {
//     default: "field_invalid",
//   },
//   number: {
//     min: ({ min }) => ({ key: "field_too_short", values: { min } }),
//     max: ({ max }) => ({ key: "field_too_big", values: { max } }),
//   },
// });
//
// let schema = yup.object().shape({
//   email: yup.string().email().required(),
//   name: yup.string(),
//   message: yup.string().min(20).max(300),
// });

function Forms() {
    // const {
    //   register,
    //   control,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm({
    //   resolver: yupResolver(schema),
    // });
    // const onSubmit = (data) => console.log(data);

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log("errors", errors);

    return (
        // <form onSubmit={handleSubmit(onSubmit)} className="text-light mt-4 w-50">
        //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //     <Form.Label className="my-1">Email</Form.Label>
        //     <Form.Control {...register("email")} />
        //     <p className="text-danger my-1">{errors.email?.message}</p>
        //     <Form.Label className="my-1">Name</Form.Label>
        //     <Form.Control {...register("name")} />
        //     <p className="text-danger my-1">{errors.name?.message}</p>
        //     <Form.Label className="my-1">Message</Form.Label>
        //     <textarea className='form-control' rows='5' {...register("message")}/>
        //     <p className="text-danger my-1">{errors.message?.message}</p>
        //     <Button
        //       type="submit"
        //       variant="secondary"
        //       size="lg"
        //       className="bg-danger my-3"
        //     >
        //       Send
        //     </Button>
        //   </Form.Group>
        // </form>

        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="text-light mt-4 w-50">
                <ControlledInput control={control} name="email" label="Email"             rules={{
                    required: {
                        value: true,
                        message: "This field is required!",
                    },
                    minLength: {
                        value: 5,
                        message: "Too short!",
                    },
                    pattern: {
                        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                        message: "Wrong email address!",
                    },
                }}/>
                <ControlledInput control={control} name="name" label="Name"             rules={{
                    required: {
                        value: true,
                        message: "This field is required!",
                    },
                    minLength: {
                        value: 5,
                        message: "Too short!",
                    },
                    pattern: {
                        value: /^[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?/,
                        message: "Wrong email address!",
                    },
                }}/>
                <ControlledEmail control={control} name="message" label="Message"/>
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
