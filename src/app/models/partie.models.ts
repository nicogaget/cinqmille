import { Joueur } from "./joueur.models";
import { Regle } from "./regle.model";

export class Partie {
    private joueurs: Joueur[] = [];
    private regle!: Regle;

    constructor(private target: number, private nbreDe: number) {
        this.target = target;
        this.nbreDe = nbreDe;

    }


    /**
     * Getter $joueurs
     * @return {Joueur[] }
     */
    public get $joueurs(): Joueur[] {
        return this.joueurs;
    }

    /**
     * Setter $joueurs
     * @param {Joueur[] } value
     */
    public set $joueurs(value: Joueur[]) {
        this.joueurs = value;
    }


}