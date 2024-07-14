import "./App.css";
import Form from "./Form";
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      
        <Form></Form>

    </ThemeProvider>
  )
}
export default App;