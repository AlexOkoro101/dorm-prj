import React, { useContext } from 'react';
import { AppContext } from '../App';

function Error() {
  const { error } = useContext(AppContext);

  if (!error) return <></>;
  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {error}
    </div>
  );
}

export default Error;
