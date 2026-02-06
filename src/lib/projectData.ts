export interface Project {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Como esse ecossistema de IAs substituiram 5 vendedores!",
    description: "Automatizamos a qualificação de leads e aumentamos conversões com atendimento personalizado 24/7.",
    youtubeId: "rNG_-h4i32Y"
  },
  {
    id: 2,
    title: "Como a Agente IA Aurora atende 600+ clientes todo mês.",
    description: "Implementamos a Aurora, uma agente IA que lida com dúvidas, agendamento e suporte, liberando mais de 15h semanais da equipe para tarefas estratégicas.",
    youtubeId: "fjhKdviALTE"
  }
];
