const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-stone-100 w-full">
      <main className="mx-auto min-h-screen max-w-7xl ">{children}</main>
    </div>
  );
};
export default layout;
