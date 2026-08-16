type NoobDeveloper = {
    name : string;
};

// type JuniorDeveloper = {
//     name : string;
//     expertise : string;
//     experience : number;
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise : string;
    experience : number;
};

enum Level {
    Junior = "junior",
    Mid = "mid",
    Senior = "senior"
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number;
    level : Level;
};

const newDeveloper : NoobDeveloper | JuniorDeveloper | NextLevelDeveloper = {
    name : "John Doe",
    expertise : "React",
    experience : 2,
    leadershipExperience : 1
};

const developer : NextLevelDeveloper = {
    name : "Jane Smith",
    expertise : "Angular",
    experience : 3,
    leadershipExperience : 2,
    level : Level.Junior
};



