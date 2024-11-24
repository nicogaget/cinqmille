import randomInt from "random-int";
import { Combinaison } from "./combinaison.model";

export class De extends Combinaison {
    private nbreFaces: number = 6;
    private valeurFace!: number;


    constructor(private id: number) {
        super();
        this.nbreFaces = this.nbreFaces;
        this.valeurFace = randomInt(1, 6);
    }



    /**
        *
        * @param id
        */
    public De(id: number) {

        this.nbreFaces = this.nbreFaces;
        this.valeurFace = randomInt(1, 6);
    }

    /**
     * Methode pour simuler le lancer d'un dé
     */
    public lancerDe() {

        this.valeurFace = randomInt(1, 6);;
    }

    public getValeurDe(): number {
        return this.valeurFace;
    };

    public override toString(): string {
        return " " + this.valeurFace;

    }


    /**
     * Getter $nbreFaces
     * @return {number }
     */
    public get $nbreFaces(): number {
        return this.nbreFaces;
    }

    /**
     * Getter $valeurFace
     * @return {number}
     */
    public get $valeurFace(): number {
        return this.valeurFace;
    }

    /**
     * Setter $nbreFaces
     * @param {number } value
     */
    public set $nbreFaces(value: number) {
        this.nbreFaces = value;
    }

    /**
     * Setter $valeurFace
     * @param {number} value
     */
    public set $valeurFace(value: number) {
        this.valeurFace = value;
    }
}