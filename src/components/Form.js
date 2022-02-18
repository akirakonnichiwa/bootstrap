import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

function Form() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [emailErr, setEmailErr] = useState({});
    const [messageErr, setMessageErr] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    };

    const formValidation = () => {
        const emailErr = {};
        const messageErr = {};
        let isValid = true;

        if (email.trim().length < 5) {
            emailErr.emailShort = "Email is too short!";
            isValid = false;
        }

        if (!email.includes("@")) {
            emailErr.emailAt = "Email must include the '@' symbol! ";
            isValid = false;
        }

        if (message.trim().length < 12) {
            messageErr.messageShort = "Your message is too short!";
            isValid = false;
        }

        if (message.trim().length > 300) {
            messageErr.messageLong = "Your message is too long!";
            isValid = false;
        }

        if (isValid) {
            alert("Sent!");
        }

        setEmailErr(emailErr);
        setMessageErr(messageErr);
        return isValid;
    };

    return (
        <div className="form">
            <form noValidate className="w-25" onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                {Object.keys(emailErr).map((key) => {
                    return <div className="text-danger mb-3">{emailErr[key]}</div>;
                })}
                <div className="form-group">
          <textarea
              rows="10"
              cols="55"
              className="p-2"
              id="exampleInputText"
              aria-describedby="Text"
              placeholder="Enter text"
              value={message}
              onChange={(e) => {
                  setMessage(e.target.value);
              }}
          />
                </div>
                {Object.keys(messageErr).map((key) => {
                    return <div className="text-danger my-2">{messageErr[key]}</div>;
                })}
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
