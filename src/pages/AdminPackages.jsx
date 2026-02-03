
import { useState, useMemo } from 'react'
import { getPackages, savePackages } from '../store/storage'
import { v4 as uuidv4 } from 'uuid'
import PackageCard from '../components/PackageCard'

const emptyForm = () => ({
  id: '',
  title: '',
  dep: '',
  ret: '',
  itinerary: [''],
  options: [
    { stays: [''], prices: { quad: '', triple: '', double: '' } }
  ]
})

export default function AdminPackages(){
  const [packages, setPackages] = useState(getPackages())
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyForm())

  const reset = () => { setEditing(null); setForm(emptyForm()) }

  const handleAddOption = () => {
    setForm(prev => ({...prev, options: [...prev.options, {stays:[''], prices:{quad:'', triple:'', double:''}}]}))
  }

  const handleAddItinerary = () => {
    setForm(prev => ({...prev, itinerary: [...prev.itinerary, '']}))
  }

  const save = () => {
    const data = {...form}
    data.options = data.options.map(o => ({
      stays: o.stays.filter(Boolean),
      prices: { quad: Number((o.prices.quad+'').replace(/[^0-9]/g,'')), triple: Number((o.prices.triple+'').replace(/[^0-9]/g,'')), double: Number((o.prices.double+'').replace(/[^0-9]/g,'')) }
    }))
    data.itinerary = data.itinerary.filter(Boolean)
    if(editing){
      const updated = packages.map(p => p.id===editing.id? {...data, id: editing.id}: p)
      setPackages(updated); savePackages(updated)
    } else {
      const newPkg = { ...data, id: uuidv4() }
      const updated = [newPkg, ...packages]
      setPackages(updated); savePackages(updated)
    }
    reset()
  }

  const onEdit = (pkg) => {
    setEditing(pkg)
    setForm(JSON.parse(JSON.stringify(pkg)))
  }

  const onDelete = (id) => {
    const updated = packages.filter(p => p.id!==id)
    setPackages(updated); savePackages(updated)
  }

  const previewPkg = useMemo(()=> ({...form, id: form.id || 'preview-id'}), [form])

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card">
        <div className="card-header font-semibold">{editing? 'Edit Package' : 'Add New Package'}</div>
        <div className="card-body">
          <label className="block text-sm font-medium">Title</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-3" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} placeholder="e.g., Muharram June 2026 Holiday Umrah Package" />
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Departs</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.dep} onChange={e=>setForm({...form, dep: e.target.value})} placeholder="e.g., 26 June 2026" />
            </div>
            <div>
              <label className="block text-sm font-medium">Returns</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.ret} onChange={e=>setForm({...form, ret: e.target.value})} placeholder="e.g., 11 July 2026" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Itinerary</label>
            {form.itinerary.map((it, idx)=> (
              <div key={idx} className="flex items-center gap-2 mt-2">
                <input className="flex-1 border border-gray-200 rounded-lg px-3 py-2" value={it} onChange={e=>{const v=[...form.itinerary]; v[idx]=e.target.value; setForm({...form, itinerary:v})}} placeholder="e.g., 7 Nights Province Al Sham B&B" />
                <button type="button" className="btn btn-outline" onClick={()=>{const v=[...form.itinerary]; v.splice(idx,1); setForm({...form, itinerary:v})}}>Remove</button>
              </div>
            ))}
            <button type="button" className="btn btn-outline mt-2" onClick={handleAddItinerary}>+ Add line</button>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Options</label>
            {form.options.map((opt, i)=> (
              <div key={i} className="border border-gray-100 rounded-xl p-4 mt-2">
                <label className="block text-sm font-medium">Stays (comma separated)</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={opt.stays.join(', ')} onChange={e=>{const v=[...form.options]; v[i].stays = e.target.value.split(',').map(s=>s.trim()); setForm({...form, options:v})}} placeholder="e.g., 7 Nights Province Al Sham B&B, 7 Nights Voco Makkah B&B" />
                <div className="grid md:grid-cols-3 gap-3 mt-2">
                  <div>
                    <label className="block text-sm font-medium">Quad (ZAR)</label>
                    <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={opt.prices.quad} onChange={e=>{const v=[...form.options]; v[i].prices.quad=e.target.value; setForm({...form, options:v})}} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Triple (ZAR)</label>
                    <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={opt.prices.triple} onChange={e=>{const v=[...form.options]; v[i].prices.triple=e.target.value; setForm({...form, options:v})}} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Double (ZAR)</label>
                    <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={opt.prices.double} onChange={e=>{const v=[...form.options]; v[i].prices.double=e.target.value; setForm({...form, options:v})}} />
                  </div>
                </div>
                <div className="mt-2">
                  <button type="button" className="btn btn-outline" onClick={()=>{const v=[...form.options]; v.splice(i,1); setForm({...form, options:v})}}>Remove option</button>
                </div>
              </div>
            ))}
            <button type="button" className="btn btn-outline mt-2" onClick={handleAddOption}>+ Add option</button>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={save}>{editing? 'Save Changes' : 'Add Package'}</button>
          {editing && <button className="btn btn-outline" onClick={reset}>Cancel</button>}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="text-sm text-gray-500">Preview</div>
        <PackageCard pkg={previewPkg} />
        <div className="text-sm text-gray-500">Existing</div>
        <div className="grid sm:grid-cols-2 gap-4">
          {packages.map(p => (
            <PackageCard key={p.id} pkg={p} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  )
}
