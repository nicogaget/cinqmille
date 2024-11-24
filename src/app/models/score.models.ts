export class Score {
    private total: number = 0;
    private enCours: number = 0;

    public addPoint() {
        this.total = this.total + this.enCours;
    }


    /**
     * Getter $total
     * @return {number }
     */
    public get $total(): number {
        return this.total;
    }

    /**
     * Getter $enCours
     * @return {number }
     */
    public get $enCours(): number {
        return this.enCours;
    }

    /**
     * Setter $total
     * @param {number } value
     */
    public set $total(value: number) {
        this.total = value;
    }

    /**
     * Setter $enCours
     * @param {number } value
     */
    public set $enCours(value: number) {
        this.enCours = value;
    }

}