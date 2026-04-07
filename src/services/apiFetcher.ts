import { ApiResponse } from "../interfaces/apiResponse.js";

export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        data: null,
        status: response.status,
        error: `No se pudo conectar con Rick & Morty API. Código: ${response.status}`
      };
    }

    const data: T = await response.json();
    return { data, status: response.status, error: null };
  } catch (err) {
    return {
      data: null,
      status: 0,
      error: err instanceof Error ? err.message : "Error de conexión"
    };
  }
}