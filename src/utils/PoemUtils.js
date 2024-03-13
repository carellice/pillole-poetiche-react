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
    {
        title: "",
        poem: "Fai il meglio che puoi, con quello che hai, nel posto in cui sei.",
        author: AuthorUtils.ROOSEVELT
    },
    {
        title: "Saro' con te.",
        poem: "Ti mandero' un bacio con il vento, affidandolo alle sue dolci carezze. Nel sussurro dell'aria, porterà il mio amore verso di te. Anche se non mi vedrai, saprai che sarò lì, sempre accanto a te.",
        author: AuthorUtils.SOFIA_J_ROSS
    },
    {
        title: "MANUALE DELL'AMORE",
        poem: "Un giorno incontri una persona, che può essere quando meno te lo aspetti, quando non cercavi niente, essa semplicemente appare e ti stravolge la vita.",
        author: AuthorUtils.ANIMA_DI_VENERE
    },
    {
        title: "Nonostante tutto...",
        poem: "Quando ti sentirai triste, nervosa, esausta, quando ci saranno giorni no... tu chiamami, non importa in che rapporti siamo, se ci odiamo, se ci amiamo, se ci vogliamo male. Sarò sempre pronto ad aiutarti, nonostante tutto...",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Nessuno li ha mai visti con una cordicella che tenesse legati i loro polsi, certe cose non si vedono, ma esistono.",
        author: AuthorUtils.SARAMANGO
    },
    {
        title: "",
        poem: "Era necessario un addio, perché capissi, che non c'è un addio per noi.",
        author: AuthorUtils.DIMITROVA
    },
    {
        title: "l'arcobaleno nei tuoi occhi",
        poem: "a volte mi domando se valga la pena lottare per un amore che la società condanna ma non riesco a immaginare la mia vita senza di te.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Mi chiedi parole. Ma il tempo precipita come un masso sulla mia anima che vuole certezze, e più non ha sillabe da offrire se non quelle silenziose del sangue legate al tuo nome, o mia vita, mio amore senza fine.",
        author: AuthorUtils.QUASIMODO
    },
    {
        title: "",
        poem: "Le cose si ottengono quando non si desiderano più.",
        author: AuthorUtils.CESARE_PAVESE
    },
    {
        title: "",
        poem: "Non rivangare quello che non può servire ad altro che a inquietarti inutilmente.",
        author: AuthorUtils.MANZONI
    },
    {
        title: "",
        poem: "Mai discutere con un idiota, ti porta al suo livello e ti batte con l'esperienza.",
        author: AuthorUtils.WILDE
    },
    {
        title: "",
        poem: "Stare con te o stare senza di te è l'unico modo che ho per misurare il tempo.",
        author: AuthorUtils.BORGES
    },
    {
        title: "L'Eco di quello che eri",
        poem: "Non voglio fare a meno di te, nemmeno per un istante. Ci incontrammo in una giornata normale, e tu l'hai trasformata in una vita importante.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Più mondo ho visto, meno mi sono costruito a suo gusto.",
        author: AuthorUtils.ROUSSEAU
    },
    {
        title: "",
        poem: "Hai disegnato ricordi nella mia mente. Non potrei mai cancellarli. Hai dipinto colori nel mio cuore. Non potrei mai sostituirlo.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Per essere felici bisognerebbe vivere. Ma vivere è la cosa più rara al mondo. La maggior parte della gente esiste, e nulla più.",
        author: AuthorUtils.WILDE
    },
    {
        title: "",
        poem: "E se potessi prendere tutto il dolore dal tuo cuore e metterlo nel mio, lo farei.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Non vedo te nella Luna e nelle stelle, questo è cio che vedono i sognatori; Io vedo il tuo riflesso nei miei occhi, E ogni piccola cosa che faccio... Sei la mia realtà.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Mi accusate di avere dei vizi, di essere dissoluto, immorale, mentre io forse sono colpevole solo di essere più sincero degli altri e basta; di non nascondere ciò che gli altri nascondono persino a sé stessi.",
        author: AuthorUtils.DOSTOEVSKIJ
    },
    {
        title: "",
        poem: "Chi combatte contro i mostri deve guardarsi dal non diventare egli stesso un mostro. Se guarderai a lungo in un abisso, anche l'abisso vorrà guardare dentro di te.",
        author: AuthorUtils.NIETZSCHE
    },
    {
        title: "",
        poem: "Non lasciatevi ingannare dalla nostalgia di \"quel che poteva essere\". Non poteva essere nient'altro, altrimenti lo sarebbe stato.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Per chi vuole vederli, ci sono fiori dappertutto.",
        author: AuthorUtils.MATISSE
    },
    {
        title: "",
        poem: "E' meglio tenere la bocca chiusa e lasciare che le persone pensino che sei uno sciocco piuttosto che aprirla e togliere ogni dubbio.",
        author: AuthorUtils.TWAIN
    },
    {
        title: "",
        poem: "L'impossibile è per chi non vuole.",
        author: AuthorUtils.KEATS
    },
    {
        title: "",
        poem: "Paradossalmente, la capacità di stare soli è la condizione prima per la capacità d'amare.",
        author: AuthorUtils.FROMM
    },
    {
        title: "",
        poem: "Visto che io non costringo nessuno, così non voglio essere costretto io stesso; io che rispetto la libertà altrui insisto sulla mia libertà.",
        author: AuthorUtils.VAN_GOGH
    },
    {
        title: "",
        poem: "Quando una porta si chiude, un'altra si apre. Ma spesso guardiamo così a lungo e con tanto rimpianto la porta chiusa che non vediamo quella che si è aperta per noi.",
        author: AuthorUtils.BELL
    },
    {
        title: "",
        poem: "Ti manderò un bacio con il vento e so che lo sentirai, ti volterai senza vedermi ma io sarò lì.",
        author: AuthorUtils.NERUDA
    },
    {
        title: "",
        poem: "Quanto più lo spirito diventa gioioso e sicuro, tanto più l'uomo disimpara a ridere forte; per contro gli zampilla continuamente in viso un sorriso intelligente.",
        author: AuthorUtils.NIETZSCHE
    },
    {
        title: "",
        poem: "Il forse è la parola più bella del vocabolario italiano, perchè apre delle possibilità, non certezze... Perchè none cerca la fine, ma va verso l'infinito.",
        author: AuthorUtils.LEOPARDI
    },
    {
        title: "",
        poem: "Più un uomo appare perfetto all'esterno, più demoni ha all'interno.",
        author: AuthorUtils.SIGMUND_FREUD
    },
    {
        title: "",
        poem: "",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Non ami qualcuno per il suo aspetto, i suoi vestiti o per la sua macchina da sogno, ma perchè canta una canzone che solo tu puoi sentire.",
        author: AuthorUtils.WILDE
    },
    {
        title: "",
        poem: "Se oggi non valgo nulla, non varrò nulla nemmeno domani. Ma se domani scoprono in me dei valori, vuole dire che li posseggo anche oggi. Poichè il grano è grano, anche se la gente dapprima lo prende per erba.",
        author: AuthorUtils.VAN_GOGH
    },
    {
        title: "",
        poem: "Un momento di pazienza in un momento di rabbia può salvare migliaia di momenti di rimpianti.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Prenderte la vita con leggerezza, che leggerezza non è superficialità, ma planare sulle cose dall'alto, non avere macigni sul cuore.",
        author: AuthorUtils.CALVINO
    },
    {
        title: "",
        poem: "Amami quando lo merito meno, perchè sarà quando ne avrò più bisogno.",
        author: AuthorUtils.CATULLO
    },
    {
        title: "",
        poem: "Non tutte le temepeste arrivano per distruggerti la vita. Alcune arrivano per pulire il tuo cammino.",
        author: AuthorUtils.SENECA
    },
    {
        title: "",
        poem: "Le nostre paure sono molto più numerose dei pericoli concreti che corriamo. Soffriamo molto di più per la nostra immaginazione che per la realtà.",
        author: AuthorUtils.SENECA
    },
    {
        title: "",
        poem: "Per essere felici bisogna eliminare due cose: il timore di un male futuro e il ricordo di un male passato.",
        author: AuthorUtils.SENECA
    },
    {
        title: "",
        poem: "E' gradevole stare con sè stessi il più a lungo possibile, se uno si è reso degno di essere di per sè soggetto di gioia.",
        author: AuthorUtils.SENECA
    },
    {
        title: "",
        poem: "Con tre metodi possiamo imparare la saggezza: pirmo, mediante la riflessione, che è la più nobile; secondo, per imitazione, che è più facile; e terzo per esperienza che è più amara.",
        author: AuthorUtils.CONFUCIO
    },
    {
        title: "",
        poem: "La struttura alare del calabrone, in relazione al suo peso, non è adatta al volo, ma lui non lo sa e vola lo stesso.",
        author: AuthorUtils.EINSTEIN
    },
    {
        title: "",
        poem: "Ho notato che anche le persone che affermano che tutto è già scritto e che non possiamo far nulla per cambiare il destino guardano a destra e a sinistra prima di attraversare la strada.",
        author: AuthorUtils.HAWKING
    },
    {
        title: "",
        poem: "Ogni volta che due persone si incontrano, ci sono sei persone presenti: come ogni persona vede se stessa, come una persona vede l'altra e ogni persona come realmente è.",
        author: AuthorUtils.JAMES
    },
    {
        title: "",
        poem: "C'è una crepa in ogni cosa ed è da lì che entra la luce.",
        author: AuthorUtils.COHEN
    },
    {
        title: "",
        poem: "Quando i 'vorrei' diventano 'voglio', quando i 'dovrei' diventano 'devo', quando i 'prima o poi' diventano 'adesso', allora e solo allora i desideri iniziano a trasformarsi in realtà.",
        author: AuthorUtils.ROBBINS
    },
    {
        title: "",
        poem: "La vita non è misurata dal numero di respiri che prendiamo, ma dai momenti che ci lasciano senza fiato.",
        author: AuthorUtils.ANGELOU
    },
    {
        title: "",
        poem: "E' una malattia. La gente ha smesso di pensare, di provare emozioni, di interessarsi alle cose; nessuno che si appassioni o creda in qualcosa che non sia la sua piccola, dannata, comoda mediocrità.",
        author: AuthorUtils.YATES
    },
    {
        title: "",
        poem: "La conoscenza parla, ma la saggezza ascolta. Il vero apprendimento va oltre l'accumulo di informazioni, coinvolgendo una comprensione profonda e riflessiva.",
        author: AuthorUtils.HENDRIX
    },
    {
        title: "",
        poem: "Sopporta e resisti, un giorno questo dolore ti sarà utile.",
        author: AuthorUtils.OVIDIO
    },
    {
        title: "",
        poem: "Se vuoi costruire una barca, non radunare uomini per tagliare legna, dividere i compiti e impartire ordini, ma insegna loro la nostalgia per il mare vasto e infinito.",
        author: AuthorUtils.EXUPERY
    },
    {
        title: "",
        poem: "Secondo la mitologia greca, gli umani originariamente furono creati con quattro braccia, quattro gambe e una testa con due facce. Temendo il loro potere, Zeus li divise in due parti separate, condannandoli a trascorrere le loro vite a cercare l'altra loro metà.",
        author: AuthorUtils.PLATONE
    },
    {
        title: "",
        poem: "Tu sei quello che fai, non quello che dici che farai.",
        author: AuthorUtils.JUNG
    },
    {
        title: "",
        poem: "E la fedeltà tra due persone che si amano... Ma che cos'è? Fedeltà vuol dire che qualsiasi cosa accada nella tua vita o nella mia. Io comunque ti sarò sempre vicino. Sarò sempre con te, io ci sarò.",
        author: AuthorUtils.BENIGNI
    },
    {
        title: "",
        poem: "Non vedrei ora così bello, se già non avessi veduto così nero.",
        author: AuthorUtils.PASCOLI
    },
    {
        title: "",
        poem: "Questo è ciò che significa fidarsi. Si tratta di dare a qualcun altro il potere su di te. Il potere di ferirti.",
        author: AuthorUtils.SANDERSON
    },
    {
        title: "",
        poem: "Coloro che sono capaci di vedere al di là delle ombre e delle menzogne della propria cultura non saranno mai compresi, figuriamoci creduti, dalle masse.",
        author: AuthorUtils.PLATONE
    },
    {
        title: "",
        poem: "Non ti amo con il cuore e con la mente. Ti amo con l'anima, nel caso in cui la mia mente dimentichi e il mio cuore si fermi.",
        author: AuthorUtils.ANONIMO
    },
    {
        title: "",
        poem: "Certo che ti farò del male. Certo che me ne farai. Certo che ce ne faremo. Ma questa è la condizione stessa dell'esistenza. Farsi primavera, significa accettare il rischio dell'inverno. Farsi presenza, significa accettare il rischio dell'assenza.",
        author: AuthorUtils.PICCOLO_PRINCIPE
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