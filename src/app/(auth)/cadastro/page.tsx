"use client"

import { useState } from "react"
import { useForm, Control, FieldValues, Path } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  patientRegisterSchema,
  nutriRegisterSchema,
  PatientRegisterFormValues,
  NutriRegisterFormValues,
} from "@/validations/auth-schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Mail, Lock, User, Phone, BadgeCheck, Building2 } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [activeProfile, setActiveProfile] = useState<"nutri" | "patient">(
    "nutri"
  )

  const patientForm = useForm<PatientRegisterFormValues>({
    resolver: zodResolver(patientRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const nutriForm = useForm<NutriRegisterFormValues>({
    resolver: zodResolver(nutriRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      crn: "",
      phone: "",
      clinicName: "",
    },
  })

  function onPatientSubmit(data: PatientRegisterFormValues) {
    console.log("Cadastro Paciente:", data)
  }

  function onNutriSubmit(data: NutriRegisterFormValues) {
    console.log("Cadastro Nutricionista:", data)
  }

  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.08] p-7 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Crie sua Clínica Digital
        </h1>
        <p className="mt-2 text-base text-zinc-300">
          Personalize seu painel e crie sua conta para continuar
        </p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3">
        <button
          type="button"
          onClick={() => setActiveProfile("nutri")}
          className={`h-11 rounded-lg border text-base font-semibold transition ${
            activeProfile === "nutri"
              ? "border-white/30 bg-white/10 text-white shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              : "border-white/50 text-white hover:bg-white/10"
          }`}
        >
          Sou Nutricionista
        </button>

        <button
          type="button"
          onClick={() => setActiveProfile("patient")}
          className={`h-11 rounded-lg border text-base font-semibold transition ${
            activeProfile === "patient"
              ? "border-white/30 bg-white/10 text-white shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              : "border-white/50 text-white hover:bg-white/10"
          }`}
        >
          Sou Paciente
        </button>
      </div>

      <p className="mb-4 text-center text-base font-semibold text-white">
        {activeProfile === "nutri" ? "Dados da Clínica" : "Dados do Paciente"}
      </p>

      {activeProfile === "nutri" ? (
        <Form {...nutriForm}>
          <form
            onSubmit={nutriForm.handleSubmit(onNutriSubmit)}
            className="space-y-3"
          >
            <Field
              control={nutriForm.control}
              name="name"
              placeholder="Nome completo"
              icon={<User className="h-5 w-5" />}
            />

            <Field
              control={nutriForm.control}
              name="email"
              placeholder="E-mail profissional"
              type="email"
              icon={<Mail className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field
                control={nutriForm.control}
                name="crn"
                placeholder="CRN"
                icon={<BadgeCheck className="h-5 w-5" />}
              />

              <Field
                control={nutriForm.control}
                name="phone"
                placeholder="WhatsApp"
                icon={<Phone className="h-5 w-5" />}
              />
            </div>

            <Field
              control={nutriForm.control}
              name="clinicName"
              placeholder="Nome da clínica"
              icon={<Building2 className="h-5 w-5" />}
            />

            <Field
              control={nutriForm.control}
              name="password"
              placeholder="Senha"
              type="password"
              icon={<Lock className="h-5 w-5" />}
            />

            <Button
              type="submit"
              className="h-11 w-full rounded-lg bg-emerald-500 text-base font-bold text-white shadow-[0_0_26px_rgba(16,185,129,0.28)] transition hover:bg-emerald-400"
            >
              Criar Conta
            </Button>
          </form>
        </Form>
      ) : (
        <Form {...patientForm}>
          <form
            onSubmit={patientForm.handleSubmit(onPatientSubmit)}
            className="space-y-3"
          >
            <Field
              control={patientForm.control}
              name="name"
              placeholder="Nome completo"
              icon={<User className="h-5 w-5" />}
            />

            <Field
              control={patientForm.control}
              name="email"
              placeholder="E-mail"
              type="email"
              icon={<Mail className="h-5 w-5" />}
            />

            <Field
              control={patientForm.control}
              name="password"
              placeholder="Senha"
              type="password"
              icon={<Lock className="h-5 w-5" />}
            />

            <Field
              control={patientForm.control}
              name="confirmPassword"
              placeholder="Confirmar senha"
              type="password"
              icon={<Lock className="h-5 w-5" />}
            />

            <Button
              type="submit"
              className="h-11 w-full rounded-lg bg-emerald-500 text-base font-bold text-white shadow-[0_0_26px_rgba(16,185,129,0.28)] transition hover:bg-emerald-400"
            >
              Criar Conta
            </Button>
          </form>
        </Form>
      )}

      <div className="my-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-sm text-zinc-300">ou continue com</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          className="h-11 w-full rounded-lg border-white/10 bg-transparent text-base font-semibold text-white hover:bg-white/10 hover:text-white"
        >
          <GoogleIcon />
          Entrar com Google
        </Button>

        <Button
          type="button"
          variant="outline"
          className="h-11 w-full rounded-lg border-white/10 bg-black text-base font-semibold text-white hover:bg-zinc-950 hover:text-white"
        >
          <AppleIcon />
          Apple
        </Button>
      </div>

      <p className="mt-4 text-center text-sm text-zinc-300">
        Já possui conta?{" "}
        <Link
          href="/login"
          className="font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          Acessar painel
        </Link>
      </p>
    </div>
  )
}

type FieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  placeholder: string
  type?: string
  icon: React.ReactNode
}

function Field<T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
  icon,
}: FieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                {icon}
              </div>

              <Input
                type={type}
                placeholder={placeholder}
                className="h-11 rounded-lg border-white/10 bg-black/20 pl-12 text-white placeholder:text-zinc-500 focus-visible:ring-emerald-500"
                {...field}
              />
            </div>
          </FormControl>

          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  )
}

function GoogleIcon() {
  return (
    <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg className="mr-3 h-5 w-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.55 2.82-1.33Z" />
    </svg>
  )
}