import React from "react";

import { Button } from "antd";
import Wrapper from "../../components/wrapper";
import TitleBetween from "../../components/title";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TitleBetween title="404 page not found" />
    
      <p className="pt-5 text-2xl pl-5">Sorry, the page you are looking for does not exist.</p>

      <div className="pl-5 pt-64 w-full">
        <Button danger type="primary" onClick={() => navigate("/")}>
          Go back to home
        </Button>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
