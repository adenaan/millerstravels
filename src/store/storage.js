
const PKG_KEY = 'mt_packages_v1'
const SET_KEY = 'mt_settings_v1'

const defaultSettings = {
  tagline: 'Umrah • Hajj • Holy Land • Custom Travel',
  heroTitle: 'Plan your Umrah & Holy Land journey with confidence',
  heroSubtitle: "Expertly curated packages, transparent pricing, and personal support from Miller's Travel & Tours.",
  address: '200 Wetton Rd, Wetton, Cape Town, 7780',
  phone1: '064 523 2961',
  phone2: '076 799 2661',
  email: 'abubaker@millerstravels.co.za',
  primary: '#d4af37',
  accent: '#8a2be2'
}

function seed(){
  if(!localStorage.getItem(PKG_KEY)){
    const demo = getSeedPackages()
    localStorage.setItem(PKG_KEY, JSON.stringify(demo))
  }
  if(!localStorage.getItem(SET_KEY)){
    localStorage.setItem(SET_KEY, JSON.stringify(defaultSettings))
  }
  // apply theme colors
  try{
    const s = JSON.parse(localStorage.getItem(SET_KEY)) || defaultSettings
    const root = document.documentElement
    root.style.setProperty('--color-primary', s.primary || '#d4af37')
    root.style.setProperty('--color-accent', s.accent || '#8a2be2')
  }catch(e){}
}

export function getPackages(){
  seed()
  try{ return JSON.parse(localStorage.getItem(PKG_KEY)) || [] }catch(e){ return [] }
}
export function savePackages(list){
  localStorage.setItem(PKG_KEY, JSON.stringify(list))
}
export function getSettings(){
  seed()
  try{ return JSON.parse(localStorage.getItem(SET_KEY)) || defaultSettings }catch(e){ return defaultSettings }
}
export function saveSettings(s){
  localStorage.setItem(SET_KEY, JSON.stringify(s))
  try{
    const root = document.documentElement
    root.style.setProperty('--color-primary', s.primary || '#d4af37')
    root.style.setProperty('--color-accent', s.accent || '#8a2be2')
  }catch(e){}
}

export function getSeedPackages(){
  return [
    {
      id: 'umrah-june-2026',
      title: 'Muharram June 2026 Holiday Umrah Package',
      dep: '26 June 2026',
      ret: '11 July 2026',
      itinerary: [],
      options: [
        { stays: ['7 Nights Province Al Sham B&B', '7 Nights Voco Makkah B&B'], prices: { quad: 29990, triple: 32990, double: 35990 } },
        { stays: ['7 Nights Province Al Sham B&B', '7 Nights Anjum Makkah B&B'], prices: { quad: 33990, triple: 34990, double: 39990 } },
        { stays: ['7 Nights Province Al Sham B&B', '7 Nights Hyatt Regency'], prices: { quad: 36990, triple: 39990, double: 45990 } }
      ]
    },
    {
      id: 'three-haram-mar-2026',
      title: 'Deal 2 – March 2026 Three Haram Tour',
      dep: '22 March 2026',
      ret: '12 April 2026',
      itinerary: [
        '2 Nights Lijam Amman – Breakfast & Dinner',
        '5 Nights Holy Land Jerusalem – Breakfast & Dinner',
        '6 Nights Makkah – B&B',
        '7 Nights Province Al Sham – B&B'
      ],
      options: [
        { stays: ['6 Nights Voco Makkah B&B','7 Nights Province Al Sham B&B'], prices: { quad: 44990, triple: 46990, double: 50990 } },
        { stays: ['6 Nights Hyatt Regency B&B','7 Nights Province Al Sham B&B'], prices: { quad: 49990, triple: 52990, double: 56990 } }
      ]
    }
  ]
}

seed()
