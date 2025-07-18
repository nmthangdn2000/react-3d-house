import { Navigator } from '@components/navigator';
type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#F6F6F6] h-screen">
      <Navigator />
      <div className="container m-auto">{children}</div>
    </div>
  );
};
