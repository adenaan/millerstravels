
import { formatZAR, lowestPrice } from '../utils/format'

export default function PackageCard({pkg, onEdit, onDelete}){
  const from = lowestPrice(pkg)
  return (
    <div className="card relative group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-purple rounded-t-2xl" />
      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="font-semibold text-lg">{pkg.title}</div>
            <div className="text-sm text-gray-500">{pkg.dep} – {pkg.ret}</div>
          </div>
          {from && <div className="text-sm text-gray-600">From <span className="font-bold">{formatZAR(from)}</span> pp</div>}
        </div>

        {pkg.itinerary?.length>0 && (
          <ul className="list-disc ml-5 space-y-1 mt-3">
            {pkg.itinerary.map((it, idx)=> <li key={idx}>{it}</li>)}
          </ul>
        )}

        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {pkg.options?.map((opt, i)=>(
            <div key={i} className="rounded-xl border border-gray-100 p-4 bg-white">
              <div className="font-semibold">Option {i+1}</div>
              <div className="text-sm text-gray-500 mt-1">{opt.stays?.join(' • ')}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rate-chip">Quad: {formatZAR(opt.prices.quad)}</span>
                <span className="rate-chip">Triple: {formatZAR(opt.prices.triple)}</span>
                <span className="rate-chip">Double: {formatZAR(opt.prices.double)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {(onEdit || onDelete) && (
        <div className="card-actions">
          {onEdit && <button className="btn btn-outline" onClick={()=>onEdit(pkg)}>Edit</button>}
          {onDelete && <button className="btn btn-outline" onClick={()=>onDelete(pkg.id)}>Delete</button>}
        </div>
      )}
    </div>
  )
}
