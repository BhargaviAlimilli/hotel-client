import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { stripeSuccessRequest } from "../actions/stripe";

const StripeSuccess = ({ match, history }) => {
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }));
  // const { token } = auth;

  useEffect(() => {
    stripeSuccessRequest(token, match.params.hotelId).then((res) => {
      if (res.data.success) {
        console.log("stripe success response", res.data);
        history.push("/dashboard");
      } else {
        history.push("/stripe/cancel");
      }
    });
  }, [match.params.hotelId]);

  return (
    <div className="container">
      <div className="col">
        <h2 className="text-center p-5">
          Payment success. {match.params.hotelId}
        </h2>
      </div>
    </div>
  );
};

export default StripeSuccess
