export type UserPersona = {
  address: string;
  demographicData: ListData[];
  frustrations: string[];
  fullname: string;
  img: string;
  imgDescription: string;
  motivations: string[];
  personInfo: ListData[];
  position: string;
  setting: string[];
  skills: Skill[];
  hobbies: HobbiesData;
};

type Skill = {
  level: number;
  name: string;
};

type ListData = {
  value: string;
  name: string;
};
type HobbiesData = {
  trademarks: string[][];
  apps: string[][];
};

export type UserPersonaProps = UserPersona;
