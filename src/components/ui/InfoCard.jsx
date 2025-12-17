function InfoCard({icon, title, value}) {
return (
<div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-lg">
    <div className="text-2xl">{icon}</div>
    <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="font-medium">{value}</p>
    </div>
</div>
)
}

export default InfoCard
