//https://magic.wizards.com/en/articles/archive/magic-academy/dynamics-turn-2006-11-04

function main(){
    
    var you:Player = {
        hand:[]
    }
    console.log(you)
    /**
    console.log("=== Phases and Steps ===")
    for (i in phases){
        console.log(i,phases[i].name)
        for (j in phases[i].steps){
            console.log('\t',j,phases[i].steps[j].name)
        }
    }
    */
}

interface Player{
    hand:string[]
}

let phases = [
    {
        "name": "Beginning Phase",
        "steps": [
            {"name": "Untap", "desc":""},
            {"name": "Upkeep", "desc":""},
            {"name": "Draw", "desc":""}
        ]
    },
    {
        "name": "First Main Phase",
        "steps": []
    },
    {
        "name": "Combat Phase",
        "steps": [
            {"name": "Beginning of Combat", "desc":""},
            {"name": "Declare Attackers", "desc":""},
            {"name": "Declare Blockers", "desc":""},
            {"name": "Combat Damage", "desc":""},
            {"name": "End of Combat", "desc":""}
        ]
    },
    {
        "name": "Second Main Phase",
        "steps": []
    },
    {
        "name": "End Phase",
        "steps": [
            {"name": "End of turn", "desc":""},
            {"name": "Cleanup", "desc":""}
        ]
    }
]

main()