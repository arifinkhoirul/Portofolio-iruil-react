function Input({label, placeholder}) {
return (
<div>
    <label className="text-sm text-gray-300">{label}</label>
    <input type="text" placeholder={placeholder}
        className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
</div>
)
}

export default Input
