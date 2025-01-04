// pages/patient-registration.tsx
import React from "react";
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
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
          <div className="flex flex-col items-left gap-2 text-left">
        <h1 className="text-xl font-bold">Cadastro de paciente</h1>
       
      </div>
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
          <Label>Sexo</Label>
            <Select required>
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
            <Input id="DDD" placeholder="Informe o DDD" />
            <Input id="Telefone" placeholder="Informe o telefone" />
            <Input id="E-mail" placeholder="Informe o e-mail" />
          </div>

          {/* Endereço */}
          <fieldset className="mt-6">
            <legend className="font-semibold text-gray-700 flex items-center gap-2">
              <span>📍</span> Endereço
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Input id="CEP*" placeholder="Informe o CEP" required />
              <Input id="Logradouro" placeholder="Informe o logradouro" />
              <Input id="Número" placeholder="Informe o número" />
              <Input id="Complemento" placeholder="Informe o complemento" />
              <Input id="Bairro" placeholder="Informe o bairro" />
              <Input id="Cidade" placeholder="Informe a cidade" />
              <Input id="Estado" placeholder="Informe o estado" />
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
              <div className="mt-4">
                <Checkbox id="terms" required>
                  Declaro que li e concordo com os termos e condições de uso.
                </Checkbox>
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
