// src/components/Login.tsx
import React, { useState } from "react";
import { Cloud, Stars, Sun, Moon } from "lucide-react";
import { registerStudent, loginStudent } from "@/services/authService";
import { useAuth } from "@/store/authContext";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [alias, setAlias] = useState("");

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [avatar, setAvatar] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistering) {
      try {
        const response = await registerStudent({
          nombre,
          apellido,
          alias,
          avatar,
        });
        alert(response.message); // Muestra mensaje de éxito
        setIsRegistering(false); // Cambia al modo de login
      } catch (error: any) {
        alert(error.message); // Muestra mensaje de error
      }
    } else {
      try {
        const { token } = await loginStudent(alias);
        login(token); // Guarda el token en el contexto
        window.location.href = "/"; // Redirige al dashboard
      } catch (error: any) {
        alert(error.message); // Muestra mensaje de error
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Cloud className="text-white/50 w-20 h-20 absolute animate-float top-20 left-[10%]" />
        <Cloud className="text-white/50 w-16 h-16 absolute animate-float-delayed top-40 right-[20%]" />
        <Stars className="text-yellow-200 w-8 h-8 absolute animate-twinkle top-[15%] left-[30%]" />
        <Stars className="text-yellow-200 w-6 h-6 absolute animate-twinkle-delayed top-[25%] right-[35%]" />
        <Sun className="text-yellow-300 w-24 h-24 absolute animate-spin-slow top-10 right-10" />
        <Moon className="text-gray-200 w-16 h-16 absolute animate-bounce-slow bottom-20 left-20" />
      </div>

      <div className="w-full max-w-md relative">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500">
          <div className="px-8 py-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
              {isRegistering
                ? "¡Únete a la diversión!"
                : "¡Bienvenido de nuevo!"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Alias
                </label>
                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-white/50"
                  placeholder="Tu nombre secreto"
                  required
                />
              </div>

              {isRegistering && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-white/50"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      type="text"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-white/50"
                      placeholder="Tu apellido"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Avatar (URL)
                    </label>
                    <input
                      type="text"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-white/50"
                      placeholder="URL de tu avatar"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105"
              >
                {isRegistering ? "¡Registrarme!" : "¡Entrar!"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
              >
                {isRegistering
                  ? "¿Ya tienes una cuenta? ¡Inicia sesión!"
                  : "¿No tienes cuenta? ¡Regístrate!"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
