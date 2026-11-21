"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

// Start each new page at the top. Filter changes (search params) and hash
// links keep their position.
function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
