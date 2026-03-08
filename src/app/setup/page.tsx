
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Terminal, User, Sparkles, Zap } from "lucide-react";

export default function SetupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    chamado: "",
    estilo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.idade) return;

    localStorage.setItem("xzafe_user_data", JSON.stringify(formData));
    localStorage.setItem("xzafe_setup_complete", "true");
    router.push("/chat");
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 font-body">
      <Card className="w-full max-w-md bg-zinc-950 border-white/10 p-8 space-y-8 shadow-2xl rounded-[32px]">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center border border-accent/20">
            <Terminal className="w-8 h-8 text-accent" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-black uppercase italic tracking-tighter text-white">Configuração XZAFE</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Terminal OSX 2.5 Flash</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold pl-1">Nome Completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <Input 
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="bg-white/[0.03] border-white/5 pl-10 h-12 rounded-xl text-white placeholder:text-zinc-700"
                  placeholder="Seu nome..."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold pl-1">Idade</Label>
                <Input 
                  type="number"
                  value={formData.idade}
                  onChange={(e) => setFormData({...formData, idade: e.target.value})}
                  className="bg-white/[0.03] border-white/5 h-12 rounded-xl text-white placeholder:text-zinc-700"
                  placeholder="Anos"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold pl-1">Como ser chamado?</Label>
                <Input 
                  value={formData.chamado}
                  onChange={(e) => setFormData({...formData, chamado: e.target.value})}
                  className="bg-white/[0.03] border-white/5 h-12 rounded-xl text-white placeholder:text-zinc-700"
                  placeholder="Apelido..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold pl-1">Seu Estilo</Label>
              <div className="relative">
                <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <Input 
                  value={formData.estilo}
                  onChange={(e) => setFormData({...formData, estilo: e.target.value})}
                  className="bg-white/[0.03] border-white/5 pl-10 h-12 rounded-xl text-white placeholder:text-zinc-700"
                  placeholder="Ex: Minimalista, Técnico..."
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-14 bg-accent hover:bg-accent/90 text-black font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-accent/10 flex items-center justify-center gap-3">
            Começar Experiência
            <Zap className="w-4 h-4" />
          </Button>
        </form>
      </Card>
    </main>
  );
}
