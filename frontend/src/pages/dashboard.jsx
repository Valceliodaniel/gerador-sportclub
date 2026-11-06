import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se o token de login existe
    const token = localStorage.getItem('sportech_token');
    if (!token) {
      // Se não tiver login, joga de volta para a tela de login
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <div className="flex h-screen items-center justify-center bg-slate-900 text-white">Carregando...</div>;

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
      {/* Aqui entra aquele menu lateral e as telas que criamos antes */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        {/* ... */}
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Gerenciador Sportech</h1>
        {/* ... */}
      </main>
    </div>
  );
}
