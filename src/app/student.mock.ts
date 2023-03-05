export type Genre= 'fille'|'garçon';

export interface IStudent {
    id: number;
    prenom: string;
    type: Genre; 
    isPresent: boolean;
    hasBeenCalled:boolean;
}

export const STUDENTS: IStudent []=[

    {
    id:1,
    prenom: "Fahed",
    type: 'garçon',
    isPresent: true,
    hasBeenCalled: false
    
    },
    {
        id:2,
        prenom: "Erdal",
        type: 'garçon',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:3,
        prenom: "Clara",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:4,
        prenom: "Diambéré",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:5,
        prenom: "Morgan",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:6,
        prenom: "Hazar",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:7,
        prenom: "Anne",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:8,
        prenom: "Jiyun",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:9,
        prenom: "Lilianna",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:10,
        prenom: "Kanzia",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:11,
        prenom: "Thomas",
        type: 'garçon',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:12,
        prenom: "Christelle",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:13,
        prenom: "Assa",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    
    },
    {
        id:14,
        prenom: "Fama",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:15,
        prenom: "Julie",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:16,
        prenom: "Cynthia",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:17,
        prenom: "Jérôme",
        type: 'garçon',
        isPresent: true,
        hasBeenCalled: false
    },
    {
        id:18,
        prenom: "Katia",
        type: 'fille',
        isPresent: true,
        hasBeenCalled: false
    }
]