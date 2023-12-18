import { ActionFunction, redirect } from 'react-router-dom';

export const action: ActionFunction = () => {
  return redirect('/');
};
