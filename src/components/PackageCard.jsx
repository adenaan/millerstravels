
import { formatZAR } from '../utils/format'

export default function PackageCard({pkg, onEdit, onDelete}){
  return (
    <div className="card">
      <div className="card-header">
        <strong style={{fontSize:'1.1rem'}}>{pkg.title}</strong>
        <div style={{color:'var(--color-muted)'}}>{pkg.dep} – {pkg.ret}</div>
      </div>
      <div className="card-body">
        <div style={{display:'grid', gap:'.25rem', marginBottom:'.75rem'}}>
          {pkg.itinerary?.map((line, idx)=> (
            <div key={idx}>• {line}</div>
          ))}
        </div>
        <div className="grid grid-sm-2">
          {pkg.options?.map((opt, i)=> (
            <div key={i} className="card" style={{boxShadow:'none'}}>
              <div className="card-body">
                <div style={{display:'grid', gap:'.25rem'}}>
                  <div style={{fontWeight:700}}>Option {i+1}</div>
                  <div style={{color:'var(--color-muted)'}}>{opt.stays?.join(' • ')}</div>
                  <div>Quad: <strong>{formatZAR(opt.prices.quad)}</strong></div>
                  <div>Triple: <strong>{formatZAR(opt.prices.triple)}</strong></div>
                  <div>Double: <strong>{formatZAR(opt.prices.double)}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      { (onEdit || onDelete) && (
        <div className="card-actions">
          {onEdit && <button className="btn btn-outline" onClick={()=>onEdit(pkg)}>Edit</button>}
          {onDelete && <button className="btn btn-outline" onClick={()=>onDelete(pkg.id)}>Delete</button>}
        </div>
      )}
    </div>
  )
}
