// src/services/authService.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("API_URL no está definida. Verifica tu archivo .env");
}

export const registerStudent = async (studentData: {
  nombre: string;
  apellido: string;
  alias: string;

}) => {
  try {
    // Validar que los campos obligatorios estén presentes
    if (!studentData.nombre || !studentData.apellido || !studentData.alias) {
      throw new Error("Todos los campos son obligatorios");
    }

    const response = await axios.post(`${API_URL}/auth/register`, studentData);
    return response.data; // Retorna los datos del estudiante registrado
  } catch (error: any) {
    throw new Error(
      error.response?.data?.mensaje || "Error al registrar el estudiante"
    );
  }
};

export const loginStudent = async (alias: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { alias });
    return response.data; // Retorna el token
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al iniciar sesión");
  }
};
