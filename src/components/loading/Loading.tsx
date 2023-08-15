import React from "react";

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container-loader">
        <div className="loading__loader"></div>
        <div className="loading__text">
          <p>
            We're <span>Getting Everything Ready</span> for You
          </p>
        </div>
      </div>
      <img src="/images/logos/logo-blue.svg" alt="" />
    </div>
  );
};
