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
    this.alex = 0
    this.damage = 0
    this.delay = 0
    this.disguise = 0 // TODO = Check if this is necessary
    this.event1_2_read = 0
    this.money = 1000
    this.mother = 0
    this.gender = 0
    this.profile = 0
    this.profile2 = 0
    this.stash = 0
    this.takedown = 0
    this.wantedlevel = 0
    this.collateral = 0
    this.guydown = 0
    this.protection = 0
}

var eventStart = function () {
    debug = false
    state = new State()
    e = new Engine(state)
    //e.setBackground("linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2))", "res/imgs/main.jpg")
    let text = "<h1>Aiur 0.1.0</h1>Hallo und herzlichen willkommen zur Betaversion unseres Spiels. Hierbei handelt es sich um ein sogenanntes textbasiertes Rollenspiel. Kurz gesagt geht es darum, dass du in einer fiktiven Welt die Handlungen des Hauptcharakters bestimmst und hoffentlich zu einem guten Ende führst. Die Spielwelt gleicht der unseren, mit dem Unterschied, dass Magie real ist, und jeder davon weiß.<br/><br/>Aber eigentlich sollte alles ganz selbsterklärend sein. Wir wünschen dir viel Spaß!"
    if (debug) {
        state.awareness.value = 40
        state.lore.value = 40
        state.awareness.value = 40
        state.mundane.value = 0
        state.profile = 20
        state.delay = 20
        state.takedown = 1
        e.setBackground(null, null)
        e.show(text, [new Choice("Debug Spiel", "event2_0")], false)
    } else if (GameState.hasSave()) {
        e.show(text, [new Choice("Neues Spiel", "eventNew"),
        new Choice("Weitermachen", "eventContinue")], false)
    } else {
        e.show(text, [new Choice("Neues Spiel", "eventNew")], false)
    }
}

var eventNew = function () {
    e.setBackground(null, null)
    if (GameState.hasSave()) {
        e.show("Ein Spielstand existiert bereits. Ein neues Spiel überschreibt diesen. Jetzt ein neues Spiel starten?",
            [new Choice("Ja", "event0_1"),
            new Choice("Nein", "eventStart")], false)
    } else {
        event0_1()
    }
}

var eventContinue = function () {
    e.setBackground(null, null)
    GameState.load(e)
}

var event0_1 = function () {
    e.setBackground(null, null)
    e.show("Mit geweiteten Augen starrt sie ihn an: „Was… was… soll das heißen? Dämonen?“. Sie lacht, etwas zu schrill. Er erwidert ihren Blick ruhig: „Lilly… ich bin ein Magier.“ Wieder lacht sie und fährt sich mit der Hand durch die blonden Locken: „Oh, ach so. Mach dir keine Sorgen, ich bin eine Fee…“ Der Mann verzieht noch immer keine Miene: „Ich gehöre einem uralten Geheimbund an, der die Menschen vor den Mächten der Finsternis bewahrt!“<br/><br/>An dieser Stelle verdrehst du die Augen und wechselst den Kanal. Um diese Uhrzeit kommt einfach kein brauchbarer Film mehr im Fernsehen. Wie konnte so ein Mist jemals gedreht werden? Ein uralter Geheimbund von Magiern… lächerlich. Zugegeben, der Film scheint aus den Achtzigern zu stammen. Damals ahnte man noch nicht, dass bald Internet und Smartphone erfunden und die Welt für immer verändern würden. Mit dem Aufkommen der neuen Kommunikationstechnologie war es völlig unmöglich geworden, die Existenz der Magie noch länger geheim zu halten. Plötzlich tauchten immer mehr Videos von fliegenden Menschen, kreischenden Kugelblitzen und spontan auftretender Dunkelheit auf. Die Öffentlichkeit war ebenso überfordert wie die Medien und Politiker und in der daraus resultierenden Unruhe wurden Magier gesetzlich verpflichtet, sich zu registrieren und ihre Geheimnisse offen zu legen. Zugleich wurde den meisten eine gutbezahlte Dienststelle angeboten. Die Welt schien sich nur noch um Magie zu drehen.<br/><br/>Dir war das egal. Dein Vater war gerade gestorben.",
        [new Choice("Weiter", "event0_2")])
}

var event0_2 = function () {
    e.show(
        "Ein Autounfall… die Banalität war beinahe ebenso verstörend wie die plötzliche Leere in dir. Während sich deine Mutter dem Alkohol ergab, tatest du das einzige, was dir sinnvoll erschien: Soviel wie möglich zu unternehmen und so wenig wie möglich zu denken. Nichts war dumm genug, kein Aufwand zu groß, sofern du nur nicht mit deinen Erinnerungen alleine warst. Selbst die Tapete deines Zimmers runterzureißen war dir ein Vergnügen. Du hattest sie eh nie gemocht, sie entsprach gängigen Klischees über Jungs und Mädchen und war bei deiner Geburt entsprechend ausgewählt ausgewählt worden:",
        [new Choice("Blau", "event0_3_1"),
        new Choice("Rosa", "event0_3_2")])
}

var event0_3_1 = function () {
    state.gender = 1
    e.show(
        "Blau für Jungs. Und dann auch noch so ein hässlicher Farbton.",
        [new Choice("Weiter", "event0_3_3")])
}

var event0_3_2 = function () {
    state.gender = 0
    e.show("Rosa für Mädchen. Und dann auch noch so ein hässlicher Farbton.",
        [new Choice("Weiter", "event0_3_3")])
}

var event0_3_3 = function () {
    e.show("Allerdings verbrachtest du auch viel Zeit bei deiner besten Freundin Alex. Neben unzähligen Filmen habt ihr euch vor allem viele Videos im Internet angesehen. Eines Tages grinste sie dich an, während sie zwei bedruckte Seiten Papier vor deine Nase hielt: „Hier, das hab ich aus ’nem Forum. Der Initiationsritus. „Der was?“, hattest du sie verwirrt gefragt, nicht ganz sicher, welcher Film das sein sollte.<br/>„Initiationsritus. Das machen angeblich alle, die Magie erlernen wollen. Damit findet man heraus, ob man magisch begabt ist.“<br/>Zwanzig Minuten später saßest du ihr gegenüber im Schneidersitz, in der Hand eine brennende Kerze, der Geruch von Weihrauch in der Luft und lächelteste sie spöttisch an: „Und, ist die Macht schon mit dir?“<br/><br/>Alex streckte dir die Zunge raus: „Magie ist total selten. Dass heißt nicht, dass mein Ritual…“ Alex streckte dir die Zunge raus: „Magie ist total selten. Dass heißt nicht, dass mein Ritual…“ Sie stockte und starrte auf deine Hände, die noch immer die Kerze hielten. Die Flamme erstrahlte in einem kristallklarem Blau. Aber noch interessanter war die Tatsache, dass der Wachs nicht schmolz, als würde die Flamme von etwas Anderem genährt.<br/>Damals hieltest du zum ersten Mal Magie in der Hand.<br/>Diese Erkenntnis…<br/><br/>Diese Erkenntnis gab dir neuen Schwung und veränderte dein Leben. Alex sammelte alles, was sie im Internet fand und half dir, dein Talent zu entwickeln. Eine Sache war dir dabei besonders wichtig:",
        [
            new Choice("Ich widmete meine gesamte Kraft dem Bündeln magischer Energien, um möglichst mächtige Zauber zu formen.", "event0_4_1"),
            new Choice("Ich verschlang jedes Buch und jeden Hinweis voller Wissensdurst. Ich wollte jeden Zauber kennen und jedes Geheimnis ergründen.", "event0_4_2"),
            new Choice("Ich gewöhnte mir an, auf jedes Detail in meiner Umgebung zu achten und keine Spuren zu hinterlassen.", "event0_4_3"),
            new Choice("Ich achtete darauf, die Welt um mich herum nicht zu vergessen und verbrachte viel Zeit mit Freunden und sportlichen Aktivitäten.", "event0_4_4")
        ])
}

var event0_4_1 = function () {
    state.magic.value += 10
    e.show("Du verbrachtest unzählige Stunden damit, dir Spielkarten zu merken, um deine Konzentration zu schärfen. Jeden Tag meditiertest du, um das zu finden, was die Bücher als Ruhepol bezeichneten. Und jeder dir bekannte Zauber wurde in den unterschiedlichsten Varianten probiert, bis du dessen Wirkung besser einschätzen konntest. Stück für Stück bautest du dein Vertrauen in die Magie weiter aus, bis sie für dich weniger ein Werkzeug als eine dritte Hand darstellte.",
        [new Choice("Weiter", "event0_4_5")])
}

var event0_4_2 = function () {
    state.lore.value += 10
    e.show("Du hattest zwar zuvor schon viele Bücher gelesen, aber die magischen Schriften eröffneten dir eine völlig neue Weltanschauung. Physik, Chemie und Biologie verloren ihren unnachgiebigen Halt und wurden zu alternativen Erklärungsmodellen, während Legenden zu Optionen wurden. Inzwischen hast du mehr Fragen als jemals zuvor, doch zugleich hast du das Gefühl, eine Orientierung im Chaos gefunden zu haben.",
        [new Choice("Weiter", "event0_4_5")])
}

var event0_4_3 = function () {
    state.awareness.value += 10
    e.show("Die Tatsache, dass etwas so Bedeutsames wie Magie jemals ignoriert werden konnte, obwohl sie doch in den Geschichten jeder Kultur auftauchte, machte dir klar, wie leicht selbst Offensichtliches übersehen werden kann. Mit dem festen Vorsatz, nie wieder mit verschlossenen Augen durch die Welt zu laufen, machtest du es dir zur Gewohnheit, auf die Details deiner Umgebung zu achten, diese in einem Gedächtnisprotokoll festzuhalten und sie schließlich miteinander zu vergleichen.",
        [new Choice("Weiter", "event0_4_5")])
}

var event0_4_4 = function () {
    state.mundane.value += 10
    e.show("Schwimmen und Radfahren halfen dir, den Kopf frei zu bekommen und zugleich gaben sie dir das Gefühl, auch ohne Magie etwas erreichen zu können. Der Kontakt mit Freundesfreunden führte zu interessanten Begegnungen und unterhaltsamen Gesprächen bis in den späten Abend, welche nicht nur deinen Alltag bereicherten, sondern es dir auch ermöglichten, die Magie zu vergessen und zu entspannen. Obwohl die Magie dein Leben noch immer prägte, war es gut, eine Alternative zu haben.",
        [new Choice("Weiter", "event0_4_5")])
}

var event0_4_5 = function () {
    e.show("Deine Begeisterung erhielt erst einen Dämpfer, als Thomas Brendel erschossen wurde. Brendel war einer jener Magierbeamten der ersten Stunde und war für den Schutz der Regierung zuständig gewesen. Ermittler hatten herausgefunden, dass er seine Kräfte genutzt hatte, um hochrangige Politiker zu beeinflussen. Bei seiner Verhaftung hatte er ein Dutztend Sondereinsatzkommandos in Asche verwandelt, bevor eine Kugel seinen Kopf durchbohrte. Angesichts dieses gravierenden Machtmissbrauches brandete die öffentliche Panik erneut auf, was für registrierte Magier ernsthafte Folgen hatte: Magie durfte nur noch mit Genehmigung der Behörden und nur in bestimmten Situationen genutzt werden, sofern keine Vorstrafen vorhanden waren. Jeder gemeldete Magier musste unregelmäßige Zufallskontrollen über sich ergehen lassen, unabhängig davon, ob er Magie ausübte oder nicht. Das schlimmste jedoch waren die radikalen Gruppen besorgter Bürger, welche sämtliche Magier als Schwerkriminelle behandelte und auch vor Gewalt nicht zurückschreckten.<br/>Für dich war dies besonders schrecklich. Da ihr den Großteil eurer Quellen aus dem sogenanntem Darknet auf illegalen Tauschbörsen erworben hattet, standen die Chancen gut, dass dir die Ausübung von Magie verboten werden würde. Dabei gab es streng genommen kein Gesetz, dass dies bislang untersagt hatte, doch einige Gerichtsurteile änderten dies schnell. Statt einer gesicherten Laufbahn sahest du dich nun dem Risiko von gewalttätigen Anfeindungen und staatlicher Überwachung ausgesetzt. Es muss nicht erwähnt werden, dass dies entmutigend war.",
        [
            new Choice("Ich ignorierte meine magischen Kräfte für eine Weile.", "event0_5_1"),
            new Choice("Ich vernachlässigte die magischen Schriften.", "event0_5_2"),
            new Choice("Ich schenkte meiner Umgebung keine Aufmerksamkeit mehr.", "event0_5_3"),
            new Choice("Ich verkroch mich in meinem Zimmer.", "event0_5_4")
        ])
}

var event0_5_1 = function () {
    state.magic.value -= 10
    e.show("Eine Zeit lang war es schwierig, sich auf die Magie einzulassen, wo sie doch dein Leben zugleich so durcheinander gebracht hatte und deine Zukunft bedrohte, doch schließlich konntest du dich wieder fangen, auch wenn deine anfängliche Begeisterung einen Dämpfer erhalten hat.",
        [new Choice("Weiter", "event0_6")])
}

var event0_5_2 = function () {
    state.lore.value -= 10
    e.show("Das plötzliche Verbot magischer Schriften dämpfte deine Begeisterung für diese ebenso sehr wie die umständlichen Formulierungen, die offensichtlich keinerlei Wert auf Verständlichkeit legten. Aus diesem Grund hast du die Passagen über seltene Phänomene nur überflogen und dich auf die wesentlichen Dinge beschränkt.",
        [new Choice("Weiter", "event0_6")])
}

var event0_5_3 = function () {
    state.awareness.value -= 10
    e.show("Ab einem gewissen Punkt sind zu viele Informationen einfach nur noch hinderlich und so erschien es dir unumgänglich, deinem schmerzenden Kopf eine Auszeit zu gönnen und nicht jedes Detail zu hinterfragen.",
        [new Choice("Weiter", "event0_6")])
}

var event0_5_4 = function () {
    state.mundane.value -= 10
    e.show("Die Welt schien sich gegen dich verschworen zu haben, weshalb du dir eine Auszeit von ihr gönntest. In der Abgeschiedenheit deines Zimmers hattest du alle Zeit der Welt, dir deine eigenen Gedanken zu machen, ohne dass dich jemand störte.",
        [new Choice("Weiter", "event0_6")])
}

var event0_6 = function () {
    e.show("Die ständigen Nörgeleien deiner Mutter hatten dir natürlich ebenso wenig gut getan – „Nichtsnutz“ und „Faulpelz“ waren nur einige der ausgesuchten Bezeichnungen, mit denen sie dich beschrieb. Du konntest nicht ganz nachvollziehen, warum es erstrebenswerter sein sollte, den gesamten Tag mit dem Fernseher und einer Flasche billigen Whiskeys zu verbringen, aber mit Argumenten hatte sie sich eh nie auseinander gesetzt – vermutlich einer der wenigen Vorteile des Alkoholismus.<br/><br/>Als sie dann schließlich auf Blutkrebs diagnostiziert wurde, änderte sich nicht viel, außer dass ihr Pensum gelegentlich auf zwei Flaschen am Tag stieg. Unglücklicherweise bedeutete dies auch, dass sie am Monatsende unausstehlich wurde, wenn die Sozialhilfe nicht ausreichte, um ihren Rausch zu finanzieren. Als ihr Mitbewohner – du hattest noch keinen Vermieter gefunden, der dich ohne festen Job akzeptierte – bedeutete dies für dich natürlich zusätzlichen Ärger.<br/><br/>Glücklicherweise ist gerade Monatsanfang und nach eineinhalb Flaschen liegt sie besinnungslos neben dir auf dem Sofa, so dass du den Kanal wählen kannst.",
        [new Choice("Weiter", "event0_6_1")])
}

var event0_6_1 = function () {
    e.show("Nicht dass die anderen Kanäle besser wären. Frustriert schaltest du wieder den grauenhaften Film an. Der Hauptdarsteller schleudert gerade mit Hilfe seines Stabs Feuerbälle und Blitze auf seine Feinde, während er durch den Nachthimmel schwebt und die Frau – Lilly hieß sie? – in seinem Arm hält.<br/><br/>An dieser Stelle atmest du tief durch.<br/><br/>Dir ist natürlich klar, dass die meisten Menschen so gut wie kein Verständnis von Magie haben, aber dieser Film verstößt gegen so viele grundlegende Prinzipien, dass es dir die Sprache verschlägt. Ein Zauber erfordert eine Beschwörungsformel, was selbst im günstigsten Fall mindestens fünf Sekunden erfordert, meist jedoch länger. Zudem erfordert es enorme Konzentration, mehr als einen Zauber zur selben Zeit zu wirken…<br/><br/>Als der Held gegen Ende seine Kräfte einsetzt, um seine Geliebte wieder zum Leben zu erwecken, schaltest du angewidert erneut um. Magie hat ihre Grenzen. Andernfalls hättest du deine Mutter sicherlich geheilt.",
        [new Choice("Weiter", "event0_6_2")])
}

var event0_6_2 = function () {
    e.show("Nachrichten. Immerhin.<br/><br/>„Nachdem Doktor Sikora wegen Verdachts auf illegale magische Behandlung in Gewahrsam genommen wurde, warten die Beamten nun auf das Eintreffen der Sachverständigen…“ Innerlich seufzt du auf. Die Öffentlichkeit hat sich noch nicht von dem Schock erholt, dass Magie tatsächlich existiert. Dementsprechend ist jede Art von Vorfall, bei dem Magie eine Rolle spielen könnte, eine wahre Goldmine für die Medien, wie diese Liveübertragung belegt. Du überlegst wegzuschalten, aber dann bemerkst du, dass du das gezeigte Gebäude kennst. Es befindet sich Nahe des Stadtzentrums.<br/><br/>„…Doktor Sikora war ins Visier der Ermittler geraten, als seine Praxis nicht die üblichen Utensilien und Medikamente zur Behandlung von Blutkrebs bestellt hatte, obwohl die Praxis angeblich auf Leukämie spezialisiert ist.“<br/><br/>Natürlich. Die Anzahl der Betrüger hat drastisch zugenommen, seitdem die Existenz von Magie bekannt geworden ist. Offiziell benötigt man natürlich etliche Genehmigungen, aber verzweifelte Menschen stellen eine leichte Beute für jeden Schwindler dar. Obwohl Heilung eine der einfachsten Formen von Magie ist, werden neumodische Konzepte wie Karzinome von der uralten Fachliteratur natürlich nicht abgedeckt. Du selbst hast versucht, dich nach der Diagnose deiner Mutter schlau zu machen. Vergeblich.<br/>„Bei einer stichprobenartigen Untersuchung fand man heraus, dass sich die Patienten bei überraschend guter Gesundheit befinden…“, – an dieser Stelle stockt die Reporterin und blickt kurz neben die Kamera – „aber… aber wir weisen darauf hin, dass ohne eine ausführliche Untersuchung jedwede Behauptung kritisch zu betrachten ist. Die Beamten vom MEK befinden sich bereits auf dem Weg und werden sich in den nächsten Wochen ausführlich damit beschäftigen.“<br/><br/>Du springst auf. Wütend. Schockiert. Elektrisiert.<br/>Könnte es sein? Könnte es tatsächlich ein Heilmittel geben? Und würden die Beamten es tatsächlich zur Sicherheit der Allgemeinheit wochenlang unter Verschluss halten?<br/><br/>Vermutlich.<br/>Es könnte auch alles ein Irrtum sein. Möglicherweise wäre es besser, sich wieder auf das Sofa zu setzen, diese Sache nur in den Nachrichten zu verfolgen, dem System seinen Lauf zu lassen und auf die Vernunft der Masse zu hoffen.<br/>Einfach so zu tun, als ginge dich das nichts an.<br/>Von wegen!<br/><br/>Dir bleibt also nur eine Möglichkeit. Du musst dort hin, bevor das MEK eintrifft.",
        [new Choice("Ich beherrsche die Magie und ich will verdammt sein, wenn ich sie den Rest meines Lebens nur in meinem Zimmer einsetze!", "event1_0"),
        new Choice("Es wird Zeit die Welt zu retten. Eine Person nach der anderen!", "event1_0"),
        new Choice("Es könnte die Heilung für meine Mutter bedeuten. Sie mag nicht die tollste Mutter der Welt sein, aber ich werde auf keinen Fall einfach zusehen, wie sie stirbt!", "event1_0"),
        new Choice("Wenn uns sonst niemand hilft, muss ich eben selbst etwas tun!", "event1_0")])
}

var event1_0 = function () {
    e.show("Dir ist klar, dass die Zeit gegen dich Arbeit. Die MEK-Beamten sind zwar chronisch überarbeitet, aber bei einer Liveübertragung ist das Interesse der Öffentlichkeit vermutlich groß genug, um jemanden aus dem Bett zu klingeln. Andererseits könnte ein blindes Voranstürmen dir ebenfalls schaden.<br/><br/>Zudem ist es illegal für Privatpersonen, Magie anzuwenden. Du musst also beim zaubern darauf achten, nicht zu offensichtliche Spuren zu hinterlassen.<br/><br/>Du überlegst kurz. Leider besitzt du kein Fahrzeug, aber immerhin dürfte gleich ein Bus ins Stadtzentrum fahren. Nicht ideal, aber es dürfte funktionieren. Alternativ könntest du natürlich fliegen, aber du bist dir nicht sicher, ob deine Kräfte dafür ausreichen. Zudem besteht die Möglichkeit, dass jemand etwas sehen könnte. Andererseits ist es natürlich Nacht.<br/>Letztlich hättest du noch die Möglichkeit, in deinem Zimmer nach Handschuhen, Schal und Mütze zu suchen, damit du nicht so schnell erkannt wirst. Zwar bist du in der Lage, dich magisch zu tarnen, aber mehrere Zauber aufrecht zu erhalten ist immer schwierig und vielleicht brauchst du deine Kräfte anderweitig.",
        [new Choice("Zeit zum Umziehen.", "event1_0_1"),
        new Choice("Zeit zum Fliegen.", "event1_0_2"),
        new Choice("Zeit für den Bus.", "event1_0_3")])
}

var event1_0_1 = function () {
    state.delay += 5
    state.disguise = 1
    state.profile -= 5
    e.show("Du hastest in dein Zimmer, reißt den Schrank auf und wühlst wie besessen in deinen Klamotten. Kurz darauf hast du Schal, Mütze und Handschuhe gefunden. Sogar eine Sonnenbrille ist dabei.<br/>Und nun?",
        [new Choice("Zeit zum Fliegen.", "event1_0_2"),
        new Choice("Zeit für den Bus.", "event1_0_3")])
}

var event1_0_2 = function () {
    let text = "Du trittst nach draußen in die kühle Herbstluft. Du siehst dich kurz um und als du niemanden siehst, murmelst du die Beschwörungsformel. Langsam erhebst du dich. "
    let choices = []
    if (state.magic.value >= 30) {
        state.delay -= 30
        state.profile += 5
        text += "Bedächtig legst du mehr Kraft in den Zauber und kurz darauf fliegst du Richtung Stadtzentrum davon. Obwohl du kaum schneller bist als mit dem Fahrrad, kommst du doch ausgezeichnet voran, da du weder bremsen noch ausweichen musst. Dir wird ein wenig schwindelig angesichts der kleinen Lichtpunkte, die unter dir entlang rasen und auch der schneidend kalte Nachtwind ist nicht besonders angenehm, doch du konzentrierst dich und kannst kurze Zeit später in einer dunklen Seitenstraße landen. Die letzten Meter legst du zu Fuß zurück."
        choices.push(new Choice("Weiter", "event1_1"))
    } else {
        text += "Unglücklicherweise schaffst du es nicht, gleichzeitig genügend Kraft in den Zauber zu legen und die vollständige Kontrolle zu behalten. Du könntest zwar schweben, aber damit wärst du auch nicht schneller als zu Fuß."
        choices.push(new Choice("Du beschließt den Bus zu nehmen", "event1_0_3"))
    }
    e.show(text, choices)
}

var event1_0_3 = function () {
    state.delay += 5
    state.disguise = 1
    e.show("Du gehst zur Bushaltestelle. Angesichts deines Vorhabens, der Polizei und ihren magischen Spezialisten zuvor zu kommen, erscheint dir das Warten auf den Bus wie ein schlechter Scherz.<br/>Als der Bus endlich kommt, hat er zwei Minuten Verspätung und obwohl du weisst, dass zwei Minuten nur in schlechten Filmen entscheidend sind, hast du ein mulmiges Gefühl.<br/><br/>Als du zwanzig Minuten später aussteigst, begibst du dich möglichst schnell Richtung Praxis.",
        [new Choice("Weiter", "event1_1")])
}

var event1_1 = function () {
    e.show("Die Praxis befindet sich in einem mehrstöckigen Reihenhaus an einer wenig befahrenen Straße. Vor dem Eingang stehen zwei Polizisten und halten jeden vom Betreten ab, der kein Mieter ist. Die Menge der neugierigen Zuschauer ist bereits auf ein paar Dutzend gestiegen und breitet sich bis auf die Straße aus. Ein Journalist spricht gerade in eine Kamera, während ein weiteres Übertragungsteam gerade seinen Wagen entlädt. Auf das Dach zu Schweben fällt also aus.",
        [new Choice("Weiter", "event1_1_0")])
}

var event1_1_0 = function () {
    e.show("Du musst du dir irgendwie Zutritt zum Gebäude verschaffen. Zwar könntest du dich auf magische Art Tarnen, doch wenn sich einfach die Tür öffnet, wirkt dies mit Sicherheit verdächtig. Vielleicht kann man mit den Beamten am Eingang reden? Eine Seitengasse scheint hinter das Gebäude zu führen, vielleicht hast du Glück und findest eine Feuerleiter. Natürlich könntest du das Gebäude auch auf einer magischen Ebene betrachten, um Spuren magischer Energie zu finden, aber dies dauert eine Weile.",
        [new Choice("Ich rede mit den Polizisten.", "event1_1_1"),
        new Choice("Zuerst höre ich mich unter den Passanten um.", "event1_1_2"),
        new Choice("Die Rückseite des Gebäudes klingt vielversprechend.", "event1_1_3"),
        new Choice("Ich verschiebe meine Wahrnehmung auf das magische Spektrum.", "event1_1_4")])
}

var event1_1_1 = function () {
    e.show("Die beiden Beamten wirken wie Türsteher. Gelangweilt und unnachgiebig.",
        [new Choice("„Einen schönen guten Abend. Was ist denn hier passiert?“", "event1_1_1_1"),
        new Choice("„Entschuldigen Sie, aber ich wohne hier.“", "event1_1_1_2"),
        new Choice("„Guten Abend Kollegen.“ Es wird schließlich ein magischer Experte erwartet.", "event1_1_1_3"),
        new Choice("Ich überlege mir doch lieber etwas anderes.", "event1_1_0")])
}

var event1_1_1_1 = function () {
    state.delay += 5
    e.show("Bemüht höflich erwidert der größere von beiden: „Wir dürfen uns dazu leider nicht äußern. Entnehmen Sie weiteres bitte den Medien.“ Der andere verdreht nur die Augen.",
        [new Choice("„Entschuldigen Sie, aber ich wohne hier.“", "event1_1_1_2"),
        new Choice("„Nur ein Scherz. Guten Abend Kollegen.“ Es wird schließlich ein magischer Experte erwartet.", "event1_1_1_3"),
        new Choice("„Ich überlege mir doch lieber etwas anderes.", "event1_1_0")])
}

var event1_1_1_2 = function () {
    state.delay += 5
    e.show("Die beiden Beamten ringen sich ein Lächeln ab: „Können Sie sich ausweisen?“ Verdammt.",
        [new Choice("„Hätte ich gewusst, dass ich sonst nicht in meine Wohnung komme, hätte ich meine Brieftasche samt Ausweis sicherlich mitgenommen. Bitte, es ist kalt!“", "event1_1_1_2_1"),
        new Choice("„Um in meine Wohnung zu kommen? Wollen Sie mich auf den Arm nehmen???“", "event1_1_1_2_2"),
        new Choice("„Bitte, ich muss echt dringend pinkeln.“", "event1_1_1_2_2")])
}

var event1_1_1_2_1 = function () {
    if (state.mundane.value >= 30) {
        e.show("Der Beamte zögert, als sein Kollege ihm etwas ins Ohr flüstert. Dann zuckt er mit den Schultern: „Halten Sie sich bitte von der Praxis fern.“",
            [new Choice("„Hätte ich gewusst, dass ich sonst nicht in meine Wohnung komme, hätte ich meine Brieftasche samt Ausweis sicherlich mitgenommen. Bitte, es ist kalt!“", "event1_2")])
    } else {
        e.show("„Tut mir sehr leid, aber so können wir sie nicht einfach durchlassen.“",
            [new Choice("Mist!", "event1_1_1")])
    }
}

var event1_1_1_2_2 = function () {
    e.show("„Tut mir sehr leid, aber so können wir sie nicht einfach durchlassen.“",
        [new Choice("Mist!", "event1_1_1")])
}

var event1_1_1_3 = function () {
    state.delay += 5
    e.show("Die beiden sehen dich überrascht an… misstrauisch. Ängstlich? Sie mustern dich, offensichtlich nicht überzeugt.",
        [new Choice("„Schon gut, ich habe mir lediglich einen Scherz erlaubt.“", "event1_1_1_3_1"),
        new Choice("Ich demonstriere ihnen einen einfachen Zauber, um sie zu überrumpeln.", "event1_1_1_3_2")])
}

var event1_1_1_3_1 = function () {
    e.show("Die beiden mustern dich finster: „Sie sind Reporter, oder? Möchten unbedingt rein, hm? Klar, die Polizei steht nur im Weg.“",
        [new Choice("Mist!", "event1_1_1")])
}

var event1_1_1_3_2 = function () {
    state.delay += 5
    state.profile += 30
    e.show("Langsam – du möchtest keinen Zwischenfall provozieren – hebst du die linke Hand und murmelst eine Beschwörung. Einige Sekunden später erhebt sich eine kleine Lichtkugel über deinem Handteller. Überaus simpel, aber die Beamten zucken erschrocken zusammen. Du lächelst sie beruhigend an. Der kleinere von beiden schluckt und öffnet dir die Tür.",
        [new Choice("Weiter", "event1_2")])
}

var event1_1_2 = function () {
    let text = "Du stellst dich zu den Schaulustigen und hörst dich um. Ein Herr in mittleren Jahren und Jogginghose erzählt dir nur zu gerne jedes Detail: „Ich kam gerade zurück vom Kiosk, als mir einfiel, dass ich ja gar nicht bezahlt hatte… aber das willste gar nicht so genau wissen, hm? Naja, da waren jedenfalls die Bullen hier und dann war da diese gewaltige Explosion… guck nicht so, nur ’n Scherz. Wir sind hier ja nicht bei Columbo, wobei, so viel explodiert da ja auch nich…“ Genervt brichst du das Gespräch ab und versuchst dich an den anderen Passanten. Die sind zwar etwas konkreter, aber sinnvolle Informationen kannst du auch ihnen nicht entnehmen."
    if (state.awareness.value >= 30)
        text = "Du stellst dich zu den Schaulustigen und hörst dich um. Ein Mann in Jogginghose erzählt eifrig den Umstehenden, was er gesehen hat, aber seine Alkoholfahne lässt ihn nicht besonders verlässlich erscheinen. Eine ältere Dame mit selbstgehäkeltem Schal informiert dich, dass die Polizei noch immer auf den magischen Spezialisten wartet: „Die sitzen immer noch im zweiten Stock in der Praxis. Ich hoffe da tut sich bald etwas neues. Die Herbstluft kriecht mir langsam in die Knochen. Und es ist ja nicht so, als gäbe es jetzt hier noch einen Arzt, der mir im Zweifelsfall helfen könnte.“ Du willst ihr gerade danken, als dir die Sehnsucht in ihrer Stimme auffällt und plötzlich geht dir ein Licht auf: „Gute Frau, Sie wissen schon, dass die Polizei sie nicht einfach von ihrer Wohnung fernhalten kann? Sie haben doch bestimmt einen Ausweis? Kommen Sie, ich geleite Sie bis zu Ihrer Wohnung.“ Die Dame sieht etwas peinlich berührt aus, doch sie widerspricht dir nicht. Du bietest ihr deinen Arm an und gemeinsam führst du sie zu den Beamten am Eingang, welche euch passieren lassen. Ihre Wohnung ist nicht weit vom Haupteingang entfernt und als ihr vor der Wohnungstür steht, bedankt sie sich vielmals bei dir. Du lächelst höflich und verabschiedest dich."
    else if (state.awareness >= 20)
        text = "Du stellst dich zu den Schaulustigen und hörst dich um. Ein Mann in Jogginghose erzählt eifrig den Umstehenden, was er gesehen hat, aber seine Alkoholfahne lässt ihn nicht besonders verlässlich erscheinen. Eine ältere Dame mit selbstgehäkeltem Schal informiert dich, dass die Polizei noch immer auf den magischen Spezialisten wartet: „Die sitzen immer noch im zweiten Stock in der Praxis. Ich hoffe da tut sich bald etwas neues. Die Herbstluft kriecht mir langsam in die Knochen. Und es ist ja nicht so, als gäbe es jetzt hier noch einen Arzt, der mir im Zweifelsfall helfen könnte.“ Du dankst ihr und überlegst deine weiteren Schritte."
    e.show(text, [new Choice("Weiter", "event1_1_1")])
}

var event1_1_3 = function () {
    e.show("Du begibst dich durch die Seitengasse, welche von mehreren Müllcontainern zusätzlich verschmälert wird. Dir fällt auf, dass die Biotonne fast voll ist. Nicht dass dir das etwas nützen würde.",
        [new Choice("Weiter", "event1_1_3a")])
}

var event1_1_3a = function () {
    e.show("Auf dem Hof hinter dem Gebäude ist es ziemlich dunkel, lediglich das durch die Wohnungsfenster fallende Licht ermöglicht es dir, deine Umgebung zu erahnen. Im dritten Stock scheint ein Flurfenster gekippt zu sein. Wenn du die Gestalt eines Vogels annähmest, könntest du bequem dort hindurchschlüpfen. Mit etwas weniger Finesse könntest du auch den Schließmechanismus der Hintertür zerstören. Es scheint sich zur Zeit niemand dort aufzuhalten. Während du noch überlegst, fällt dir auf, dass der Hof viele Parkplätze bereit hält. Es dürfte nur eine Frage der Zeit sein, bis einer der Bewohner die Hintertür benutzt und du hereinschlüpfen kannst.",
        [new Choice("Ich verwandele mich in einen Vogel.", "event1_1_3_1"),
        new Choice("Ich kümmere mich um die Tür.", "event1_1_3_2"),
        new Choice("Ich warte auf eine günstige Gelegenheit.", "event1_1_3_3"),
        new Choice("Ich habe es mir anders überlegt und gehe wieder vor das Gebäude.", "event1_1")])
}

var event1_1_3_1 = function () {
    let text = "Du suchst die dunkelste Ecke des Hofes auf und stolperst fast über etwas. Was auch immer es ist, du kannst es in der fast vollständigen Finsternis nicht erkennen. Ausgezeichnet, so wird dich zumindest niemand erkennen."
    if (state.lore.value >= 30) {
        e.show(text + " Mit leisem Murmeln entbindest du deinen Körper von seiner Konzeption und nimmst die Gestalt eines Vogels an. Im letzten Augenblick entscheidest du dich nicht für einen Milan, sondern für die Gestalt einer Eule, um dich im Dunkel besser orientieren zu können. Du blinzelst. Die Orientierung fällt dir für einen Augenblick schwer, als du versuchst, dich an deine neue Gestalt zu gewöhnen, aber dann greifen deine neuen Instinkte und du schwingst dich in die Luft. Wenige Sekunden später schlüpfst du durch das Fenster. Dann löst du den Zauber und nimmst deine übliche Gestalt wieder an.",
            [new Choice("Weiter", "event1_2")])
    } else {
        e.show(text + " Unglücklicherweise will dir die richtige Formel nicht einfallen. Gestaltwandel ist leider doch recht komplex. Du nimmst dir vor, dir mehr Fachliteratur durchzulesen, wenn das alles vorbei ist und überlegst, wie du weitermachen könntest.",
            [new Choice("Weiter", "event1_1_3a")])
    }
}

var event1_1_3_2 = function () {
    let text = "Du schleichst dich zur Tür."
    if (state.magic.value >= 30) {
        e.show(text + " Beschwörungen flüsternd setzt du den Mechanismus kinetischer Energie aus, bis ein leichtes Klicken dir vermittelt, dass das Schloss offen ist. Du trittst ein.",
            [new Choice("Weiter", "event1_2")])
    } else {
        e.show(text + " Beschwörungen flüsternd setzt du den Mechanismus kinetischer Energie aus, aber du hast Probleme damit, den Energiefluss gleichmäßig zu halten. Du könntest mehr Kraft verwenden, um dies zu kompensieren, aber das könnte den Mechanismus zerstören.",
            [new Choice("Egal.", "event1_1_3_2_1"),
            new Choice("Ich überlege mir lieber etwas anderes.", "event1_1_3a")])
    }
}

var event1_1_3_2_1 = function () {
    state.profile += 5
    e.show("Mit erschreckend lautem kreischen verbiegt sich das Schloss und reißt ein Loch in die Tür. Fluchend trittst du ein.",
        [new Choice("Weiter", "event1_2")])
}

var event1_1_3_3 = function () {
    state.delay += 30
    e.show("Du wartest. Und wartest. Ein mulmiges Gefühl breitet sich in dir aus und gerade, als du dir etwas anderes überlegen willst, erfüllen die Lichter eines Wagens den Hof. Ein Mann mitte Zwanzig steigt aus und geht zur Hintertür. Gemäßigten Schrittes gehst du ebenfalls dorthin. Er wirft dir einen gelangweilten Blick zu und nickt kurz. Dann tritt er ein und du folgst ihm. Endlich bist du drinnen.",
        [new Choice("Weiter", "event1_2")])
}

var event1_1_4 = function () {
    state.delay += 10
    state.stash = 1
    e.show("Du hälst dich abseits der Menge und beginnst die Formel. Stück für Stück rückt die materielle Welt mehr in den Hintergrund, während ihre Farben verblassen und ihre Laute verstummen. Im Gegenzug nimmt ein gleichmäßiges… Geräusch… vielleicht ein Rauschen… zu und neue Muster erscheinen vor deinem Auge. Als deine Sinne zwischen beiden Welten stehen, hörst du auf und siehst dich erneut um. Obwohl es dir schwer fällt, dich zu orientieren, kannst du nach kurzer Zeit das Gebäude ausfinding machen. Inmitten der Wirbel, die in der realen Welt den zweiten Stock ausmachen, siehst du dicht beieinander zwei magische Spuren, die auf verzauberte Gegenstände hinweisen. Gibt es vielleicht zwei Verstecke?<br/><br/>Zu deiner Beruhigung erkennst du jedoch keine weiteren magischen Spuren. Der MEK-Beamte ist also noch nicht eingetroffen und vermutlich gibt es auch keine magischen Überraschungen für dich.",
        [new Choice("Weiter", "event1_1_0")])
}

var event1_2 = function () {
    let text = "Das Treppenhaus ist gut beleuchtet und mit einem Fahrstuhl ausgestattet. Den Hinweisschildern, die an der pastellblauen Wand befestigt sind, kannst du entnehmen, dass es einschließlich des Stockwerks vier Etagen gibt. Unglücklicherweise gibt es keine weiteren Hinweise. Einige dunklere Stellen an der Wand lassen darauf schließen, dass die entsprechenden Schilder abgenommen wurden. Zwar kannst du die Etage schnell wechseln, aber da das Gebäude ziemlich lang ist, wird es wohl länger dauern, das jeweilige Stockwerk zu durchsuchen.<br/><div class=\"pic\"><div class=\"pic-stairs\"></div></div><br/>Wo möchtest du anfangen?"
    if (state.event1_2_read)
        text = "Zurück im Treppenhaus stehst du erneut vor der Wahl eines Stockwerkes. Wo möchtest du suchen?"
    state.event1_2_read = 1
    e.show(text,
        [new Choice("Im Erdgeschoß.", "event1_2_1"),
        new Choice("Im ersten Stock.", "event1_2_2"),
        new Choice("Im zweiten Stock.", "event1_2_3"),
        new Choice("Im dritten Stock.", "event1_2_4")])
}

var event1_2_1 = function () {
    state.delay += 10
    e.show("Das Erdgeschoß scheint schon bessere Zeiten gesehen zu haben. Das pastelblau hat sich zu einem pastelgrau gefärbt. Zusätzlich steht ein großer Kaktus auf dem Flur. Allerdings findest du keine Hinweise auf Praxis oder Polizei.",
        [new Choice("Weiter", "event1_2")])
}

var event1_2_2 = function () {
    state.delay += 10
    e.show("Niemand begegnet dir im ersten Stock. Die laute Musik, die hinter einer der Türen hervordringt, gibt dir zumindest das Gefühl, nicht allein zu sein. Trotzdem bist du hier falsch.",
        [new Choice("Weiter", "event1_2")])
}

var event1_2_3 = function () {
    state.delay += 10
    e.show("Im zweiten Stock riecht es leicht chemisch und das pastelblau der Wände scheint etwas kräftiger zu sein. Als du um eine Ecke biegst, siehst du, dass eine der Türen offen ist und ein Polizist davor steht. Bingo.",
        [new Choice("Weiter", "event1_3")])
}

var event1_2_4 = function () {
    state.delay += 10
    e.show("Im dritten Stock klebt der Boden und ein strenger Zitronengeruch hängt in der Luft. Ziemlich banal und definitiv der falsche Stock.",
        [new Choice("Weiter", "event1_2")])
}

var event1_3 = function () {
    e.show("Der Polizist schaut auf sein Handy und scheint ein Gähnen zu unterdrücken. Ansonsten ist es ruhig. Der Rest des Flurs wirkt verlassen. Vermutlich sind die anderen Beamten in der Praxis.",
        [new Choice("Ich lausche. Vielleicht spricht er gleich noch mit einigen Kollegen.", "event1_3_1"),
        new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
        new Choice("Ich spreche vorher einen Schlafzauber auf den Beamten.", "event1_3_3"),
        new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4"),
        ])
}

var event1_3_1 = function () {
    state.delay += 10
    e.show("Angestrengt spitzt du die Ohren. Du hörst ein Grunzen von dem Beamten. Was auch immer er liest, es scheint ihm nicht zu Gefallen.",
        [new Choice("Ich warte weiter.", "event1_3_1_1"),
        new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
        new Choice("Ich spreche einen Schlafzauber auf den Beamten.", "event1_3_3"),
        new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4")])
}

var event1_3_1_1 = function () {
    state.delay += 10
    e.show("Der Polizist summt ein Lied. Es kommt dir bekannt vor. Lief das nicht neulich im Radio? Egal, du hast genug Zeit verschwendet.",
        [new Choice("Ich spreche einen Tarnzauber und schleiche mich in die Praxis.", "event1_3_2"),
        new Choice("Ich spreche einen Schlafzauber auf den Beamten.", "event1_3_3"),
        new Choice("Ich wirke vorher einen Schockzauber, der ihm das Bewusstsein raubt.", "event1_3_4")])
}

var event1_3_2 = function () {
    e.show("Leise murmelst du den Zauberspruch, der deinen Körper lichtdurchlässig werden lässt. Dann schleichst du dich leise – man kann dich schließlich immer noch hören – an dem Beamten vorbei in die Praxis.",
        [new Choice("Weiter", "event1_4")])
}

var event1_3_3 = function () {
    state.delay += 5
    if (state.lore.value >= 20) {
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

var event1_3_4 = function () {
    state.profile += 5
    state.takedown += 1
    e.show("Da der Polizist eh schon müde und aufmerksam ist, fällt es dir leicht, seinen Kreislauf direkt anzugreifen. Als du die magischen Worte aussprichst, stockt sein Atem kurz, und er kippt bewusstlos zur Seite. Anschließend sprichst du einen Tarnzauber und trittst ein.",
        [new Choice("Weiter", "event1_4")])
}

var event1_4 = function () {
    e.show("Der Empfangsraum der Praxis ist hell erleuchtet. Vor den steril wirkenden weißen Wänden sind die beiden Polizisten in ihren blauen Uniformen kaum zu übersehen. Nicht dass der Empfangsraum besonders groß wäre. Glücklicherweise sitzt einer von ihnen gelangweilt auf einem Stuhl und ließt eine Zeitschrift, während der andere mürrisch an dem Empfangstresen lehnt. Hinter den beiden erstreckt sich ein Flur, der zu den Untersuchungszimmern und Büros führt. Mit deiner Tarnung gelingt es dir problemlos, an den beiden vorbeizuschleichen. Als du im Dunkel des Flur stehst, zögerst du einen Augenblick. Da die Türen nur angelehnt sind, sollte es kein Problem sein, die Büros unbemerkt zu durchstöbern. Andererseits könntest du die Dunkelheit auch dazu nutzen, einen Zauber vorzubereiten, der die Beamten außer Gefecht setzt.",
        [new Choice("Ich kümmere mich um die beiden.", "event1_4_1"),
        new Choice("Ich warte einen Moment. Vielleicht klärt sich die Situation ja von ganz allein.", "event1_4_2"),
        new Choice("Die Dunkelheit sollte ausreichen.", "event1_5")])
}

var event1_4_1 = function () {
    let text = "Normalerweise ist es sehr schwierig, zwei Ziele gleichzeitig mit einem Zauber zu belegen, insbesondere, wenn man bereits einen Zauber aufrecht erhält, aber in der Dunkelheit kannst du die Tarnung fallen lassen und dir die Zeit nehmen, einen komplexeren Zauber zu weben."
    if (state.lore.value <= 10) {
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

var event1_4_1_2 = function () {
    state.delay += 5
    state.takedown += 2
    state.profile += 5
    e.show("Leise flüsternd bündelst du deine Kräfte, und als du sie freigibst, kippen die Polizisten wie vom Schlag getroffen zur Seite.",
        [new Choice("Weiter", "event1_5")])
}

var event1_4_2 = function () {
    state.delay += 5
    e.show("Konzentriert lauschst du eine Weile. Der stehende Polizist fängt an, eine Melodie zu summen, und sein Partner ignoriert ihn.",
        [new Choice("Genug davon. Ich schleiche mich in das Büro.", "event1_5"),
        new Choice("Erst setzte ich die beiden außer Gefecht.", "event1_4_1_2")])
}

var event1_5 = function () {
    let text = "Leise betrittst du das Büro und schließt die Tür vorsichtig. Das Licht einer grellen Reklametafel von der gegenüberliegenden Straßenseite ermöglicht dir einen guten Überblick. Neben diversen Figurinen von Waldtieren, welche Dekorativ im Raum stehen, erkennst du einen Schreibtisch samt Computer, zwei Bücherregale sowie an der Wand hinter dem Schreibtisch einen Tresor. Dort dürfte sich die Formel befinden, sofern sie wirklich existiert."
    if (state.stash === 0 && state.awareness.value >= 30) {
        state.stash = 1
        text += " <br/><br/>Dein Blick bleibt auf den Büchern haften, die in verblüffend gutem – um nicht zu sagen ungenutztem – Zustand befinden. Es kommt dir unwahrscheinlich vor, dass jemand dort einen Hinweis auf den Tresor versteckt. Aber sie sehen einfach zu neu aus, insbesondere das Buch in der Mitte, welches anscheinend noch nie aufgeschlagen wurde. Aber du hast das Gefühl, dass sich dort etwas anderes finden lässt, sofern du dir die Zeit nimmst. Kurzentschlossen steckst du das Buch ein."
    } else if (state.stash >= 1) {
        text += " <br/><br/>Durch deinen Blick in das magische Spektrum weisst du, dass sich hier an zwei Orten magische Spuren finden lassen. Eine davon hat ihren Ursprung garantiert im Safe, die zweite müsste sich ganz in der Nähe befinden. Du siehst dich kurz um, kannst aber nichts entdecken, was deine Aufmerksamkeit bestätigen würde. Du willst gerade aufgeben, als dein Blick auf das Bücherregal fällt. Es ist gefüllt mit medizinischen Werken, die verblüffend unbenutzt aussehen. Eines sieht sogar aus, als wäre es frisch gedruckt worden. Du blätterst kurz darin, aber da dies jedoch nicht der beste Ort zum Lesen ist, steckst du das Buch kurzentschlossen ein."
    }
    e.show(text,
        [new Choice("Ich werfe einen ausführlichen Blick in das magische Spektrum, auch wenn das Zeit kostet.", "event1_5_1"),
        new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
        new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
        new Choice("Diese Holzfigürchen wirken irgendwie verdächtig. Möglicherweise bergen sie einen Hinweis?", "event1_5_4"),
        new Choice("Ich untersuche das Bücherregal.", "event1_5_5")])
}

var event1_5_1 = function () {
    state.delay += 10
    state.stash = 1
    e.show("Während du leise die Formel musterst, rückt die materielle Welt mit ihren Farben und Geräuschen in den Hintergrund, während neue Sinneseindrücke aus der magischen Welt sich mit ihnen überschneiden. Ein gleichmäßiges… Rauschen… scheint dich wie eine Brise zu erfassen und fortzuziehen, doch du unterbrichst den Zauber an der Grenze zwischen beiden Welten, so dass du dich einigermaßen orientieren kannst.\nZwei klar erkennbare Wirbel aus magischer Energie breiten sich klar erkennbar vor dir aus. Einer geht von einem aktiven Zauber aus, der anscheinend in einem der Bücher eingebettet ist und dessen Form verzerrt. Interessant. Was auch immer es ist, muss wertvoll sein, weshalb du das „Buch“ einsteckst.\nDer zweite Wirbel ist schwächer zu erkennen, da dessen Ursprung durch den Tresor verborgen ist. Zudem scheint von ihm kein aktive Magie auszugehen. Höchstwahrscheinlich handelt es sich um eine Art magisches Werkzeug. Was bedeutet, dass sich das Heilmittel – sofern es existiert – dort befindet.",
        [new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
        new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
        new Choice("Diese Holzfigürchen wirken irgendwie verdächtig. Möglicherweise bergen sie einen Hinweis?", "event1_5_4"),
        new Choice("Ich untersuche das Bücherregal.", "event1_5_5")])
}

var event1_5_2 = function () {
    state.profile += 15
    e.show("Das Beeinflussen einfacher Kräfte wie Wärme und Bewegung gehört zu den simpelsten magischen Anwendungen. Es kostet dich kaum Mühe, mit einigen Worten genügend Kraft zu beschwören, die anderen Menschen nur durch Hydraulik verfügbar ist.\nVorsichtig, damit dir nicht sofort der gesamte Tresor um die Ohren fliegt, erhöhst du den Druck, bis sich die Tresortür mit einem gequältem Knirschen öffnet.\nDu kannst ein Grinsen nicht ganz unterdrücken, als du dir den Tresorinhalt näher anschaust. Neben einigen handschriftlichen Aufzeichnungen findest du einen etwa 10 mal 3 Zentimeter langen, bläulich-durchsichtigen Kristall, bei dessen Berührung du ein schwaches magisches Echo verspürst. Wenn es hier etwas von Interesse gibt, dann ist es mit Sicherheit dieser Kristall.",
        [new Choice("Es wird Zeit zu gehen.", "event1_6")])
}

var event1_5_3 = function () {
    state.delay += 10
    let text = "Der Schreibtisch enthält vor allem typische Büroartikel sowie eine verblüffend große Auswahl an Kaugummisorten (Pfefferminz, Eukalyptus, Orange, Erdbeer und Grapefruit). Zusätzlich findest du eine Liste mit durchgestrichenen Namen. Möglicherweise von Patienten? Du erschrickst, als dich plötzlich der Monitor anstrahlt, aber glücklicherweise erwacht er nur aus dem Ruhemodus. Du musst gegen die Maus gekommen sein. Dann zögerst du. Könnte es so einfach sein?"
    if (state.awareness.value >= 30 || state.mundane >= 30) {
        text += "Deine Gedanken überschlagen sich. Könnte die Liste… nein, niemand der sein Passwort regelmäßig ändert, würde die Liste so herumliegen lassen. Du siehst dich um, guckst in der Schublade, unter dem Mauspad, unter der Tastatur… Bingo! Du loggst dich ein und wühlst dich durch die Dateien. Doch dort sind mehr als dir lieb ist. Fast unmöglich, die – DA! “Tresor.txt“!\n\nDu kannst ein Grinsen nicht ganz unterdrücken, als du dir den Tresorinhalt näher anschaust. Neben einigen handschriftlichen Aufzeichnungen findest du einen etwa 10 mal 3 Zentimeter langen, bläulich-durchsichtigen Kristall, bei dessen Berührung du ein schwaches magisches Echo verspürst. Wenn es hier etwas von Interesse gibt, dann ist es mit Sicherheit dieser Kristall."
    } else {
        state.delay += 10
        text += "Deine Gedanken überschlagen sich. Könnte die Liste… nun, einen Versuch ist es wert. Schließlich sind es nur ein paar Namen. Du probierst sie durch, doch leider hast du keinen Erfolg.\nDann kommt dir eine andere Idee. Möglicherweise gibt es hier irgendwo einen Hinweis? Du siehst dich um, guckst in der Schublade, unter dem Mauspad, unter der Tastatur… Bingo! Du loggst dich ein und wühlst dich durch die Dateien. Doch dort sind mehr als dir lieb ist. Wirklich viele. Nach ein paar Minuten beschließt du, es doch lieber – DA! “Tresor.txt“!\n\nDu kannst ein Grinsen nicht ganz unterdrücken, als du dir den Tresorinhalt näher anschaust. Neben einigen handschriftlichen Aufzeichnungen findest du einen etwa 10 mal 3 Zentimeter langen, bläulich-durchsichtigen Kristall, bei dessen Berührung du ein schwaches magisches Echo verspürst. Wenn es hier etwas von Interesse gibt, dann ist es mit Sicherheit dieser Kristall."
    }
    e.show(text,
        [new Choice("Es wird Zeit zu gehen.", "event1_6")])
}

var event1_5_4 = function () {
    state.delay += 5
    e.show("Es handelt sich um kleine, nussbraune Nachbildungen von Tieren, insbesondere Waldtieren. Hasen sind überraschend häufig vertreten, aber auch Wildschweine erfreuen sich gewisser Beliebtheit. Du untersuchst sie von allen Seiten, aber falls sie einen Hinweis verbergen, entgeht er dir.",
        [new Choice("Ich werfe einen ausführlichen Blick in das magische Spektrum, auch wenn das Zeit kostet.", "event1_5_1"),
        new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
        new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
        new Choice("Ich untersuche das Bücherregal.", "event1_5_5")])
}

var event1_5_5 = function () {
    state.delay += 5
    e.show("Medizinische Skizzen, Tabellen und Nachschlagewerke. Du schlägst einige auf Geratewohl auf. Anscheinend steht die Bezeichnung A00.0 für Cholera. Nach einigen ähnlichen Entdeckungen gibst du auf.",
        [new Choice("Ich werfe einen ausführlichen Blick in das magische Spektrum, auch wenn das Zeit kostet.", "event1_5_1"),
        new Choice("Kein Tresor diese Welt kann sich meinen Kräften wiedersetzen. Mit etwas kinetischer Energie sollte ich die Tür aushebeln können.", "event1_5_2"),
        new Choice("Vielleicht findet sich im Schreibtisch oder Computer ein Hinweis, wie der Tresor zu öffnen ist.", "event1_5_3"),
        new Choice("Diese Holzfigürchen wirken irgendwie verdächtig. Möglicherweise bergen sie einen Hinweis?", "event1_5_4")])
}

var event1_6 = function () {
    let text = "Ein Kribbeln in deiner Hand ist die einzige Warnung, die du kriegst. Plötzlich löst der Kristall einen magischen Impuls aus, der sich wie ein Donnerschlag durch das magische Spektrum zieht. Du fluchst, denn obwohl kein gewöhnlicher Mensch dies bemerken kann, hast du ein für jeden Magieanwender leicht erkennbares Signalfeuer gezündet. Falls der magische Spezialist der Polizei noch nicht eingetroffen sein sollte, wird er nun mit höchster Geschwindigkeit herbei eilen.<br/><br/>"
    let tackeled = false
    if (state.takedown >= 3) {
        text += "Schnell eilst du aus dem Büro, vorbei an den auf dem Boden liegenden Polizisten, welche dich glücklicherweise nicht bei deiner überstürzten Flucht behindern können."
    } else if (state.takedown <= 0) {
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
        if (value >= 3) {
            text += "so dass du ihm nur mit Mühe und Not ausweichen kannst. Mit pochendem Herzen verlässt du die Praxis."
        } else {
            state.profile += 5
            text += "und er deine Schulter berührt. Erschrocken zuckt er zusammen, und du siehst du Verwirrung auf seinem Gesicht, als er vergeblich versucht, eine sinnvolle Erklärung zu finden."
        }
    }
    e.show(text,
        [new Choice("Weiter", "event1_7")])
}

var event1_7 = function () {
    let text = "Du gehst den Weg zurück, den du gekommen bist, doch vor dem Haus hat sich die Situation verändert.<br/><br/>Die Schaulustigen haben ihre gesamte Aufmerksamkeit auf einen Ring aus Polizisten gerichtet, in deren Zentrum ein Mann in Uniform scheinbar ins Leere starrt und vor sich hin murmelt. Schlagartig werden dir zwei Dinge klar: "
    if (state.delay >= 80) {
        text += "Der Magier des MEK ist eingetroffen und hat bereits begonnen, das magische Spektrum zu erforschen. Wärst du doch bloß schneller gewesen. Sofort lässt du deine Tarnung fallen, denn ein aktiver Zauber ist so ziemlich das Auffälligste, was du im Moment tun könntest. Gleichzeitig siehst du dich hektisch nach einer Fluchtmöglichkeit um, denn es wird nicht lange dauern, bis der Beamte deinen Kristall bemerkt.<br/>Drei Möglichkeiten bieten sich dir an. Nahe der Menschenmenge steht ein Taxi am Straßenrand – vermutlich nicht ganz zufällig, denn der Fahrer am Wagen und verfolgt das Ganze mit Interesse. Zugleich biegt ein Linienbus gerade in die Straße und wird auf der gegenüberliegenden Straßenseite halten. Sofern du rechtzeitig über die stark befahrene Straße kommst, solltest du kein Problem damit haben, schnell von hier zu verschwinden. Alternativ könntest du natürlich auch einfach laufen, falls du genug Ausdauer hast. Und falls der Magier nicht allzu schnell ist."
    } else {
        text += "Der Magier des MEK ist eingetroffen, und er wird gleich damit beginnen, das magische Spektrum zu erforschen. Sofort lässt du deine Tarnung fallen, denn ein aktiver Zauber ist so ziemlich das Auffälligste, was du im Moment tun könntest. Gleichzeitig siehst du dich hektisch nach einer Fluchtmöglichkeit um, denn es wird nicht lange dauern, bis der Beamte deinen Kristall bemerkt.<br/>Drei Möglichkeiten bieten sich dir an. Nahe der Menschenmenge steht ein Taxi am Straßenrand – vermutlich nicht ganz zufällig, denn der Fahrer am Wagen und verfolgt das Ganze mit Interesse. Zugleich biegt ein Linienbus gerade in die Straße und wird auf der gegenüberliegenden Straßenseite halten. Sofern du rechtzeitig über die stark befahrene Straße kommst, solltest du kein Problem damit haben, schnell von hier zu verschwinden. Alternativ könntest du natürlich auch einfach laufen, falls du genug Ausdauer hast. Und falls der Magier nicht allzu schnell ist."
    }
    e.show(text,
        [new Choice("Ich versuche den Taxifahrer zu überreden", "event1_7_1"),
        new Choice("Ich haste über die Straße", "event1_7_2"),
        new Choice("Ich sprinte den Bürgersteig entlang", "event1_7_3")])
}

var event1_7_1 = function () {
    e.show("Du eilst auf den Taxifahrer zu, welcher sich nur widerwillig vom Spektakel löst. Offensichtlich war es nicht beruflicher Eifer, der ihn dazu bewogen hat, gerade hier zu halten. Du wirst dir etwas Gutes einfallen lassen müssen, damit er sich schneller bewegt.",
        [new Choice("„Ich muss unbedingt zum Flughafen, mein Flug geht in Kürze!“", "event1_7_1_1"),
        new Choice("„Ich muss unbedingt zum Flughafen, mein Flug geht in Kürze! Bitte schnell, ich lege auch einen Hunderter drauf!“", "event1_7_1_2"),
        new Choice("„Entschuldigung, sind sie noch frei? Ich habe es eilig.“", "event1_7_1_3")])
}

var event1_7_1_1 = function () {
    if (state.delay >= 80) {
        event1_7_1_1a(45) // Will call event1_8
    } else {
        event1_7_1_1a(30) // Will call event1_8
    }
}

var event1_7_1_1a = function (successValue) {
    let text = ""
    if ((e.getRnd(0, 59) + state.mundane.value) >= successValue) {
        text += "Du scheinst die magischen Worte gefunden zu haben. Wenige Sekunden später sitzt du auf dem Beifahrersitz und hast dich noch nicht einmal angeschnallt, als der Wagen schon davonschießt. Mit Erleichterung beobachtest du, wie der Ort des Geschehens im Rückspiegel verschwindet, und atmest entspannt aus."
    } else {
        state.profile += 15
        text += "Der Taxifahrer wirft dir einen desinteressierten Blick zu: „Jeder hat es eilig. Und dann plötzlich ist das Leben vorbei, und man hat nichts davon gehabt.“ Als er deinen gehetzten Blick bemerkt, zuckt er mit den Schultern und deutet auf die Beifahrertür. Sekunden später sitzt du auf dem Beifahrersitz, doch anscheinend lässt sich dein Fahrer davon nicht aus der Ruhe bringen. Du bist dir nicht sicher, ob er sich so sehr für das Geschehen hier interessiert, oder ob er sein Handeln absichtlich hinauszögert, doch es vergeht eine gefühlte Ewigkeit, bis sich das Taxi in Bewegung setzt. Du wirfst einen Blick durch die Heckscheibe, und du bist dir fast sicher, dass du hektische Bewegungen ausmachen kannst. Du versuchst, dir mögliche Gründe einfallen zu lassen, warum der Magier nicht zumindest einen groben Blick auf deine Aura werfen konnte, aber wirklich überzeugen kannst du dich nicht."
    }
    e.show(text,
        [new Choice("Weiter", "event1_8")])
}

var event1_7_1_2 = function () {
    state.money -= 100
    state.profile += 5
    e.show("Du scheinst die magischen Worte gefunden zu haben. Wenige Sekunden später sitzt du auf dem Beifahrersitz und hast dich noch nicht einmal angeschnallt, als der Wagen schon davonschießt. Mit Erleichterung beobachtest du, wie der Ort des Geschehens im Rückspiegel verschwindet, und atmest entspannt aus. Billig war es zwar nicht, aber du bezweifelst, dass es eine schnellere Variante gab.",
        [new Choice("Weiter", "event1_8")])
}

var event1_7_1_3 = function () {
    if (state.delay >= 80) {
        event1_7_1_1a(60) // Will call event1_8
    } else {
        event1_7_1_1a(50) // Will call event1_8
    }
}

var event1_7_2 = function () {
    let text = ""
    let difficulty = 30
    if (state.delay >= 80) {
        difficulty = 55
        text += "Da der Bus schon fast bei der Haltestelle ist, bleibt dir keine Zeit, um eine günstige Lücke zwischen den vorbeifahrenden Wagen abzupassen. "
    } else {
        text += "Da der Bus in Kürze bei der Haltestelle ankommen wird, bleibt dir nur wenig Zeit, um eine günstige Lücke zwischen den vorbeifahrenden Wagen abzupassen. "
    }
    text += "Als sich eine halbwegs passable Lücke anzubieten scheint, rennst du quer über die Straße. Wütendes Hupen schallt dir von rechts entgegen, als du versuchst, zwischen den unterschiedlich schnellen Fahrzeugen hindurchzuhuschen.<br/><br/>"
    if ((e.getRnd(0, 59) + state.mundane.value) >= difficulty) { // (random 0-59, each mundane +1 value, success if result >=55)
        text += "Du bist fast über die Straße, als sich plötzlich ein roter Polo an einem LKW vorbeischiebt, und dann geht alles sehr schnell. Ein erschrockenes Gesicht, quietschende Reifen, Motorhaube, Sprung zur Seite, und plötzlich stolperst du unverletzt auf die andere Straßenseite. Das Hupen der Fahrer nimmt überhand, aber du beschließt, besser nicht zurückzublicken, und rennst Richtung Haltestelle. Als du in den Bus einsteigst, sieht dich der Busfahrer kopfschüttelnd an. Offensichtlich hält der dich für einen absoluten Vollidioten. Mit glühendem Gesicht setzt du dich und ignorierst die übrigen Mitfahrer. Immerhin bist du schnell entkommen."
    } else {
        state.damage += 1
        text += "Du bist fast über die Straße, als sich plötzlich ein roter Polo an einem LKW vorbeischiebt, und dann geht alles sehr schnell. Ein erschrockenes Gesicht, quietschende Reifen, Motorhaube, und ein Zwei-Zentner-Hammer, der dich auf den Asphalt schmettert. Schmerzen. Übelkeit.<br/>Als du wieder klar denken kannst  – anscheinend sind nur wenige Sekunden vergangen – siehst du, dass die Fahrerin mit besorgtem Gesicht aussteigt. Gleichzeitig bemerkst du, dass der Bus ebenfalls gehalten hat, und du humpelst mit zusammengebissenen Zähnen darauf zu. Der Schmerz in deinem linken Knie lässt dich kaum Luft holen, und die Übelkeit, die deine Kopfschmerzen begleitet, ist ebenfalls besorgniserregend. Der Busfahrer starrt dich fassungslos an, als ihm klar wird, dass du gerade dein Leben riskiert hast, um den Bus nicht zu verpassen.<br/>Du zahlst dein Ticket und setzt dich zur längsten Busfahrt deines Lebens."
    }
    e.show(text,
        [new Choice("Weiter", "event1_8")])
}

var event1_7_3 = function () {
    let text = "Du verfällst in einen schnellen Dauerlauf und zwingst dich zu einer gleichmäßigen Atmung, doch schon nach kurzer Zeit wird dein Atem schneller. Getrieben von der Angst vor einer möglichen Entdeckung, versuchst du, eine Balance zwischen dem Brennen in deiner Lunge und in deinen Beinen zu finden."
    let difficulty = 30
    if (state.delay >= 80) {
        difficulty = 55
    }
    if ((e.getRnd(0, 59) + state.mundane.value) >= difficulty) { // (random 0-59, each mundane +1 value, success if result >=55 [if delay>=80] /30 [if else] )
        text += "Vier Schritte einatmen, vier Schritte ausatmen. Gewicht nach vorne beugen. Weiterlaufen. Weiterlaufen.<br/>Weiterlaufen.<br/><br/>Du bist dir nicht ganz sicher, wie du es schaffst, aber als du mehrere Straßen weiter keuchend zum Stehen kommst, kannst du nirgends die Polizei erkennen. Mit einem Anflug von Stolz stellst du fest, dass du der Polizei im wahrsten Sinne des Wortes davon gerannt bist."
    } else {
        e.state.profile += 15
        text += "Weiterlaufen. Weiterlaufen. Weiter. Weeeiiiiter…<br/>Mit einem frustrierten Keuchen hältst du an, als deine brennende Lunge nach Luft schreit und du mit panischem Blick  feststellen musst, dass du nicht weit genug entfernt hast. Die Furcht gibt dir die Kraft, das Stechen in deiner Seite halbwegs zu ignorieren, und du hastest weiter.<br/>Als du einige Straßen später keine Polizei bemerkst, stellst du erleichtert fest, dass du scheinbar doch irgendwie entkommen bist. Aber wenn du ganz ehrlich zu dir bist, ist es fast unmöglich, dass du dich schnell genug entfernen konntest, ohne zumindest im magischen Spektrum bemerkt zu werden…"
    }
    e.show(text,
        [new Choice("Weiter", "event1_8")])
}

var event1_8 = function () {
    let text = ""
    if (state.damage >= 1) {
        text += "Kurz vor der Haustür drohen dich die Schmerzen zu überwältigen. Du bist dir nicht sicher, woher du die Willenskraft nimmst, aber du quälst dich an deiner noch immer schlafenden Mutter und ihren Whiskeyflaschen vorbei auf dein Zimmer, ohne laut aufzuschreien. Noch bevor du dich auf das Bett fallen lässt, beginnst du mit dem Heilzauber. Glücklicherweise ist Heilung eine der ursprünglichsten und damit simpelsten Formen der Magie. Nach einigen Minuten nehmen die Schmerzen ab, doch du  benötigst noch zwei weitere Stunden, bevor du dich wieder schmerzfrei bewegen kannst. Erst dann bist du bereit, deine Beute näher zu betrachten."
    } else {
        text += "Zu Hause angekommen, öffnest du leise die Haustür und schleichst dich ins Wohnzimmer. Deine Mutter liegt noch immer von Whiskeyflaschen umgeben auf dem Sofa, während im Fernsehen ein muskelbepackter Darsteller eine Rede hält. Du begibst dich in dein Zimmer, um deine Beute zu begutachen."
    }
    e.show(text,
        [new Choice("Weiter", "event1_8_1")])
}

var event1_8_1 = function () {
    e.show("Der bläuliche Kristall ist gut zehn Zentimeter lang. Viel interessanter ist jedoch das leichte magische Echo, dass du immer noch verspürst, wenn du ihn berührst. Wenn es sich bei diesem angeblichen Arzt tatsächlich um einen Magier gehandelt hat – und in Anbetracht des Kristalls ist das mehr als wahrscheinlich – und er seine Kräfte dazu genutzt hat, Andere zu heilen, dann wird dieser Kristall höchstwahrscheinlich das Werkzeug dafür gewesen sein. Es bleibt nur zu hoffen, dass du seine Geheimnisse entschlüsseln kannst.<br/>Doch dies ist eine Aufgabe für einen anderen Tag. Du lehnst dich zurück, schließt die Augen, und lässt die Ereignisse noch einmal vor deinen Augen Revue passieren. Du hast vermutlich gegen ettliche Gesetze verstoßen, als du mittels illegaler Magieanwendung der Polizei Beweismittel gestohlen hast.",
        [new Choice("Und ich würde es wieder tun. Ich konnte doch nicht die einzige Möglichkeit verstreichen lassen, ein Heilmittel gegen Krebs zu finden.", "event1_8_2"),
        new Choice("Und ich würde es wieder tun. Die allgegenwärtige Furcht vor Magie lähmt die Gesellschaft und das System, aber ich werde meine Magie sinnvoll einsetzen.", "event1_8_2"),
        new Choice("Und ich würde es wieder tun. Was hat die Gesellschaft jemals für mich getan?", "event1_8_2"),
        new Choice("Und ich würde es wieder tun. Vermutlich. Ich schätze, ich hätte im Nachhinein vielleicht anders gehandelt.", "event1_8_2"),
        new Choice("Es war ein Fehler. Ich habe zu viel riskiert, und ich bereue es.", "event1_8_2")])
}

var event1_8_2 = function () {
    let text = ""
    if (state.stash >= 1) {
        text += "Dann fällt dir ein, dass du noch das Buch mitgenommen hast. Nun, da du genügend Zeit hast, wirfst du einen genaueren Blick darauf. Im magischen Spektrum erkennst du ein unnatürliches Muster im Kräfteverlauf. Du zögerst kurz, aber letzten Endes ist es unwahrscheinlich, dass sich hier etwas gefährliches verbirgt, und so passt du das Muster wieder an. Plötzlich lösen sich einige Buchseiten und nehmen eine grüne Farbe an. Geld! Anscheinend hat der gute Doktor hier seinen Notgroschen verschanzt. Eigentlich solltest du enttäuscht sein, keine magischen Geheimnisse entdeckt zu haben, aber du musst zugeben, dass du das Geld gut gebrauchen kannst.<br/><br/>"
    }
    text += "Als du ein Gähnen nicht mehr unterdrücken kannst, beschließt du, nur noch schnell Zähne zu putzen und dich dann schlafen zu legen. Du sammelst nur noch kurz Kräfte, aber in einer Minute wirst du aufstehen…"
    e.show(text,
        [new Choice("Weiter", "event1_8_3")])
}

var event1_8_3 = function () {
    let text = "Als du aufwachst, ist es bereits Mittag. Ein Teil von dir möchte liegenbleiben, aber die Stimme der Vernunft drängt dich, herauszufinden, was in den Medien berichtet wird.<br/><br/>Und ob die Polizei bereits vor der Haustür wartet.<br/><br/>Wenn du ehrlich zu dir bist, weisst du nicht genau, ob und wie viele Spuren du hinterlassen hast.<br/><br/>Du gehst die Treppe hinunter und ins Wohnzimmer, wo deine Mutter noch immer sitzt. Die Toastbrotkrümel deuten darauf hin, dass sie sich seit gestern bewegt hat, aber ansonsten hat sich wenig geändert. Inklusive ihres Tonfalls.<br/>„Na, haben wir endlich ausgeschlafen? Mir ist schleierhaft, wie man den ganzen Tag im Bett verbringen kann.“<br/><br/>Du ignorierst sie für den Moment, denn die Nachrichten berichten gerade über den gestrigen Vorfall.<br/><br/>"
    if (state.profile >= 30) {
        state.wantedlevel += 2
        text += "„Die Ermittlungen des MEK sind noch nicht abgeschlossen. Ursache dafür ist neben der unklaren Beweislage vor allem eine Intervention durch Dritte. Beamte haben zahlreiche Hinweise auf eine magische Manipulation gefunden und verfolgen gegenwärtig die Spur der verdächtigen Personen.“<br/>Dein Magen verkrampft sich. Offensichtlich musst du dringend an deiner Vorgehensweise arbeiten, sofern du nicht den Rest deines Lebens in einer Zelle zubringen möchtest. Falls du eine Zelle bekommen solltest und du nicht versehentlich erschossen wirst."
    } else if (state.profile >= 20) {
        state.wantedlevel += 1
        text += "„Die Ermittlungen des MEK sind noch nicht abgeschlossen. Ursache dafür ist die unklare Beweislage sowie einige Indizien, die sich nicht eindeutig zuordnen lassen.“<br/>Es scheint fast so, als wäre dein Besuch nicht vollkommen unbemerkt geblieben, aber immerhin scheint die Polizei keine konkrete Spur zu haben. Das ist zwar beruhigend, aber trotzdem solltest du  dich in Zukunft bedeckt halten."
    } else {
        text += "„Die Ermittlungen des MEK sind noch nicht abgeschlossen. Ursache dafür ist die unklare Beweislage, doch durch die zügige Sicherung des Tatortes ist die Polizei zuversichtlich, dass sich dies bald ändern wird.“<br/>Du wirst von einem Hochgefühl ergriffen, als dir klar wird, dass du vollkommen unbemerkt geblieben bist, und du beschließt, dies mit einem ordentlichem Frühstück zu feiern."
    }
    e.show(text,
        [new Choice("Weiter", "event1_8_4")])
}

var event1_8_4 = function () {
    e.show("Was wird die Zukunft bringen? Wird die Polizei dir auf die Schliche kommen? Wirst du ein Heilmittel gegen Krebs finden? Oder wirst du unter ungeklärten Umständen ein tragisches Ende finden?<br/><br/>Was auch immer die Zukunft bringt, du kannst sie mitgestalten. Nimm dir drei Minuten und gib uns ein kurzes Feedback. <br/>Gab es Problem oder Unklarheiten?<br/>Was hat dir besonders gefallen?<br/>Und bitte sei ehrlich, denn nur so können wir die Spielerfahrung verbessern.",
        [new Choice("Weiter", "event2_0")])
}

var event2_0 = function () {
    e.show("Die nächsten Tage verbringst du damit, den Kristall zu untersuchen. Allerdings bist du häufig abgelenkt, denn die Ereignisse um deinen nächtlichen Diebstahl lassen dich nicht los. Immer wieder gehst du in Gedanken deine Handlungen durch, überlegst dir, was alles hätte schief gehen können und was du hättest anders machen können. Doch alle diese Gedankenspiele enden immer mit der selben Schlussfolgerung: Du hast es geschafft! Du bist den Herausforderungen des Lebens gewachsen!<br/>Neben dem daraus erwachsendem Selbstbewusstsein hast du zusätzlich das Gefühl, mehr über dich gelernt zu haben.",
        [new Choice("Ich bin mehr als je zuvor in der Lage, die magischen Kräfte gezielt zu bündeln.", "event2_0_1"),
        new Choice("Der Wert magischen Wissens hat sich mir erschlossen, und ich habe dementsprechend noch einmal alle meine Notizen überarbeitet.", "event2_0_2"),
        new Choice("Nach meinem nächtlichen Abenteuer achte ich mehr als jemals zuvor auf die Details meiner Umgebung.", "event2_0_3"),
        new Choice("Meine Erlebnisse haben mir gezeigt, dass nicht nur die Magie zählt, sondern auch die einfachen Dinge im Leben, wie Freunde, Sport und Filme.", "event2_0_4")])
}

var event2_0_1 = function () {
    state.magic.value += 5
    e.show("Vielleicht liegt es daran, dass du dich in einer echten Krisensituation beweisen musstest, aber inzwischen erscheint es dir gar nicht mehr so schwierig, die Magie in die richtige Bahn zu lenken und deine Konzentration aufrecht zu erhalten.",
        [new Choice("Weiter", "event2_1")])
}

var event2_0_2 = function () {
    state.lore.value += 5
    e.show("Die Magie erschließt Möglichkeiten, die anderen Menschen für immer verborgen bleiben werden. Wenn man nur weiß, wie sie funktioniert. Mit etwas Glück wirst du immer das passende Werkzeug parat haben.",
        [new Choice("Weiter", "event2_1")])
}

var event2_0_3 = function () {
    state.awareness.value += 5
    e.show("Die ständige Furcht, erwischt zu werden, scheint sich ausgezahlt zu haben. Deine Umgebung erscheint dir viel detaillierter als früher, und du hast zudem das Gefühl, nicht mehr so leicht überrascht werden zu können.",
        [new Choice("Weiter", "event2_1")])
}

var event2_0_4 = function () {
    state.mundane.value += 5
    e.show("Zuerst hast du nur versucht, deinen Stress abzubauen, aber schon bald hast du festgestellt, dass deine Freizeitaktivitäten nicht nur entspannend sind, sondern auch zu deiner Fitness und Weltoffenheit beitragen.",
        [new Choice("Weiter", "event2_1")])
}

var event2_1 = function () {
    e.show("Da der Kristall seine Geheimnisse nicht freiwillig preisgibt, siehst du dich gewzungen, noch einmal alle Grundlagen der Magie durchzugehen, damit du auch ja nichts übersiehst.<br/><br/>Magie ist letzten Endes eine Art Energie, die wie alle Formen von Energie beeinflusst werden kann. Je geübter man darin ist, die magische Energie zu beeinflussen, umso zuverlässiger kann man diese Formen anpassen und aufrechterhalten. Trotz allem benötigt auch ein erfahrener Magier ungefähr fünf Sekunden, um einen Zauber zu wirken.<br/><br/>Je mehr man über Magie weiß, desto unterschiedlicher kann diese Energie geformt werden. Die einfachsten Formen befriedigen die grundlegensten Bedürfnisse eines Lebewesens: Kampf, Flucht, Heilung und Wahrnehmung. Auch ein wenig belesener Magier kann einen Schock aussenden, sich Tarnen, heilen oder magische Muster untersuchen.<br/>Gebildetere Magier können subtilere Kniffe einsetzen, beispielsweise einen Schlafzauber statt eines Schockangriffs. Zusätzlich stehen ihnen viele weitere Werkzeuge zur Verfügung, die im Alltag nützlich sein können.<br/>Hochgebildete Magier sind zusätzlich mit vielen Theorien über das Wesen der Magie vertraut und können dementsprechend auch ungewöhnlichste Zauber improvisieren.",
        [new Choice("Weiter", "event2_2")])
}

var event2_2 = function () {
    e.show("Trotz allem stößt du bald an deine Grenzen. Heilung mag eine der einfachsten Formen der Magie sein, aber es scheint, als ob moderne medizinische Begriffe wie Mitose und Metastase nicht in der Literatur behandelt werden. <br/>Zudem entdeckst du einige Hinweise darauf, dass häufige magische Heilung negative Spätfolgen verursachen kann. Vielleicht wäre es gut, sich nicht allzu sehr darauf zu verlassen.",
        [new Choice("Ich hatte sowieso nicht vor, mich erschießen zu lassen.", "event2_3")])
}

var event2_3 = function () {
    e.show("Der Kristall bleibt dir ebenfalls ein Rätsel. So oft du ihn auch im magischen Spektrum betrachtest, bist du doch nicht in der Lage, die Energiestruktur zu verstehen. Wesentlich schlimmer ist jedoch die Tatsache, dass die Struktur wieder an Kraft gewinnt, und du nicht weisst, wie und wann sich diese Kraft entladen wird. Mit anderen Worten, es könnte in einigen Tagen wieder zu einem magischen Impuls kommen, der sämtliche Magier der Umgebung auf dich aufmerksam macht.",
        [new Choice("Die Zeit rennt dir davon.", "event2_4")])
}

var event2_4 = function () {
    e.show("Deine Hoffnung ruht jetzt auf Alex, die das Darknet nach weiteren Quellen durchsucht. Deine Überlegungen werden von einem Magenknurren begleitet. Offensichtlich hast du deine körperlichen Bedürfnisse vernachlässigt.<br/>Als du in die Küche gehst, fällt dir jedoch wieder ein, weshalb. Statt Gemüse, Obst, Fleisch, oder irgendetwas mit echtem Nährwert bzw. Geschmack, findest du nur die übliche Palette von billigstem Essen. Eben all das, was finanziell noch möglich ist, wenn ein wesentlicher Teil des Haushaltbudgets für Alkohol verwendet wird.<br/>Mit gemischten Gefühlen betrachtest du die halbleere Flasche Ketchup. Die Tomaten auf dem Ettikett erinnern dich an eine bessere Zeit, als dein Vater noch lebte, und sich deine Mutter noch nicht dem Suff ergeben hatte, sondern einer geregelten Arbeit nachging und in ihrer Freizeit im Garten Tomaten anpflanzte. Der süßliche Geruch frischer Tomaten und das Gefühl von Geborgenheit – heute sind sie nur noch eine Erinnerung, so wie die zuckerige rote Masse an das Original erinnert. Ein Imitat, das in der Flasche endet – ziemlich genau wie deine Mutter.<br/><br/>Trotzdem wird es Zeit, etwas zu essen. Da die Küche nicht viel hergibt, entscheidest du dich für",
        [new Choice("Toastbrot mit Ketchup.", "event2_4_1"),
        new Choice("Nudeln mit Ketchup.", "event2_4_2"),
        new Choice("Abgepackte asiatische Instant-Nudelsuppe.", "event2_4_3")])
}

var event2_4_1 = function () {
    e.show("Die einfachste Art, eine halbwegs warme Mahlzeit zuzubereiten. Das Aufwändigste ist es, darauf zu warten, dass das Brot getoastet wird. Während du darauf wartest, träumst du von einem besseren Leben mit mehr Geld und anständigem Essen.",
        [new Choice("Weiter", "event2_5")])
}

var event2_4_2 = function () {
    e.show("Wasser, Salz, Nudeln. Leider ist dies schon die aufwändigste Art des Kochens, welche die Küche kennt. . Während du darauf wartest, dass die Nudeln gekocht sind, träumst du von einem besseren Leben mit mehr Geld und anständigem Essen.",
        [new Choice("Weiter", "event2_5")])
}

var event2_4_3 = function () {
    e.show("Nur Wasser hinzufügen. Immerhin sorgen die kleinen abgepackten Gewürztütchen für eine andere Geschmackspalette. Während du darauf wartest, dass die Nudeln durchziehen, träumst du von einem besseren Leben mit mehr Geld und anständigem Essen.",
        [new Choice("Weiter", "event2_5")])
}

var event2_5 = function () {
    let text = "Plötzlich betritt deine Mutter die Küche, schaut auf dein Essen, und sieht dich missmutig an: „Gibt es keinen Job für dich? Kellnern, Müll sortieren, irgendwas?“<br/>Natürlich hast du ihr nicht erzählt, dass du deine gesamte Zeit darauf verwendet hast, heimlich Magie zu erlernen. Einmal abgesehen davon, dass sie es nicht unterstützt hätte, sind Alkoholiker nicht gerade bekannt dafür, etwas für sich behalten zu können.<br/>"
    if (state.gender === 1) {
        text += "Sie fährt fort: „Ich hatte so große Hoffnungen in meinen Jungen. Ich weiß noch, wie wir die blauen Tapeten ausgesucht und einen Fußball für dich gekauft haben. Dein Vater hat so oft mit dir gespielt… was er wohl heute denken würde, wenn er dich so sähe?“"
    } else {
        text += "Sie fährt fort: „Ich hatte so große Hoffnungen in mein Mädchen. Ich weiß noch, wie wir die rosa Tapeten ausgesucht und eine Puppe für dich gekauft haben. Wie oft hast du deinen Vater genötigt, mit ihm zu spielen… was er wohl heute denken würde, wenn er dich so sähe?“"
    }
    e.show(text,
        [new Choice("„Es tut mir Leid. Ich werde mich bemühen.“", "event2_5_1"),
        new Choice("„Wie wäre es, wenn wir beide uns eine Tätigkeit suchen?“", "event2_5_2"),
        new Choice("„Vermutlich wäre Papa schockiert, dass du ständig trinkst?“", "event2_5_3"),
        new Choice("„Kannst du nicht woanders ausnüchtern?“", "event2_5_4"),
        new Choice("Ich ignoriere sie.", "event2_5_5")])
}

var event2_5_1 = function () {
    state.mother -= 10
    e.show("Sie sieht dich traurig an: „Ich hoffe es, Liebling. Aber ich finde es gut, dass du an dir arbeitest. Viel Glück dabei.“<br/>Dann macht sie sich schnell ein Toastbrot mit Ketchup und setzt sich wieder vor den Fernseher.",
        [new Choice("Weiter", "event2_6")])
}

var event2_5_2 = function () {
    state.mother -= 10
    e.show("Sie sieht dich traurig an: „Ich hoffe es, Liebling. Aber ich finde es gut, dass du an dir arbeitest. Viel Glück dabei.“<br/>Dann macht sie sich schnell ein Toastbrot mit Ketchup und setzt sich wieder vor den Fernseher.",
        [new Choice("„Dein Leben wäre bestimmt wieder lebenswerter mit einer Aufgabe und einem geregeltem Tagesablauf.“", "event2_5_2_1"),
        new Choice("„Der Alkohol wird dich noch umbringen!“", "event2_5_2_1"), // no typo, like the first choice
        new Choice("„Jetzt reiß dich bitte zusammen.“", "event2_5_2_3"),
        new Choice("„Du könntest. Wenn du nur weniger trinken würdest.“", "event2_5_2_4")])
}

var event2_5_2_1 = function () {
    state.mother -= 5
    e.show("Sie sieht dich traurig an: „Mein Leben ist doch sowieso bald vorbei.“ Und dann geht sie zurück in das Wohnzimmer.<br/>Verdammt.",
        [new Choice("Weiter", "event2_6")])
}

var event2_5_2_2 = function () {
    state.mother -= 10
    e.show("„Zusammenreißen? Wie kannst du es WAGEN,“ keifft sie dich an, „mich nach allem so herablassend zu behandeln? ICH habe dich aufgezogen, ICH lasse dich noch immer bei mir wohnen, obwohl DU längst eine eigene Wohnung haben solltest.“<br/>Wütend stürmt sie in das Wohnzimmer.",
        [new Choice("Weiter", "event2_6")])
}

var event2_5_2_3 = function () {
    state.mother -= 5
    e.show("„Ach Kind…“, seufzt sie, leicht genervt, „das ist doch alles Mumpitz was du erzählst.“ Und dann geht sie schnurstracks in das Wohnzimmer zurück, wo der Fernseher wie immer läuft.",
        [new Choice("Weiter", "event2_6")])
}

var event2_5_3 = function () {
    state.mother += 5
    e.show("„Wie kannst du es WAGEN,“ keifft sie dich an, „mich nach allem so herablassend zu behandeln? ICH habe dich aufgezogen, ICH…“<br/>Sie bricht ab. Dann stürmt sie in das Wohnzimmer.",
        [new Choice("Weiter", "event2_6")])
}

var event2_5_4 = function () {
    state.mother -= 10
    e.show("„Ausnüchtern? AUSNÜCHTERN? Wie kannst du es WAGEN,“ keifft sie dich an, „mich nach allem so herablassend zu behandeln? ICH habe dich aufgezogen, ICH lasse dich noch immer bei mir wohnen, obwohl DU längst eine eigene Wohnung haben solltest.“<br/>Wütend stürmt sie in das Wohnzimmer.",
        [new Choice("Weiter", "event2_6")])
}

var event2_5_5 = function () {
    state.mother -= 10
    e.show("Du nimmst dein Essen und lässt sie ohne eine Antwort stehen. Hinter dir hörst du sie toben, aber du bist schnell die Treppe hinauf und in deinem Zimmer, wo dir niemand angetrunkene Vorwürfe machen kann.",
        [new Choice("Weiter", "event2_6")])
}

var event2_6 = function () {
    e.show("Am nächsten Tag besuchst du Alex. Ähnlich wie du wohnt sie in einem weniger elegantem Teil der Stadt. Als sie die Tür öffnet, fällt dir auf, dass sie ihre schwarzen Haare stark gekürzt hat.<br/>„Ich sehe, dir fällt meine neue Frisur auf“, grinst sie dich an. „Ich dachte mir, es wird für etwas praktischeres. Weniger Zeitaufwand, gleiches stellares Ergebnis. Oder würdest du sagen, die Haar-Brillianz-Relation hat sich verschlechtert? Und bevor du antwortest, denk bitte daran, dass ich in dein Geheimnis eingeweiht bin, und nicht zögern werde, dich bei mangelnder Würdigung auszuliefern.“<br/>Du kannst ein Grinsen nicht ganz unterdrücken, während du ihr versicherst, dass sie ein Musterbeispiel für praktische Eleganz ist.<br/>Als du ihre Wohnung betrittst, bemerkst du, dass diese in gewisser Weise auch die neue Frisur widerspiegelt: simpel und funktional gehalten, aber zugleich auch so elegant, wie man es ohne größere Ausgaben gestalten kann. Allerdings nimmst du dir vor, sie nicht direkt darauf anzusprechen, da dir heute nicht nach einer langen Diskussion über Konsumterror und Kommerzwahnsinn ist.<br/><br/>„Hast du Hunger? Ich habe noch Chili sin Carne über.“ Du lehnst dankend ab, und fragst sie stattdessen, ob sie etwas gefunden hat, dass dir mit dem Kristall weiterhelfen kann. Sie wirft dir über den Rand ihrer Brille einen seltsamen Blick zu: „Nun… ja. Schon. Es gibt ein Buch über Kristalle, aber der Verkäufer will den Kauf nur persönlich abschließen. Und er hat mehrfach betont, dass der Preis nur eine Verhandlungsbasis ist. Möglicherweise möchte er uns ein anderes Geschäft vorschlagen, wenn wir unter vier Augen sind? Ich weiss es nicht, aber mir gefällt das nicht. Gib mehr etwas mehr Zeit, und ich finde bestimmt etwas besseres, okay?“",
        [new Choice("Weiter", "event2_6_1")])
}

var event2_6_1 = function () {
    let text = "Als du ihr von der drohenden magischen Überladung erzählst, verzieht sie das Gesicht: „Nun, ich schätze dann hat sich die Diskussion von selbst erledigt. Wir werden uns also wohl oder übel persönlich mit dem Käufer treffen müssen. Und ja, ich meine dich und mich“, ergänzt sie, als sie deinen überraschten Blick sieht. „Wenn du das nächste Mal losziehst, will ich nicht erst wieder alles im Nachhinein hören müssen. Ich meine, kannst du dir vorstellen, wie sich das anfühlt? Ich sitze morgens vor dem Fernseher, mampfe mein Müsli, und überlege mir, ob es nicht eine gleichwertige Sorte mit weniger Rosinen gibt, und du rufst mich an und erzählst mir, dass du den Kampf mit dem System aufgenommen hast!“"
    if (state.gender === 1) {
        text += "Du versuchst sie zu beschwichtigen und klarzustellen, dass du kein magischer Che Guevara bist, aber sie hat sich bereits in Rage geredet: „Und ich habe gedacht ‚Hey, ich helfe meinem Freund dabei, sein magisches Talent zu entdecken, und verfasse Posts gegen die Dummheit der Mehrheit und die Unterdrückung durch die Minderheit, ich bin sowas von Teil der Gegenbewegung‘ – und dann kommst du, mit deinem Testosteronwert von über 9000, und zeigst mir, dass ich mich zu sehr auf meinen Leistungen ausgeruht habe.“"
    } else {
        text += "Du versuchst sie zu beschwichtigen und klarzustellen, dass du keine magische Che Guevara bist, aber sie hat sich bereits in Rage geredet: „Und ich habe gedacht ‚Hey, ich helfe meiner Freundin dabei, ihr magisches Talent zu entdecken, und verfasse Posts gegen die Dummheit der Mehrheit und die Unterdrückung durch die Minderheit, ich bin sowas von Teil der Gegenbewegung‘ – und dann kommst du, vollführst eine meisterhafte Demonstration weiblicher Überlegenheit, und zeigst mir, dass ich mich zu sehr auf meinen Leistungen ausgeruht habe.“"
    }
    text += "<br/>Sie atmet kurz durch und beruhigt sich wieder. „Ich komme also mit. Aber das erinnert mich daran, dass ich dich noch etwas anderes fragen wollte.“"
    e.show(text,
        [new Choice("Weiter", "event2_6_2")])
}

var event2_6_2 = function () {
    e.show("„Die Regierung unterdrückt magisches Wissen, weil die Bevölkerung zu verängstigt ist. Aber die Geschichte hat gezeigt, dass Zensur und die Unterdrückung von Wissen immer in einer Katastrophe enden. Also habe ich mir gedacht, wir können unsere Unterlagen digitalisieren, und ebenfalls im Darknet vertreiben. Alles anonymisert und verschlüsselt, versteht sich. Kein Risiko – naja praktisch kein Risiko. Jedes Mal, wenn du über die Straße gehst, könntest du überfahren werden, verstehst du? Aber eben schon sehr sehr sicher. Und nicht nur das, wir könnten sogar etwas Geld dabei verdienen. Ich vermute, dass wir besonders viel mit dem fortgeschritteneren Material absahnen können.",
        [new Choice("„Ich halte das für keine gute Idee. Lass uns lieber so unauffällig wie möglich bleiben.“", "event2_6_2_1"),
        new Choice("„Wir sollten das Wissen verbreiten, aber ich möchte kein Geld dafür haben.“", "event2_6_2_2"),
        new Choice("„Klingt vernünftig. Aber lass uns nur die Grundlagen verkaufen.“", "event2_6_2_3"),
        new Choice("„Gute Idee. Wir brauchen das Geld.“", "event2_6_2_4")])
}

var event2_6_2_1 = function () {
    e.show("Alex sieht einen Moment lang enttäuscht aus, zuckt dann aber mit den Schultern: „Ich dachte, du wärest dafür. Aber du hast wohl Recht damit, dass Tarnung im Moment unsere stärkste Waffe ist.“<br/><br/>Ihr verbringt noch einen angenehmen Nachmittag, und Alex verspricht, sich zu melden, sobald sie Neuigkeiten zu dem Treffen mit dem ominösen Verkäufer hat.",
        [new Choice("Weiter", "event2_7")])
}

var event2_6_2_2 = function () {
    state.alex += 10
    state.profile2 += 10
    e.show("Alex sieht dich mit großen Augen an: „Ich hätte dich nicht für einen Idealisten gehalten. Wow. Okay. So machen wir es.“<br/><br/>Ihr verbringt noch einen angenehmen Nachmittag, und Alex verspricht, sich zu melden, sobald sie Neuigkeiten zu dem Treffen mit dem ominösen Verkäufer hat.",
        [new Choice("Weiter", "event2_7")])
}

var event2_6_2_3 = function () {
    state.profile2 += 10
    state.money += 400
    e.show("Alex reibt sich die Hände: „Gut. Großartig. Es wird auch Zeit, dass wir zurückschlagen.“<br/><br/>Ihr verbringt noch einen angenehmen Nachmittag, und Alex verspricht, sich zu melden, sobald sie Neuigkeiten zu dem Treffen mit dem ominösen Verkäufer hat.",
        [new Choice("Weiter", "event2_7")])
}

var event2_6_2_4 = function () {
    state.profile2 += 25
    state.money += 1000
    e.show("Alex reibt sich die Hände: „Gut. Großartig. Es wird auch Zeit, dass wir zurückschlagen. Und das Geld schadet auch nicht.“<br/><br/>Ihr verbringt noch einen angenehmen Nachmittag, und Alex verspricht, sich zu melden, sobald sie Neuigkeiten zu dem Treffen mit dem ominösen Verkäufer hat.",
        [new Choice("Weiter", "event2_7")])
}

var event2_7 = function () {
    e.show("Wie sich herausstellt, dauert dies allerdings nicht lange. Schon am nächsten Abend starrst du auf die Uhr, darauf wartend, dass du dich auf den Weg machen kannst. Ihr habt beschlossen, euch in der Nähe des vereinbarten Ortes zu treffen, und da es die schlechteste Gegend der Stadt ist, möchtest du ungern zu früh dort sein. Allerdings möchtest du Alex auch nicht alleine dort stehen lassen; Überfälle sind dort keine Seltenheit, und du möchtest dir nicht ausmalen, was einer Frau alleine dort passieren könnte. Aus diesem Grund hast du dich rechtzeitig vorbereitet und wartest nun schon seit zehn Minuten darauf, endlich losgehen zu können.<br/><br/>Deine Mutter sitzt wie immer vor der Mattscheibe und sieht eine neue „Doku“. Irgendwas mit Familien ohne Schulabschluss. Entgegen deiner Gewohnheiten (und weil du noch ein paar Minuten totschlagen musst) wirfst du einen gelangweilten Blick Richtung Fernseher, in dem jemand gerade durch seinen Garten streift. Obwohl es überaus einschläfernd wirkt, fährt sich deine Mutter mit der Hand über die Augen. Überrascht wirfst du einen genaueren Blick auf sie und erkennst gerötete Augen.<br/>Sie wirft dir einen schüchternen, fast verschämten Blick zu: „Kommst du kurz mit? Ich würde gern in den Gartenmarkt gehen, ein bisschen Erde kaufen, und vielleicht ein paar Tomatenpflanzen.“<br/><br/>Wie vom Donner gerührt stehst du da. Tomaten? Seit dein Vater gestorben ist, hat sie nichts mehr im Garten gemacht. Ist dies ihr altes Ich, dass da zum Vorschein kommt? Hektisch denkst du nach, während du Alex anrufst. Der Gartenmarkt ist in der Nähe, aber trotzdem würdest du dich ziemlich verspäten. Und so launisch, wie deine Mutter zur Zeit ist, bezweifelst du, dass sie morgen noch zum Gartenmarkt geht. Aber wenn die Tomaten bereits im Garten ständen, wenn sie wieder Freude an ihren alten Gewohnheiten entwickeln könnte…<br/><br/>Alex scheint keinen Empfang zu haben. Du müsstest gleich los. Und deine Mutter hat gerade bemerkt, dass sie noch gar nichts getrunken hat.",
        [new Choice("Ich mache mich auf den Weg zu Alex.", "event2_7_1"),
        new Choice("Ich bleibe noch hier.", "event2_7_2")])
}

var event2_7_1 = function () {
    e.show("So gern du deiner Mutter auch beistehen würdest, kannst du doch nicht eine so gute Freundin wie Alex einfach im Stich lassen. Dafür hat sie einfach bereits zu viel für dich getan. Als du deiner Mutter absagst, sieht sie dich nur kurz an, und widmet sich dann wieder dem Fernseher. Eilig verlässt du das Haus.<br/><br/>Eine halbe Stunde später steigst du aus dem Bus. Du erwartest halb, dass Alex an der Haltestelle auf dich wartet, aber sie ist nicht hier. Der Geruch von abgestandenem Urin sticht dir in die Nase, und du beschließt, ebenfalls nicht hier zu verweilen. Stattdessen siehst du dich in der hereinbrechenden Dunkelheit um, und kannst Alex vor einem geschlossenen Imbiß ausfindig machen. Als du auf sie zukommst, sieht sie dich erleichtert an: „Gott sei Dank, ich dachte schon, ich müsste noch länger auf dich warten. Lass uns gehen, ich will nicht noch einmal gefragt werden, was ich verkaufe.“<br/>Sie zerrt dich mit sich und sieht sich noch einmal misstrauisch um.",
        [new Choice("Weiter", "event2_8")])
}

var event2_7_2 = function () {
    state.alex -= 10
    state.mother += 10
    e.show("Zum ersten Mal seit einer gefühlten Ewigkeit erkennst du eine Spur ihres alten Selbst wieder. Deine Antwort ist klar: „Natürlich. Lass uns gleich los.“<br/>Deine Mutter sieht dich etwas überrascht an, aber es dauert nicht lange, und ihr seid auf dem Weg. Unterwegs versuchst du noch einmal, Alex telefonisch zu erreichen, und du hast das Glück sie zu erreichen. Alex klingt jedoch alles andere als glücklich: „Was soll das heißen? Ist dir eigentlich klar, was das hier für eine Gegend ist? …Beeil dich, ja?“<br/><br/>Eine halbe Stunde später als verabredet steigst du aus dem Bus. Du erwartest halb, dass Alex an der Haltestelle auf dich wartet, aber sie ist nicht hier. Der Geruch von abgestandenem Urin sticht dir in die Nase, und du beschließt, ebenfalls nicht hier zu verweilen. Stattdessen siehst du dich in der hereinbrechenden Dunkelheit um, und kannst Alex vor einem geschlossenen Imbiß ausfindig machen. Als du auf sie zukommst, sieht sie dich mit einer Mischung aus Erleichterung und Wut an an: „Gott sei Dank, ich dachte schon, ich müsste noch länger auf dich warten. Lass uns gehen, ich will nicht noch einmal gefragt werden, was ich verkaufe.“<br/>Sie zerrt dich mit sich und sieht sich noch einmal misstrauisch um.",
        [new Choice("Weiter", "event2_8")])
}

var event2_8 = function () {
    e.show("Da der Stadtteil euch nicht besonders vertraut ist, und es zudem langsam dunkel wird, stellt sich die Frage, wie ihr euch orientiert.",
        [new Choice("Ich verlasse mich auf mein Gedächtnis und meinen Orientierungssinn.", "event2_8_1"),
        new Choice("Mit einer ausgedruckten Wegbeschreibung.", "event2_8_2"),
        new Choice("Wir leben im 21. Jahrhundert und haben Navigationssysteme auf dem Handy.", "event2_8_3")])
}

var event2_8_1 = function () {
    let text = "Zu Hause hast du dir die Straßennamen sorgfältig eingeprägt, aber in der Realtität sieht die Welt nun doch etwas anders aus. "
    if ((e.getRnd(0, 59) + state.awareness.value) >= 60) {
        text += "Glücklicherweise fällt es dir nicht besonders schwer, deine Erinnerungen anzupassen, so dass ihr ohne Umwege zu eurem Ziel gelangt."
        e.show(text, [new Choice("Weiter", "event2_9")])
    } else {
        text += "Da ist zum Beispiel dieser Seitenweg, der breit genug ist, um Autos durchzulassen, aber gleichzeitig wirkt er nicht wie eine richtige Straße. Oder das Staßenschild, das nicht mehr lesbar ist. Insgesamt ist dies doch recht verwirrend."
        e.show(text, [new Choice("Weiter", "event2_8_1_1")])
    }
}

var event2_8_1_1 = function () {
    e.show("Eure Bemühungen bleiben nicht unbemerkt. Möglicherweise wirkt ihr hilflos, oder vielleicht fallt ihr einfach auf, weil ihr nicht aus der Nachbarschafft stammt, aber so oder so zieht ihr die Aufmerksamkeit von drei Männern auf euch, die sich mit spöttischem Grinsen in euren Weg stellen. Ihr bleibt stehen, und du versuchst, Selbstsicherheit und Ruhe auszustrahlen. Offensichtlich lassen sich die drei jedoch davon nicht besonders beeindrucken: Während zwei von ihnen langsam auf euch zugehen, schlägt der dritte einen Bogen, um euch den Weg abzuschneiden.<br/>„Ey, lasst mal sehen was ihr so in den Taschen habt. Oder wir holen es uns, wenn ihr auf&quot;s Maul wollt.“<br/>Dir bleiben nur einige Sekunden, bevor sie euch in die Ecke getrieben haben.",
        [new Choice("Ich schlage zu, bevor sie reagieren können.", "event2_8_1_1_1"),
        new Choice("Ich laufe davon. Selbst wenn sie mich einholen sollten, kann ich immer noch kämpfen.", "event2_8_1_1_2"),
        new Choice("Ich verwende einen Schockzauber, um die drei außer Gefecht zu setzen.", "event2_8_1_1_3"),
        new Choice("Ich gebe ihnen die vierhundert Euro, die für das Buch gedacht waren.", "event2_8_1_1_4")])
}

var event2_8_1_1_1 = function () {
    let text = "Du springst auf den Mann zu, der in euren Rücken geraten wollte und nun alleine steht. Du verpasst ihm einen Schlag ins Gesicht, während du hinter dir Fluchen und schnelle Schritte hörst.<br/>"
    if ((e.getRnd(0, 59) + state.mundane.value) >= 70) {
        text += "Ein weiterer Schlag gegen die Schläfe und ein Tritt zwischen die Beine – keine Zeit für falsche Rücksichtnahme – lassen deinen Gegner zu Boden gehen. Gerade noch rechtzeitig, denn hinter dir taucht bereits der zweite auf. Als er seinen Kameraden am Boden sieht, zögert er kurz, und du nutzt dies zum Angriff. Mit so entschlossener Gegenwehr scheint er nicht gerechnet zu haben; auf jeden Fall macht er zwei hektische Schritte zurück, stolpert, fällt, und schlägt mit dem Hinterkopf auf den Bürgersteig. Der dritte, der sich bislang damit begnügt hat, Alex zu bedrängen, sieht dich mit großen Augen an, und rennt davon.<br/><br/>Alex starrt dich mit großen Augen an. Du selbst kannst kaum fassen, dass du gerade drei Männer in die Flucht geschlagen hast. Und das, ohne selbst verletzt zu werden. Trotzdem beschließt du, dich schnell davon zu machen. Nur für alle Fälle."
        e.show(text, [new Choice("Weiter", "event2_9")])
    } else {
        state.money -= 400
        state.alex -= 10
        text += "Du versuchst einen weiteren Schlag gegen die Schläfe, doch du triffst ihn nur an der Schulter. Als du nachsetzen willst, trifft dich plötzlich etwas schweres am Hinterkopf, und du fällst zu Boden. Dein linker Ellenbogen scheint zu explodieren, als du mit diesem auf dem Asphalt aufprallst. Du versuchst dich aufzurichten, doch die beiden Angreifer treten von zwei Seiten unbarmherzig zu und bohren ihre Füße unablässig in deinen Magen, deinen Hinterkopf und unzählige andere Stellen. Schluchzend versuchst du, wenigstens deinen Kopf mit den Armen zu schützen.<br/><br/>Als die Tritte endlich aufhören, spürst du, wie sie durch deine Taschen kramen. Anschließend laufen sie davon, und erst dann traust du dich, deine Augen wieder zu öffnen.<br/><br/>Alex kommt mit bleichem Gesicht auf dich zu. Auch sie hinkt etwas, aber im Wesentlichen scheint sie unverletzt zu sein. Sie schaut dich entsetzt an: „Geht es dir… ich meine… Scheiße.“<br/>Damit scheint alles gesagt. Worte können deine Scham und deine Wut sowieso nicht angemessen ausdrücken.<br/><br/>Eine halbe Stunde später habt ihr euch an einem Bankautomaten neues Geld geholt und in einer öffentlichen Toilette wieder hergerichtet. Entschlossen macht ihr euch auf den Weg zum Treffpunkt."
        e.show(text, [new Choice("Weiter", "event2_9")])
    }
}

var event2_8_1_1_2 = function () {
    state.alex -= 10
    e.show("„Lauf!“, rufst du und sprintest los, die Straße hinunter und um die Ecke, die du gerade erst passiert hast. Hektisch blickst du hinter dich, doch niemand scheint dich zu verfolgen. Du bist allein. Verdammt! Widerstrebend drehst du um.<br/><br/>Als du zurückkehrst, lehnt Alex an der Wand. Von den Männern ist nichts zu sehen. Du rennst auf sie zu: „Alex, alles in Ordnung?“<br/><br/>Aus ihrem bleichen Gesicht wirft sie dir einen starren Blick zu: „Es hat bestimmt Sinn gemacht, in dem Augenblick. Für dich. Du bist sportlicher als ich. Aber… hm. Vergiss es. Ich hatte eh kaum Geld dabei. Alles in Ordnung. Lass uns weiter gehen.“",
        [new Choice("Weiter", "event2_9")])
}

var event2_8_1_1_3 = function () {
    state.profile2 += 15
    e.show("Leise murmelst du die Formel und formst deinen Daumen, Zeige- und Mittelfinger zu Klauen. Die Männer fangen an zu lachen: „Soll das etwa Kung Fu sein?“ In dem Augenblick vollendest du den Zauber, und das Lachen endet abrupt in einem Keuchen, als ihr Kreislauf aussetzt und ihre Beine nicht mehr die Kraft aufbringen, sie zu halten.<br/>Alex sieht dich mit einer Mischung aus Schadenfreude und Erleichterung an: „Echt Hammer. Habe ich schonmal erwähnt, wie neidisch ich bin?“<br/>Du zwinkerst ihr kurz zu, aber du lässt dir den Sieg nicht zu Kopf steigen. Du weisst nur zu gut, dass ihr weiter gehen müsst, einfach nur, weil jemand euch gesehen haben könnte. Glücklicherweise scheint niemand in der Nähe gewesen zu sein.",
        [new Choice("Weiter", "event2_9")])
}

var event2_8_1_1_4 = function () {
    state.money -= 400
    e.show("Kein Geld der Welt ist es wert, dafür sein Leben zu riskieren. Widerwillig gibst du ihnen dein Portemonnaie.<br/>„Wahnsinn, da haben wir ja ein kleines Sparschweinchen erwischt. Bist ’n guter Mensch“, grinst dich der Anführer an, während er die Scheine einsteckt. Dann lässt er deine Geldbörse zu Boden fallen und schaut Alex auffordernd an, die deinem Beispiel folgt. Wenigstens scheint sie kaum Geld dabei zu haben.<br/>Johlend ziehen die drei weiter und lassen dich mit Alex allein.<br/><br/>Sie sieht dich etwas ratlos an: „Nun… es hätte schlimmer kommen können. Bist du noch bereit, weiter zu machen?“<br/>Du nickst.<br/><br/>Nach einem kurzem Umweg zum nächsten Geldautomaten kommt ihr kurz darauf beim Treffpunkt an.",
        [new Choice("Weiter", "event2_9")])
}

var event2_8_2 = function () {
    let text = "Alex grinst dich kurz an, als du das Papier hervorholst:„Wie Neunziger von dir.“<br/>Du grinst zurück, und versuchst, die Wegbeschreibung mit der Realität in Verbindung zu bringen. "
    if ((e.getRnd(0, 59) + state.awareness.value) >= 50) {
        text += "Glücklicherweise fällt dir dies leicht, so dass ihr ohne Umwege zu eurem Ziel gelangt."
        e.show(text, [new Choice("Weiter", "event2_9")])
    } else {
        text += "Dies ist jedoch leichter gesagt als getan. Da ist zum Beispiel dieser Seitenweg, der breit genug ist, um Autos durchzulassen, aber gleichzeitig wirkt er nicht wie eine richtige Straße. Oder das Straßenschild, das nicht mehr lesbar ist. Leicht verwirrt versucht ihr, euch zu orientieren."
        e.show(text, [new Choice("Weiter", "event2_8_1_1")])
    }
}

var event2_8_3 = function () {
    e.show("Die Segnungen der Zivilisation sind atemberaubend.<br/><br/>Während ihr auf den kleinen Bildschirm von Alex Handy starrt, vergesst ihr natürlich nicht, beim Überqueren der Straße auf den Verkehr zu achten, doch anscheinend fahren um diese Uhrzeit nicht besonders viele Autos hier entlang. Auch die einsame Fußgängerin, die euch entgegen kommt, scheint nicht besonders auf den Verkehr zu achten. Du wirfst einen erneuten Blick auf das Handy, als Alex dich plötzlich zu Boden wirft. Du stöhnst auf, als sie unsanft auf dir landet, doch Alex faucht dich nur an: „Das Miststück hat mich geschubst. Und mein Handy geklaut.“ Du springst sofort auf, und sieht das Mädchen in eine Seitengasse abbiegen.",
        [new Choice("Ich lasse sie laufen.", "event2_8_3_1"),
        new Choice("Ich verfolge sie.", "event2_8_3_2"),
        new Choice("Ein Schockzauber am Abend ist erfrischend und labend.", "event2_8_3_3")])
}

var event2_8_3_1 = function () {
    state.alex -= 10
    e.show("Alex versucht ihr nachzueilen, aber nach ein paar humpelnden Schritten hält sie an. Anscheinend hat sie sich bei dem Sturz leicht verletzt. Wütend funkelt sie dich an: „Hättest du nicht wenigstens irgendetwas versuchen können?“<br/>Natürlich gab es gute Gründe, dass du bei ihr geblieben bist, aber davon scheint sie nicht viel hören zu wollen.<br/><br/>Ihr verbringt einige Minuten damit, euch auszuruhen, und als Alex endlich wieder normal gehen kann, versucht ihr, euch ohne Hilfe zu orientieren.",
        [new Choice("Weiter", "event2_8_1_1")])
}

var event2_8_3_2 = function () {
    if ((e.getRnd(0, 59) + state.mundane.value) >= 40) {
        e.show("Mit weit ausholenden Schritten eilst du ihr hinterher. Du ignorierst das Brennen in deinen Beinen so gut es geht, und nach rund dreißig Metern hast du sie fast eingeholt. Als sie sieht, dass du zu ihr aufschließt, wirft sie dir einen erschrockenen Blick zu – du bist dir nicht einmal sicher, ob sie schon volljährig ist – und greift mit der Hand in ihre Jackentasche. Du stockst kurz, als sie ihre Hand wieder herauszieht, hält sie keine Waffe, sondern lediglich Alex’ Handy. Während du dich noch fragst, was sie vorhat, lässt sie das Handy auf einen Stapel Altpapier fallen und hastet weiter. Du überlegst kurz, ob du sie verfolgen solltest, beschließt dann aber, dass damit nicht viel zu gewinnen ist.<br/>Kurz darauf kehrst du zu Alex zurück. Sie hat sich bei dem Sturz anscheinend leicht verletzt und war deshalb nicht in der Lage, mit euch beiden mitzuhalten. Als du ihr das Handy reichst, lächelt sie dich dankbar an: „Hat ja lange genug gedAU…“, stöhnt sie, als sie ihren Fuß überlastet.<br/><br/>Ihr beschließt, noch ein paar Minuten zu warten, und nach kurzer Zeit hat sich Alex soweit erholt, dass ihr weitergehen könnt.<br/><br/>",
            [new Choice("Weiter", "event2_9")])
    } else {
        state.alex -= 5
        e.show("Mit weit ausholenden Schritten eilst du ihr hinterher. Du ignorierst das Brennen in deinen Beinen so gut es geht, aber anscheinend hast du dich bei dem Sturz leicht verletzt, denn plötzlich gibt dein linker Fuß nach und du stolperst. Zwar kannst du dich gerade noch abfangen, aber jeder weitere Schritt ist schmerzhaft, und du kannst der Diebin nur noch zusehen, wie sie in der Ferne verschwindet.<br/><br/>Langsam humpelst du zu Alex zurück, die sich anscheinend ebenfalls leicht verletzt hat. „Weisst du, vielleicht sollten wir doch mehr Sport treiben“, stöhnt sie auf, als sie dein Humpeln bemerkt.<br/><br/>Ihr habt Glück im Unglück: Nach einigen Minuten seht ihr euch wieder in der Lage, euren Weg fortzusetzen. Jetzt müsst ihr nur noch den richtigen Weg finden.",
            [new Choice("Weiter", "event2_8_1_1")])
    }
}

var event2_8_3_3 = function () {
    state.profile2 += 10
    e.show("Während du ihr hinterher läufst, formst du deinen Daumen, Zeige- und Mittelfinger zu Klauen und keuchst die Formel. Als du die letzte Silbe aussprichst, stolpert die Diebin und schlägt auf dem Asphalt auf. Leicht besorgt näherst du dich ihr und untersuchst sie, so gut du es eben kannst, aber sie scheint sich, von einigen Schürfwunden abgesehen, nicht weiter verletzt zu haben. Dann fällt dir auf, dass sie noch jünger als du zu sein scheint. Vielleicht sechzehn?<br/>Du schüttelst kurz mit dem Kopf, durchsuchst die Taschen nach Alex’ Handy, und drückst es seiner Besitzerin wieder in die Hand.<br/>„Huh“, meint Alex, „ich frage mich ja schon, wie ihr Leben so aussieht. Aber ich fürchte, dafür haben wir jetzt keine Zeit. Lass uns weiter, bevor jemand dies sieht und die Polizei ruft. Falls das jemand hier tut.“",
        [new Choice("Weiter", "event2_9")])
}

var event2_9 = function () {
    e.show("Als ihr endlich die Adresse gefunden habt, seid ihr fast froh, von der Straße runter zu kommen. Fast, denn natürlich wisst ihr nicht genau, was euch im Inneren erwartet. Von Außen wirkt das Grundstück recht unauffällig: Mehrere Parkplätze und ein einzelnes einstöckiges Gebäude, auf dessen Schild das Wort \"Maria's\" sowie eine Pizza abgebildet ist. Die Schalosien sind geschlossen, so dass nicht erkennbar ist, ob sich im Inneren jemand befindet. Obwohl das Schild noch recht neu aussieht, verkündet ein handgeschriebener Zettel, dass das Geschäft vor einigen Wochen geschlossen wurde.<br/>„Scheint sich nicht lange gehalten zu haben. Bei der Gegend kein Wunder”, murmelt Alex dir zu, „aber was machen wir jetzt? Klingeln?”<br/>Als hätte sie jemand gehört, öffnet sich die Eingangstür, und ein Mann mittleren Alters mit kurzen schwarzen Haaren und hellbrauner Haut schaut heraus. Er zögert kurz und winkt euch dann herein. Auch ihr zögert kurz, tretet dann aber ein.<br/><br/>Bis auf einige Tische nahe der Theke ist der Raum nicht beleuchtet. Dort sitzt ein Mann mit rotem Hemd und Krawatte, vor ihm ein altertümlich wirkendes Buch. Er mustert Alex und dich kurz, und du bemerkst, dass seine dunklen Haare einen blonden Ansatz haben.<br/>„Guten Abend. Ihr seid diejenigen, die etwas erwerben möchten?” Er klingt etwas ungläubig. Oder enttäuscht?<br/>Alex nickt: „Aber bevor wir das Geld auf den Tisch legen, möchten wir natürlich einen Blick auf das Buch werfen.”<br/>Euer Gegenüber schiebt euch das Buch zu, und Alex blättert es langsam durch. Obwohl du ebenfalls neugierig bist, wirfst du nur einen kurzen Blick darauf, denn du hast das Gefühl, dass es sicherer ist, die beiden Fremden nicht aus den Augen zu verlieren.<br/>Der Mann mit der Krawatte scheint dich ebenfalls zu mustern, während er mit seinem Handy rumspielt: „Nicht neugierig? Ich schätze mal die Kleine ist die Magierin?”",
        [new Choice("„Magierin? Ich habe keine Ahnung wovon Sie reden.”", "event2_9_1"),
        new Choice("„Ich wüsste nicht, inwiefern das relevant ist.”", "event2_9_2"),
        new Choice("„Ist sie.”", "event2_9_3"),
        new Choice("„Ich bin es. Aber sie kennt sich auch gut mit der Theorie aus.”", "event2_9_4")])
}

var event2_9_1 = function () {
    e.show("Er grinst dich humorlos an: „Natürlich nicht.“",
        [new Choice("Weiter", "event2_10")])
}

var event2_9_2 = function () {
    e.show("Er starrt dich kurz an: „Ist es nicht. Ich betreibe nur Konversation.“",
        [new Choice("Weiter", "event2_10")])
}

var event2_9_3 = function () {
    e.show("Er mustert euch weiter: „Das erklärt natürlich, warum sie das Buch liest.“",
        [new Choice("Weiter", "event2_10")])
}

var event2_9_4 = function () {
    e.show("Er mustert dich genauer: „Muss interessant sein.“",
        [new Choice("Weiter", "event2_10")])
}

var event2_10 = function () {
    e.show("„Wie wäre es mit einem Glas Cola?”, fragt er lächelnd.<br/>Du kannst nicht sagen, dass dir seine seltsame Art sympathisch ist.",
        [new Choice("„Nein danke.”", "event2_10_1"),
        new Choice("„Nein, danke. Was ist mit dir, Alex?”", "event2_10_2")])
}

var event2_10_1 = function () {
    e.show("Er zuckt mit den Schultern. „Wie ihr wollt.”",
        [new Choice("Weiter", "event2_11")])
}

var event2_10_2 = function () {
    state.profile2 += 10
    state.alex -= 5
    e.show("Alex blickt kurz auf, und wirft dir einen mürrischen Blick zu. Der Mann legt den Kopf schief: „Alex, hm? Ein hübscher Name.”",
        [new Choice("Weiter", "event2_11")])
}

var event2_11 = function () {
    e.show("Schließlich klappt Alex das Buch zu. „Wir nehmen es, falls… HEY!”<br/>Ruckartig schnappt Alex nach dem Handy, mit dem der Mann rumgespielt hat, und wirft einen Blick darauf. „Videoaufnahme? Was soll das??”, ruft sie wütend, mit mehr als nur einer Spur Sorge. Vom Eingang her stürmt der Dunkelhäutige heran und geht mit einem Messer in der Hand auf Alex los, die panisch zurück weicht. Dein Gegenüber lächelt euch fast mitleidig zu.",
        [new Choice("Ich bleibe ruhig sitzen und überrede ihn, seinen Mann zurückzupfeifen, damit wir unser Geschäft abschließen können. Schließlich sind wir Profis.", "event2_11_1"),
        new Choice("Ich versuche ihn einzuschüchtern.", "event2_11_2"),
        new Choice("Es bleibt keine Zeit zum Reden. Ich falle dem Angreifer in den Rücken.", "event2_11_3"),
        new Choice("Ein Schockzauber sollte den Angreifer zu Fall bringen.", "event2_11_4")])
}

var event2_11_1 = function () {
    state.alex -= 20
    e.show("Du bemühst dich, deine Stimme möglichst unbeeindruckt klingen zu lassen: „Dieses Chaos hilft doch keinem von uns weiter. Rufen Sie ihren Gorilla zurück, und wir können das Geschäft noch immer abschließen.“<br/>Der Mann im roten Hemd zieht verwundert eine Augenbraue hoch – anscheinend ist er beeindruckt von deiner Kaltschnäuzigkeit. Leider scheint Alex das anders zu sehen.<br/>„Spinnst du? Fuck it!“, faucht sie. Als du dich zu ihr umdrehst, siehst du, dass sie einen kleinen schwarzen Zylinder aus ihrer Jacke gefummelt hat, den sie auf ihren Angreifer richtet. Ein Strahl dunkler Flüssigkeit zischt auf ihn zu, doch scheinbar hat sie in der Hektik nicht richtig gezielt, und der Angreifer kann dem Pfefferspray ausweichen. „Fuck!“<br/><br/>Der Mann im Hemd hebt beschwichtigend die Hände„Genug, genug. So kommen wir nicht weiter.“<br/>Mit langsamen, ruhigen Bewegungen steht er auf, und geht auf seinen Handlanger zu.<br/><br/>Alex, die ihr Spray so fest umklammert hat, dass du ihre weißen Fingerknöchel sehen kannst, tritt zu dir. „Danke für gar nichts!“, zischt sie dir zu.<br/><br/>Inzwischen ist der Mann bei seinem Untergebenem angekommen: „Ich weiß du hast es gut gemeint. Aber ganz offensichtlich sind die beiden zu unberechenbar. JUNGS, WIR BRAUCHEN HILFE!.“",
        [new Choice("Weiter", "event2_12")])
}

var event2_11_2 = function () {
    let text = "„Keinen Schritt weiter, oder ihr brennt!“, rufst du, und hebst bedrohlich die Hände."
    if ((e.getRnd(0, 59) + state.mundane.value) >= 40) {
        text += "<br/>Die beiden erstarren. Furcht blitzt in ihren Gesichern auf. Der Angreifer weicht ein paar Schritte zurück, und du stehst auf und trittst langsam zu Alex, ohne die beiden anderen aus den Augen zu lassen.<br/><br/>„Hör mal, wir können das alles friedlich klären, wenn du mir nur kurz Gelegenheit dazu gibst“, versucht der Mann im Hemd dich zu beschwichtigen. „Schau doch mal“, sagt er, und schlägt eine Seite im Buch auf. Finster starrst du erst ihn an, und wirfst dann einen Blick auf das Buch.<br/><br/>„Pass auf!“, kreischt Alex."
    } else {
        state.alex -= 5
        text += "Keiner von beiden scheint beeindruckt zu sein.<br/><br/>„Fuck it!“, faucht Alex plötzlich. Als du dich zu ihr umdrehst, siehst du, dass sie einen kleinen schwarzen Zylinder aus ihrer Jacke gefummelt hat, den sie auf ihren Angreifer richtet. Ein Strahl dunkler Flüssigkeit zischt auf ihn zu, doch scheinbar hat sie in der Hektik nicht richtig gezielt, und der Angreifer kann dem Pfefferspray ausweichen. „Fuck!“<br/><br/>Der Mann im Hemd hebt beschwichtigend die Hände„Genug, genug. So kommen wir nicht weiter.“<br/>Mit langsamen, ruhigen Bewegungen steht er auf, und geht auf seinen Handlanger zu.<br/><br/>Alex, die ihr Spray so fest umklammert hat, dass du ihre weißen Fingerknöchel sehen kannst, tritt zu dir.<br/><br/>Inzwischen ist der Mann bei seinem Untergebenem angekommen: „Ich weiß du hast es gut gemeint. Aber ganz offensichtlich sind die beiden zu unberechenbar. JUNGS, WIR BRAUCHEN HILFE!."
    }
    e.show(text,
        [new Choice("Weiter", "event2_12")])
}

var event2_11_3 = function () {
    let text = "Du springst auf und hetzt auf Alex' Angreifer zu, der einen Schritt zurückweicht, als er sich plötzlich zwei Gegnern ausgesetzt sieht. Dann verengt er plötzlich die Augen, macht einen schnellen Schritt, und sein Messer nähert sich rasant deinem Brustkorb."
    if ((e.getRnd(0, 59) + state.mundane.value) >= 50) {
        text += "<br/>Panisch versuchst du, gleichzeitig zur Seite zu springen und deine Arme schützend zwischen dich und deine Organe zu halten, und du hast Glück. Du hörst ein leichtes Ratschen, als das Messer deinen Ärmel streift, aber du bist unverletzt.<br/><br/>„Fuck it!“, faucht Alex plötzlich. Als du dich zu ihr umdrehst, siehst du, dass sie einen kleinen schwarzen Zylinder aus ihrer Jacke gefummelt hat, den sie auf ihren Angreifer richtet. Ein Strahl dunkler Flüssigkeit zischt auf ihn zu, doch scheinbar hat sie in der Hektik nicht richtig gezielt, und der Angreifer kann dem Pfefferspray ausweichen. „Fuck!“<br/><br/>Der Mann im Hemd hebt beschwichtigend die Hände„Genug, genug. So kommen wir nicht weiter.“<br/>Mit langsamen, ruhigen Bewegungen steht er auf, und geht auf seinen Handlanger zu.<br/><br/>Alex, die ihr Spray so fest umklammert hat, dass du ihre weißen Fingerknöchel sehen kannst, tritt zu dir.<br/><br/>Inzwischen ist der Mann bei seinem Untergebenem angekommen: „Ich weiß du hast es gut gemeint. Aber ganz offensichtlich sind die beiden zu unberechenbar. JUNGS, WIR BRAUCHEN HILFE!“"
    } else {
        state.damage += 1
        text += "Panisch versuchst du, gleichzeitig zur Seite zu springen und deine Arme schützend zwischen dich und deine Organe zu halten, aber du bist nicht schnell genug. Ein stechender Schmerz dringt tief in deine Seite, und als deine Atmung stockt, hast du einen Augenblick lang die schreckliche Ahnung, dass deine Lunge durchbohrt wurde, doch dann lässt dich der Schmerz aufstöhnen, und du hast zumindest die Gewissheit, nicht sofort sterben zu müssen.<br/><br/>„Fuck it!“, faucht Alex plötzlich. Als du dich zu ihr umdrehst, siehst du, dass sie einen kleinen schwarzen Zylinder aus ihrer Jacke gefummelt hat, den sie auf ihren Angreifer richtet. Ein Strahl dunkler Flüssigkeit zischt auf ihn zu, doch scheinbar hat sie in der Hektik nicht richtig gezielt, und der Angreifer kann dem Pfefferspray ausweichen. „Fuck!“<br/><br/>Der Mann im Hemd hebt beschwichtigend die Hände„Genug, genug. So kommen wir nicht weiter.“<br/>Mit langsamen, ruhigen Bewegungen steht er auf, und geht auf seinen Handlanger zu.<br/><br/>Alex, die ihr Spray so fest umklammert hat, dass du ihre weißen Fingerknöchel sehen kannst, tritt zu dir, hilft dir auf, und zerrt dich unsanft ein paar Meter weiter.<br/><br/>Inzwischen ist der Mann bei seinem Untergebenem angekommen: „Ich weiß du hast es gut gemeint. Aber ganz offensichtlich sind die beiden zu unberechenbar. JUNGS, WIR BRAUCHEN HILFE!“"
    }
    e.show(text,
        [new Choice("Weiter", "event2_12")])
}

var event2_11_4 = function () {
    state.profile2 += 10
    e.show("Du springst auf und rufst die Formel, die den Kreislauf des Angreifers überlasten soll. Obwohl nur einige Sekunden vergehen, scheint dir die Zeit quälend langsam vorzukommen. Endlich vollendest du den Zauber, und du atmest erleichtert aus, als Alex' Angreifer zu Boden sinkt.<br/><br/>Der Mann im Hemd wirkt plötzlich etwas bleich und hebt beschwichtigend die Hände „Genug, genug. So kommen wir nicht weiter. Geht es… geht es ihm gut? Kann ich nach ihm sehen?“<br/>Du nickst kurz, und der Mann steht auf. Doch statt zu seinem Kameraden zu gehen, springt er hinter einen Tisch in Deckung.<br/>„JUNGS, WIR BRAUCHEN HILFE!“",
        [new Choice("Weiter", "event2_12")])
}

var event2_12 = function () {
    e.show("Eine Nebentür springt auf, und zwei weitere Männer und eine Frau kommen herausgestürmt, Pistolen im Anschlag. Noch während du dich fragst, was zur Hölle hier eigentlich los ist, sucht ihr hinter der Theke Deckung. Die donnernden Schüsse der Pistolen hallen im Raum wieder, während die Kugeln in die Wand oberhalb der Theke einschlagen und Putz auf euch hernieder prasselt. Du bist halb betäubt vor Schock: Noch nie hat jemand auf dich geschossen. Geschossen! Auf dich!<br/><br/>Als du in Alex' weit aufgerissen Augen starrst, fallen dir zwei Dinge auf. Erstens, dass sie genauso panisch aussieht, wie du es vermutlich gerade tust. Und dass du diesen Blick schon in Filmen gesehen hast – üblicherweise kurz bevor die Schauspieler erschossen wurden.<br/><br/>Du reißt dich zusammen. Dir bleiben nur Sekunden.",
        [new Choice("Dreifacher Schockzauber. Schwierig, aber theoretisch schaffbar.", "event2_12_1"),
        new Choice("Zweifacher Tarnzauber. Könnte klappen.", "event2_12_2"),
        new Choice("Flammendes Inferno. Zuverlässig, aber tödlich für die anderen.", "event2_12_3")])
}

var event2_12_1 = function () {
    let text = "Du konzentrierst dich auf den schwierigen Zauber und wartest auf den finalen Augenblick, dann spähst du hinter der Theke hervor und lässt den Zauber los."
    if ((e.getRnd(0, 59) + state.magic.value) >= 65) {
        text += "<br/>Der unsichtbare Zauber rast direkt auf deine Angreifer zu. Gleichzeitig erspäht dich die Frau und schießt, doch die Kugel schlägt nur neben dir ein. Während du noch steif vor Schreck auf das neue Loch im Boden starrst, fallen deine Gegner zu Boden.<br/><br/>In der plötzlichen Ruhe scheint die Welt einen Augenblick still zu stehen."
    } else {
        state.damage += 1
        text += "<br/>Der unsichtbare Zauber rast direkt auf deine Angreifer zu. Gleichzeitig erspäht dich die Frau und schießt, doch die Kugel schlägt nur neben dir ein. Während du noch steif vor Schreck auf das neue Loch im Boden starrst, fallen deine Gegner zu Boden.<br/><br/>In der plötzlichen Ruhe scheint die Welt einen Augenblick still zu stehen."
    }
    e.show(text,
        [new Choice("Weiter", "event2_12_1_1")])
}

var event2_12_1_1 = function () {
    e.show("Du atmest tief durch und stehst auf. Deine Angreifer liegen im Raum verteilt auf dem Boden. Ansonsten ist jedoch niemand zu sehen. Auch das Buch ist verschwunden. Anscheinend ist der Mann im roten Hemd während des Kampfes geflohen und hat das Buch mit genommen. Oder lauert er euch möglicherweise auf? Oder hat er noch mehr Verstärkung gerufen? Möglicherweise ist auch die Polizei durch die Schüsse alarmiert wurden. Es kommt dir zwar unwahrscheinlich vor, aber bislang weißt du auch nicht, warum ihr überhaupt angegriffen wurdet.<br/><br/>In Anbetracht der Tatsache, dass ihr keine Ahnung habt, was vor sich geht, scheint es eine gute Idee zu sein, an einem anderen Ort darüber nachzudenken. Ihr verlasst das Gebäude so schnell ihr könnt.",
        [new Choice("Weiter", "event2_13")])
}

var event2_12_2 = function () {
    let text = "Du konzentrierst dich auf den Tarnzauber, und nach wenigen Sekunden seid ihr unsichtbar. Du tastest nach Alex' Hand und ziehst sie mit dir. Als der Kugelhagel einen Augenblick aussetzt, schleicht ihr hinter der Theke hervor. Die drei Schützen wirken angespannt, hasserfüllt, und zugleich… ängstlich?<br/>Da du dir nicht sicher bist, wie lange du euch beide tarnen kannst, beschließt du, dich aus dem Staub zu machen. Du bemerkst, dass die Eingangstür offen ist, und zerrst Alex' möglichst leise mit dir. Doch als du gerade über die Schwelle schreitest, verlierst du plötzlich die Kontrolle über die Kraftmatrix."
    if ((e.getRnd(0, 59) + state.magic.value) >= 40) {
        text += "<br/>Schnell verdoppelst du deine Kräfte und hältst den Zauber aufrecht. Dann geht ihr langsam weiter. Erst als ihr draußen und in einiger Entfernung zum Gebäude steht, lässt du den Tarnzauber fallen."
    } else {
        state.damage += 1
        text += "<br/>Schnell verdoppelst du deine Kräfte, doch dabei entgleitet dir die Kontrolle. Der Schleier erlischt, und mit einem Flackern werdet ihr plötzlich wieder sichtbar. Die Frau schreit auf, wirbelt herum, und schießt dir direkt in die Schulter. Schmerz explodiert in deiner Schulter, doch gleichzeitig gibt dir das Adrenalin mehr als genug Kraft, um den Zauber zu erneuen. Du beißt die Zähne zusammen und zerrst Alex mit dir. Hinter euch hört ihr wütende Rufe, aber du bist dir sicher, dass sie euch nicht sehen können.<br/>Erst als ihr in einiger Entfernung zum Gebäude steht, lässt du den Tarnzauber fallen.<br/>Dann nimmst du dir einen Augenblick, um deine Wunden mittels Magie zu heilen."
    }
    e.show(text,
        [new Choice("Weiter", "event2_13")])
}

var event2_12_3 = function () {
    state.collateral += 3
    e.show("Grundlegende Energien zu beschwören ist die einfachste Art der Magie. Einen Schlüssel schweben zu lassen ist genauso einfach, wie eine Kerze zu entzünden. Aus diesem Grund gelingt es dir binnen weniger Sekunden, eine glühend weiße Kugel zwischen deinen Händen entstehen zu lassen, heiß genug, um Metall zu schmelzen, ohne dass die Hitze deine Haut versengt.<br/><br/>Und dann lenkst du die Hitze in einem glühenden Strahl um die Theke.<br/><br/>Du hörst die Frau noch einen Warnschrei ausrufen, doch was auch immer sie zu sagen hatte, wird von dem tobenden Prasseln des Feuersturms hinfortgerissen. Alex und du müsst beide Husten, als ein Großteil des Sauerstoffs im Raum schlagartig von den Flammen aufgebraucht wird, die den dunklen Raum in taghelles Licht tauchen.<br/><br/>Schwindel ergreift dich, und dir wird klar, dass ihr schnellstmöglichst das Gebäude verlassen müsst, wenn ihr nicht einer Rauchvergiftung zum Opfer fallen wollt. Als ihr aufspringt, schlägt euch die lodernde Hitze des Infernos entgegen, die euch zusammen mit dem beißenden Rauch die Tränen in die Augen treibt. Hustend hastet ihr durch die bizarre Landschaft aus dunklen Rauchschwaden und hellen Feuersäulen, dir vor Sekunden noch ein Restaurant waren, vorbei an den brennenden Überresten, die einmal Möbel und Menschen waren.<br/><br/>Als ihr durch die Tür stürmt, atmet ihr erleichtert aus, als ihr endlich wieder klar atmen könnt, doch Alex zieht dich mit sich die Straße herunter, weit weg von dem brennenden Haus.",
        [new Choice("Weiter", "event2_13")])
}

var event2_13 = function () {
    e.show("Als ihr euch endlich halbwegs sicher seid, dass euch niemand beobachtet, atmet ihr erleichtert auf. Während du dich noch fragst, was denn gerade überhaupt passiert ist, durchforstet Alex das erbeutete Handy. Du siehst ihr über die Schulter, und bemerkst, dass eure Unterhaltung mit der Handykamera aufgenommen wurde.<br/><br/>Alex runzelt die Stirn: „Ziemlich belastendes Material.“ <br/>Sie lächelt dir humorlos zu. „Gut dass ich das bemerkt habe. Allerdings erklärt das noch immer nicht, was die überhaupt vorhatten. Sollte das ein Erpressungsversuch werden? Polizei war das jedenfalls nicht. Ich frage mich… oh verdammt!“<br/><br/>„Alex? Was ist los?“<br/><br/>„Das Handy kopiert alles direkt in eine Cloud. Das bedeutet, wer auch immer die Zugangsdaten hat, kann auf das Video zugreifen. Und anscheinend sind die Zugangsdaten nicht auf dem Handy gespeichert.“<br/><br/>Ein ungutes Gefühl macht sich in deinem Magen breit, als du besorgt nachfragst: „Soll das heißen, wer auch immer uns schaden wollte, hat noch immer das Video?!“<br/><br/>Alex nickt langsam, und das ungute Gefühl in deinem Magen steigert sich zu einer leichten Übelkeit. Sollte dieses Video an die Öffentlichkeit gelangen, wäre euer beider Leben schlagartig vorbei. Bei der gegenwärtige Angst der Bevölkerung vor unkontrollierter Magie und der damit verbundene Nulltolleranzpolitik der Regierung könntet ihr froh sein, nur im Gefängnis zu landen.",
        [new Choice("Weiter", "event2_14")])
}

var event2_14 = function () {
    let choices = [
        new Choice("Ich lasse ihn fahren.", "event2_14_1"),
        new Choice("Ein Ball kinetischer Energie dürfte den Wagen von der Straße abbringen.", "event2_14_2"),
        new Choice("Fressen oder gefressen werden… ich lege meine ganze Kraft in den Zauber.", "event2_14_3")
    ]
    if (state.magic.value >= 30) {
        choices.push(new Choice("Weder noch. Ich fliege ihm hinterher.", "event2_14_4"))
    }
    if (state.lore.value >= 25) {
        choices.push(new Choice("Noch besser: Ich knüpfe einen magischen Faden zum Wagen, damit ich ihn bequem wiederfinden kann.", "event2_14_5"))
    }
    e.show("Es gibt nur eine Lösung, auch wenn du dich kaum traust, sie auszusprechen: „Wir müssen zurück. Vielleicht finden wir Spuren, die uns weiterhelfen.“<br/><br/>Alex öffnet den Mund, um zu protestieren, aber kein Laut dringt aus ihr hervor. Ihr muss klar sein, dass dies die einzige Chance ist, die Gefahr abzuwenden.<br/><br/>Zögerlich macht ihr euch wieder auf den Weg zurück zum Restaurant, während du überlegst, was das beste Vorgehen wäre.<br/><br/>„VORSICHT!“ ruft Alex plötzlich und zieht dich hinter einen verrosteten Ford. Während du noch panisch versuchst, die Situation einzuschätzen, hörst du plötzlich zwei donnernde Schüsse, dicht gefolgt von einem dumpfen „Fump Fump“ direkt hinter dir. Hektisch drehst du dich um, und bemerkst zwei Einschusslöcher in der verblassten Backsteinmauer. Mit einer seltsamen Mischung aus Schrecken und Erleichterung stellst du fest, dass die todbringenden Kugeln gut drei Meter neben euch eingeschlagen sind und euch um einiges verfehlt haben. Dann mischt sich Wut dazu.<br/><br/>“Was hast du gesehen?“, fragst du Alex, aber bevor sie Antworten kann, hörst du einen Motor aufheulen, und aus einer nahen Seitengasse kommt ein Wagen angeschossen, am Steuer der Mann im roten Hemd, das Fenster heruntergekurbelt und mit eine Pistole in eure Richtung zielend. Ihr geht wieder in Deckung, zwei weitere Schüsse lösen sich, und dann ist der Wagen an euch vorbei und rast die Straße entlang.<br/><br/>Die Zeit scheint wie in Zeitlupe zu vergehen, als du deine Optionen abwegst. <br/>Du könntest ihn entkommen lassen, aber du bezweifelst, dass er nicht irgendetwas mit dem Video vorhat. Eventuell könntest du ihn mit einem kinetischen Stoß von der Straße fegen, aber es ist fraglich, ob du die Energie bündeln kannst, bevor er außer Reichweite ist. Zumal ein so provozierter Unfall eventuell tödlich sein könnte. Mit mehr Krafteinsatz könntest du das Reichweitenproblem natürlich umgehen, aber dadurch würden Kollateralschäden noch wahrscheinlicher.",
        choices)
}

var event2_14_1 = function () {
    state.profile2 += 40
    e.show("Du wählst die menschliche Lösung und lässt ihn fahren. <br/><br/>Alex starrt dem Wagen hinterher und schüttelt sich kurz: „Weisst du, ich hätte nicht erwartet, dass heute so oft auf mich geschossen wird.“ Sie seufzt. „Aber ich vermute mal, das ist noch nicht vorbei? Wir müssen uns immer noch um das Video kümmern. Und das Buch brauchen wir auch noch.“<br/><br/>Erschöpfst fährst du dir mit den Händen durchs Gesicht. Mit Ebay wäre alles so viel einfacher gewesen…",
        [new Choice("Weiter", "event2_14_1_1")])
}

var event2_14_1_1 = function () {
    e.show("Immerhin habt ihr Glück im Unglück: Nach gut einer Stunde findet Alex im Handy eine Adresse, die zu dem Besitzer des Handys zu gehören zu scheint. Mit öffentlichen Transportmitteln benötigt ihr gut eine weitere halbe Stunde, um anzukommen.",
        [new Choice("Weiter", "event2_15")])
}

var event2_14_2 = function () {
    let text = "Schnell bündelst du die Kräfte über deiner rechten Hand, sorgfältig darauf bedacht, nicht mit der anderen Hand in die quasi unsichtbare Ansammlung von Bewegungsenergie zu geraten, und dann gibst sie mit einer Drehung des Handgelenks und einem Schlüsselwort frei."
    if ((e.getRnd(0, 59) + state.magic.value) >= 50) {
        state.guydown += 1
        e.show(text + "<br/><br/>Obwohl du die Kraft kaum sehen kannst, ist das Resultat umso beeindruckender. Der Wagen scheint von einem unsichtbaren LKW gerammt zu werden, überschlägt sich, und wird mit dem ohrenbetäubenden Kreischen von Metall und Plastik gegen eine Hauswand gedrückt.<br/><br/>Schnell läufst du auf den Wagen zu, denn du möchtest dem Fahrer keine Gelegenheit geben, seine Pistole erneut zu zücken.<br/><br/>Wie sich herausstellt, ist deine Vorsicht unbegründet. Bewegungslos liegt er im Fahrersitz, sein Blut über weite Teile der Innenausstattung verteilt und Teile der Fensterscheibe aus seinem Körper ragend. Er atmet schwach.<br/>„Oh Gott“, stöhnt Alex, „was… was tun wir denn nur?“",
            [new Choice("„Wir nehmen das Buch und seine Adresse.“", "event2_14_2_1"),
            new Choice("„Wir rufen einen Krankenwagen, nehmen das Buch und seine Adresse.“", "event2_14_2_2")])
    } else {
        state.profile2 += 40
        e.show(text + "<br/><br/>Die Energie rast auf den Wagen zu, doch als er plötzlich rechts abbiegt, fliegt sie weiter geradeaus und zerfetzt eine Mülltonne, deren Überreste sich über die Dächer verteilen.<br/><br/><br/>Erschöpfst fährst du dir mit den Händen durchs Gesicht. Mit Ebay wäre alles so viel einfacher gewesen…",
            [new Choice("Weiter", "event2_14_1_1")]) // ja, "event2_14_1_1", kein Tipfehler
    }
}

var event2_14_2_1 = function () {
    state.collateral += 3
    e.show("Alex überlegt kurz und nickt dann: „Vielleicht hast du Recht. Er hätte uns wohl auch keinen Arzt gerufen. Und ich möchte nicht, dass er nochmal auf uns schießt.“<br/><br/>Ihr schnappt euch das Buch und macht euch auf den Weg zu der Adresse, die auf seinem Ausweis vermerkt war.<br/><br/>Mit dem Buch in eurem Besitz fühlt sich der Abend nicht mehr wie ein kompletter Misserfolg an, aber du wirst erst ruhig schlafen können, wenn du das Video entgültig gelöscht hast.",
        [new Choice("Weiter", "event2_15")])
}

var event2_14_2_2 = function () {
    e.show("Alex überlegt kurz und seufzt dann: „Ist wohl besser so. Verdient hat er es aber nicht gerade.“<br/>Ihr ruft einen Krankenwagen, schnappt euch das Buch, und macht euch auf den Weg zu der Adresse, die auf seinem Ausweis vermerkt war.<br/><br/>Mit dem Buch in eurem Besitz fühlt sich der Abend nicht mehr wie ein kompletter Misserfolg an, aber du wirst erst ruhig schlafen können, wenn du das Video entgültig gelöscht hast.",
        [new Choice("Weiter", "event2_15")])
}

var event2_14_3 = function () {
    state.collateral += 3
    state.profile2 += 10
    e.show("Schnell komprimierst du so viel Energie, wie du nur kannst, über deinen beiden Handflächen, sorgfältig darauf bedacht, sie nicht zu früh zu entfesseln, und dann gibst sie mit einer Drehung der Handgelenke und einem Schlüsselwort frei.<br/><br/>Die fast unsichtbare Kraftwelle rast die Straße entlang, fegt einige Mülltonnen zur Seite, und erfasst den Wagen, der sich überschlägt, mit einem markerschütterndem Knall in die Wand eines Gebäudes quetscht, um anschließend mit einem Scheppern auf den Bürgersteig aufzuprallen.<br/><br/>Schnell läufst du auf den Wagen zu, denn du möchtest dem Fahrer keine Gelegenheit geben, seine Pistole erneut zu zücken.<br/><br/>Wie sich herausstellt, ist deine Vorsicht unbegründet. Dass Dach ist vollständig eingedrückt – ebenso die ovale Ruine aus Knochensplittern und blutigen Fetzen, die einmal der Kopf des Fahrers waren. <br/>Du unterdrückst einen Würgereiz, als du die Tür öffnest, um in dem Autowrack nach dem Buch zu suchen. Glücklicherweise findest du es schnell, zusammen mit dem Ausweis des Fahrers.<br/><br/>Alex sieht ebenfalls sehr blass aus, und du bist dir ziemlich sicher, dass ihr beide unter anderen Umständen euch schneller vom Auto entfernen könntet.<br/><br/>Immerhin habt ihr das Buch an euch gebracht, aber du wirst erst ruhig schlafen können, wenn du das Video entgültig gelöscht hast.",
        [new Choice("Weiter", "event2_15")])
}

var event2_14_4 = function () {
    state.profile2 += 10
    e.show("Du schließt einen kurzen Moment die Augen und breitest deine Arme aus, um die Magie deinen ganzen Körper umspülen zu lassen. Als du die Augen aufschlägst und die Magie in Bewegungsenergie umwandelst, lösen sich deine Füße vom Boden und du steigst in die Luft. Obwohl du nicht so schnell bist wie der Wagen, musst du nicht auf den restlichen Verkehr und eventuelle Hindernisse Rücksicht nehmen, so dass du problemlos folgen kannst.<br/><br/>Der kühle Wind am Abendhimmel rauscht beruhigend in deinen Ohren, und wie eine zwei Meter große Eule folgst du deiner Beute. Einzige Zeit später hält der Wagen vor einem Gebäude. Während der Fahrer aussteigt, musterst du die Umgebung aus fünzig Metern Höhe. Du möchtest schließlich nicht noch einmal überrascht werden.<br/><br/>Es handelt sich um ein einfaches Reihenhaus in einer etwas besseren Gegend am Rande der Stadt. Jedes Grundstück hat einen kleinen Vorgarten, der Teils von den Straßenlaternen beleuchtet wird. Abfallbehälter zur Mülltrennung stehen sauber aufgereiht an den Wänden, und gelegentlich siehst du auch eine Rutsche oder eine Schaukel. Insgesamt wirkt es sehr friedlich, und nicht wie ein Ort, an dem Menschen aufeinander schießen.<br/><br/>Vorsichtig lässt du dich hinabgleiten und hüllst dich in die schützende Unsichtbarkeit.",
        [new Choice("Weiter", "event2_16")]) // ja 2_16, nicht 2_15
}

var event2_14_5 = function () {
    e.show("Du fokussierst deinen Blick auf den Wagen und stellst dir einen unsichtbaren Faden vor, der zwischen dem Kennzeichen und deiner Hand verläuft, und sprichst die Formel, die den Faden von einer bloßen Vorstellung zu einer tatsächlichen Verbindung anwachsen lässt. Es ist nur eine schwache Verbindung, aber so lange du deine Konzentration nicht unterbrichst, solltest du in der Lage sein, den Wagen wiederzufinden.<br/><br/>Es ist nicht so einfach, einem Wagen zu folgen, wenn man nicht viel mehr als die Himmelsrichtung hat, um ihn zu orten. Die gerade Linie verläuft häufig nicht dem Straßenverkehr, doch gleichzeitig richtet sich euer Ziel nach den Straßen, so dass ihr nach nicht allzu langer Zeit den Wagen wieder findet.<br/><br/>Als ihr ankommt, bist zumindest du einigermaßen überrascht. Es handelt sich um ein einfaches Reihenhaus in einer etwas besseren Gegend am Rande der Stadt. Jedes Grundstück hat einen kleinen Vorgarten, der Teils von den Straßenlaternen beleuchtet wird. Abfallbehälter zur Mülltrennung stehen sauber aufgereiht an den Wänden, und gelegentlich siehst du auch eine Rutsche oder eine Schaukel. Insgesamt wirkt es sehr friedlich, und nicht wie ein Ort, an dem Menschen aufeinander schießen.<br/><br/>Alex sieht dich unsicher an: „Nun, eine bessere Spur haben wir nicht. Vielleicht siehst du dich erst einmal um? Du weisst schon, unsichtbar?“<br/><br/>Du nickst und machst dich ans Werk.",
        [new Choice("Weiter", "event2_16")]) // ja 2_16, nicht 2_15
}

var event2_15 = function () {
    e.show("Ihr macht euch auf den Weg zur angegebenen Adresse, und als ihr ankommt, bist zumindest du einigermaßen überrascht. Es handelt sich um ein einfaches Reihenhaus in einer etwas besseren Gegend am Rande der Stadt. Jedes Grundstück hat einen kleinen Vorgarten, der Teils von den Straßenlaternen beleuchtet wird. Abfallbehälter zur Mülltrennung stehen sauber aufgereiht an den Wänden, und gelegentlich siehst du auch eine Rutsche oder eine Schaukel. Insgesamt wirkt es sehr friedlich, und nicht wie ein Ort, an dem Menschen aufeinander schießen.<br/><br/>Alex sieht dich unsicher an: „Nun, eine bessere Spur haben wir nicht. Vielleicht siehst du dich erst einmal um? Du weisst schon, unsichtbar?“<br/><br/>Du nickst und machst dich ans Werk.",
        [new Choice("Weiter", "event2_16")])
}

var event2_16 = function () {
    let text = ""
    if ((e.getRnd(0, 59) + state.awareness.value) >= 60) {
        text += "Ungesehen schleichst du durch den Vorgarten, vorbei an dem winzigen Fahrrad, dass unbeachtet auf dem Rasen liegt, und näherst dich der Haustür. Auf dem Namensschild steht „Familie Schiller“, aber du interessierst dich eher für das Schloss. Es sollte kein Problem sein, mittels deiner Kräfte etwas kinetische Energie hineinzuleiten und dass Schloss zu entsperren; es jedoch zu tun während du deinen Tarnzauber aufrecht erhältst, könnte schwieriger werden.<br/>Deine Überlegungen werden von den Dekopflanzen unterbrochen, die nahe der Tür stehen. Genauer gesagt fällt dir ein Blumentopf auf, aus dem scheinbar rosafarbene Gänseblümchen sprießen. Du überlegst kurz, dann fällt dir der Name ein: Astern. Viel interessanter ist jedoch der Topf selbst, da er als einziger nicht aus Ton, sondern Plastik zu bestehen scheint. Du beugst dich zu ihm herab und siehst ihn dir näher an. Einem Bauchgefühl folgend hebst du ihn an, und bemerkst die ungewöhnlichen Kerben im Boden. Du greifst hinein, und plötzlich löst sich der Boden, und fällt zusammen mit einem Haustürschlüssel herab. Vorsichtig stellst du den Topf zurück und schließt leise die Haustür auf."
        e.show(text, [new Choice("Weiter", "event2_17")])
    } else {
        text += "Ungesehen schleichst du durch den Vorgarten, vorbei an dem winzigen Fahrrad, dass unbeachtet auf dem Rasen liegt, und näherst dich der Haustür. Selbstverständlich ist sie verschlossen. Es sollte kein Problem sein, mittels deiner Kräfte etwas kinetische Energie hineinzuleiten und dass Schloss zu entsperren; es jedoch zu tun während du deinen Tarnzauber aufrecht erhältst, könnte schwieriger werden."
        e.show(text, [new Choice("Es wird mich schon niemand sehen, wenn ich für einen kurzen Moment hier stehe.", "event2_16_1"),
        new Choice("Vorsicht ist besser als Nachsicht. Ich versuche mich an zwei Zaubern gleichzeitig.", "event2_16_2")])
    }
}

var event2_16_1 = function () {
    e.show("Als du deine Konzentration auf eine andere Formel und dass Schloß richtest, bemerkst du natürlich sofort, dass du wieder sichtbar wirst, doch durch dein entschlossenes vorgehen öffnet sich die Tür bereits nach einigen Sekunden mit einem Klicken, und noch während du die Tür aufschiebst, ziehst du dich wieder in den schützenden Schleier der Magie zurück.",
        [new Choice("Weiter", "event2_17")])
}

var event2_16_2 = function () {
    let text = "Es ist nie einfach, zwei Zauber zur gleichen Zeit zu erhalten – du hälst den Atem an und greifst mit deiner Magie nach dem Schloss."
    if ((e.getRnd(0, 59) + state.magic.value) >= 60) {
        text += "<br/><br/>Das Schloss öffnet sich mit einem leisen Klicken. Mit einer gewissen Befriedigung betrittst du das Haus."
        e.show(text, [new Choice("Weiter", "event2_17")])
    } else {
        state.profile2 += 10
        text += "<br/><br/>Das Schloss öffnet sich mit einem Knirschen. Du fluchst leise und betrachtest das Schloss. Dort, wo der Schlitz für den Schlüssel sein sollte, zieht sich ein Riss bis zum Türrahmen. Immerhin, die Tür ist offen."
        e.show(text, [new Choice("Weiter", "event2_17")])
    }
}

var event2_17 = function () {
    if (state.guydown >= 1) {
        event2_18()
    } else {
        event2_19()
    }
}


var event2_18 = function () {
    e.show("Du hast gerade die Haustür hinter dir geschlossen, als du eine Frauenstimme aus der nahen Küche hörst, die gleichermaßen gereizt und besorgt klingt: „Jetzt sag schon, was ist passiert? So habe ich dich ja noch nie erlebt. Diese ganze Geheimnistuerei mit deinen Freunden war bescheuert genug, aber jetzt kommst du mit blassgrünem Gesicht nach Hause, schaust dauernd aus dem Fenster, und erzählst mir dann, dass du deine Waffe – deine illegale Waffe – nur reinigen möchtest?! Hat dich die Polizei erwischt?“<br/><br/>Einen Augenblick ist es nur still, und du nimmst deine Umgebung kurz in Augenschein. Ein einfacher bläulicher Flur, Türen zu Küche und Wohnzimmer, zwei geschlossene, und eine Treppe nach oben.<br/><br/>Dann hörst du plötzlich die Stimme des Mannes, den du verfolgt hast, den Mann mit dem roten Hemd – oder solltest du ihn jetzt Schiller nennen? – der auf dich geschossen und das Video gemacht hat: „Hase, wir waren uns doch einig, dass etwas gegen diese… Abscheulichkeiten etwas getan werden muss. Und, und, naja, es ist heute einiges schief gegangen, in Ordnung? Diese Monster sind gefährlich! Sie können…“<br/>Seine Stimme wird einen Augenblick sehr leise, und die Frau antwortet fast ebenso leise: „Ich weiß. Aber ich mag es nicht, wenn du den Helden spielst. Wenn du dieses Video hochgeladen hast, überlässt du das der Polizei.“<br/><br/>Deine Augen weiten sich etwas, als du dies hörst. Anscheinend hast du nicht viel Zeit, und du musst dich für dein weiteres Vorgehen entscheiden.<br/><br/>Auf Zehenspitzen (du möchtest auf keinen Fall noch einmal beschossen werden) näherst du dich der Küchentür und spähst hinein. Am Küchentisch sitzt Schiller, die Waffe neben sich auf dem Tisch liegend. Neben ihm steht seine Frau, eine Hand tröstend auf die Schulter gelegt, und sieht ihn voller Mitgefühl an.",
        [new Choice("Ich schocke erst ihn und dann seine Frau. Besser kein Risiko eingehen.", "event2_18_1"),
        new Choice("Ich schocke ihn, und rede dann mit seiner Frau. Vielleicht kann ich sie überzeugen, dass ich ihr nichts Böses möchte.", "event2_18_2"),
        new Choice("Ich ignoriere die beiden und suche nach dem Rechner. Wenn alles klappt, kann ich das Video löschen, ohne dass jemand etwas bemerkt.", "event2_18_3")])
}

var event2_18_1 = function () {
    e.show("Da beide abgelenkt sind lässt du den Tarnschleier verblassen, damit du deine ganze Kraft in den Schockzauber legen kannst. Als sich die Energiemuster vervollständigen, gibt Schiller eine Mischung aus Gurgeln und Stöhnen von sich, und fällt zu Boden. Seine Frau gibt einen erstickten Schrei von sich und beugt sich über ihn, doch noch bevor sie etwas sinnvolles tun könnte, wird sie von deinem zweiten Zauber getroffen, und sinkt bewusstlos über ihren Mann.<br/><br/>Nachdem die Gefahr neutralisiert ist, kannst du in Ruhe das Haus durchsuchen. Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerter Weise war Herr Schiller sogar so zuvorkommend, seine Handycloud zu öffnen. Vermutlich wollte er sichergehen, dass das Video noch erhalten ist. <br/>Ohne weitere Zeit zu verlieren, löschst du das Video, und nur um auf Nummer sicher zu gehen, setzt du den gesamten Rechner mit einer Formel unter Strom. Als sich der beißende Gestank von verbranntem Plastik ausbreitet, beschließt du, dass es Zeit wird, zu gehen.",
        [new Choice("Weiter", "event2_20")])
}

var event2_18_2 = function () {
    let text = "Da beide abgelenkt sind lässt du den Tarnschleier verblassen, damit du deine ganze Kraft in den Schockzauber legen kannst. Als sich die Energiemuster vervollständigen, gibt Schiller eine Mischung aus Gurgeln und Stöhnen von sich, und fällt zu Boden. Seine Frau gibt einen erstickten Schrei von sich und beugt sich über ihn.<br/>Wenn du reden willst, ist jetzt der richtige Zeitpunkt gekommen.<br/><br/>„Entschuldigen Sie bitte… nein, ich will Ihnen nichts Böses“, beschwichtigst du sie, als die Frau erst erstarrt, und dich dann mit schreckensgeweiteten Augen ansieht.<br/>Du fährst fort: „Es tut mir leid. Wirklich. Aber Ihr Mann hat bereits auf mich geschossen, und ich wollte das Risiko nicht eingehen. Ich weiß nicht genau, warum er Magieanwender so hasst… aber was auch immer es ist, ich hatte damit nichts zu tun.“<br/>Die Frau starrt dich weiterhin an. Du kannst sehen, wie sich ihre Angst mit etwas anderem mischt."
    if ((e.getRnd(0, 59) + state.mundane.value) >= 50) {
        text += "<br/><br/>Vielleicht Trauer?<br/>„Mein Mann meint es gut“, flüstert sie.<br/>Dann ist es einen Augenblick still.<br/>„Wenn ich ihnen das Video gebe, werden sie uns dann in Ruhe lassen?“<br/><br/>Kurz darauf sitzt du vor einem PC und nimmst Einblick in die Clouddaten der Schillers. Das Video ist schnell gefunden. Bevor du es löschst, stellst du noch sicher, dass sich keine Kopie auf der Festplatte befindet. Als du dich von Frau Schiller verabschiedest, schließt sie nur die Augen und deutet zur Tür.<br/>Du gehst."
    } else {
        state.profile2 += 15
        text += "<br/><br/>Hass.<br/>„Mein Mann meint es gut“, flüstert sie entschlossen.<br/>Dann schielt sie zu der Waffe auf dem Tisch, aber ihre Entschlossenheit reicht zum Glück nicht aus, um danach zu greifen.<br/>„Wenn ich ihnen das Video gebe, werden sie uns dann in Ruhe lassen?“<br/><br/>Kurz darauf sitzt du vor einem PC und nimmst Einblick in die Clouddaten der Schillers. Das Video ist schnell gefunden. Bevor du es löschst, stellst du noch sicher, dass sich keine Kopie auf der Festplatte befindet. <br/>Als du das Haus verlässt, ignoriert sie dich bereits und kümmert sich wieder um ihren Mann."
    }
    e.show(text, [new Choice("Weiter", "event2_20")])
}

var event2_18_3 = function () {
    let text = "Du versuchst, unnötige Gewalt zu vermeiden, und schleichst ungesehen durch das Haus.<br/>Da du dich in dem Haus nicht auskennst, bleibt dir nichts anderes übrig, als das Haus Raum für Raum zu durchsuchen. Da du dir nicht sicher bist, ob nicht vielleicht irgendwo ein Laptop oder gar ein kleines Tablet versteckt ist, siehst du dich gezwungen, sehr gründlich zu suchen, damit du nichts wichtiges übersiehst."
    if ((e.getRnd(0, 59) + state.awareness.value) >= 50) {
        text += "<br/><br/>Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerter Weise war Herr Schiller sogar so zuvorkommend, seine Handycloud zu öffnen. Vermutlich wollte er sichergehen, dass das Video noch erhalten ist.<br/>Das Video ist schnell gefunden. Bevor du es löschst, stellst du noch sicher, dass sich keine Kopie auf der Festplatte befindet.<br/>Dann verlässt du so schnell es dir möglich ist das Haus."
    } else {
        state.damage += 1
        state.profile2 += 20
        text += "<br/><br/>Leider gestaltet sich die Suche als langwierig, doch du hast Glück, denn Schiller geht über den Flur und ruft seiner Frau zu: „Ich kümmer mich um das Video.“<br/>Du eilst ihm hinterher, doch dabei knirscht der Boden. Schiller bleibt einen Moment stehen und runzelt die Stirn, geht dann aber schließlich doch durch eine Tür, die scheinbar in ein Arbeitszimmer führt. Du folgst ihm, doch plötzlich knallt die Tür direkt gegen deinen Kopf, und die Welt scheint mit tobendem Schmerz zur Seite zu kippen. Panikerfüllt und mit Schwindelattacken hastest du über den Flur, weg von dem Arbeitszimmer und dem Mann, der eine Pistole in deine Richtung hält. Ein weiterer, noch lauterer Knall ertönt, bohrt sich in deine Schulter, und lässt Blut aufspritzen, als sich die Kugel durch deine Schulter bohrt.<br/>Von Adrenalin getrieben wirfst du dich in den nächsten Raum – das Wohnzimmer – und hörst, wie er mit triumphierendem Schrei den Flur entlang rennt, um dir den Rest zu geben.<br/><br/>Aber du bist noch nicht besiegt. Du konzentrierst dich, wohl wissend dass dein Leben davon abhängt, und als er in der Tür steht, schleuderst du ihm einen Schockzauber entgegen, der ihn zu Boden gehen lässt. Du springst sofort auf, denn du weißt, dass du dich um die Frau kümmern musst, bevor das Adrenalin nachlässt. Leichenblass und starr vor Schock steht sie im Flur und starrt dich an. Als dein Schockzauber sie trifft, wirkt sie fast erleichtert. Noch während sie zu Boden geht, beginnst du dich zu heilen. Während die Wunde sich langsam schließt, setzt du dich auf die Treppe, und versuchst ruhig und gleichmäßig zu atmen. Der Anblick deines eigenen Blutes verstärkt deinen Schwindel, und selbst als die Wunde geschlossen ist, lässt er nicht nach.<br/><br/>Nachdem du langsam aufgestanden bist, entfernst du zunächst mit Feuer sämtliche Blutspuren, die du finden kannst (du möchtest ungern dein Genmaterial an einem Tatort zurücklassen), und suchst dann weiter. <br/><br/>Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerter Weise war Herr Schiller sogar so zuvorkommend, seine Handycloud zu öffnen. Vermutlich wollte er sichergehen, dass das Video noch erhalten ist. <br/>Ohne weitere Zeit zu verlieren, löschst du das Video, und nur um auf Nummer sicher zu gehen, setzt du den gesamten Rechner mit einer Formel unter Strom. Als sich der beißende Gestank von verbranntem Plastik ausbreitet, beschließt du, dass es Zeit wird, zu gehen."
    }
    e.show(text, [new Choice("Weiter", "event2_20")])
}

var event2_19 = function () {
    e.show("Du hast gerade die Haustür hinter dir geschlossen, als du eine Frauenstimme aus der nahen Küche hörst, die gleichermaßen gereizt und besorgt klingt: „Ich will nur wissen, wo er steckt. Er hatte heute Mittag diesen Gesichtsausdruck, den er immer aufsetzt, wenn er etwas großes vorhat. Es muss doch jemand wissen, wo er ist.“ Stille folgt. “<br/><br/>Auf Zehenspitzen (du möchtest auf keinen Fall noch einmal beschossen werden) näherst du dich der Küchentür und spähst hinein. Am Fenster steht eine Frau – vermutlich Frau Schiller – das Handy ans Ohr gepresst, und starrt aus dem Fenster.<br/><br/>„Mir ist klar, dass ihr etwas unternehmen wollt… nein, ich habe nicht vergessen, was passiert ist.“ Wieder folgt Stille. Wesentlich resignierter erönt kurz darauf wieder die selbe Stimme: „In Ordnung, melde dich einfach, wenn du von ihnen hörst. Bis dann.",
        [new Choice("Ich schocke sie. Besser kein Risiko eingehen.", "event2_19_1"),
        new Choice("Ich rede mit ihr. Vielleicht kann ich sie überzeugen, dass ich ihr nichts Böses möchte.", "event2_19_2"),
        new Choice("Ich ignoriere sie und suche nach dem Rechner. Wenn alles klappt, kann ich das Video löschen, ohne dass jemand etwas bemerkt.", "event2_19_3")])
}

var event2_19_1 = function () {
    e.show("Da sie abgelenkt ist, lässt du den Tarnschleier verblassen, damit du deine ganze Kraft in den Schockzauber legen kannst. Als sich die Energiemuster vervollständigen, gibt die Frau einen erstickten Laut von sich und sinkt bewusstlos zu Boden.<br/><br/>Nachdem jede mögliche Bedrohung neutralisiert ist, kannst du in Ruhe das Haus durchsuchen. Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerterweise war jemand sogar so zuvorkommend, die Handycloud zu öffnen. Vielleicht wollte sie herausfinden, wo ihr Mann ist?<br/>Ohne weitere Zeit zu verlieren, löschst du das Video, und nur um auf Nummer sicher zu gehen, setzt du den gesamten Rechner mit einer Formel unter Strom. Als sich der beißende Gestank von verbranntem Plastik ausbreitet, beschließt du, dass es Zeit wird, zu gehen.",
        [new Choice("Weiter", "event2_20")])
}

var event2_19_2 = function () {
    state.profile2 += 15
    e.show("Du atmest tief ein und löst den Tarnzauber.<br/><br/>„Entschuldigen Sie bitte… nein, ich will Ihnen nichts Böses“, beschwichtigst du sie, als die Frau erst erstarrt, und dich dann mit schreckensgeweiteten Augen ansieht.<br/>Du fährst fort: „Es tut mir leid. Wirklich. Aber ich bin mir nicht einmal sicher, was hier vor sich geht, aber aus irgend einem Grund hat Ihr… Mann?… auf mich geschossen. Ich weiß nicht genau, warum er Magieanwender so hasst… aber was auch immer es ist, ich hatte damit nichts zu tun.“<br/>Die Frau starrt dich weiterhin an. Du kannst sehen, wie sich ihre Angst mit etwas anderem mischt.<br/><br/>Hass. „Wo ist er?“, flüstert sie mit leiser, frostiger Stimme. <br/>Du zögerst einen Augenblick, nicht sicher, wie du ihr erzählen sollst, was du getan hast. Aber das scheint ihr bereits genug zu sein. Mit einem schmerzerfüllten Schrei reißt sie eine Schublade auf und greift hinein. Noch während du einen Schritt zurückweichst, springt sie mit tränenverschmierten Augen auf dich zu. Reflexartig beginnst du den Schockzauber, doch dir bleibt nicht genügend Zeit. Aus einer Eingebung heraus greifst du zur Küchentür und schmetterst sie ihr entgegen. Ein dumper Laut ist zu hören, als sie dagegen prallt. Du weichst weiter in den Flur zurück; einen Atemzug später reißt sie die Tür auf, dass Messer erhoben, doch in dem Augenblick hast du den Schockzauber vollendet. Mit einer Mischung aus Keuchen und Schluchzen geht sie zu Boden.<br/><br/>Nachdem jede mögliche Bedrohung neutralisiert ist, kannst du in Ruhe das Haus durchsuchen. Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerterweise war jemand sogar so zuvorkommend, die Handycloud zu öffnen. Vielleicht wollte sie herausfinden, wo ihr Mann ist?<br/>Ohne weitere Zeit zu verlieren, löschst du das Video, und nur um auf Nummer sicher zu gehen, setzt du den gesamten Rechner mit einer Formel unter Strom. Als sich der beißende Gestank von verbranntem Plastik ausbreitet, beschließt du, dass es Zeit wird, zu gehen.",
        [new Choice("Weiter", "event2_20")])
}

var event2_19_3 = function () {
    let text = "Du versuchst, unnötige Gewalt zu vermeiden, und schleichst ungesehen durch das Haus.<br/>Da du dich in dem Haus nicht auskennst, bleibt dir nichts anderes übrig, als das Haus Raum für Raum zu durchsuchen. Da du dir nicht sicher bist, ob nicht vielleicht irgendwo ein Laptop oder gar ein kleines Tablet versteckt ist, siehst du dich gezwungen, sehr gründlich zu suchen, damit du nichts wichtiges übersiehst."
    if ((e.getRnd(0, 59) + state.awareness.value) >= 50) {
        text += "<br/><br/>Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerterweise e war jemand sogar so zuvorkommend, die Handycloud zu öffnen. Vielleicht wollte sie herausfinden, wo ihr Mann ist?<br/>Ohne weitere Zeit zu verlieren, löschst du das Video, und nur um auf Nummer sicher zu gehen, setzt du den gesamten Rechner mit einer Formel unter Strom. Als sich der beißende Gestank von verbranntem Plastik ausbreitet, beschließt du, dass es Zeit wird, zu gehen."
        e.show(text, [new Choice("Weiter", "event2_20")])
    } else {
        state.damage += 1
        state.profile2 += 20
        text += "<br/><br/>Leider gestaltet sich die Suche als langwierig, doch du hast Glück: Wie sich herausstellt, befindet sich hinter der letzten Flurtür ein Arbeitszimmer mitsamt PC; nicht nur das, sondern dankenswerterweise war jemand sogar so zuvorkommend, die Handycloud zu öffnen. Vielleicht wollte sie herausfinden, wo ihr Mann ist?<br/><br/>„Schatz, bist du das?“, hörst du plötzlich eine Stimme aus dem Flur. Anscheinend warst du nicht leise genug. Schritte nähern sich der Tür, doch glücklicherweise bist du noch immer unsichtbar. Die Frau betritt den Raum und sieht sich enttäuscht um. Du stehst nur einen Meter von ihr entfernt und hältst den Atem an. Sie sieht blass aus, und als sie in dem Raum niemanden sieht, flackert auch Enttäuschung in ihrem Blick auf. Dann entfernt sie sich scheinbar wieder Richtung Küche.<br/><br/>Ohne weitere Zeit zu verlieren, löschst du das Video, und nur um auf Nummer sicher zu gehen, setzt du den gesamten Rechner mit einer Formel unter Strom. Als sich der beißende Gestank von verbranntem Plastik ausbreitet, beschließt du, dass es Zeit wird, zu gehen.<br/>Oder solltest du doch einmal mit der Frau reden?"
        e.show(text, [
            new Choice("Vielleicht sollte ich das.", "event2_19_3_1"),
            new Choice("Auf keinen Fall. Ich gehe.", "event2_20")])
    }
}

var event2_19_3_1 = function () {
    e.show("Du atmest tief ein, näherst dich der Küche, und löst den Tarnzauber.<br/><br/>„Entschuldigen Sie bitte… nein, ich will Ihnen nichts Böses“, beschwichtigst du sie, als die Frau erst erstarrt, und dich dann mit schreckensgeweiteten Augen ansieht.<br/>Du fährst fort: „Es tut mir leid. Wirklich. Aber ich bin mir nicht einmal sicher, was hier vor sich geht, aber aus irgend einem Grund hat Ihr… Mann?… auf mich geschossen. Ich weiß nicht genau, warum er Magieanwender so hasst… aber was auch immer es ist, ich hatte damit nichts zu tun.“<br/>Die Frau starrt dich weiterhin an. Du kannst sehen, wie sich ihre Angst mit etwas anderem mischt.<br/><br/>Hass. „Wo ist er?“, flüstert sie mit leiser, frostiger Stimme. <br/>Du zögerst einen Augenblick, nicht sicher, wie du ihr erzählen sollst, was du getan hast. Aber das scheint ihr bereits genug zu sein. Mit einem schmerzerfüllten Schrei reißt sie eine Schublade auf und greift hinein. Noch während du einen Schritt zurückweichst, springt sie mit tränenverschmierten Augen auf dich zu. Reflexartig beginnst du den Schockzauber, doch dir bleibt nicht genügend Zeit. Aus einer Eingebung heraus greifst du zur Küchentür und schmetterst sie ihr entgegen. Ein dumper Laut ist zu hören, als sie dagegen prallt. Du weichst weiter in den Flur zurück; einen Atemzug später reißt sie die Tür auf, dass Messer erhoben, doch in dem Augenblick hast du den Schockzauber vollendet. Mit einer Mischung aus Keuchen und Schluchzen geht sie zu Boden.<br/><br/>Zeit zu gehen.",
        [new Choice("Weiter", "event2_20")])
}

var event2_20 = function () {
    e.show("Als du das Haus verlässt, hüllst du dich schon fast gewohnheitsmäßig in den magischen Tarnzauber. Aber ist das wirklich nur Gewohnheit? Oder versteckst du dich vor jemandem – vielleicht vor dir selbst, weil du nicht sicher bist, ob du richtig gehandelt hast?",
        [new Choice("Es ist eine reine Vorsichtsmaße, nichts weiter. Ich habe mir nichts vorzuwerfen.", "event2_21"),
        new Choice("Zugegeben, ich hätte mir gewünscht, dass einige Dinge anders ausgegangen wären. Aber ich habe mich stehts bemüht.", "event2_21"),
        new Choice("Es stimmt, ich wünschte ich hätte einen besseren Weg gefunden, dies alles zu lösen.", "event2_21")])
}

var event2_21 = function () {
    let text = "Etwas abseits der Straße wartet Alex bereits auf dich. Nervös starrt sie in Richtung des Hauses, während sie gleichzeitig mit der linken Hand an ihrem Schlüsselbund rumfummelt. Als du deine Tarnung fallen lässt, erhebt sie ihre Faust zu einem Schlag, doch dann erkennt sie dich.<br/>„Und?“, fragt sie dich.<br/>„Alles erledigt. Wir sollten sicher sein.“<br/>„Gut“, antwortet sie, etwas einsilbig. Ungewohnt einsilbig.<br/>„Was ist los Alex?“"
    if (state.alex <= -20) {
        text += "<br/><br/>Sie schaut dich wortlos eine Weile an. Dann: „Diese ganze Abend… ich wusste, dass es nicht einfach werden würde, aber… ich weiß nicht. So vieles war… anders. Ich muss darüber nachdenken.“"
        e.show(text, [
            new Choice("„Ich weiß.“", "event2_21_1"),
            new Choice("„Besser ging es eben nicht.“", "event2_21_2")])
    } else {
        text += "<br/><br/>Sie atmet tief ein: „Wir müssen dringend besser aufpassen. Wir hatten verdammt viel Glück heute.“ Dann ringt sie sich zu einem Lächeln durch, und fügt hinzu: „Pizza?“"
        e.show(text, [new Choice("Weiter", "event2_22")])
    }
}

var event2_21_1 = function () {
    e.show("Sie nickt dir kurz zu.",
        [new Choice("Weiter", "event2_22")])
}

var event2_21_2 = function () {
    e.show("Sie zuckt kurz mit den Schultern.",
        [new Choice("Weiter", "event2_22")])
}

var event2_22 = function () {
    e.show("Ihr macht euch auf den Rückweg, der glücklicherweise ereignislos verläuft.<br/><br/>In den nächsten Tagen vergräbst du dich in deinem Zimmer. Trotz all der Eskapaden hat sich euer  Abenteuer doch gelohnt, denn das Wissen, dass in dem Buch niedergeschrieben ist, erweist sich als unbezahlbar. Nicht nur gewinnst du ein besseres Verständnis für Kristallmagie, so dass du zuversichtlich bist in Bezug auf deine Erforschung der magischen Krebsheilung; nein, du gewinnst ganz neue Einsichten in die Art und Weise, wie Magie als solche funktioniert. <br/><br/>Du stößt sogar auf das Wissen um magische Schutzkreise. Zwar ist es ziemlich aufwändig, einen Schutzkreis zu errichten, aber sobald er erst einmal besteht, absorbiert er jegliche fremde Magie. Dies könnte sich eines Tages als nützlich erweisen, aber im Gegensatz zu deiner sonstigen Magie wäre der Schutzkreis auf dein Zuhause beschränkt.",
        [new Choice("Weiter", "event2_23")])
}

var event2_23 = function () {
    let choices = [
        new Choice("Ich bin misstrauischer geworden. Alles erscheint irgendwie verdächtig.", "event2_23_1"),
        new Choice("Ich habe erkannt, dass manchmal Körpereinsatz notwendig ist.", "event2_23_2"),
        new Choice("Ich habe bemerkt, dass es letztlich immer meine magische Kraft ist, die mich rettet.", "event2_23_3")
    ]
    if (state.lore.value < 30) {
        choices.push(new Choice("Ich habe bemerkt, dass ich einfach zu wenig weiß – über die Magie und die ganze Welt.", "event2_23_4"))
    }
    choices.push(new Choice("Mir ist klar geworden, dass ich mich besser schützen muss. Deshalb errichte ich den Schutzkreis.", "event2_23_5"))
    choices.push(new Choice("Letzten Endes weiß ich nicht genau, ob ich dies alles überleben werde. Ich sollte mehr Zeit mit denen verbringen, die mir am nächsten stehen – Alex und meiner Mutter.", "event2_23_6"))
    e.show("Doch es ist nicht nur Wissen, dass dich beschäftigt. An manchen Abenden schwirrt dir der Kopf, wenn du darüber nachdenkst, wie sehr sich dein Leben in den letzten Wochen verändert hat. Seitdem du dich entschlossen hast, deine Talente zu nutzen, hat dein Leben sich stark verändert. Kanntest du früher Gewalt und Gefahr nur aus dem Fernsehen, sind diese Dinge plötzlich keine theoretischen Ideen mehr, sondern etwas, dass dir tatsächlich passiert ist.<br/><br/>Wenn du ehrlich zu dir bist, dann bist du dir nicht immer sicher, ob es eine gute Idee war, dich aus dem Sofa zu erheben und dein gewöhnliches Leben hinter dir zu lassen. Aber dann fällt dir schnell wieder ein, dass du gute Gründe dafür hattest.<br/><br/>Und wenn du ganz ehrlich zu dir selbst bist, dann hat dich dein neues Leben auch verändert. Es lässt sich nicht mehr abstreiten:",
        choices)
}

var event2_23_1 = function () {
    state.awareness.value += 10
    e.show("Die Gefahr kann aus jeder Richtung kommen. Nur wer wachsam ist, kann sich darauf vorbereiten. Und du wirst nicht zulassen, dass dich noch einmal jemand überraschen wird.",
        [new Choice("Weiter", "event2_24")])
}

var event2_23_2 = function () {
    state.mundane.value += 10
    e.show("Ein gesunder Geist in einem gesunden Körper. Und wenn dieser Körper nicht gleich außer Atem gerät, ist dies auch nicht zu verachten.",
        [new Choice("Weiter", "event2_24")])
}

var event2_23_3 = function () {
    state.magic.value += 10
    // TODO: Remove "
    e.show("Es gibt einen Grund, warum Leute sagen „Dies grenzt an Magie“. Und dieser Grund ist jetzt ein zentraler Teil deines Lebens.",
        [new Choice("Weiter", "event2_24")])
}

var event2_23_4 = function () {
    state.lore.value += 10
    e.show("Wissen ist Macht. An diesem uralten Grundsatz hat sich bislang nichts geändert.",
        [new Choice("Weiter", "event2_24")])
}

var event2_23_5 = function () {
    state.protection += 1
    e.show("Vertrauen ist gut, Kontrolle ist besser. In diesem Fall heißt Kontrolle, dass niemand anderes außer dir die Macht hat, in der Nähe deiner Wohnung Magie zu nutzen.",
        [new Choice("Weiter", "event2_24")])
}

var event2_23_6 = function () {
    state.alex += 15
    state.mother += 15
    e.show("Alle Macht der Welt nützt nichts, wenn man sie nicht mit den Menschen verbringt, die für einen von Bedeutung sind. Doch viel zu häufig vergisst man dies – zumindest dass ist dir jetzt klar geworden, und du gibst dir Mühe, deine Mutter und Alex dies spüren zu lassen.",
        [new Choice("Weiter", "event2_24")])
}

var event2_24 = function () {
    // TODO: Remove " and '
    let text = "Einige Tage später entdeckst du einen Artikel in der Zeitung. Er beschäftigt sich mit der Unsicherheit und Furcht, welche normale Menschen bei dem Gedanken an Magie empfinden.<br/><br/>„Der Mensch bevorzugt seit jeher den Tag, da die Nacht ihm durch die Dunkelheit die Sehkraft nimmt; und damit auch die Kontrolle. Hinzu kommt, dass Menschen nach einem Tag harter Arbeit erschöpft sind. Diese beiden Faktoren haben maßgeblich dazu beigetragen, dass Gruselgeschichten immer nachts handeln, während der Tag den Fakten vorbehalten bleibt.<br/>Unglücklicherweise hat dass Bewustsein um die Existenz der Magie diese klaren Grenzen von Tag und Nacht aufgehoben, und mit ihnen auch die Grenze zwischen Fakt und Fiktion. Denn wir wissen nicht länger genau, was möglich ist, noch wissen wir, was dort draussen in der Welt lauert. Wir wissen lediglich, dass alles, was wir nicht wissen, eine Bedrohung für uns darstellt, und dieser andauerende Zustand der Anspannung erschöpft uns mehr, als ein gewöhnlicher Arbeitstag je könnte.<br/><br/>Aus diesem Grund ist es nicht verwunderlich, dass sich in allen Bevölkerungsschichten Widerstand regt. Egal ob hochrangiger Politiker oder einfacher Arbeiter von der Straße, ob Mann oder Frau, Kind oder Greis: das Thema Magie polarisiert, und so ist es nicht verwunderlich, dass sich auch zunehmend Extremisten gewaltsam des ‚Magieproblems‘ annehmen wollen. In unserer neuen Reihe gehen wir den Ursprüngen und Folgen dieser Gewaltbereitschaft nach.“"
    if (state.profile < 30) {
        text += "<br/><br/>Der Artikel erweist sich als sehr einleuchtend, und liefert dir zugleich eine plausible Erklärung für die möglichen Hintergründe deiner jüngsten Erlebnisse. Aber am meisten beruhigt dich die Tatsache, dass der Artikel keinerlei Hinweise auf deine Taten enthält. Anscheinend konntest du allzu viel Aufmerksamkeit vermeiden."
    } else if (state.profile < 60) {
        state.wantedlevel += 1
        text += "<br/><br/>Der Artikel erweist sich als sehr einleuchtend, und liefert dir zugleich eine plausible Erklärung für die möglichen Hintergründe deiner jüngsten Erlebnisse. Allerdings enthält er auch sehr konkrete Verweise auf einige Vorkommnisse, die sich nur mittels Magie erklären lassen, und unglücklicherweise scheint ein großer Teil davon auf dein Konto zu gehen. Zwar fehlen dem Autoren einige Informationen, um den Zusammenhang zu erkennen, aber es ist offensichtlich, dass du es nicht vermeiden konntest, Aufmerksamkeit zu erregen."
    } else {
        state.wantedlevel += 2
        text += "<br/><br/>Der Artikel erweist sich als sehr einleuchtend, und liefert dir zugleich eine plausible Erklärung für die möglichen Hintergründe deiner jüngsten Erlebnisse. Allerdings enthält er auch sehr konkrete Verweise auf einige Vorkommnisse, die sich nur mittels Magie erklären lassen, und unglücklicherweise scheint ein großer Teil davon auf dein Konto zu gehen. Noch schlimmer ist allerdings, dass der Autor deine Taten einem Einzeltäter zuordnet, der als eine Gefahr für die Öffentlichkeit beschrieben wird.<br/>Du wirst in Zukunft vorsichtiger sein müssen!"
    }
    e.show(text, [new Choice("Weiter", "event2_25", false)]) // TODO: Remove false
}

var event2_25 = function () {
    let text = "Hiermit endet die Demo. Bitte nimm dir eine Minute, um uns kurz Feedback zukommen zu lassen. Es hilft schon eine kurze Nachricht über Whatsapp…<br/>Hat es dir gefallen?<br/>Gab es irgendwelche Dinge, die dir unlogisch erschienen?<br/>Sonstiges?<br/><br/>Je mehr Unterstützung wir kriegen, umso schneller entsteht Kapitel 3.<br/><br/>Bis dahin"
    e.show(text, [new Choice("Weiter", "eventEnd", false)]) // TODO: Remove false
}

var eventEnd = function () {
    e.show("The End", undefined, false)
}

window.onload = eventStart;