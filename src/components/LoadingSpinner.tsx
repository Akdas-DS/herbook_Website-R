export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-slate-700 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-slate-800 border-t-teal-400 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <p className="text-slate-400 animate-pulse">Loading psychology insights...</p>
      </div>
    </div>
  );
}