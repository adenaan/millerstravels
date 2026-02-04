const PACKAGES_KEY = 'millers:packages'
const CONFIG_KEY = 'millers:siteConfig'
const ADMIN_KEY = 'millers:adminSession'

export function loadJSON(key, fallback){
  try{
    const raw = localStorage.getItem(key)
    if(!raw) return fallback
    return JSON.parse(raw)
  }catch{
    return fallback
  }
}

export function saveJSON(key, value){
  localStorage.setItem(key, JSON.stringify(value))
}

export function ensureSeed({ defaultPackages, defaultConfig }){
  const existingPackages = loadJSON(PACKAGES_KEY, null)
  const existingConfig = loadJSON(CONFIG_KEY, null)

  if(!existingPackages) saveJSON(PACKAGES_KEY, defaultPackages)
  if(!existingConfig) saveJSON(CONFIG_KEY, defaultConfig)
}

export function getPackages(){ return loadJSON(PACKAGES_KEY, []) }
export function setPackages(pkgs){ return saveJSON(PACKAGES_KEY, pkgs) }

export function getConfig(){ return loadJSON(CONFIG_KEY, {}) }
export function setConfig(cfg){ return saveJSON(CONFIG_KEY, cfg) }

export function getAdminSession(){ return loadJSON(ADMIN_KEY, { authed:false }) }
export function setAdminSession(session){ return saveJSON(ADMIN_KEY, session) }
export function clearAdminSession(){ localStorage.removeItem(ADMIN_KEY) }
