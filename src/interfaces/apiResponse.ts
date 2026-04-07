export interface ApiResponse<T> {
  data: T | null;
  status: number;
  error: string | null;
}