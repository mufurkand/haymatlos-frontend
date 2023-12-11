// TODO: Properly implement these props
const SidebarItem = ({ text, link }) => {
  return (
    <button className="p-2 px-5 rounded-md hover:bg-background transition-colors text-text hover:text-accentRed">
      {text}
    </button>
  );
};

const Sidebar = ({ className }) => {
  return (
    <div
      // the className prop is used to add additional classes to the component
      // like adding responsiveness in parent component RootLayout
      className={
        "sm:w-1/6 py-5 bg-foreground flex flex-col justify-center gap-10 items-center text-text" +
        " " +
        className
      }
    >
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
