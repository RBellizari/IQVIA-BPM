import { GalleryVerticalEnd } from "lucide-react";
import { PatientForm } from "@/components/patient-form";

export default function PatientPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[3fr_1fr]">
      {/* Formulário à esquerda */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Cabeçalho */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>

        {/* Formulário */}
        <div className="flex flex-1 items-center justify-center w-full">
          <div className="w-full max-w-screen-xl">
            <PatientForm />
          </div>
        </div>
            {/* Footer */}
      <footer className="text-center mt-10 text-sm text-gray-500">
        © 2024 IQVIA | Versão 1.0.0
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
