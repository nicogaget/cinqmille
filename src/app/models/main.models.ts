export class Main {
    private nbreDes: number = 0;
    private isMainMorte: boolean = false;
    private isMainPleine: boolean = false;
    private isScoreMulti100: boolean = false;

    public Main() {
        this.isMainMorte = false;
        this.isMainPleine = true;

    }
    /**
     * Getter $isMainMorte
     * @return {boolean }
     */
    public get $isMainMorte(): boolean {
        return this.isMainMorte;
    }

    /**
     * Getter $isMainPleine
     * @return {boolean }
     */
    public get $isMainPleine(): boolean {
        return this.isMainPleine;
    }

    /**
     * Getter $isScoreMulti100
     * @return {boolean }
     */
    public get $isScoreMulti100(): boolean {
        return this.isScoreMulti100;
    }

    /**
     * Setter $isMainMorte
     * @param {boolean } value
     */
    public set $isMainMorte(value: boolean) {
        this.isMainMorte = value;
    }

    /**
     * Setter $isMainPleine
     * @param {boolean } value
     */
    public set $isMainPleine(value: boolean) {
        this.isMainPleine = value;
    }

    /**
     * Setter $isScoreMulti100
     * @param {boolean } value
     */
    public set $isScoreMulti100(value: boolean) {
        this.isScoreMulti100 = value;
    }


    /**
     * Getter $nbreDes
     * @return {number }
     */
    public get $nbreDes(): number {
        return this.nbreDes;
    }

    /**
     * Setter $nbreDes
     * @param {number } value
     */
    public set $nbreDes(value: number) {
        this.nbreDes = value;
    }




}