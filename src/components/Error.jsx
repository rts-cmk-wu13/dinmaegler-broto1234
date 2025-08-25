import {
  isRouteErrorResponse,
  useRouteError, 
  Link
} from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <Link to="/">Go to Home</Link>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}