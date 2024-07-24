import {  useEffect, useState } from 'react';
import { useBlocker } from 'react-router-dom';

const useConfirmExit = () => {
  const [exit, setExit] = useState(true);

  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      exit !== true &&
      currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    const handlePopstate = () => {
      // event.preventDefault();
      // event.stopPropagation()
      setExit(false)
      // // Push the current location back onto the history stack to prevent going back
      // navigate(1); 
    };

   
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return [blocker, setExit]
};

export default useConfirmExit;