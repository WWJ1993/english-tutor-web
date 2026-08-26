export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">首页</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: '累计课次', value: '—' },
          { label: '学习时长', value: '—' },
          { label: '掌握词汇', value: '—' },
          { label: '本月课次', value: '—' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl border p-4 text-center">
            <div className="text-2xl font-bold text-slate-800">{value}</div>
            <div className="text-sm text-slate-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border p-6">
        <h2 className="text-base font-medium mb-4">词汇掌握趋势</h2>
        <div className="h-40 flex items-center justify-center text-slate-400 text-sm">
          暂无数据
        </div>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <h2 className="text-base font-medium mb-4">近期待巩固词汇</h2>
        <div className="text-slate-400 text-sm">暂无数据</div>
      </div>
    </div>
  )
}
