import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
    
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
              </div>
      
              <footer className="mt-10 text-sm text-gray-500">
  <div className="flex justify-between">
    <span>© 2025 IQVIA</span>
    <span>Versão 1.0.0</span>
  </div>
</footer>

      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/img-login.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
