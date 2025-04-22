import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Products | BASKIT",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};
export default layout;
