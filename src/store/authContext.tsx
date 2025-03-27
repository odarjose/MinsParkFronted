// src/store/authContext.ts
import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  user: { token: string } | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ token: string } | null>(null); // Estado del usuario autenticado

  const login = (token: string) => {
    localStorage.setItem("token", token); // Guarda el token en localStorage
    setUser({ token }); // Actualiza el estado global
  };

  const logout = () => {
    localStorage.removeItem("token"); // Elimina el token de localStorage
    setUser(null); // Limpia el estado global
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
