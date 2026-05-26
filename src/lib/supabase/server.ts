import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  // Aguardamos a Promise ser resolvida antes de acessar os cookies
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {
            // Bloco catch sem a variável 'error' para resolver o aviso do ESLint.
            // Ignorado intencionalmente, pois Server Components não podem definir cookies diretamente.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // Bloco catch sem a variável 'error' para resolver o aviso do ESLint.
            // Ignorado intencionalmente pelo mesmo motivo do set.
          }
        },
      },
    }
  )
}