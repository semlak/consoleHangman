const defaultTheme = "tolkien";
const defaultMaxGuesses = 10;


const GameData = {
	"words" : {

		"Amon Sul": {
			quote: "But long before, in the first days of the North Kingdom, they built a great watch-tower on Weathertop, Amon Sûl they called it. It was burned and broken, and nothing remains of it now but a tumbled ring, like a rough crown on the old hill’s head. Yet once it was tall and fair. It is told that Elendil stood there watching for the coming of Gil-Galad out of the West, in the days of the Last Alliance.",
			quoteSource: "Aragorn",
			aliases: ["Weathertop"],
			hints: ["Also the place where Frodo was stabbed by the Witch-King."],
			image: "./assets/images/amon-sul.png"
		},
		"Gil-Galad": {
			quote: 	`Gil-Galad was an Elven-king.
					Of him the harpers sadly sing;
					the last whose realm was fair and free
					between the Mountains and the Sea.

					His sword was long, his lance was keen.
					His shining helm afar was seen;
					the countless stars of heaven's field
					were mirrored in his silver shield.

					But long ago he rode away,
					and where he dwelleth none can say;
					for into darkness fell his star
					in Mordor where the shadows are.`,
			quoteSource: "The Fall of Gil-Galad, as translated by Bilbo Baggins",
			aliases: [],
			hints: [
				'Ruled as High King of the Noldor for over 3,500 years',
				"Died in combat against Sauron alongside Elendil, in Sauron himself was slain",
				"Wielded the spear Aeglos"
			],
			image: "./assets/images/gil-galad.jpg"
		},
		"Elrond": {
			quote: ". . . my memory reaches back even to the Elder Days. Edrendil was my sire, who was born in Gondolin before its fall; and my mother was Elwing, daughter of Dior, son of Luthien of Doriath. I have seen three ages in the West of the world, and many defeats, and many fruitless victories.",
			quoteSource: "Elrond, from The Council of Elrond",
			aliases: [],
			hints: ["Was the Herald of Gil-Galad in the War of the Last Alliance"],
			image: "./assets/images/elrond.jpg"
		},
		"Fingolfin": {
			quote: "For a great madness of rage was upon him, so that his eyes shone like the eyes of the Valar. Thus he came alone to Angband’s gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat.\n\nAnd Morgoth came.",
			quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
			aliases: [],
			hints: [
				"Was the first High-King of the Noldor after the rising of the Sun and the Moon",
				"Died in single combat against Morgoth"
			],
			image: "./assets/images/fingolfin.png",
			audio: "./assets/audio/fingolfin.mp3"
		},
		"Fingon": {
			quote: "Then he turned upon Fingon. That was a grim meeting. At last Fingon stood alone with his guard dead about him; and he fought with Gothmog, until another Balrog came behind and cast a thong of fire about him. Then Gothmog hewed him with his black axe, and a white flame sprang up from the helm of Fingon as it was cloven. Thus fell the High King of the Noldor.",
			quoteSource: "Quenta Silmarillion: Of the Fifth Battle: Nirnaeth Arnoediad",
			aliases: [],
			hints: [],
			image: "./assets/images/fingon.jpg",
			audio: "./assets/audio/fingon.mp3"

		},

		"Gandalf": {
			quote: "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.",
			quoteSource: "The Fellowship of the Ring, A Long-expected Party",
			aliases: ["Olórin", "Mithrandir", "Incánus", "Tharkûn", "Greyhame", "Old Greybeard", "Gandalf the Grey", "Gandalf the White", "the Grey Pilgrim", "Stormcrow", "the White Rider", "Láthspell", "Big Greybeard", "Long Greybeard", "Pointy Hat", "Tall Fellow", "Gandalf the Fool", "Gandalf the Wondering Wizard"],
			hints: [],
			image: "./assets/images/gandalf.jpg",
			audio: "./assets/audio/gandalf.mp3"
		},

		"Manwe": {
			quote: "Manwe has no thought for his own honour, and is not jealous of his power, but rules all to peace",
			quoteSource: "Quenta Silmarillion: Of the Beginning of Days",
			aliases: ["King of Arda, Lord of the Breath of Arda, King of the Valar, Elder King, Lord of the West, Lord of Aman"],
			hints: ["name means \"Blessed one\" or \"blessed person", "Ruler of Arda"],
			image: "./assets/images/manwe.jpg",
			audio: "./assets/audio/manwe.mp3"
		},


		"Feanor": {
			quote: "For Fëanor was made the mightiest in all parts of body and mind: in valour, in endurance, in beauty, in understanding, in skill, in strength and subtlety alike: of all the Children of Ilúvatar, and a bright flame was in him.",
			quoteSource: "Quenta Silmarillion:  Of the Sun and Moon and the Hiding of Valinor",
			aliases: ["Curufinwë", "Fëanáro"],
			hints: ["Creator of the Silmarils"],
			image: "./assets/images/feanor.jpg",
			audio: "./assets/audio/feanor.mp3"
		},

		"Finarfin": {
			quote: "But Finarfin spoke softly, as was his wont, and sought to calm the Noldor, persuading them to pause and ponder ere deeds were done that could not be undone; and Orodreth, alone of his sons, spoke in like manner.",
			quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
			aliases: [],
			hints: [],
			image: "./assets/images/finarfin.jpg",
			audio: "./assets/audio/finarfin.mp3"
		},

		"Finwe": {
			quote: "But Melkor was also there, and he came to the house of Fëanor and there he slew Finwë King of the Noldor before his doors, and spilled the first blood in the Blessed Realm; for Finwë alone had not fled from the horror of the Dark.",
			quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
			aliases: ["King of the Noldor"],
			hints: ["Father of Feanor", "Was one of the three ambassadors chosen by Orome who should go to Valinor and speak for their people"],
			image: "./assets/images/finwe.jpg",
			audio: "./assets/audio/finwe.mp3"
		},


		"Ungoliant": {
			quote: "There in Avathar, secret and unknown, Ungoliant had made her abode. The Eldar knew not whence she came; but some have said that in ages long before she descended from the darkness that lies about Arda, when Melkor first looked down in envy upon the Kingdom of Manwë, and that in the beginning she was one of those that he corrupted to his service.",
			quoteSource: "Quenta Silmarillion: Of the Darkening of Valinor",
			aliases: ["Ungweliantë, Spider of Night, Ungweliant, Wirilómë, Gloomweaver, Móru, Primeval Night, Night"],
			hints: [],
			image: "./assets/images/Melkor-and-Ungoliant.jpg",
			audio: "./assets/audio/ungoliant.mp3"
		},


		"Nazgul": {
			quote: "They are the Nazgul, Ringwraiths, neither living or dead. At all times they feel the presence of the ring...drawn to the power of the one..they will never stop hunting you.",
			quoteSource: "Aragorn explaining the nazgûl to Frodo, Pippin, Merry and Sam",
			aliases: ["Ringwraiths", "The Nine", "The Fallen Kings", "Black Riders", "Nunbolg", "Ulairi"],
			hints: [],
			image: "./assets/images/nazgul.jpg"
		},


		"Ingwe": {
			quote: "The smallest host and the first to set forth was led by Ingwë, the most high lord of all the Elvish race. He entered into Valinor and sits at the feet of the Powers, and all Elves revere his name; but he came never back, nor looked again upon Middle-earth.",
			quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
			aliases: [],
			hints: [],
			image: "./assets/images/ingwe.jpg"
		},


		"Melkor": {
			quote: ". . . and thus did Melkor breed the hideous race of the Orcs in envy and mockery of the Elves, of whom they were afterwards the bitterest foes. For the Orcs had life and multiplied after the manner of the Children of Ilúvatar; and naught that had life of its own, nor the semblance of life, could ever Melkor make since his rebellion in the Ainulindalë before the Beginning: so say the wise.",
			quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
			aliases: [],
			hints: [],
			image: "./assets/images/Melkor-and-Ungoliant.jpg",
			audio: "./assets/audio/melkor.mp3"
		},

		"Morgoth": {
			quote: "I am the Elder King: Melkor, first and mightiest of all the Valar, who was before the world and made it. The shadow of my purpose lies upon Arda, and all that is in it bends slowly and surely to my will.",
			quoteSource: "Quenta Silmarillion: The Words of Hurin and Morgoth.",
			aliases: [],
			hints: [],
			image: "./assets/images/morgoth.jpg"
		},


		"Grond": {
			quote: "Then Morgoth hurled aloft Grond, the Hammer of the Underworld, and swung it down like a bolt of thunder. But Fingolfin sprang aside, and Grond rent a mighty pit in the earth, whence smoke and fire darted.",
			quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
			aliases: [],
			hints: [],
			image: "./assets/images/grond.jpg",
			audio: "./assets/audio/grond.mp3"
		},


		"Angband": {
			quote: "And Melkor made also a fortress and armoury not far from the north-western shores of the sea, to resist any assault that might come from Aman. That stronghold was commanded by Sauron, lieutenant of Melkor; and it was named Angband.",
			quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
			aliases: [],
			hints: [],
			image: "./assets/images/angband.jpg"
		},


		"Silmaril": {
			quote: "And the inner fire of the Silmarils Fëanor made of the blended light of the Trees of Valinor, which lives in them yet, though the Trees have long withered and shine no more.",
			quoteSource: "Quenta Silmarillion: Of the Silmarils and the Unrest of the Noldor",
			aliases: [],
			hints: [],
			image: "./assets/images/silmaril.jpg"
		},


		"Utumno": {
			quote: "Now Melkor began the delving and building of a vast fortress, deep under Earth, beneath dark mountains where the beams of Illuin were cold and dim. That stronghold was named Utumno.",
			quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
			aliases: [],
			hints: [],
			image: "./assets/images/utumno.jpg"
		},



		"Galadriel": {
			quote: "A sister they had, Galadriel, most beautiful of all the house of Finwë; her hair was lit with gold as though it had caught in a mesh the radiance of Laurelin.",
			quoteSource: "Quenta Silmarillion: Of Eldamar and the Princes of the Eldalië",
			aliases: [],
			hints: [],
			image: "./assets/images/galadriel.jpg"
		},

		"Luthien": {
			quote: "The song of Lúthien before Mandos was the song most fair that ever in words was woven, and the song most sorrowful that ever the world shall ever hear. . . and Mandos was moved to pity, who never before was so moved, nor has been since.",
			quoteSource: "Quenta Silmarillion: Of Beren and Lúthien",
			aliases: [],
			hints: [],
			image: "./assets/images/luthien.jpg"
		},


		"Ringil": {
			quote: "But Fingolfin gleamed beneath it as a star; for his mail was overlaid with silver, and his blue shield was set with crystals; and he drew his sword Ringil, that glittered like ice.",
			quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
			aliases: [],
			hints: [],
			image: "./assets/images/ringil.jpg",
			audio: "./assets/audio/ringil.mp3"
		}
	},
	songs: ['./assets/audio/songs/12 - A Journey in the Dark.mp3', './assets/audio/songs/3 - The Shadow of the Past.mp3', './assets/audio/songs/1 - The Prophecy.mp3', './assets/audio/songs/6 - At the Sign of the Prancing Pony.mp3']
}


module.exports = GameData;