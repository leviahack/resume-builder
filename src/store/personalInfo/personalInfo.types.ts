// -----------------------------------------------
// Generic Types for PersonalInfoState
// -----------------------------------------------

export interface Address {
  country?: string;
  city?: string;
}

export interface Contact {
  phone?: string;
  email?: string;
}

export interface PersonalInfoState {
  fullName: string;
  jobTitle: string;
  description: string;
  profilePicture: string; // base64
  address?: Address;
  contact?: Contact;
}
