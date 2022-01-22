/*
 * Eine neue Promise (Versprechen) wird erzeugt
 * Ihr übergibt man die "Operation" die sie ausführen soll als Funktion. Die "Operation"-Funktion hat zwei Parameter (Auch Funktionen) mit denen die Promise ihren Erfolg oder ihr Scheitern kommunizieren kann.
 */

const promiseToGiveBook = new Promise((resolve, reject) => {
    // bookFound wird je nach Zufall entweder true oder false sein.
    const bookFound = Math.random() > 0.5 ? true : false;

    if (bookFound) {
        resolve("Hier hast du das Buch");
    } else {
        reject("Ich habe das Buch nicht gefunden");
    }
});

/*
 * Eine erzeugte Promise führt sich sofort selbst aus. Wenn du davon etwas mitkriegen willst kannst du ihr mit then und catch lauschen. Um ihren erfolgreichen Jubel zu hören benutzt man then. Mit catch hörst du ihr klägliches Versagen.
 */

promiseToGiveBook
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

/*
 * Möchte man mehrere Promises auf einmal ausführen und auf alle warten kann man das auch machen. Erst mal brauchen wir aber noch ein Paar Promises
 */

const promiseToTellTruth = new Promise((resolve, reject) => {
    const tellTruth = Math.random() > 0.5 ? true : false;
    tellTruth
        ? resolve("Der Erde ist rund")
        : reject("Die Erde ist eine Scheibe");
});

const promiseToKillBill = new Promise((resolve, reject) => {
    resolve("Dieses Versprechen wird immer gehalten");
});

/*
 * Promise.all ist wie ein Mittelmann der für dich Promises (Versprechen) überwacht. Wenn alle Versprechen gehalten werden wird then ausgelöst. Wird auch nur ein einziges Versprechen gebrochen ist die Kacke am dampfen und der Mittelmann ruft catch auf -> Deshalb kommt dort immer nur ein Error an.
 */

Promise.all([promiseToTellTruth, promiseToKillBill])
    .then((messages) => console.log(messages))
    .catch((error) => console.log(error));

/*
 * Wenn du wissen willst wer zuerst sein Versprechen hält kannst du nochmal den Mittelmann zur Hilfe holen. Mit Promise.race gibt er dir Bescheid sobald ein Versprechen gehalten oder gebrochen wurde.
 */

Promise.race([promiseToTellTruth, promiseToKillBill])
    .then((messages) => console.log(messages))
    .catch((error) => console.log(error));
