// NetrunnerDB card records for the Core Battle Box. The map key is the card id.
//
// One card can appear in more than one decklist. Store one record for each id. This
// removes duplicate records. decklists.ts points to each record by id. It uses the
// card_ids array in each deck. The page loader then builds the Card[] for each deck.
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30060.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30060.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30060.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30060.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30060.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30050.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30050.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30050.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30050.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30050.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30038.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30038.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30038.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30038.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30038.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35072.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35072.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35072.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35072.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35072.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35029.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35029.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35029.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35029.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35029.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35074.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35074.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35074.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35074.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35074.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35065.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35065.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35065.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35065.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35065.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35006.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35006.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35006.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35006.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35006.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30004.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30004.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30004.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30004.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30004.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30039.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30039.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30039.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30039.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30039.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35041.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35041.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35041.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35041.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35041.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30005.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30005.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30005.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30005.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30005.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35050.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35050.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35050.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35050.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35050.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30015.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30015.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30015.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30015.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30015.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35030.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35030.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35030.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35030.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35030.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35014.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35014.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35014.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35014.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35014.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30061.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30061.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30061.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30061.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30061.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30024.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30024.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30024.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30024.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30024.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30020.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30020.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30020.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30020.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30020.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35031.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35031.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35031.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35031.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35031.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30013.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30013.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30013.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30013.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30013.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35063.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35063.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35063.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35063.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35063.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30022.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30022.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30022.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30022.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30022.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30025.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30025.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30025.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30025.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30025.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35059.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35059.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35059.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35059.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35059.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35052.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35052.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35052.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35052.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35052.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30007.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30007.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30007.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30007.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30007.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35079.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35079.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35079.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35079.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35079.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30054.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30054.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30054.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30054.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30054.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35027.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35027.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35027.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35027.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35027.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35007.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35007.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35007.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35007.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35007.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30064.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30064.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30064.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30064.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30064.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35070.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35070.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35070.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35070.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35070.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30048.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30048.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30048.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30048.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30048.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway', 'system_core_2019', 'revised_core_set', 'core_set'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30075.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30075.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30075.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30075.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30075.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35039.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35039.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35039.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35039.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35039.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35066.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35066.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35066.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35066.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35066.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30028.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30028.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30028.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30028.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30028.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30047.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30047.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30047.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30047.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30047.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35075.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35075.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35075.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35075.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35075.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35077.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35077.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35077.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35077.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35077.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35033.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35033.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35033.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35033.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35033.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30008.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30008.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30008.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30008.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30008.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35035.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35035.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35035.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35035.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35035.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35035-narrative.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35015.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35015.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35015.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35015.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35015.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30044.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30044.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30044.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30044.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30044.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30036.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30036.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30036.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30036.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30036.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35028.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35028.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35028.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35028.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35028.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35024.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35024.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35024.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35024.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35024.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35024-narrative.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35019.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35019.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35019.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35019.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35019.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35082.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35082.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35082.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35082.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35082.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35016.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35016.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35016.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35016.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35016.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30042.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30042.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30042.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30042.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30042.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30016.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30016.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30016.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30016.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30016.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30032.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30032.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30032.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30032.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30032.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35078.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35078.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35078.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35078.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35078.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35045.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35045.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35045.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35045.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35045.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35013.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35013.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35013.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35013.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35013.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35013-narrative.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30011.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30011.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30011.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30011.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30011.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35064.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35064.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35064.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35064.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35064.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35043.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35043.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35043.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35043.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35043.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35057.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35057.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35057.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35057.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35057.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35057-narrative.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30049.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30049.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30049.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30049.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30049.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35060.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35060.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35060.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35060.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35060.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35071.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35071.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35071.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35071.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35071.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30067.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30067.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30067.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30067.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30067.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35022.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35022.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35022.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35022.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35022.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30068.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30068.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30068.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30068.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30068.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30029.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30029.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30029.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30029.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30029.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30072.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30072.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30072.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30072.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30072.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30014.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30014.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30014.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30014.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30014.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35081.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35081.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35081.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35081.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35081.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35051.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35051.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35051.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35051.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35051.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30055.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30055.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30055.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30055.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30055.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30056.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30056.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30056.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30056.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30056.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35032.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35032.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35032.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35032.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35032.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35038.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35038.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35038.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35038.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35038.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35048.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35048.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35048.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35048.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35048.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35047.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35047.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35047.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35047.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35047.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35047-narrative.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30018.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30018.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30018.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30018.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30018.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30071.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30071.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30071.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30071.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30071.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35009.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35009.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35009.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35009.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35009.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35026.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35026.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35026.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35026.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35026.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35020.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35020.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35020.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35020.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35020.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35004.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35004.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35004.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35004.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35004.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30040.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30040.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30040.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30040.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30040.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35054.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35054.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35054.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35054.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35054.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30069.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30069.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30069.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30069.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30069.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35049.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35049.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35049.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35049.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35049.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30053.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30053.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30053.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30053.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30053.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30070.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30070.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30070.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30070.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30070.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30030.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30030.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30030.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30030.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30030.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35076.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35076.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35076.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35076.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35076.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30031.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30031.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30031.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30031.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30031.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30027.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30027.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30027.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30027.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30027.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35069.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35069.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35069.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35069.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35069.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35069-narrative.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30073.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30073.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30073.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30073.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30073.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30052.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30052.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30052.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30052.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30052.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35002.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35002.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35002.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35002.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35002.webp',
					narrative: 'https://card-images.netrunnerdb.com/v2/xlarge/35002-narrative.webp'
				}
			}
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
			card_cycle_ids: ['elevation'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/35017.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/35017.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/35017.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/35017.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/35017.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30012.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30012.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30012.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30012.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30012.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30026.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30026.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30026.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30026.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30026.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30045.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30045.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30045.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30045.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30045.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30034.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30034.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30034.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30034.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30034.webp'
				}
			}
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
			card_cycle_ids: ['system_gateway'],
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30074.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30074.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30074.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30074.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30074.webp'
				}
			}
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
			latest_printing_images: {
				nrdb_classic: {
					tiny: 'https://card-images.netrunnerdb.com/v2/tiny/30002.jpg',
					small: 'https://card-images.netrunnerdb.com/v2/small/30002.jpg',
					medium: 'https://card-images.netrunnerdb.com/v2/medium/30002.jpg',
					large: 'https://card-images.netrunnerdb.com/v2/large/30002.jpg',
					xlarge: 'https://card-images.netrunnerdb.com/v2/xlarge/30002.webp'
				}
			}
		}
	}
};
