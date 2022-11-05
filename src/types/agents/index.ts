export interface AgentProps {
  uuid: string;
  displayName: string;
  description: string;
}

export interface CardAgentProps {
  agente: AgentProps[];
}
