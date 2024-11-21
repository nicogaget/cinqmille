import { PlayerInterface } from "../interfaces/player.interface";

export class Player implements PlayerInterface {
    nickname!: String;
    score?: number | undefined;
    playing?: boolean | undefined;

    constructor(nom: string) {
        this.nickname = nom
    }
}