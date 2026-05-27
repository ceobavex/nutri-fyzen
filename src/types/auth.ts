export type AccountRole = 
  | 'patient'
  | 'nutritionist_owner'
  | 'clinic_owner'
  | 'nutritionist_staff'
  | 'receptionist'
  | 'assistant'
  | 'financial'
  | 'admin'

export type SubscriptionPlan = 'core' | 'pro' | 'clinic' | 'free'

export interface AppUser {
  id: string
  email: string
  role: AccountRole
  organization_id: string | null
  subscription_plan: SubscriptionPlan
}