export default function SectionDivider() {
  return (
    <div className="relative my-12 h-px w-full bg-gradient-to-r from-transparent via-purple-900/50 to-transparent">
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-500"></div>
    </div>
  )
}