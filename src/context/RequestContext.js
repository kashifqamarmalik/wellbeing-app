/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {availVouchersArray, userVouchersArray} from '../model/vouchers';

const RequestContext = React.createContext([{}, () => {}]);
const requestArray = [];

const RequestProvider = (props) => {
  const [requests, setRequests] = useState(requestArray);
  const [userRequests, setUserRequests] = useState(requestArray);
  const [vouchers, setVouchers] = useState([]);
  const [userVouchers, setUserVouchers] = useState([]);

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
