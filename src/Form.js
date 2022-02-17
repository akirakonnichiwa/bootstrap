import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
    return (
        <div className="form">
            <form className="w-25">
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
          <textarea
              rows="10" cols="55"
              className="p-2"
              id="exampleInputText"
              aria-describedby="Text"
              placeholder="Enter text"
          />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
