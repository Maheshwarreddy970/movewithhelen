import { Suspense } from "react";
import AnnouncementBar from "@/components/site/announcement-bar";
import Footer from "@/components/site/footer";
import Navbar from "@/components/site/navbar";
import { site } from "@/data/site";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* First Tab stop: jump past the navigation */}
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {site.skipLink}
      </a>
      <AnnouncementBar />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
