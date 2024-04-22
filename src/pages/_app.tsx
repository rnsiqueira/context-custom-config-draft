import { AuthProvider } from '@/contexts/AuthContext'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}