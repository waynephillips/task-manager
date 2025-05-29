export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date
}
export interface TaskFormData {
  title: string;
}
