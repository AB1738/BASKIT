import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | BASKIT",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-stone-100 w-full">
      <div className="mx-auto min-h-screen max-w-7xl py-4 px-6 lg:px-0 flex flex-col">
        {children}
      </div>
    </div>
  );
};
export default layout;
