import { PatientForm } from "@/components/patient-form";


export default function PatientPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[3fr_1fr]">
      {/* Formulário à esquerda */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Cabeçalho */}
        <div className="flex justify-center gap-2 md:justify-center">
          <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex justify-center mb-2">
        <img src="/logo.svg" alt="Logo"  className="h-16 w-32" />
      </div>
          </a>
        </div>
       
        {/* Formulário */}
        <div className="flex flex-1 items-center justify-center w-full">
          <div className="w-full max-w-screen-xl">
            <PatientForm />
          </div>
        </div>
            {/* Footer */}
            <footer className="mt-10 text-sm text-gray-500">
  <div className="flex justify-between">
    <span>© 2025 IQVIA</span>
    <span>Versão 1.0.0</span>
  </div>
</footer>
      </div>

      {/* Imagem à direita com largura reduzida */}
      <div className="relative bg-muted">
        <img
          src="/img-login.jpeg" // Substitua pelo caminho correto da imagem
          alt="Imagem"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
