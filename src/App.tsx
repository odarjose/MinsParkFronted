import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./store/authContext";
import AppRoutes from "@/routes/index";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
export default App;
