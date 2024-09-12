export type UserPersona = {
  address: string;
  demographicData: DemographicData[];
  frustrations: string[];
  fullname: string;
  img: string;
  imgDescription: string;
  motivations: string[];
  position: string;
  setting: string[];
  skills: Skill[];
};

type Skill = {
  level: number;
  name: string;
};

type DemographicData = {
  value: string;
  name: string;
};

export type UserPersonaProps = UserPersona;
