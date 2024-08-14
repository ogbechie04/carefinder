export default interface Hospital {
  imageURL: string;
  name: string;
  location: string;
  address: string;
  phoneNumber: string[];
  state: string;
  type: string;
  email: string;
}

export interface csvHospital {
  name: string;
  location: string;
  address: string;
  phoneNumber: string[];
  state: string;
  type: string;
  email: string;
}

export interface ResponseHospital {
  name: string;
  location: string;
  address: string;
  phone_number: string[];
  state: string;
  type: string;
  email: string;
}
