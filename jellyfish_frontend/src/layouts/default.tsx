import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <main className="flex container mx-auto max-w-7xl px-6 pt-16 justify-center">
        {children}
      </main>
    </div>
  );
}
