export class Regle {
    private target: number = 5000;
    private nbreDe: number = 6;
    constructor(target: number, nbreDe: number) {
        this.target = target;
        this.nbreDe = nbreDe;
    }


    /**
     * Getter $target
     * @return {number }
     */
    public get $target(): number {
        return this.target;
    }

    /**
     * Getter $nbreDe
     * @return {number }
     */
    public get $nbreDe(): number {
        return this.nbreDe;
    }

    /**
     * Setter $target
     * @param {number } value
     */
    public set $target(value: number) {
        this.target = value;
    }

    /**
     * Setter $nbreDe
     * @param {number } value
     */
    public set $nbreDe(value: number) {
        this.nbreDe = value;
    }



}