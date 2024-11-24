import { Injectable } from '@angular/core';
import { CombinaisonService } from './combinaison.service';

@Injectable({
  providedIn: 'root'
})
export class ControleCombinaisonService {

  constructor() { }
  public getCombi(resultatLancerDes: Map<number, number>) {
    let combis = new Map<number, number>();
    //Pour chaque entrée du resultat
    console.log("******** Recherche  COMBINAISON  ******** :");
    resultatLancerDes.forEach((value, key) => {
      //cette entrée est elle une combinaosn gagnante?
      let isCombi = CombinaisonService.containsCombi(String(value + key))
      //si c'est une combinaison
      //on l'affiche
      console.log(String(value + " * " + key + " est une combi gagnate, elle rapporte: " + CombinaisonService.getGain(String(value + key))));

      //retrait de la main des dé Comptabilisés
      combis.set(key, value)
    })
    console.log("main controlée, liste des combinaisons trouvées : " + combis);

    return combis;

  }
  public getNbreDeRestant(combinaisons: Map<number, number>, nbreDe: number): number {
    let deUtil: number = 0;
    //!\\ Potentiellement a corriger
    return combinaisons.size - deUtil;

  }


  public getCombiValue(combiMap: Map<number, number>): number {

    let gain = 0;
    combiMap.forEach((value, key) => {
      gain = gain + value
    })
    return gain;
  }

}



