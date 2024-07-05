import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import GlobalStyle from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: "저기어때",
    template: "%s | 저기어때",
  },
  description: "해외숙소, 호텔, 리조트, 펜션, 모텔, 풀빌라, 게스트하우스, 글램핑까지 저기어때에서 예약하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
