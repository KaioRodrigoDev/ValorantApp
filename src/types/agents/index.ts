export interface AgentProps {
  uuid: string;
  displayName: string;
  description: string;
  displayIconSmall: string;
  abilities: AbilitiesProps[];
  role: RoleProps;
}

export type AbilitiesProps = {
  description: string;
  displayIcon: string;
  displayName: string;
};

export type RoleProps = {
  displayName: string;
};

export interface CardAgentProps {
  agente: AgentProps;
}
