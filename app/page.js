import { supabase } from "../lib/supabase";

// Função para buscar os dados no servidor
async function fetchImoveis() {
  const { data, error } = await supabase.from("tbimovel").select("*");
  return { data, error };
}

export default async function Home() {
  const { data, error } = await fetchImoveis();

  if (error) {
    console.log("Erro ao buscar dados:", error);
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Erro ao carregar dados: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>OLÁ, SEJA BEM VINDO!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}