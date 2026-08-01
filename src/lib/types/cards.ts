// NetrunnerDB card records for the Core Battle Box. The map key is the card id.
//
// One card can appear in more than one decklist. Store one record for each id. This
// removes duplicate records. decklists.ts points to each record by id. It uses the
// card_ids array in each deck. The page loader then builds the Card[] for each deck.
//
// We do not store image URLs. cardImageUrl() in utils.ts builds them from the
// printing id. `has_narrative` marks the few cards that have wide art.
import type { Card } from './netrunnerdb';

export const cards: Record<string, Card> = {
	above_the_law: {
		id: 'above_the_law',
		type: 'cards',
		attributes: {
			title: 'Above the Law',
			faction_id: 'weyland_consortium',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '30060',
			card_cycle_ids: ['system_gateway']
		}
	},
	anoetic_void: {
		id: 'anoetic_void',
		type: 'cards',
		attributes: {
			title: 'Anoetic Void',
			faction_id: 'jinteki',
			card_type_id: 'upgrade',
			influence_cost: 4,
			latest_printing_id: '30050',
			card_cycle_ids: ['system_gateway']
		}
	},
	ansel_1_0: {
		id: 'ansel_1_0',
		type: 'cards',
		attributes: {
			title: 'Ansel 1.0',
			faction_id: 'haas_bioroid',
			card_type_id: 'ice',
			influence_cost: 3,
			latest_printing_id: '30038',
			card_cycle_ids: ['system_gateway']
		}
	},
	anthill_excavation_contract: {
		id: 'anthill_excavation_contract',
		type: 'cards',
		attributes: {
			title: 'Anthill Excavation Contract',
			faction_id: 'weyland_consortium',
			card_type_id: 'asset',
			influence_cost: 2,
			latest_printing_id: '35072',
			card_cycle_ids: ['elevation'],
			notes: 'The best time to rez this is before the start of your turn'
		}
	},
	azimat: {
		id: 'azimat',
		type: 'cards',
		attributes: {
			title: 'Azimat',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '35029',
			card_cycle_ids: ['elevation']
		}
	},
	biawak: {
		id: 'biawak',
		type: 'cards',
		attributes: {
			title: 'Biawak',
			faction_id: 'weyland_consortium',
			card_type_id: 'ice',
			influence_cost: 3,
			latest_printing_id: '35074',
			card_cycle_ids: ['elevation']
		}
	},
	bigger_picture: {
		id: 'bigger_picture',
		type: 'cards',
		attributes: {
			title: 'Bigger Picture',
			faction_id: 'nbn',
			card_type_id: 'operation',
			influence_cost: 2,
			latest_printing_id: '35065',
			card_cycle_ids: ['elevation']
		}
	},
	bling: {
		id: 'bling',
		type: 'cards',
		attributes: {
			title: 'Bling',
			faction_id: 'anarch',
			card_type_id: 'hardware',
			influence_cost: 3,
			latest_printing_id: '35006',
			card_cycle_ids: ['elevation'],
			notes: 'Some extra MU and some draw, be careful to not lose important cards to the trash step'
		}
	},
	botulus: {
		id: 'botulus',
		type: 'cards',
		attributes: {
			title: 'Botulus',
			faction_id: 'anarch',
			card_type_id: 'program',
			influence_cost: 3,
			latest_printing_id: '30004',
			card_cycle_ids: ['system_gateway']
		}
	},
	bran_1_0: {
		id: 'bran_1_0',
		type: 'cards',
		attributes: {
			title: 'Brân 1.0',
			faction_id: 'haas_bioroid',
			card_type_id: 'ice',
			influence_cost: 2,
			latest_printing_id: '30039',
			card_cycle_ids: ['system_gateway']
		}
	},
	bumi_1_0: {
		id: 'bumi_1_0',
		type: 'cards',
		attributes: {
			title: 'Bumi 1.0',
			faction_id: 'haas_bioroid',
			card_type_id: 'ice',
			influence_cost: 1,
			latest_printing_id: '35041',
			card_cycle_ids: ['elevation']
		}
	},
	buzzsaw: {
		id: 'buzzsaw',
		type: 'cards',
		attributes: {
			title: 'Buzzsaw',
			faction_id: 'anarch',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '30005',
			card_cycle_ids: ['system_gateway']
		}
	},
	byte: {
		id: 'byte',
		type: 'cards',
		attributes: {
			title: 'Byte!',
			faction_id: 'jinteki',
			card_type_id: 'asset',
			influence_cost: 2,
			latest_printing_id: '35050',
			card_cycle_ids: ['elevation']
		}
	},
	carmen: {
		id: 'carmen',
		type: 'cards',
		attributes: {
			title: 'Carmen',
			faction_id: 'criminal',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '30015',
			card_cycle_ids: ['system_gateway']
		}
	},
	chromatophores: {
		id: 'chromatophores',
		type: 'cards',
		attributes: {
			title: 'Chromatophores',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '35030',
			card_cycle_ids: ['elevation']
		}
	},
	clean_getaway: {
		id: 'clean_getaway',
		type: 'cards',
		attributes: {
			title: 'Clean Getaway',
			faction_id: 'criminal',
			card_type_id: 'event',
			influence_cost: 2,
			latest_printing_id: '35014',
			card_cycle_ids: ['elevation'],
			notes: 'Careful to not run a Spin Doctor, could cause the run to be unsuccessful'
		}
	},
	clearinghouse: {
		id: 'clearinghouse',
		type: 'cards',
		attributes: {
			title: 'Clearinghouse',
			faction_id: 'weyland_consortium',
			card_type_id: 'asset',
			influence_cost: 3,
			latest_printing_id: '30061',
			card_cycle_ids: ['system_gateway']
		}
	},
	conduit: {
		id: 'conduit',
		type: 'cards',
		attributes: {
			title: 'Conduit',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 4,
			latest_printing_id: '30024',
			card_cycle_ids: ['system_gateway']
		}
	},
	creative_commission: {
		id: 'creative_commission',
		type: 'cards',
		attributes: {
			title: 'Creative Commission',
			faction_id: 'shaper',
			card_type_id: 'event',
			influence_cost: 2,
			latest_printing_id: '30020',
			card_cycle_ids: ['system_gateway'],
			notes: 'Net 4c is excellent, try to play this last click!'
		}
	},
	devadatta_drone: {
		id: 'devadatta_drone',
		type: 'cards',
		attributes: {
			title: 'Devadatta Drone',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '35031',
			card_cycle_ids: ['elevation']
		}
	},
	docklands_pass: {
		id: 'docklands_pass',
		type: 'cards',
		attributes: {
			title: 'Docklands Pass',
			faction_id: 'criminal',
			card_type_id: 'hardware',
			influence_cost: 2,
			latest_printing_id: '30013',
			card_cycle_ids: ['system_gateway']
		}
	},
	doomscroll: {
		id: 'doomscroll',
		type: 'cards',
		attributes: {
			title: 'Doomscroll',
			faction_id: 'nbn',
			card_type_id: 'ice',
			influence_cost: 2,
			latest_printing_id: '35063',
			card_cycle_ids: ['elevation']
		}
	},
	dzmz_optimizer: {
		id: 'dzmz_optimizer',
		type: 'cards',
		attributes: {
			title: 'DZMZ Optimizer',
			faction_id: 'shaper',
			card_type_id: 'hardware',
			influence_cost: 2,
			latest_printing_id: '30022',
			card_cycle_ids: ['system_gateway']
		}
	},
	echelon: {
		id: 'echelon',
		type: 'cards',
		attributes: {
			title: 'Echelon',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '30025',
			card_cycle_ids: ['system_gateway']
		}
	},
	embedded_reporting: {
		id: 'embedded_reporting',
		type: 'cards',
		attributes: {
			title: 'Embedded Reporting',
			faction_id: 'nbn',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35059',
			card_cycle_ids: ['elevation']
		}
	},
	empiricist: {
		id: 'empiricist',
		type: 'cards',
		attributes: {
			title: 'Empiricist',
			faction_id: 'jinteki',
			card_type_id: 'ice',
			influence_cost: 3,
			latest_printing_id: '35052',
			card_cycle_ids: ['elevation']
		}
	},
	fermenter: {
		id: 'fermenter',
		type: 'cards',
		attributes: {
			title: 'Fermenter',
			faction_id: 'anarch',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '30007',
			card_cycle_ids: ['system_gateway']
		}
	},
	flyswatter: {
		id: 'flyswatter',
		type: 'cards',
		attributes: {
			title: 'Flyswatter',
			faction_id: 'neutral_corp',
			card_type_id: 'ice',
			influence_cost: 0,
			latest_printing_id: '35079',
			card_cycle_ids: ['elevation']
		}
	},
	funhouse: {
		id: 'funhouse',
		type: 'cards',
		attributes: {
			title: 'Funhouse',
			faction_id: 'nbn',
			card_type_id: 'ice',
			influence_cost: 2,
			latest_printing_id: '30054',
			card_cycle_ids: ['system_gateway']
		}
	},
	gamedragon_pro: {
		id: 'gamedragon_pro',
		type: 'cards',
		attributes: {
			title: 'GAMEDRAGON™ Pro',
			faction_id: 'shaper',
			card_type_id: 'hardware',
			influence_cost: 2,
			latest_printing_id: '35027',
			card_cycle_ids: ['elevation']
		}
	},
	gourmand: {
		id: 'gourmand',
		type: 'cards',
		attributes: {
			title: 'Gourmand',
			faction_id: 'anarch',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '35007',
			card_cycle_ids: ['elevation']
		}
	},
	government_subsidy: {
		id: 'government_subsidy',
		type: 'cards',
		attributes: {
			title: 'Government Subsidy',
			faction_id: 'weyland_consortium',
			card_type_id: 'operation',
			influence_cost: 1,
			latest_printing_id: '30064',
			card_cycle_ids: ['system_gateway']
		}
	},
	greenmail: {
		id: 'greenmail',
		type: 'cards',
		attributes: {
			title: 'Greenmail',
			faction_id: 'weyland_consortium',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35070',
			card_cycle_ids: ['elevation'],
			notes:
				'You can install and score this in a single turn. Also, not only does this trigger your ID on score, it also triggers when you forfeit it for Biawak (and makes the Biawak rez free!)'
		}
	},
	hansei_review: {
		id: 'hansei_review',
		type: 'cards',
		attributes: {
			title: 'Hansei Review',
			faction_id: 'jinteki',
			card_type_id: 'operation',
			influence_cost: 1,
			latest_printing_id: '30048',
			card_cycle_ids: ['system_gateway']
		}
	},
	hedge_fund: {
		id: 'hedge_fund',
		type: 'cards',
		attributes: {
			title: 'Hedge Fund',
			faction_id: 'neutral_corp',
			card_type_id: 'operation',
			influence_cost: 0,
			latest_printing_id: '30075',
			card_cycle_ids: ['system_gateway', 'system_core_2019', 'revised_core_set', 'core_set']
		}
	},
	humanoid_resources: {
		id: 'humanoid_resources',
		type: 'cards',
		attributes: {
			title: 'Humanoid Resources',
			faction_id: 'haas_bioroid',
			card_type_id: 'asset',
			influence_cost: 2,
			latest_printing_id: '35039',
			card_cycle_ids: ['elevation']
		}
	},
	ip_enforcement: {
		id: 'ip_enforcement',
		type: 'cards',
		attributes: {
			title: 'IP Enforcement',
			faction_id: 'nbn',
			card_type_id: 'operation',
			influence_cost: 5,
			latest_printing_id: '35066',
			card_cycle_ids: ['elevation']
		}
	},
	jailbreak: {
		id: 'jailbreak',
		type: 'cards',
		attributes: {
			title: 'Jailbreak',
			faction_id: 'neutral_runner',
			card_type_id: 'event',
			influence_cost: 0,
			latest_printing_id: '30028',
			card_cycle_ids: ['system_gateway']
		}
	},
	karuna: {
		id: 'karuna',
		type: 'cards',
		attributes: {
			title: 'Karunā',
			faction_id: 'jinteki',
			card_type_id: 'ice',
			influence_cost: 2,
			latest_printing_id: '30047',
			card_cycle_ids: ['system_gateway']
		}
	},
	kessleroid: {
		id: 'kessleroid',
		type: 'cards',
		attributes: {
			title: 'Kessleroid',
			faction_id: 'weyland_consortium',
			card_type_id: 'ice',
			influence_cost: 1,
			latest_printing_id: '35075',
			card_cycle_ids: ['elevation']
		}
	},
	key_performance_indicators: {
		id: 'key_performance_indicators',
		type: 'cards',
		attributes: {
			title: 'Key Performance Indicators',
			faction_id: 'weyland_consortium',
			card_type_id: 'operation',
			influence_cost: 2,
			latest_printing_id: '35077',
			card_cycle_ids: ['elevation']
		}
	},
	knickknack_obrian: {
		id: 'knickknack_obrian',
		type: 'cards',
		attributes: {
			title: '“Knickknack” O’Brian',
			faction_id: 'shaper',
			card_type_id: 'resource',
			influence_cost: 3,
			latest_printing_id: '35033',
			card_cycle_ids: ['elevation']
		}
	},
	leech: {
		id: 'leech',
		type: 'cards',
		attributes: {
			title: 'Leech',
			faction_id: 'anarch',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '30008',
			card_cycle_ids: ['system_gateway']
		}
	},
	leo_construction_labor_solutions: {
		id: 'leo_construction_labor_solutions',
		type: 'cards',
		attributes: {
			title: 'LEO Construction: Labor Solutions',
			faction_id: 'haas_bioroid',
			card_type_id: 'corp_identity',
			influence_cost: null,
			latest_printing_id: '35035',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	lie_low: {
		id: 'lie_low',
		type: 'cards',
		attributes: {
			title: 'Lie Low',
			faction_id: 'criminal',
			card_type_id: 'event',
			influence_cost: 1,
			latest_printing_id: '35015',
			card_cycle_ids: ['elevation']
		}
	},
	longevity_serum: {
		id: 'longevity_serum',
		type: 'cards',
		attributes: {
			title: 'Longevity Serum',
			faction_id: 'jinteki',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '30044',
			card_cycle_ids: ['system_gateway']
		}
	},
	luminal_transubstantiation: {
		id: 'luminal_transubstantiation',
		type: 'cards',
		attributes: {
			title: 'Luminal Transubstantiation',
			faction_id: 'haas_bioroid',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '30036',
			card_cycle_ids: ['system_gateway']
		}
	},
	madani: {
		id: 'madani',
		type: 'cards',
		attributes: {
			title: 'Madani',
			faction_id: 'shaper',
			card_type_id: 'hardware',
			influence_cost: 3,
			latest_printing_id: '35028',
			card_cycle_ids: ['elevation']
		}
	},
	magdalene_keino_chemutai_cryptarchitect: {
		id: 'magdalene_keino_chemutai_cryptarchitect',
		type: 'cards',
		attributes: {
			title: 'Magdalene Keino-Chemutai: Cryptarchitect',
			faction_id: 'shaper',
			card_type_id: 'runner_identity',
			influence_cost: null,
			latest_printing_id: '35024',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	maglectric_rapid_748_mod: {
		id: 'maglectric_rapid_748_mod',
		type: 'cards',
		attributes: {
			title: 'Maglectric Rapid (748 Mod)',
			faction_id: 'criminal',
			card_type_id: 'hardware',
			influence_cost: 2,
			latest_printing_id: '35019',
			card_cycle_ids: ['elevation']
		}
	},
	mahkota_langit_grid: {
		id: 'mahkota_langit_grid',
		type: 'cards',
		attributes: {
			title: 'Mahkota Langit Grid',
			faction_id: 'neutral_corp',
			card_type_id: 'upgrade',
			influence_cost: 0,
			latest_printing_id: '35082',
			card_cycle_ids: ['elevation']
		}
	},
	maintenance_access: {
		id: 'maintenance_access',
		type: 'cards',
		attributes: {
			title: 'Maintenance Access',
			faction_id: 'criminal',
			card_type_id: 'event',
			influence_cost: 3,
			latest_printing_id: '35016',
			card_cycle_ids: ['elevation']
		}
	},
	manegarm_skunkworks: {
		id: 'manegarm_skunkworks',
		type: 'cards',
		attributes: {
			title: 'Manegarm Skunkworks',
			faction_id: 'haas_bioroid',
			card_type_id: 'upgrade',
			influence_cost: 3,
			latest_printing_id: '30042',
			card_cycle_ids: ['system_gateway']
		}
	},
	marjanah: {
		id: 'marjanah',
		type: 'cards',
		attributes: {
			title: 'Marjanah',
			faction_id: 'criminal',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '30016',
			card_cycle_ids: ['system_gateway']
		}
	},
	mayfly: {
		id: 'mayfly',
		type: 'cards',
		attributes: {
			title: 'Mayfly',
			faction_id: 'neutral_runner',
			card_type_id: 'program',
			influence_cost: 0,
			latest_printing_id: '30032',
			card_cycle_ids: ['system_gateway']
		}
	},
	measured_response: {
		id: 'measured_response',
		type: 'cards',
		attributes: {
			title: 'Measured Response',
			faction_id: 'weyland_consortium',
			card_type_id: 'operation',
			influence_cost: 4,
			latest_printing_id: '35078',
			card_cycle_ids: ['elevation']
		}
	},
	mercia_b4ll4rd: {
		id: 'mercia_b4ll4rd',
		type: 'cards',
		attributes: {
			title: 'Mercia B4LL4RD',
			faction_id: 'haas_bioroid',
			card_type_id: 'upgrade',
			influence_cost: 2,
			latest_printing_id: '35045',
			card_cycle_ids: ['elevation']
		}
	},
	muslihat_multifarious_marketeer: {
		id: 'muslihat_multifarious_marketeer',
		type: 'cards',
		attributes: {
			title: 'MuslihaT: Multifarious Marketeer',
			faction_id: 'criminal',
			card_type_id: 'runner_identity',
			influence_cost: null,
			latest_printing_id: '35013',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	mutual_favor: {
		id: 'mutual_favor',
		type: 'cards',
		attributes: {
			title: 'Mutual Favor',
			faction_id: 'criminal',
			card_type_id: 'event',
			influence_cost: 3,
			latest_printing_id: '30011',
			card_cycle_ids: ['system_gateway']
		}
	},
	n_pot: {
		id: 'n_pot',
		type: 'cards',
		attributes: {
			title: 'N-Pot',
			faction_id: 'nbn',
			card_type_id: 'ice',
			influence_cost: 2,
			latest_printing_id: '35064',
			card_cycle_ids: ['elevation']
		}
	},
	nanomanagement: {
		id: 'nanomanagement',
		type: 'cards',
		attributes: {
			title: 'Nanomanagement',
			faction_id: 'haas_bioroid',
			card_type_id: 'operation',
			influence_cost: 4,
			latest_printing_id: '35043',
			card_cycle_ids: ['elevation']
		}
	},
	nebula_talent_management_making_stars: {
		id: 'nebula_talent_management_making_stars',
		type: 'cards',
		attributes: {
			title: 'Nebula Talent Management: Making Stars',
			faction_id: 'nbn',
			card_type_id: 'corp_identity',
			influence_cost: null,
			latest_printing_id: '35057',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	neurospike: {
		id: 'neurospike',
		type: 'cards',
		attributes: {
			title: 'Neurospike',
			faction_id: 'jinteki',
			card_type_id: 'operation',
			influence_cost: 3,
			latest_printing_id: '30049',
			card_cycle_ids: ['system_gateway']
		}
	},
	next_big_thing: {
		id: 'next_big_thing',
		type: 'cards',
		attributes: {
			title: 'Next Big Thing',
			faction_id: 'nbn',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35060',
			card_cycle_ids: ['elevation']
		}
	},
	off_the_books: {
		id: 'off_the_books',
		type: 'cards',
		attributes: {
			title: 'Off the Books',
			faction_id: 'weyland_consortium',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35071',
			card_cycle_ids: ['elevation'],
			notes:
				'The "Dividends" text on this isn\'t super worth it, just advance three times and get your two points'
		}
	},
	offworld_office: {
		id: 'offworld_office',
		type: 'cards',
		attributes: {
			title: 'Offworld Office',
			faction_id: 'neutral_corp',
			card_type_id: 'agenda',
			influence_cost: 0,
			latest_printing_id: '30067',
			card_cycle_ids: ['system_gateway']
		}
	},
	open_market: {
		id: 'open_market',
		type: 'cards',
		attributes: {
			title: 'Open Market',
			faction_id: 'criminal',
			card_type_id: 'resource',
			influence_cost: 2,
			latest_printing_id: '35022',
			card_cycle_ids: ['elevation']
		}
	},
	orbital_superiority: {
		id: 'orbital_superiority',
		type: 'cards',
		attributes: {
			title: 'Orbital Superiority',
			faction_id: 'neutral_corp',
			card_type_id: 'agenda',
			influence_cost: 0,
			latest_printing_id: '30068',
			card_cycle_ids: ['system_gateway']
		}
	},
	overclock: {
		id: 'overclock',
		type: 'cards',
		attributes: {
			title: 'Overclock',
			faction_id: 'neutral_runner',
			card_type_id: 'event',
			influence_cost: 0,
			latest_printing_id: '30029',
			card_cycle_ids: ['system_gateway']
		}
	},
	palisade: {
		id: 'palisade',
		type: 'cards',
		attributes: {
			title: 'Palisade',
			faction_id: 'neutral_corp',
			card_type_id: 'ice',
			influence_cost: 0,
			latest_printing_id: '30072',
			card_cycle_ids: ['system_gateway']
		}
	},
	pennyshaver: {
		id: 'pennyshaver',
		type: 'cards',
		attributes: {
			title: 'Pennyshaver',
			faction_id: 'criminal',
			card_type_id: 'hardware',
			influence_cost: 3,
			latest_printing_id: '30014',
			card_cycle_ids: ['system_gateway']
		}
	},
	petty_cash: {
		id: 'petty_cash',
		type: 'cards',
		attributes: {
			title: 'Petty Cash',
			faction_id: 'neutral_corp',
			card_type_id: 'operation',
			influence_cost: 0,
			latest_printing_id: '35081',
			card_cycle_ids: ['elevation'],
			notes: "Don't forget you can still play this even if it's in Archives"
		}
	},
	phat_gioan_baotixita: {
		id: 'phat_gioan_baotixita',
		type: 'cards',
		attributes: {
			title: 'Phật Gioan Baotixita',
			faction_id: 'jinteki',
			card_type_id: 'asset',
			influence_cost: 4,
			latest_printing_id: '35051',
			card_cycle_ids: ['elevation']
		}
	},
	ping: {
		id: 'ping',
		type: 'cards',
		attributes: {
			title: 'Ping',
			faction_id: 'nbn',
			card_type_id: 'ice',
			influence_cost: 2,
			latest_printing_id: '30055',
			card_cycle_ids: ['system_gateway']
		}
	},
	predictive_planogram: {
		id: 'predictive_planogram',
		type: 'cards',
		attributes: {
			title: 'Predictive Planogram',
			faction_id: 'nbn',
			card_type_id: 'operation',
			influence_cost: 1,
			latest_printing_id: '30056',
			card_cycle_ids: ['system_gateway']
		}
	},
	principia: {
		id: 'principia',
		type: 'cards',
		attributes: {
			title: 'Principia',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 1,
			latest_printing_id: '35032',
			card_cycle_ids: ['elevation']
		}
	},
	project_ingatan: {
		id: 'project_ingatan',
		type: 'cards',
		attributes: {
			title: 'Project Ingatan',
			faction_id: 'haas_bioroid',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35038',
			card_cycle_ids: ['elevation']
		}
	},
	proprionegation: {
		id: 'proprionegation',
		type: 'cards',
		attributes: {
			title: 'Proprionegation',
			faction_id: 'jinteki',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35048',
			card_cycle_ids: ['elevation']
		}
	},
	pt_untaian_lifes_building_blocks: {
		id: 'pt_untaian_lifes_building_blocks',
		type: 'cards',
		attributes: {
			title: "PT Untaian: Life's Building Blocks",
			faction_id: 'jinteki',
			card_type_id: 'corp_identity',
			influence_cost: null,
			latest_printing_id: '35047',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	red_team: {
		id: 'red_team',
		type: 'cards',
		attributes: {
			title: 'Red Team',
			faction_id: 'criminal',
			card_type_id: 'resource',
			influence_cost: 2,
			latest_printing_id: '30018',
			card_cycle_ids: ['system_gateway']
		}
	},
	regolith_mining_license: {
		id: 'regolith_mining_license',
		type: 'cards',
		attributes: {
			title: 'Regolith Mining License',
			faction_id: 'neutral_corp',
			card_type_id: 'asset',
			influence_cost: 0,
			latest_printing_id: '30071',
			card_cycle_ids: ['system_gateway']
		}
	},
	rising_tide: {
		id: 'rising_tide',
		type: 'cards',
		attributes: {
			title: 'Rising Tide',
			faction_id: 'anarch',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '35009',
			card_cycle_ids: ['elevation']
		}
	},
	ritual: {
		id: 'ritual',
		type: 'cards',
		attributes: {
			title: 'Ritual',
			faction_id: 'shaper',
			card_type_id: 'event',
			influence_cost: 2,
			latest_printing_id: '35026',
			card_cycle_ids: ['elevation'],
			notes: 'Play this first click!!'
		}
	},
	sang_kancil: {
		id: 'sang_kancil',
		type: 'cards',
		attributes: {
			title: 'Sang Kancil',
			faction_id: 'criminal',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '35020',
			card_cycle_ids: ['elevation']
		}
	},
	scrounge: {
		id: 'scrounge',
		type: 'cards',
		attributes: {
			title: 'Scrounge',
			faction_id: 'anarch',
			card_type_id: 'event',
			influence_cost: 1,
			latest_printing_id: '35004',
			card_cycle_ids: ['elevation']
		}
	},
	seamless_launch: {
		id: 'seamless_launch',
		type: 'cards',
		attributes: {
			title: 'Seamless Launch',
			faction_id: 'haas_bioroid',
			card_type_id: 'operation',
			influence_cost: 2,
			latest_printing_id: '30040',
			card_cycle_ids: ['system_gateway']
		}
	},
	semak_samun: {
		id: 'semak_samun',
		type: 'cards',
		attributes: {
			title: 'Semak-samun',
			faction_id: 'jinteki',
			card_type_id: 'ice',
			influence_cost: 1,
			latest_printing_id: '35054',
			card_cycle_ids: ['elevation']
		}
	},
	send_a_message: {
		id: 'send_a_message',
		type: 'cards',
		attributes: {
			title: 'Send a Message',
			faction_id: 'neutral_corp',
			card_type_id: 'agenda',
			influence_cost: 0,
			latest_printing_id: '30069',
			card_cycle_ids: ['system_gateway']
		}
	},
	sericulture_expansion: {
		id: 'sericulture_expansion',
		type: 'cards',
		attributes: {
			title: 'Sericulture Expansion',
			faction_id: 'jinteki',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '35049',
			card_cycle_ids: ['elevation']
		}
	},
	spin_doctor: {
		id: 'spin_doctor',
		type: 'cards',
		attributes: {
			title: 'Spin Doctor',
			faction_id: 'nbn',
			card_type_id: 'asset',
			influence_cost: 1,
			latest_printing_id: '30053',
			card_cycle_ids: ['system_gateway'],
			notes:
				'Can fix agenda flood by overdrawing then shuffling agendas from Archives back into R&D. Can also be used to bluff an agenda in a scoring remote.'
		}
	},
	superconducting_hub: {
		id: 'superconducting_hub',
		type: 'cards',
		attributes: {
			title: 'Superconducting Hub',
			faction_id: 'neutral_corp',
			card_type_id: 'agenda',
			influence_cost: 0,
			latest_printing_id: '30070',
			card_cycle_ids: ['system_gateway']
		}
	},
	sure_gamble: {
		id: 'sure_gamble',
		type: 'cards',
		attributes: {
			title: 'Sure Gamble',
			faction_id: 'neutral_runner',
			card_type_id: 'event',
			influence_cost: 0,
			latest_printing_id: '30030',
			card_cycle_ids: ['system_gateway', 'system_core_2019', 'revised_core_set', 'core_set'],
			notes: 'No notes, just good money'
		}
	},
	syailendra: {
		id: 'syailendra',
		type: 'cards',
		attributes: {
			title: 'Syailendra',
			faction_id: 'weyland_consortium',
			card_type_id: 'ice',
			influence_cost: 3,
			latest_printing_id: '35076',
			card_cycle_ids: ['elevation']
		}
	},
	t400_memory_diamond: {
		id: 't400_memory_diamond',
		type: 'cards',
		attributes: {
			title: 'T400 Memory Diamond',
			faction_id: 'neutral_runner',
			card_type_id: 'hardware',
			influence_cost: 0,
			latest_printing_id: '30031',
			card_cycle_ids: ['system_gateway'],
			notes: "The handsize isn't critical, so only install for extra MU when you need it"
		}
	},
	telework_contract: {
		id: 'telework_contract',
		type: 'cards',
		attributes: {
			title: 'Telework Contract',
			faction_id: 'shaper',
			card_type_id: 'resource',
			influence_cost: 2,
			latest_printing_id: '30027',
			card_cycle_ids: ['system_gateway']
		}
	},
	the_zwicky_group_invisible_hands: {
		id: 'the_zwicky_group_invisible_hands',
		type: 'cards',
		attributes: {
			title: 'The Zwicky Group: Invisible Hands',
			faction_id: 'weyland_consortium',
			card_type_id: 'corp_identity',
			influence_cost: null,
			latest_printing_id: '35069',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	tithe: {
		id: 'tithe',
		type: 'cards',
		attributes: {
			title: 'Tithe',
			faction_id: 'neutral_corp',
			card_type_id: 'ice',
			influence_cost: 0,
			latest_printing_id: '30073',
			card_cycle_ids: ['system_gateway']
		}
	},
	tomorrows_headline: {
		id: 'tomorrows_headline',
		type: 'cards',
		attributes: {
			title: 'Tomorrowʼs Headline',
			faction_id: 'nbn',
			card_type_id: 'agenda',
			influence_cost: null,
			latest_printing_id: '30052',
			card_cycle_ids: ['system_gateway']
		}
	},
	topan_ormas_leader: {
		id: 'topan_ormas_leader',
		type: 'cards',
		attributes: {
			title: 'Topan: Ormas Leader',
			faction_id: 'anarch',
			card_type_id: 'runner_identity',
			influence_cost: null,
			latest_printing_id: '35002',
			card_cycle_ids: ['elevation'],
			has_narrative: true
		}
	},
	transfer_of_wealth: {
		id: 'transfer_of_wealth',
		type: 'cards',
		attributes: {
			title: 'Transfer of Wealth',
			faction_id: 'criminal',
			card_type_id: 'event',
			influence_cost: 4,
			latest_printing_id: '35017',
			card_cycle_ids: ['elevation']
		}
	},
	tread_lightly: {
		id: 'tread_lightly',
		type: 'cards',
		attributes: {
			title: 'Tread Lightly',
			faction_id: 'criminal',
			card_type_id: 'event',
			influence_cost: 1,
			latest_printing_id: '30012',
			card_cycle_ids: ['system_gateway']
		}
	},
	unity: {
		id: 'unity',
		type: 'cards',
		attributes: {
			title: 'Unity',
			faction_id: 'shaper',
			card_type_id: 'program',
			influence_cost: 2,
			latest_printing_id: '30026',
			card_cycle_ids: ['system_gateway']
		}
	},
	urtica_cipher: {
		id: 'urtica_cipher',
		type: 'cards',
		attributes: {
			title: 'Urtica Cipher',
			faction_id: 'jinteki',
			card_type_id: 'asset',
			influence_cost: 2,
			latest_printing_id: '30045',
			card_cycle_ids: ['system_gateway']
		}
	},
	verbal_plasticity: {
		id: 'verbal_plasticity',
		type: 'cards',
		attributes: {
			title: 'Verbal Plasticity',
			faction_id: 'neutral_runner',
			card_type_id: 'resource',
			influence_cost: 0,
			latest_printing_id: '30034',
			card_cycle_ids: ['system_gateway'],
			notes: 'Hard mull for this'
		}
	},
	whitespace: {
		id: 'whitespace',
		type: 'cards',
		attributes: {
			title: 'Whitespace',
			faction_id: 'neutral_corp',
			card_type_id: 'ice',
			influence_cost: 0,
			latest_printing_id: '30074',
			card_cycle_ids: ['system_gateway']
		}
	},
	wildcat_strike: {
		id: 'wildcat_strike',
		type: 'cards',
		attributes: {
			title: 'Wildcat Strike',
			faction_id: 'anarch',
			card_type_id: 'event',
			influence_cost: 1,
			latest_printing_id: '30002',
			card_cycle_ids: ['system_gateway'],
			notes:
				"If the corp is smart they'll give you the money, but if you play this last click you might end up drawing and discarding a ton."
		}
	}
};
