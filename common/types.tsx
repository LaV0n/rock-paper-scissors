export type RootTabParamList = {
   Game: undefined
   Setting: undefined
}
export type HandPropsType = {
   hand: HandType
}
export type HandType = 'rock' | 'scissors' | 'paper' | 'lizard' | 'spock' | 'chuck'
export type GameModeType = 'normal' | 'geek' | 'cheat'

export type HandDataType = {
   name: HandType
   img: string
}
export type InitialStateType = {
   userName: string
   gameMode: GameModeType
   hands: HandDataType[]
   userHand: HandDataType | null
   phoneHand: HandDataType | null
   winner: string
   userCount: number
   phoneCount: number
}
