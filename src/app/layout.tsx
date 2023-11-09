"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Wallet } from "@/modules/providers/walletProvider";
import { TopNavigation } from "@/components/common/topNavigation";
import { Provider } from "react-redux";
import { store } from "@/modules/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ToastDiv } from "@/modules/providers/toastProvider";

const persistor = persistStore(store);
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Only1 Test",
//   description: "basic feed like application",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Wallet>
              <ToastDiv>
                <TopNavigation />
                {children}
              </ToastDiv>
            </Wallet>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
