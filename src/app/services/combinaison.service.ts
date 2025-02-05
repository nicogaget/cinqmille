import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CombinaisonService {
  combi = new Map([["61", "4000"],
  ["62", "800"],
  ["63", "1200"],
  ["64", "1600"],
  ["65", "2000"],
  ["66", "2400"],
  ["51", "3000"],
  ["52", "800"],
  ["53", "1200"],
  ["54", "1600"],
  ["55", "2000"],
  ["56", "2400"],
  ["41", "2000"],
  ["42", "400"],
  ["43", "600"],
  ["44", "800"],
  ["45", "1000"],
  ["46", "1200"],
  ["31", "1000"],
  ["32", "800"],
  ["33", "300"],
  ["34", "400"],
  ["35", "500"],
  ["36", "600"],
  ["21", "200"],
  ["22", "0"],
  ["23", "0"],
  ["24", "0"],
  ["25", "100"],
  ["26", "0"],
  ["11", "100"],
  ["15", "50"],
  ["123456", "100"],
  ["12345", "500"],
  ["23456", "500"],]);

  combinations = [
    { combinaison: "61", value: "4000" },
    { combinaison: "62", value: "800" },
    { combinaison: "63", value: "1200" },
    { combinaison: "64", value: "1600" },
    { combinaison: "65", value: "2000" },
    { combinaison: "66", value: "2400" },
    { combinaison: "51", value: "3000" },
    { combinaison: "52", value: "800" },
    { combinaison: "53", value: "1200" },
    { combinaison: "54", value: "1600" },
    { combinaison: "55", value: "2000" },
    { combinaison: "56", value: "2400" },
    { combinaison: "41", value: "2000" },
    { combinaison: "42", value: "400" },
    { combinaison: "43", value: "600" },
    { combinaison: "44", value: "800" },
    { combinaison: "45", value: "1000" },
    { combinaison: "46", value: "1200" },
    { combinaison: "31", value: "1000" },
    { combinaison: "32", value: "800" },
    { combinaison: "33", value: "300" },
    { combinaison: "34", value: "400" },
    { combinaison: "35", value: "500" },
    { combinaison: "36", value: "600" },
    { combinaison: "21", value: "200" },
    { combinaison: "22", value: "0" },
    { combinaison: "23", value: "0" },
    { combinaison: "24", value: "0" },
    { combinaison: "25", value: "100" },
    { combinaison: "26", value: "0" },
    { combinaison: "11", value: "100" },
    { combinaison: "15", value: "50" },

    { combinaison: "12345", value: "50" },
    { combinaison: "23456", value: "100" },
  ]

  constructor() {
  }

  getCombiValue(result: string) {
    let nbr = null;
    this.combinations.map(combi => {
      if (combi.combinaison == result) {
        nbr = combi.value
      }
    })
  }

  containsCombi(result: string) {
    if (this.combinations.filter(combi => {
      combi.combinaison == result;
      console.log(`combi : ${combi.combinaison}, value: ${combi.value}`)
    })) {
      console.log("combi!!")

    }
  }

  combiString(result: [{ diceValue: number, nbrOfDice: number }]) {
    let newTab: string[] = [];
    result.map(r => {
      newTab[r.diceValue] = r.diceValue.toString() + r.nbrOfDice.toString()
    })
    return newTab;
  }

  test() {

  }

}
