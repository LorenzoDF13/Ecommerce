# Introduzione

Quest progetto è stato realizzato con [Nextjs](https://nextjs.org/) che in brevissime parole è un full stack framework basato su [react]('https://reactjs.org/) che offre possibilita come ssr(server side rendering ) ssg(static site generation) isr(incremental static regenation) e numerose altre e allo stesso tempo consente la scrittura di api e middlewere lato server utilizzando javascript come linguaggio unico. [Redux Toolkit](https://redux-toolkit.js.org/) che è stato fondamentale per la gestione degli stati tra i vari componenti affiche renderizzassero in modo autonomo ad ogni variazione dei prodotti presenti nel carrello. Per la gestione dei pagamenti ho usato [Stripe]('https://stripe.com/com) che fornisce infratture per i pagamenti su tutte le piattorme e in numerosi linguaggi. Per lo stile dei componenti ho utilizzato [Tailwind Css](https://tailwindcss.com/) che offre la possibilità di utilizzare brevi classi pregenerate da applicare direttamente sui componenti ma offre grande versabilità con la possibilità di utilizzare valori personalizzati e creare classi di stili riutilizzabili.Infine Per la gestione delle animazioni, dei cookies ed altri dettagli grafici ho utilizzato dei pacchetti open Source che soddsfasserò le mie esigenze, tra i princiapli ci sono : **swiper**(per i container orizzontali ) **react-spring**( per le animazioni basate sulla fisica ) **react-icons** per le icone ecc. Tutte le dipendenze sono visualizzabili nel file deminato `package.json`

---

# Instruzioni per l'Avvio

Per vedere il codice in azione è necessario assicurarsi di avere installato node js sul propio dispostivo. Successivamente eseguire il comando

```bash
npm run dev
```

nel terminale all'interno della cartella del progetto ed apire [http://localhost:3000](http://localhost:3000) nel browser.

---

# Showcase

[![](https://drive.google.com/uc?export=download&id=1TLT_ojP-qiaZDQ-vNp9-UMOOc7TJ3z2G)](https://drive.google.com/file/d/1cbQ_o3IUreZhhf15HFRJf12rZLlciIjw/view?usp=sharing 'Premi per visualizzare')

# Descrizione

ATTENZIONE questa è solo un Introduzione al funzionamento e al design di questo progetto. Per vedere tutte le funzionalità e tutti gli effetti è necessario avviarlo con le instruzioni descritte [qui](#instruzioni-per-lavvio), le immagini presenti in questa documentazione prottebbero non contenere tutte le funzionalita promesse, per vedere lo showcase dell'ultima versione premere [qui](#showcase)

### Struttura Cartelle

Il Progetto è diviso in 2 cartelle principali: `/Components` che contiene tutti i componenti che verranno utilizzati nelle pagine contenute nella cartella `/Pages` e delle cartelle meno importanti come`/styles` `/public` ecc. i dati sensibili(api key ecc) sono state caricati volutamente per permettere la riproduzione completa.

### Visualizzazione

Tutte le pagine contengono un header **persistente**(Non viene ricaricato tra le apgine) con dei riferimenti a delle categorie note, un icona del carrello con il numeri di elementi presenti al suo interno e l'immagine di profilo o un botone per entrare tramite google preceduti da uno spinner per il caricamento. La prima pagina contiene tutti i prodotti divisi per categoria ricevuti da un api presa da [DummiJSON](https://dummyjson.com/), un servizio che forinisce dati finti da usare come riempimento per il testing. I prodotti sono contenuti in uno scroller orizzontale con il quale è possibile interagire con le apposite freccie. A causa della grande quantità di prodotti da gestire ho realizzato una fantastica animazione di caricamento(vedi foto in basso ) che però non verra visualizzata dato che i prodotti vengono salvati nel **localstorage** e questo azzera quasi i tempi di caricamento.
![](https://drive.google.com/uc?export=download&id=1eYlpjNB-Pcu7yWzPfc9fwGAi_pYufrTO)
ogni prodotto e' una carta cliccabile che porta ad una pagina specifica del prodotto stesso. Qui i caricamenti sono un po più lunghi dato che dobbiamo aspettare la risposta del server alla richiesta del prodotto scelto tramite id. Per la gestione dei routes dinamici [Nextjs](https://nextjs.org/) offre la gestione attraverso la creazione di file con il nome del parametro da ricevere racchiuso tra parentesi quadre, piu informazioni qui [Dynamic routes.](https://nextjs.org/docs/routing/dynamic-routes) ![](https://drive.google.com/uc?export=download&id=1rf_fsrQ3gWRYHtBCdjJobOxeGlfIDejy)
In questa pagina abbiamo la possibiltà di scegliere la quantità di elementi da inserire nel carrello ed un bottone per inserli. Al click di questo bottone corrispondera il dispatching di un azione al reducer che modificherà lo stato in base a come richiesto dall azione con conseguente rirendering di tutti i componenti che utilizzano quello stato. (più informazioni qui [Redux essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)) Cliccando sull'icona del carello sarà possibile recarsi e visionare tutti gli elementi precedentemente aggiunti che persisteranno tra le sessioni in quanto memorizzati nei **Cookies** e moficarne la quantità o rimuverli. Ovviamente ad ogni azione di modifica dei prodotti presenti conseguira un aggiornamento dei prezzi e tutti i valori ad esso correlati ![](https://drive.google.com/uc?export=download&id=1GCmGqLwWGoC9NAw1IyiBa5dvlLZjYbAe) Da qui sarà possibile effettuare il checkout (solo dopo l'autenticazione) con carta di credito o google play come metodi di pagamento ( per non incorrere in problemi legali tutti i pagamenti vengono effettuati in modalità test ovvero non verrà adedbbitato nessun costo). ![](https://drive.google.com/uc?export=download&id=1cczQWKYsKPSwKVzSr_RRLDZCQUd-zieP) In caso di avvenuto pagamento si verra renderizzati ad una pagina di successo(Accessibile solo dopo l'avvenuto pagamento e non sempre ) con dei fantastici coriandoli che svolazzeranno per lo schermo e i dovuti ringraziamenti all'acquirente. Per testare i pagamenti usare:
| numero carta | CVC | DATA |
| -- | --- | ---- |
| 4242424242424242 | 3 cifre qualsiasi | qualsiasi data futura  
 ![](https://drive.google.com/uc?export=download&id=1cN79buj5lTZGGJiSJ8d2OC61BHVG8vKn)
