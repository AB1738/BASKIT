const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="mx-auto min-h-screen max-w-7xl">{children}</main>;
};
export default layout;
