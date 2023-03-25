export type Genre = 'fille' | 'garçon';

export interface IStudent {
  id: number;
  prenom: string;
  type: Genre;
  present: boolean;
}

export const STUDENTS: IStudent[] = [
  {
    id: 1,
    prenom: 'Fahed',
    type: 'garçon',
    present: true,
  },
  {
    id: 2,
    prenom: 'Erdal',
    type: 'garçon',
    present: true,
  },
  {
    id: 3,
    prenom: 'Clara',
    type: 'fille',
    present: true,
  },
  {
    id: 4,
    prenom: 'Diambéré',
    type: 'fille',
    present: true,
  },
  {
    id: 5,
    prenom: 'Morgan',
    type: 'fille',
    present: true,
  },
  {
    id: 6,
    prenom: 'Hazar',
    type: 'fille',
    present: true,
  },
  {
    id: 7,
    prenom: 'Anne',
    type: 'fille',
    present: true,
  },
  {
    id: 8,
    prenom: 'Jiyun',
    type: 'fille',
    present: true,
  },
  {
    id: 9,
    prenom: 'Lilianna',
    type: 'fille',
    present: true,
  },
  {
    id: 10,
    prenom: 'Kanzia',
    type: 'fille',
    present: true,
  },
  {
    id: 11,
    prenom: 'Thomas',
    type: 'garçon',
    present: true,
  },
  {
    id: 12,
    prenom: 'Christelle',
    type: 'fille',
    present: true,
  },
  {
    id: 13,
    prenom: 'Assa',
    type: 'fille',
    present: true,
  },
  {
    id: 14,
    prenom: 'Fama',
    type: 'fille',
    present: true,
  },
  {
    id: 15,
    prenom: 'Julie',
    type: 'fille',
    present: true,
  },
  {
    id: 16,
    prenom: 'Cynthia',
    type: 'fille',
    present: true,
  },
  {
    id: 17,
    prenom: 'Jérôme',
    type: 'garçon',
    present: true,
  },
  {
    id: 18,
    prenom: 'Katia',
    type: 'fille',
    present: true,
  },
];
