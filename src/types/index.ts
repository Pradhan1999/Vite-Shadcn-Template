import { UriEndPoint } from "../interface/index";

export interface EndPoint {
  [key: string]: UriEndPoint;
}

export interface formDetailInterface {
  user_handle: string;
  bio: string;
  dob: string | undefined;
  country: string;
  city: string;
  gender: string;
}

export interface queryInterace {
  page?: number;
  limit?: number;
  keyword?: string;
  leadSource?: string;
  leadStage?: string;
  sortByName?: boolean;
  sortByRevenue?: boolean;
}

export type PhoneNumber = {
  countryCode: string;
  number: string;
};

export type mediaProps = {
  url: string;
  fileType: string;
  name: string;
};

export type Opportunity = {
  _id: string;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  phone: PhoneNumber;
  estimatedCloseDate: Date;
  leadSource: string;
  leadStage: string;
  revenuePotential: number;
  description: string;
  media: mediaProps;
};

export type stage = {
  id: number;
  title: string;
  key: string;
  isCompleted: boolean;
};
