export interface ISubItem {
  id: number;
  name: string;
  link: string;
}

export interface ISidebar {
  id: number;
  name: string;
  link: string;
  subItem: ISubItem[] | undefined;
}
