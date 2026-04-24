import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from "./app/store"
import { ThemeProvider } from "./components/ui/theme-provider.tsx"
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  </Provider>
)