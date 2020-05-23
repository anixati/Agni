export interface Role {
    id: number;
    name: string;
    description: string;
  }

  export interface Roles {
    [id: number]:Role;
  }