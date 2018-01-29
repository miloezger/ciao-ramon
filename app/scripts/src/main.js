// Data and init

var bubbleelements = [
    {  
        name:"Milo",
        text:"¿Dónde está el baño? &#x1F682;",
        text2:"Wo befindet sich der Bahnhof?"
     },
     {  
        name:"Sev",
        text:"¡Dame una cerveza o te mato! &#x1F52B;",
        text2:"Dürfte ich bitte ein Bier haben?"
     },
     {  
        name:"Sev",
        text:"¿Puedo dormir contigo? &#x1F6CF;",
        text2:"Kann ich bei dir schlafen?"
     },
     {  
        name:"Jürgen",
        text:"Funciona como el gato de Schmidt &#x1F640;",
        text2:"Das geht ab wie Schmidts Katze"
     },
     {  
        name:"Jürgen",
        text:"¡No quiero comprar esta alfombra! &#x1F4B8;",
        text2:"Ich möchte diesen Teppich nicht kaufen!"
     },
     {  
        name:"Jürgen",
        text:"Dado que el perro está loco en la sartén. &#x1F436;",
        text2:"Da wird doch der Hund in der Pfanne verrückt."
     },
     {  
        name:"Jürgen",
        text:"No juegues la embutido de hígado ofendida &#x1F624;",
        text2:"Spiel nicht die beleidigte Leberwurst"
     },
     {  
        name:"Milo",
        text:"No sé. &#x1F937; ",
        text2:"Ich bin nicht von hier."
     },
     {  
        name:"Nico",
        text:"¿cómo te llamas? &#x1F42A;",
        text2:"How much for this lama?"
     },
     {  
        name:"Nico",
        text:"Quiero reservar el próximo vuelo a Suiza &#x1F6EB;",
        text2:"I would like to rent a Swiss bike"
     },
     {  
        name:"Andrea",
        text:"Bicho raro &#x1F435;",
        text2:"seltenes Tierchen"
     },
     {  
        name:"Andrea",
        text:"Tú dices: Tomate, yo digo: ¡Te mato! &#x1F345;",
        text2:"i say tomato, you say tomeito"
     },
     {  
        name:"Kevin",
        text:"Este tijera es realmente agudo &#x2702;",
        text2:"Diese Schere ist wirklich scharf"
     },
     {  
        name:"Kevin",
        text:"Hay realmente hipopotamos en el rancho de Escobar?",
        text2:"Hat es wirklich Nilpferde auf der Ranch von Escobar?"
     },
     {  
        name:"kevin",
        text:"Me gusteria tener una barba como tu señorita",
        text2:"Ich hätte auch gern etwas von diesem Käse madame"
     },
     {  
        name:"Sebastian",
        text:"¿Juegas FIFA?",
        text2:"Spielst du FIFA?"
     },
     {  
        name:"Stefan",
        text:"Eres tan bonita. ¿Queremos bailar? &#x1F483;",
        text2:"Du bist so hübsch. Wollen wir tanzen?"
     },
     {  
        name:"Stefan",
        text:"Me gustaría tener una fondue de queso. &#x1F9C0;",
        text2:"Ich hätte gerne ein Käsefondue."
     },
     {  
        name:"Stefan",
        text:"¿Por qué tiene un gusano en esta botella? &#x1F61C;",
        text2:"Warum hat es einen Wurm in dieser Flasche drin?"
     },
     {  
        name:"Vera",
        text:"Quiero una... chela, chilindrina, helada, helena, rubia, cheve, pisto, bironga, fría, caña, birra. &#x1F37B;",
        text2:"Bier"
     },
     {  
        name:"Vera",
        text:"Gringos hijodeputas. &#x1F1FA;",
        text2:"Ich liebe Amerika."
     },
     {  
        name:"Vera",
        text:"¿Plata o plomo? &#x1F64C;",
        text2:"((Problemlöser für jeden Fall))"
     },
     {  
        name:"Gün",
        text:"No entiendo. &#x1F926;",
        text2:"Nix Verstehen."
     },
     {  
        name:"Gün",
        text:"Necesito afeitarme. &#x1F52A;",
        text2:"Ich muss mich rasieren."
     },
     {  
        name:"Gün",
        text:"Me gustaría comprar cocaína. &#x1F443;",
        text2:"Ich hätte gerne Kokain kaufen."
     },
     {  
        name:"Gün",
        text:"Quiero tener un bebé contigo. &#x1F423;",
        text2:"Ich will ein Kind von dir."
     },
     {  
        name:"Gün",
        text:"Extraño a Gün. &#x1F468;",
        text2:"Ich vermisse Gün."
     },
     {  
        name:"Dario",
        text:"Tengo que google eso",
        text2:"Ich muss das googeln"
     },
     {  
        name:"Dario",
        text:"Lo resolvemos en el «frontend»",
        text2:"Das lösen wir dann im Frontend"
     },
     {  
        name:"Dario",
        text:"Ramon ha bebido mucho alcohol y va borracho como una cuba. &#x1F922;",
        text2:"Ramon hat viel Alkohol getrunken und ist sternhagelvoll."
     },
     {  
        name:"Dario",
        text:"Un rollo de una noche &#x1F930;",
        text2:"One-Night-Stand ;-)"
     },
     {  
        name:"Dan",
        text:"una mesa para dos por favor",
        text2:"a table for two please"
     },
     {  
        name:"Dan",
        text:"20 tacos por favor &#x1F32E;",
        text2:"20 tacos please"
     },
     {  
        name:"Dan",
        text:"hazlos picantes &#x1F336;",
        text2:"make them spicy "
     },
     {  
        name:"Dan",
        text:"¡Déjame en paz! Tengo diarrea &#x1F6BD;",
        text2:"Leave me alone. I have diarrhea."
     },
     {  
        name:"Dan",
        text:"te ves como una bolsa de papa &#x1F954;",
        text2:"you look like a bag of potato"
     },
     {  
        name:"Hindi",
        text:"El interletraje de esta fuente no es perfecto.",
        text2:"Das Kerning dieser Schrift ist nicht perfekt."
     },
     {  
        name:"Adonis",
        text:"Mi nombre es Pablo. Pablo Aemmer.",
        text2:"My name is Pablo. Pablo Aemmer."
     },
     {  
        name:"Adonis",
        text:"Estoy bien con Photoshop, si sabes a lo que me refiero.",
        text2:"I’m good with photoshop, if you know what I mean."
     },
     {  
        name:"Adonis",
        text:"Claro, probemos! &#x1F335;",
        text2:"Sure, let’s try it!"
     },
     {  
        name:"Adonis",
        text:"Vuelvo enseguida. &#x1F4A8;",
        text2:"I’ll be back."
     },
     {  
        name:"Claudia ",
        text:"¿En qué dirección está el mar? &#x1F3D6;",
        text2:"In welcher Richtung ist das Meer?"
     },
     {  
        name:"Claudia ",
        text:"¿Dónde puedo hacer una clase de salsa? &#x1F57A;",
        text2:"Wo kann ich einen Salsa Tanzkurs machen?"
     },
     {  
        name:"Vöge",
        text:"Me gustaría tener un menú vegano &#x1F953;",
        text2:"Ne saftige Portion Fleisch mit Fleischsauce, bidde!"
     },
     {  
        name:"Vöge",
        text:"Me gustaría tener dos jugos de remolacha &#x1F955;",
        text2:"Zapf uns zwei grosse Bier!"
     },
     {  
        name:"Vöge",
        text:"Dame un sedante homeopático sobre &#x1F48A;",
        text2:"Schieb mal ein paar harte Drogen rüber!"
     },
     {  
        name:"Vöge",
        text:"Besa la mano graciosa dama &#x1F61A;",
        text2:"Hallo Puppe!"
     },
     {  
        name:"Valentin",
        text:"Coma mierda &#x1F4A9;",
        text2:"Ich möchte Sie höflich darum bitten, oral Fäkalien zu konsumieren."
     },
     {  
        name:"Nicolas",
        text:"¡Ay, no me joda, porfa! ",
        text2:"Also dieser Preis scheint mir doch ein wenig übertrieben zu sein. "
     },
     {  
        name:"John",
        text:"¡Señores! Les voy a decir quién soy. Yo soy Ramon Aemmer, mis ojos están en todos lados, o sea ustedes no pueden hacer una puta sola mierda sin que yo me entere. Ustedes pueden aceptar mi negocio o aceptar las consecuencias. &#x26B0;",
        text2:"Es ist immer gut wenn man diese Text-Passage auswendig lernt um gleich zu Beginn für klare Verhältnisse zu sorgen."
     },
     {  
        name:"Gerald",
        text:"Hasta la victoria siempre",
        text2:"Bring mir den Broccoli - bitte"
     },
     {  
        name:"Gerald",
        text:"Podran morir las personas, pero jamas sus ideas &#x1F914;",
        text2:"Wo ist der Spielplatz?"
     },
     {  
        name:"Gerald",
        text:"Viva mexico cabrones! &#x1F389;",
        text2:"Wann geht der Bus?"
     },
     {  
        name:"Gerald",
        text:"Estoy encabronado &#x1F620;",
        text2:"Wasser mit Kohlensäure"
     },
     {  
        name:"Raphi",
        text:"¿Quieres una fetli mía? &#x1F933;",
        text2:"Wotsch Fetli vo mir?"
     },
     {  
        name:"Raphi",
        text:"¡Pierde peso y siéntate!",
        text2:"Gah go abneh und sitz ab!"
     },
     {  
        name:"Raphi",
        text:"No estamos equivocados, estamos entre tus piernas.",
        text2:"Dänenbed simmer nöd, mir sind zwüsched dinä Bei."
     },
     {  
        name:"Raphi",
        text:"Soy español, si quieres llamarme por la raza.",
        text2:"I bi Spanier süsch, wänn mi bir Rasse wotsch nänne."
     },
     {  
        name:"Raphi",
        text:"Estarás nervioso de inmediato.",
        text2:"Da wird mäh ja grad nervös."
     },
     {  
        name:"Janson",
        text:"¿Dónde está la biblioteca?",
        text2:"Wo ist die Bibliothek?"
     },
     {  
        name:"Sophie",
        text:"Soy un fanático del carnaval &#x1F47A;",
        text2:"Ich in ein grosser Fasnachts-Fan!"
     },
     {  
        name:"Damiano",
        text:"A caballo regalado no hay que mirarle el dentado.",
        text2:"Einem geschenkten Gaul schaut man nicht ins Maul."
     },
     {  
        name:"Damiano",
        text:"Lamerme en Zückerli",
        text2:"Leck mich doch am Zückerli"
     },
     {  
        name:"Damiano",
        text:"Mira amigo, yo te dije ZERRROOO, ZERROOOO",
        text2:"Ich hätte gerne eine Cola Zero, mein Freund"
     },
     {  
        name:"Damiano",
        text:"Un tiro en el chribbbblee, incredible!!",
        text2:"Aber voll in Chribel!!!"
     },
     {  
        name:"Damiano",
        text:"Me encantan los plátanos triturados &#x1F34C;",
        text2:"Ich liebe Bananen"
     },
     {  
        name:"Damiano",
        text:"Soy un comerciante profesional de Krypto.. Tengo muchos Trones &#x1F911;",
        text2:"Ich bin Kryptologe als Beruf"
     },
     {  
        name:"Laura ",
        text:"Que puta madre cochones &#x1F373;",
        text2:"Wow, deine Mutter hat Eier?"
     },
     {  
        name:"Laura ",
        text:"Eh tico que haces? &#x1F919;",
        text2:"Alter was geht ab?"
     }
];

(function(window, undefined) {
    var lib = window.hv = window.hv || {};
    setTimeout(function() {
        new lib.Bubbles({
            elements: bubbleelements
        }).init();
    }, 100);
}(window));