/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
const RequestContext = React.createContext([{}, () => {}]);

const requestArray = [];
const vouchersArray = [];

const RequestProvider = (props) => {
  const [requests, setRequests] = useState(requestArray);
  const [userRequests, setUserRequests] = useState(requestArray);
  const [vouchers, setVouchers] = useState(vouchersArray);
  const [userVouchers, setUserVouchers] = useState(vouchersArray);

  return (
    <RequestContext.Provider
      value={{
        requests,
        setRequests,
        userRequests,
        setUserRequests,
        vouchers,
        setVouchers,
        userVouchers,
        setUserVouchers,
      }}>
      {props.children}
    </RequestContext.Provider>
  );
};

export {RequestContext, RequestProvider};
