var img = new Image();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Création du tableau 56x56
const tableau = new Array(56);
for (var i = 0; i < 56; i++)
{
  tableau[i] = new Array(56);
};

// Faire le tour du tableau
function disp_img() {
  $( "body" ).append( "<section></section>");
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
      var pixelImg = ctx.getImageData(j, i, 1, 1);
      var data = pixelImg.data;
      var red = data[0];
      var green = data[1];
      var blue = data[2];
      var alpha = data[3]/255;
      // console.log("X= " + j);
      // console.log("Y= " + i);
      // console.log(red, green, blue, alpha);
      $( "section" ).append( "<div class=\"pixel\" style=\"background-color:rgba(" + red + "," + green + "," + blue + "," + alpha + ")\"></div>");
    }
  }
};   

function clear_img() {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
      $( "section" ).remove();
    }
  }
};  

$( "#pkmn" ).keypress(function( event ) {
  if ( event.which == 13 ) {
    clear_img();
    pickPoke();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      disp_img();
    };  
    event.preventDefault();
  }
});

var pkmn = document.getElementById("pkmn");
function pickPoke() {
  if(pkmn.value == "bulbasaur" || pkmn.value == "bulbizarre") {img.src = '../res/001-bulbasaur.png';}
  else if(pkmn.value == "ivysaur" || pkmn.value == "herbizarre") {img.src = '../res/002-ivysaur.png';}
  else if(pkmn.value == "venusaur" || pkmn.value == "florizarre") {img.src = '../res/003-venusaur.png';}
  else if(pkmn.value == "charmander" || pkmn.value == "salameche") {img.src = '../res/004-charmander.png';}
  else if(pkmn.value == "charmeleon" || pkmn.value == "reptincel") {img.src = '../res/005-charmeleon.png';}
  else if(pkmn.value == "charizard" || pkmn.value == "dracaufeu") {img.src = '../res/006-charizard.png';}
  else if(pkmn.value == "squirtle" || pkmn.value == "carapuce") {img.src = '../res/007-squirtle.png';}
  else if(pkmn.value == "wartortle" || pkmn.value == "carabaffe") {img.src = '../res/008-wartortle.png';}
  else if(pkmn.value == "blastoise" || pkmn.value == "tortank") {img.src = '../res/009-blastoise.png';}
  else if(pkmn.value == "caterpie" || pkmn.value == "chenipan") {img.src = '../res/010-caterpie.png';}
  else if(pkmn.value == "metapod" || pkmn.value == "chrysacier") {img.src = '../res/011-metapod.png';}
  else if(pkmn.value == "butterfree" || pkmn.value == "papilusion") {img.src = '../res/012-butterfree.png';}
  else if(pkmn.value == "weedle" || pkmn.value == "aspicot") {img.src = '../res/013-weedle.png';}
  else if(pkmn.value == "kakuna" || pkmn.value == "coconfort") {img.src = '../res/014-kakuna.png';}
  else if(pkmn.value == "beedrill" || pkmn.value == "dardagnan") {img.src = '../res/015-beedrill.png';}
  else if(pkmn.value == "pidgey" || pkmn.value == "roucool") {img.src = '../res/016-pidgey.png';}
  else if(pkmn.value == "pidgeotto" || pkmn.value == "roucoups") {img.src = '../res/017-pidgeotto.png';}
  else if(pkmn.value == "pidgeot" || pkmn.value == "roucarnage") {img.src = '../res/018-pidgeot.png';}
  else if(pkmn.value == "rattata" || pkmn.value == "rattata") {img.src = '../res/019-rattata.png';}
  else if(pkmn.value == "raticate" || pkmn.value == "rattatac") {img.src = '../res/020-raticate.png';}
  else if(pkmn.value == "spearow" || pkmn.value == "piafabec") {img.src = '../res/021-spearow.png';}
  else if(pkmn.value == "fearow" || pkmn.value == "rapasdepic") {img.src = '../res/022-fearow.png';}
  else if(pkmn.value == "ekans" || pkmn.value == "abo") {img.src = '../res/023-ekans.png';}
  else if(pkmn.value == "arbok" || pkmn.value == "arbok") {img.src = '../res/024-arbok.png';}
  else if(pkmn.value == "pikachu" || pkmn.value == "pikachu") {img.src = '../res/025-pikachu.png';}
  else if(pkmn.value == "raichu" || pkmn.value == "raichu") {img.src = '../res/026-raichu.png';}
  else if(pkmn.value == "sandshrew" || pkmn.value == "sabelette") {img.src = '../res/027-sandshrew.png';}
  else if(pkmn.value == "sandslash" || pkmn.value == "sablaireau") {img.src = '../res/028-sandslash.png';}
  else if(pkmn.value == "nidoran-f" || pkmn.value == "nidoran-f") {img.src = '../res/029-nidoran-f.png';}
  else if(pkmn.value == "nidorina" || pkmn.value == "nidorina") {img.src = '../res/030-nidorina.png';}
  else if(pkmn.value == "nidoqueen" || pkmn.value == "nidoqueen") {img.src = '../res/031-nidoqueen.png';}
  else if(pkmn.value == "nidoran-m" || pkmn.value == "nidoran-m") {img.src = '../res/032-nidoran-m.png';}
  else if(pkmn.value == "nidorino" || pkmn.value == "nidorino") {img.src = '../res/033-nidorino.png';}
  else if(pkmn.value == "nidoking" || pkmn.value == "nidoking") {img.src = '../res/034-nidoking.png';}
  else if(pkmn.value == "clefairy" || pkmn.value == "melofee") {img.src = '../res/035-clefairy.png';}
  else if(pkmn.value == "clefable" || pkmn.value == "melodelfe") {img.src = '../res/036-clefable.png';}
  else if(pkmn.value == "vulpix" || pkmn.value == "goupix") {img.src = '../res/037-vulpix.png';}
  else if(pkmn.value == "ninetales" || pkmn.value == "feunard") {img.src = '../res/038-ninetales.png';}
  else if(pkmn.value == "jigglypuff" || pkmn.value == "rondoudou") {img.src = '../res/039-jigglypuff.png';}
  else if(pkmn.value == "wigglytuff" || pkmn.value == "grodoudou") {img.src = '../res/040-wigglytuff.png';}
  else if(pkmn.value == "zubat" || pkmn.value == "nosferapti") {img.src = '../res/041-zubat.png';}
  else if(pkmn.value == "golbat" || pkmn.value == "nosferalto") {img.src = '../res/042-golbat.png';}
  else if(pkmn.value == "oddish" || pkmn.value == "mystherbe") {img.src = '../res/043-oddish.png';}
  else if(pkmn.value == "gloom" || pkmn.value == "ortide") {img.src = '../res/044-gloom.png';}
  else if(pkmn.value == "vileplume" || pkmn.value == "rafflesia") {img.src = '../res/045-vileplume.png';}
  else if(pkmn.value == "paras" || pkmn.value == "paras") {img.src = '../res/046-paras.png';}
  else if(pkmn.value == "parasect" || pkmn.value == "parasect") {img.src = '../res/047-parasect.png';}
  else if(pkmn.value == "venonat" || pkmn.value == "mimitoss") {img.src = '../res/048-venonat.png';}
  else if(pkmn.value == "venomoth" || pkmn.value == "aeromite") {img.src = '../res/049-venomoth.png';}
  else if(pkmn.value == "diglett" || pkmn.value == "taupiqueur") {img.src = '../res/050-diglett.png';}
  else if(pkmn.value == "dugtrio" || pkmn.value == "triopikeur") {img.src = '../res/051-dugtrio.png';}
  else if(pkmn.value == "meowth" || pkmn.value == "miaouss") {img.src = '../res/052-meowth.png';}
  else if(pkmn.value == "persian" || pkmn.value == "persian") {img.src = '../res/053-persian.png';}
  else if(pkmn.value == "psyduck" || pkmn.value == "psykokwak") {img.src = '../res/054-psyduck.png';}
  else if(pkmn.value == "golduck" || pkmn.value == "akwakwak") {img.src = '../res/055-golduck.png';}
  else if(pkmn.value == "mankey" || pkmn.value == "ferosinge") {img.src = '../res/056-mankey.png';}
  else if(pkmn.value == "primeape" || pkmn.value == "colossinge") {img.src = '../res/057-primeape.png';}
  else if(pkmn.value == "growlithe" || pkmn.value == "caninos") {img.src = '../res/058-growlithe.png';}
  else if(pkmn.value == "arcanine" || pkmn.value == "arcanin") {img.src = '../res/059-arcanine.png';}
  else if(pkmn.value == "poliwag" || pkmn.value == "ptitard") {img.src = '../res/060-poliwag.png';}
  else if(pkmn.value == "poliwhirl" || pkmn.value == "tetarte") {img.src = '../res/061-poliwhirl.png';}
  else if(pkmn.value == "poliwrath" || pkmn.value == "tartard") {img.src = '../res/062-poliwrath.png';}
  else if(pkmn.value == "abra" || pkmn.value == "abra") {img.src = '../res/063-abra.png';}
  else if(pkmn.value == "kadabra" || pkmn.value == "kadabra") {img.src = '../res/064-kadabra.png';}
  else if(pkmn.value == "alakazam" || pkmn.value == "alakazam") {img.src = '../res/065-alakazam.png';}
  else if(pkmn.value == "machop" || pkmn.value == "machoc") {img.src = '../res/066-machop.png';}
  else if(pkmn.value == "machoke" || pkmn.value == "machopeur") {img.src = '../res/067-machoke.png';}
  else if(pkmn.value == "machamp" || pkmn.value == "mackogneur") {img.src = '../res/068-machamp.png';}
  else if(pkmn.value == "bellsprout" || pkmn.value == "chetiflor") {img.src = '../res/069-bellsprout.png';}
  else if(pkmn.value == "weepinbell" || pkmn.value == "boustiflor") {img.src = '../res/070-weepinbell.png';}
  else if(pkmn.value == "victreebel" || pkmn.value == "empiflor") {img.src = '../res/071-victreebel.png';}
  else if(pkmn.value == "tentacool" || pkmn.value == "tentacool") {img.src = '../res/072-tentacool.png';}
  else if(pkmn.value == "tentacruel" || pkmn.value == "tentacruel") {img.src = '../res/073-tentacruel.png';}
  else if(pkmn.value == "geodude" || pkmn.value == "racaillou") {img.src = '../res/074-geodude.png';}
  else if(pkmn.value == "graveler" || pkmn.value == "gravalanch") {img.src = '../res/075-graveler.png';}
  else if(pkmn.value == "golem" || pkmn.value == "grolem") {img.src = '../res/076-golem.png';}
  else if(pkmn.value == "ponyta" || pkmn.value == "ponyta") {img.src = '../res/077-ponyta.png';}
  else if(pkmn.value == "rapidash" || pkmn.value == "galopa") {img.src = '../res/078-rapidash.png';}
  else if(pkmn.value == "slowpoke" || pkmn.value == "ramoloss") {img.src = '../res/079-slowpoke.png';}
  else if(pkmn.value == "slowbro" || pkmn.value == "flagadoss") {img.src = '../res/080-slowbro.png';}
  else if(pkmn.value == "magnemite" || pkmn.value == "magneti") {img.src = '../res/081-magnemite.png';}
  else if(pkmn.value == "magneton" || pkmn.value == "magneton") {img.src = '../res/082-magneton.png';}
  else if(pkmn.value == "farfetchd" || pkmn.value == "canarticho") {img.src = '../res/083-farfetchd.png';}
  else if(pkmn.value == "doduo" || pkmn.value == "doduo") {img.src = '../res/084-doduo.png';}
  else if(pkmn.value == "dodrio" || pkmn.value == "dodrio") {img.src = '../res/085-dodrio.png';}
  else if(pkmn.value == "seel" || pkmn.value == "otaria") {img.src = '../res/086-seel.png';}
  else if(pkmn.value == "dewgong" || pkmn.value == "lamantine") {img.src = '../res/087-dewgong.png';}
  else if(pkmn.value == "grimer" || pkmn.value == "tadmorv") {img.src = '../res/088-grimer.png';}
  else if(pkmn.value == "muk" || pkmn.value == "grotadmorv") {img.src = '../res/089-muk.png';}
  else if(pkmn.value == "shelder" || pkmn.value == "kokiyas") {img.src = '../res/090-shelder.png';}
  else if(pkmn.value == "cloyster" || pkmn.value == "crustabri") {img.src = '../res/091-cloyster.png';}
  else if(pkmn.value == "gastly" || pkmn.value == "fantominus") {img.src = '../res/092-gastly.png';}
  else if(pkmn.value == "haunter" || pkmn.value == "spectrum") {img.src = '../res/093-haunter.png';}
  else if(pkmn.value == "gengar" || pkmn.value == "ectoplasma") {img.src = '../res/094-gengar.png';}
  else if(pkmn.value == "onix" || pkmn.value == "onix") {img.src = '../res/095-onix.png';}
  else if(pkmn.value == "drowzee" || pkmn.value == "soporifik") {img.src = '../res/096-drowzee.png';}
  else if(pkmn.value == "hypno" || pkmn.value == "hypnomade") {img.src = '../res/097-hypno.png';}
  else if(pkmn.value == "krabby" || pkmn.value == "krabby") {img.src = '../res/098-krabby.png';}
  else if(pkmn.value == "kingler" || pkmn.value == "krabboss") {img.src = '../res/099-kingler.png';}
  else if(pkmn.value == "voltorb" || pkmn.value == "voltorbe") {img.src = '../res/100-voltorb.png';}
  else if(pkmn.value == "electrode" || pkmn.value == "electrode") {img.src = '../res/101-electrode.png';}
  else if(pkmn.value == "exeggcute" || pkmn.value == "noeunoeuf") {img.src = '../res/102-exeggcute.png';}
  else if(pkmn.value == "exeggutor" || pkmn.value == "noadkoko") {img.src = '../res/103-exeggutor.png';}
  else if(pkmn.value == "cubone" || pkmn.value == "osselait") {img.src = '../res/104-cubone.png';}
  else if(pkmn.value == "marowak" || pkmn.value == "ossatuer") {img.src = '../res/105-marowak.png';}
  else if(pkmn.value == "hitmonlee" || pkmn.value == "kicklee") {img.src = '../res/106-hitmonlee.png';}
  else if(pkmn.value == "hitmonchan" || pkmn.value == "tygnon") {img.src = '../res/107-hitmonchan.png';}
  else if(pkmn.value == "lickitung" || pkmn.value == "excelangue") {img.src = '../res/108-lickitung.png';}
  else if(pkmn.value == "koffing" || pkmn.value == "smogo") {img.src = '../res/109-koffing.png';}
  else if(pkmn.value == "weezing" || pkmn.value == "smogogo") {img.src = '../res/110-weezing.png';}
  else if(pkmn.value == "rhyhorn" || pkmn.value == "rhinocorne") {img.src = '../res/111-rhyhorn.png';}
  else if(pkmn.value == "rhydon" || pkmn.value == "rhinoferos") {img.src = '../res/112-rhydon.png';}
  else if(pkmn.value == "chansey" || pkmn.value == "leveinard") {img.src = '../res/113-chansey.png';}
  else if(pkmn.value == "tangela" || pkmn.value == "saquedeneu") {img.src = '../res/114-tangela.png';}
  else if(pkmn.value == "kangaskhan" || pkmn.value == "kangourex") {img.src = '../res/115-kangaskhan.png';}
  else if(pkmn.value == "horsea" || pkmn.value == "hypotrempe") {img.src = '../res/116-horsea.png';}
  else if(pkmn.value == "seadra" || pkmn.value == "hypocean") {img.src = '../res/117-seadra.png';}
  else if(pkmn.value == "goldeen" || pkmn.value == "poissirene") {img.src = '../res/118-goldeen.png';}
  else if(pkmn.value == "seaking" || pkmn.value == "poissoroy") {img.src = '../res/119-seaking.png';}
  else if(pkmn.value == "staryu" || pkmn.value == "stari") {img.src = '../res/120-staryu.png';}
  else if(pkmn.value == "starmie" || pkmn.value == "staross") {img.src = '../res/121-starmie.png';}
  else if(pkmn.value == "mr-mime" || pkmn.value == "mr-mime") {img.src = '../res/122-mr-mime.png';}
  else if(pkmn.value == "scyther" || pkmn.value == "insecateur") {img.src = '../res/123-scyther.png';}
  else if(pkmn.value == "jynx" || pkmn.value == "lippoutou") {img.src = '../res/124-jynx.png';}
  else if(pkmn.value == "electabuzz" || pkmn.value == "elektek") {img.src = '../res/125-electabuzz.png';}
  else if(pkmn.value == "magmar" || pkmn.value == "magmar") {img.src = '../res/126-magmar.png';}
  else if(pkmn.value == "pinsir" || pkmn.value == "scarabrute") {img.src = '../res/127-pinsir.png';}
  else if(pkmn.value == "tauros" || pkmn.value == "tauros") {img.src = '../res/128-tauros.png';}
  else if(pkmn.value == "magikarp" || pkmn.value == "magicarpe") {img.src = '../res/129-magikarp.png';}
  else if(pkmn.value == "gyarados" || pkmn.value == "leviator") {img.src = '../res/130-gyarados.png';}
  else if(pkmn.value == "lapras" || pkmn.value == "lokhlass") {img.src = '../res/131-lapras.png';}
  else if(pkmn.value == "ditto" || pkmn.value == "metamorph") {img.src = '../res/132-ditto.png';}
  else if(pkmn.value == "eevee" || pkmn.value == "evoli") {img.src = '../res/133-eevee.png';}
  else if(pkmn.value == "vaporeon" || pkmn.value == "aquali") {img.src = '../res/134-vaporeon.png';}
  else if(pkmn.value == "jolteon" || pkmn.value == "voltali") {img.src = '../res/135-jolteon.png';}
  else if(pkmn.value == "flareon" || pkmn.value == "pyroli") {img.src = '../res/136-flareon.png';}
  else if(pkmn.value == "porygon" || pkmn.value == "porygon") {img.src = '../res/137-porygon.png';}
  else if(pkmn.value == "omanyte" || pkmn.value == "amonita") {img.src = '../res/138-omanyte.png';}
  else if(pkmn.value == "omastar" || pkmn.value == "amonistar") {img.src = '../res/139-omastar.png';}
  else if(pkmn.value == "kabuto" || pkmn.value == "kabuto") {img.src = '../res/140-kabuto.png';}
  else if(pkmn.value == "kabutops" || pkmn.value == "kabutops") {img.src = '../res/141-kabutops.png';}
  else if(pkmn.value == "aerodactyl" || pkmn.value == "ptera") {img.src = '../res/142-aerodactyl.png';}
  else if(pkmn.value == "snorlax" || pkmn.value == "ronflex") {img.src = '../res/143-snorlax.png';}
  else if(pkmn.value == "articuno" || pkmn.value == "artikodin") {img.src = '../res/144-articuno.png';}
  else if(pkmn.value == "zapdos" || pkmn.value == "electhot") {img.src = '../res/145-zapdos.png';}
  else if(pkmn.value == "moltres" || pkmn.value == "sulfura") {img.src = '../res/146-moltres.png';}
  else if(pkmn.value == "dratini" || pkmn.value == "minidraco") {img.src = '../res/147-dratini.png';}
  else if(pkmn.value == "dragonair" || pkmn.value == "draco") {img.src = '../res/148-dragonair.png';}
  else if(pkmn.value == "dragonite" || pkmn.value == "dracolosse") {img.src = '../res/149-dragonite.png';}
  else if(pkmn.value == "mewtwo" || pkmn.value == "mewtwo") {img.src = '../res/150-mewtwo.png';}
  else if(pkmn.value == "mew" || pkmn.value == "mew") {img.src = '../res/151-mew.png';}
  else{
    console.log(pkmn.value);
    console.log("erreur")
    alert("Ce pokémon n'esxiste pas")
  }
};