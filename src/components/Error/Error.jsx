import './Error.css';
import { useRouteError } from 'react-router';

const Error = () => {
    const errors = useRouteError();
    console.log(errors);
    return (
        <div className="error">
            <h1>Oops!!! Something went wrong.</h1>
            <h2>
                {errors?.status} - {errors?.statusText}
            </h2>
            <h3>{errors.data}</h3>
        </div>
    );
};

export default Error;
