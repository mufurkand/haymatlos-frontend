// TODO: Properly implement these props
const SidebarItem = ({ text, link }) => {
  return (
    <button className="rounded-md p-2 px-5 text-text transition-colors hover:bg-background hover:text-accentRed">
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
        "flex flex-col items-center justify-center gap-10 bg-foreground py-5 text-text sm:w-1/6" +
        " " +
        className
      }
    >
      <SidebarItem text="Akış" link="/" />
      <SidebarItem text="Paylaş" link="/" />
      <SidebarItem text="Daha Fazla" link="/" />
      <hr className="h-1 w-24 rounded border-0 bg-accentRed md:my-10" />
      <SidebarItem text="Popüler" link="/" />
      <SidebarItem text="Keşfet" link="/" />
    </div>
  );
};

export default Sidebar;
