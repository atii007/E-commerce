"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import ShopContextProvider from "./Context/Context";

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ShopContextProvider>{children}</ShopContextProvider>
    </SessionProvider>
  );
};

export default Provider;
