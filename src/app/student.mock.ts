export type Genre = 'fille' | 'garçon';

export interface IStudent {
  id: number;
  prenom: string;
  type: Genre;
}

export const STUDENTS: IStudent[] = [
  {
    id: 1,
    prenom: 'Fahed',
    type: 'garçon',
  },
  {
    id: 2,
    prenom: 'Erdal',
    type: 'garçon',
  },
  {
    id: 3,
    prenom: 'Clara',
    type: 'fille',
  },
  {
    id: 4,
    prenom: 'Diambéré',
    type: 'fille',
  },
  {
    id: 5,
    prenom: 'Morgan',
    type: 'fille',
  },
  {
    id: 6,
    prenom: 'Hazar',
    type: 'fille',
  },
  {
    id: 7,
    prenom: 'Anne',
    type: 'fille',
  },
  {
    id: 8,
    prenom: 'Jiyun',
    type: 'fille',
  },
  {
    id: 9,
    prenom: 'Lilianna',
    type: 'fille',
  },
  {
    id: 10,
    prenom: 'Kanzia',
    type: 'fille',
  },
  {
    id: 11,
    prenom: 'Thomas',
    type: 'garçon',
  },
  {
    id: 12,
    prenom: 'Christelle',
    type: 'fille',
  },
  {
    id: 13,
    prenom: 'Assa',
    type: 'fille',
  },
  {
    id: 14,
    prenom: 'Fama',
    type: 'fille',
  },
  {
    id: 15,
    prenom: 'Julie',
    type: 'fille',
  },
  {
    id: 16,
    prenom: 'Cynthia',
    type: 'fille',
  },
  {
    id: 17,
    prenom: 'Jérôme',
    type: 'garçon',
  },
  {
    id: 18,
    prenom: 'Katia',
    type: 'fille',
  },
];
