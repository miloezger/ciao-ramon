// Data and init

var bubbleelements = [{
    name: "Sebastian",
    text: "¿Juegas FIFA? &#x26BD;",
    text2: "Spielst du FIFA?"
}, {
    name: "Kevin",
    text: "Hay realmente hipopotamos en el rancho de Escobar?",
    text2: "Hat es wirklich Nilpferde auf der Ranch von Escobar?"
}, {
    name: "Vera",
    text: "Quiero una... chela, chilindrina, helada, helena, rubia, cheve, pisto, bironga, fría, caña, birra. &#x1F37A;",
    text2: "Bier"
}, {
    name: "Dario",
    text: "Ramon ha bebido mucho alcohol y va borracho como una cuba. &#x1F378;",
    text2: "Ramon hat viel Alkohol getrunken und ist sternhagelvoll."
}, {
    name: "Milo",
    text: "No sé. &#x1F937;",
    text2: "Ich bin nicht von hier."
}, {
    name: "John",
    text: "¡Señores! Les voy a decir quién soy. Yo soy Ramon Emilio Aemmer Gaviria, mis ojos están en todos lados, o sea ustedes no pueden hacer una puta sola mierda sin que yo me entere. Ustedes pueden aceptar mi negocio o aceptar las consecuencias.",
    text2: "Es ist immer gut wenn man diese Text-Passage auswendig lernt um gleich zu Beginn für klare Verhältnisse zu sorgen Unter anderem wenn man mit Behörden oder Einheimischen zu tun hat und vor allem im Hinblick, wenn man sich an einem Ort länger niederlassen möchte und in Ruhe seinen Geschäften nachgehen will. Der Name unterstreicht auch, dass man bereit ist die angebotenen Konsequenzen umzusetzen. Die «Consecuencias» findest Du dann im Text «Problemlöser». ((Problemlöser für jeden Fall [Zeile 35]))"
}];

(function(window, undefined) {
    var lib = window.hv = window.hv || {};
    setTimeout(function() {
        new lib.Bubbles({
            elements: bubbleelements
        }).init();
    }, 100);
}(window));