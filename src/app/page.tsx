import { MousePointer2, MessageSquare, Terminal, Shield, Zap, Globe, ImageIcon, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-accent/20 font-body flex flex-col items-center">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-[24px] border border-white/10 bg-white/[0.02] shadow-2xl mb-8 animate-in fade-in zoom-in duration-1000">
          <MousePointer2 className="w-6 h-6 text-accent" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-headline uppercase italic mb-6 animate-in slide-in-from-bottom-4 duration-700">
          XZAFE <span className="text-accent opacity-90">osx 2.5 flash</span>
        </h1>
        
        <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-10 animate-in slide-in-from-bottom-6 duration-1000">
          A interface de elite que redefine a interação entre humanos e inteligência artificial. 
          Processamento híbrido, busca em tempo real e arte generativa em um único terminal.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in slide-in-from-bottom-8 duration-1000">
          <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 px-10 h-14 text-sm font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <Link href="/chat" className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              Abrir Terminal XZAFE
            </Link>
          </Button>
          <div className="px-8 py-3.5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black bg-white/[0.02]">
            Versão v2.5 Stable Alpha
          </div>
        </div>
      </section>

      {/* Grid de Funcionalidades */}
      <section className="w-full max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-300">
        <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-sm font-black uppercase tracking-widest text-white">Busca em Tempo Real</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-medium">
            Conexão direta com a rede mundial. O XZAFE valida informações em múltiplas fontes para entregar fatos, não alucinações.
          </p>
        </div>

        <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-black uppercase tracking-widest text-white">Arte Generativa</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-medium">
            Motor de imagem integrado para transformar descrições em visualizações cinematográficas instantâneas.
          </p>
        </div>

        <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-black uppercase tracking-widest text-white">Pensamento Sistêmico</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-medium">
            Entende contextos profundos e referências técnicas (Week 1, FNF, Sistemas de Elite) com precisão de arquitetura.
          </p>
        </div>
      </section>

      {/* Explicação de Funcionamento */}
      <section className="w-full max-w-4xl px-6 py-24 border-t border-white/5">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">O Que é o XZAFE?</h2>
              <p className="text-zinc-400 leading-relaxed">
                Mais que um chatbot, o XZAFE é um <span className="text-white font-bold">Sistema Operacional de Inteligência</span>. 
                Ele foi projetado para ser seu terminal central de conhecimento, onde cada resposta é formatada para máxima clareza técnica.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Interface Minimalista & Foco Total
                </li>
                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Sistema de Fontes Verificadas (get:HTTPS)
                </li>
                <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Modo Imagem Direto via AI Horde
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[300px] aspect-square rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <Terminal className="w-20 h-20 text-white/20 group-hover:text-accent transition-colors duration-500" />
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Corrigido */}
      <footer className="w-full py-12 mt-12 border-t border-white/[0.03] flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <div className="text-[9px] uppercase tracking-[0.5em] text-zinc-700 font-black">XZAFE osx v2.5.0</div>
          <div className="w-1 h-1 rounded-full bg-zinc-800" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-zinc-700 font-black">Flash Intelligence</div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500/40 font-black hover:text-white/40 transition-colors">
          Desenvolvido por Xzafe • 2024
        </div>
      </footer>
    </main>
  );
}
