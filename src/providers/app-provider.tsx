'use client'

import { ReactNode } from 'react'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  // Futuramente adicionaremos aqui: ThemeProvider, AuthProvider, etc.
  return (
    <>
      {children}
    </>
  )
}