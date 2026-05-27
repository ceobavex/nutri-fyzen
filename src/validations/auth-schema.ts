import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Por favor, insira um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
})

export const patientRegisterSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'Use no mínimo 8 caracteres na senha.'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
})

export const nutriRegisterSchema = z.object({
  name: z.string().min(3, 'Nome completo obrigatório.'),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'Use no mínimo 8 caracteres na senha.'),
  crn: z.string().min(4, 'CRN inválido.'),
  phone: z.string().min(10, 'Telefone/WhatsApp inválido.'),
  clinicName: z.string().min(2, 'Nome do consultório/clínica é obrigatório.')
})

export type LoginFormValues = z.infer<typeof loginSchema>
export type PatientRegisterFormValues = z.infer<typeof patientRegisterSchema>
export type NutriRegisterFormValues = z.infer<typeof nutriRegisterSchema>