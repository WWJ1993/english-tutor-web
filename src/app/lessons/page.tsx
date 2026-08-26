export default function LessonsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">课堂管理</h1>
      <div className="flex gap-4">
        <aside className="w-56 shrink-0 bg-white rounded-xl border p-4">
          <div className="text-sm font-medium text-slate-700 mb-3">课次列表</div>
          <div className="text-slate-400 text-sm">暂无课程数据</div>
        </aside>
        <div className="flex-1 bg-white rounded-xl border p-6">
          <div className="text-slate-400 text-sm">请从左侧选择课次</div>
        </div>
      </div>
    </div>
  )
}
