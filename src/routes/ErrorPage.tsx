import { Box, Link as MUILink, Paper } from '@mui/material';
import { FC } from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = `${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <Box sx={{ p: '60px 50px', display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ width: '486px', p: '25px' }}>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
          <MUILink component={Link} to="/">
            На Главную
          </MUILink>
        </div>
      </Paper>
    </Box>
  );
};

export default ErrorPage;
