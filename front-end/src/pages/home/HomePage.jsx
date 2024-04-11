import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/register");
  }, [navigate]);

  return <div>HomePage</div>;
};

export default HomePage;
