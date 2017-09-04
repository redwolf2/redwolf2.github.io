var e
var state
"use strict"

function State() {
    GameState.apply(this, arguments)
    this.magic = new PlayerAttribute("Magie", 20, false)
    this.magic = new PlayerAttribute("Magie", 20)
    this.lore = new PlayerAttribute("Wissen", 20)
    this.awareness = new PlayerAttribute("Aufmerksamkeit", 20)
    this.mundane = new PlayerAttribute("Weltliches", 20)
    this.profile = 0
    this.delay = 0
    this.disguise = 0
}

var eventFirst = function() {
    state = new State()
    e = new Engine(state)
    e.setBackground(null, "logo.svg")
    e.show("Aiur",
        [new Choice("Neues Spiel", "eventNew"),
        new Choice("Weitermachen", "eventContinue")], false)
}

var eventNew = function() {
    e.setBackground(null, null)
    e.show("Mit geweiteten Augen starrt sie ihn an: „Was… was… soll das heißen? Dämonen?“. Sie lacht, etwas zu schrill. Er erwidert ihren Blick ruhig: „Lilly… ich bin ein Magier.“ Wieder lacht sie und fährt sich mit der Hand durch die blonden Locken: „Oh, ach so. Mach dir keine Sorgen, ich bin eine Fee…“ Der Mann verzieht noch immer keine Miene: „Ich gehöre einem uralten Geheimbund an, der die Menschen vor den Mächten der Finsternis bewahrt!“<br/>An dieser Stelle verdrehst du die Augen und wechselst den Kanal. Um diese Uhrzeit kommt einfach kein brauchbarer Film mehr im Fernsehen. Wie konnte so ein Mist jemals gedreht werden? Ein uralter Geheimbund von Magiern… lächerlich. Zugegeben, der Film scheint aus den Achtzigern zu stammen. Damals ahnte man noch nicht, dass bald Internet und Smartphone erfunden und die Welt für immer verändern würde. Mit dem Aufkommen der neuen Kommunikationstechnologie war es völlig unmöglich geworden, die Existenz der Magie noch länger geheim zu halten. Plötzlich tauchten immer mehr Videos von fliegenden Menschen, kreischenden Kugelblitzen und spontan auftretender Dunkelheit auf. Die Öffentlichkeit war ebenso überfordert wie die Medien und Politiker, und in der daraus resultierenden Unruhe wurden Magier gesetzlich verpflichtet, sich zu registrieren und ihre Geheimnisse offen zu legen. Zugleich wurde den meisten eine gutbezahlte Dienststelle angeboten. Die Welt schien sich nur noch um Magie zu drehen.<br />Dir war das egal. Dein Vater war gerade gestorben.",
        [new Choice("Weiter", "event0_2")])
}

var eventContinue = function() {
    e.setBackground(null, null)
    GameState.load(e)
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
    e.show("Allerdings verbrachtest du auch viel Zeit bei deiner besten Freundin Alex. Neben unzähligen Filmen habt ihr euch vor allem viele Videos im Internet angesehen. Eines Tages grinste sie dich an, während sie zwei bedruckte Seiten Papier vor deine Nase hielt: „Hier, das hab ich aus 'nem Forum. Der Initiationsritus. „Der was?“, hattest du sie verwirrt gefragt, nicht ganz sicher, welcher Film das sein sollte.<br/>„Initiationsritus. Das machen angeblich alle, die Magie erlernen wollen. Damit findet man heraus, ob man magisch begabt ist.“<br/>Zwanzig Minuten später saßest du ihr gegenüber im Schneidersitz, in der Hand eine brennende Kerze, der Geruch von Weihrauch in der Luft, und lächelteste sie spöttisch an: „Und, ist die Macht schon mit dir?“<br/><br/>Alex streckte dir die Zunge raus: „Magie ist total selten. Dass heißt nicht, dass mein Ritual…“ Cooler Effekt: Kerze schmilzt nicht und sondert keine Hitze ab, lässt sich nicht auspusten.<br/>Diese Erkenntnis gab dir neuen Schwung und veränderte dein Leben. Alex sammelte alles, was sie im Internet fand und half dir, dein Talent zu entwickeln. Eine Sache war dir dabei besonders wichtig:",
    [
        new Choice("Ich widmete meine gesamte Kraft dem Bündeln magischer Energien, um möglichst mächtige Zauber zu formen.", "event0_4_1"),
        new Choice("Ich verschlang jedes Buch und jeden Hinweis voller Wissensdurst. Ich wollte jeden Zauber kennen und jedes Geheimnis ergründen.", "event0_4_2"),
        new Choice("Ich gewöhnte mir an, auf jedes Detail in meiner Umgebung zu achten und keine Spuren zu hinterlassen.", "event0_4_3"),
        new Choice("Ich achtete darauf, die Welt um mich herum nicht zu vergessen, und verbrachte viel Zeit mit Freunden und sportlichen Aktivitäten.", "event0_4_4")
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
    e.show("Schwimmen und Radfahren halfen dir, den Kopf frei zu bekommen, und zugleich gaben sie dir das Gefühl, auch ohne Magie etwas erreichen zu können. Der Kontakt mit Freundesfreunden führte zu interessanten Begegnungen und unterhaltsamen Gesprächen bis in den späten Abend, welche nicht nur deinen Alltag bereicherten, sondern es dir auch ermöglichten, die Magie zu vergessen und zu entspannen. Obwohl die Magie dein Leben noch immer prägte, war es gut, eine Alternative zu haben.",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_5 = function() {
    e.show("Deine Begeisterung erhielt erst einen Dämpfer, als Thomas Brendel erschossen wurde. Brendel war einer jener Magierbeamten der ersten Stunde, und war für den Schutz der Regierung zuständig gewesen. Ermittler hatten herausgefunden, dass er seine Kräfte genutzt hatte, um hochrangige Politiker zu beeinflussen. Bei seiner Verhaftung hatte er ein Dutztend Sondereinsatzkommandos in Schlacke verwandelt, bevor eine Kugel seinen Kopf durchbohrte. Angesichts dieses gravierenden Machtmissbrauches brandete die öffentliche Panik erneut auf, was für registrierte Magier ernsthafte Folgen hatte: Magie durfte nur noch mit Genehmigung der Behörden und nur in bestimmten Situationen genutzt werden, sofern keine Vorstrafen vorhanden waren. Jeder gemeldete Magier musste unregelmäßige Zufallskontrollen über sich ergehen lassen, unabhängig davon, ob er Magie ausübte oder nicht. Das schlimmste jedoch waren die radikalen Gruppen besorgter Bürger, welche sämtliche Magier als Schwerkriminelle behandelte und auch vor Gewalt nicht zurückschreckten.<br/>Für dich war dies besonders schrecklich. Da ihr den Großteil eurer Quellen aus dem sogenanntem Darknet auf illegalen Tauschbörsen erworben hattet, standen die Chancen gut, dass dir die Ausübung von Magie verboten werden würde. Dabei gab es streng genommen kein Gesetz, dass dies bislang untersagt hatte, doch einige Gerichtsurteile änderten dies schnell. Statt einer gesicherten Laufbahn sahest du dich nun dem Risiko von gewalttätigen Anfeindungen und staatlicher Überwachung ausgesetzt. Es muss nicht erwähnt werden, dass dies entmutigend war.",
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
    e.show("Ab einem gewissen Punkt sind zu viele Informationen einfach nur noch hinderlich, und so erschien es dir unumgänglich, deinem schmerzenden Kopf eine Auszeit zu gönnen und nicht jedes Detail zu hinterfragen.", 
    [new Choice("Weiter", "event0_6")])
}

var event0_5_4 = function() {
    state.mundane.value -= 10
    e.show("Die Welt schien sich gegen dich verschworen zu haben, weshalb du dir eine Auszeit von ihr gönntest. In der Abgeschiedenheit deines Zimmers hattest du alle Zeit der Welt, dir deine eigenen Gedanken zu machen, ohne dass dich jemand störte.",
    [new Choice("Weiter", "event0_6")])
}

var event0_6 = function() {
    e.show("Die ständigen Nörgeleien deiner Mutter hatten dir natürlich ebenso wenig gut getan – „Nichtsnutz“ und „Faulpelz“ waren nur einige der ausgesuchten Bezeichnungen, mit denen sie dich beschrieb. Du konntest nicht ganz nachvollziehen, warum es erstrebenswerter sein sollte, den gesamten Tag mit dem Fernseher und einer Flasche billigen Whiskeys zu verbringen, aber mit Argumenten hatte sie sich eh nie auseinander gesetzt – vermutlich einer der wenigen Vorteile des Alkoholismus.<br/><br/>Als sie dann schließlich auf Blutkrebs diagnostiziert wurde, änderte sich nicht viel, außer dass ihr Pensum gelegentlich auf zwei Flaschen am Tag stieg. Unglücklicherweise bedeutete dies auch, dass sie am Monatsende unausstehlich wurde, wenn die Sozialhilfe nicht ausreichte, um ihren Rausch zu finanzieren. Als ihr Mitbewohner – du hattest noch keinen Vermieter gefunden, der dich ohne festen Job akzeptierte – bedeutete dies für dich natürlich zusätzlichen Ärger.<br/><br/>Glücklicherweise ist gerade Monatsanfang, und nach eineinhalb Flaschen liegt sie besinnungslos neben dir auf dem Sofa, so dass du den Kanal wählen kannst.",
    [new Choice("Weiter", "event0_6_1")])
}

var event0_6_1 = function() {
    e.show("Nicht dass die anderen Kanäle besser wären. Frustriert schaltest wieder den grauenhaften Film an. Der Hauptdarsteller schleudert gerade mit Hilfe seines Stabs Feuerbälle und Blitze auf seine Feinde, während er durch den Nachthimmel schwebt und die Frau – Lilly hieß sie? – in seinem Arm hält.<br/><br/>An dieser Stelle atmest du tief durch.<br/><br/>Dir ist natürlich klar, dass die meisten Menschen so gut wie kein Verständnis von Magie haben, aber dieser Film verstößt gegen so viele grundlegende Prinzipien, dass es dir die Sprache verschlägt. Ein Zauber erfordert eine Beschwörungsformel, was selbst im günstigsten Fall mindestens fünf Sekunden erfordert, meist jedoch länger. Zudem erfordert es enorme Konzentration, mehr als einen Zauber zur selben Zeit zu wirken…<br/><br/>Als der Held gegen Ende seine Kräfte einsetzt, um seine Geliebte wieder zum Leben zu erwecken, schaltest du angewidert erneut um. Magie hat ihre Grenzen. Andernfalls hättest du deine Mutter sicherlich geheilt.",
    [new Choice("Weiter", "event0_6_2")])
}

var event0_6_2 = function() {
    e.show("Nachrichten. Immerhin.<br/><br/>„Nachdem Doktor Sikora wegen Verdachts auf illegale magische Behandlung in Gewahrsam genommen wurde, warten die Beamten nun auf das Eintreffen der Sachverständigen…“ Innerlich seufzt du auf. Die Öffentlichkeit hat sich noch nicht von dem Schock erholt, dass Magie tatsächlich existiert. Dementsprechend ist jede Art von Vorfall, bei dem Magie eine Rolle spielen könnte, eine wahre Goldmine für die Medien, wie diese Liveübertragung belegt. Du überlegst wegzuschalten, aber dann bemerkst du, dass du das gezeigte Gebäude kennst. Es befindet sich Nahe des Stadtzentrums.<br/><br/>„…Doktor Sikora war ins Visier der Ermittler geraten, als seine Praxis nicht die üblichen Utensilien und Medikamente zur Behandlung von Blutkrebs bestellt hatte, obwohl die Praxis angeblich auf Leukämie spezialisiert ist.”<br/><br/>Natürlich. Die Anzahl der Betrüger hat drastisch zugenommen, seitdem die Existenz von Magie bekannt geworden ist. Offiziell benötigt man natürlich etliche Genehmigungen, aber verzweifelte Menschen stellen eine leichte Beute für jeden Schwindler dar. Obwohl Heilung eine der einfachsten Formen von Magie ist, werden neumodische Konzepte wie Karzinome von der uralten Fachliteratur natürlich nicht abgedeckt. Du selbst hast versucht, dich nach der Diagnose deiner Mutter schlau zu machen. Vergeblich.<br/>„Bei einer stichprobenartigen Untersuchung fand man heraus, dass sich die Patienten bei überraschend guter Gesundheit befinden…”, – an dieser Stelle stockt die Reporterin und blickt kurz neben die Kamera – „aber… aber wir weisen darauf hin, dass ohne eine ausführliche Untersuchung jedwede Behauptung kritisch zu betrachten ist. Die Beamten vom MEK befinden sich bereits auf dem Weg und werden sich in den nächsten Wochen ausführlich damit beschäftigen.“<br/><br/>Du springst auf. Wütend. Schockiert. Elektrisiert.<br/>Könnte es sein? Könnte es tatsächlich ein Heilmittel geben? Und würden die Beamten es tatsächlich zur Sicherheit der Allgemeinheit wochenlang unter Verschluss halten?<br/><br/>Vermutlich.<br/>Es könnte auch alles ein Irrtum sein. Möglicherweise wäre es besser, sich wieder auf das Sofa zu setzen, diese Sache nur in den Nachrichten zu verfolgen, dem System seinen Lauf zu lassen und auf die Vernunft der Masse zu hoffen.<br/>Einfach so zu tun, als ginge dich das nichts an.<br/>Von wegen!<br/><br/>Dir bleibt also nur eine Möglichkeit. Du musst dort hin, bevor das MEK eintrifft.",
    [new Choice("Ich beherrsche die Magie, und ich will verdammt sein, wenn ich sie den Rest meines Lebens nur in meinem Zimmer einsetze!", "event1_0"),
    new Choice("Es wird Zeit die Welt zu retten. Eine Person nach der anderen!", "event1_0"),
    new Choice("Es könnte die Heilung für meine Mutter bedeuten. Sie mag nicht die tollste Mutter der Welt sein, aber ich werde auf keinen Fall einfach zusehen, wie sie stirbt!", "event1_0"),
    new Choice("Wenn uns sonst niemand hilft, muss ich eben selbst etwas tun!", "event1_0")])
}

var event1_0 = function() {
    e.show("Dir ist klar, dass die Zeit gegen dich Arbeit. Die MEK-Beamten sind zwar chronisch überarbeitet, aber bei einer Liveübertragung ist das Interesse der Öffentlichkeit vermutlich groß genug, um jemanden aus dem Bett zu klingeln. Andererseits könnte ein blindes Voranstürmen dir ebenfalls schaden.<br/><br/>Du überlegst kurz. Leider besitzt du kein Fahrzeug, aber immerhin dürfte gleich ein Bus ins Stadtzentrum fahren. Nicht ideal, aber es dürfte funktionieren. Alternativ könntest du natürlich fliegen, aber du bist dir nicht sicher, ob deine Kräfte dafür ausreichen. Zudem besteht die Möglichkeit, dass jemand etwas sehen könnte. Andererseits ist es natürlich Nacht.<br/>Letztlich hättest du noch die Möglichkeit, in deinem Zimmer nach Handschuhen, Schal und Mütze zu suchen, damit du nicht so schnell erkannt wirst. Zwar bist du in der Lage, dich magisch zu tarnen, aber mehrere Zauber aufrecht zu erhalten ist immer schwierig, und vielleicht brauchst du deine Kräfte anderweitig.",
    [new Choice("Zeit zum Umziehen.", "event1_0_1"),
    new Choice("Zeit zum Fliegen.", "event1_0_2"),
    new Choice("Zeit für den Bus.", "event1_0_3")])
}

var event1_0_1 = function() {
    state.delay += 5
    state.disguise = 1
    e.show("Du hastest in dein Zimmer, reißt den Schrank auf und wühlst wie besessen in deinen Klamotten. Kurz darauf hast du Schal, Mütze und Handschuhe gefunden. Sogar eine Sonnenbrille ist dabei.<br/>Und nun?",
    [new Choice("Zeit zum Fliegen.", "event1_0_2"),
    new Choice("Zeit für den Bus.", "event1_0_3")])
}

var event1_0_2 = function() {
    var text = "Du trittst nach draußen in die kühle Herbstluft. Du siehst dich kurz um, und als du niemanden siehst, murmelst du die Beschwörungsformel. Langsam erhebst du dich. "
    if(state.magic.value >= 30) {
        state.delay -= 30
        state.profile += 5
        text += "Bedächtig legst du mehr Kraft in den Zauber, und kurz darauf fliegst du Richtung Stadtzentrum davon. Obwohl du kaum schneller bist als mit dem Fahrrad, da du weder bremsen noch ausweichen musst. Dir wird ein wenig schwindelig angesichts der kleinen Lichtpunkte, die unter dir entlang rasen, und auch der schneidend kalte Nachtwind ist nicht besonders angenehm, doch du konzentrierst dich, und kannst kurze Zeit später in einer dunklen Seitenstraße landen. Die letzten Meter legst du zu Fuß zurück."
        var choices = [new Choice("Wo wir hingehen, brauchen wir keine Straßen", "event1_1")]
    } else {
        text += "Unglücklicherweise schaffst du es nicht, gleichzeitig genügend Kraft in den Zauber zu legen und die vollständige Kontrolle zu behalten. Du könntest zwar schweben, aber damit wärst du auch nicht schneller als zu Fuß."
        var choices = [new Choice("Du beschließt den Bus zu nehmen", "event1_0_3")]
    }
    e.show(text, choices)
}

var event1_0_3 = function() {
    state.delay += 5
    state.disguise = 1
    e.show("Du gehst zur Bushaltestelle. Angesichts deines Vorhabens, der Polizei und ihren magischen Spezialisten zuvor zu kommen, erscheint dir das Warten auf den Bus wie ein schlechter Scherz.<br/>Als der Bus endlich kommt, hat er zwei Minuten Verspätung, und obwohl du weisst, dass zwei Minuten nur in schlechten Filmen entscheidend sind, hast du ein mulmiges Gefühl.<br/><br/>Als du zwanzig Minuten später aussteigst, begibst du dich möglichst schnell Richtung Praxis.",
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
    e.show("TODO: Text einfügen!",
    [new Choice("Weiter", "eventEnd")])
}

var event1_1_3 = function() {
    e.show("TODO: Text einfügen!",
    [new Choice("Weiter", "eventEnd")])
}

var event1_1_4 = function() {
    e.show("TODO: Text einfügen!",
    [new Choice("Weiter", "eventEnd")])
}

var event1_2 = function() {
    e.show("TODO: Text einfügen!",
    [new Choice("Weiter", "eventEnd")])
}

var eventEnd = function() {
    e.show("The End")
}

window.onload = eventFirst;