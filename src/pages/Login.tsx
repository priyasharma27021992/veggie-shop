import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Login = () => {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setName(e.target.current);
  };
  return (
    <ErrorBoundary
      fallback={<p>There was an error while submitting the form</p>}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </ErrorBoundary>
  );
};

export { Login };
