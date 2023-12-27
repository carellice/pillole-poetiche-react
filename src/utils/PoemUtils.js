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
    {
        title: "",
        poem: "Aveva il sorriso contagioso di chi aveva sofferto tanto. Era dannatamente bella, vestita dei suoi sbagli.",
        author: AuthorUtils.CHARLES_BUKOWSKI
    },
    {
        title: "",
        poem: "Invano il sognatore rovista nei suoi vecchi sogni, coma fra la cenere, cercandovi una piccola scintilla per soffiarci sopra e riscaldare col fuoco rinnovato il proprio cuore freddo, e far risorgere ciò che prima commuoveva la sua anima.",
        author: AuthorUtils.DOSTOEVSKIJ
    },
    {
        title: "",
        poem: "E coloro che furono visti danzare vennero giudicati pazzi da quelli che non potevano sentire la musica.",
        author: AuthorUtils.NIETZSCHE
    },
    {
        title: "",
        poem: "I sogni si fanno di notte e si completano di giorno.",
        author: AuthorUtils.SVEVO
    },
    {
        title: "",
        poem: "non c'è intimità più grande di poter essere sé stessi senza dover dimostrare di essere sempre all'altezza.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "Storie di ordinaria follia",
        poem: "L'anima libera è rara, ma la riconosci quando la vedi - essenzialmente perchè ti senti bene, molto bene, quando sei vicino a lei o insieme a lei.",
        author: AuthorUtils.CHARLES_BUKOWSKI
    },
    {
        title: "senza averti qui",
        poem: "Dovresti essere orgogliosa di te stessa per il modo in cui hai affrontato quest'ultimo periodo: dalle battaglie silenziose che hai combattuto, fino ai momenti in cui sei caduta ma hai comunque deciso di rialzarti per l'ennesima volta e guardare avanti. Sei una guerriera. Perciò fatti un favore e celebra la tua forza.",
        author: AuthorUtils.SOFIA_J_ROSS
    },
    {
        title: "",
        poem: "Così tra questa immensità s'annega il pensier mio: e il naufragar m'è dolce in questo mare.",
        author: AuthorUtils.LEOPARDI
    },
    {
        title: "",
        poem: "Le menti superiori discutono le idee; le menti normali discutono gli eventi; le menti mediocri discutono le persone",
        author: AuthorUtils.SOCRATE
    },
    {
        title: "",
        poem: "L'uomo che fa una domanda è uno sciocco per un minuto, l'uomo che non ne fa è uno sciocco per tutta la vita.",
        author: AuthorUtils.CONFUCIO
    },
    {
        title: "",
        poem: "L'uomo non conosce altra felicità se non quella che egli si va immaginando, e poi, finita l'illusione, ricade nel dolore di sempre.",
        author: AuthorUtils.SOFOCLE
    },
    {
        title: "",
        poem: "un giorno mi sento come se stessi guarendo, il giorno dopo mi sto rompendo di nuovo. è come un ciclo che non ha fine.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Accetta le cose che non puoi cambiare, e cambia le cose che non puoi accettare.",
        author: AuthorUtils.MARCO_AURELIO
    },
    {
        title: "",
        poem: "L'amore di un solitario è il più autentico che ci possa essere. Ti ama per scelta, non per compagnia.",
        author: AuthorUtils.CHARLES_BUKOWSKI
    },
    {
        title: "",
        poem: "Non sono sicuro di essere depresso. Voglio dire, non sono triste, ma non sono nemmeno esattamente felice. Posso ridere, scherzare e sorridere durante il giorno, ma quando sono solo di notte mi sento un po' insensibile.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Mi sento un po' come il mare: abbastanza calma per intrapredenre nuovi rapporti umani, ma periodicamente in temepesta per allontanare tutti, per starmene sola.",
        author: AuthorUtils.ALDA_MERINI
    },
    {
        title: "",
        poem: "E' curioso a vedere che gli uomini di molto merito hanno sempre le maniere semplici, e che sempre le maniere semplici sono prese per indizio di poco merito.",
        author: AuthorUtils.LEOPARDI
    },
    {
        title: "",
        poem: "Ma tu chi sei che avanzando nel buio della notte inciampi nei miei più segreti pensieri?",
        author: AuthorUtils.SHAKESPEARE
    },
    {
        title: "",
        poem: "I ricordi, come le candele, bruciano di più nel periodo natalizio.",
        author: AuthorUtils.DICKENS
    },
    {
        title: "",
        poem: "A Natale non si fanno cattivi pensieri ma chi è solo lo vorrebbe saltare questo giorno. A tutti loro auguro di vivere un Natale in compagnia.",
        author: AuthorUtils.ALDA_MERINI
    },
    {
        title: "",
        poem: "ricordo ancora quanto era grande il mio sorriso la sera in cui tornai a casa dopo il nostro primo bacio.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Io penso che ci sia un eroe in tutti noi, che ci mantiene onesti, ci da forza, ci rende nobili... E alla fine ci permette di morire con dignità anche se a volte dobbiamo mostrare carattere e rinunciare alle cose che desideriamo di più, anche i nostri sogni...",
        author: AuthorUtils.MAY_PARKER
    },
    {
        title: "",
        poem: "Non avevo da aggiungere altro verso, altra parola. Nel tuo corpo vivevo tutta la poesia.",
        author: AuthorUtils.RITSOS
    },
    {
        title: "",
        poem: "Ma io sono predestinato ad avere l'anima perpetuamente in tempesta.",
        author: AuthorUtils.FOSCOLO
    },
    {
        title: "Succede sempre qualcosa di meraviglioso",
        poem: "Purtroppo ormai c'è questa mentalità così fastidiosamente diffusa per cui \"semplice\" significhi di scarso valore, mentre \"complesso\" voglia dire prezioso. Non c'è niente di più falso. Le cose migliori della vita non sono complicate, anzi. Sono semplici.",
        author: AuthorUtils.GIANLUCA_GOTTO
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

export const getNumberOfPoemsByAuthor = (author) => {
    const authorPoems = poems.filter(poem => poem.author === author);
    return authorPoems.length;
}

export const copyToClipboard = (text) => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
};