import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white p-4">
        <h2 className="font-bold text-lg">DevTrack</h2>
        <nav className="mt-6 flex flex-col gap-3 text-sm">
          <Link href="/">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 ">
        {children}
      </main>
    </div>
  );
}
