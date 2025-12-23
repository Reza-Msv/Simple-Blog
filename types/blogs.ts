export interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  slug?: string;
  tags?: string;
  category?: string;
  status?: boolean;
}
