// pages/patient-registration.tsx
import React from "react";
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PatientForm({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"form">) {
    return (
      <form className={cn("flex flex-col gap-6", className)} {...props}>
       <div className="flex flex-col items-start gap-2 text-left">
        <h1 className="text-xl font-bold">Cadastro de paciente</h1>
        <p className="text-sm text-muted-foreground">
        Informe os campos abaixo para solicitar acesso ao programa.
        </p>
      </div>
      <Separator className="my-2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Primeira Linha */}
          
          <div className="grid gap-2">
          <Label htmlFor="cpf">CPF*</Label>
            <Input id="cpf" placeholder="Informe um CPF" required />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="nome">Nome completo*</Label>
            <Input id="nome" placeholder="Informe um nome" required />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="apelido">Como prefere ser chamdo?*</Label>
            <Input id="apelido" placeholder="Informe um apelido" required />
            </div>
          {/* Segunda Linha */}
          <div className="grid gap-2">
          <Label htmlFor="sexo">Sexo</Label>
            <Select name="Sexo" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Masculino</SelectItem>
                <SelectItem value="female">Feminino</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
          <Label htmlFor="ddd-celular">DDD</Label>
            <Input id="ddd-celular" placeholder="Informe o DDD" required />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="celular">Celular</Label>
            <Input id="celular" placeholder="Informe o celular" required />
</div>
          {/* Terceira Linha */}
          <div className="grid gap-2">
          <Label htmlFor="ddd-telefone">DDD</Label>
            <Input id="ddd-telefone" placeholder="Informe o DDD" />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" placeholder="Informe o telefone" />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="email">E-mail*</Label>
            <Input id="email" placeholder="Informe o e-mail" />
            </div>
          </div>

          {/* Endereço */}
          <fieldset className="mt-6">
            <legend className="font-semibold text-gray-700 flex items-center gap-2">
              <span>📍</span> Endereço
            </legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="grid gap-2">
          <Label htmlFor="cep">CEP*</Label>
              <Input id="CEP*" placeholder="Informe o CEP" required />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="logradouro">Logradouro</Label>
              <Input id="logradouro" placeholder="Informe o logradouro" />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="numero">Número*</Label>
              <Input id="numero" placeholder="Informe o número" />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="complemento">Complemento</Label>
              <Input id="complemento" placeholder="Informe o complemento" />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="bairro">Bairro</Label>
              <Input id="bairro" placeholder="Informe o bairro" />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" placeholder="Informe a cidade" />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="estado">Estado</Label>
              <Input id="estado" placeholder="Informe o estado" />
            </div>
          </div>
          </fieldset>

          {/* Termos e Condições */}
          <fieldset className="mt-6">
            <legend className="font-semibold text-gray-700 flex items-center gap-2">
              <span>📄</span> Termos e condições
            </legend>
            <div className="mt-4">
              <Textarea
                value="Lorem ipsum dolor sit amet consectetur adipiscing elit..."
                className="h-32"
                disabled
              />
          <div className="flex items-center space-x-2 mt-4">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       Declaro que li e concordo com os termos e condições de uso.
      </Label>
    </div>
            </div>
          </fieldset>

          {/* Botões */}
          <div className="flex justify-end gap-4 mt-6">
            <Button variant="secondary-outline">Cancelar</Button>
            <Button  variant="secondary"  type="submit">Salvar</Button>
        </div>
        
        </form>
    )
}
