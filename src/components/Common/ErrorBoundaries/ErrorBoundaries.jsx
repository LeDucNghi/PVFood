import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";

import React from "react";

export const ErrorFallback = ({ error, resetErrorBoundary, children }) => {
  const ui = (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );

  return (
    <ErrorBoundary
      FallbackComponent={ui}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

// const Error = ({ error }) => {
//   return <div>{error.message}</div>;
// };

// export default withErrorBoundary(AddressList, {
//   FallbackComponent: Error,
// });

// const ui = (
//   <ErrorBoundary
//     FallbackComponent={ErrorFallback}
//     onReset={() => {
//       // reset the state of your app so the error doesn't happen again
//     }}
//   >
//     {children}
//   </ErrorBoundary>
// );
