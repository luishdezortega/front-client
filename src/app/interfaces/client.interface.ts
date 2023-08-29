export interface Client {
  name: string;
  phone: string;
  mail: string;
  startDate: string;
  endDate: string;
  sharedKey?: string;
  bindingDate?: string;
}

export interface ClientListResponse {
  numberOfElements: number;
  numberOfPages: number;
  responseDto: Client[];
}
