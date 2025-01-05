"use client"; // Necessário para Client Components

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"; // Importando o Link

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Cabeçalho */}
      <div className="flex justify-center gap-2 md:justify-center">
          <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex justify-center mb-2">
        <img src="/logo.svg" alt="Logo"  className="h-32 w-32" />
      </div>
          </a>
        </div>
      <div className="flex flex-col items-start gap-2 text-left">
        <h1 className="text-xl font-bold">Acesse sua conta</h1>
        <p className="text-sm text-muted-foreground">
        Informe o seu e-mail e senha para acessar.
        </p>
      </div>

      {/* Campos do Formulário */}
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="Informe seu e-mail" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Informe sua senha" required />
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-4">
        <Button variant="secondary" type="submit" className="w-full">
          Acessar
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Ou
          </span>
        </div>

        {/* Botão com Link para /patient */}
        <Link href="/patient">
          <Button type="button" variant="secondary-outline" className="w-full">
            Solicitar acesso
          </Button>
        </Link>
      </div>
    </form>
  );
}
