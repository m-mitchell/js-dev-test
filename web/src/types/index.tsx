//Redux Store State
export interface StoreState {
  repos: object;
  languages: string[];
  full_name: string;
  visibleRepos: object;
  view: string;
  details: object;
  selectedFilter: string
}

export interface IRepo {
  id?: number;
  name: string;
  description: string;
  language: string;
  forks_count: number;
  full_name: string;
}

//Components Types
export interface AppProps {
  getRepos: any;
  view: string;
}

export interface AppState {

}

export interface CommitProps {
  commit: object
}

export interface CommitState {

}

export interface DetailsProps {
  getDetails: any,
  showRepos: any,
  commits: any
}

export interface DetailsState {

}

export interface FilterLinkProps {

}

export interface FilterLinkState {

}

export interface ListFilterProps {

}

export interface ListFilterState {

}

export interface RepoProps {

}

export interface RepoState {

}

export interface RepoListProps {

}

export interface RepoListState {

}

export interface VisibleRepoListProps {

}

export interface VisibleRepoListState {

}
