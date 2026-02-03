
export function formatZAR(value){
  if(value===undefined || value===null || value==='') return '—'
  try{
    return new Intl.NumberFormat('en-ZA', { style:'currency', currency: 'ZAR', maximumFractionDigits:0 }).format(Number(value))
  }catch(e){
    return `R ${value}`
  }
}
