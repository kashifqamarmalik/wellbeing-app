/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
const RequestContext = React.createContext([{}, () => {}]);

const requestArray = [];

const RequestProvider = (props) => {
  const [requests, setRequests] = useState(requestArray);
  const [userRequests, setUserRequests] = useState(requestArray);

  return (
    <RequestContext.Provider
      value={{requests, setRequests, userRequests, setUserRequests}}>
      {props.children}
    </RequestContext.Provider>
  );
};

export {RequestContext, RequestProvider};
