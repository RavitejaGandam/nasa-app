import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents"></div>
      <h2>Some random info</h2>
      <div>
        <p>Description</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          consectetur quae nostrum impedit hic pariatur neque suscipit minus, id
          ab optio, perferendis deleniti blanditiis reiciendis earum enim sunt
          quidem aut.
        </p>
      </div>
      <button>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default SideBar;
