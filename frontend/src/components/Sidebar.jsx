import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className=" lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <SearchInput />
          <Conversations />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
