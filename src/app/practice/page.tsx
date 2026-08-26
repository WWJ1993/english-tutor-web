export default function PracticePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">练习中心</h1>
      <div className="bg-white rounded-xl border p-6">
        <div className="text-sm font-medium text-slate-700 mb-4">选择课次</div>
        <select className="border rounded-lg px-3 py-2 text-sm w-64 bg-white">
          <option value="">-- 请选择课次 --</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { key: 'vocab', label: '词汇填空', desc: '基于本课词汇' },
          { key: 'sentence', label: '句型造句', desc: '基于本课句式' },
          { key: 'qa', label: '问答练习', desc: '模拟课堂问答' },
        ].map(({ key, label, desc }) => (
          <button
            key={key}
            disabled
            className="bg-white rounded-xl border p-6 text-left opacity-50 cursor-not-allowed"
          >
            <div className="font-medium text-slate-800">{label}</div>
            <div className="text-sm text-slate-500 mt-1">{desc}</div>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl border p-6">
        <div className="text-slate-400 text-sm text-center py-8">选择课次后点击练习类型开始</div>
      </div>
    </div>
  )
}
