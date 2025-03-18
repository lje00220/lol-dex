"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * tanstack query provider
 *
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default Provider;
