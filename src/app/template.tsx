import Header from "@/components/Header";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "7.5rem" }}>{children}</main>
    </>
  );
};

export default Template;
