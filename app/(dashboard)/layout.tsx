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
        <nav className="mt-4 space-y-2 text-sm">
          <div>Dashboard</div>
          <div>Projects</div>
          <div>Settings</div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 ">
        {children}
      </main>
    </div>
  );
}
