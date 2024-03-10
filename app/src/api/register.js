import { urls } from "./urls";
import { POST } from "../services/http";

export async function register(credentials) {
  const req = {
    url: urls.register,
    data: credentials,
  };
  const response = await POST(req);
  return response;
}
