var e
var state
var debug
"use strict"

function State() {
    GameState.apply(this, arguments)
    this.magic = new PlayerAttribute("Magie", 20)
    this.lore = new PlayerAttribute("Wissen", 20)
    this.awareness = new PlayerAttribute("Aufmerksamkeit", 20)
    this.mundane = new PlayerAttribute("Weltliches", 20)
    this.damage = 0
    this.delay = 0
    this.disguise = 0 // TODO = Check if this is necessary
    this.event1_2_read = 0
    this.money = 1000
    this.gender = 0
    this.profile = 0
    this.stash = 0
    this.takedown = 0
    this.wantedlevel = 0
}

var eventStart = function() {
    debug = false
    state = new State()
    e = new Engine(state)
    //e.setBackground("linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2))", "res/imgs/main.jpg")
    let text = "<h1>Aiur 0.0.1</h1>Hallo und herzlichen willkommen zur Betaversion unseres Spiels. Hierbei handelt es sich um ein sogenanntes textbasiertes Rollenspiel. Kurz gesagt geht es darum, dass du in einer fiktiven Welt die Handlungen des Hauptcharakters bestimmst und hoffentlich zu einem guten Ende führst. Die Spielwelt gleicht der unseren, mit dem Unterschied, dass Magie real ist, und jeder davon weiß.<br/><br/>Aber eigentlich sollte alles ganz selbsterklärend sein. Wir wünschen dir viel Spaß!"
    if(debug) {
        state.awareness.value = 40
        state.lore.value = 40
        state.awareness.value = 40
        state.mundane.value = 0
        state.profile= 20
        state.delay= 20
        state.takedown = 1
        e.setBackground(null, null)
        e.show(text, [new Choice("Debug Spiel", "event1_2")], false)
    } else if(GameState.hasSave()) {
        e.show(text, [new Choice("Neues Spiel", "eventNew"),
        new Choice("Weitermachen", "eventContinue")], false)
    } else {
        e.show(text, [new Choice("Neues Spiel", "eventNew")], false)
    }
}

var eventNew = function() {
    e.setBackground(null, null)
    if(GameState.hasSave()) {
        e.show("Ein Spielstand existiert bereits. Ein neues Spiel überschreibt diesen. Jetzt ein neues Spiel starten?",
            [new Choice("Ja", "event0_1"),
            new Choice("Nein", "eventStart")], false)
    } else {
        event0_1()
    }
}

var eventContinue = function() {
    e.setBackground(null, null)
    GameState.load(e)
}

var event0_1= function() {
    e.setBackground(null, null)
    e.show("Mit geweiteten Augen starrt sie ihn an: „Was… was… soll das heißen? Dämonen?“. Sie lacht, etwas zu schrill. Er erwidert ihren Blick ruhig: „Lilly… ich bin ein Magier.“ Wieder lacht sie und fährt sich mit der Hand durch die blonden Locken: „Oh, ach so. Mach dir keine Sorgen, ich bin eine Fee…“ Der Mann verzieht noch immer keine Miene: „Ich gehöre einem uralten Geheimbund an, der die Menschen vor den Mächten der Finsternis bewahrt!“<br/>An dieser Stelle verdrehst du die Augen und wechselst den Kanal. Um diese Uhrzeit kommt einfach kein brauchbarer Film mehr im Fernsehen. Wie konnte so ein Mist jemals gedreht werden? Ein uralter Geheimbund von Magiern… lächerlich. Zugegeben, der Film scheint aus den Achtzigern zu stammen. Damals ahnte man noch nicht, dass bald Internet und Smartphone erfunden und die Welt für immer verändern würde. Mit dem Aufkommen der neuen Kommunikationstechnologie war es völlig unmöglich geworden, die Existenz der Magie noch länger geheim zu halten. Plötzlich tauchten immer mehr Videos von fliegenden Menschen, kreischenden Kugelblitzen und spontan auftretender Dunkelheit auf. Die Öffentlichkeit war ebenso überfordert wie die Medien und Politiker und in der daraus resultierenden Unruhe wurden Magier gesetzlich verpflichtet, sich zu registrieren und ihre Geheimnisse offen zu legen. Zugleich wurde den meisten eine gutbezahlte Dienststelle angeboten. Die Welt schien sich nur noch um Magie zu drehen.<br />Dir war das egal. Dein Vater war gerade gestorben.",
        [new Choice("Weiter", "event0_2")])
}

var event0_2 = function() {
    e.show(
        "Ein Autounfall… die Banalität war beinahe ebenso verstörend wie die plötzliche Leere in dir. Während sich deine Mutter dem Alkohol ergab, tatest du das einzige, was dir sinnvoll erschien: Soviel wie möglich zu unternehmen und so wenig wie möglich zu denken. Nichts war dumm genug, kein Aufwand zu groß, sofern du nur nicht mit deinen Erinnerungen alleine warst. Selbst die Tapete deines Zimmer runterzureißen war dir ein Vergnügen. Du hattest sie eh nie gemocht, sie entsprach gängigen Klischees über Jungs und Mädchen und war bei deiner Geburt entsprechend ausgewählt ausgewählt worden:",
        [new Choice("Blau", "event0_3_1"),
        new Choice("Rosa", "event0_3_2")])
}

var event0_3_1 = function() {
    state.gender = 1
    e.show(
        "Blau für Jungs. Und dann auch noch so ein hässlicher Farbton.",
        [new Choice("Weiter", "event0_3_3")])
}

var event0_3_2 = function() {
    state.gender = 0
    e.show("Rosa für Mädchen. Und dann auch noch so ein hässlicher Farbton.",
    [new Choice("Weiter", "event0_3_3")])
}

var event0_3_3 = function() {
    e.show("Allerdings verbrachtest du auch viel Zeit bei deiner besten Freundin Alex. Neben unzähligen Filmen habt ihr euch vor allem viele Videos im Internet angesehen. Eines Tages grinste sie dich an, während sie zwei bedruckte Seiten Papier vor deine Nase hielt: „Hier, das hab ich aus 'nem Forum. Der Initiationsritus. „Der was?“, hattest du sie verwirrt gefragt, nicht ganz sicher, welcher Film das sein sollte.<br/>„Initiationsritus. Das machen angeblich alle, die Magie erlernen wollen. Damit findet man heraus, ob man magisch begabt ist.“<br/>Zwanzig Minuten später saßest du ihr gegenüber im Schneidersitz, in der Hand eine brennende Kerze, der Geruch von Weihrauch in der Luft und lächelteste sie spöttisch an: „Und, ist die Macht schon mit dir?“<br/><br/>Alex streckte dir die Zunge raus: „Magie ist total selten. Dass heißt nicht, dass mein Ritual…“ Alex streckte dir die Zunge raus: „Magie ist total selten. Dass heißt nicht, dass mein Ritual...“ Sie stockte und starrte auf deine Hände, die noch immer die Kerze hielten. Die Flamme erstrahlte in einem kristallklarem Blau. Aber noch interessanter war die Tatsache, dass der Wachs nicht schmolz, als würde die Flamme von etwas Anderem genährt.<br/>Damals hieltest du zum ersten Mal Magie in der Hand.<br/>Diese Erkenntnis...<br/><br/>Diese Erkenntnis gab dir neuen Schwung und veränderte dein Leben. Alex sammelte alles, was sie im Internet fand und half dir, dein Talent zu entwickeln. Eine Sache war dir dabei besonders wichtig:",
    [
        new Choice("Ich widmete meine gesamte Kraft dem Bündeln magischer Energien, um möglichst mächtige Zauber zu formen.", "event0_4_1"),
        new Choice("Ich verschlang jedes Buch und jeden Hinweis voller Wissensdurst. Ich wollte jeden Zauber kennen und jedes Geheimnis ergründen.", "event0_4_2"),
        new Choice("Ich gewöhnte mir an, auf jedes Detail in meiner Umgebung zu achten und keine Spuren zu hinterlassen.", "event0_4_3"),
        new Choice("Ich achtete darauf, die Welt um mich herum nicht zu vergessen und verbrachte viel Zeit mit Freunden und sportlichen Aktivitäten.", "event0_4_4")
    ])
}

var event0_4_1 = function() {
    state.magic.value += 10
    e.show("Du verbrachtest unzählige Stunden damit, dir Spielkarten zu merken, um deine Konzentration zu schärfen. Jeden Tag meditiertest du, um das zu finden, was die Bücher als Ruhepol bezeichneten. Und jeder dir bekannte Zauber wurde in den unterschiedlichsten Varianten probiert, bis du dessen Wirkung besser einschätzen konntest. Stück für Stück bautest du dein Vertrauen in die Magie weiter aus, bis sie für dich weniger ein Werkzeug als eine dritte Hand darstellte.",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_2 = function() {
    state.lore.value += 10
    e.show("Du hattest zwar zuvor schon viele Bücher gelesen, aber die magischen Schriften eröffneten dir eine völlig neue Weltanschauung. Physik, Chemie und Biologie verloren ihren unnachgiebigen Halt und wurden zu alternativen Erklärungsmodellen, während Legenden zu Optionen wurden. Inzwischen hast du mehr Fragen als jemals zuvor, doch zugleich hast du das Gefühl, eine Orientierung im Chaos gefunden zu haben.",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_3 = function() {
    state.awareness.value += 10
    e.show("Die Tatsache, dass etwas so Bedeutsames wie Magie jemals ignoriert werden konnte, obwohl sie doch in den Geschichten jeder Kultur auftauchte, machte dir klar, wie leicht selbst Offensichtliches übersehen werden kann. Mit dem festen Vorsatz, nie wieder mit verschlossenen Augen durch die Welt zu laufen, machtest du es dir zur Gewohnheit, auf die Details deiner Umgebung zu achten, diese in einem Gedächtnisprotokoll festzuhalten und sie schließlich miteinander zu vergleichen.",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_4 = function() {
    state.mundane.value += 10
    e.show("Schwimmen und Radfahren halfen dir, den Kopf frei zu bekommen und zugleich gaben sie dir das Gefühl, auch ohne Magie etwas erreichen zu können. Der Kontakt mit Freundesfreunden führte zu interessanten Begegnungen und unterhaltsamen Gesprächen bis in den späten Abend, welche nicht nur deinen Alltag bereicherten, sondern es dir auch ermöglichten, die Magie zu vergessen und zu entspannen. Obwohl die Magie dein Leben noch immer prägte, war es gut, eine Alternative zu haben.",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_5 = function() {
    e.show("Deine Begeisterung erhielt erst einen Dämpfer, als Thomas Brendel erschossen wurde. Brendel war einer jener Magierbeamten der ersten Stunde und war für den Schutz der Regierung zuständig gewesen. Ermittler hatten herausgefunden, dass er seine Kräfte genutzt hatte, um hochrangige Politiker zu beeinflussen. Bei seiner Verhaftung hatte er ein Dutztend Sondereinsatzkommandos in Schlacke verwandelt, bevor eine Kugel seinen Kopf durchbohrte. Angesichts dieses gravierenden Machtmissbrauches brandete die öffentliche Panik erneut auf, was für registrierte Magier ernsthafte Folgen hatte: Magie durfte nur noch mit Genehmigung der Behörden und nur in bestimmten Situationen genutzt werden, sofern keine Vorstrafen vorhanden waren. Jeder gemeldete Magier musste unregelmäßige Zufallskontrollen über sich ergehen lassen, unabhängig davon, ob er Magie ausübte oder nicht. Das schlimmste jedoch waren die radikalen Gruppen besorgter Bürger, welche sämtliche Magier als Schwerkriminelle behandelte und auch vor Gewalt nicht zurückschreckten.<br/>Für dich war dies besonders schrecklich. Da ihr den Großteil eurer Quellen aus dem sogenanntem Darknet auf illegalen Tauschbörsen erworben hattet, standen die Chancen gut, dass dir die Ausübung von Magie verboten werden würde. Dabei gab es streng genommen kein Gesetz, dass dies bislang untersagt hatte, doch einige Gerichtsurteile änderten dies schnell. Statt einer gesicherten Laufbahn sahest du dich nun dem Risiko von gewalttätigen Anfeindungen und staatlicher Überwachung ausgesetzt. Es muss nicht erwähnt werden, dass dies entmutigend war.",
    [
        new Choice("Ich ignorierte meine magischen Kräfte für eine Weile.", "event0_5_1"),
        new Choice("Ich vernachlässigte die magischen Schriften.", "event0_5_2"),
        new Choice("Ich schenkte meiner Umgebung keine Aufmerksamkeit mehr.", "event0_5_3"),
        new Choice("Ich verkroch mich in meinem Zimmer.", "event0_5_4")
    ])
}

var event0_5_1 = function() {
    state.magic.value -= 10
    e.show("Eine Zeit lang war es schwierig, sich auf die Magie einzulassen, wo sie doch dein Leben zugleich so durcheinander gebracht hatte und deine Zukunft bedrohte, doch schließlich konntest du dich wieder fangen, auch wenn deine anfängliche Begeisterung einen Dämpfer erhalten hat.", 
    [new Choice("Weiter", "event0_6")])
}

var event0_5_2 = function() {
    state.lore.value -= 10
    e.show("Das plötzliche Verbot magischer Schriften dämpfte deine Begeisterung für diese ebenso sehr wie die umständlichen Formulierungen, die offensichtlich keinerlei Wert auf Verständlichkeit legten. Aus diesem Grund hast du die Passagen über seltene Phänomene nur überflogen und dich auf die wesentlichen Dinge beschränkt.",
    [new Choice("Weiter", "event0_6")])
}

var event0_5_3 = function() {
    state.awareness.value -= 10
    e.show("Ab einem gewissen Punkt sind zu viele Informationen einfach nur noch hinderlich und so erschien es dir unumgänglich, deinem schmerzenden Kopf eine Auszeit zu gönnen und nicht jedes Detail zu hinterfragen.", 
    [new Choice("Weiter", "event0_6")])
}

var event0_5_4 = function() {
    state.mundane.value -= 10
    e.show("Die Welt schien sich gegen dich verschworen zu haben, weshalb du dir eine Auszeit von ihr gönntest. In der Abgeschiedenheit deines Zimmers hattest du alle Zeit der Welt, dir deine eigenen Gedanken zu machen, ohne dass dich jemand störte.",
    [new Choice("Weiter", "event0_6")])
}

var event0_6 = function() {
    e.show("Die ständigen Nörgeleien deiner Mutter hatten dir natürlich ebenso wenig gut getan – „Nichtsnutz“ und „Faulpelz“ waren nur einige der ausgesuchten Bezeichnungen, mit denen sie dich beschrieb. Du konntest nicht ganz nachvollziehen, warum es erstrebenswerter sein sollte, den gesamten Tag mit dem Fernseher und einer Flasche billigen Whiskeys zu verbringen, aber mit Argumenten hatte sie sich eh nie auseinander gesetzt – vermutlich einer der wenigen Vorteile des Alkoholismus.<br/><br/>Als sie dann schließlich auf Blutkrebs diagnostiziert wurde, änderte sich nicht viel, außer dass ihr Pensum gelegentlich auf zwei Flaschen am Tag stieg. Unglücklicherweise bedeutete dies auch, dass sie am Monatsende unausstehlich wurde, wenn die Sozialhilfe nicht ausreichte, um ihren Rausch zu finanzieren. Als ihr Mitbewohner – du hattest noch keinen Vermieter gefunden, der dich ohne festen Job akzeptierte – bedeutete dies für dich natürlich zusätzlichen Ärger.<br/><br/>Glücklicherweise ist gerade Monatsanfang und nach eineinhalb Flaschen liegt sie besinnungslos neben dir auf dem Sofa, so dass du den Kanal wählen kannst.",
    [new Choice("Weiter", "event0_6_1")])
}

var event0_6_1 = function() {
    e.show("Nicht dass die anderen Kanäle besser wären. Frustriert schaltest wieder den grauenhaften Film an. Der Hauptdarsteller schleudert gerade mit Hilfe seines Stabs Feuerbälle und Blitze auf seine Feinde, während er durch den Nachthimmel schwebt und die Frau – Lilly hieß sie? – in seinem Arm hält.<br/><br/>An dieser Stelle atmest du tief durch.<br/><br/>Dir ist natürlich klar, dass die meisten Menschen so gut wie kein Verständnis von Magie haben, aber dieser Film verstößt gegen so viele grundlegende Prinzipien, dass es dir die Sprache verschlägt. Ein Zauber erfordert eine Beschwörungsformel, was selbst im günstigsten Fall mindestens fünf Sekunden erfordert, meist jedoch länger. Zudem erfordert es enorme Konzentration, mehr als einen Zauber zur selben Zeit zu wirken…<br/><br/>Als der Held gegen Ende seine Kräfte einsetzt, um seine Geliebte wieder zum Leben zu erwecken, schaltest du angewidert erneut um. Magie hat ihre Grenzen. Andernfalls hättest du deine Mutter sicherlich geheilt.",
    [new Choice("Weiter", "event0_6_2")])
}

var event0_6_2 = function() {
    e.show("Nachrichten. Immerhin.<br/><br/>„Nachdem Doktor Sikora wegen Verdachts auf illegale magische Behandlung in Gewahrsam genommen wurde, warten die Beamten nun auf das Eintreffen der Sachverständigen…“ Innerlich seufzt du auf. Die Öffentlichkeit hat sich noch nicht von dem Schock erholt, dass Magie tatsächlich existiert. Dementsprechend ist jede Art von Vorfall, bei dem Magie eine Rolle spielen könnte, eine wahre Goldmine für die Medien, wie diese Liveübertragung belegt. Du überlegst wegzuschalten, aber dann bemerkst du, dass du das gezeigte Gebäude kennst. Es befindet sich Nahe des Stadtzentrums.<br/><br/>„…Doktor Sikora war ins Visier der Ermittler geraten, als seine Praxis nicht die üblichen Utensilien und Medikamente zur Behandlung von Blutkrebs bestellt hatte, obwohl die Praxis angeblich auf Leukämie spezialisiert ist.”<br/><br/>Natürlich. Die Anzahl der Betrüger hat drastisch zugenommen, seitdem die Existenz von Magie bekannt geworden ist. Offiziell benötigt man natürlich etliche Genehmigungen, aber verzweifelte Menschen stellen eine leichte Beute für jeden Schwindler dar. Obwohl Heilung eine der einfachsten Formen von Magie ist, werden neumodische Konzepte wie Karzinome von der uralten Fachliteratur natürlich nicht abgedeckt. Du selbst hast versucht, dich nach der Diagnose deiner Mutter schlau zu machen. Vergeblich.<br/>„Bei einer stichprobenartigen Untersuchung fand man heraus, dass sich die Patienten bei überraschend guter Gesundheit befinden…”, – an dieser Stelle stockt die Reporterin und blickt kurz neben die Kamera – „aber… aber wir weisen darauf hin, dass ohne eine ausführliche Untersuchung jedwede Behauptung kritisch zu betrachten ist. Die Beamten vom MEK befinden sich bereits auf dem Weg und werden sich in den nächsten Wochen ausführlich damit beschäftigen.“<br/><br/>Du springst auf. Wütend. Schockiert. Elektrisiert.<br/>Könnte es sein? Könnte es tatsächlich ein Heilmittel geben? Und würden die Beamten es tatsächlich zur Sicherheit der Allgemeinheit wochenlang unter Verschluss halten?<br/><br/>Vermutlich.<br/>Es könnte auch alles ein Irrtum sein. Möglicherweise wäre es besser, sich wieder auf das Sofa zu setzen, diese Sache nur in den Nachrichten zu verfolgen, dem System seinen Lauf zu lassen und auf die Vernunft der Masse zu hoffen.<br/>Einfach so zu tun, als ginge dich das nichts an.<br/>Von wegen!<br/><br/>Dir bleibt also nur eine Möglichkeit. Du musst dort hin, bevor das MEK eintrifft.",
    [new Choice("Ich beherrsche die Magie und ich will verdammt sein, wenn ich sie den Rest meines Lebens nur in meinem Zimmer einsetze!", "event1_0"),
    new Choice("Es wird Zeit die Welt zu retten. Eine Person nach der anderen!", "event1_0"),
    new Choice("Es könnte die Heilung für meine Mutter bedeuten. Sie mag nicht die tollste Mutter der Welt sein, aber ich werde auf keinen Fall einfach zusehen, wie sie stirbt!", "event1_0"),
    new Choice("Wenn uns sonst niemand hilft, muss ich eben selbst etwas tun!", "event1_0")])
}

var event1_0 = function() {
    e.show("Dir ist klar, dass die Zeit gegen dich Arbeit. Die MEK-Beamten sind zwar chronisch überarbeitet, aber bei einer Liveübertragung ist das Interesse der Öffentlichkeit vermutlich groß genug, um jemanden aus dem Bett zu klingeln. Andererseits könnte ein blindes Voranstürmen dir ebenfalls schaden.<br/><br/>Zudem ist es illegal für Privatpersonen, Magie anzuwenden. Du musst also beim zaubern darauf achten, nicht zu offensichtliche Spuren zu hinterlassen.<br/><br/>Du überlegst kurz. Leider besitzt du kein Fahrzeug, aber immerhin dürfte gleich ein Bus ins Stadtzentrum fahren. Nicht ideal, aber es dürfte funktionieren. Alternativ könntest du natürlich fliegen, aber du bist dir nicht sicher, ob deine Kräfte dafür ausreichen. Zudem besteht die Möglichkeit, dass jemand etwas sehen könnte. Andererseits ist es natürlich Nacht.<br/>Letztlich hättest du noch die Möglichkeit, in deinem Zimmer nach Handschuhen, Schal und Mütze zu suchen, damit du nicht so schnell erkannt wirst. Zwar bist du in der Lage, dich magisch zu tarnen, aber mehrere Zauber aufrecht zu erhalten ist immer schwierig und vielleicht brauchst du deine Kräfte anderweitig.",
    [new Choice("Zeit zum Umziehen.", "event1_0_1"),
    new Choice("Zeit zum Fliegen.", "event1_0_2"),
    new Choice("Zeit für den Bus.", "event1_0_3")])
}

var event1_0_1 = function() {
    state.delay += 5
    state.disguise = 1
    state.profile -= 5
    e.show("Du hastest in dein Zimmer, reißt den Schrank auf und wühlst wie besessen in deinen Klamotten. Kurz darauf hast du Schal, Mütze und Handschuhe gefunden. Sogar eine Sonnenbrille ist dabei.<br/>Und nun?",
    [new Choice("Zeit zum Fliegen.", "event1_0_2"),
    new Choice("Zeit für den Bus.", "event1_0_3")])
}

var event1_0_2 = function() {
    let text = "Du trittst nach draußen in die kühle Herbstluft. Du siehst dich kurz um und als du niemanden siehst, murmelst du die Beschwörungsformel. Langsam erhebst du dich. "
    if(state.magic.value >= 30) {
        state.delay -= 30
        state.profile += 5
        text += "Bedächtig legst du mehr Kraft in den Zauber und kurz darauf fliegst du Richtung Stadtzentrum davon. Obwohl du kaum schneller bist als mit dem Fahrrad, kommst du doch ausgezeichnet voran, da du weder bremsen noch ausweichen musst. Dir wird ein wenig schwindelig angesichts der kleinen Lichtpunkte, die unter dir entlang rasen und auch der schneidend kalte Nachtwind ist nicht besonders angenehm, doch du konzentrierst dich und kannst kurze Zeit später in einer dunklen Seitenstraße landen. Die letzten Meter legst du zu Fuß zurück."
        var choices = [new Choice("Weiter", "event1_1")]
    } else {
        text += "Unglücklicherweise schaffst du es nicht, gleichzeitig genügend Kraft in den Zauber zu legen und die vollständige Kontrolle zu behalten. Du könntest zwar schweben, aber damit wärst du auch nicht schneller als zu Fuß."
        var choices = [new Choice("Du beschließt den Bus zu nehmen", "event1_0_3")]
    }
    e.show(text, choices)
}

var event1_0_3 = function() {
    state.delay += 5
    state.disguise = 1
    e.show("Du gehst zur Bushaltestelle. Angesichts deines Vorhabens, der Polizei und ihren magischen Spezialisten zuvor zu kommen, erscheint dir das Warten auf den Bus wie ein schlechter Scherz.<br/>Als der Bus endlich kommt, hat er zwei Minuten Verspätung und obwohl du weisst, dass zwei Minuten nur in schlechten Filmen entscheidend sind, hast du ein mulmiges Gefühl.<br/><br/>Als du zwanzig Minuten später aussteigst, begibst du dich möglichst schnell Richtung Praxis.",
    [new Choice("Weiter", "event1_1")])
}

var event1_1 = function() {
    e.show("Die Praxis befindet sich in einem mehrstöckigen Reihenhaus an einer wenig befahrenen Straße. Vor dem Eingang stehen zwei Polizisten und halten jeden vom Betreten ab, der kein Mieter ist. Die Menge der neugierigen Zuschauer ist bereits auf ein paar Dutzend gestiegen und breitet sich bis auf die Straße aus. Ein Journalist spricht gerade in eine Kamera, während ein weiteres Übertragungsteam gerade seinen Wagen entlädt. Auf das Dach zu Schweben fällt also aus.",
    [new Choice("Weiter", "event1_1_0")])
}

var event1_1_0 = function() {
    e.show("Du musst du dir irgendwie Zutritt zum Gebäude verschaffen. Zwar könntest du dich auf magische Art Tarnen, doch wenn sich einfach die Tür öffnet, wirkt dies mit Sicherheit verdächtig. Vielleicht kann man mit den Beamten am Eingang reden? Eine Seitengasse scheint hinter das Gebäude zu führen, vielleicht hast du Glück und findest eine Feuerleiter. Natürlich könntest du das Gebäude auch auf einer magischen Ebene betrachten, um Spuren magischer Energie zu finden, aber dies dauert eine Weile.",
    [new Choice("Ich rede mit den Polizisten.", "event1_1_1"),
	new Choice("Zuerst höre ich mich unter den Passanten um.", "event1_1_2"),
	new Choice("Die Rückseite des Gebäudes klingt vielversprechend.", "event1_1_3"),
	new Choice("Ich verschiebe meine Wahrnehmung auf das magische Spektrum.", "event1_1_4")])
}

var event1_1_1 = function() {
    e.show("Die beiden Beamten wirken wie Türsteher. Gelangweilt und unnachgiebig.",
    [new Choice("„Einen schönen guten Abend. Was ist denn hier passiert?”", "event1_1_1_1"),
	new Choice("„Entschuldigen Sie, aber ich wohne hier.”", "event1_1_1_2"),
	new Choice("„Guten Abend Kollegen.” Es wird schließlich ein magischer Experte erwartet.", "event1_1_1_3"),
	new Choice("Ich überlege mir doch lieber etwas anderes.", "event1_1_0")])
}

var event1_1_1_1 = function() {
    state.delay += 5
    e.show("Bemüht höflich erwidert der größere von beiden: „Wir dürfen uns dazu leider nicht äußern. Entnehmen Sie weiteres bitte den Medien.” Der andere verdreht nur die Augen.",
    [new Choice("„Entschuldigen Sie, aber ich wohne hier.”", "event1_1_1_2"),
	new Choice("„Nur ein Scherz. Guten Abend Kollegen.” Es wird schließlich ein magischer Experte erwartet.", "event1_1_1_3"),
	new Choice("„Ich überlege mir doch lieber etwas anderes.", "event1_1_0")])
}

var event1_1_1_2 = function() {
    state.delay += 5
    e.show("Die beiden Beamten ringen sich ein Lächeln ab: „Können Sie sich ausweisen?” Verdammt.",
    [new Choice("„Hätte ich gewusst, dass ich sonst nicht in meine Wohnung komme, hätte ich meine Brieftasche samt Ausweis sicherlich mitgenommen. Bitte, es ist kalt!”", "event1_1_1_2_1"),
	new Choice("„Um in meine Wohnung zu kommen? Wollen Sie mich auf den Arm nehmen???”", "event1_1_1_2_2"),
	new Choice("„Bitte, ich muss echt dringend pinkeln.”", "event1_1_1_2_2")])
}

var event1_1_1_2_1 = function() {
	if (state.mundane.value >= 30) {
		e.show("Der Beamte zögert, als sein Kollege ihm etwas ins Ohr flüstert. Dann zuckt er mit den Schultern: „Halten Sie sich bitte von der Praxis fern.”", 
		[new Choice("„Hätte ich gewusst, dass ich sonst nicht in meine Wohnung komme, hätte ich meine Brieftasche samt Ausweis sicherlich mitgenommen. Bitte, es ist kalt!”", "event1_2")])
	} else {
		e.show("„Tut mir sehr leid, aber so können wir sie nicht einfach durchlassen.”", 
		[new Choice("Mist!", "event1_1_1")])
	}
}

var event1_1_1_2_2 = function() {
	e.show("„Tut mir sehr leid, aber so können wir sie nicht einfach durchlassen.”", 
	[new Choice("Mist!", "event1_1_1")])
}

var event1_1_1_3 = function() {
    state.delay += 5
    e.show("Die beiden sehen dich überrascht an... misstrauisch. Ängstlich? Sie mustern dich, offensichtlich nicht überzeugt.",
    [new Choice("„Schon gut, ich habe mir lediglich einen Scherz erlaubt.”", "event1_1_1_3_1"),
	new Choice("Ich demonstriere ihnen einen einfachen Zauber, um sie zu überrumpeln.", "event1_1_1_3_2")])
}

var event1_1_1_3_1 = function() {
	e.show("Die beiden mustern dich finster: „Sie sind Reporter, oder? Möchten unbedingt rein, hm? Klar, die Polizei steht nur im Weg.”", 
	[new Choice("Mist!", "event1_1_1")])
}

var event1_1_1_3_2 = function() {
    state.delay += 5
    state.profile += 30
	e.show("Langsam – du möchtest keinen Zwischenfall provozieren – hebst du die linke Hand und murmelst eine Beschwörung. Einige Sekunden später erhebt sich eine kleine Lichtkugel über deinem Handteller. Überaus simpel, aber die Beamten zucken erschrocken zusammen. Du lächelst sie beruhigend an. Der kleinere von beiden schluckt und öffnet dir die Tür.", 
	[new Choice("Weiter", "event1_2")])
}

var event1_1_2 = function() {
    let text = "Du stellst dich zu den Schaulustigen und hörst dich um. Ein Herr in mittleren Jahren und Jogginghose erzählt dir nur zu gerne jedes Detail: „Ich kam gerade zurück vom Kiosk, als mir einfiel, dass ich ja gar nicht bezahlt hatte… aber das willste gar nicht so genau wissen, hm? Naja, da waren jedenfalls die Bullen hier und dann war da diese gewaltige Explosion… guck nicht so, nur 'n Scherz. Wir sind hier ja nicht bei Columbo, wobei, so viel explodiert da ja auch nich...” Genervt brichst du das Gespräch ab und versuchst dich an den anderen Passanten. Die sind zwar etwas konkreter, aber sinnvolle Informationen kannst du auch ihnen nicht entnehmen."
    if(state.awareness.value >= 30)
        text = "Du stellst dich zu den Schaulustigen und hörst dich um. Ein Mann in Jogginghose erzählt eifrig den Umstehenden, was er gesehen hat, aber seine Alkoholfahne lässt ihn nicht besonders verlässlich erscheinen. Eine ältere Dame mit selbstgehäkeltem Schal informiert dich, dass die Polizei noch immer auf den magischen Spezialisten wartet: „Die sitzen immer noch im zweiten Stock in der Praxis. Ich hoffe da tut sich bald etwas neues. Die Herbstluft kriecht mir langsam in die Knochen. Und es ist ja nicht so, als gäbe es jetzt hier noch einen Arzt, der mir im Zweifelsfall helfen könnte.” Du willst ihr gerade danken, als dir die Sehnsucht in ihrer Stimme auffällt und plötzlich geht dir ein Licht auf: „Gute Frau, Sie wissen schon, dass die Polizei sie nicht einfach von ihrer Wohnung fernhalten kann? Sie haben doch bestimmt einen Ausweis? Kommen Sie, ich geleite Sie bis zu Ihrer Wohnung.” Die Dame sieht etwas peinlich berührt aus, doch sie widerspricht dir nicht. Du bietest ihr deinen Arm an und gemeinsam führst du sie zu den Beamten am Eingang, welche euch passieren lassen. Ihre Wohnung ist nicht weit vom Haupteingang entfernt und als ihr vor der Wohnungstür steht, bedankt sie sich vielmals bei dir. Du lächelst höflich und verabschiedest dich."
    else if (state.awareness >= 20)
        text = "Du stellst dich zu den Schaulustigen und hörst dich um. Ein Mann in Jogginghose erzählt eifrig den Umstehenden, was er gesehen hat, aber seine Alkoholfahne lässt ihn nicht besonders verlässlich erscheinen. Eine ältere Dame mit selbstgehäkeltem Schal informiert dich, dass die Polizei noch immer auf den magischen Spezialisten wartet: „Die sitzen immer noch im zweiten Stock in der Praxis. Ich hoffe da tut sich bald etwas neues. Die Herbstluft kriecht mir langsam in die Knochen. Und es ist ja nicht so, als gäbe es jetzt hier noch einen Arzt, der mir im Zweifelsfall helfen könnte.” Du dankst ihr und überlegst deine weiteren Schritte."
    e.show(text, [new Choice("Weiter", "event1_1_1")])
}

var event1_1_3 = function() {
    e.show("Du begibst dich durch die Seitengasse, welche von mehreren Müllcontainern zusätzlich verschmälert wird. Dir fällt auf, dass die Biotonne fast voll ist. Nicht dass dir das etwas nützen würde.",
    [new Choice("Weiter", "event1_1_3a")])
}

var event1_1_3a = function() {
    e.show("Auf dem Hof hinter dem Gebäude ist es ziemlich dunkel, lediglich das durch die Wohnungsfenster fallende Licht ermöglicht es dir, deine Umgebung zu erahnen. Im dritten Stock scheint ein Flurfenster gekippt zu sein. Wenn du die Gestalt eines Vogels annähmest, könntest du bequem dort hindurchschlüpfen. Mit etwas weniger Finesse könntest du auch den Schließmechanismus der Hintertür zerstören. Es scheint sich zur Zeit niemand dort aufzuhalten. Während du noch überlegst, fällt dir auf, dass der Hof viele Parkplätze bereit hält. Es dürfte nur eine Frage der Zeit sein, bis einer der Bewohner die Hintertür benutzt und du hereinschlüpfen kannst.",
    [new Choice("Ich verwandele mich in einen Vogel.", "event1_1_3_1"),
    new Choice("Ich kümmere mich um die Tür.", "event1_1_3_2"),
    new Choice("Ich warte auf eine günstige Gelegenheit.", "event1_1_3_3"),
    new Choice("Ich habe es mir anders überlegt und gehe wieder vor das Gebäude.", "event1_1")])
}

var event1_1_3_1 = function() {
    let text = "Du suchst die dunkelste Ecke des Hofes auf und stolperst fast über etwas. Was auch immer es ist, du kannst es in der fast vollständigen Finsternis nicht erkennen. Ausgezeichnet, so wird dich zumindest niemand erkennen."
    if(state.lore.value >= 30) {
        e.show(text + " Mit leisem Murmeln entbindest du deinen Körper von seiner Konzeption und nimmst die Gestalt eines Vogels an. Im letzten Augenblick entscheidest du dich nicht für einen Milan, sondern für die Gestalt einer Eule, um dich im Dunkel besser orientieren zu können. Du blinzelst. Die Orientierung fällt dir für einen Augenblick schwer, als du versuchst, dich an deine neue Gestalt zu gewöhnen, aber dann greifen deine neuen Instinkte und du schwingst dich in die Luft. Wenige Sekunden später schlüpfst du durch das Fenster. Dann löst du den Zauber und nimmst deine übliche Gestalt wieder an.",
            [new Choice("Weiter", "event1_2")])
    } else {
        e.show(text + " Unglücklicherweise will dir die richtige Formel nicht einfallen. Gestaltwandel ist leider doch recht komplex. Du nimmst dir vor, dir mehr Fachliteratur durchzulesen, wenn das alles vorbei ist und überlegst, wie du weitermachen könntest.",
            [new Choice("Weiter", "event1_1_3a")])
    }
}

var event1_1_3_2 = function() {
    let text = "Du schleichst dich zur Tür."
    if(state.magic.value >= 30) {
        e.show(text + " Beschwörungen flüsternd setzt du den Mechanismus kinetischer Energie aus, bis ein leichtes Klicken dir vermittelt, dass das Schloss offen ist. Du trittst ein.",
            [new Choice("Weiter", "event1_2")])
    } else {
        e.show(text + " Beschwörungen flüsternd setzt du den Mechanismus kinetischer Energie aus, aber du hast Probleme damit, den Energiefluss gleichmäßig zu halten. Du könntest mehr Kraft verwenden, um dies zu kompensieren, aber das könnte den Mechanismus zerstören.",
        [new Choice("Egal.", "event1_1_3_2_1"),
        new Choice("Ich überlege mir lieber etwas anderes.", "event1_1_3a")])
    }
}

var event1_1_3_2_1 = function() {
    state.profile += 5
    e.show("Mit erschreckend lautem kreischen verbiegt sich das Schloss und reißt ein Loch in die Tür. Fluchend trittst du ein.",
    [new Choice("Weiter", "event1_2")])
}

var event1_1_3_3 = function() {
    state.delay += 30
    e.show("Du wartest. Und wartest. Ein mulmiges Gefühl breitet sich in dir aus und gerade, als du dir etwas anderes überlegen willst, erfüllen die Lichter eines Wagens den Hof. Ein Mann mitte Zwanzig steigt aus und geht zur Hintertür. Gemäßigten Schrittes gehst du ebenfalls dorthin. Er wirft dir einen gelangweilten Blick zu und nickt kurz. Dann tritt er ein und du folgst ihm. Endlich bist du drinnen.",
    [new Choice("Weiter", "event1_2")])
}

var event1_1_4 = function() {
    state.delay += 10
    state.stash = 1
    e.show("Du hälst dich abseits der Menge und beginnst die Formel. Stück für Stück rückt die materielle Welt mehr in den Hintergrund, während ihre Farben verblassen und ihre Laute verstummen. Im Gegenzug nimmt ein gleichmäßiges… Geräusch… vielleicht ein Rauschen… zu und neue Muster erscheinen vor deinem Auge. Als deine Sinne zwischen beiden Welten stehen, hörst du auf und siehst dich erneut um. Obwohl es dir schwer fällt, dich zu orientieren, kannst du nach kurzer Zeit das Gebäude ausfinding machen. Inmitten der Wirbel, die in der realen Welt den zweiten Stock ausmachen, siehst du dicht beieinander zwei magische Spuren, die auf verzauberte Gegenstände hinweisen. Gibt es vielleicht zwei Verstecke?<br/><br/>Zu deiner Beruhigung erkennst du jedoch keine weiteren magischen Spuren. Der MEK-Beamte ist also noch nicht eingetroffen und vermutlich gibt es auch keine magischen Überraschungen für dich.",
    [new Choice("Weiter", "event1_1_0")])
}

var event1_2 = function() {
    let text = 'Das Treppenhaus ist gut beleuchtet und mit einem Fahrstuhl ausgestattet. Den Hinweisschildern, die an der pastellblauen Wand befestigt sind, kannst du entnehmen, dass es einschließlich des Stockwerks vier Etagen gibt. Unglücklicherweise gibt es keine weiteren Hinweise. Einige dunklere Stellen an der Wand lassen darauf schließen, dass die entsprechenden Schilder abgenommen wurden. Zwar kannst du die Etage schnell wechseln, aber da das Gebäude ziemlich lang ist, wird es wohl länger dauern, das jeweilige Stockwerk zu durchsuchen.<br/><div class="pic"><div class="pic-stairs"></div></div><br/>Wo möchtest du anfangen?'
    if (state.event1_2_read)
        text = "Zurück im Treppenhaus stehst du erneut vor der Wahl eines Stockwerkes. Wo möchtest du suchen?"
    state.event1_2_read = 1
    e.show(text,
    [new Choice("Im Erdgeschoß.", "event1_2_1"),
    new Choice("Im ersten Stock.", "event1_2_2"),
    new Choice("Im zweiten Stock.", "event1_2_3"),
    new Choice("Im dritten Stock.", "event1_2_4")])
}

var event1_2_1 = function() {
    state.delay += 10
    e.show("Das Erdgeschoß scheint schon bessere Zeiten gesehen zu haben. Das pastelblau hat sich zu einem pastelgrau gefärbt. Zusätzlich steht ein großer Kaktus auf dem Flur. Allerdings findest du keine Hinweise auf Praxis oder Polizei.",
    [new Choice("Weiter", "event1_2")])
}

var event1_2_2 = function() {
    state.delay += 10
    e.show("Niemand begegnet dir im ersten Stock. Die laute Musik, die hinter einer der Türen hervordringt, gibt dir zumindest das Gefühl, nicht allein zu sein. Trotzdem bist du hier falsch.",
    [new Choice("Weiter", "event1_2")])
}

var event1_2_3 = function() {
    state.delay += 10
    e.show("Im zweiten Stock riecht es leicht chemisch und das pastelblau der Wände scheint etwas kräftiger zu sein. Als du um eine Ecke biegst, siehst du, dass eine der Türen offen ist und ein Polizist davor steht. Bingo.",
    [new Choice("Weiter", "event1_3")])
}

var event1_2_4 = function() {
    state.delay += 10
    e.show("Im dritten Stock klebt der Boden und ein strenger Zitronengeruch hängt in der Luft. Ziemlich banal und definitiv der falsche Stock.",
    [new Choice("Weiter", "event1_2")])
}

var event1_3 = function() {
    e.show("Der Polizist schaut auf sein Handy und scheint ein Gähnen zu unterdrücken. Ansonsten ist es ruhig. Der Rest des Flurs wirkt verlassen. Vermutlich sind die anderen Beamten in der Praxis.",
    [new Choice("Ich lausche. Vielleicht spricht er gleich noch mit einigen Kollegen.", "event1_3_1"),
    new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
    new Choice("Ich spreche vorher einen Schlafzauber auf den Beamten.", "event1_3_3"),
    new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4"),
    ])
}

var event1_3_1 = function() {
    state.delay += 10
    e.show("Angestrengt spitzt du die Ohren. Du hörst ein Grunzen von dem Beamten. Was auch immer er liest, es scheint ihm nicht zu Gefallen.",
    [new Choice("Ich warte weiter.", "event1_3_1_1"),
    new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
    new Choice("Ich spreche einen Schlafzauber auf den Beamten.", "event1_3_3"),
    new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4")])
}

var event1_3_1_1 = function() {
    state.delay += 10
    e.show("Der Polizist summt ein Lied. Es kommt dir bekannt vor. Lief das nicht neulich im Radio? Egal, du hast genug Zeit verschwendet.",
    [new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
    new Choice("Ich spreche einen Schlafzauber auf den Beamten.", "event1_3_3"),
    new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4")])
}

var event1_3_2 = function() {
    e.show("Leise murmelst du den Zauberspruch, der deinen Körper lichtdurchlässig werden lässt. Dann schleichst du dich leise – man kann dich schließlich immer noch hören – an dem Beamten vorbei in die Praxis.",
    [new Choice("Weiter", "event1_4")])
}

var event1_3_3 = function() {
    state.delay += 5
    if(state.lore.value >= 20) {
        state.takedown += 1
        e.show("Mit einem leisen Flüstern benebelst du den Geist des Polizisten, der sein Gähnen nicht länger unterdrücken kann, anfängt zu blinzeln, und dann in sich zusammen sackt. Anschließend wirkst du den Tarnzauber und schleichst in die Praxis.",
        [new Choice("Weiter", "event1_4")])
    } else {
        e.show("Du zerbrichst dir den Kopf, aber dir fällt die richtige Formel nicht ein. Es muss wohl eine andere Möglichkeit her.",
        [new Choice("Ich lausche. Vielleicht spricht er gleich noch mit einigen Kollegen.", "event1_3_1"),
        new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
        new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4")])
    }
}

var event1_3_4 = function() {
    state.profile += 5
    state.takedown += 1
    e.show("Da der Polizist eh schon müde und aufmerksam ist, fällt es dir leicht, seinen Kreislauf direkt anzugreifen. Als du die magischen Worte aussprichst, stockt sein Atem kurz, und er kippt bewusstlos zur Seite. Anschließend sprichst du einen Tarnzauber und trittst ein.",
    [new Choice("Weiter", "event1_4")])
}

var event1_4 = function() {
    e.show("Der Empfangsraum der Praxis ist hell erleuchtet. Vor den steril wirkenden weißen Wänden sind die beiden Polizisten in ihren blauen Uniformen kaum zu übersehen. Nicht dass der Empfangsraum besonders groß wäre. Glücklicherweise sitzt einer von ihnen gelangweilt auf einem Stuhl und ließt eine Zeitschrift, während der andere mürrisch an dem Empfangstresen lehnt. Hinter den beiden erstreckt sich ein Flur, der zu den Untersuchungszimmern und Büros führt. Mit deiner Tarnung gelingt es dir problemlos, an den beiden vorbeizuschleichen. Als du im Dunkel des Flur stehst, zögerst du einen Augenblick. Da die Türen nur angelehnt sind, sollte es kein Problem sein, die Büros unbemerkt zu durchstöbern. Andererseits könntest du die Dunkelheit auch dazu nutzen, einen Zauber vorzubereiten, der die Beamten außer Gefecht setzt.",
    [new Choice("Ich kümmere mich um die beiden.", "event1_4_1"),
    new Choice("Ich warte einen Moment. Vielleicht klärt sich die Situation ja von ganz allein.", "event1_4_2"),
    new Choice("Die Dunkelheit sollte ausreichen.", "event1_5")])
}

var event1_4_1 = function() {
    let text = "Normalerweise ist es sehr schwierig, zwei Ziele gleichzeitig mit einem Zauber zu belegen, insbesondere, wenn man bereits einen Zauber aufrecht erhält, aber in der Dunkelheit kannst du die Tarnung fallen lassen und dir die Zeit nehmen, einen komplexeren Zauber zu weben."
    if(state.lore.value <= 10) {
        text += " Dummerweise wollen dir die Worte für den Schlafzauber nicht einfallen, doch du könntest die beiden auch mit einem Schockzauber belegen. Weniger elegant, aber zumindest wären die beiden dann außer Gefecht."
        e.show(text,
        [new Choice("Dann doch lieber gleich in das Büro.", "event1_5"),
        new Choice("Mir ist wohler, wenn mich niemand überraschen kann.", "event1_4_1_2")])
    } else {
        text += " Leise flüsternd bündelst du deine Kräfte, und als du sie freigibst, schlägt eine Welle der Müdigkeit über den Polizisten zusammen und sie schlafen binnen Sekunden ein."
        state.delay += 5
        state.takedown += 2
        e.show(text, [new Choice("Weiter", "event1_5")])
    }
}

var event1_4_1_2 = function() {
    state.delay += 5
    state.takedown += 2
    state.profile += 5
    e.show("Leise flüsternd bündelst du deine Kräfte, und als du sie freigibst, kippen die Polizisten wie vom Schlag getroffen zur Seite.", 
    [new Choice("Weiter", "event1_5")])
}

var event1_4_2 = function() {
    state.delay += 5
    e.show("Konzentriert lauschst du eine Weile. Der stehende Polizist fängt an, eine Melodie zu summen, und sein Partner ignoriert ihn.", 
    [new Choice("Genug davon. Ich schleiche mich in das Büro.", "event1_5"),
    new Choice("Erst setzte ich die beiden außer Gefecht.", "event1_4_1_2")])
}

var event1_5 = function() {
    let text = "Leise betrittst du das Büro und schließt die Tür vorsichtig. Das Licht einer grellen Reklametafel von der gegenüberliegenden Straßenseite ermöglicht dir einen guten Überblick. Neben diversen Figurinen von Waldtieren, welche Dekorativ im Raum stehen, erkennst du einen Schreibtisch samt Computer, zwei Bücherregale sowie an der Wand hinter dem Schreibtisch einen Tresor. Dort dürfte sich die Formel befinden, sofern sie wirklich existiert."
    if (state.stash === 0 && state.awareness.value >= 30) {
        state.stash = 1
        text += " Dein Blick bleibt auf den Büchern haften, die in verblüffend gutem – um nicht zu sagen ungenutztem – Zustand befinden. Es kommt dir unwahrscheinlich vor, dass jemand dort einen Hinweis auf den Tresor versteckt. Aber sie sehen einfach zu neu aus, insbesondere das Buch in der Mitte, welches anscheinend noch nie aufgeschlagen wurde. Aber du hast das Gefühl, dass sich dort etwas anderes finden lässt, sofern du dir die Zeit nimmst. Kurzentschlossen steckst du das Buch ein."
    } else if (state.stash >= 1) {
        text += " Durch deinen Blick in das magische Spektrum weisst du, dass sich hier an zwei Orten magische Spuren finden lassen. Eine davon hat ihren Ursprung garantiert im Safe, die zweite müsste sich ganz in der Nähe befinden. Du siehst dich kurz um, kannst aber nichts entdecken, was deine Aufmerksamkeit bestätigen würde. Du willst gerade aufgeben, als dein Blick auf das Bücherregal fällt. Es ist gefüllt mit medizinischen Werken, die verblüffend unbenutzt aussehen. Eines sieht sogar aus, als wäre es frisch gedruckt worden. Du blätterst kurz darin, aber da dies jedoch nicht der beste Ort zum Lesen ist, steckst du das Buch kurzentschlossen ein."
    }
    e.show(text,
    [new Choice("Ich werfe einen ausführlichen Blick in das magische Spektrum, auch wenn das Zeit kostet.", "event1_5_1"),
    new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
    new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
    new Choice("Diese Holzfigürchen wirken irgendwie verdächtig. Möglicherweise bergen sie einen Hinweis?", "event1_5_4"),
    new Choice("Ich untersuche das Bücherregal.", "event1_5_5")])
}

var event1_5_1 = function() {
    state.delay += 10
    state.stash = 1
    e.show("Während du leise die Formel musterst, rückt die materielle Welt mit ihren Farben und Geräuschen in den Hintergrund, während neue Sinneseindrücke aus der magischen Welt sich mit ihnen überschneiden. Ein gleichmäßiges… Rauschen… scheint dich wie eine Brise zu erfassen und fortzuziehen, doch du unterbrichst den Zauber an der Grenze zwischen beiden Welten, so dass du dich einigermaßen orientieren kannst.\nZwei klar erkennbare Wirbel aus magischer Energie breiten sich klar erkennbar vor dir aus. Einer geht von einem aktiven Zauber aus, der anscheinend in einem der Bücher eingebettet ist und dessen Form verzerrt. Interessant. Was auch immer es ist, muss wertvoll sein, weshalb du das „Buch” einsteckst.\nDer zweite Wirbel ist schwächer zu erkennen, da dessen Ursprung durch den Tresor verborgen ist. Zudem scheint von ihm kein aktive Magie auszugehen. Höchstwahrscheinlich handelt es sich um eine Art magisches Werkzeug. Was bedeutet, dass sich das Heilmittel – sofern es existiert – dort befindet.",
    [new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
    new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
    new Choice("Diese Holzfigürchen wirken irgendwie verdächtig. Möglicherweise bergen sie einen Hinweis?", "event1_5_4"),
    new Choice("Ich untersuche das Bücherregal.", "event1_5_5")])
}

var event1_5_2 = function() {
    state.profile += 15
    e.show("Das Beeinflussen einfacher Kräfte wie Wärme und Bewegung gehört zu den simpelsten magischen Anwendungen. Es kostet dich kaum Mühe, mit einigen Worten genügend Kraft zu beschwören, die anderen Menschen nur durch Hydraulik verfügbar ist.\nVorsichtig, damit dir nicht sofort der gesamte Tresor um die Ohren fliegt, erhöhst du den Druck, bis sich die Tresortür mit einem gequältem Knirschen öffnet.\nDu kannst ein Grinsen nicht ganz unterdrücken, als du dir den Tresorinhalt näher anschaust. Neben einigen handschriftlichen Aufzeichnungen findest du einen etwa 10 mal 3 Zentimeter langen, bläulich-durchsichtigen Kristall, bei dessen Berührung du ein schwaches magisches Echo verspürst. Wenn es hier etwas von Interesse gibt, dann ist es mit Sicherheit dieser Kristall.",
    [new Choice("Es wird Zeit zu gehen.", "event1_6")])
}

var event1_5_3 = function() {
    state.delay += 10
    let text = "Der Schreibtisch enthält vor allem typische Büroartikel sowie eine verblüffend große Auswahl an Kaugummisorten (Pfefferminz, Eukalyptus, Orange, Erdbeer und Grapefruit). Zusätzlich findest du eine Liste mit durchgestrichenen Namen. Möglicherweise von Patienten? Du erschrickst, als dich plötzlich der Monitor anstrahlt, aber glücklicherweise erwacht er nur aus dem Ruhemodus. Du musst gegen die Maus gekommen sein. Dann zögerst du. Könnte es so einfach sein?"
    if(state.awareness.value >= 30 || state.mundane >= 30) {
        text += "Deine Gedanken überschlagen sich. Könnte die Liste… nein, niemand der sein Passwort regelmäßig ändert, würde die Liste so herumliegen lassen. Du siehst dich um, guckst in der Schublade, unter dem Mauspad, unter der Tastatur… Bingo! Du loggst dich ein und wühlst dich durch die Dateien. Doch dort sind mehr als dir lieb ist. Fast unmöglich, die – DA! ”Tresor.txt”!\n\nDu kannst ein Grinsen nicht ganz unterdrücken, als du dir den Tresorinhalt näher anschaust. Neben einigen handschriftlichen Aufzeichnungen findest du einen etwa 10 mal 3 Zentimeter langen, bläulich-durchsichtigen Kristall, bei dessen Berührung du ein schwaches magisches Echo verspürst. Wenn es hier etwas von Interesse gibt, dann ist es mit Sicherheit dieser Kristall."
    } else {
        state.delay += 10
        text += "Deine Gedanken überschlagen sich. Könnte die Liste… nun, einen Versuch ist es wert. Schließlich sind es nur ein paar Namen. Du probierst sie durch, doch leider hast du keinen Erfolg.\nDann kommt dir eine andere Idee. Möglicherweise gibt es hier irgendwo einen Hinweis? Du siehst dich um, guckst in der Schublade, unter dem Mauspad, unter der Tastatur… Bingo! Du loggst dich ein und wühlst dich durch die Dateien. Doch dort sind mehr als dir lieb ist. Wirklich viele. Nach ein paar Minuten beschließt du, es doch lieber – DA! ”Tresor.txt”!\n\nDu kannst ein Grinsen nicht ganz unterdrücken, als du dir den Tresorinhalt näher anschaust. Neben einigen handschriftlichen Aufzeichnungen findest du einen etwa 10 mal 3 Zentimeter langen, bläulich-durchsichtigen Kristall, bei dessen Berührung du ein schwaches magisches Echo verspürst. Wenn es hier etwas von Interesse gibt, dann ist es mit Sicherheit dieser Kristall."
    }
    e.show(text,
    [new Choice("Es wird Zeit zu gehen.", "event1_6")])
}

var event1_5_4 = function() {
    state.delay += 5
    e.show("Es handelt sich um kleine, nussbraune Nachbildungen von Tieren, insbesondere Waldtieren. Hasen sind überraschend häufig vertreten, aber auch Wildschweine erfreuen sich gewisser Beliebtheit. Du untersuchst sie von allen Seiten, aber falls sie einen Hinweis verbergen, entgeht er dir.",
    [new Choice("Ich werfe einen ausführlichen Blick in das magische Spektrum, auch wenn das Zeit kostet.", "event1_5_1"),
    new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
    new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
    new Choice("Ich untersuche das Bücherregal.", "event1_5_5")])
}

var event1_5_5 = function() {
    state.delay += 5
    e.show("Medizinische Skizzen, Tabellen und Nachschlagewerke. Du schlägst einige auf Geratewohl auf. Anscheinend steht die Bezeichnung A00.0 für Cholera. Nach einigen ähnlichen Entdeckungen gibst du auf.",
    [new Choice("Ich werfe einen ausführlichen Blick in das magische Spektrum, auch wenn das Zeit kostet.", "event1_5_1"),
    new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
    new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
    new Choice("Diese Holzfigürchen wirken irgendwie verdächtig. Möglicherweise bergen sie einen Hinweis?", "event1_5_4")])
}

var event1_6 = function() {
    let text = "Ein Kribbeln in deiner Hand ist die einzige Warnung, die du kriegst. Plötzlich löst der Kristall einen magischen Impuls aus, der sich wie ein Donnerschlag durch das magische Spektrum zieht. Du fluchst, denn obwohl kein gewöhnlicher Mensch dies bemerken kann, hast du ein für jeden Magieanwender leicht erkennbares Signalfeuer gezündet. Falls der magische Spezialist der Polizei noch nicht eingetroffen sein sollte, wird er nun mit höchster Geschwindigkeit herbei eilen.<br/><br/>"
    let tackeled = false
    if(state.takedown >= 3) {
        text += "Schnell eilst du aus dem Büro, vorbei an den auf dem Boden liegenden Polizisten, welche dich glücklicherweise nicht bei deiner überstürzten Flucht behindern können."
    } else if(state.takedown <= 0) {
        text += "Du beschwörst deine magische Tarnung erneut und schleichst leise durch den Flur, denn schließlich möchtest du keinen der Polizisten alarmieren. Als du bemerkst, dass einer der Polizisten am Türrahmen lehnt, unterdrückst du einen weiteren Fluch, und zwingst dich, tief einzuatmen. Der Polizist wirkt noch immer gelangweilt, anscheinend blockiert er nicht absichtlich deinen Fluchtweg. Als er sein Gewicht verlagert, bietet sich eine günstige Gelegenheit, ohne Schwierigkeiten die Praxis hinter dir zu lassen. Mit angehaltenem Atem schleichst du an ihm vorbei, als ihn plötzlich einer seiner Kollegen anspricht und er sich unerwartet bewegt…"
        tackeled = true
    } else {
        text += "Du beschwörst deine magische Tarnung erneut und schleichst leise durch den Flur, denn schließlich hast du nicht alle Polizisten außer Gefecht gesetzt. Als du bemerkst, dass einer der Polizisten am Türrahmen lehnt, unterdrückst du einen weiteren Fluch, und zwingst dich, tief einzuatmen. Der Polizist wirkt noch immer gelangweilt, anscheinend blockiert er nicht absichtlich deinen Fluchtweg. Als er sein Gewicht verlagert, bietet sich eine günstige Gelegenheit, ohne Schwierigkeiten die Praxis hinter dir zu lassen. Mit angehaltenem Atem schleichst du an ihm vorbei, als er sich unerwartet bewegt…"
        tackeled = true
    }
    if (tackeled) {
        let value = e.getRnd(0, 5) 
            + state.takedown 
            + (state.mundane.value >= 30 ? 1 : 0)
        if(value >= 3) {
            text += "so dass du ihm nur mit Mühe und Not ausweichen kannst. Mit pochendem Herzen verlässt du die Praxis."
        } else {
            state.profile += 5
            text += "und er deine Schulter berührt. Erschrocken zuckt er zusammen, und du siehst du Verwirrung auf seinem Gesicht, als er vergeblich versucht, eine sinnvolle Erklärung zu finden."
        }
    }
    e.show(text,
    [new Choice("Weiter", "event1_7")])
}

var event1_7 = function() {
    let text = "Du gehst den Weg zurück, den du gekommen bist, doch vor dem Haus hat sich die Situation verändert.<br/><br/>Die Schaulustigen haben ihre gesamte Aufmerksamkeit auf einen Ring aus Polizisten gerichtet, in deren Zentrum ein Mann in Uniform scheinbar ins Leere starrt und vor sich hin murmelt. Schlagartig werden dir zwei Dinge klar: "
    if(state.delay >= 80) {
        text += "Der Magier des MEK ist eingetroffen und hat bereits begonnen, das magische Spektrum zu erforschen. Wärst du doch bloß schneller gewesen. Sofort lässt du deine Tarnung fallen, denn ein aktiver Zauber ist so ziemlich das Auffälligste, was du im Moment tun könntest. Gleichzeitig siehst du dich hektisch nach einer Fluchtmöglichkeit um, denn es wird nicht lange dauern, bis der Beamte deinen Kristall bemerkt.<br/>Drei Möglichkeiten bieten sich dir an. Nahe der Menschenmenge steht ein Taxi am Straßenrand – vermutlich nicht ganz zufällig, denn der Fahrer am Wagen und verfolgt das Ganze mit Interesse. Zugleich biegt ein Linienbus gerade in die Straße und wird auf der gegenüberliegenden Straßenseite halten. Sofern du rechtzeitig über die stark befahrene Straße kommst, solltest du kein Problem damit haben, schnell von hier zu verschwinden. Alternativ könntest du natürlich auch einfach laufen, falls du genug Ausdauer hast. Und falls der Magier nicht allzu schnell ist."
    } else {
        text += "Der Magier des MEK ist eingetroffen, und er wird gleich damit beginnen, das magische Spektrum zu erforschen. Sofort lässt du deine Tarnung fallen, denn ein aktiver Zauber ist so ziemlich das Auffälligste, was du im Moment tun könntest. Gleichzeitig siehst du dich hektisch nach einer Fluchtmöglichkeit um, denn es wird nicht lange dauern, bis der Beamte deinen Kristall bemerkt.<br/>Drei Möglichkeiten bieten sich dir an. Nahe der Menschenmenge steht ein Taxi am Straßenrand – vermutlich nicht ganz zufällig, denn der Fahrer am Wagen und verfolgt das Ganze mit Interesse. Zugleich biegt ein Linienbus gerade in die Straße und wird auf der gegenüberliegenden Straßenseite halten. Sofern du rechtzeitig über die stark befahrene Straße kommst, solltest du kein Problem damit haben, schnell von hier zu verschwinden. Alternativ könntest du natürlich auch einfach laufen, falls du genug Ausdauer hast. Und falls der Magier nicht allzu schnell ist."
    }
    e.show(text,
    [new Choice("Ich versuche den Taxifahrer zu überreden", "event1_7_1"),
    new Choice("Ich haste über die Straße", "event1_7_2"),
    new Choice("Ich sprinte den Bürgersteig entlang", "event1_7_3")])
}

var event1_7_1 = function() {
    e.show("Du eilst auf den Taxifahrer zu, welcher sich nur widerwillig vom Spektakel löst. Offensichtlich war es nicht beruflicher Eifer, der ihn dazu bewogen hat, gerade hier zu halten. Du wirst dir etwas Gutes einfallen lassen müssen, damit er sich schneller bewegt.",
    [new Choice("„Ich muss unbedingt zum Flughafen, mein Flug geht in Kürze!”", "event1_7_1_1"),
    new Choice("„Ich muss unbedingt zum Flughafen, mein Flug geht in Kürze! Bitte schnell, ich lege auch einen Hunderter drauf!”", "event1_7_1_2"),
    new Choice("„Entschuldigung, sind sie noch frei? Ich habe es eilig.”", "event1_7_1_3")])
}

var event1_7_1_1 = function() {
    if(state.delay >= 80) {
        event1_7_1_1a(45) // Will call event1_8
    } else {
        event1_7_1_1a(30) // Will call event1_8
    }
}

var event1_7_1_1a = function(successValue) {
    let text = ''
    if ((e.getRnd(0, 59) + state.mundane.value) >= successValue) {
        text += "Du scheinst die magischen Worte gefunden zu haben. Wenige Sekunden später sitzt du auf dem Beifahrersitz und hast dich noch nicht einmal angeschnallt, als der Wagen schon davonschießt. Mit Erleichterung beobachtest du, wie der Ort des Geschehens im Rückspiegel verschwindet, und atmest entspannt aus."
    } else {
        state.profile += 15
        text += "Der Taxifahrer wirft dir einen desinteressierten Blick zu: „Jeder hat es eilig. Und dann plötzlich ist das Leben vorbei, und man hat nichts davon gehabt.” Als er deinen gehetzten Blick bemerkt, zuckt er mit den Schultern und deutet auf die Beifahrertür. Sekunden später sitzt du auf dem Beifahrersitz, doch anscheinend lässt sich dein Fahrer davon nicht aus der Ruhe bringen. Du bist dir nicht sicher, ob er sich so sehr für das Geschehen hier interessiert, oder ob er sein Handeln absichtlich hinauszögert, doch es vergeht eine gefühlte Ewigkeit, bis sich das Taxi in Bewegung setzt. Du wirfst einen Blick durch die Heckscheibe, und du bist dir fast sicher, dass du hektische Bewegungen ausmachen kannst. Du versuchst, dir mögliche Gründe einfallen zu lassen, warum der Magier nicht zumindest einen groben Blick auf deine Aura werfen konnte, aber wirklich überzeugen kannst du dich nicht."
    }
    e.show(text,
    [new Choice("Weiter", "event1_8")])
}

var event1_7_1_2 = function() {
    state.money -= 100
    state.profile += 5
    e.show("Du scheinst die magischen Worte gefunden zu haben. Wenige Sekunden später sitzt du auf dem Beifahrersitz und hast dich noch nicht einmal angeschnallt, als der Wagen schon davonschießt. Mit Erleichterung beobachtest du, wie der Ort des Geschehens im Rückspiegel verschwindet, und atmest entspannt aus. Billig war es zwar nicht, aber du bezweifelst, dass es eine schnellere Variante gab.",
    [new Choice("Weiter", "event1_8")])
}

var event1_7_1_3 = function() {
    if(state.delay >= 80) {
        event1_7_1_1a(60) // Will call event1_8
    } else {
        event1_7_1_1a(50) // Will call event1_8
    }
}

var event1_7_2 = function() {
    let text = ''
    let difficulty = 30
    if(state.delay >= 80) {
        difficulty = 55
        text += "Da der Bus schon fast bei der Haltestelle ist, bleibt dir keine Zeit, um eine günstige Lücke zwischen den vorbeifahrenden Wagen abzupassen. "
    } else {
        text += "Da der Bus in Kürze bei der Haltestelle ankommen wird, bleibt dir nur wenig Zeit, um eine günstige Lücke zwischen den vorbeifahrenden Wagen abzupassen. "
    }
    text += "Als sich eine halbwegs passable Lücke anzubieten scheint, rennst du quer über die Straße. Wütendes Hupen schallt dir von rechts entgegen, als du versuchst, zwischen den unterschiedlich schnellen Fahrzeugen hindurchzuhuschen.<br/><br/>"
    if((e.getRnd(0, 59) + state.mundane.value) >= difficulty) { // (random 0-59, each mundane +1 value, success if result >=55)
        text += "Du bist fast über die Straße, als sich plötzlich ein roter Polo an einem LKW vorbeischiebt, und dann geht alles sehr schnell. Ein erschrockenes Gesicht, quietschende Reifen, Motorhaube, Sprung zur Seite, und plötzlich stolperst du unverletzt auf die andere Straßenseite. Das Hupen der Fahrer nimmt überhand, aber du beschließt, besser nicht zurückzublicken, und rennst Richtung Haltestelle. Als du in den Bus einsteigst, sieht dich der Busfahrer kopfschüttelnd an. Offensichtlich hält der dich für einen absoluten Vollidioten. Mit glühendem Gesicht setzt du dich und ignorierst die übrigen Mitfahrer. Immerhin bist du schnell entkommen."
    } else {
        state.damage += 1
        text += "Du bist fast über die Straße, als sich plötzlich ein roter Polo an einem LKW vorbeischiebt, und dann geht alles sehr schnell. Ein erschrockenes Gesicht, quietschende Reifen, Motorhaube, und ein Zwei-Zentner-Hammer, der dich auf den Asphalt schmettert. Schmerzen. Übelkeit.<br/>Als du wieder klar denken kannst  – anscheinend sind nur wenige Sekunden vergangen – siehst du, dass die Fahrerin mit besorgtem Gesicht aussteigt. Gleichzeitig bemerkst du, dass der Bus ebenfalls gehalten hat, und du humpelst mit zusammengebissenen Zähnen darauf zu. Der Schmerz in deinem linken Knie lässt dich kaum Luft holen, und die Übelkeit, die deine Kopfschmerzen begleitet, ist ebenfalls besorgniserregend. Der Busfahrer starrt dich fassungslos an, als ihm klar wird, dass du gerade dein Leben riskiert hast, um den Bus nicht zu verpassen.<br/>Du zahlst dein Ticket und setzt dich zur längsten Busfahrt deines Lebens."
    }
    e.show(text,
    [new Choice("Weiter", "event1_8")])
}

var event1_7_3 = function() {
    let text = "Du verfällst in einen schnellen Dauerlauf und zwingst dich zu einer gleichmäßigen Atmung, doch schon nach kurzer Zeit wird dein Atem schneller. Getrieben von der Angst vor einer möglichen Entdeckung, versuchst du, eine Balance zwischen dem Brennen in deiner Lunge und in deinen Beinen zu finden."
    let difficulty = 30
    if(state.delay >= 80) {
        difficulty = 55
    }
    if((e.getRnd(0, 59) + state.mundane.value) >= difficulty) { // (random 0-59, each mundane +1 value, success if result >=55 [if delay>=80] /30 [if else] )
        text += "Vier Schritte einatmen, vier Schritte ausatmen. Gewicht nach vorne beugen. Weiterlaufen. Weiterlaufen.<br/>Weiterlaufen.<br/><br/>Du bist dir nicht ganz sicher, wie du es schaffst, aber als du mehrere Straßen weiter keuchend zum Stehen kommst, kannst du nirgends die Polizei erkennen. Mit einem Anflug von Stolz stellst du fest, dass du der Polizei im wahrsten Sinne des Wortes davon gerannt bist."
    } else {
        e.state.profile += 15
        text += "Weiterlaufen. Weiterlaufen. Weiter. Weeeiiiiter…<br/>Mit einem frustrierten Keuchen hältst du an, als deine brennende Lunge nach Luft schreit und du mit panischem Blick  feststellen musst, dass du nicht weit genug entfernt hast. Die Furcht gibt dir die Kraft, das Stechen in deiner Seite halbwegs zu ignorieren, und du hastest weiter.<br/>Als du einige Straßen später keine Polizei bemerkst, stellst du erleichtert fest, dass du scheinbar doch irgendwie entkommen bist. Aber wenn du ganz ehrlich zu dir bist, ist es fast unmöglich, dass du dich schnell genug entfernen konntest, ohne zumindest im magischen Spektrum bemerkt zu werden…"
    }
    e.show(text,
    [new Choice("Weiter", "event1_8")])
}

var event1_8 = function() {
    let text = ''
    if(state.damage >= 1) {
        text += "Kurz vor der Haustür drohen dich die Schmerzen zu überwältigen. Du bist dir nicht sicher, woher du die Willenskraft nimmst, aber du quälst dich an deiner noch immer schlafenden Mutter und ihren Whiskeyflaschen vorbei auf dein Zimmer, ohne laut aufzuschreien. Noch bevor du dich auf das Bett fallen lässt, beginnst du mit dem Heilzauber. Glücklicherweise ist Heilung eine der ursprünglichsten und damit simpelsten Formen der Magie. Nach einigen Minuten nehmen die Schmerzen ab, doch du  benötigst noch zwei weitere Stunden, bevor du dich wieder schmerzfrei bewegen kannst. Erst dann bist du bereit, deine Beute näher zu betrachten."
    } else {
        text += "Zu Hause angekommen, öffnest du leise die Haustür und schleichst dich ins Wohnzimmer. Deine Mutter liegt noch immer von Whiskeyflaschen umgeben auf dem Sofa, während im Fernsehen ein muskelbepackter Darsteller eine Rede hält. Du begibst dich in dein Zimmer, um deine Beute zu begutachen."
    }
    e.show(text,
    [new Choice("Weiter", "event1_8_1")])
}

var event1_8_1 = function() {
    e.show("Der bläuliche Kristall ist gut zehn Zentimeter lang. Viel interessanter ist jedoch das leichte magische Echo, dass du immer noch verspürst, wenn du ihn berührst. Wenn es sich bei diesem angeblichen Arzt tatsächlich um einen Magier gehandelt hat – und in Anbetracht des Kristalls ist das mehr als wahrscheinlich – und er seine Kräfte dazu genutzt hat, Andere zu heilen, dann wird dieser Kristall höchstwahrscheinlich das Werkzeug dafür gewesen sein. Es bleibt nur zu hoffen, dass du seine Geheimnisse entschlüsseln kannst.<br/>Doch dies ist eine Aufgabe für einen anderen Tag. Du lehnst dich zurück, schließt die Augen, und lässt die Ereignisse noch einmal vor deinen Augen Revue passieren. Du hast vermutlich gegen ettliche Gesetze verstoßen, als du mittels illegaler Magieanwendung der Polizei Beweismittel gestohlen hast.",
    [new Choice("Und ich würde es wieder tun. Ich konnte doch nicht die einzige Möglichkeit verstreichen lassen, ein Heilmittel gegen Krebs zu finden.", "event1_8_2"),
    new Choice("Und ich würde es wieder tun. Die allgegenwärtige Furcht vor Magie lähmt die Gesellschaft und das System, aber ich werde meine Magie sinnvoll einsetzen.", "event1_8_2"),
    new Choice("Und ich würde es wieder tun. Was hat die Gesellschaft jemals für mich getan?", "event1_8_2"),
    new Choice("Und ich würde es wieder tun. Vermutlich. Ich schätze, ich hätte im Nachhinein vielleicht anders gehandelt.", "event1_8_2"),
    new Choice("Es war ein Fehler. Ich habe zu viel riskiert, und ich bereue es.", "event1_8_2")])
}

var event1_8_2 = function() {
    let text = ''
    if(state.stash >= 1) {
        text += "Dann fällt dir ein, dass du noch das Buch mitgenommen hast. Nun, da du genügend Zeit hast, wirfst du einen genaueren Blick darauf. Im magischen Spektrum erkennst du ein unnatürliches Muster im Kräfteverlauf. Du zögerst kurz, aber letzten Endes ist es unwahrscheinlich, dass sich hier etwas gefährliches verbirgt, und so passt du das Muster wieder an. Plötzlich lösen sich einige Buchseiten und nehmen eine grüne Farbe an. Geld! Anscheinend hat der gute Doktor hier seinen Notgroschen verschanzt. Eigentlich solltest du enttäuscht sein, keine magischen Geheimnisse entdeckt zu haben, aber du musst zugeben, dass du das Geld gut gebrauchen kannst.<br/><br/>"
    }
    text += "Als du ein Gähnen nicht mehr unterdrücken kannst, beschließt du, nur noch schnell Zähne zu putzen und dich dann schlafen zu legen. Du sammelst nur noch kurz Kräfte, aber in einer Minute wirst du aufstehen…"
    e.show(text,
    [new Choice("Weiter", "event1_8_3")])
}

var event1_8_3 = function() {
    let text = "Als du aufwachst, ist es bereits Mittag. Ein Teil von dir möchte liegenbleiben, aber die Stimme der Vernunft drängt dich, herauszufinden, was in den Medien berichtet wird.<br/><br/>Und ob die Polizei bereits vor der Haustür wartet.<br/><br/>Wenn du ehrlich zu dir bist, weisst du nicht genau, ob und wie viele Spuren du hinterlassen hast.<br/><br/>Du gehst die Treppe hinunter und ins Wohnzimmer, wo deine Mutter noch immer sitzt. Die Toastbrotkrümel deuten darauf hin, dass sie sich seit gestern bewegt hat, aber ansonsten hat sich wenig geändert. Inklusive ihres Tonfalls.<br/>„Na, haben wir endlich ausgeschlafen? Mir ist schleierhaft, wie man den ganzen Tag im Bett verbringen kann.”<br/><br/>Du ignorierst sie für den Moment, denn die Nachrichten berichten gerade über den gestrigen Vorfall.<br/><br/>"
    if(state.profile >= 30) {
        state.wantedlevel += 2
        text += "„Die Ermittlungen des MEK sind noch nicht abgeschlossen. Ursache dafür ist neben der unklaren Beweislage vor allem eine Intervention durch Dritte. Beamte haben zahlreiche Hinweise auf eine magische Manipulation gefunden und verfolgen gegenwärtig die Spur der verdächtigen Personen.”<br/>Dein Magen verkrampft sich. Offensichtlich musst du dringend an deiner Vorgehensweise arbeiten, sofern du nicht den Rest deines Lebens in einer Zelle zubringen möchtest. Falls du eine Zelle bekommen solltest und du nicht versehentlich erschossen wirst."
    } else if (state.profile >= 20) {
        state.wantedlevel += 1
        text += "„Die Ermittlungen des MEK sind noch nicht abgeschlossen. Ursache dafür ist die unklare Beweislage sowie einige Indizien, die sich nicht eindeutig zuordnen lassen.”<br/>Es scheint fast so, als wäre dein Besuch nicht vollkommen unbemerkt geblieben, aber immerhin scheint die Polizei keine konkrete Spur zu haben. Das ist zwar beruhigend, aber trotzdem solltest du  dich in Zukunft bedeckt halten."
    } else {
        text += "„Die Ermittlungen des MEK sind noch nicht abgeschlossen. Ursache dafür ist die unklare Beweislage, doch durch die zügige Sicherung des Tatortes ist die Polizei zuversichtlich, dass sich dies bald ändern wird.”<br/>Du wirst von einem Hochgefühl ergriffen, als dir klar wird, dass du vollkommen unbemerkt geblieben bist, und du beschließt, dies mit einem ordentlichem Frühstück zu feiern."
    }
    e.show(text,
    [new Choice("Weiter", "event1_8_4")])
}

var event1_8_4 = function() {
    e.show("Was wird die Zukunft bringen? Wird die Polizei dir auf die Schliche kommen? Wirst du ein Heilmittel gegen Krebs finden? Oder wirst du unter ungeklärten Umständen ein tragisches Ende finden?<br/><br/>Was auch immer die Zukunft bringt, du kannst sie mitgestalten. Nimm dir drei Minuten und gib uns ein kurzes Feedback. <br/>Gab es Problem oder Unklarheiten?<br/>Was hat dir besonders gefallen?<br/>Und bitte sei ehrlich, denn nur so können wir die Spielerfahrung verbessern.",
    [new Choice("Weiter", "event2_0")])
}

var event2_0 = function() {
    e.show("The End", undefined, false)
}

var eventEnd = function() {
    e.show("The End", undefined, false)
}

window.onload = eventStart;