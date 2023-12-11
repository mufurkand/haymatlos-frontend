import React from "react";

// TODO: Properly implement these props
const SidebarItem = ({ text, link }) => {
  return (
    <button className="p-2 px-5 rounded-md hover:bg-background transition-colors text-text hover:text-accentRed">
      {text}
    </button>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-foreground flex flex-col justify-center gap-10 items-center text-text">
      <SidebarItem text="Akış" link="/" />
      <SidebarItem text="Paylaş" link="/" />
      <SidebarItem text="Daha Fazla" link="/" />
      <hr className="w-24 h-1 border-0 rounded md:my-10 bg-accentRed" />
      <SidebarItem text="Popüler" link="/" />
      <SidebarItem text="Keşfet" link="/" />
    </div>
  );
};

export default Sidebar;
