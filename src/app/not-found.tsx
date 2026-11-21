"use client";

import { Suspense } from "react";

import NotFoundView from "@/components/not-found-view";

function NotFoundPage() {
  return <NotFoundView />;
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundPage />
    </Suspense>
  );
}
