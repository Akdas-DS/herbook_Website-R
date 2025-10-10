export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Simple gradient overlay - no animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/5 via-transparent to-teal-950/5"></div>
    </div>
  );
}
