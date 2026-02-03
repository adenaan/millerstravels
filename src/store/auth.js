
const AUTH_KEY = 'mt_auth_v1'
const DEMO_EMAIL = 'admin@millerstravels.co.za'
const DEMO_PASS = 'demo123'

export function login(email, password){
  if(email===DEMO_EMAIL && password===DEMO_PASS){
    localStorage.setItem(AUTH_KEY, JSON.stringify({ email, t: Date.now() }))
    location.assign('/admin')
  } else {
    throw new Error('Invalid credentials')
  }
}
export function isAuthenticated(){
  try{ return JSON.parse(localStorage.getItem(AUTH_KEY))?.email === DEMO_EMAIL }catch(e){ return false }
}
export function logout(){
  localStorage.removeItem(AUTH_KEY)
  location.assign('/')
}
