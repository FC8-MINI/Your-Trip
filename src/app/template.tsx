import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Suspense } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "7.5rem" }}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Template;
