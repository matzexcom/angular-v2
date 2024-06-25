export interface Task {
  id: string;
  uid: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}
