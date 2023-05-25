export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurItems = "ouritems",
  ContactUs = "contactus",
  registration = "registration",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
