import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { DiceInterface } from "../interfaces/dice.interface";
import { faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons";

export class Dice implements DiceInterface {
    private _valueFace!: number;

    private _icon!: IconDefinition;


    private _isSelected: boolean = false;
    constructor(value: number) {
        this.valueFace = value;

    }
    public get valueFace(): number {
        return this._valueFace;
    }
    public set valueFace(value: number) {
        this._valueFace = value;
    }

    public get icon(): IconDefinition {
        return this.getIcon();
    }
    public set icon(value: IconDefinition) {
        this._icon = value;
    }
    public getIcon(): IconDefinition {
        if (this._valueFace == 1) {
            this._icon = faDiceOne;
        } else if (this._valueFace == 2) {
            this._icon = faDiceTwo;
        } else if (this._valueFace == 3) {
            this._icon = faDiceThree;
        } else if (this._valueFace == 4) {
            this._icon = faDiceFour;
        } else if (this._valueFace == 5) {
            this._icon = faDiceFive;
        } else if (this._valueFace == 6) {
            this._icon = faDiceSix;
        }
        return this._icon;
    }


    public get isSelected(): boolean {
        return this._isSelected;
    }
    public set isSelected(value: boolean) {
        this._isSelected = value;
    }

    setIcon(value: number) {

    }
    // faDiceOne = faDiceOne;
    // faDiceTwo = faDiceTwo;
    // faDiceThree = faDiceThree;
    // faDiceFour = faDiceFour;
    // faDiceFive = faDiceFive;
    // faDiceSix = faDiceSix;

    public toString(): string {
        let value = this._valueFace
        let selected = this._isSelected;
        let icon = this._icon;
        return "De = -value: " + value + ", selected: " + selected + ", icon: " + this._icon;
    }
}