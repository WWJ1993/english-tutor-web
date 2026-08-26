export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">管理后台</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 border-b pb-4">
        {['配置', '新建分析', '历史记录', 'Agent'].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white border text-slate-600 hover:bg-slate-50"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl border p-6">
        <div className="text-slate-400 text-sm">管理后台（仅本地运行时可用）</div>
      </div>
    </div>
  )
}
