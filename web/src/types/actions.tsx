//Define Action Interfaces
export interface ShowCommits {
  type: string;
  full_name: string;
}

export interface ShowRepos {
  type: string;
  full_name: any;
  details: any
}
