type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#F6F6F6] h-screen">
      <div className="container m-auto">{children}</div>
    </div>
  );
};
