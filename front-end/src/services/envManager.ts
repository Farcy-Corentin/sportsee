export function isProduction(): boolean {
  return import.meta.env.VITE_APP_ENV === 'production'
}
