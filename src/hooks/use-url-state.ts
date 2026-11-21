"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Read and write search params for list pages. Values equal to their default
// are left out of the URL; changing anything but the page resets to page 1.
export function useUrlState<K extends string>(defaults: Record<K, string>) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const values = Object.fromEntries(
    (Object.keys(defaults) as K[]).map((key) => [
      key,
      params.get(key) ?? defaults[key],
    ]),
  ) as Record<K, string>;

  function set(patch: Partial<Record<K, string>>) {
    const next = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(patch) as [K, string][]) {
      if (value === undefined || value === defaults[key]) next.delete(key);
      else next.set(key, value);
    }
    if (!("page" in patch)) next.delete("page");
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return { values, set, params };
}
