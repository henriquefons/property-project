"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      size={150}
      aria-label="Loading Spinner"
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
    />
  );
};

export default LoadingPage;
