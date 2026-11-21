import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// A real link styled like a button. Use this for navigation so screen readers
// announce "link"; use <Button> only for actions such as submitting a form.
function ButtonLink({
  to,
  variant,
  size = "lg",
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
} & VariantProps<typeof buttonVariants>) {
  return (
    <Link href={to} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}

export default ButtonLink;
