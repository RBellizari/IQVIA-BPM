// components/Header.tsx
import * as React from "react"
import Image from "next/image";

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white h-16 px-6 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo e Nome da Empresa */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png" // Substitua pelo caminho do logotipo
            alt="IQVIA Technologies"
            width={50}
            height={50}
          />
          <span className="text-lg font-bold">IQVIA TECHNOLOGIES</span>
        </div>

        {/* Informações do Usuário */}
        <div className="flex items-center space-x-8">
          <div className="text-right">
            <p className="font-semibold">Administrador PBM</p>
            <p className="text-sm text-gray-200">Projeto PBM</p>
          </div>

          {/* Tempo de Sessão */}
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Tempo de sessão: 25:00
            </span>
          </div>

          {/* Botão de Logout */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-blue-600 transition"
            aria-label="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9l3 3-3 3M9 12h6"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
