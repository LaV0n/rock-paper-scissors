import {GameModeType, HandType} from "../bll/appReducer";

type RandomHandType={
    gameMode:GameModeType
}
export function randomHand({gameMode}:RandomHandType):HandType {

    let num = 0

    if (gameMode === 'normal') {
        num = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }
    if (gameMode === 'geek') {
        num = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    }
    if (gameMode === 'cheat') {
        num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    }
    switch (num){
        case 1:
            return 'rock'
        case 2:
            return 'scissors'
        case 3:
            return 'paper'
        case 4:
            return 'lizard'
        case 5:
            return 'spock'
        case 6:
            return 'chack'
        default:
            return 'rock'
    }
}