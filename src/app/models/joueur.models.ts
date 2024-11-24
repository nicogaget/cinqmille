import { booleanAttribute } from "@angular/core";
import { De } from "./de.models";
import { Main } from "./main.models";

export class Joueur {
    private name: string;
    private score: number = 0;
    private gagnant: boolean = false;
    private main: Main = new Main;

    constructor(name: string) {
        this.name = name;
    }


    /**
     * Getter $gagnant
     * @return {boolean }
     */
    public get $gagnant(): boolean {
        return this.gagnant;
    }

    /**
     * Setter $gagnant
     * @param {boolean } value
     */
    public set $gagnant(value: boolean) {
        this.gagnant = value;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Getter $score
     * @return {number }
     */
    public get $score(): number {
        return this.score;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Setter $score
     * @param {number } value
     */
    public set $score(value: number) {
        this.score = value;
    }

    /**
     * Getter $main
     * @return {Main }
     */
    public get $main(): Main {
        return this.main;
    }

    /**
     * Setter $main
     * @param {Main } value
     */
    public set $main(value: Main) {
        this.main = value;
    }


}