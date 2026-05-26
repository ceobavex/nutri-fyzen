import React from 'react'

interface LogoNFProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function LogoNF({ className, ...props }: LogoNFProps) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      {...props}
    >
      {/* N - Haste Esquerda */}
      <path 
        d="M10 36V12" 
        stroke="currentColor" 
        strokeWidth="4.5" 
        strokeLinecap="square" 
      />
      
      {/* N - Diagonal (Representando o Fluxo de Dados/Energia para cima) */}
      <path 
        d="M10 12L26 36" 
        stroke="#D9F845" 
        strokeWidth="4.5" 
        strokeLinecap="square" 
      />
      
      {/* N e F - Haste Central Compartilhada */}
      <path 
        d="M26 36V12" 
        stroke="currentColor" 
        strokeWidth="4.5" 
        strokeLinecap="square" 
      />
      
      {/* F - Barra Superior (Totalmente reta e aberta) */}
      <path 
        d="M26 12H38" 
        stroke="currentColor" 
        strokeWidth="4.5" 
        strokeLinecap="square" 
      />
      
      {/* F - Barra Média (Menor, para reforçar o desenho do F) */}
      <path 
        d="M26 24H33" 
        stroke="currentColor" 
        strokeWidth="4.5" 
        strokeLinecap="square" 
      />

      {/* Detalhe Futurista: Folha Digital/Faísca flutuando no topo direito */}
      <path 
        d="M41 12 C46 12 46 6 46 6 C41 6 41 12 41 12 Z" 
        fill="#D9F845" 
      />
    </svg>
  )
}