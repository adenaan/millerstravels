
export function formatZAR(value){
  if(value===undefined || value===null || value==='') return '—'
  try{
    return new Intl.NumberFormat('en-ZA', { style:'currency', currency: 'ZAR', maximumFractionDigits:0 }).format(Number(value))
  }catch(e){
    return `R ${value}`
  }
}

export function lowestPrice(pkg){
  let min = Infinity
  for(const opt of (pkg.options||[])){
    const vals = [opt.prices?.quad, opt.prices?.triple, opt.prices?.double]
      .map(v=> typeof v === 'number' ? v : Number(String(v||'').replace(/[^0-9]/g,'')))
      .filter(v=>!isNaN(v) && v>0)
    for(const v of vals){ if(v < min) min = v }
  }
  return min===Infinity? null : min
}
