import * as AuthorUtils from "./AuthorUtils";
import { shuffle } from 'lodash';

export const poems = [
    {
        title: "tutte le parole che vorrei dirti",
        poem: "Resterai per sempre la persona che mi ha insegnato cos'è l'amore",
        author: AuthorUtils.OLIVIA_S
    },
    {
        title: "tutte le parole che vorrei dirti",
        poem: "Ti sceglierei ancora, in 100 altre vite, in 100 altri universi, in qualunque tipo di situazione Io sceglierei sempre e solo te",
        author: AuthorUtils.OLIVIA_S
    },
    {
        title: "",
        poem: "Continua ad illuminare la mia strada, perchè senza la tua luce amore, sono perso.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "ragazza caleidoscopio",
        poem: "siamo stati un caos meraviglioso due anime imperfette intrecciate alla perfezione",
        author: AuthorUtils.HANNA_J_ROSE
    },
    {
        title: "TEMPO",
        poem: "Granelli di cenere sputati dalle fiamme del tempo. Questo siamo, Ogni nostra impresa, ogni nostro fallimento, svanisce tra i tic tac degli orologi",
        author: AuthorUtils.MICHELE_VITALE
    },
    {
        title: "CHE RAZZA DI GIOCO è...".toUpperCase(),
        poem: "Vorrei comprendere il gioco del vivere. Quali son le regole? E perchè mai a vincere è sempre chi bara? Sono stanco di perdere, insegnatemi a giocare!",
        author: AuthorUtils.MICHELE_VITALE
    },
    {
        title: "ABISSO".toUpperCase(),
        poem: "Pervade solo me il vuoto? Mi sembran ormai tutti uguali, con nessuno a voler segnare la storia. Lentamente sprofondiamo in quel abisso di mediocrità che si è soliti chiamare noia; la dipartita dell'uomo. Goda chi si sente diverso in un mondo di specchi.",
        author: AuthorUtils.MICHELE_VITALE
    },
    {
        title: "primavera".toUpperCase(),
        poem: "Cara mia, anche al tempo serve tempo e quindi tu fiorisci e sfiorisci secondo le tue stagioni. Chi ti ama ha la premura di aspettare i tuoi colori.",
        author: AuthorUtils.FRANCESCO_PISCITELLI
    },
    {
        title: "",
        poem: "Avrei potuto anche accontentarmi, ma è così che si diventa infelici.",
        author: AuthorUtils.CHARLES_BUKOWSKI
    },
    {
        title: "",
        poem: "I libri pesano tanto: eppure, chi se ne ciba, e se li mette in corpo, vive tra le nuvole.",
        author: AuthorUtils.LUIGI_PIRANDELLO
    },
    {
        title: "",
        poem: "La paura di innamorarsi non è forse già un po' d'amore?",
        author: AuthorUtils.CESARE_PAVESE
    },
    {
        title: "",
        poem: "Tutto ciò che ami probabilmente andrà perduto, ma alla fine l'amore tornerà in un altro modo.",
        author: AuthorUtils.FRANZ_KAFKA
    },
    {
        title: "",
        poem: "Ho sceso, dandoti il braccio, almeno un milione di scale e ora che non ci sei è il vuoto ad ogni gradino.",
        author: AuthorUtils.EUGENIO_MONTALE
    },
    {
        title: "",
        poem: "Il fatto è che certe cose le puoi dire solo a chi sai che le può capire. Che è anche il motivo per cui parliamo così poco, di quello che ci importa davvero.",
        author: AuthorUtils.ENRICO_GALIANIO
    },
    {
        title: "MANUALE DELL'AMORE",
        poem: "Il primo amore non è la prima persona con cui ti fidanzi, ma la prima che ti ha dimostrato e fatto provare il vero amore.",
        author: AuthorUtils.ANIMA_DI_VENERE
    },
    {
        title: "MANUALE DELL'AMORE",
        poem: "L'unica persona con la quale ridendo un sacco il cuore ritorna finalmente a respirare.",
        author: AuthorUtils.ANIMA_DI_VENERE
    },
    {
        title: "",
        poem: "Sentirsi senza mai toccarsi. Ecco come le anime fanno l'amore quando i corpi sono altrove.",
        author: AuthorUtils.CHARLES_BUKOWSKI
    },
    {
        title: "",
        poem: "Io avevo voglia di stare da solo, perchè soltanto solo, sperduto, muto, a piedi, riesco a riconoscere le cose.",
        author: AuthorUtils.PASOLINI
    },
    {
        title: "",
        poem: "Si guarisce da una sofferenza solo a condizione di sperimetarla pienamente.",
        author: AuthorUtils.MARCEL_PROUST
    },
    {
        title: "",
        poem: "Ero sul punto di troncare la conversazione, poichè nulla mi manda in bestia come il fatto che qualcuno se ne esca con luoghi comuni insignificanti mentre io sto parlando con tutto il cuore.",
        author: AuthorUtils.J_W_GOETHE
    },
    {
        title: "",
        poem: "Beati coloro che si baceranno sempre al di là delle labbra, varcando il confine del piacere, per cibarsi dei sogni..",
        author: AuthorUtils.ALDA_MERINI
    },
    {
        title: "",
        poem: "Di qualsiasi cosa siano fatte le nostre anime, la sua e la mia sono uguali.",
        author: AuthorUtils.EMILY_BRONTE
    },
    {
        title: "",
        poem: "La tristezza è causata dall'intelligenza. Più comprendi certe cose e più vorresti non comprenderle.",
        author: AuthorUtils.CHARLES_BUKOWSKI
    },
    {
        title: "",
        poem: "Non sopporto il pensiero che la mia vita stia scorrendo via così in fretta e che io in realtà non la viva.",
        author: AuthorUtils.ERNEST_HEMINGWAY
    },
    {
        title: "",
        poem: "Chi è sensibile, attribuisce un'importanza enorme ai dettagli più insignificanti del comportamento altri, quelli che generalmente sfuggono alle persone normali.",
        author: AuthorUtils.SIGMUND_FREUD
    },
]

export const getRandomizedPoems = () => {
    return shuffle(poems.slice());
}

export const getRandomPoem = () => {
    const randomIndex = Math.floor(Math.random() * poems.length);
    return poems[randomIndex];
}

export const getUniqueAuthors = () => {
    const uniqueAuthors = Array.from(new Set(poems.map(poem => poem.author)));
    return uniqueAuthors.sort();
}

export const getPoemsByAuthor = (author) => {
    return poems.filter(poem => poem.author === author);
}