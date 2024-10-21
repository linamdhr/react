import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Success = ({ course }) => {
  return (
    <div className="timeoutBg">
      <div className="timeoutPop">
        <div className="timeoutPop-body text-center">
          <h5>Payment Successful</h5>
          <p>
            {`Thank you for booking the ${course} course. We will contact you soon via email or contact number.`}
          </p>
        </div>

        <div className="timeoutPop-footer">
          <Link className="btn" to="/">
            <span>OK</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
