import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="max-w-7xl mx-auto border-red-600 border-2 flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn btn-neutral my-3 w-full">Go Home</button>
        </Link>
      </div>
    </div>
  );
}