import api from "../api";

export async function getAnimais() {
   const response = await api.get('/api/animal')

   return response.data
}