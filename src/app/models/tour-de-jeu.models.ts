import { Joueur } from "./joueur.models";

export class TourDeJeu {
    private joueur!: Joueur;
    private finDuTour: boolean = false;
    private score: number = 0;

    constructor(joueur: Joueur) {
        this.joueur = joueur
    }

    public addPoint(points: number) {
        this.$score = this.$score + points;

    }

    public afficheFinDeTourPerdu() {
        console.log("Pas de combinaison,****** FIN de TOUR *******, Au joueur suivant");
    }

    public multi100(score: number): boolean {

        return score % 100 == 0;
    };

    public recupLeDe(reponse: string) {
        let recup: boolean = false;
        //dans le cas ou le resultat du lancer a plus de 1 dé qui compte
        // et que l'un deux est un 5 alors
        /*on demande si le joueur veut reprendre un dé pour le rejouer*/
        if (recup) {
            // retire 50 du score potentiel
            console.log("retrait de 50 du scoreTab potentiel");
            this.$score = this.$score - 50;

            //ajout 1 dé au nbre de dé
            console.log("Reprise en main du dé joker");
            this.joueur.$main.$nbreDes = this.joueur.$main.$nbreDes + 1

        }
    }

    // public String recupReponse(){
    //     Scanner scanner = new Scanner(System.in);
    //     System.out.println("OBLIGATION DE REJOUER");
    //     System.out.println("On peut peut pas s'arrêter sur une cinquantaine");

    //     String res = "";
    //     System.out.println("Vous pouvez choisir de relancer un dé 5 ou bien de le garder.");
    //     System.out.println("");

    //     while (!res.equals("1") && !res.equals("2")) {

    //         System.out.println("Relancer " + (this.joueur.getMain().getNbreDes() + 1) + " dés au lieu de " + this.joueur.getMain().getNbreDes() + "?");
    //         System.out.println("Recupérer le dé ? 1-oui / 2-non");
    //         res = scanner.nextLine();
    //     }
    //     return res;
    // }

    /**
     * Getter $finDuTour
     * @return {boolean }
     */
    public get $finDuTour(): boolean {
        return this.finDuTour;
    }

    /**
     * Getter $score
     * @return {number }
     */
    public get $score(): number {
        return this.score;
    }

    /**
     * Setter $finDuTour
     * @param {boolean } value
     */
    public set $finDuTour(value: boolean) {
        this.finDuTour = value;
    }

    /**
     * Setter $score
     * @param {number } value
     */
    public set $score(value: number) {
        this.score = value;
    }

}