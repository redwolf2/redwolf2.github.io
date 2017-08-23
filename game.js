var e
var state

function State() {
    GameState.apply(this, arguments)
    this.gender = 1
    this.magic = 20
    this.lore =  20
    this.awareness = 20
    this.mundane =20
}

var eventFirst = function() {
    state = new State()
    e = new Engine(state)
    Engine.show("Aiur",
        [new Choice("Neu", "eventNew"),
        new Choice("Continue", "eventContinue")], false)
}

var eventNew = function() {
    Engine.show("Mit geweiteten Augen starrt sie ihn an:„Was... was... soll das heißen? Dämonen?“ Sie lacht, etwas zu schrill. Er erwidert ihren Blick ruhig: „Lilly... ich bin ein Magier.“ Wieder lacht sie und fährt sich mit der Hand durch die blonden Locken: \"Oh, ach so. Mach dir keine Sorgen, ich bin eine Fee...\"Der Mann verzieht noch immer keine Miene: „Ich gehöre einem uralten Geheimbund an, der die Menschen vor den Mächten der Finsternis bewahrt!“<br/>An dieser Stelle verdrehst du die Augen und wechselst den Kanal. Um diese Uhrzeit kommt einfach kein brauchbarer Film mehr im Fernsehen. Wie konnte so ein Mist jemals gedreht werden? Ein uralter Geheimbund von Magiern... lächerlich. Zugegeben, der Film scheint aus den Achtzigern zu stammen. Damals ahnte man noch nicht, dass bald Internet und Smartphone erfunden und die Welt für immer verändern würde. Mit dem Aufkommen der neuen Kommunikationstechnologie war es völlig unmöglich geworden, die Existenz der Magie noch länger geheim zu halten. Plötzlich tauchten immer mehr Videos von fliegenden Menschen, kreischenden Kugelblitzen und spontan auftretender Dunkelheit auf. Die Öffentlichkeit war ebenso überfordert wie die Medien und Politiker, und in der daraus resultierenden Unruhe wurden Magier gesetzlich verpflichtet, sich zu registrieren und ihre Geheimnisse offen zu legen. Zugleich wurde den meisten eine gutbezahlte Dienststelle angeboten. Die Welt schien sich nur noch um Magie zu drehen.<br />Dir war das egal. Dein Vater war gerade gestorben.",
        [new Choice("Weiter", "event0_2")])
}

var eventContinue = function() {
    GameState.load()
}

var event0_2 = function() {
    Engine.show(
        "Ein Autounfall... die Banalität war beinahe ebenso verstörend wie die plötzliche Leere in dir. Während sich deine Mutter dem Alkohol ergab, tatest du das einzige, was dir sinnvoll erschien: Soviel wie möglich zu unternehmen und so wenig wie möglich zu denken. Nichts war dumm genug, kein Aufwand zu groß, sofern du nur nicht mit deinen Erinnerungen alleine warst. Selbst die Tapete deines Zimmer runterzureißen war dir ein Vergnügen. Du hattest sie eh nie gemocht, sie entsprach gängigen Klischees über Jungs und Mädchen und war bei deiner Geburt entsprechend ausgewählt ausgewählt worden:",
        [new Choice("Blau", "event0_3_1"),
        new Choice("Rosa", "event0_3_2")])
}

var event0_3_1 = function() {
    state.gender = 1
    Engine.show(
        "Blau für Jungs. Und dann auch noch so ein hässlicher Farbton.",
        [new Choice("Weiter", "event0_3_3")])
}

var event0_3_2 = function() {
    state.gender = 0
    Engine.show("Rosa für Mädchen. Und dann auch noch so ein hässlicher Farbton.",
    [new Choice("Weiter", "event0_3_3")])
}

var event0_3_3 = function() {
    Engine.show("Ich widmete meine gesamte Kraft dem Bündeln magischer Energien, um möglichst mächtige Zauber zu formen.", 
    [new Choice("Weiter", "event0_4")])
}

var event0_3_3 = function() {
    Engine.show("Allerdings verbrachtest du auch viel Zeit bei deiner besten Freundin Alex. Neben unzähligen Filmen habt ihr euch vor allem viele Videos im Internet angesehen. Eines Tages grinste sie dich an, während sie zwei bedruckte Seiten Papier vor deine Nase hielt: \"Hier, das hab ich aus 'nem Forum. Der Initiationsritus.\"Der was?\", hattest du sie verwirrt gefragt, nicht ganz sicher, welcher Film das sein sollte.<br/>\"Initiationsritus. Das machen angeblich alle, die Magie erlernen wollen. Damit findet man heraus, ob man magisch begabt ist.\"<br/>Zwanzig Minuten später saßest du ihr gegenüber im Schneidersitz, in der Hand eine brennende Kerze, der Geruch von Weihrauch in der Luft, und lächelteste sie spöttisch an: \"Und, ist die Macht schon mit dir?\"<br/>Alex streckte dir die Zunge raus: \"Magie ist total selten. Dass heißt nicht, dass mein Ritual...\" cooler Effekt: Kerze schmilzt nicht und sondert keine Hitze ab, lässt sich nicht auspusten.<br/>Diese Erkenntnis gab dir neuen Schwung und veränderte dein Leben. Alex sammelte alles, was sie im Internet fand und half dir, dein Talent zu entwickeln. Eine Sache war dir dabei besonders wichtig:",
    [
        new Choice("Ich widmete meine gesamte Kraft dem Bündeln magischer Energien, um möglichst mächtige Zauber zu formen.", "event0_4_1"),
        new Choice("Ich verschlang jedes Buch und jeden Hinweis voller Wissensdurst. Ich wollte jeden Zauber kennen und jedes Geheimnis ergründen.", "event0_4_2"),
        new Choice("Ich gewöhnte mir an, auf jedes Detail in meiner Umgebung zu achten und keine Spuren zu hinterlassen.", "event0_4_3"),
        new Choice("Ich achtete darauf, die Welt um mich herum nicht zu vergessen, und verbrachte viel Zeit mit Freunden und sportlichen Aktivitäten.", "event0_4_4")
    ])
}

var event0_4_1 = function() {
    state.magic += 10
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_2 = function() {
    state.lore += 10
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_3 = function() {
    state.awareness += 10
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_4 = function() {
    state.mundane += 10
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "event0_4_5")])
}

var event0_4_5 = function() {
    Engine.show("Deine Begeisterung erhielt erst einen Dämpfer, als Thomas Brendel erschossen wurde. Brendel war einer jener Magierbeamten der ersten Stunde, und war für den Schutz der Regierung zuständig gewesen. Ermittler hatten herausgefunden, dass er seine Kräfte genutzt hatte, um hochrangige Politiker zu beeinflussen. Bei seiner Verhaftung hatte er ein Dutztend Sondereinsatzkommandos in Schlacke verwandelt, bevor eine Kugel seinen Kopf durchbohrte. Angesichts dieses gravierenden Machtmissbrauches brandete die öffentliche Panik erneut auf, was für registrierte Magier ernsthafte Folgen hatte: Magie durfte nur noch mit Genehmigung der Behörden und nur in bestimmten Situationen genutzt werden, sofern keine Vorstrafen vorhanden waren. Jeder gemeldete Magier musste unregelmäßige Zufallskontrollen über sich ergehen lassen, unabhängig davon, ob er Magie ausübte oder nicht. Das schlimmste jedoch waren die radikalen Gruppen besorgter Bürger, welche sämtliche Magier als Schwerkriminelle behandelte und auch vor Gewalt nicht zurückschreckten.<br/>Für dich war dies besonders schrecklich. Da ihr den Großteil eurer Quellen aus dem sogenanntem Darknet auf illegalen Tauschbörsen erworben hattet, standen die Chancen gut, dass dir die Ausübung von Magie verboten werden würde. Dabei gab es streng genommen kein Gesetz, dass dies bislang untersagt hatte, doch einige Gerichtsurteile änderten dies schnell. Statt einer gesicherten Laufbahn sahest du dich nun dem Risiko von gewalttätigen Anfeindungen und staatlicher Überwachung ausgesetzt. Es muss nicht erwähnt werden, dass dies entmutigend war.",
    [
        new Choice("Ich ignorierte meine magischen Kräfte für eine Weile.", "event0_5_1"),
        new Choice("Ich vernachlässigte die magischen Schriften.", "event0_5_2"),
        new Choice("Ich schenkte meiner Umgebung keine Aufmerksamkeit mehr.", "event0_5_3"),
        new Choice("Ich verkroch mich in meinem Zimmer.", "event0_5_4")
    ])
}

var event0_5_1 = function() {
    state.magic -= 10
    Engine.show("TODO: Beschreiben was passiert", 
    [new Choice("Weiter", "event0_5_5")])
}

var event0_5_2 = function() {
    state.lore -= 10
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "event0_5_5")])
}

var event0_5_3 = function() {
    state.awareness -= 10
    Engine.show("TODO: Beschreiben was passiert", 
    [new Choice("Weiter", "event0_5_5")])
}

var event0_5_4 = function() {
    state.mundane -= 10
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "event0_5_5")])
}

var event0_5_5 = function() {
    Engine.show("TODO: Beschreiben was passiert",
    [new Choice("Weiter", "eventEnd")])
}

var eventEnd = function() {
    Engine.show("The End")
}

window.onload = eventFirst;