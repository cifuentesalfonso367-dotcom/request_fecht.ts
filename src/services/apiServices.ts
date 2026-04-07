import { ApiResponse } from "../interfaces/apiResponse.js";
import { fetchData } from "./apiFetcher.js";

interface RickAndMortyListResponse<T> {
  info: object;
  results: T[];
}

export class ApiService<T> {
  private baseUrl: string;

  constructor(endpoint: string) {
    this.baseUrl = endpoint;
  }

  async getAll(): Promise<ApiResponse<T[]>> {
    const response = await fetchData<RickAndMortyListResponse<T>>(this.baseUrl);
    
    return {
      data: response.data ? response.data.results : null,
      status: response.status,
      error: response.error
    };
  }

  async getOne(id: number): Promise<ApiResponse<T>> {
    return await fetchData<T>(`${this.baseUrl}/${id}`);
  }
}