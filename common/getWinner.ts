import {HandType} from "../bll/appReducer";

type GetWinnerType = {
    userHand: HandType
    phoneHand: HandType
}

export const getWinner = ({userHand,phoneHand}:GetWinnerType) => {
    switch (userHand+'-'+phoneHand){
        case ('rock-rock'):
            return 'nobody'
        case ('rock-paper'):
            return 'PHONE'
        case ('rock-scissors'):
            return 'YOU'
        case ('rock-lizard'):
            return 'YOU'
        case ('rock-spock'):
            return 'PHONE'
        case ('rock-chuck'):
            return 'PHONE'

        case ('paper-rock'):
            return 'YOU'
        case ('paper-paper'):
            return 'nobody'
        case ('paper-scissors'):
            return 'PHONE'
        case ('paper-lizard'):
            return 'PHONE'
        case ('paper-spock'):
            return 'YOU'
        case ('paper-chuck'):
            return 'PHONE'

        case ('scissors-rock'):
            return 'PHONE'
        case ('scissors-paper'):
            return 'YOU'
        case ('scissors-scissors'):
            return 'nobody'
        case ('scissors-lizard'):
            return 'YOU'
        case ('scissors-spock'):
            return 'PHONE'
        case ('scissors-chuck'):
            return 'PHONE'

        case ('lizard-rock'):
            return 'PHONE'
        case ('lizard-paper'):
            return 'YOU'
        case ('lizard-scissors'):
            return 'PHONE'
        case ('lizard-lizard'):
            return 'nobody'
        case ('lizard-spock'):
            return 'YOU'
        case ('lizard-chuck'):
            return 'PHONE'

        case ('spock-rock'):
            return 'YOU'
        case ('spock-paper'):
            return 'PHONE'
        case ('spock-scissors'):
            return 'YOU'
        case ('spock-lizard'):
            return 'PHONE'
        case ('spock-spock'):
            return 'nobody'
        case ('spock-chuck'):
            return 'PHONE'

        case ('chuck-rock'):
            return 'YOU'
        case ('chuck-paper'):
            return 'YOU'
        case ('chuck-scissors'):
            return 'YOU'
        case ('chuck-lizard'):
            return 'YOU'
        case ('chuck-spock'):
            return 'YOU'
        case ('chuck-chuck'):
            return 'CHUCK NORRIS'

        default:
            return  'subzero'
    }

}