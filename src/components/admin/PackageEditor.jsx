import React, { useMemo, useState } from 'react'

function makeId(title){
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/(^-|-$)/g,'')
    .slice(0, 60) + '-' + Math.random().toString(16).slice(2, 6)
}

export default function PackageEditor({ packages, onChange }){
  const [activeId, setActiveId] = useState(packages[0]?.id || '')
  const active = useMemo(() => packages.find(p => p.id === activeId) || null, [packages, activeId])

  function add(){
    const fresh = {
      id: makeId('new-package'),
      type: 'Umrah',
      title: 'New package',
      departureDate: new Date().toISOString().slice(0,10),
      returnDate: new Date().toISOString().slice(0,10),
      heroImage: '/assets/brochure-june.jpg',
      highlights: [''],
      options: [{ name:'Package 1', itinerary:[''], prices:{ quad:0, triple:0, double:0 } }]
    }
    const next = [fresh, ...packages]
    onChange(next)
    setActiveId(fresh.id)
  }

  function remove(id){
    if(!confirm('Delete this package?')) return
    const next = packages.filter(p => p.id !== id)
    onChange(next)
    setActiveId(next[0]?.id || '')
  }

  function updatePackage(nextPkg){
    const next = packages.map(p => p.id === nextPkg.id ? nextPkg : p)
    onChange(next)
  }

  return (
    <div className="grid cols-2">
      <div className="card" style={{ padding:18 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
          <div style={{ fontWeight:900 }}>All packages</div>
          <button className="btn primary" onClick={add}>+ Add</button>
        </div>

        <div style={{ display:'grid', gap:10, marginTop:12 }}>
          {packages.map(p => (
            <button
              key={p.id}
              className="btn"
              onClick={() => setActiveId(p.id)}
              style={{
                textAlign:'left',
                border:'1px solid var(--border)',
                background: p.id === activeId ? 'rgba(224,192,112,.25)' : 'rgba(255,255,255,.7)',
                padding:'12px 14px',
                borderRadius:14
              }}
            >
              <div style={{ fontWeight:900 }}>{p.title}</div>
              <div className="small">{p.type} • {new Date(p.departureDate).toLocaleDateString('en-ZA')}</div>
            </button>
          ))}
          {!packages.length && <div className="small">No packages yet — click “Add”.</div>}
        </div>
      </div>

      <div className="card" style={{ padding:18 }}>
        {!active ? (
          <div className="small">Select a package to edit.</div>
        ) : (
          <>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
              <div style={{ fontWeight:900 }}>Edit package</div>
              <button className="btn ghost" onClick={() => remove(active.id)}>Delete</button>
            </div>

            <div style={{ marginTop:12 }}>
              <PackageForm pkg={active} onChange={updatePackage} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function PackageForm({ pkg, onChange }){
  function set(key, value){
    onChange({ ...pkg, [key]: value })
  }

  function setOption(i, next){
    const options = pkg.options.slice()
    options[i] = next
    set('options', options)
  }

  function addOption(){
    set('options', [...pkg.options, { name:`Package ${pkg.options.length+1}`, itinerary:[''], prices:{ quad:0, triple:0, double:0 } }])
  }

  function removeOption(i){
    const next = pkg.options.filter((_, idx) => idx !== i)
    set('options', next)
  }

  function setHighlight(i, v){
    const next = (pkg.highlights || []).slice()
    next[i] = v
    set('highlights', next)
  }

  function addHighlight(){
    set('highlights', [...(pkg.highlights || []), ''])
  }

  function removeHighlight(i){
    set('highlights', (pkg.highlights || []).filter((_, idx) => idx !== i))
  }

  return (
    <div style={{ display:'grid', gap:12 }}>
      <div className="grid cols-2">
        <div>
          <div className="label">Type</div>
          <select className="input" value={pkg.type} onChange={e=>set('type', e.target.value)}>
            <option>Umrah</option>
            <option>Tour</option>
          </select>
        </div>
        <div>
          <div className="label">Hero image</div>
          <select className="input" value={pkg.heroImage} onChange={e=>set('heroImage', e.target.value)}>
            <option value="/assets/brochure-june.jpg">June brochure</option>
            <option value="/assets/brochure-march.jpg">March brochure</option>
            <option value="/assets/brochure-muharram.jpg">Muharram brochure</option>
          </select>
          <div className="small" style={{ marginTop:6 }}>Later you can upload images via backend.</div>
        </div>
      </div>

      <div>
        <div className="label">Title</div>
        <input className="input" value={pkg.title} onChange={e=>set('title', e.target.value)} />
      </div>

      <div className="grid cols-2">
        <div>
          <div className="label">Departure date</div>
          <input className="input" type="date" value={pkg.departureDate} onChange={e=>set('departureDate', e.target.value)} />
        </div>
        <div>
          <div className="label">Return date</div>
          <input className="input" type="date" value={pkg.returnDate} onChange={e=>set('returnDate', e.target.value)} />
        </div>
      </div>

      <div className="card" style={{ padding:12, boxShadow:'none' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
          <div style={{ fontWeight:900 }}>Highlights</div>
          <button className="btn ghost" onClick={addHighlight}>+ Add</button>
        </div>
        <div style={{ display:'grid', gap:10, marginTop:10 }}>
          {(pkg.highlights || []).map((h, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:10 }}>
              <input className="input" value={h} onChange={e=>setHighlight(i, e.target.value)} placeholder="e.g. 7 nights in Makkah (B&B)" />
              <button className="btn ghost" onClick={() => removeHighlight(i)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding:12, boxShadow:'none' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
          <div style={{ fontWeight:900 }}>Package options</div>
          <button className="btn ghost" onClick={addOption}>+ Add option</button>
        </div>

        <div style={{ display:'grid', gap:12, marginTop:12 }}>
          {(pkg.options || []).map((opt, i) => (
            <div key={i} className="card" style={{ padding:12, boxShadow:'none' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
                <div style={{ fontWeight:900 }}>Option {i+1}</div>
                <button className="btn ghost" onClick={() => removeOption(i)}>Remove</button>
              </div>

              <OptionForm opt={opt} onChange={next => setOption(i, next)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OptionForm({ opt, onChange }){
  function set(key, value){
    onChange({ ...opt, [key]: value })
  }

  function setItin(i, v){
    const next = (opt.itinerary || []).slice()
    next[i] = v
    set('itinerary', next)
  }

  function addItin(){
    set('itinerary', [...(opt.itinerary || []), ''])
  }

  function removeItin(i){
    set('itinerary', (opt.itinerary || []).filter((_, idx) => idx !== i))
  }

  function setPrice(k, v){
    set('prices', { ...(opt.prices || {}), [k]: Number(v) })
  }

  return (
    <div style={{ display:'grid', gap:10, marginTop:10 }}>
      <div>
        <div className="label">Option name</div>
        <input className="input" value={opt.name} onChange={e=>set('name', e.target.value)} />
      </div>

      <div className="grid cols-3">
        <div>
          <div className="label">Quad</div>
          <input className="input" type="number" value={opt.prices?.quad ?? 0} onChange={e=>setPrice('quad', e.target.value)} />
        </div>
        <div>
          <div className="label">Triple</div>
          <input className="input" type="number" value={opt.prices?.triple ?? 0} onChange={e=>setPrice('triple', e.target.value)} />
        </div>
        <div>
          <div className="label">Double</div>
          <input className="input" type="number" value={opt.prices?.double ?? 0} onChange={e=>setPrice('double', e.target.value)} />
        </div>
      </div>

      <div className="card" style={{ padding:12, boxShadow:'none' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
          <div style={{ fontWeight:900 }}>Itinerary lines</div>
          <button className="btn ghost" onClick={addItin}>+ Add</button>
        </div>

        <div style={{ display:'grid', gap:10, marginTop:10 }}>
          {(opt.itinerary || []).map((line, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:10 }}>
              <input className="input" value={line} onChange={e=>setItin(i, e.target.value)} placeholder="e.g. 7 Nights Voco Makka (B&B)" />
              <button className="btn ghost" onClick={() => removeItin(i)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
