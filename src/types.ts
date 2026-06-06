export interface ScholarshipProgram {
  id: string;
  fundingType: "Fully Funded" | "Partially Funded";
  destinations: string[];
  whatsCovered: string[];
  selfFundedNote?: string;
  isPopular?: boolean;
}

export interface CredentialItem {
  id: string;
  degree: string;
  institution: string;
  icon: string;
}

export interface SuccessBadgeItem {
  id: string;
  country: string;
  duration: string;
  institutions?: string[];
  studentOrigins?: string[];
  desc: string;
}

export interface AcademicServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  detailsList: string[];
}
