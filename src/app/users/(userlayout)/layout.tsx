import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="bg-yellow-100 h-screen">{children}</div>;
};

export default Layout;
