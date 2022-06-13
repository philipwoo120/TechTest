export interface ConfigRoles {
  [x: string]: { [x: string]: Credentials };
}

export interface Credentials {
  USERNAME: string;
  PASSWORD: string;
}
