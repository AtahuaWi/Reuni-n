export enum TabView {
  DASHBOARD = 'DASHBOARD',
  DOCUMENTS = 'DOCUMENTS',
  THESIS = 'THESIS',
  FAQ_CHAT = 'FAQ_CHAT'
}

export interface DocumentReq {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  details: string[];
  important: boolean;
}

export interface ThesisStep {
  id: number;
  title: string;
  description: string;
  active: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}