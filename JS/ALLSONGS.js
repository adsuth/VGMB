// should be the same format as the songs.json
// I only have it like this to avoid promises

let ALLSONGS_JSON =`{
    "series": {
        "A Hat in Time": {
            "seriesName": "A Hat in Time",
            "seriesColor": "red",
            "game": {
                "A Hat in Time": {
                    "gameName": "A Hat in Time",
                    "answers": ["a hat in time", "ahit"],
                    "songs": {
                        "ID_1585": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/cv3tDgeLrJE",
                            "difficulty": "1"
                        },
                        "ID_1586": {
                            "title": "Welcome to Mafia Town",
                            "link": "https://youtu.be/w1-lGNJADnw",
                            "difficulty": "1"
                        },
                        "ID_1587": {
                            "title": "She Came from Outer Space",
                            "link": "https://youtu.be/8GWPiVJk7rs",
                            "difficulty": "1"
                        },
                        "ID_1588": {
                            "title": "Mafia Boss' Big Showdown",
                            "link": "https://youtu.be/zfzQC0Pe3tQ",
                            "difficulty": "1"
                        },
                        "ID_1589": {
                            "title": "Dead Bird Studio Reception",
                            "link": "https://youtu.be/AFMgHK38AH0",
                            "difficulty": "1"
                        },
                        "ID_1590": {
                            "title": "Dead Bird Studio",
                            "link": "https://youtu.be/9H3FlnUFA4M",
                            "difficulty": "1"
                        },
                        "ID_1591": {
                            "title": "Picture Perfect",
                            "link": "https://youtu.be/Mu2KLT0PKkY",
                            "difficulty": "1"
                        },
                        "ID_1592": {
                            "title": "Train Rush",
                            "link": "https://youtu.be/wwGnXPpbu4A",
                            "difficulty": "1"
                        },
                        "ID_1593": {
                            "title": "The Big Parade",
                            "link": "https://youtu.be/jd3bwE1WqOU",
                            "difficulty": "1"
                        },
                        "ID_1594": {
                            "title": "Battle of Award 42",
                            "link": "https://youtu.be/fPhIls8a3cM",
                            "difficulty": "1"
                        },
                        "ID_1595": {
                            "title": "Snatcher's Contractual Obligations",
                            "link": "https://youtu.be/3EZmYdvDO28",
                            "difficulty": "1"
                        },
                        "ID_1596": {
                            "title": "Oh It's You",
                            "link": "https://youtu.be/Wxoap9xp2_k",
                            "difficulty": "1"
                        },
                        "ID_1597": {
                            "title": "Your Contract Has Expired",
                            "link": "https://youtu.be/BePP156LQgY",
                            "difficulty": "1"
                        },
                        "ID_1598": {
                            "title": "Clocktowers Beneath the Sea",
                            "link": "https://youtu.be/drT1uOViuz4",
                            "difficulty": "1"
                        },
                        "ID_1599": {
                            "title": "You Are All Bad Guys",
                            "link": "https://youtu.be/eaiK4eLaizI",
                            "difficulty": "1"
                        }
                    }
                },
                "A Hat in Time: Nyakuza Metro": {
                    "gameName": "A Hat in Time: Nyakuza Metro",
                    "answers": ["a hat in time: nyakuza metro", "ahit", "a hat in time"],
                    "songs": {
                        "ID_1603": {
                            "title": "Nyakuza Manholes",
                            "link": "https://youtu.be/GDxS8oK6hCc",
                            "difficulty": "1"
                        }
                    }
                },
                "A Hat in Time: Seal the Deal": {
                    "gameName": "A Hat in Time: Seal the Deal",
                    "answers": ["a hat in time: seal the deal", "ahit", "a hat in time"],
                    "songs": {
                        "ID_1600": {
                            "title": "Death Wish",
                            "link": "https://youtu.be/TljApMdkWdo",
                            "difficulty": "1"
                        },
                        "ID_1601": {
                            "title": "Killing Two Birds",
                            "link": "https://youtu.be/C-3WJjy4gRk",
                            "difficulty": "1"
                        },
                        "ID_1602": {
                            "title": "Moustache Girl EX",
                            "link": "https://youtu.be/Pg2utHOMapQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ace Attorney": {
            "seriesName": "Ace Attorney",
            "seriesColor": "red",
            "game": {
                "Ace Attorney Investigations": {
                    "gameName": "Ace Attorney Investigations",
                    "answers": ["ace attorney investigations", "aai", "edgeworth investigations", "ace attorney: investigations", "ace attorney miles edgeworth", "ace attorney: miles edgeworth", "ace attorney miles edgeworth investigations", "ace attorney investigations miles edgeworth", "aai1", "aai 1"],
                    "songs": {
                        "ID_341": {
                            "title": "Investigation ~ Opening 2009",
                            "link": "https://youtu.be/FQPoqK3yjiU",
                            "difficulty": "1"
                        },
                        "ID_342": {
                            "title": "Investigation ~ Middlegame 2009",
                            "link": "https://youtu.be/GwD6O7kouw8",
                            "difficulty": "1"
                        },
                        "ID_343": {
                            "title": "Investigation ~ Contradiction at the Crime Scene",
                            "link": "https://youtu.be/i7qxaCpfJa4",
                            "difficulty": "1"
                        },
                        "ID_344": {
                            "title": "Logic ~ The Way to the Truth",
                            "link": "https://youtu.be/H-a60ITJ2Ko",
                            "difficulty": "1"
                        },
                        "ID_345": {
                            "title": "Investigation ~ Core 2009",
                            "link": "https://youtu.be/osF8px-GVjw",
                            "difficulty": "1"
                        },
                        "ID_346": {
                            "title": "Confrontation ~ Moderato 2009",
                            "link": "https://youtu.be/PwGFsVyJJ0c",
                            "difficulty": "1"
                        },
                        "ID_347": {
                            "title": "Objection! 2009",
                            "link": "https://youtu.be/pTwkH3prwzE",
                            "difficulty": "1"
                        },
                        "ID_348": {
                            "title": "Confrontation ~ Allegro 2009",
                            "link": "https://youtu.be/KNBgKVtfJZM",
                            "difficulty": "1"
                        },
                        "ID_349": {
                            "title": "Confrontation ~ Presto 2009",
                            "link": "https://youtu.be/pucxhTspFrQ",
                            "difficulty": "1"
                        },
                        "ID_350": {
                            "title": "Pursuit ~ Lying Coldly",
                            "link": "https://youtu.be/7JveQT6DfYk",
                            "difficulty": "1"
                        },
                        "ID_351": {
                            "title": "Announce the Truth 2009",
                            "link": "https://youtu.be/Rz0IgN_MfmI",
                            "difficulty": "1"
                        },
                        "ID_352": {
                            "title": "Tricks and Gimmicks",
                            "link": "https://youtu.be/Rmqrjndx-oQ",
                            "difficulty": "1"
                        },
                        "ID_353": {
                            "title": "Tricks and Baroque",
                            "link": "https://youtu.be/fjMQdNpwrwA",
                            "difficulty": "1"
                        },
                        "ID_354": {
                            "title": "Jingle ~ Slight Break",
                            "link": "https://youtu.be/sJjwqSyj0RM",
                            "difficulty": "1"
                        },
                        "ID_355": {
                            "title": "Kay Faraday ~ The Great Truth Burglar",
                            "link": "https://youtu.be/nYJRsaJBZn4",
                            "difficulty": "1"
                        },
                        "ID_356": {
                            "title": "Noisy People",
                            "link": "https://youtu.be/5SgT5dBvG5g",
                            "difficulty": "1"
                        },
                        "ID_357": {
                            "title": "Interesting People",
                            "link": "https://youtu.be/6y_Ln5o28gQ",
                            "difficulty": "1"
                        },
                        "ID_358": {
                            "title": "Reminiscence ~ False Relations",
                            "link": "https://youtu.be/QmuUS7zSOac",
                            "difficulty": "1"
                        },
                        "ID_359": {
                            "title": "Reproducing the Scene",
                            "link": "https://youtu.be/PJpIjCuV1vk",
                            "difficulty": "1"
                        },
                        "ID_360": {
                            "title": "Court ~ Guardians of the Law",
                            "link": "https://youtu.be/SfLR3zsIXB4",
                            "difficulty": "1"
                        },
                        "ID_361": {
                            "title": "Tyrell Badd ~ The Truth isn't Sweet",
                            "link": "https://youtu.be/R9Tex8sMZDk",
                            "difficulty": "1"
                        },
                        "ID_362": {
                            "title": "Reminiscence ~ KG-8 Case",
                            "link": "https://youtu.be/wYValsn56yA",
                            "difficulty": "1"
                        },
                        "ID_363": {
                            "title": "Dick Gumshoe ~ I can do it when it counts, pal!",
                            "link": "https://youtu.be/6vEwsdbrums",
                            "difficulty": "1"
                        },
                        "ID_364": {
                            "title": "Solution! ~ Splendid Deduction",
                            "link": "https://youtu.be/fx1QItiBqEs",
                            "difficulty": "1"
                        },
                        "ID_365": {
                            "title": "Miles Edgeworth ~ Great Revival 2009",
                            "link": "https://youtu.be/J5xsvQinV3Q",
                            "difficulty": "1"
                        }
                    }
                },
                "Ace Attorney Investigations 2": {
                    "gameName": "Ace Attorney Investigations 2",
                    "answers": ["ace attorney investigations 2", "aai2", "edgeworth investigations 2", "ace attorney: investigations 2", "ace attorney miles edgeworth 2", "ace attorney miles edgeworth investigations 2", "ace attorney investigations miles edgeworth 2", "aai 2"],
                    "songs": {
                        "ID_1680": {
                            "title": "Investigation ~ Opening 2011",
                            "link": "https://youtu.be/up9m4XPd-SY",
                            "difficulty": "1"
                        },
                        "ID_1681": {
                            "title": "Logic ~ Truth of the Crime Scene",
                            "link": "https://youtu.be/brJeGQeB594",
                            "difficulty": "1"
                        },
                        "ID_1682": {
                            "title": "Trick Analyze",
                            "link": "https://youtu.be/an_D8LrwWy8",
                            "difficulty": "1"
                        },
                        "ID_1683": {
                            "title": "Logic Chess ~ Opening",
                            "link": "https://youtu.be/D8vRTuYhN1M",
                            "difficulty": "1"
                        },
                        "ID_1684": {
                            "title": "Confrontation ~ Moderato 2011",
                            "link": "https://youtu.be/GZ9EW272TRA",
                            "difficulty": "1"
                        },
                        "ID_1685": {
                            "title": "Reiji Mitsurugi ~ Objection! 2011",
                            "link": "https://youtu.be/WqST5c8_L8o",
                            "difficulty": "1"
                        },
                        "ID_1686": {
                            "title": "Confess the Truth 2011",
                            "link": "https://youtu.be/TLjV1qL3Gd4",
                            "difficulty": "1"
                        },
                        "ID_1687": {
                            "title": "Confrontation ~ Allegro 2011",
                            "link": "https://youtu.be/NDGYy9y6A5c",
                            "difficulty": "1"
                        },
                        "ID_1688": {
                            "title": "Investigation ~ Core 2011",
                            "link": "https://youtu.be/2P7_piv0HGA",
                            "difficulty": "1"
                        },
                        "ID_1689": {
                            "title": "Confrontation ~ Presto 2011",
                            "link": "https://youtu.be/dBymcg6lDWY",
                            "difficulty": "1"
                        },
                        "ID_1690": {
                            "title": "Pursuit ~ Wanting to Find the Truth",
                            "link": "https://youtu.be/AVA2z_zbWwA",
                            "difficulty": "1"
                        },
                        "ID_1691": {
                            "title": "Logic Chess ~ Endgame",
                            "link": "https://youtu.be/UD2sCdQZ3Ek",
                            "difficulty": "1"
                        },
                        "ID_1692": {
                            "title": "Solution! Calm Moment",
                            "link": "https://youtu.be/34mjLPPeGuo",
                            "difficulty": "1"
                        }
                    }
                },
                "Apollo Justice: Ace Attorney": {
                    "gameName": "Apollo Justice: Ace Attorney",
                    "answers": ["apollo justice: ace attorney", "apollo justice", "apollo justice ace attorney"],
                    "songs": {
                        "ID_315": {
                            "title": "Courtroom Lobby ~ New Prelude",
                            "link": "https://youtu.be/4t7gYBQV_po",
                            "difficulty": "1"
                        },
                        "ID_316": {
                            "title": "Trial",
                            "link": "https://youtu.be/w_lPgaV2bXw",
                            "difficulty": "1"
                        },
                        "ID_317": {
                            "title": "Cross Examination ~ Moderate 2007",
                            "link": "https://youtu.be/D4ragdexomw",
                            "difficulty": "1"
                        },
                        "ID_318": {
                            "title": "Trance Logic",
                            "link": "https://youtu.be/MfG8_1JpEcs",
                            "difficulty": "1"
                        },
                        "ID_319": {
                            "title": "Cross Examination ~ Allegro 2007",
                            "link": "https://youtu.be/ZSUD7ccpZx0",
                            "difficulty": "1"
                        },
                        "ID_320": {
                            "title": "Tell the Truth 2007",
                            "link": "https://youtu.be/58uoTlVgRNU",
                            "difficulty": "1"
                        },
                        "ID_321": {
                            "title": "Thrill Theme ~ Suspense",
                            "link": "https://youtu.be/lUUOVls2GkM",
                            "difficulty": "1"
                        },
                        "ID_322": {
                            "title": "Trucy's Theme ~ Child of Magic",
                            "link": "https://youtu.be/nyeM6Kywxp0",
                            "difficulty": "1"
                        },
                        "ID_323": {
                            "title": "Ema Skye ~ Scientific Detective",
                            "link": "https://youtu.be/c7rywnWMLyc",
                            "difficulty": "1"
                        },
                        "ID_324": {
                            "title": "Jingle ~ That's All for Today",
                            "link": "https://youtu.be/f10LFrjzM30",
                            "difficulty": "1"
                        },
                        "ID_325": {
                            "title": "Percieve ~ Surging Eyes",
                            "link": "https://youtu.be/u6ikBJePm_w",
                            "difficulty": "1"
                        },
                        "ID_326": {
                            "title": "Detention Center ~ Tragicomic Interview",
                            "link": "https://youtu.be/ZrZ_pX0rK1M",
                            "difficulty": "1"
                        },
                        "ID_327": {
                            "title": "Eccentric 2007",
                            "link": "https://youtu.be/xLYLW8YLQ-8",
                            "difficulty": "1"
                        },
                        "ID_328": {
                            "title": "Investigation ~ Opening 2007",
                            "link": "https://youtu.be/mvOZR_ag2Ms",
                            "difficulty": "1"
                        },
                        "ID_329": {
                            "title": "Kitaki Family",
                            "link": "https://youtu.be/4Tnc50uX2e4",
                            "difficulty": "1"
                        },
                        "ID_330": {
                            "title": "Recollection ~ A Fate Smeared by Tricks and Gadgets",
                            "link": "https://youtu.be/jmZ4NoTDtsQ",
                            "difficulty": "1"
                        },
                        "ID_331": {
                            "title": "Recollection ~ A Hurt Fox",
                            "link": "https://youtu.be/AYVPqAmx6jU",
                            "difficulty": "1"
                        },
                        "ID_332": {
                            "title": "The Guitar's Serenade",
                            "link": "https://youtu.be/iQbbu_YAt2Y",
                            "difficulty": "1"
                        },
                        "ID_333": {
                            "title": "Troupe Gramarye",
                            "link": "https://youtu.be/HP3FMYYb12Q",
                            "difficulty": "1"
                        },
                        "ID_334": {
                            "title": "Ace Attorney 4 ~ End",
                            "link": "https://youtu.be/cURga_rrpcc",
                            "difficulty": "1"
                        },
                        "ID_335": {
                            "title": "Solitary Confinement ~ Darkness Theme",
                            "link": "https://youtu.be/zAf5yfgICrE",
                            "difficulty": "1"
                        },
                        "ID_336": {
                            "title": "Recollection ~ Forgotten Legend",
                            "link": "https://youtu.be/cywf8AbDi_4",
                            "difficulty": "1"
                        },
                        "ID_337": {
                            "title": "Psyche Lock 2007",
                            "link": "https://youtu.be/OK5H_1lxENE",
                            "difficulty": "1"
                        },
                        "ID_338": {
                            "title": "Investigation ~ Core 2007",
                            "link": "https://youtu.be/093VR-LJ6H8",
                            "difficulty": "1"
                        },
                        "ID_339": {
                            "title": "Drew Studio",
                            "link": "https://youtu.be/9ExdtJJs11E",
                            "difficulty": "1"
                        },
                        "ID_340": {
                            "title": "We Won the Case! ~ Our Victory",
                            "link": "https://youtu.be/cF5z4tmHG68",
                            "difficulty": "1"
                        }
                    }
                },
                "Phoenix Wright: Ace Attorney": {
                    "gameName": "Phoenix Wright: Ace Attorney",
                    "answers": ["phoenix wright: ace attorney", "ace attorney", "phoenix wright ace attorney", "ace attorney 1", "phoenix wright"],
                    "songs": {
                        "ID_43": {
                            "title": "Trial",
                            "link": "https://youtu.be/UEGVxLs6Sr0",
                            "difficulty": "1"
                        },
                        "ID_44": {
                            "title": "Logic and Trick",
                            "link": "https://youtu.be/GDP4ds-ozOI",
                            "difficulty": "1"
                        },
                        "ID_45": {
                            "title": "Questioning ~ Moderato 2001",
                            "link": "https://youtu.be/9_sAzyTCZzQ",
                            "difficulty": "1"
                        },
                        "ID_46": {
                            "title": "Phoenix Wright ~ Objection! 2001",
                            "link": "https://youtu.be/ANcuqk7x33o",
                            "difficulty": "1"
                        },
                        "ID_47": {
                            "title": "Questioning ~ Allegro 2001",
                            "link": "https://youtu.be/HK2VLhbSaoc",
                            "difficulty": "1"
                        },
                        "ID_48": {
                            "title": "Pressing Pursuit ~ Cornered",
                            "link": "https://youtu.be/UxnvGDK0WGM",
                            "difficulty": "1"
                        },
                        "ID_49": {
                            "title": "Telling the Truth 2001",
                            "link": "https://youtu.be/0nPfjHuKtw8",
                            "difficulty": "1"
                        },
                        "ID_50": {
                            "title": "Victory! ~ The First Victory",
                            "link": "https://youtu.be/SPOFjeHS_hc",
                            "difficulty": "1"
                        },
                        "ID_51": {
                            "title": "Maya Fey ~ Turnabout Sisters Theme 2001",
                            "link": "https://youtu.be/upOhRRYVGkA",
                            "difficulty": "1"
                        },
                        "ID_52": {
                            "title": "Investigation ~ Opening 2001",
                            "link": "https://youtu.be/_ItfF7ZGDgE",
                            "difficulty": "1"
                        },
                        "ID_53": {
                            "title": "Detention Center ~ Jailers' Elegy",
                            "link": "https://youtu.be/B8eTxPdU4sQ",
                            "difficulty": "1"
                        },
                        "ID_54": {
                            "title": "Dick Gumshoe ~ Detective Gumshoe, Pal",
                            "link": "https://youtu.be/pLtzOZe1vZI",
                            "difficulty": "1"
                        },
                        "ID_55": {
                            "title": "Marvin Grossberg ~ Old Age, Regret, Retribution",
                            "link": "https://youtu.be/dr4fdf8F3Yk",
                            "difficulty": "1"
                        },
                        "ID_56": {
                            "title": "Happy People",
                            "link": "https://youtu.be/oVbFMCFl9xE",
                            "difficulty": "1"
                        },
                        "ID_57": {
                            "title": "The Steel Samurai",
                            "link": "https://youtu.be/UPdY_f1ybn8",
                            "difficulty": "1"
                        },
                        "ID_58": {
                            "title": "Recollection ~ The DL-6 Incident",
                            "link": "https://youtu.be/V32y9gHJP0E",
                            "difficulty": "1"
                        },
                        "ID_59": {
                            "title": "Investigation ~ Core 2001",
                            "link": "https://youtu.be/e_FwZ6E5adA",
                            "difficulty": "1"
                        },
                        "ID_60": {
                            "title": "Recollection ~ Class Trial",
                            "link": "https://youtu.be/EtMfvQc-Rh8",
                            "difficulty": "1"
                        },
                        "ID_61": {
                            "title": "Turnabout Sisters Ballad",
                            "link": "https://youtu.be/Sz-m7l_QoEo",
                            "difficulty": "1"
                        },
                        "ID_62": {
                            "title": "End",
                            "link": "https://youtu.be/en8l-_-rBgw",
                            "difficulty": "1"
                        },
                        "ID_63": {
                            "title": "Ema Skye ~ Turnabout Sisters Theme 2005",
                            "link": "https://youtu.be/2FXO-QVjh9g",
                            "difficulty": "1"
                        },
                        "ID_64": {
                            "title": "The Blue Badger ~ I Want to Protect You",
                            "link": "https://youtu.be/5_tPakMnuyI",
                            "difficulty": "1"
                        },
                        "ID_65": {
                            "title": "Damon Gant ~ Swimming, Anyone?",
                            "link": "https://youtu.be/HNBhziViepg",
                            "difficulty": "1"
                        },
                        "ID_66": {
                            "title": "Rise from the Ashes - End",
                            "link": "https://youtu.be/ANcWZHFIcIM",
                            "difficulty": "1"
                        },
                        "ID_67": {
                            "title": "Jingle ~ It Can't End Here",
                            "link": "https://youtu.be/yQpyHftAF5U",
                            "difficulty": "1"
                        }
                    }
                },
                "Phoenix Wright: Dual Destinies": {
                    "gameName": "Phoenix Wright: Dual Destinies",
                    "answers": ["phoenix wright: dual destinies", "dual destinies", "phoenix wright dual destinies", "ace attorney dual destinies"],
                    "songs": {
                        "ID_0": {
                            "title": "Cross Examination ~ Moderato",
                            "link": "https://youtu.be/HmTs0SJOjqo",
                            "difficulty": "1"
                        },
                        "ID_1": {
                            "title": "Logic Trinity",
                            "link": "https://youtu.be/CQpdHIaIe-4",
                            "difficulty": "1"
                        },
                        "ID_2": {
                            "title": "Phoenix Wright ~ Objection! 2013",
                            "link": "https://youtu.be/Yy7NVfkEsvQ",
                            "difficulty": "1"
                        },
                        "ID_3": {
                            "title": "Cross Examination ~ Allegro",
                            "link": "https://youtu.be/LICY7XMIye0",
                            "difficulty": "1"
                        },
                        "ID_4": {
                            "title": "Pursuit ~ Keep Pressing On",
                            "link": "https://youtu.be/JpTQ7fr2yeM",
                            "difficulty": "1"
                        },
                        "ID_5": {
                            "title": "Trucy's Theme ~ Child of Magic 2013",
                            "link": "https://youtu.be/NQaCuEkFFZU",
                            "difficulty": "1"
                        },
                        "ID_6": {
                            "title": "Investigation ~ Opening 2013",
                            "link": "https://youtu.be/Gl8TteaY0ig",
                            "difficulty": "1"
                        },
                        "ID_7": {
                            "title": "Florent L'Belle ~ Je suis L'Belle",
                            "link": "https://youtu.be/El52iOqCAks",
                            "difficulty": "1"
                        },
                        "ID_8": {
                            "title": "Simon Blackquill ~ Distorted Swordsmanship",
                            "link": "https://youtu.be/8Q0BwOvHzTk",
                            "difficulty": "1"
                        },
                        "ID_9": {
                            "title": "Apollo Justice ~ A New Chapter of Trials! 2013",
                            "link": "https://youtu.be/Y_EfUOJlBGY",
                            "difficulty": "1"
                        },
                        "ID_10": {
                            "title": "Lively People",
                            "link": "https://youtu.be/bXUTeyZBEWA",
                            "difficulty": "1"
                        },
                        "ID_11": {
                            "title": "Suspicious People",
                            "link": "https://youtu.be/hynQcpm71DY",
                            "difficulty": "1"
                        },
                        "ID_12": {
                            "title": "Difficult People",
                            "link": "https://youtu.be/VtkILcf6ijM",
                            "difficulty": "1"
                        },
                        "ID_13": {
                            "title": "Reminiscence ~ Wandering Heart",
                            "link": "https://youtu.be/7Hs1P2eSv0o",
                            "difficulty": "1"
                        },
                        "ID_14": {
                            "title": "Athena Cykes ~ Courtroom Révolutionnaire",
                            "link": "https://youtu.be/HmCF8txfZnQ",
                            "difficulty": "1"
                        },
                        "ID_15": {
                            "title": "Reminiscence ~ A Sad Memory",
                            "link": "https://youtu.be/n42kjrhOMzs",
                            "difficulty": "1"
                        },
                        "ID_16": {
                            "title": "Investigation ~ Core 2013",
                            "link": "https://youtu.be/3AtY_tT9iL0",
                            "difficulty": "1"
                        },
                        "ID_17": {
                            "title": "Won the Case! ~ Everyone's Victory",
                            "link": "https://youtu.be/KEzxmtjkeAc",
                            "difficulty": "1"
                        },
                        "ID_18": {
                            "title": "Ace Attorney 5 ~ End",
                            "link": "https://youtu.be/WfFvmxG-6fU",
                            "difficulty": "1"
                        },
                        "ID_19": {
                            "title": "Reminiscence ~ Departure from Regret",
                            "link": "https://youtu.be/uJy3Plbgt_U",
                            "difficulty": "1"
                        }
                    }
                },
                "Phoenix Wright: Justice for All": {
                    "gameName": "Phoenix Wright: Justice for All",
                    "answers": ["phoenix wright: justice for all", "phoenix wright justice for all", "ace attorney 2", "justice for all", "ace attorney justice for all"],
                    "songs": {
                        "ID_261": {
                            "title": "Courtroom Lobby ~ Another Overture",
                            "link": "https://youtu.be/3tgDWKlJsSM",
                            "difficulty": "1"
                        },
                        "ID_262": {
                            "title": "Trial",
                            "link": "https://youtu.be/_HaMSS7-lwQ",
                            "difficulty": "1"
                        },
                        "ID_263": {
                            "title": "Questioning ~ Moderato 2002",
                            "link": "https://youtu.be/lP06Gve7VWg",
                            "difficulty": "1"
                        },
                        "ID_264": {
                            "title": "Trick and Magic",
                            "link": "https://youtu.be/-i5tt2-V2SE",
                            "difficulty": "1"
                        },
                        "ID_265": {
                            "title": "Phoenix Wright ~ Objection! 2002",
                            "link": "https://youtu.be/36pwF_fh5b0",
                            "difficulty": "1"
                        },
                        "ID_266": {
                            "title": "Questioning ~ Allegro 2002",
                            "link": "https://youtu.be/gBfFRGY-vto",
                            "difficulty": "1"
                        },
                        "ID_267": {
                            "title": "Pressing Pursuit ~ Cross-Examine",
                            "link": "https://youtu.be/7Cl98sQPDhU",
                            "difficulty": "1"
                        },
                        "ID_268": {
                            "title": "Telling the Truth 2002",
                            "link": "https://youtu.be/wVkyy04CkTk",
                            "difficulty": "1"
                        },
                        "ID_269": {
                            "title": "Jingle ~ Can't Sleep on a Night Like This",
                            "link": "https://youtu.be/KepUb2l6K3E",
                            "difficulty": "1"
                        },
                        "ID_270": {
                            "title": "Psyche-Lock",
                            "link": "https://youtu.be/9yA3qrxxues",
                            "difficulty": "1"
                        },
                        "ID_271": {
                            "title": "Investigation ~ Opening 2002",
                            "link": "https://youtu.be/f54XlAqBDug",
                            "difficulty": "1"
                        },
                        "ID_272": {
                            "title": "Maya Fey ~ Turnabout Sisters Theme 2002",
                            "link": "https://youtu.be/GjmCbOFI1bk",
                            "difficulty": "1"
                        },
                        "ID_273": {
                            "title": "Detention Center ~ Elegy of Surveillance Cameras",
                            "link": "https://youtu.be/z6kKqU-FkRc",
                            "difficulty": "1"
                        },
                        "ID_274": {
                            "title": "Kurain Village",
                            "link": "https://youtu.be/VXS56M5wLJE",
                            "difficulty": "1"
                        },
                        "ID_275": {
                            "title": "Recollection ~ Scars Etched by Flame",
                            "link": "https://youtu.be/72LiIZ3M8jM",
                            "difficulty": "1"
                        },
                        "ID_276": {
                            "title": "Eccentric",
                            "link": "https://youtu.be/vYPL7ZN4E_o",
                            "difficulty": "1"
                        },
                        "ID_277": {
                            "title": "Berry Big Circus",
                            "link": "https://youtu.be/UjvOaYK7SgM",
                            "difficulty": "1"
                        },
                        "ID_278": {
                            "title": "More Happy People",
                            "link": "https://youtu.be/HtlWpGcCl5k",
                            "difficulty": "1"
                        },
                        "ID_279": {
                            "title": "Recollection ~ True Pain",
                            "link": "https://youtu.be/sAqnzsnw1m0",
                            "difficulty": "1"
                        },
                        "ID_280": {
                            "title": "Pearl Fey ~ Pearly Questioning",
                            "link": "https://youtu.be/sAM-XMc8OAc",
                            "difficulty": "1"
                        },
                        "ID_281": {
                            "title": "Investigation ~ Middle Stage 2002",
                            "link": "https://youtu.be/dcuK7tHFg6M",
                            "difficulty": "1"
                        },
                        "ID_282": {
                            "title": "Great Revival ~ Miles Edgeworth",
                            "link": "https://youtu.be/QI55FRv28Kw",
                            "difficulty": "1"
                        },
                        "ID_283": {
                            "title": "Hotline of Fate",
                            "link": "https://youtu.be/aC_-WxlTMVQ",
                            "difficulty": "1"
                        },
                        "ID_284": {
                            "title": "Investigation ~ Core 2002",
                            "link": "https://youtu.be/jNPkCfUHgtI",
                            "difficulty": "1"
                        },
                        "ID_285": {
                            "title": "Recollection ~ Steel Samurai's Ballad",
                            "link": "https://youtu.be/VzW7ou4UaZg",
                            "difficulty": "1"
                        },
                        "ID_286": {
                            "title": "Victory! ~ Another Victory",
                            "link": "https://youtu.be/-Q2X1uoWEdI",
                            "difficulty": "1"
                        },
                        "ID_287": {
                            "title": "End",
                            "link": "https://youtu.be/4GeSY3Kkbgc",
                            "difficulty": "1"
                        }
                    }
                },
                "Phoenix Wright: Trials and Tribulations": {
                    "gameName": "Phoenix Wright: Trials and Tribulations",
                    "answers": ["phoenix wright: trials and tribulations", "ace attorney 3", "trials and tribulations", "phoenix wright trials and tribulations", "ace attorney trials and tribulations"],
                    "songs": {
                        "ID_288": {
                            "title": "Courtroom Lobby ~ Neverending Overture",
                            "link": "https://youtu.be/QI_0ECz59ug",
                            "difficulty": "1"
                        },
                        "ID_289": {
                            "title": "Trial",
                            "link": "https://youtu.be/_TePxy7Hc3M",
                            "difficulty": "1"
                        },
                        "ID_290": {
                            "title": "Questioning ~ Moderato 2004",
                            "link": "https://youtu.be/9IoF2nhr1Jk",
                            "difficulty": "1"
                        },
                        "ID_291": {
                            "title": "Phoenix Wright ~ Objection! 2004",
                            "link": "https://youtu.be/lpSpJqFVMtc",
                            "difficulty": "1"
                        },
                        "ID_292": {
                            "title": "Questioning ~ Allegro 2004",
                            "link": "https://youtu.be/b6pvnwwbNFA",
                            "difficulty": "1"
                        },
                        "ID_293": {
                            "title": "Pressing Pursuit ~ Caught",
                            "link": "https://youtu.be/wP1DJ_D4chA",
                            "difficulty": "1"
                        },
                        "ID_294": {
                            "title": "Telling the Truth 2004",
                            "link": "https://youtu.be/UtXiYk1WUwQ",
                            "difficulty": "1"
                        },
                        "ID_295": {
                            "title": "Dahlia Hawthorne ~ Distant Traces of Beauty",
                            "link": "https://youtu.be/5quxFte-97o",
                            "difficulty": "1"
                        },
                        "ID_296": {
                            "title": "Godot ~ The Fragrance of Black Coffee",
                            "link": "https://youtu.be/2DTjNriHboA",
                            "difficulty": "1"
                        },
                        "ID_297": {
                            "title": "Jingle ~ Can't Go Back to a Normal Life",
                            "link": "https://youtu.be/vru3V9XcNDc",
                            "difficulty": "1"
                        },
                        "ID_298": {
                            "title": "Investigation ~ Opening 2004",
                            "link": "https://youtu.be/_6nkTj26ghk",
                            "difficulty": "1"
                        },
                        "ID_299": {
                            "title": "Lordly Tailor Department Store",
                            "link": "https://youtu.be/JKXJSVafDag",
                            "difficulty": "1"
                        },
                        "ID_300": {
                            "title": "Detention Center ~ Prisoner's Elegy",
                            "link": "https://youtu.be/xBk1GIy3m4I",
                            "difficulty": "1"
                        },
                        "ID_301": {
                            "title": "Mask☆deMasque ~ Pleeeeease Listen!",
                            "link": "https://youtu.be/t1rjTDfLhLM",
                            "difficulty": "1"
                        },
                        "ID_302": {
                            "title": "Luke Atmey ~ I Just Want Love",
                            "link": "https://youtu.be/QJa9u_5_zK4",
                            "difficulty": "1"
                        },
                        "ID_303": {
                            "title": "Larry Butz ~ When Something Smells, It's Usually Me",
                            "link": "https://youtu.be/Ry87VcpXwjo",
                            "difficulty": "1"
                        },
                        "ID_304": {
                            "title": "Beauty Hermitage",
                            "link": "https://youtu.be/ZI0JFEHElUA",
                            "difficulty": "1"
                        },
                        "ID_305": {
                            "title": "Victor Kudo ~ A Painful Declaration, and a War Song",
                            "link": "https://youtu.be/MIQXomPzm2I",
                            "difficulty": "1"
                        },
                        "ID_306": {
                            "title": "Furio Tigre ~ Swingin' Tiger",
                            "link": "https://youtu.be/iFQ8wVjTPiE",
                            "difficulty": "1"
                        },
                        "ID_307": {
                            "title": "Recollection ~ You Have Regrets",
                            "link": "https://youtu.be/maqy9IuJjCo",
                            "difficulty": "1"
                        },
                        "ID_308": {
                            "title": "Recollection ~ The Scenery Seen from Dusky Bridge",
                            "link": "https://youtu.be/76RcshkmOYk",
                            "difficulty": "1"
                        },
                        "ID_309": {
                            "title": "Hazakura Temple",
                            "link": "https://youtu.be/yDHWjWSxj2s",
                            "difficulty": "1"
                        },
                        "ID_310": {
                            "title": "Investigation ~ Middle Stage 2004",
                            "link": "https://youtu.be/6TjCzeXciV0",
                            "difficulty": "1"
                        },
                        "ID_311": {
                            "title": "Recollection ~ The Bitter Taste of Truth",
                            "link": "https://youtu.be/S-DHBEW9Lc8",
                            "difficulty": "1"
                        },
                        "ID_312": {
                            "title": "Pressing Pursuit ~ Cornered 2004",
                            "link": "https://youtu.be/hU6SWlTmapk",
                            "difficulty": "1"
                        },
                        "ID_313": {
                            "title": "Victory! Endless Victory",
                            "link": "https://youtu.be/Hy-qT6qfZSA",
                            "difficulty": "1"
                        },
                        "ID_314": {
                            "title": "End",
                            "link": "https://youtu.be/8bzmOd8KP7c",
                            "difficulty": "1"
                        }
                    }
                },
                "Spirit of Justice": {
                    "gameName": "Spirit of Justice",
                    "answers": ["spirit of justice", "spirit of justice", "ace attorney spirit of justice", "ace attorney: spirit of justice"],
                    "songs": {
                        "ID_366": {
                            "title": "Defendant's Lobby ~ Prelude to the Revolution",
                            "link": "https://youtu.be/fSRxjWIJQd0",
                            "difficulty": "1"
                        },
                        "ID_367": {
                            "title": "Court Begins Abroad (Khura’in)",
                            "link": "https://youtu.be/IG7g8l7aEDc",
                            "difficulty": "1"
                        },
                        "ID_368": {
                            "title": "Logic Construct",
                            "link": "https://youtu.be/sF0UO7_UzC0",
                            "difficulty": "1"
                        },
                        "ID_369": {
                            "title": "Cross Examination ~ Moderato 2016",
                            "link": "https://youtu.be/YOkrI79UzzM",
                            "difficulty": "1"
                        },
                        "ID_370": {
                            "title": "Divination Seance ~ Last Sights",
                            "link": "https://youtu.be/6aNSb5Ljn-8",
                            "difficulty": "1"
                        },
                        "ID_371": {
                            "title": "Phoenix Wright ~ Objection! 2016",
                            "link": "https://youtu.be/0JpvZk3Xcxc",
                            "difficulty": "1"
                        },
                        "ID_372": {
                            "title": "Cross Examination ~ Allegro 2016",
                            "link": "https://youtu.be/7_InP3Qe2yg",
                            "difficulty": "1"
                        },
                        "ID_373": {
                            "title": "Pursuit ~ Cornering Together",
                            "link": "https://youtu.be/QV1B7oDbC-k",
                            "difficulty": "1"
                        },
                        "ID_374": {
                            "title": "Confess The Truth 2016",
                            "link": "https://youtu.be/uNWH9LBO69o",
                            "difficulty": "1"
                        },
                        "ID_375": {
                            "title": "Jingle ~ Take a Breather",
                            "link": "https://youtu.be/nrwNOXCjg_A",
                            "difficulty": "1"
                        },
                        "ID_376": {
                            "title": "It's show time!",
                            "link": "https://youtu.be/auWSVFxoDTg",
                            "difficulty": "1"
                        },
                        "ID_377": {
                            "title": "Troupe Gramarye 2016",
                            "link": "https://youtu.be/sNYVpQOG3FM",
                            "difficulty": "1"
                        },
                        "ID_378": {
                            "title": "Investigation ~ Opening 2016",
                            "link": "https://youtu.be/bbBrCya-sLk",
                            "difficulty": "1"
                        },
                        "ID_379": {
                            "title": "Ema Skye ~ The Scientific Detective 2016",
                            "link": "https://youtu.be/fvT0hP22vHU",
                            "difficulty": "1"
                        },
                        "ID_380": {
                            "title": "Detention Center ~ Cold-Glass Elegy",
                            "link": "https://youtu.be/LVpfjermoQI",
                            "difficulty": "1"
                        },
                        "ID_381": {
                            "title": "Apollo Justice ~ I'm Fine! 2013",
                            "link": "https://youtu.be/wsiT5a4UyqE",
                            "difficulty": "1"
                        },
                        "ID_382": {
                            "title": "Defendant Lobby's ~ Prelude to the Truth",
                            "link": "https://youtu.be/0gz3XNIM4YQ",
                            "difficulty": "1"
                        },
                        "ID_383": {
                            "title": "Court Begins (California)",
                            "link": "https://youtu.be/iA3lgdGcIlM",
                            "difficulty": "1"
                        },
                        "ID_384": {
                            "title": "Nahyuta Sahdmadhi ~ The Last Rites Prosecutor",
                            "link": "https://youtu.be/JNpRPEY1D4E",
                            "difficulty": "1"
                        },
                        "ID_385": {
                            "title": "Apollo Justice ~ A New Chapter of Trials! 2016",
                            "link": "https://youtu.be/jfIcDfHkC68",
                            "difficulty": "1"
                        },
                        "ID_386": {
                            "title": "Mr. Reus - The Masked Magician",
                            "link": "https://youtu.be/gk7Rfl4rpHo",
                            "difficulty": "1"
                        },
                        "ID_387": {
                            "title": "Reminiscence - Smile, No Matter What",
                            "link": "https://youtu.be/ESyFukRrUCc",
                            "difficulty": "1"
                        },
                        "ID_388": {
                            "title": "Maya Fey ~ Turnabout Sisters 2016",
                            "link": "https://youtu.be/SxyaeDGdpJI",
                            "difficulty": "1"
                        },
                        "ID_389": {
                            "title": "Investigation Opening Abroad",
                            "link": "https://youtu.be/Vvy9MFJjiRU",
                            "difficulty": "1"
                        },
                        "ID_390": {
                            "title": "Rayfa Padma Khura'in ~ The Unyielding Medium Princess",
                            "link": "https://youtu.be/Zrgd7fUnjmo",
                            "difficulty": "1"
                        },
                        "ID_391": {
                            "title": "The Revolutionaries ~ Dragons of Rebellion",
                            "link": "https://youtu.be/KMeRjoHp10E",
                            "difficulty": "1"
                        },
                        "ID_392": {
                            "title": "Detention Center ~ Iron-Bar Elegy",
                            "link": "https://youtu.be/rUvBgltIohQ",
                            "difficulty": "1"
                        },
                        "ID_393": {
                            "title": "Strange People",
                            "link": "https://youtu.be/1b_7kq9CdPI",
                            "difficulty": "1"
                        },
                        "ID_394": {
                            "title": "Reminiscence ~ A Final Conversation",
                            "link": "https://youtu.be/o5wyddM1Dc0",
                            "difficulty": "1"
                        },
                        "ID_395": {
                            "title": "Reminiscence ~ Farewell, Once Again",
                            "link": "https://youtu.be/4FwI5k3rLwc",
                            "difficulty": "1"
                        },
                        "ID_396": {
                            "title": "Athena Cykes ~ Courtroom Révolutionnaire 2016",
                            "link": "https://youtu.be/4WhZInUkekQ",
                            "difficulty": "1"
                        },
                        "ID_397": {
                            "title": "Investigation ~ Core 2016",
                            "link": "https://youtu.be/Hd_VBRY9zOU",
                            "difficulty": "1"
                        },
                        "ID_398": {
                            "title": "Investigation ~ Core Abroad",
                            "link": "https://youtu.be/giAgPUuBh54",
                            "difficulty": "1"
                        },
                        "ID_399": {
                            "title": "A Cornered Heart",
                            "link": "https://youtu.be/-L29-dbnY7k",
                            "difficulty": "1"
                        },
                        "ID_400": {
                            "title": "Won the Case! ~ Each of Their Victories",
                            "link": "https://youtu.be/zOTpymVr4us",
                            "difficulty": "1"
                        },
                        "ID_401": {
                            "title": "End (Credits Theme)",
                            "link": "https://youtu.be/35ABpHTarEU",
                            "difficulty": "1"
                        }
                    }
                },
                "The Great Ace Attorney": {
                    "gameName": "The Great Ace Attorney",
                    "answers": ["the great ace attorney", "tgaa", "great ace attorney"],
                    "songs": {
                        "ID_2338": {
                            "title": "Naruhodou Ryuunosuke ~ Prelude of an Adventure",
                            "link": "https://youtu.be/9SxIJ7hXVsw",
                            "difficulty": "1"
                        },
                        "ID_2339": {
                            "title": "The Great Court Anteroom",
                            "link": "https://youtu.be/lmDtVFAOCCQ",
                            "difficulty": "1"
                        },
                        "ID_2340": {
                            "title": "Court Begins",
                            "link": "https://youtu.be/VXnUBflGR_o",
                            "difficulty": "1"
                        },
                        "ID_2341": {
                            "title": "The Great Cross Examination: Moderato",
                            "link": "https://youtu.be/158e3Bh6o2Q",
                            "difficulty": "1"
                        },
                        "ID_2342": {
                            "title": "Asougi Kazuma - Samurai With A Mission",
                            "link": "https://youtu.be/eKIsiaCcoJU",
                            "difficulty": "1"
                        },
                        "ID_2343": {
                            "title": "Logic and Trick",
                            "link": "https://youtu.be/xsoNdPd4gBA",
                            "difficulty": "1"
                        },
                        "ID_2344": {
                            "title": "Objection! 2015",
                            "link": "https://youtu.be/e-QiKy-iEkQ",
                            "difficulty": "1"
                        },
                        "ID_2345": {
                            "title": "Confess the Truth",
                            "link": "https://youtu.be/5kjZgxYB_Zc",
                            "difficulty": "1"
                        },
                        "ID_2346": {
                            "title": "Elegant: And Excellence",
                            "link": "https://youtu.be/S0C1fPMiTno",
                            "difficulty": "1"
                        },
                        "ID_2347": {
                            "title": "The Core 2015",
                            "link": "https://youtu.be/0mWlxBFCL4Y",
                            "difficulty": "1"
                        },
                        "ID_2348": {
                            "title": "Asougi Kazuma: Nocturne",
                            "link": "https://youtu.be/cIHX6F_DuHg",
                            "difficulty": "1"
                        },
                        "ID_2349": {
                            "title": "Sherlock Holmes: The Great Detective of the Foggy Town",
                            "link": "https://youtu.be/smtc8Sucfm8",
                            "difficulty": "1"
                        },
                        "ID_2350": {
                            "title": "Theme of Deduction - Beyond the Logic",
                            "link": "https://youtu.be/jPWCMf3QRlA",
                            "difficulty": "1"
                        },
                        "ID_2351": {
                            "title": "Barok van Zieks: Grim Reaper of the Great Court",
                            "link": "https://youtu.be/CQCVHRxVThA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Adventure Time": {
            "seriesName": "Adventure Time",
            "seriesColor": "red",
            "game": {
                "Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?": {
                    "gameName": "Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?",
                    "answers": ["adventure time: hey ice king! why'd you steal our garbage?", "adventure time", "hey ice king", "adventure time hey ice king whyd you steal our garbage", "hey ice king whyd you steal our garbage"],
                    "songs": {
                        "ID_1859": {
                            "title": "A Hero is Made",
                            "link": "https://youtu.be/HSfIqjtZneo",
                            "difficulty": "1"
                        },
                        "ID_2023": {
                            "title": "Party in the Clouds",
                            "link": "https://youtu.be/itAYA2wS2C4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Animal Crossing": {
            "seriesName": "Animal Crossing",
            "seriesColor": "red",
            "game": {
                "Animal Crossing": {
                    "gameName": "Animal Crossing",
                    "answers": ["animal crossing"],
                    "songs": {
                        "ID_2421": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/MatjRS1zhxI",
                            "difficulty": "1"
                        },
                        "ID_2422": {
                            "title": "7 AM",
                            "link": "https://youtu.be/c0DQXLKM4x0",
                            "difficulty": "1"
                        },
                        "ID_2423": {
                            "title": "5 PM",
                            "link": "https://youtu.be/RCLqUYHWO8Y",
                            "difficulty": "1"
                        },
                        "ID_2424": {
                            "title": "9 PM",
                            "link": "https://youtu.be/cZD8VkPJ42M",
                            "difficulty": "1"
                        }
                    }
                },
                "Animal Crossing: New Horizons": {
                    "gameName": "Animal Crossing: New Horizons",
                    "answers": ["animal crossing: new horizons", "acnh", "ac nh ", "animal crossing new horizons"],
                    "songs": {
                        "ID_2436": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/W3xDBQtxmbo",
                            "difficulty": "1"
                        },
                        "ID_2437": {
                            "title": "5 AM",
                            "link": "https://youtu.be/fTIemyqVCuw",
                            "difficulty": "1"
                        },
                        "ID_2438": {
                            "title": "2 PM",
                            "link": "https://youtu.be/T0HVKGBe5EU",
                            "difficulty": "1"
                        }
                    }
                },
                "Animal Crossing: New Leaf": {
                    "gameName": "Animal Crossing: New Leaf",
                    "answers": ["animal crossing: new leaf", "animal crossing new leaf", "ac nl", "acnl"],
                    "songs": {
                        "ID_2429": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/FQCJ_M1uwTA",
                            "difficulty": "1"
                        },
                        "ID_2430": {
                            "title": "12 AM",
                            "link": "https://youtu.be/yMsEExr7rOg",
                            "difficulty": "1"
                        },
                        "ID_2431": {
                            "title": "9 AM",
                            "link": "https://youtu.be/_O2SmI_aYMQ",
                            "difficulty": "1"
                        },
                        "ID_2432": {
                            "title": "7 PM",
                            "link": "https://youtu.be/yfYDBZgqD3g",
                            "difficulty": "1"
                        },
                        "ID_2433": {
                            "title": "8 PM",
                            "link": "https://youtu.be/deuR4NKHl38",
                            "difficulty": "1"
                        },
                        "ID_2434": {
                            "title": "11 PM",
                            "link": "https://youtu.be/VMetMEMsYx4",
                            "difficulty": "1"
                        },
                        "ID_2435": {
                            "title": "The Roost / Cafe",
                            "link": "https://youtu.be/9KAFTh5zqF4",
                            "difficulty": "1"
                        }
                    }
                },
                "Animal Crossing: Wild World": {
                    "gameName": "Animal Crossing: Wild World",
                    "answers": ["animal crossing: wild world", "acww", "ac ww", "animal crossing ww", "animal crossing wild world"],
                    "songs": {
                        "ID_2425": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/aj1cmrUCWbM",
                            "difficulty": "1"
                        },
                        "ID_2426": {
                            "title": "10 PM",
                            "link": "https://youtu.be/2VQqTN-zyYg",
                            "difficulty": "1"
                        },
                        "ID_2427": {
                            "title": "2 PM",
                            "link": "https://youtu.be/ASkMPxyVOBw",
                            "difficulty": "1"
                        },
                        "ID_2428": {
                            "title": "The Roost",
                            "link": "https://youtu.be/rdPMEpPQfvs",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ape Escape": {
            "seriesName": "Ape Escape",
            "seriesColor": "red",
            "game": {
                "Ape Escape 2": {
                    "gameName": "Ape Escape 2",
                    "answers": ["ape escape 2", "ae2"],
                    "songs": {
                        "ID_569": {
                            "title": "Theme Tune (Title Screen)",
                            "link": "https://youtu.be/PLH1raKAKvs",
                            "difficulty": "1"
                        },
                        "ID_570": {
                            "title": "Monkeys on Parade!",
                            "link": "https://youtu.be/nTKFoBsecAg",
                            "difficulty": "1"
                        },
                        "ID_571": {
                            "title": "The Beginning",
                            "link": "https://youtu.be/ZCnW9gepAT8",
                            "difficulty": "1"
                        },
                        "ID_572": {
                            "title": "Liberty Island",
                            "link": "https://youtu.be/-2aleNGqOuU",
                            "difficulty": "1"
                        },
                        "ID_573": {
                            "title": "Breezy Village",
                            "link": "https://youtu.be/W0y_6ALGdU4",
                            "difficulty": "1"
                        },
                        "ID_574": {
                            "title": "Port Calm",
                            "link": "https://youtu.be/kefMnYavYSE",
                            "difficulty": "1"
                        },
                        "ID_575": {
                            "title": "Viva Apespania!",
                            "link": "https://youtu.be/fhdE89KBvD8",
                            "difficulty": "1"
                        },
                        "ID_576": {
                            "title": "Castle Frightmare",
                            "link": "https://youtu.be/OJN4PRjWmXE",
                            "difficulty": "1"
                        },
                        "ID_577": {
                            "title": "Vita-Z Factory",
                            "link": "https://youtu.be/eVtiMZgTNZo",
                            "difficulty": "1"
                        },
                        "ID_578": {
                            "title": "Casino City",
                            "link": "https://youtu.be/3GKXeeN8RQU",
                            "difficulty": "1"
                        },
                        "ID_579": {
                            "title": "Ninja Hideout",
                            "link": "https://youtu.be/z9RIMx4BmBI",
                            "difficulty": "1"
                        },
                        "ID_580": {
                            "title": "Snowball Mountain",
                            "link": "https://youtu.be/uuP8I6uxyeY",
                            "difficulty": "1"
                        },
                        "ID_581": {
                            "title": "Snowball Ski Slope",
                            "link": "https://youtu.be/q54MKVtOAmw",
                            "difficulty": "1"
                        },
                        "ID_582": {
                            "title": "Lookout Valley",
                            "link": "https://youtu.be/O-YjvueHnKQ",
                            "difficulty": "1"
                        },
                        "ID_583": {
                            "title": "Blue Baboon",
                            "link": "https://youtu.be/5OD48Hh5bMc",
                            "difficulty": "1"
                        },
                        "ID_584": {
                            "title": "Enter the Monkey",
                            "link": "https://youtu.be/wkyTun40CBc",
                            "difficulty": "1"
                        },
                        "ID_585": {
                            "title": "Simian Citadel",
                            "link": "https://youtu.be/eKhXO2LXdTw",
                            "difficulty": "1"
                        },
                        "ID_586": {
                            "title": "Panic Pyramid",
                            "link": "https://youtu.be/mLVLbeuQTL8",
                            "difficulty": "1"
                        },
                        "ID_587": {
                            "title": "Pirate Isle",
                            "link": "https://youtu.be/dmnLUvWEwsw",
                            "difficulty": "1"
                        },
                        "ID_588": {
                            "title": "Land of the Apes",
                            "link": "https://youtu.be/2awFAEM2n2Y",
                            "difficulty": "1"
                        },
                        "ID_589": {
                            "title": "Monkey Hot Spring",
                            "link": "https://youtu.be/WdZ_f8NMzA8",
                            "difficulty": "1"
                        },
                        "ID_590": {
                            "title": "Monkey Ski Slope",
                            "link": "https://youtu.be/RZbu4PXlQVA",
                            "difficulty": "1"
                        },
                        "ID_591": {
                            "title": "The Lost Valley",
                            "link": "https://youtu.be/VXF6EUWdyRA",
                            "difficulty": "1"
                        },
                        "ID_592": {
                            "title": "Skyscraper City",
                            "link": "https://youtu.be/JDaJBGxDulM",
                            "difficulty": "1"
                        },
                        "ID_593": {
                            "title": "Code C.H.I.M.P.",
                            "link": "https://youtu.be/d5LRUMXYkDQ",
                            "difficulty": "1"
                        },
                        "ID_594": {
                            "title": "Code C.H.I.M.P. II",
                            "link": "https://youtu.be/6WJrJjAI-8U",
                            "difficulty": "1"
                        },
                        "ID_595": {
                            "title": "Moon Base 1",
                            "link": "https://youtu.be/2ZhpAM8jzjw",
                            "difficulty": "1"
                        },
                        "ID_596": {
                            "title": "Moon Base 2",
                            "link": "https://youtu.be/JsnxikaTswc",
                            "difficulty": "1"
                        },
                        "ID_597": {
                            "title": "Scheming Specter",
                            "link": "https://youtu.be/BB-z64PfDP8",
                            "difficulty": "1"
                        },
                        "ID_598": {
                            "title": "Song of the Freaky Monkey Five",
                            "link": "https://youtu.be/96sFrd-tg3E",
                            "difficulty": "1"
                        },
                        "ID_599": {
                            "title": "Escape the Ape in You!",
                            "link": "https://youtu.be/IP486wsJdCA",
                            "difficulty": "1"
                        },
                        "ID_600": {
                            "title": "Freaky Monkey Five Battle!",
                            "link": "https://youtu.be/3rghC8ct9rE",
                            "difficulty": "1"
                        },
                        "ID_601": {
                            "title": "Giant Yellow Monkey Battle!",
                            "link": "https://youtu.be/5xPnx8JQe6Q",
                            "difficulty": "1"
                        },
                        "ID_602": {
                            "title": "Battle with Specter!",
                            "link": "https://youtu.be/6717X9LuXeo",
                            "difficulty": "1"
                        },
                        "ID_603": {
                            "title": "Specter's Theme",
                            "link": "https://youtu.be/ilJ2PMO9zvk",
                            "difficulty": "1"
                        },
                        "ID_604": {
                            "title": "Final Battle with Specter!",
                            "link": "https://youtu.be/rwam42o5poA",
                            "difficulty": "1"
                        },
                        "ID_605": {
                            "title": "Ending 1",
                            "link": "https://youtu.be/fh4_iXeVqoc",
                            "difficulty": "1"
                        },
                        "ID_606": {
                            "title": "Ending 2",
                            "link": "https://youtu.be/V1LwURLly7w",
                            "difficulty": "1"
                        },
                        "ID_607": {
                            "title": "Staff Credits",
                            "link": "https://youtu.be/jI5uycdJO4c",
                            "difficulty": "1"
                        },
                        "ID_608": {
                            "title": "Travel Station",
                            "link": "https://youtu.be/MRaHcP9j1Sg",
                            "difficulty": "1"
                        },
                        "ID_609": {
                            "title": "Gadget Trainer",
                            "link": "https://youtu.be/_CAiHb_FxZY",
                            "difficulty": "1"
                        },
                        "ID_610": {
                            "title": "New Gadget",
                            "link": "https://youtu.be/2eU4LQo0XbU",
                            "difficulty": "1"
                        },
                        "ID_611": {
                            "title": "Stage Cleared!",
                            "link": "https://youtu.be/AZJ0zSFwzrk",
                            "difficulty": "1"
                        },
                        "ID_612": {
                            "title": "Stage Perfectly Cleared!",
                            "link": "https://youtu.be/JEEOcwzpMCw",
                            "difficulty": "1"
                        },
                        "ID_613": {
                            "title": "Monkey Soccer!",
                            "link": "https://youtu.be/YATxtUgLEwg",
                            "difficulty": "1"
                        },
                        "ID_614": {
                            "title": "Kick Off!",
                            "link": "https://youtu.be/PSbU_DdGt6s",
                            "difficulty": "1"
                        },
                        "ID_615": {
                            "title": "Gotcha Rhythm",
                            "link": "https://youtu.be/XO7_unkLj3A",
                            "difficulty": "1"
                        },
                        "ID_616": {
                            "title": "Monkeys' Gonna Getchu!",
                            "link": "https://youtu.be/1w8SULf1oaQ",
                            "difficulty": "1"
                        },
                        "ID_617": {
                            "title": "Monkey Chorus",
                            "link": "https://youtu.be/sdoVBIsqiAc",
                            "difficulty": "1"
                        },
                        "ID_618": {
                            "title": "Monkey Climber",
                            "link": "https://youtu.be/KH_RYm-g11o",
                            "difficulty": "1"
                        },
                        "ID_619": {
                            "title": "Stage Intro",
                            "link": "https://youtu.be/0nhFjNioOJs",
                            "difficulty": "1"
                        },
                        "ID_620": {
                            "title": "All Done!",
                            "link": "https://youtu.be/W-sUh3ajAGg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Balloon Fight": {
            "seriesName": "Balloon Fight",
            "seriesColor": "red",
            "game": {
                "Balloon Fight": {
                    "gameName": "Balloon Fight",
                    "answers": ["balloon fight"],
                    "songs": {
                        "ID_1838": {
                            "title": "Bonus Round",
                            "link": "https://youtu.be/tKo0NZTI6jE",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Banjo": {
            "seriesName": "Banjo",
            "seriesColor": "red",
            "game": {
                "Banjo-Kazooie": {
                    "gameName": "Banjo-Kazooie",
                    "answers": ["banjo-kazooie", "banjo kazooie", "banjo"],
                    "songs": {
                        "ID_2383": {
                            "title": "Main Title",
                            "link": "https://youtu.be/dQNAVqW1shA",
                            "difficulty": "1"
                        },
                        "ID_2384": {
                            "title": "Spiral Mountain",
                            "link": "https://youtu.be/pPUn5biib1c",
                            "difficulty": "1"
                        },
                        "ID_2385": {
                            "title": "Pause Screen",
                            "link": "https://youtu.be/BWzc_jgpIzg",
                            "difficulty": "1"
                        },
                        "ID_2386": {
                            "title": "Gruntilda's Lair",
                            "link": "https://youtu.be/FWhKyk-4j6I",
                            "difficulty": "1"
                        },
                        "ID_2387": {
                            "title": "Bottles' Puzzle Challenge",
                            "link": "https://youtu.be/I3MKWUlNH1Y",
                            "difficulty": "1"
                        },
                        "ID_2388": {
                            "title": "Mumbo's Mountain",
                            "link": "https://youtu.be/GgbXr4rN4D4",
                            "difficulty": "1"
                        },
                        "ID_2389": {
                            "title": "Ticker's Tower",
                            "link": "https://youtu.be/g4mtaQRXj3I",
                            "difficulty": "1"
                        },
                        "ID_2390": {
                            "title": "Mumbo's Hut",
                            "link": "https://youtu.be/i8qkC2HIfFE",
                            "difficulty": "1"
                        },
                        "ID_2391": {
                            "title": "Treasure Trove Cove",
                            "link": "https://youtu.be/3nxFYoGNJKc",
                            "difficulty": "1"
                        },
                        "ID_2392": {
                            "title": "Secret Fanfare 1",
                            "link": "https://youtu.be/1mkbd2Cgj-M",
                            "difficulty": "1"
                        },
                        "ID_2393": {
                            "title": "Clanker's Cavern",
                            "link": "https://youtu.be/qDlBHbf9C1U",
                            "difficulty": "1"
                        },
                        "ID_2394": {
                            "title": "Freezeezy Peak",
                            "link": "https://youtu.be/bKv9WeS8BOs",
                            "difficulty": "1"
                        },
                        "ID_2395": {
                            "title": "Gobi's Valley",
                            "link": "https://youtu.be/1o09uxkZwKo",
                            "difficulty": "1"
                        },
                        "ID_2396": {
                            "title": "Rusty Bucket Bay",
                            "link": "https://youtu.be/PByIP2MLWP0",
                            "difficulty": "1"
                        },
                        "ID_2397": {
                            "title": "Gnawty's House",
                            "link": "https://youtu.be/5JVSRucGzBk",
                            "difficulty": "1"
                        },
                        "ID_2398": {
                            "title": "End Credits",
                            "link": "https://youtu.be/kgl6a_9vjnQ",
                            "difficulty": "1"
                        },
                        "ID_2399": {
                            "title": "Final Battle",
                            "link": "https://youtu.be/VB-WvKoBZgA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Battletoads": {
            "seriesName": "Battletoads",
            "seriesColor": "red",
            "game": {
                "Battletoads": {
                    "gameName": "Battletoads",
                    "answers": ["battletoads"],
                    "songs": {
                        "ID_2035": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/7kB6OXGVJ0c",
                            "difficulty": "1"
                        },
                        "ID_2036": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/P7pwn1Hklvc",
                            "difficulty": "1"
                        },
                        "ID_2037": {
                            "title": "Pause Beat",
                            "link": "https://youtu.be/JRPXRHS4XNQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Bayonetta": {
            "seriesName": "Bayonetta",
            "seriesColor": "red",
            "game": {
                "Bayonetta": {
                    "gameName": "Bayonetta",
                    "answers": ["bayonetta", "bayonetta 1", "bayonetta 1"],
                    "songs": {
                        "ID_1057": {
                            "title": "Fly Me to the Moon (Climax Mix)",
                            "link": "https://youtu.be/EV6E13xODyA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "BioShock": {
            "seriesName": "BioShock",
            "seriesColor": "red",
            "game": {
                "BioShock Infinite": {
                    "gameName": "BioShock Infinite",
                    "answers": ["bioshock infinite"],
                    "songs": {
                        "ID_927": {
                            "title": "Will The Circle Be Unbroken (Choral version)",
                            "link": "https://youtu.be/LAIS-ADK6c8",
                            "difficulty": "1"
                        },
                        "ID_928": {
                            "title": "Lutece",
                            "link": "https://youtu.be/viO_5aaF0zc",
                            "difficulty": "1"
                        },
                        "ID_929": {
                            "title": "Will The Circle Be Unbroken (Full)",
                            "link": "https://youtu.be/9F1l6xXLSI0",
                            "difficulty": "1"
                        },
                        "ID_930": {
                            "title": "Solace",
                            "link": "https://youtu.be/38ms-WVWI9w",
                            "difficulty": "1"
                        },
                        "ID_931": {
                            "title": "God Only Knows",
                            "link": "https://youtu.be/x7ogV49WGco",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Borderlands": {
            "seriesName": "Borderlands",
            "seriesColor": "red",
            "game": {
                "Tales from the Borderlands": {
                    "gameName": "Tales from the Borderlands",
                    "answers": ["tales from the borderlands"],
                    "songs": {
                        "ID_2258": {
                            "title": "Busy Earnin'",
                            "link": "https://youtu.be/BcsfftwLUf0",
                            "difficulty": "1"
                        },
                        "ID_2259": {
                            "title": "Kiss the Sky",
                            "link": "https://youtu.be/hGqW68-Mo2c",
                            "difficulty": "1"
                        },
                        "ID_2260": {
                            "title": "Pieces of the People We Love",
                            "link": "https://youtu.be/wWAOFp-8RxM",
                            "difficulty": "1"
                        },
                        "ID_2261": {
                            "title": "To the Top",
                            "link": "https://youtu.be/H8ofhjI6ODc",
                            "difficulty": "1"
                        },
                        "ID_2262": {
                            "title": "My Silver Lining",
                            "link": "https://youtu.be/GIV8ZcDB8ps",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Bubble Bobble": {
            "seriesName": "Bubble Bobble",
            "seriesColor": "red",
            "game": {
                "Bubble Bobble": {
                    "gameName": "Bubble Bobble",
                    "answers": ["bubble bobble"],
                    "songs": {
                        "ID_1839": {
                            "title": "In-Game Music",
                            "link": "https://youtu.be/FFWkfgFMcjY",
                            "difficulty": "1"
                        },
                        "ID_1840": {
                            "title": "Hurry Up!",
                            "link": "https://youtu.be/LGHdpdPaIOY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Call of Duty": {
            "seriesName": "Call of Duty",
            "seriesColor": "red",
            "game": {
                "Modern Warfare 2": {
                    "gameName": "Modern Warfare 2",
                    "answers": ["modern warfare 2", "mw2"],
                    "songs": {
                        "ID_1325": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/sY488LOjJLI",
                            "difficulty": "1"
                        },
                        "ID_1326": {
                            "title": "End Credits",
                            "link": "https://youtu.be/-UxtrD7aNYY",
                            "difficulty": "1"
                        }
                    }
                },
                "Modern Warfare 3": {
                    "gameName": "Modern Warfare 3",
                    "answers": ["modern warfare 3", "mw3"],
                    "songs": {
                        "ID_1327": {
                            "title": "Multiplayer: Main Menu",
                            "link": "https://youtu.be/vx9IDAys0BY",
                            "difficulty": "1"
                        },
                        "ID_1328": {
                            "title": "End Credits",
                            "link": "https://youtu.be/bNv-uAUqr9k",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Castle Crashers": {
            "seriesName": "Castle Crashers",
            "seriesColor": "red",
            "game": {
                "Castle Crashers": {
                    "gameName": "Castle Crashers",
                    "answers": ["castle crashers"],
                    "songs": {
                        "ID_1873": {
                            "title": "Race Around the World (Edit)",
                            "link": "https://youtu.be/Xdc0lN0EobE",
                            "difficulty": "1"
                        },
                        "ID_1874": {
                            "title": "Jumper",
                            "link": "https://youtu.be/uhYYUAtc0UA",
                            "difficulty": "1"
                        },
                        "ID_1875": {
                            "title": "Chaoz Japan",
                            "link": "https://youtu.be/zxz3DP8v9ko",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Castlestorm": {
            "seriesName": "Castlestorm",
            "seriesColor": "red",
            "game": {
                "Castlestorm": {
                    "gameName": "Castlestorm",
                    "answers": ["castlestorm"],
                    "songs": {
                        "ID_1982": {
                            "title": "Welcome to Vikingland",
                            "link": "https://youtu.be/zcaTYy9YT5o",
                            "difficulty": "1"
                        },
                        "ID_1983": {
                            "title": "Glorious Morning (CS Edition)",
                            "link": "https://youtu.be/6E2-CIVPdXQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Castlevania": {
            "seriesName": "Castlevania",
            "seriesColor": "red",
            "game": {
                "Castlevania": {
                    "gameName": "Castlevania",
                    "answers": ["castlevania", "castlevania 1"],
                    "songs": {
                        "ID_1860": {
                            "title": "Boss Battle Poison Mind",
                            "link": "https://youtu.be/LFB0AoS_-NQ",
                            "difficulty": "1"
                        },
                        "ID_1861": {
                            "title": "Vampire Killer",
                            "link": "https://youtu.be/btgi3TPL3AE",
                            "difficulty": "1"
                        },
                        "ID_1862": {
                            "title": "Wicked Child",
                            "link": "https://youtu.be/Kez-bm3GzrA",
                            "difficulty": "1"
                        },
                        "ID_1863": {
                            "title": "Walking on the Edge",
                            "link": "https://youtu.be/giluUMMiUAk",
                            "difficulty": "1"
                        },
                        "ID_1864": {
                            "title": "Heart of Fire",
                            "link": "https://youtu.be/gbeODUgr-uM",
                            "difficulty": "1"
                        }
                    }
                },
                "Castlevania II": {
                    "gameName": "Castlevania II",
                    "answers": ["castlevania ii", "castlevania 2"],
                    "songs": {
                        "ID_1865": {
                            "title": "Bloody Tears (Day Theme)",
                            "link": "https://youtu.be/e2oZtvjg5oA",
                            "difficulty": "1"
                        },
                        "ID_1866": {
                            "title": "Monster Dance (Night Theme)",
                            "link": "https://youtu.be/-HUwLA57paU",
                            "difficulty": "1"
                        }
                    }
                },
                "Castlevania III": {
                    "gameName": "Castlevania III",
                    "answers": ["castlevania iii", "castlevania 3"],
                    "songs": {
                        "ID_1867": {
                            "title": "Beginning",
                            "link": "https://youtu.be/78706bv98S8",
                            "difficulty": "1"
                        },
                        "ID_1868": {
                            "title": "Boss Fight",
                            "link": "https://youtu.be/7YwSc23yQKc",
                            "difficulty": "1"
                        },
                        "ID_1869": {
                            "title": "Mad Forest",
                            "link": "https://youtu.be/hPbKUdFvbeM",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Castlevania IV": {
                    "gameName": "Super Castlevania IV",
                    "answers": ["super castlevania iv", "castlevania 4", "super castlevania 4"],
                    "songs": {
                        "ID_1870": {
                            "title": "Theme of Simon Belmont",
                            "link": "https://youtu.be/iWMN91gMD_4",
                            "difficulty": "1"
                        },
                        "ID_1871": {
                            "title": "Stage A Bloody Tears",
                            "link": "https://youtu.be/-HyixXJ2kMo",
                            "difficulty": "1"
                        },
                        "ID_1872": {
                            "title": "Stage B Vampire Killer",
                            "link": "https://youtu.be/N3g-wHZwcvs",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Catherine": {
            "seriesName": "Catherine",
            "seriesColor": "red",
            "game": {
                "Catherine": {
                    "gameName": "Catherine",
                    "answers": ["catherine"],
                    "songs": {
                        "ID_671": {
                            "title": "Yo",
                            "link": "https://youtu.be/fkweKi2ONDE",
                            "difficulty": "1"
                        },
                        "ID_672": {
                            "title": "Roux",
                            "link": "https://youtu.be/9eMNwIezQSg",
                            "difficulty": "1"
                        },
                        "ID_673": {
                            "title": "Also Sprach Brooks",
                            "link": "https://youtu.be/PCZs1P4ZOJQ",
                            "difficulty": "1"
                        },
                        "ID_674": {
                            "title": "Pandemonium",
                            "link": "https://youtu.be/VYept9efrOw",
                            "difficulty": "1"
                        },
                        "ID_675": {
                            "title": "R30's Melancholy",
                            "link": "https://youtu.be/0M3OKODFBBg",
                            "difficulty": "1"
                        },
                        "ID_676": {
                            "title": "Zigeunerweisen Sarasate'",
                            "link": "https://youtu.be/R1acph7DOac",
                            "difficulty": "1"
                        },
                        "ID_677": {
                            "title": "Rapunzel -Game Play-",
                            "link": "https://youtu.be/aTRhtP6gOqA",
                            "difficulty": "1"
                        },
                        "ID_678": {
                            "title": "Holst Planets Suite Jupiter",
                            "link": "https://youtu.be/pNCyJohA_1U",
                            "difficulty": "1"
                        },
                        "ID_679": {
                            "title": "Dvorak Symphony No. 9 in E minor From the New World 1st Movement",
                            "link": "https://youtu.be/Q06iJrlVY5k",
                            "difficulty": "1"
                        },
                        "ID_680": {
                            "title": "Rossini William Tell Overture Part 2 The Storm and Part 3 The Ranz des",
                            "link": "https://youtu.be/EsuJth9FXec",
                            "difficulty": "1"
                        },
                        "ID_681": {
                            "title": "Mussorgsky - Pictures at an Exhibition The Hut on Fowl's Legs",
                            "link": "https://youtu.be/ZIDo4dLlITc",
                            "difficulty": "1"
                        },
                        "ID_682": {
                            "title": "Bizet L'Arlésienne Second Suite Farandole",
                            "link": "https://youtu.be/-MzPga31K98",
                            "difficulty": "1"
                        },
                        "ID_683": {
                            "title": "Chopin Revolutionary Etude",
                            "link": "https://youtu.be/IbV1awjnNm8",
                            "difficulty": "1"
                        },
                        "ID_684": {
                            "title": "Handel Messiah Hallelujah Chorus",
                            "link": "https://youtu.be/3vx5NcLA3nc",
                            "difficulty": "1"
                        },
                        "ID_685": {
                            "title": "Chopin Piano Sonata No. 2 Funeral March 3rd Movement",
                            "link": "https://youtu.be/3MkHe--TcM0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Cave Story": {
            "seriesName": "Cave Story",
            "seriesColor": "red",
            "game": {
                "Cave Story": {
                    "gameName": "Cave Story",
                    "answers": ["cave story"],
                    "songs": {
                        "ID_1990": {
                            "title": "Mimiga Town",
                            "link": "https://youtu.be/BdUZkTLE06A",
                            "difficulty": "1"
                        },
                        "ID_1991": {
                            "title": "Gravity",
                            "link": "https://youtu.be/594aUuWMiOE",
                            "difficulty": "1"
                        },
                        "ID_1992": {
                            "title": "Theme of Balrog",
                            "link": "https://youtu.be/QW7NI5tWq_A",
                            "difficulty": "1"
                        },
                        "ID_1993": {
                            "title": "Mischievious Robot",
                            "link": "https://youtu.be/cy9ejJiSH2Y",
                            "difficulty": "1"
                        },
                        "ID_1994": {
                            "title": "On To Grasstown",
                            "link": "https://youtu.be/A8smb_XuiSU",
                            "difficulty": "1"
                        },
                        "ID_1995": {
                            "title": "Labyrinth Fight",
                            "link": "https://youtu.be/XfeDy6SdiTs",
                            "difficulty": "1"
                        },
                        "ID_1996": {
                            "title": "Oppression",
                            "link": "https://youtu.be/9K_Z1_tfGGw",
                            "difficulty": "1"
                        },
                        "ID_1997": {
                            "title": "Scorching Back",
                            "link": "https://youtu.be/I5Zt8WJuhQY",
                            "difficulty": "1"
                        },
                        "ID_1998": {
                            "title": "Moonsong",
                            "link": "https://youtu.be/q09KoR7g018",
                            "difficulty": "1"
                        },
                        "ID_1999": {
                            "title": "Plantation / Main Theme",
                            "link": "https://youtu.be/aHtWKbR_P-c",
                            "difficulty": "1"
                        },
                        "ID_2000": {
                            "title": "Last Cave",
                            "link": "https://youtu.be/Dp9nGccaPNE",
                            "difficulty": "1"
                        },
                        "ID_2001": {
                            "title": "Balcony",
                            "link": "https://youtu.be/GoigiNs59s8",
                            "difficulty": "1"
                        },
                        "ID_2002": {
                            "title": "Last Battle",
                            "link": "https://youtu.be/4zW7Dmx9WYQ",
                            "difficulty": "1"
                        },
                        "ID_2003": {
                            "title": "Running Hell / Theme of Curly Brace",
                            "link": "https://youtu.be/VQPqmS5iGzY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Celeste": {
            "seriesName": "Celeste",
            "seriesColor": "red",
            "game": {
                "Celeste": {
                    "gameName": "Celeste",
                    "answers": ["celeste"],
                    "songs": {
                        "ID_621": {
                            "title": "Prologue",
                            "link": "https://youtu.be/Ctuo3ws3EKs",
                            "difficulty": "1"
                        },
                        "ID_622": {
                            "title": "First Steps",
                            "link": "https://youtu.be/N8OHSXvneOE",
                            "difficulty": "1"
                        },
                        "ID_623": {
                            "title": "Resurrections",
                            "link": "https://youtu.be/1rwAvUvvQzQ",
                            "difficulty": "1"
                        },
                        "ID_624": {
                            "title": "Awake",
                            "link": "https://youtu.be/BFVyvGmwlmk",
                            "difficulty": "1"
                        },
                        "ID_625": {
                            "title": "Postcard from Celeste Mountain",
                            "link": "https://youtu.be/V8qOjmWIPKs",
                            "difficulty": "1"
                        },
                        "ID_626": {
                            "title": "Checking In",
                            "link": "https://youtu.be/fOzvP1I5tLU",
                            "difficulty": "1"
                        },
                        "ID_627": {
                            "title": "Spirit of Hospitality",
                            "link": "https://youtu.be/NRpcwd9MSSE",
                            "difficulty": "1"
                        },
                        "ID_628": {
                            "title": "Scattered and Lost",
                            "link": "https://youtu.be/0etenwnI1wo",
                            "difficulty": "1"
                        },
                        "ID_629": {
                            "title": "Golden",
                            "link": "https://youtu.be/mr-SWzqNpM0",
                            "difficulty": "1"
                        },
                        "ID_630": {
                            "title": "Anxiety",
                            "link": "https://youtu.be/FMuQ11tVJnk",
                            "difficulty": "1"
                        },
                        "ID_631": {
                            "title": "Quiet and Falling",
                            "link": "https://youtu.be/FjG0ivBT4lQ",
                            "difficulty": "1"
                        },
                        "ID_632": {
                            "title": "In the Mirror",
                            "link": "https://youtu.be/bXfHKEaDg4s",
                            "difficulty": "1"
                        },
                        "ID_633": {
                            "title": "Madeline and Theo",
                            "link": "https://youtu.be/__oZ-LYZ8pU",
                            "difficulty": "1"
                        },
                        "ID_634": {
                            "title": "Starjump",
                            "link": "https://youtu.be/dTIeaqNXseY",
                            "difficulty": "1"
                        },
                        "ID_635": {
                            "title": "Reflection",
                            "link": "https://youtu.be/QfhUSYq7jEs",
                            "difficulty": "1"
                        },
                        "ID_636": {
                            "title": "Confronting Myself",
                            "link": "https://youtu.be/b_oEDGONSc4",
                            "difficulty": "1"
                        },
                        "ID_637": {
                            "title": "Little Goth",
                            "link": "https://youtu.be/oHdSK43cIf8",
                            "difficulty": "1"
                        },
                        "ID_638": {
                            "title": "Reach for the Summit",
                            "link": "https://youtu.be/iDVM9KED46Q",
                            "difficulty": "1"
                        },
                        "ID_639": {
                            "title": "Exhale",
                            "link": "https://youtu.be/q7QMTo-P6H0",
                            "difficulty": "1"
                        },
                        "ID_640": {
                            "title": "Heart of the Mountain",
                            "link": "https://youtu.be/DNOuancg5RY",
                            "difficulty": "1"
                        },
                        "ID_641": {
                            "title": "My Dearest Friends",
                            "link": "https://youtu.be/VHN63n9y1vg",
                            "difficulty": "1"
                        },
                        "ID_642": {
                            "title": "Forsaken City (Sever the Skyline Mix)",
                            "link": "https://youtu.be/6LbXujfutWk",
                            "difficulty": "1"
                        },
                        "ID_643": {
                            "title": "Old Site (Black Moonrise Mix)",
                            "link": "https://youtu.be/6eeIEMOQw4s",
                            "difficulty": "1"
                        },
                        "ID_644": {
                            "title": "Celestial Resort (Good Karma Mix)",
                            "link": "https://youtu.be/X-fmYK81MUQ",
                            "difficulty": "1"
                        },
                        "ID_645": {
                            "title": "Golden Ridge (Golden Feather Mix)",
                            "link": "https://youtu.be/AgDYV_IbPuo",
                            "difficulty": "1"
                        },
                        "ID_646": {
                            "title": "Mirror Temple (Mirror Magic Mix)",
                            "link": "https://youtu.be/iKnwVvXkWq0",
                            "difficulty": "1"
                        },
                        "ID_647": {
                            "title": "Reflection (Center of the Earth Mix)",
                            "link": "https://youtu.be/qJXKBLeXK9c",
                            "difficulty": "1"
                        },
                        "ID_648": {
                            "title": "Summit (No More Running Mix)",
                            "link": "https://youtu.be/_YLk0kJ3Naw",
                            "difficulty": "1"
                        },
                        "ID_649": {
                            "title": "The Core (Say Goodbye Mix)",
                            "link": "https://youtu.be/HoRvLKzNZWQ",
                            "difficulty": "1"
                        },
                        "ID_650": {
                            "title": "Area 1 Demo",
                            "link": "https://youtu.be/N0rWxhSSFLg",
                            "difficulty": "1"
                        }
                    }
                },
                "Celeste: Farewell": {
                    "gameName": "Celeste: Farewell",
                    "answers": ["celeste: farewell", "celeste", "celeste farewell", "farewell"],
                    "songs": {
                        "ID_651": {
                            "title": "The Empty Space Above",
                            "link": "https://youtu.be/sciyyflf8c8",
                            "difficulty": "1"
                        },
                        "ID_652": {
                            "title": "Fear of the Unknown",
                            "link": "https://youtu.be/9wob-o9k7l0",
                            "difficulty": "1"
                        },
                        "ID_653": {
                            "title": "Joy of Remembrance",
                            "link": "https://youtu.be/CYQ43fwgW7Y",
                            "difficulty": "1"
                        },
                        "ID_654": {
                            "title": "In Stasis",
                            "link": "https://youtu.be/1ALFlNdxkx4",
                            "difficulty": "1"
                        },
                        "ID_655": {
                            "title": "Crash",
                            "link": "https://youtu.be/qa225q780u8",
                            "difficulty": "1"
                        },
                        "ID_656": {
                            "title": "Beyond the Heart",
                            "link": "https://youtu.be/K3HzzcI1cxE",
                            "difficulty": "1"
                        },
                        "ID_657": {
                            "title": "Final Defiance",
                            "link": "https://youtu.be/ccQfqKO2-bs",
                            "difficulty": "1"
                        },
                        "ID_658": {
                            "title": "Futility",
                            "link": "https://youtu.be/ZjLOKedxEoI",
                            "difficulty": "1"
                        },
                        "ID_659": {
                            "title": "Reconciliation",
                            "link": "https://youtu.be/RB0q5a9zVdQ",
                            "difficulty": "1"
                        },
                        "ID_660": {
                            "title": "Farewell",
                            "link": "https://youtu.be/9TczL8fJi-0",
                            "difficulty": "1"
                        },
                        "ID_661": {
                            "title": "The Woman and the Bird",
                            "link": "https://youtu.be/qeKPj2vLH2c",
                            "difficulty": "1"
                        },
                        "ID_662": {
                            "title": "Vovô e Vovó",
                            "link": "https://youtu.be/6kxGop2qSA8",
                            "difficulty": "1"
                        },
                        "ID_663": {
                            "title": "wavedash.ppt",
                            "link": "https://youtu.be/nI-u3opgki8",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Chrono": {
            "seriesName": "Chrono",
            "seriesColor": "red",
            "game": {
                "Chrono Cross": {
                    "gameName": "Chrono Cross",
                    "answers": ["chrono cross"],
                    "songs": {
                        "ID_1308": {
                            "title": "On the Beach of Dreams - Another World",
                            "link": "https://youtu.be/wCJt2zDkwDk",
                            "difficulty": "1"
                        },
                        "ID_1309": {
                            "title": "Arni Village - Another World",
                            "link": "https://youtu.be/H2nTz5VUc08",
                            "difficulty": "1"
                        },
                        "ID_1310": {
                            "title": "Forest of Illusion",
                            "link": "https://youtu.be/giR1EVc10UI",
                            "difficulty": "1"
                        },
                        "ID_1311": {
                            "title": "Voyage - Another World",
                            "link": "https://youtu.be/j7IoDqkJqkI",
                            "difficulty": "1"
                        },
                        "ID_1312": {
                            "title": "Voyage - Home World",
                            "link": "https://youtu.be/8mJ6X0n7lvA",
                            "difficulty": "1"
                        },
                        "ID_1313": {
                            "title": "The Girl Who Stole The Stars",
                            "link": "https://youtu.be/b-InhU-vsIw",
                            "difficulty": "1"
                        }
                    }
                },
                "Chrono Trigger": {
                    "gameName": "Chrono Trigger",
                    "answers": ["chrono trigger"],
                    "songs": {
                        "ID_1314": {
                            "title": "Chrono Trigger",
                            "link": "https://youtu.be/aiOqsckDH7g",
                            "difficulty": "1"
                        },
                        "ID_1315": {
                            "title": "Peaceful Days",
                            "link": "https://youtu.be/1kD948Qg8sE",
                            "difficulty": "1"
                        },
                        "ID_1316": {
                            "title": "Memories of Green",
                            "link": "https://youtu.be/n-6jmvTuFVw",
                            "difficulty": "1"
                        },
                        "ID_1317": {
                            "title": "Gato's Song",
                            "link": "https://youtu.be/QCwC0Db75p8",
                            "difficulty": "1"
                        },
                        "ID_1318": {
                            "title": "Secret of the Forest",
                            "link": "https://youtu.be/x_ouo_Dlh0U",
                            "difficulty": "1"
                        },
                        "ID_1319": {
                            "title": "The Last Day of the World",
                            "link": "https://youtu.be/J-hy0x5mwu8",
                            "difficulty": "1"
                        },
                        "ID_1320": {
                            "title": "Bike Chase",
                            "link": "https://youtu.be/jh1o6Wr7eX4",
                            "difficulty": "1"
                        },
                        "ID_1321": {
                            "title": "At the End of Time",
                            "link": "https://youtu.be/dujuo7LqE-U",
                            "difficulty": "1"
                        },
                        "ID_1322": {
                            "title": "Depths of the Night",
                            "link": "https://youtu.be/whCBXWMCAYI",
                            "difficulty": "1"
                        },
                        "ID_1323": {
                            "title": "Corridor of Time",
                            "link": "https://youtu.be/rsvN18iAzb4",
                            "difficulty": "1"
                        },
                        "ID_1324": {
                            "title": "Outskirts of Time",
                            "link": "https://youtu.be/DiuMEmsNCV8",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Conker's Bad Fur Day": {
            "seriesName": "Conker's Bad Fur Day",
            "seriesColor": "red",
            "game": {
                "Conker's Bad Fur Day": {
                    "gameName": "Conker's Bad Fur Day",
                    "answers": ["conker's bad fur day", "conkers bad fur day", "conker"],
                    "songs": {
                        "ID_1068": {
                            "title": "Windy And Co.",
                            "link": "https://youtu.be/A8lEcwFfq7c",
                            "difficulty": "1"
                        },
                        "ID_1069": {
                            "title": "Sloprano",
                            "link": "https://youtu.be/XkgH8YY2E-4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Contra": {
            "seriesName": "Contra",
            "seriesColor": "red",
            "game": {
                "Contra": {
                    "gameName": "Contra",
                    "answers": ["contra"],
                    "songs": {
                        "ID_1876": {
                            "title": "Jungle Theme",
                            "link": "https://youtu.be/O04bPRzqEEk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Crash Bandicoot": {
            "seriesName": "Crash Bandicoot",
            "seriesColor": "red",
            "game": {
                "Crash Bandicoot": {
                    "gameName": "Crash Bandicoot",
                    "answers": ["crash bandicoot", "crash 1", "crash"],
                    "songs": {
                        "ID_1877": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/4i8qAZOu5-g",
                            "difficulty": "1"
                        }
                    }
                },
                "Crash Bandicoot 3: Warped": {
                    "gameName": "Crash Bandicoot 3: Warped",
                    "answers": ["crash bandicoot 3: warped", "crash bandicoot 3", "crash bandicoot 3 warped", "crash 3"],
                    "songs": {
                        "ID_1878": {
                            "title": "Pirates, And Waverunners",
                            "link": "https://youtu.be/UjkdCHakuDI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Croc": {
            "seriesName": "Croc",
            "seriesColor": "red",
            "game": {
                "Croc: Legend of the Gobbos": {
                    "gameName": "Croc: Legend of the Gobbos",
                    "answers": ["croc: legend of the gobbos", "croc", "croc legend of the gobbos", "legend of the gobbos"],
                    "songs": {
                        "ID_2236": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/bSQYzxj_qho",
                            "difficulty": "1"
                        },
                        "ID_2237": {
                            "title": "Volcano Island Map",
                            "link": "https://youtu.be/KKHQWzSSSHA",
                            "difficulty": "1"
                        },
                        "ID_2238": {
                            "title": "Cave 1",
                            "link": "https://youtu.be/w6wSoKVpIPY",
                            "difficulty": "1"
                        },
                        "ID_2239": {
                            "title": "Bonus Theme 1",
                            "link": "https://youtu.be/YI-6DIFdcc0",
                            "difficulty": "1"
                        },
                        "ID_2240": {
                            "title": "Volcano Island 5",
                            "link": "https://youtu.be/E68kqFQfgPw",
                            "difficulty": "1"
                        },
                        "ID_2241": {
                            "title": "Bonus Theme 3",
                            "link": "https://youtu.be/U-tOpxkOuWk",
                            "difficulty": "1"
                        },
                        "ID_2242": {
                            "title": "Snow Island Map",
                            "link": "https://youtu.be/OiIZ9WrgqJE",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Cuphead": {
            "seriesName": "Cuphead",
            "seriesColor": "red",
            "game": {
                "Cuphead": {
                    "gameName": "Cuphead",
                    "answers": ["cuphead"],
                    "songs": {
                        "ID_1879": {
                            "title": "Don't Deal With the Devil",
                            "link": "https://youtu.be/D6KXf-kXKIA",
                            "difficulty": "1"
                        },
                        "ID_1880": {
                            "title": "Elder Kettle",
                            "link": "https://youtu.be/clVx1bccHpU",
                            "difficulty": "1"
                        },
                        "ID_1881": {
                            "title": "Botanic Panic",
                            "link": "https://youtu.be/-uH2_sPJuLw",
                            "difficulty": "1"
                        },
                        "ID_1882": {
                            "title": "Treetop Trouble",
                            "link": "https://youtu.be/ubd3IRnogAk",
                            "difficulty": "1"
                        },
                        "ID_1883": {
                            "title": "Ruse Of An Ooze",
                            "link": "https://youtu.be/saZ0ZKE8sdo",
                            "difficulty": "1"
                        },
                        "ID_1884": {
                            "title": "Forest Follies",
                            "link": "https://youtu.be/UiOAyrrtbOs",
                            "difficulty": "1"
                        },
                        "ID_1885": {
                            "title": "Aviary Action",
                            "link": "https://youtu.be/wSRAdi1wVW0",
                            "difficulty": "1"
                        },
                        "ID_1886": {
                            "title": "Carnival Kerfuffle",
                            "link": "https://youtu.be/XORwfYUH23Y",
                            "difficulty": "1"
                        },
                        "ID_1887": {
                            "title": "Victory Tune",
                            "link": "https://youtu.be/LCdWr3Zrt5s",
                            "difficulty": "1"
                        },
                        "ID_1888": {
                            "title": "A Quick Break",
                            "link": "https://youtu.be/gADlgxrnAdQ",
                            "difficulty": "1"
                        },
                        "ID_1889": {
                            "title": "Funhouse Frazzle",
                            "link": "https://youtu.be/zeCwfZWNt70",
                            "difficulty": "1"
                        },
                        "ID_1890": {
                            "title": "Dramatic Fanatic",
                            "link": "https://youtu.be/foaw2arHA50",
                            "difficulty": "1"
                        },
                        "ID_1891": {
                            "title": "High Sea Hi-Jinx",
                            "link": "https://youtu.be/pt6R-_-aEzY",
                            "difficulty": "1"
                        },
                        "ID_1892": {
                            "title": "The King's Court",
                            "link": "https://youtu.be/KsReWI83IC8",
                            "difficulty": "1"
                        },
                        "ID_1893": {
                            "title": "Admission to Perdition",
                            "link": "https://youtu.be/h66Ys4BXCU8",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Danganronpa": {
            "seriesName": "Danganronpa",
            "seriesColor": "red",
            "game": {
                "Goodbye Despair": {
                    "gameName": "Goodbye Despair",
                    "answers": ["goodbye despair", "danganronpa 2", "super danganronpa", "super dangan ronpa", "super danganronpa 2", "super dangan ronpa 2", "sdr2", "dr2"],
                    "songs": {
                        "ID_188": {
                            "title": "Beautiful Ruin",
                            "link": "https://youtu.be/P-fMDaPFXME",
                            "difficulty": "1"
                        },
                        "ID_189": {
                            "title": "Beautiful Days [Piano Arrangement]",
                            "link": "https://youtu.be/mESVTvnIVnw",
                            "difficulty": "1"
                        },
                        "ID_190": {
                            "title": "Ms. Monomi's Practice Lesson",
                            "link": "https://youtu.be/emEg0zGS7KY",
                            "difficulty": "1"
                        },
                        "ID_191": {
                            "title": "Ikoroshia",
                            "link": "https://youtu.be/gCfpmW6s37U",
                            "difficulty": "1"
                        },
                        "ID_192": {
                            "title": "Tropical Despair",
                            "link": "https://youtu.be/zlCho8m4Zyc",
                            "difficulty": "1"
                        },
                        "ID_193": {
                            "title": "Third Island Theme",
                            "link": "https://youtu.be/dtsSngpkwKc",
                            "difficulty": "1"
                        },
                        "ID_194": {
                            "title": "Welcome DANGAN IsLand!! [OP Ver]",
                            "link": "https://youtu.be/5kHtDxCMa64",
                            "difficulty": "1"
                        },
                        "ID_195": {
                            "title": "P.T.A.",
                            "link": "https://youtu.be/hSdokoS408s",
                            "difficulty": "1"
                        },
                        "ID_196": {
                            "title": "A Dead End to the Ocean's Aroma",
                            "link": "https://youtu.be/uoh-Z_TS_xE",
                            "difficulty": "1"
                        },
                        "ID_197": {
                            "title": "Objection -CROSS SWORD-",
                            "link": "https://youtu.be/mymjF4AZJrg",
                            "difficulty": "1"
                        },
                        "ID_198": {
                            "title": "Suguikoroshia",
                            "link": "https://youtu.be/-tq5xapLVp0",
                            "difficulty": "1"
                        },
                        "ID_199": {
                            "title": "Class Trial - Future Part",
                            "link": "https://youtu.be/5F26Vt1Q2-E",
                            "difficulty": "1"
                        },
                        "ID_200": {
                            "title": "ANAGRAM.NET",
                            "link": "https://youtu.be/RK6R94HMgpM",
                            "difficulty": "1"
                        },
                        "ID_201": {
                            "title": "HYPER P.T.A.",
                            "link": "https://youtu.be/PnbAZMQ-jq0",
                            "difficulty": "1"
                        },
                        "ID_202": {
                            "title": "DIVE DRIVE",
                            "link": "https://youtu.be/HP7r1TVINsg",
                            "difficulty": "1"
                        },
                        "ID_203": {
                            "title": "HYPER ULTRA P.T.A.",
                            "link": "https://youtu.be/AyFrgi3emaM",
                            "difficulty": "1"
                        },
                        "ID_204": {
                            "title": "Fifth Island Theme",
                            "link": "https://youtu.be/PNY4F9im83k",
                            "difficulty": "1"
                        },
                        "ID_205": {
                            "title": "Alter Ego of the New World",
                            "link": "https://youtu.be/mxc-QIS5gbs",
                            "difficulty": "1"
                        },
                        "ID_206": {
                            "title": "Ekoroshia",
                            "link": "https://youtu.be/xjbgj2V6-o0",
                            "difficulty": "1"
                        },
                        "ID_207": {
                            "title": "Let Us Sing of a Hollow Victory",
                            "link": "https://youtu.be/yLaiZTOGTkA",
                            "difficulty": "1"
                        },
                        "ID_208": {
                            "title": "The Day Before the Future",
                            "link": "https://youtu.be/4ScJ__5-cso",
                            "difficulty": "1"
                        },
                        "ID_209": {
                            "title": "Searching the Twilight",
                            "link": "https://youtu.be/jzLJwzHI14s",
                            "difficulty": "1"
                        }
                    }
                },
                "Killing Harmony": {
                    "gameName": "Killing Harmony",
                    "answers": ["killing harmony", "danganronpa 3", "dangan ronpa 3", "danganronpa v3", "dr v3", "drv3", "dangan ronpa v3", "v3"],
                    "songs": {
                        "ID_210": {
                            "title": "EXISAL TRIBE",
                            "link": "https://youtu.be/ruP_SAaxiNQ",
                            "difficulty": "1"
                        },
                        "ID_211": {
                            "title": "Beautiful Lie",
                            "link": "https://youtu.be/-SnTpTE575M",
                            "difficulty": "1"
                        },
                        "ID_212": {
                            "title": "Anagram. NEW",
                            "link": "https://youtu.be/fv-fSZZ_iT0",
                            "difficulty": "1"
                        },
                        "ID_213": {
                            "title": "Living in a Lazy Parallel World",
                            "link": "https://youtu.be/H3klCeCLwww",
                            "difficulty": "1"
                        },
                        "ID_214": {
                            "title": "Rise of the Ultimates",
                            "link": "https://youtu.be/cQbDAuVbDZY",
                            "difficulty": "1"
                        },
                        "ID_215": {
                            "title": "Rise and Shine, Ursine!",
                            "link": "https://youtu.be/KOI5D928mvk",
                            "difficulty": "1"
                        },
                        "ID_216": {
                            "title": "Becoming Friends",
                            "link": "https://youtu.be/2bxYMupB5q0",
                            "difficulty": "1"
                        },
                        "ID_217": {
                            "title": "Nightmare in the Locker",
                            "link": "https://youtu.be/xD2XHF-XGY4",
                            "difficulty": "1"
                        },
                        "ID_218": {
                            "title": "NEW A.A. (Ch. 1)",
                            "link": "https://youtu.be/5KfnfvyPRtk",
                            "difficulty": "1"
                        },
                        "ID_219": {
                            "title": "Despair Searching",
                            "link": "https://youtu.be/FZLYRkiHk5I",
                            "difficulty": "1"
                        },
                        "ID_220": {
                            "title": "Cool Morning",
                            "link": "https://youtu.be/F7dhu57yeYU",
                            "difficulty": "1"
                        },
                        "ID_221": {
                            "title": "Death Road of Despair",
                            "link": "https://youtu.be/Ih0Tt10uFKI",
                            "difficulty": "1"
                        },
                        "ID_222": {
                            "title": "PSYCHE TAXI",
                            "link": "https://youtu.be/BNWw4Z9pB04",
                            "difficulty": "1"
                        },
                        "ID_223": {
                            "title": "Darkness Time",
                            "link": "https://youtu.be/gbZhzgIh-Ik",
                            "difficulty": "1"
                        },
                        "ID_224": {
                            "title": "Heaven of Almost Hell",
                            "link": "https://youtu.be/_F3p9pksJDs",
                            "difficulty": "1"
                        },
                        "ID_225": {
                            "title": "Clair de Lune",
                            "link": "https://youtu.be/nhnt4mLG92Y",
                            "difficulty": "1"
                        },
                        "ID_226": {
                            "title": "Spirit, Praise, and Beauty",
                            "link": "https://youtu.be/zwsGdXWv444",
                            "difficulty": "1"
                        },
                        "ID_227": {
                            "title": "DANGANVEGAS",
                            "link": "https://youtu.be/t-9yzPWIoLM",
                            "difficulty": "1"
                        },
                        "ID_228": {
                            "title": "Mind Mine",
                            "link": "https://youtu.be/2HNmTL-iju0",
                            "difficulty": "1"
                        },
                        "ID_229": {
                            "title": "Talent Selection",
                            "link": "https://youtu.be/cENv5uK8qLI",
                            "difficulty": "1"
                        },
                        "ID_230": {
                            "title": "Hope of Summer",
                            "link": "https://youtu.be/9jRL5WYhSeM",
                            "difficulty": "1"
                        },
                        "ID_231": {
                            "title": "Hope of Spring",
                            "link": "https://youtu.be/qzdP2cXtpT4",
                            "difficulty": "1"
                        },
                        "ID_232": {
                            "title": "Moon on the Water",
                            "link": "https://youtu.be/c3XeMcD154c",
                            "difficulty": "1"
                        },
                        "ID_233": {
                            "title": "Wonderful Story",
                            "link": "https://youtu.be/Z3hAsD8M4iM",
                            "difficulty": "1"
                        },
                        "ID_234": {
                            "title": "Let's Start the Killing Game",
                            "link": "https://youtu.be/apcEHrIMQN0",
                            "difficulty": "1"
                        },
                        "ID_235": {
                            "title": "HYPER NEW A.A. (Ch. 1)",
                            "link": "https://youtu.be/zaPGdlLgaEU",
                            "difficulty": "1"
                        },
                        "ID_236": {
                            "title": "Closing Argument V3",
                            "link": "https://youtu.be/bfM8rAq3RcA",
                            "difficulty": "1"
                        },
                        "ID_237": {
                            "title": "Climactic Re-Enactment V3",
                            "link": "https://youtu.be/en8PD91y0x8",
                            "difficulty": "1"
                        },
                        "ID_238": {
                            "title": "Danganronpa V3 (Full Version)",
                            "link": "https://youtu.be/Ewm8o6eEuDI",
                            "difficulty": "1"
                        },
                        "ID_239": {
                            "title": "V3 Gallery Music",
                            "link": "https://youtu.be/vTl_1FeyMSQ",
                            "difficulty": "1"
                        },
                        "ID_240": {
                            "title": "Debate Scrum",
                            "link": "https://youtu.be/KKMJYQar8cM",
                            "difficulty": "1"
                        },
                        "ID_241": {
                            "title": "Hangman's Gambit Ver 3.0",
                            "link": "https://youtu.be/ThfGLLTMSpo",
                            "difficulty": "1"
                        },
                        "ID_242": {
                            "title": "V3 Argument -Blade Lock-",
                            "link": "https://youtu.be/rJ4fXEs3M7Q",
                            "difficulty": "1"
                        },
                        "ID_243": {
                            "title": "Final a.A.",
                            "link": "https://youtu.be/Sgp39oFV6Js",
                            "difficulty": "1"
                        },
                        "ID_244": {
                            "title": "New World Order V3",
                            "link": "https://youtu.be/LlMAROvZ5gA",
                            "difficulty": "1"
                        },
                        "ID_245": {
                            "title": "Hope of Autumn",
                            "link": "https://youtu.be/HN3VTKpFbzE",
                            "difficulty": "1"
                        },
                        "ID_246": {
                            "title": "Hope of Winter",
                            "link": "https://youtu.be/H_Jh0kfrLY4",
                            "difficulty": "1"
                        },
                        "ID_247": {
                            "title": "Hope Searching",
                            "link": "https://youtu.be/5UYIS6enQCQ",
                            "difficulty": "1"
                        },
                        "ID_248": {
                            "title": "Hyper Final a.A.",
                            "link": "https://youtu.be/Baag6XirtJc",
                            "difficulty": "1"
                        },
                        "ID_249": {
                            "title": "Heartless Journey",
                            "link": "https://youtu.be/IIcIWQFYyx0",
                            "difficulty": "1"
                        },
                        "ID_250": {
                            "title": "Hyper Ultra New a.A. (Ch. 1)",
                            "link": "https://youtu.be/MBNZ20SzC6M",
                            "difficulty": "1"
                        },
                        "ID_251": {
                            "title": "Sing the Empty Truth",
                            "link": "https://youtu.be/bdvaPZl5kgQ",
                            "difficulty": "1"
                        },
                        "ID_252": {
                            "title": "Hyper Final Ultra a.A.",
                            "link": "https://youtu.be/on_ET4SUbx4",
                            "difficulty": "1"
                        },
                        "ID_253": {
                            "title": "Killing Game Completion Ceremony",
                            "link": "https://youtu.be/Rsic8ioDhSc",
                            "difficulty": "1"
                        },
                        "ID_254": {
                            "title": "Flashback Light",
                            "link": "https://youtu.be/jHRj--nz_IE",
                            "difficulty": "1"
                        },
                        "ID_255": {
                            "title": "Vote Slot",
                            "link": "https://youtu.be/IK8v3hkG5wM",
                            "difficulty": "1"
                        },
                        "ID_256": {
                            "title": "Beautiful Lie in the Virtual World",
                            "link": "https://youtu.be/5nsyLqVjRtY",
                            "difficulty": "1"
                        },
                        "ID_257": {
                            "title": "Despair Searching: Virtual World",
                            "link": "https://youtu.be/BM4eO7dEpps",
                            "difficulty": "1"
                        },
                        "ID_258": {
                            "title": "Island Ordeal",
                            "link": "https://youtu.be/XDXyKXZej0U",
                            "difficulty": "1"
                        },
                        "ID_259": {
                            "title": "School Ordeal",
                            "link": "https://youtu.be/zvi176Yj758",
                            "difficulty": "1"
                        },
                        "ID_260": {
                            "title": "Trial End",
                            "link": "https://youtu.be/sbtYgXjEhZY",
                            "difficulty": "1"
                        }
                    }
                },
                "Trigger Happy Havoc": {
                    "gameName": "Trigger Happy Havoc",
                    "answers": ["trigger happy havoc", "danganronpa", "dr1", "trigger happy havoc", "dr", "dangan ronpa"],
                    "songs": {
                        "ID_165": {
                            "title": "DANGANRONPA",
                            "link": "https://youtu.be/JeitvjG-dgI",
                            "difficulty": "1"
                        },
                        "ID_166": {
                            "title": "Beautiful Days",
                            "link": "https://youtu.be/m5K9CIf-XoQ",
                            "difficulty": "1"
                        },
                        "ID_167": {
                            "title": "Beautiful Dead",
                            "link": "https://youtu.be/3WZb20NinCs",
                            "difficulty": "1"
                        },
                        "ID_168": {
                            "title": "Class Trial (Dawn Edition)",
                            "link": "https://youtu.be/5FbB_obzUNA",
                            "difficulty": "1"
                        },
                        "ID_169": {
                            "title": "Mr. Monokuma's Tutoring",
                            "link": "https://youtu.be/zpkl30bTHhw",
                            "difficulty": "1"
                        },
                        "ID_170": {
                            "title": "BOX 15",
                            "link": "https://youtu.be/xOpHT6gZ0Rs",
                            "difficulty": "1"
                        },
                        "ID_171": {
                            "title": "DISTRUST",
                            "link": "https://youtu.be/7Sbcm-Hb8Sk",
                            "difficulty": "1"
                        },
                        "ID_172": {
                            "title": "Desire for Execution",
                            "link": "https://youtu.be/FHlKfNSiM2c",
                            "difficulty": "1"
                        },
                        "ID_173": {
                            "title": "Trial Underground",
                            "link": "https://youtu.be/tJlAxq2WcVI",
                            "difficulty": "1"
                        },
                        "ID_174": {
                            "title": "M.T.B.",
                            "link": "https://youtu.be/AYsaZnce3ig",
                            "difficulty": "1"
                        },
                        "ID_175": {
                            "title": "Discussion -BREAK-",
                            "link": "https://youtu.be/NJ7g-RQQYzg",
                            "difficulty": "1"
                        },
                        "ID_176": {
                            "title": "Despair Pollution Noise Music",
                            "link": "https://youtu.be/9hn3gBV-nYc",
                            "difficulty": "1"
                        },
                        "ID_177": {
                            "title": "SUPER M.T.B.",
                            "link": "https://youtu.be/fsqfRUCSELU",
                            "difficulty": "1"
                        },
                        "ID_178": {
                            "title": "Welcome to Despair Academy",
                            "link": "https://youtu.be/pvXUPQDvpd4",
                            "difficulty": "1"
                        },
                        "ID_179": {
                            "title": "Beautiful Morning",
                            "link": "https://youtu.be/-fxT8Ev1AvU",
                            "difficulty": "1"
                        },
                        "ID_180": {
                            "title": "Climax Reasoning",
                            "link": "https://youtu.be/e0dZnWkzv2U",
                            "difficulty": "1"
                        },
                        "ID_181": {
                            "title": "Mr. Monokuma's Lesson",
                            "link": "https://youtu.be/ELfxtdEakhk",
                            "difficulty": "1"
                        },
                        "ID_182": {
                            "title": "SUPER FINAL M.T.B.",
                            "link": "https://youtu.be/kIwKwtYebcE",
                            "difficulty": "1"
                        },
                        "ID_183": {
                            "title": "BOX 16",
                            "link": "https://youtu.be/p4z_RMGB414",
                            "difficulty": "1"
                        },
                        "ID_184": {
                            "title": "Discussion -HEAT UP-",
                            "link": "https://youtu.be/HgOs-J9Pytc",
                            "difficulty": "1"
                        },
                        "ID_185": {
                            "title": "Flashing Anagram",
                            "link": "https://youtu.be/cTrVBMsVPb0",
                            "difficulty": "1"
                        },
                        "ID_186": {
                            "title": "New World Order",
                            "link": "https://youtu.be/m3EHCTP3jic",
                            "difficulty": "1"
                        },
                        "ID_187": {
                            "title": "Goodbye, Despair Academy",
                            "link": "https://youtu.be/nMTloVZ-QLo",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Death Stranding": {
            "seriesName": "Death Stranding",
            "seriesColor": "red",
            "game": {
                "Death Stranding": {
                    "gameName": "Death Stranding",
                    "answers": ["death stranding"],
                    "songs": {
                        "ID_938": {
                            "title": "BB's Theme",
                            "link": "https://youtu.be/6_l4ltmDgr4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "DELTARUNE": {
            "seriesName": "DELTARUNE",
            "seriesColor": "red",
            "game": {
                "DELTARUNE: Chapter 1": {
                    "gameName": "DELTARUNE: Chapter 1",
                    "answers": ["deltarune: chapter 1", "deltarune", "deltarune chapter 1", "delta rune", "undertale 2"],
                    "songs": {
                        "ID_503": {
                            "title": "ANOTHER HIM",
                            "link": "https://youtu.be/NNYfXTUTuyA",
                            "difficulty": "1"
                        },
                        "ID_504": {
                            "title": "Beginning",
                            "link": "https://youtu.be/OHhgmjijRWg",
                            "difficulty": "1"
                        },
                        "ID_505": {
                            "title": "School",
                            "link": "https://youtu.be/MVTmvDQwX2k",
                            "difficulty": "1"
                        },
                        "ID_506": {
                            "title": "Susie",
                            "link": "https://youtu.be/M-9qmTg_Xsc",
                            "difficulty": "1"
                        },
                        "ID_507": {
                            "title": "The Door",
                            "link": "https://youtu.be/VuM5pBqV4fM",
                            "difficulty": "1"
                        },
                        "ID_508": {
                            "title": "Cliffs",
                            "link": "https://youtu.be/ayuCfK1218s",
                            "difficulty": "1"
                        },
                        "ID_509": {
                            "title": "The Chase",
                            "link": "https://youtu.be/m9vD-_xYUwI",
                            "difficulty": "1"
                        },
                        "ID_510": {
                            "title": "The Legend",
                            "link": "https://youtu.be/CDH2MjvFGC0",
                            "difficulty": "1"
                        },
                        "ID_511": {
                            "title": "Lancer",
                            "link": "https://youtu.be/GhUEIy9j3b4",
                            "difficulty": "1"
                        },
                        "ID_512": {
                            "title": "Rude Buster",
                            "link": "https://youtu.be/xYVhUjee-oM",
                            "difficulty": "1"
                        },
                        "ID_513": {
                            "title": "Empty Town",
                            "link": "https://youtu.be/MjpukFi_CW0",
                            "difficulty": "1"
                        },
                        "ID_514": {
                            "title": "Weird Birds",
                            "link": "https://youtu.be/HlcNLYnhb0w",
                            "difficulty": "1"
                        },
                        "ID_515": {
                            "title": "Field of Hopes and Dreams",
                            "link": "https://youtu.be/PhhGEA_317w",
                            "difficulty": "1"
                        },
                        "ID_516": {
                            "title": "Fanfare (From Rose of Winter)",
                            "link": "https://youtu.be/_HxWaQhb7zc",
                            "difficulty": "1"
                        },
                        "ID_517": {
                            "title": "Lantern",
                            "link": "https://youtu.be/r9Wc9a2uD3c",
                            "difficulty": "1"
                        },
                        "ID_518": {
                            "title": "I'm Very Bad",
                            "link": "https://youtu.be/YetdpAvNPEc",
                            "difficulty": "1"
                        },
                        "ID_519": {
                            "title": "Checker Dance",
                            "link": "https://youtu.be/FfaYudbw9hA",
                            "difficulty": "1"
                        },
                        "ID_520": {
                            "title": "Quiet Autumn",
                            "link": "https://youtu.be/Lyswkjw3U9Q",
                            "difficulty": "1"
                        },
                        "ID_521": {
                            "title": "Scarlet Forest",
                            "link": "https://youtu.be/xxSpXQDOcAo",
                            "difficulty": "1"
                        },
                        "ID_522": {
                            "title": "Thrash Machine",
                            "link": "https://youtu.be/ONlbHu7aDNI",
                            "difficulty": "1"
                        },
                        "ID_523": {
                            "title": "Vs. Lancer",
                            "link": "https://youtu.be/gQZxGRucsMQ",
                            "difficulty": "1"
                        },
                        "ID_524": {
                            "title": "Basement",
                            "link": "https://youtu.be/9y8UXb7KfgU",
                            "difficulty": "1"
                        },
                        "ID_525": {
                            "title": "Imminent Death",
                            "link": "https://youtu.be/nedqvk48HWo",
                            "difficulty": "1"
                        },
                        "ID_526": {
                            "title": "Vs. Susie",
                            "link": "https://youtu.be/SBHgJzYNR6s",
                            "difficulty": "1"
                        },
                        "ID_527": {
                            "title": "Card Castle",
                            "link": "https://youtu.be/Euc8VllYbOU",
                            "difficulty": "1"
                        },
                        "ID_528": {
                            "title": "Rouxls Kaard",
                            "link": "https://youtu.be/5LcT1OubJsE",
                            "difficulty": "1"
                        },
                        "ID_529": {
                            "title": "April 2012",
                            "link": "https://youtu.be/Y5EvDuQoF9E",
                            "difficulty": "1"
                        },
                        "ID_530": {
                            "title": "Hip Shop",
                            "link": "https://youtu.be/Taxlj7nG4RY",
                            "difficulty": "1"
                        },
                        "ID_531": {
                            "title": "Gallery",
                            "link": "https://youtu.be/pOWoeXfNpXU",
                            "difficulty": "1"
                        },
                        "ID_532": {
                            "title": "Chaos King",
                            "link": "https://youtu.be/fFsTQCSYY4Q",
                            "difficulty": "1"
                        },
                        "ID_533": {
                            "title": "Darkness Falls",
                            "link": "https://youtu.be/FSn4p1Xx7NU",
                            "difficulty": "1"
                        },
                        "ID_534": {
                            "title": "The Circus",
                            "link": "https://youtu.be/tpIkEnzGd5U",
                            "difficulty": "1"
                        },
                        "ID_535": {
                            "title": "THE WORLD REVOLVING",
                            "link": "https://youtu.be/8gkTtNefxws",
                            "difficulty": "1"
                        },
                        "ID_536": {
                            "title": "Friendship",
                            "link": "https://youtu.be/l5D6Nfe7AMs",
                            "difficulty": "1"
                        },
                        "ID_537": {
                            "title": "THE HOLY",
                            "link": "https://youtu.be/1lHuP00QbMU",
                            "difficulty": "1"
                        },
                        "ID_538": {
                            "title": "Your Power",
                            "link": "https://youtu.be/hLG_tNvSHek",
                            "difficulty": "1"
                        },
                        "ID_539": {
                            "title": "A Town Called Hometown",
                            "link": "https://youtu.be/HMLrsPnk7dg",
                            "difficulty": "1"
                        },
                        "ID_540": {
                            "title": "You Can Always Come Home",
                            "link": "https://youtu.be/LJ2XM3fpVQk",
                            "difficulty": "1"
                        },
                        "ID_541": {
                            "title": "Don't Forget",
                            "link": "https://youtu.be/PEPbUhHhECU",
                            "difficulty": "1"
                        },
                        "ID_542": {
                            "title": "Before the Story",
                            "link": "https://youtu.be/niSJhhpBqjU",
                            "difficulty": "1"
                        },
                        "ID_543": {
                            "title": "Dogtarune / Dogcheck",
                            "link": "https://youtu.be/SDrBW7QVL-A",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Diddy Kong Racing": {
            "seriesName": "Diddy Kong Racing",
            "seriesColor": "red",
            "game": {
                "Diddy Kong Racing": {
                    "gameName": "Diddy Kong Racing",
                    "answers": ["diddy kong racing", "dk racing"],
                    "songs": {
                        "ID_1897": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/pwU_WueGQQM",
                            "difficulty": "1"
                        },
                        "ID_1898": {
                            "title": "Character Select",
                            "link": "https://youtu.be/IsrddmREt28",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Dig Dug": {
            "seriesName": "Dig Dug",
            "seriesColor": "red",
            "game": {
                "Dig Dug": {
                    "gameName": "Dig Dug",
                    "answers": ["dig dug"],
                    "songs": {
                        "ID_1841": {
                            "title": "Stage Theme",
                            "link": "https://youtu.be/tgIBxq7g7e0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Doki Doki Literature Club!": {
            "seriesName": "Doki Doki Literature Club!",
            "seriesColor": "red",
            "game": {
                "Doki Doki Literature Club!": {
                    "gameName": "Doki Doki Literature Club!",
                    "answers": ["doki doki literature club!", "doki doki", "doki doki literature club", "ddlc"],
                    "songs": {
                        "ID_2245": {
                            "title": "Doki Doki Literature Club! (Main Theme)",
                            "link": "https://youtu.be/BFSWlDpA6C4",
                            "difficulty": "1"
                        },
                        "ID_2246": {
                            "title": "Dreams Of Love and Literature",
                            "link": "https://youtu.be/rsBeCQA93-Q",
                            "difficulty": "1"
                        },
                        "ID_2247": {
                            "title": "Play With Me",
                            "link": "https://youtu.be/BUKN_ySpqU4",
                            "difficulty": "1"
                        },
                        "ID_2248": {
                            "title": "Poem Panic!",
                            "link": "https://youtu.be/7JDlEpvE-cs",
                            "difficulty": "1"
                        },
                        "ID_2249": {
                            "title": "My Feelings",
                            "link": "https://youtu.be/IgRUaVHq1Hs",
                            "difficulty": "1"
                        },
                        "ID_2250": {
                            "title": "My Confession",
                            "link": "https://youtu.be/GAhiW1Z3GJY",
                            "difficulty": "1"
                        },
                        "ID_2251": {
                            "title": "Just Monika.",
                            "link": "https://youtu.be/JC0mFHN7r2c",
                            "difficulty": "1"
                        },
                        "ID_2252": {
                            "title": "Your Reality (Credits)",
                            "link": "https://youtu.be/CAL4WMpBNs0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Donkey Kong": {
            "seriesName": "Donkey Kong",
            "seriesColor": "red",
            "game": {
                "Donkey Kong 64": {
                    "gameName": "Donkey Kong 64",
                    "answers": ["donkey kong 64", "dk64", "dk 64"],
                    "songs": {
                        "ID_1070": {
                            "title": "DK Rap",
                            "link": "https://youtu.be/8KT7jcB72fQ",
                            "difficulty": "1"
                        }
                    }
                },
                "Donkey Kong Country": {
                    "gameName": "Donkey Kong Country",
                    "answers": ["donkey kong country", "super donkey kong", "dkc", "dk country"],
                    "songs": {
                        "ID_1899": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/cscrBLh8mE8",
                            "difficulty": "1"
                        },
                        "ID_1900": {
                            "title": "Bonus Room Blitz",
                            "link": "https://youtu.be/HQFKCSfC250",
                            "difficulty": "1"
                        },
                        "ID_1901": {
                            "title": "Aquatic Ambiance",
                            "link": "https://youtu.be/wAPpVplHiDE",
                            "difficulty": "1"
                        },
                        "ID_1902": {
                            "title": "Gang-Plank Galleon",
                            "link": "https://youtu.be/lS7_tcwsj4E",
                            "difficulty": "1"
                        },
                        "ID_1903": {
                            "title": "The Credits Concerto",
                            "link": "https://youtu.be/QSwbr0voBtM",
                            "difficulty": "1"
                        }
                    }
                },
                "Donkey Kong Country 2: Diddy's Kong Quest": {
                    "gameName": "Donkey Kong Country 2: Diddy's Kong Quest",
                    "answers": ["donkey kong country 2: diddy's kong quest", "super donkey kong 2", "dkc2", "dk country 2", "dkc 2"],
                    "songs": {
                        "ID_1904": {
                            "title": "Stickerbush Symphony",
                            "link": "https://youtu.be/mdPlcKg-qFs",
                            "difficulty": "1"
                        },
                        "ID_1905": {
                            "title": "Forest Interlude",
                            "link": "https://youtu.be/x5EgRk0mQM8",
                            "difficulty": "1"
                        },
                        "ID_1906": {
                            "title": "Bayou Boogie",
                            "link": "https://youtu.be/LLQMuws1kUw",
                            "difficulty": "1"
                        },
                        "ID_1907": {
                            "title": "Mining Melancholy",
                            "link": "https://youtu.be/F8l3XNtu1nQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "DOOM": {
            "seriesName": "DOOM",
            "seriesColor": "red",
            "game": {
                "DOOM": {
                    "gameName": "DOOM",
                    "answers": ["doom"],
                    "songs": {
                        "ID_1333": {
                            "title": "At Doom's Gate",
                            "link": "https://youtu.be/BSsfjHCFosw",
                            "difficulty": "1"
                        }
                    }
                },
                "DOOM (2016)": {
                    "gameName": "DOOM (2016)",
                    "answers": ["doom (2016)", "doom 2016", "doom"],
                    "songs": {
                        "ID_1332": {
                            "title": "Rip & Tear",
                            "link": "https://youtu.be/vyA1z2A-lhU",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Dr. Mario": {
            "seriesName": "Dr. Mario",
            "seriesColor": "red",
            "game": {
                "Dr. Mario": {
                    "gameName": "Dr. Mario",
                    "answers": ["dr. mario", "dr mario", "doctor mario"],
                    "songs": {
                        "ID_1908": {
                            "title": "Fever",
                            "link": "https://youtu.be/aiuFBFPC7YQ",
                            "difficulty": "1"
                        },
                        "ID_1909": {
                            "title": "Chill",
                            "link": "https://youtu.be/TXOZRsUXVuw",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "DuckTales": {
            "seriesName": "DuckTales",
            "seriesColor": "red",
            "game": {
                "DuckTales": {
                    "gameName": "DuckTales",
                    "answers": ["ducktales"],
                    "songs": {
                        "ID_1086": {
                            "title": "Duck Tales Theme",
                            "link": "https://youtu.be/uJSV_wo9CY0",
                            "difficulty": "1"
                        },
                        "ID_1087": {
                            "title": "The Amazon Theme",
                            "link": "https://youtu.be/1eG7rwvpu4E",
                            "difficulty": "1"
                        },
                        "ID_1088": {
                            "title": "The Moon Theme",
                            "link": "https://youtu.be/KF32DRg9opA",
                            "difficulty": "1"
                        }
                    }
                },
                "DuckTales: Remastered": {
                    "gameName": "DuckTales: Remastered",
                    "answers": ["ducktales: remastered", "ducktales remake", "ducktales remastered", "ducktales"],
                    "songs": {
                        "ID_1910": {
                            "title": "Moon Theme",
                            "link": "https://youtu.be/YHEifuLCSIY",
                            "difficulty": "1"
                        },
                        "ID_1911": {
                            "title": "The Amazon",
                            "link": "https://youtu.be/sqhO9coG_vk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Eschatos": {
            "seriesName": "Eschatos",
            "seriesColor": "red",
            "game": {
                "Eschatos": {
                    "gameName": "Eschatos",
                    "answers": ["eschatos"],
                    "songs": {
                        "ID_901": {
                            "title": "POINT OF NO RETURN",
                            "link": "https://youtu.be/IOSRTILzl1s",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "F-Zero": {
            "seriesName": "F-Zero",
            "seriesColor": "red",
            "game": {
                "F-Zero": {
                    "gameName": "F-Zero",
                    "answers": ["f-zero", "f zero", "fzero"],
                    "songs": {
                        "ID_1912": {
                            "title": "Mute City",
                            "link": "https://youtu.be/QDLG1bosqtg",
                            "difficulty": "1"
                        },
                        "ID_1913": {
                            "title": "Big Blue",
                            "link": "https://youtu.be/-A-tme8wyOk",
                            "difficulty": "1"
                        },
                        "ID_1914": {
                            "title": "Port Town",
                            "link": "https://youtu.be/hiDH9zKfciw",
                            "difficulty": "1"
                        }
                    }
                },
                "F-Zero GX": {
                    "gameName": "F-Zero GX",
                    "answers": ["f-zero gx", "f zero gx", "fzero gx"],
                    "songs": {
                        "ID_1915": {
                            "title": "Captain Falcon's Theme",
                            "link": "https://youtu.be/ZOa5DB_iAMs",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Fallout": {
            "seriesName": "Fallout",
            "seriesColor": "red",
            "game": {
                "Fallout New Vegas": {
                    "gameName": "Fallout New Vegas",
                    "answers": ["fallout new vegas", "new vegas", "fonv", "fallout nv"],
                    "songs": {
                        "ID_1483": {
                            "title": "Main Title",
                            "link": "https://youtu.be/l7eeEprQ0x4",
                            "difficulty": "1"
                        },
                        "ID_1484": {
                            "title": "Wasteland Justice",
                            "link": "https://youtu.be/RzigShxN3zc",
                            "difficulty": "1"
                        },
                        "ID_1485": {
                            "title": "Dam Nation",
                            "link": "https://youtu.be/5SmK00aLqnU",
                            "difficulty": "1"
                        },
                        "ID_1486": {
                            "title": "Begin Again",
                            "link": "https://youtu.be/YvnFsB622jc",
                            "difficulty": "1"
                        },
                        "ID_1487": {
                            "title": "Battle 3",
                            "link": "https://youtu.be/2HE0NEMzmas",
                            "difficulty": "1"
                        },
                        "ID_1488": {
                            "title": "Hoover Dam (Caesar)",
                            "link": "https://youtu.be/rTy1NKv6PM8",
                            "difficulty": "1"
                        },
                        "ID_1489": {
                            "title": "ED-E Battle Music",
                            "link": "https://youtu.be/rKAk6smXcwg",
                            "difficulty": "1"
                        },
                        "ID_1490": {
                            "title": "Big Iron",
                            "link": "https://youtu.be/zzICMIu5zFY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Far Cry": {
            "seriesName": "Far Cry",
            "seriesColor": "red",
            "game": {
                "Far Cry 3": {
                    "gameName": "Far Cry 3",
                    "answers": ["far cry 3", "fc3"],
                    "songs": {
                        "ID_1084": {
                            "title": "Falling Into a Dream",
                            "link": "https://youtu.be/pLmAdCWzunM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "FEZ": {
            "seriesName": "FEZ",
            "seriesColor": "red",
            "game": {
                "FEZ": {
                    "gameName": "FEZ",
                    "answers": ["fez"],
                    "songs": {
                        "ID_1071": {
                            "title": "Adventure",
                            "link": "https://youtu.be/76GnOwHorn0",
                            "difficulty": "1"
                        },
                        "ID_1072": {
                            "title": "Home",
                            "link": "https://youtu.be/TA-SGTmKnP0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "FINAL FANTASY": {
            "seriesName": "FINAL FANTASY",
            "seriesColor": "red",
            "game": {
                "FINAL FANTASY": {
                    "gameName": "FINAL FANTASY",
                    "answers": ["final fantasy", "ff", "ff1"],
                    "songs": {
                        "ID_1916": {
                            "title": "Battle Theme",
                            "link": "https://youtu.be/h1dhk-H11Uc",
                            "difficulty": "1"
                        },
                        "ID_1917": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/0GexOi5179o",
                            "difficulty": "1"
                        },
                        "ID_1918": {
                            "title": "Prelude",
                            "link": "https://youtu.be/8wZoJQABWI8",
                            "difficulty": "1"
                        },
                        "ID_1919": {
                            "title": "Victory!",
                            "link": "https://youtu.be/xytYFaJQDXM",
                            "difficulty": "1"
                        }
                    }
                },
                "FINAL FANTASY VI": {
                    "gameName": "FINAL FANTASY VI",
                    "answers": ["final fantasy vi", "ffvi", "ff6", "final fantasy 6"],
                    "songs": {
                        "ID_1051": {
                            "title": "Dancing Mad",
                            "link": "https://youtu.be/JbXVNKtmWnc",
                            "difficulty": "1"
                        },
                        "ID_1300": {
                            "title": "Terra's Theme",
                            "link": "https://youtu.be/a6t_uyg_pF8",
                            "difficulty": "1"
                        },
                        "ID_1301": {
                            "title": "Forever Rachel",
                            "link": "https://youtu.be/g_aX6I0xLbo",
                            "difficulty": "1"
                        }
                    }
                },
                "FINAL FANTASY VII": {
                    "gameName": "FINAL FANTASY VII",
                    "answers": ["final fantasy vii", "ffvii", "ff7", "final fantasy 7"],
                    "songs": {
                        "ID_1049": {
                            "title": "One Winged Angel",
                            "link": "https://youtu.be/qDD-iYkHBhc",
                            "difficulty": "1"
                        },
                        "ID_1050": {
                            "title": "J-E-N-O-V-A",
                            "link": "https://youtu.be/J6GrZYE2il0",
                            "difficulty": "1"
                        }
                    }
                },
                "FINAL FANTASY VII REMAKE": {
                    "gameName": "FINAL FANTASY VII REMAKE",
                    "answers": ["final fantasy vii remake", "ffviir", "ffvii", "ff7r", "ff7", "final fantasy 7 remake", "final fantasy 7", "final fantasy vii"],
                    "songs": {
                        "ID_1047": {
                            "title": "Let The Battles Begin!!",
                            "link": "https://youtu.be/vOC_tuuWSXo",
                            "difficulty": "1"
                        },
                        "ID_1048": {
                            "title": "One Winged Angel Rebirth",
                            "link": "https://youtu.be/eLGn_dVA3ow",
                            "difficulty": "1"
                        }
                    }
                },
                "FINAL FANTASY X": {
                    "gameName": "FINAL FANTASY X",
                    "answers": ["final fantasy x", "ffx", "ff x", "ff10", "ff 10", "final fantasy 10"],
                    "songs": {
                        "ID_1302": {
                            "title": "Spiran Scenery",
                            "link": "https://youtu.be/U5A3f5K7NwA",
                            "difficulty": "1"
                        },
                        "ID_1303": {
                            "title": "To Zanarkand",
                            "link": "https://youtu.be/5lP_anjF6rA",
                            "difficulty": "1"
                        },
                        "ID_1304": {
                            "title": "Normal Battle",
                            "link": "https://youtu.be/6RsawtJ6Kc8",
                            "difficulty": "1"
                        },
                        "ID_1305": {
                            "title": "Enemy Attack",
                            "link": "https://youtu.be/HQfDsVhS9BA",
                            "difficulty": "1"
                        },
                        "ID_1306": {
                            "title": "Silence Before the Storm",
                            "link": "https://youtu.be/vmHBqGG7TN0",
                            "difficulty": "1"
                        }
                    }
                },
                "FINAL FANTASY XIII-2": {
                    "gameName": "FINAL FANTASY XIII-2",
                    "answers": ["final fantasy xiii-2", "final fantasy 13 2", "ff 13 2", "ff13 2", "final fantasy 13-2", "ff13-2", "ff 13-2"],
                    "songs": {
                        "ID_1920": {
                            "title": "Noel's Theme ~The Last Travel~",
                            "link": "https://youtu.be/AcLetgnrcIo",
                            "difficulty": "1"
                        },
                        "ID_1921": {
                            "title": "Labyrinth Of Chaos",
                            "link": "https://youtu.be/ZfCzCGAKnc0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Fire Emblem": {
            "seriesName": "Fire Emblem",
            "seriesColor": "red",
            "game": {
                "Fire Emblem Awakening": {
                    "gameName": "Fire Emblem Awakening",
                    "answers": ["fire emblem awakening", "fe awakening", "awakening"],
                    "songs": {
                        "ID_1955": {
                            "title": "Don't Speak Her Name!",
                            "link": "https://youtu.be/aFY5TPI-kaU",
                            "difficulty": "1"
                        },
                        "ID_1956": {
                            "title": "Id ~ Serenity",
                            "link": "https://youtu.be/ss8_Om7trGs",
                            "difficulty": "1"
                        },
                        "ID_1957": {
                            "title": "Prelude",
                            "link": "https://youtu.be/q0mjPSVEHfQ",
                            "difficulty": "1"
                        },
                        "ID_1958": {
                            "title": "Prelude ~ Ablaze",
                            "link": "https://youtu.be/9MgVua9KYuI",
                            "difficulty": "1"
                        },
                        "ID_1959": {
                            "title": "Assault ~ Galvanised",
                            "link": "https://youtu.be/1XIaYj88MF0",
                            "difficulty": "1"
                        },
                        "ID_1960": {
                            "title": "Oh, it's not so bad, Lissa. Just a healthy little walk!",
                            "link": "https://youtu.be/2H_3HRms1AE",
                            "difficulty": "1"
                        },
                        "ID_1961": {
                            "title": "Duty",
                            "link": "https://youtu.be/KP9-KvfBzyE",
                            "difficulty": "1"
                        },
                        "ID_1962": {
                            "title": "Duty ~ Ablaze",
                            "link": "https://youtu.be/W7H05bSiQRE",
                            "difficulty": "1"
                        },
                        "ID_1963": {
                            "title": "Destiny",
                            "link": "https://youtu.be/ydNpDTfTQJg",
                            "difficulty": "1"
                        },
                        "ID_1964": {
                            "title": "Destiny ~ Ablaze",
                            "link": "https://youtu.be/ydNpDTfTQJg",
                            "difficulty": "1"
                        },
                        "ID_1965": {
                            "title": "......",
                            "link": "https://youtu.be/bIO-wdpjEu0",
                            "difficulty": "1"
                        },
                        "ID_1966": {
                            "title": "Divine Decree",
                            "link": "https://youtu.be/aFY5TPI-kaU",
                            "difficulty": "1"
                        },
                        "ID_1967": {
                            "title": "Divine Decree ~ Ablaze",
                            "link": "https://youtu.be/d-4N_cSU8Ug",
                            "difficulty": "1"
                        },
                        "ID_1968": {
                            "title": "Conquest",
                            "link": "https://youtu.be/-P4yx4sVvG0",
                            "difficulty": "1"
                        },
                        "ID_1969": {
                            "title": "Conquest ~ Ablaze",
                            "link": "https://youtu.be/LGRo0XtbdyY",
                            "difficulty": "1"
                        },
                        "ID_1970": {
                            "title": "Chaos",
                            "link": "https://youtu.be/utoMp0KVYx4",
                            "difficulty": "1"
                        },
                        "ID_1971": {
                            "title": "Chaos ~ Ablaze",
                            "link": "https://youtu.be/uLz17tNvDhk",
                            "difficulty": "1"
                        },
                        "ID_1972": {
                            "title": "Annihilation",
                            "link": "https://youtu.be/hqhmY0e5DD8",
                            "difficulty": "1"
                        },
                        "ID_1973": {
                            "title": "Annihilation ~ Galvinised",
                            "link": "https://youtu.be/KiWqIabAjOs",
                            "difficulty": "1"
                        },
                        "ID_1974": {
                            "title": "Id ~ Purpose",
                            "link": "https://youtu.be/Dsi541fat7w",
                            "difficulty": "1"
                        },
                        "ID_1975": {
                            "title": "Main Theme (Spa ~ Voiceless)",
                            "link": "https://youtu.be/emhvtLH8Jwk",
                            "difficulty": "1"
                        },
                        "ID_1976": {
                            "title": "Main Theme (Title)",
                            "link": "https://youtu.be/bALt6Lm9ZXA",
                            "difficulty": "1"
                        }
                    }
                },
                "Fire Emblem Blazing Sword": {
                    "gameName": "Fire Emblem Blazing Sword",
                    "answers": ["fire emblem blazing sword", "fe blazing sword", "blazing sword"],
                    "songs": {
                        "ID_1980": {
                            "title": "Strike!",
                            "link": "https://youtu.be/meq4IE_3O5M",
                            "difficulty": "1"
                        },
                        "ID_1981": {
                            "title": "Winning Road",
                            "link": "https://youtu.be/LYYfWswGZaw",
                            "difficulty": "1"
                        }
                    }
                },
                "Fire Emblem Gaiden": {
                    "gameName": "Fire Emblem Gaiden",
                    "answers": ["fire emblem gaiden", "fe gaiden", "gaiden"],
                    "songs": {
                        "ID_1977": {
                            "title": "With Mila's Divine Protection",
                            "link": "https://youtu.be/ikH3Gn4PdrI",
                            "difficulty": "1"
                        },
                        "ID_1978": {
                            "title": "Fight 1",
                            "link": "https://youtu.be/CL75LZkQ57E",
                            "difficulty": "1"
                        }
                    }
                },
                "Fire Emblem Three Houses": {
                    "gameName": "Fire Emblem Three Houses",
                    "answers": ["fire emblem three houses", "fe three houses", "three houses"],
                    "songs": {
                        "ID_1979": {
                            "title": "God Shattering Star",
                            "link": "https://youtu.be/0WMYL6HuUoI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Friday Night Funkin'": {
            "seriesName": "Friday Night Funkin'",
            "seriesColor": "red",
            "game": {
                "FNF Smoke 'Em Out Struggle": {
                    "gameName": "FNF Smoke 'Em Out Struggle",
                    "answers": ["fnf smoke 'em out struggle", "fnf", "friday night", "friday night funkin", "garcello", "garcello mod"],
                    "songs": {
                        "ID_1450": {
                            "title": "Headache",
                            "link": "https://youtu.be/TdjD6YCPqJk",
                            "difficulty": "1"
                        },
                        "ID_1451": {
                            "title": "Nerves",
                            "link": "https://youtu.be/82FuwEbq6gA",
                            "difficulty": "1"
                        },
                        "ID_1452": {
                            "title": "Release",
                            "link": "https://youtu.be/iLgk9xKHeBA",
                            "difficulty": "1"
                        },
                        "ID_1453": {
                            "title": "Fading",
                            "link": "https://youtu.be/DmUdZ3P97HE",
                            "difficulty": "1"
                        }
                    }
                },
                "Friday Night Funkin'": {
                    "gameName": "Friday Night Funkin'",
                    "answers": ["friday night funkin'", "fnf", "friday night", "friday night funkin"],
                    "songs": {
                        "ID_1429": {
                            "title": "Bopeebo",
                            "link": "https://youtu.be/V60N12UFNN4",
                            "difficulty": "1"
                        },
                        "ID_1430": {
                            "title": "Fresh",
                            "link": "https://youtu.be/mx82b-3A--Q",
                            "difficulty": "1"
                        },
                        "ID_1431": {
                            "title": "Dad Battle",
                            "link": "https://youtu.be/w0WyKTSuX4U",
                            "difficulty": "1"
                        },
                        "ID_1432": {
                            "title": "Spookeez",
                            "link": "https://youtu.be/EiNwUpco4OI",
                            "difficulty": "1"
                        },
                        "ID_1433": {
                            "title": "South",
                            "link": "https://youtu.be/_Q7J97WD3Gg",
                            "difficulty": "1"
                        },
                        "ID_1434": {
                            "title": "Pico",
                            "link": "https://youtu.be/kaNuYpHWcac",
                            "difficulty": "1"
                        },
                        "ID_1435": {
                            "title": "Monster",
                            "link": "https://youtu.be/NQSkjR7P3_A",
                            "difficulty": "1"
                        },
                        "ID_1436": {
                            "title": "Philly Nice",
                            "link": "https://youtu.be/fwZ8jLFFL1Y",
                            "difficulty": "1"
                        },
                        "ID_1437": {
                            "title": "Blammed",
                            "link": "https://youtu.be/aQ2tXk-2UEg",
                            "difficulty": "1"
                        },
                        "ID_1438": {
                            "title": "Satin Panties",
                            "link": "https://youtu.be/YzJKStx9IyU",
                            "difficulty": "1"
                        },
                        "ID_1439": {
                            "title": "High",
                            "link": "https://youtu.be/OIsp8KrwSVY",
                            "difficulty": "1"
                        },
                        "ID_1440": {
                            "title": "M.I.L.F",
                            "link": "https://youtu.be/dOPrN6aJ7TI",
                            "difficulty": "1"
                        },
                        "ID_1441": {
                            "title": "Eggnog",
                            "link": "https://youtu.be/jQ4QBD-Cu5I",
                            "difficulty": "1"
                        },
                        "ID_1442": {
                            "title": "Cocoa",
                            "link": "https://youtu.be/DWdMu4X4jQ0",
                            "difficulty": "1"
                        },
                        "ID_1443": {
                            "title": "Winter Horrorland",
                            "link": "https://youtu.be/7XplMpcWVgo",
                            "difficulty": "1"
                        },
                        "ID_1444": {
                            "title": "Senpai",
                            "link": "https://youtu.be/EJiXO3vwNFo",
                            "difficulty": "1"
                        },
                        "ID_1445": {
                            "title": "Roses",
                            "link": "https://youtu.be/DKs-Tkw4X3I",
                            "difficulty": "1"
                        },
                        "ID_1446": {
                            "title": "Thorns",
                            "link": "https://youtu.be/lWja270s6qA",
                            "difficulty": "1"
                        },
                        "ID_1447": {
                            "title": "Ugh",
                            "link": "https://youtu.be/_pLDBCkvyUg",
                            "difficulty": "1"
                        },
                        "ID_1448": {
                            "title": "Guns",
                            "link": "https://youtu.be/K5lp8aAoT1g",
                            "difficulty": "1"
                        },
                        "ID_1449": {
                            "title": "Stress",
                            "link": "https://youtu.be/GBD2B9bDD5I",
                            "difficulty": "1"
                        }
                    }
                },
                "Friday Night Funkin' VS Kapi": {
                    "gameName": "Friday Night Funkin' VS Kapi",
                    "answers": ["friday night funkin' vs kapi", "fnf", "friday night", "friday night funking", "fnf kapi", "kapi mod", "fnf kapi mod", "friday night funkin vs kapi"],
                    "songs": {
                        "ID_1458": {
                            "title": "Wocky",
                            "link": "https://youtu.be/W85P4sYT8NM",
                            "difficulty": "1"
                        },
                        "ID_1459": {
                            "title": "Beathoven",
                            "link": "https://youtu.be/-FV_Yo76n4M",
                            "difficulty": "1"
                        },
                        "ID_1460": {
                            "title": "Nyaw",
                            "link": "https://youtu.be/nEDtNRT7GwI",
                            "difficulty": "1"
                        }
                    }
                },
                "Friday Night Funkin': Mid-Fight Masses": {
                    "gameName": "Friday Night Funkin': Mid-Fight Masses",
                    "answers": ["friday night funkin': mid-fight masses", "fnf", "friday night", "friday night funking", "fnf mfm", "fnf ruv", "fnf sarv", "fnf zavodila", "friday night funkin midfight masses", "friday night funkin mid fight masses", "friday night funkin mid-fight masses"],
                    "songs": {
                        "ID_1461": {
                            "title": "Parish",
                            "link": "https://youtu.be/6DpML_za7tg",
                            "difficulty": "1"
                        },
                        "ID_1462": {
                            "title": "Worship",
                            "link": "https://youtu.be/a3AjmBa31jA",
                            "difficulty": "1"
                        },
                        "ID_1463": {
                            "title": "Zavodila",
                            "link": "https://youtu.be/e7nIQ1yoCCc",
                            "difficulty": "1"
                        },
                        "ID_1464": {
                            "title": "Gospel",
                            "link": "https://youtu.be/CBZ2cMSwaNs",
                            "difficulty": "1"
                        }
                    }
                },
                "Friday Night Funkin': Tricky Mod": {
                    "gameName": "Friday Night Funkin': Tricky Mod",
                    "answers": ["friday night funkin': tricky mod", "friday night funking", "fnf tricky", "fnf madness", "fnf", "friday night funkin tricky mod"],
                    "songs": {
                        "ID_1454": {
                            "title": "Improbable Outset",
                            "link": "https://youtu.be/kG70yPDXHDY",
                            "difficulty": "1"
                        },
                        "ID_1455": {
                            "title": "Madness",
                            "link": "https://youtu.be/GZmoHrq0mEY",
                            "difficulty": "1"
                        },
                        "ID_1456": {
                            "title": "HELLCLOWN",
                            "link": "https://youtu.be/FlONT3RVgHs",
                            "difficulty": "1"
                        },
                        "ID_1457": {
                            "title": "Expurgation",
                            "link": "https://youtu.be/WmXn3L5bQy4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "FTL: Faster Than Light": {
            "seriesName": "FTL: Faster Than Light",
            "seriesColor": "red",
            "game": {
                "FTL: Faster Than Light": {
                    "gameName": "FTL: Faster Than Light",
                    "answers": ["ftl: faster than light", "ftl", "faster than light"],
                    "songs": {
                        "ID_1334": {
                            "title": "Space Cruise (Title Theme)",
                            "link": "https://youtu.be/QHDMqWMzBG8",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Furi": {
            "seriesName": "Furi",
            "seriesColor": "red",
            "game": {
                "Furi": {
                    "gameName": "Furi",
                    "answers": ["furi"],
                    "songs": {
                        "ID_907": {
                            "title": "A Picture in Motion",
                            "link": "https://youtu.be/ZUlAytznxn4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ghost Trick": {
            "seriesName": "Ghost Trick",
            "seriesColor": "red",
            "game": {
                "Ghost Trick": {
                    "gameName": "Ghost Trick",
                    "answers": ["ghost trick", "ghost trick", "ghost trick phantom detective", "ghost trick: phantom detective", "phantom detective"],
                    "songs": {
                        "ID_68": {
                            "title": "Prologue ~ The Beginning of the Night",
                            "link": "https://youtu.be/HVBDt3VRDfA",
                            "difficulty": "1"
                        },
                        "ID_69": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/IQ3khsva6E8",
                            "difficulty": "1"
                        },
                        "ID_70": {
                            "title": "4 Minutes Before Death",
                            "link": "https://youtu.be/r3C-FrmHn44",
                            "difficulty": "1"
                        },
                        "ID_71": {
                            "title": "Fate Updated",
                            "link": "https://youtu.be/8hw63HniDWE",
                            "difficulty": "1"
                        },
                        "ID_72": {
                            "title": "Countdown",
                            "link": "https://youtu.be/bXXrpgpWJQY",
                            "difficulty": "1"
                        },
                        "ID_73": {
                            "title": "The World of the Dead",
                            "link": "https://youtu.be/x2CklIRwJvI",
                            "difficulty": "1"
                        },
                        "ID_74": {
                            "title": "Lynne ~ A Targeted Redhead",
                            "link": "https://youtu.be/w6xMvGbwT7I",
                            "difficulty": "1"
                        },
                        "ID_75": {
                            "title": "Ray ~ A Ray of Light",
                            "link": "https://youtu.be/31jJ-pmGuO0",
                            "difficulty": "1"
                        },
                        "ID_76": {
                            "title": "Awakening",
                            "link": "https://youtu.be/Ybi0-OTvoXM",
                            "difficulty": "1"
                        },
                        "ID_77": {
                            "title": "Welcome to the Salon",
                            "link": "https://youtu.be/PGn9958vneI",
                            "difficulty": "1"
                        },
                        "ID_78": {
                            "title": "Complication",
                            "link": "https://youtu.be/OrxEVT0wHMc",
                            "difficulty": "1"
                        },
                        "ID_79": {
                            "title": "Missile ~ A Courageous Little Animal",
                            "link": "https://youtu.be/TWd3JA6cpY0",
                            "difficulty": "1"
                        },
                        "ID_80": {
                            "title": "Cabanela ~ A White Lovely Lanky Man",
                            "link": "https://youtu.be/eeVXa4cU21g",
                            "difficulty": "1"
                        },
                        "ID_81": {
                            "title": "Trauma",
                            "link": "https://youtu.be/3kwKogno3dk",
                            "difficulty": "1"
                        },
                        "ID_82": {
                            "title": "Jingle",
                            "link": "https://youtu.be/EwiF0n073zE",
                            "difficulty": "1"
                        },
                        "ID_83": {
                            "title": "4 Minutes Before Death ~ Variation",
                            "link": "https://youtu.be/L4X_DMcjYaI",
                            "difficulty": "1"
                        },
                        "ID_84": {
                            "title": "Fate Updated ~ Variation",
                            "link": "https://youtu.be/h--eFUupy-8",
                            "difficulty": "1"
                        },
                        "ID_85": {
                            "title": "Beauty and Dandy",
                            "link": "https://youtu.be/3zrqU53d0IA",
                            "difficulty": "1"
                        },
                        "ID_86": {
                            "title": "Deadline",
                            "link": "https://youtu.be/RkmcpQjZWVA",
                            "difficulty": "1"
                        },
                        "ID_87": {
                            "title": "Chained Past",
                            "link": "https://youtu.be/MgWCNGpwIYs",
                            "difficulty": "1"
                        },
                        "ID_88": {
                            "title": "Informing About the Parting",
                            "link": "https://youtu.be/VUGlC8WOQt0",
                            "difficulty": "1"
                        },
                        "ID_89": {
                            "title": "The Last Desperate Struggle",
                            "link": "https://youtu.be/mFXOJ1mkKtI",
                            "difficulty": "1"
                        },
                        "ID_90": {
                            "title": "Reincarnation",
                            "link": "https://youtu.be/6HNuTV0GaUk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ghosts 'n Goblins": {
            "seriesName": "Ghosts 'n Goblins",
            "seriesColor": "red",
            "game": {
                "Ghosts 'n Goblins": {
                    "gameName": "Ghosts 'n Goblins",
                    "answers": ["ghosts 'n goblins", "ghosts n goblins"],
                    "songs": {
                        "ID_1922": {
                            "title": "Stage Theme 01",
                            "link": "https://youtu.be/RmxARmxAWZA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Globulous": {
            "seriesName": "Globulous",
            "seriesColor": "red",
            "game": {
                "Globulous": {
                    "gameName": "Globulous",
                    "answers": ["globulous"],
                    "songs": {
                        "ID_902": {
                            "title": "Dawn Oblique",
                            "link": "https://youtu.be/q151CWLGZ0E",
                            "difficulty": "1"
                        },
                        "ID_903": {
                            "title": "Snow Delta",
                            "link": "https://youtu.be/REXRLt2E-kk",
                            "difficulty": "1"
                        },
                        "ID_904": {
                            "title": "Vapor Radian",
                            "link": "https://youtu.be/0luUyA5l99c",
                            "difficulty": "1"
                        },
                        "ID_905": {
                            "title": "Oasis Epsilon",
                            "link": "https://youtu.be/emuMQTOIyi4",
                            "difficulty": "1"
                        },
                        "ID_906": {
                            "title": "Coccoon Altitude",
                            "link": "https://youtu.be/-RnvOOtBlUI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Golden Sun": {
            "seriesName": "Golden Sun",
            "seriesColor": "red",
            "game": {
                "Golden Sun": {
                    "gameName": "Golden Sun",
                    "answers": ["golden sun"],
                    "songs": {
                        "ID_2062": {
                            "title": "Isaac Battle Theme",
                            "link": "https://youtu.be/19ZdAZO9FvU",
                            "difficulty": "1"
                        },
                        "ID_2063": {
                            "title": "Winterly Imil",
                            "link": "https://youtu.be/uRCgHvlOgXE",
                            "difficulty": "1"
                        },
                        "ID_2064": {
                            "title": "Set Sail! Through the Karagol Sea",
                            "link": "https://youtu.be/KyIOgjniohA",
                            "difficulty": "1"
                        },
                        "ID_2065": {
                            "title": "Saturos Battle Theme",
                            "link": "https://youtu.be/iEjqqUTz-us",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "GoldenEye": {
            "seriesName": "GoldenEye",
            "seriesColor": "red",
            "game": {
                "GoldenEye 007": {
                    "gameName": "GoldenEye 007",
                    "answers": ["goldeneye 007", "golden eye", "goldeneye"],
                    "songs": {
                        "ID_1784": {
                            "title": "Chemical Warfare Facility",
                            "link": "https://youtu.be/ikv2BPl6udg",
                            "difficulty": "1"
                        },
                        "ID_1785": {
                            "title": "Subterranean Caverns",
                            "link": "https://youtu.be/V0hbvtKdB7M",
                            "difficulty": "1"
                        },
                        "ID_1786": {
                            "title": "Mission Dossier",
                            "link": "https://youtu.be/2eqfG2A8Vhc",
                            "difficulty": "1"
                        },
                        "ID_1787": {
                            "title": "Military Intelligence Archives",
                            "link": "https://youtu.be/tHcjzWsDVnk",
                            "difficulty": "1"
                        },
                        "ID_1788": {
                            "title": "Elevator Music (Control)",
                            "link": "https://youtu.be/xaZKNHj1pZI",
                            "difficulty": "1"
                        },
                        "ID_1789": {
                            "title": "Janus Control Center",
                            "link": "https://youtu.be/7Acv_QBdc1g",
                            "difficulty": "1"
                        },
                        "ID_1790": {
                            "title": "007 Watch",
                            "link": "https://youtu.be/DlbZIUQoH6c",
                            "difficulty": "1"
                        },
                        "ID_1791": {
                            "title": "End Titles",
                            "link": "https://youtu.be/tRAO7Y6rJZo",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Gradius": {
            "seriesName": "Gradius",
            "seriesColor": "red",
            "game": {
                "Gradius": {
                    "gameName": "Gradius",
                    "answers": ["gradius"],
                    "songs": {
                        "ID_1923": {
                            "title": "Air Beginning of the History",
                            "link": "https://youtu.be/9zfpuC01FPk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Gravity Rush": {
            "seriesName": "Gravity Rush",
            "seriesColor": "red",
            "game": {
                "Gravity Rush": {
                    "gameName": "Gravity Rush",
                    "answers": ["gravity rush"],
                    "songs": {
                        "ID_1984": {
                            "title": "Downtown",
                            "link": "https://youtu.be/poxDJHoYxCc",
                            "difficulty": "1"
                        },
                        "ID_1985": {
                            "title": "Douse Shinundakara",
                            "link": "https://youtu.be/oWrKHWpLn0U",
                            "difficulty": "1"
                        },
                        "ID_1986": {
                            "title": "Resistance and Extermination",
                            "link": "https://youtu.be/Gfxf4x3L1bs",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Halo": {
            "seriesName": "Halo",
            "seriesColor": "red",
            "game": {
                "Halo": {
                    "gameName": "Halo",
                    "answers": ["halo"],
                    "songs": {
                        "ID_2066": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/JDI1KlXRogo",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Helltaker": {
            "seriesName": "Helltaker",
            "seriesColor": "red",
            "game": {
                "Helltaker": {
                    "gameName": "Helltaker",
                    "answers": ["helltaker"],
                    "songs": {
                        "ID_1693": {
                            "title": "Vitality",
                            "link": "https://youtu.be/EnDXGQmCz3U",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Hollow Knight": {
            "seriesName": "Hollow Knight",
            "seriesColor": "red",
            "game": {
                "Hollow Knight": {
                    "gameName": "Hollow Knight",
                    "answers": ["hollow knight"],
                    "songs": {
                        "ID_1491": {
                            "title": "Enter Hallownest",
                            "link": "https://youtu.be/eqispO2Bi2k",
                            "difficulty": "1"
                        },
                        "ID_1492": {
                            "title": "False Knight",
                            "link": "https://youtu.be/oSvd8uS_XAc",
                            "difficulty": "1"
                        },
                        "ID_1493": {
                            "title": "Greenpath",
                            "link": "https://youtu.be/ABXga9y0B3I",
                            "difficulty": "1"
                        },
                        "ID_1494": {
                            "title": "Hornet",
                            "link": "https://youtu.be/cfTLvQ9TZhg",
                            "difficulty": "1"
                        },
                        "ID_1495": {
                            "title": "Mantis Lords",
                            "link": "https://youtu.be/EbDkU65pJNQ",
                            "difficulty": "1"
                        },
                        "ID_1496": {
                            "title": "City of Tears",
                            "link": "https://youtu.be/1unm0LS10ao",
                            "difficulty": "1"
                        },
                        "ID_1497": {
                            "title": "Dung Defender",
                            "link": "https://youtu.be/pQkajyGKvUU",
                            "difficulty": "1"
                        },
                        "ID_1498": {
                            "title": "Crystal Peaks",
                            "link": "https://youtu.be/ziG-p9bpIro",
                            "difficulty": "1"
                        },
                        "ID_1499": {
                            "title": "Decisive Battle",
                            "link": "https://youtu.be/mSN6r3_XBZc",
                            "difficulty": "1"
                        },
                        "ID_1500": {
                            "title": "Soul Sanctum",
                            "link": "https://youtu.be/JqSSzXCy4f0",
                            "difficulty": "1"
                        },
                        "ID_1501": {
                            "title": "The White Lady",
                            "link": "https://youtu.be/6Ca46SMnzjY",
                            "difficulty": "1"
                        },
                        "ID_1502": {
                            "title": "Broken Vessel",
                            "link": "https://youtu.be/HgQ6Cttubto",
                            "difficulty": "1"
                        },
                        "ID_1503": {
                            "title": "Nosk",
                            "link": "https://youtu.be/OWzmmCBTJZ0",
                            "difficulty": "1"
                        },
                        "ID_1504": {
                            "title": "Dream Battle",
                            "link": "https://youtu.be/5VFebb9xLRA",
                            "difficulty": "1"
                        },
                        "ID_1505": {
                            "title": "Sealed Vessel",
                            "link": "https://youtu.be/kxdO8S5ApOE",
                            "difficulty": "1"
                        },
                        "ID_1506": {
                            "title": "Radiance",
                            "link": "https://youtu.be/T57IQBw9PGU",
                            "difficulty": "1"
                        },
                        "ID_1507": {
                            "title": "Truth, Beauty and Hatred",
                            "link": "https://youtu.be/zidGo704SvI",
                            "difficulty": "1"
                        },
                        "ID_1508": {
                            "title": "Hive Knight",
                            "link": "https://youtu.be/RVyJmhiJjA8",
                            "difficulty": "1"
                        }
                    }
                },
                "Hollow Knight: Godmaster": {
                    "gameName": "Hollow Knight: Godmaster",
                    "answers": ["hollow knight: godmaster", "hollow knight", "godmaster"],
                    "songs": {
                        "ID_1511": {
                            "title": "Gods & Glory",
                            "link": "https://youtu.be/UjBTtNU27Ec",
                            "difficulty": "1"
                        },
                        "ID_1512": {
                            "title": "Furious Gods",
                            "link": "https://youtu.be/ut_RjDGUJoY",
                            "difficulty": "1"
                        },
                        "ID_1513": {
                            "title": "Pure Vessel",
                            "link": "https://youtu.be/35pUQDrKy5A",
                            "difficulty": "1"
                        },
                        "ID_1514": {
                            "title": "Truth, Beauty and Hatred (feat. Zote)",
                            "link": "https://youtu.be/PFRleTfv1tk",
                            "difficulty": "1"
                        }
                    }
                },
                "Hollow Knight: Silksong": {
                    "gameName": "Hollow Knight: Silksong",
                    "answers": ["hollow knight: silksong", "hollow knight", "silksong"],
                    "songs": {
                        "ID_1515": {
                            "title": "Lace",
                            "link": "https://youtu.be/zRs58D34OLY",
                            "difficulty": "1"
                        }
                    }
                },
                "Hollow Knight: The Grimm Troupe": {
                    "gameName": "Hollow Knight: The Grimm Troupe",
                    "answers": ["hollow knight: the grimm troupe", "hollow knight", "grimm troupe"],
                    "songs": {
                        "ID_1509": {
                            "title": "Grimm",
                            "link": "https://youtu.be/qmsjvBivRkU",
                            "difficulty": "1"
                        },
                        "ID_1510": {
                            "title": "Nightmare King",
                            "link": "https://youtu.be/Mq8E_1LkoAc",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Hotline Miami": {
            "seriesName": "Hotline Miami",
            "seriesColor": "red",
            "game": {
                "Hotline Miami": {
                    "gameName": "Hotline Miami",
                    "answers": ["hotline miami"],
                    "songs": {
                        "ID_1465": {
                            "title": "Hydrogen",
                            "link": "https://youtu.be/SNE2oCZH_4k",
                            "difficulty": "1"
                        },
                        "ID_1466": {
                            "title": "Crystals",
                            "link": "https://youtu.be/AVblOqZBlJw",
                            "difficulty": "1"
                        },
                        "ID_1467": {
                            "title": "Miami",
                            "link": "https://youtu.be/IKuA-m_6eOo",
                            "difficulty": "1"
                        },
                        "ID_1468": {
                            "title": "Hotline",
                            "link": "https://youtu.be/eFHtlECedPA",
                            "difficulty": "1"
                        },
                        "ID_1469": {
                            "title": "Knock - Knock",
                            "link": "https://youtu.be/9o4LKzaMaOo",
                            "difficulty": "1"
                        },
                        "ID_1470": {
                            "title": "Miami Disco",
                            "link": "https://youtu.be/m1pveAcFv1Y",
                            "difficulty": "1"
                        },
                        "ID_1471": {
                            "title": "Release",
                            "link": "https://youtu.be/ZSzoKL-iO5M",
                            "difficulty": "1"
                        },
                        "ID_1472": {
                            "title": "Static",
                            "link": "https://youtu.be/AzM23Farc8c",
                            "difficulty": "1"
                        },
                        "ID_1473": {
                            "title": "Inner Animal",
                            "link": "https://youtu.be/aRN3ZPljS20",
                            "difficulty": "1"
                        }
                    }
                },
                "Hotline Miami 2: Wrong Number": {
                    "gameName": "Hotline Miami 2: Wrong Number",
                    "answers": ["hotline miami 2: wrong number", "hotline miami 2", "wrong number"],
                    "songs": {
                        "ID_1474": {
                            "title": "Untitled",
                            "link": "https://youtu.be/t-olf3xtixU",
                            "difficulty": "1"
                        },
                        "ID_1475": {
                            "title": "Dust",
                            "link": "https://youtu.be/vsZtCLMsevM",
                            "difficulty": "1"
                        },
                        "ID_1476": {
                            "title": "Divide",
                            "link": "https://youtu.be/JflsBihO_MQ",
                            "difficulty": "1"
                        },
                        "ID_1477": {
                            "title": "In The Face Of Evil",
                            "link": "https://youtu.be/-h5snZTfoEA",
                            "difficulty": "1"
                        },
                        "ID_1478": {
                            "title": "Roller Mobster",
                            "link": "https://youtu.be/qyfJlcrN09w",
                            "difficulty": "1"
                        },
                        "ID_1479": {
                            "title": "Run",
                            "link": "https://youtu.be/ICjD3f-8SXE",
                            "difficulty": "1"
                        },
                        "ID_1480": {
                            "title": "Le Perv",
                            "link": "https://youtu.be/BzuPI7tk9B8",
                            "difficulty": "1"
                        },
                        "ID_1481": {
                            "title": "She Swallowed Burning Coals",
                            "link": "https://youtu.be/c3UGNFUIiV4",
                            "difficulty": "1"
                        },
                        "ID_1482": {
                            "title": "Le Perv (M_O_O_N Remix)",
                            "link": "https://youtu.be/MEnGrj1of7Q",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "I Love You, Colonel Sanders!": {
            "seriesName": "I Love You, Colonel Sanders!",
            "seriesColor": "red",
            "game": {
                "I Love You, Colonel Sanders! A Finger Lickin’ Good Dating Simulator": {
                    "gameName": "I Love You, Colonel Sanders! A Finger Lickin’ Good Dating Simulator",
                    "answers": ["i love you, colonel sanders! a finger lickin’ good dating simulator", "kfc dating sim", "i love you colonel sanders", "kfc game", "colonel sanders"],
                    "songs": {
                        "ID_2024": {
                            "title": "Trailer Theme",
                            "link": "https://youtu.be/W4KLOBThpL4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ice Climber": {
            "seriesName": "Ice Climber",
            "seriesColor": "red",
            "game": {
                "Ice Climber": {
                    "gameName": "Ice Climber",
                    "answers": ["ice climber", "ice climbers"],
                    "songs": {
                        "ID_1836": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/ZHnPZ4TklsA",
                            "difficulty": "1"
                        },
                        "ID_1837": {
                            "title": "Bonus Stage",
                            "link": "https://youtu.be/yoJy9fPBRjA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ico": {
            "seriesName": "Ico",
            "seriesColor": "red",
            "game": {
                "Ico": {
                    "gameName": "Ico",
                    "answers": ["ico"],
                    "songs": {
                        "ID_2400": {
                            "title": "Castle in the Mist",
                            "link": "https://youtu.be/jtPym3pK7fQ",
                            "difficulty": "1"
                        },
                        "ID_2401": {
                            "title": "Heal",
                            "link": "https://youtu.be/6YCUjoBqpSc",
                            "difficulty": "1"
                        },
                        "ID_2402": {
                            "title": "You were There",
                            "link": "https://youtu.be/1Y3uGF7QlhE",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Jet Set Radio": {
            "seriesName": "Jet Set Radio",
            "seriesColor": "red",
            "game": {
                "Jet Set Radio": {
                    "gameName": "Jet Set Radio",
                    "answers": ["jet set radio", "jsr"],
                    "songs": {
                        "ID_1935": {
                            "title": "Humming the Bassline",
                            "link": "https://youtu.be/mizSUxxuCiY",
                            "difficulty": "1"
                        },
                        "ID_1936": {
                            "title": "Let Mom Sleep",
                            "link": "https://youtu.be/m2680ciixQc",
                            "difficulty": "1"
                        },
                        "ID_1937": {
                            "title": "Everybody Jump Around",
                            "link": "https://youtu.be/AW1rgaxsjfo",
                            "difficulty": "1"
                        },
                        "ID_1938": {
                            "title": "Up-Set Attack",
                            "link": "https://youtu.be/bvuf_hbXaSc",
                            "difficulty": "1"
                        },
                        "ID_1939": {
                            "title": "Funky Radio",
                            "link": "https://youtu.be/A9WqF5cyagY",
                            "difficulty": "1"
                        },
                        "ID_1940": {
                            "title": "Sneakman",
                            "link": "https://youtu.be/FlwEtrYCNwM",
                            "difficulty": "1"
                        },
                        "ID_1941": {
                            "title": "Sweet Soul Brother",
                            "link": "https://youtu.be/92__UaovpiI",
                            "difficulty": "1"
                        },
                        "ID_1942": {
                            "title": "That's Enough",
                            "link": "https://youtu.be/YqFG6sV-vC4",
                            "difficulty": "1"
                        },
                        "ID_1943": {
                            "title": "Moody's Shuffle",
                            "link": "https://youtu.be/RBC_pBWJJlU",
                            "difficulty": "1"
                        },
                        "ID_1944": {
                            "title": "Rock It On",
                            "link": "https://youtu.be/8nY23NA25mM",
                            "difficulty": "1"
                        },
                        "ID_1945": {
                            "title": "Grace & Glory",
                            "link": "https://youtu.be/FcxllvjUo2k",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Katamari": {
            "seriesName": "Katamari",
            "seriesColor": "red",
            "game": {
                "Katamari Damacy": {
                    "gameName": "Katamari Damacy",
                    "answers": ["katamari damacy"],
                    "songs": {
                        "ID_1058": {
                            "title": "Lonely Rolling Star",
                            "link": "https://youtu.be/okEluVGlWio",
                            "difficulty": "1"
                        },
                        "ID_1059": {
                            "title": "Katamari on the Rocks",
                            "link": "https://youtu.be/iMH49ieL4es",
                            "difficulty": "1"
                        },
                        "ID_1174": {
                            "title": "Dan Don Fuga",
                            "link": "https://youtu.be/i9tQrYuR42k",
                            "difficulty": "1"
                        },
                        "ID_2030": {
                            "title": "Katamari Nah-Nah",
                            "link": "https://youtu.be/L7FPfxscmBs",
                            "difficulty": "1"
                        },
                        "ID_2031": {
                            "title": "The Moon and the Prince",
                            "link": "https://youtu.be/r2C8XvxYqos",
                            "difficulty": "1"
                        },
                        "ID_2032": {
                            "title": "Wanda Wanda",
                            "link": "https://youtu.be/Yo1QCM54w44",
                            "difficulty": "1"
                        },
                        "ID_2033": {
                            "title": "Que Sera Sera",
                            "link": "https://youtu.be/OhlW2roqg7Y",
                            "difficulty": "1"
                        },
                        "ID_2034": {
                            "title": "Katamari March Damacy",
                            "link": "https://youtu.be/hIHR_8ol_OU",
                            "difficulty": "1"
                        }
                    }
                },
                "Touch My Katamari": {
                    "gameName": "Touch My Katamari",
                    "answers": ["touch my katamari"],
                    "songs": {
                        "ID_1335": {
                            "title": "Hello World",
                            "link": "https://youtu.be/PJ7KwyCrGaI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Kid Icarus": {
            "seriesName": "Kid Icarus",
            "seriesColor": "red",
            "game": {
                "Kid Icarus": {
                    "gameName": "Kid Icarus",
                    "answers": ["kid icarus"],
                    "songs": {
                        "ID_1833": {
                            "title": "Sky Palace",
                            "link": "https://youtu.be/xjYvGiMiEbk",
                            "difficulty": "1"
                        },
                        "ID_1834": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/dOg2NWQgltI",
                            "difficulty": "1"
                        },
                        "ID_1835": {
                            "title": "Underworld Theme",
                            "link": "https://youtu.be/kUBsXUt5RQE",
                            "difficulty": "1"
                        }
                    }
                },
                "Kid Icarus Uprising": {
                    "gameName": "Kid Icarus Uprising",
                    "answers": ["kid icarus uprising", "uprising"],
                    "songs": {
                        "ID_1080": {
                            "title": "Magnus's Theme",
                            "link": "https://youtu.be/2kPwTTQb6D8",
                            "difficulty": "1"
                        },
                        "ID_1081": {
                            "title": "Dark Pit",
                            "link": "https://youtu.be/QG77HTdreh0",
                            "difficulty": "1"
                        },
                        "ID_1082": {
                            "title": "Dark Pit's Theme",
                            "link": "https://youtu.be/COgGsetFrCM",
                            "difficulty": "1"
                        },
                        "ID_1083": {
                            "title": "Lightning Battle",
                            "link": "https://youtu.be/Uxnc2eoPjSs",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "King's Quest": {
            "seriesName": "King's Quest",
            "seriesColor": "red",
            "game": {
                "King's Quest IV: Heir Today, Gone Tomorrow": {
                    "gameName": "King's Quest IV: Heir Today, Gone Tomorrow",
                    "answers": ["king's quest iv: heir today, gone tomorrow", "kings quest 4", "kq 4"],
                    "songs": {
                        "ID_2420": {
                            "title": "Girl in the Tower",
                            "link": "https://youtu.be/69M2iiI__XQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Kingdom Hearts": {
            "seriesName": "Kingdom Hearts",
            "seriesColor": "red",
            "game": {
                "Kingdom Hearts": {
                    "gameName": "Kingdom Hearts",
                    "answers": ["kingdom hearts", "kh1", "kh 1"],
                    "songs": {
                        "ID_2378": {
                            "title": "Dearly Beloved",
                            "link": "https://youtu.be/ExsP_nCOiJY",
                            "difficulty": "1"
                        },
                        "ID_2379": {
                            "title": "Bustin' Up on the Beach",
                            "link": "https://youtu.be/dyYDd0CeksY",
                            "difficulty": "1"
                        },
                        "ID_2380": {
                            "title": "Blast Away! II",
                            "link": "https://youtu.be/rvgqvTGf2dU",
                            "difficulty": "1"
                        },
                        "ID_2381": {
                            "title": "Hollow Bastion",
                            "link": "https://youtu.be/dUW0gIRVU1k",
                            "difficulty": "1"
                        },
                        "ID_2382": {
                            "title": "Dearly Beloved -Reprise-",
                            "link": "https://youtu.be/Ojl-TwFFGOk",
                            "difficulty": "1"
                        }
                    }
                },
                "Kingdom Hearts II": {
                    "gameName": "Kingdom Hearts II",
                    "answers": ["kingdom hearts ii", "kh2", "kh 2", "kingdom hearts 2"],
                    "songs": {
                        "ID_2403": {
                            "title": "Dearly Beloved",
                            "link": "https://youtu.be/1WlvykbN1Ho",
                            "difficulty": "1"
                        },
                        "ID_2404": {
                            "title": "Reviving Hollow Bastion",
                            "link": "https://youtu.be/SIxCM7EC-tI",
                            "difficulty": "1"
                        },
                        "ID_2405": {
                            "title": "Isn't It Lovely?",
                            "link": "https://youtu.be/5CNPqPpK7F0",
                            "difficulty": "1"
                        },
                        "ID_2406": {
                            "title": "The 13th Struggle",
                            "link": "https://youtu.be/9hrZeE_e-cI",
                            "difficulty": "1"
                        },
                        "ID_2407": {
                            "title": "Friends in My Heart",
                            "link": "https://youtu.be/vdtmsqYHzGY",
                            "difficulty": "1"
                        },
                        "ID_2408": {
                            "title": "Roxas",
                            "link": "https://youtu.be/xqgpQBwjSgs",
                            "difficulty": "1"
                        },
                        "ID_2409": {
                            "title": "A Fight to the Death",
                            "link": "https://youtu.be/U-hbNyzFu8Q",
                            "difficulty": "1"
                        },
                        "ID_2410": {
                            "title": "Missing You",
                            "link": "https://youtu.be/ZbuZp73qudw",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Kirby": {
            "seriesName": "Kirby",
            "seriesColor": "red",
            "game": {
                "Kirby 64: The Crystal Shards": {
                    "gameName": "Kirby 64: The Crystal Shards",
                    "answers": ["kirby 64: the crystal shards", "kirby 64 the crystal shards", "kirby 64", "the crystal shards", "crystal shards"],
                    "songs": {
                        "ID_2352": {
                            "title": "Pop Star",
                            "link": "https://youtu.be/KjFaq2rueKs",
                            "difficulty": "1"
                        },
                        "ID_2353": {
                            "title": "Quiet Forest",
                            "link": "https://youtu.be/LvD6AyM31B0",
                            "difficulty": "1"
                        },
                        "ID_2354": {
                            "title": "Boss",
                            "link": "https://youtu.be/LCYRvbSJOGE",
                            "difficulty": "1"
                        },
                        "ID_2355": {
                            "title": "Aqua Star",
                            "link": "https://youtu.be/Vu4QJZPeZsk",
                            "difficulty": "1"
                        },
                        "ID_2356": {
                            "title": "Mountain Stream",
                            "link": "https://youtu.be/BnqXASop-S4",
                            "difficulty": "1"
                        },
                        "ID_2357": {
                            "title": "Above the Clouds",
                            "link": "https://youtu.be/ZLYaYQn6Wqk",
                            "difficulty": "1"
                        },
                        "ID_2358": {
                            "title": "Gourmet Race",
                            "link": "https://youtu.be/Htr6L0_I0yc",
                            "difficulty": "1"
                        },
                        "ID_2359": {
                            "title": "Taking Battle",
                            "link": "https://youtu.be/3ZngtygkJGs",
                            "difficulty": "1"
                        }
                    }
                },
                "Kirby Super Star": {
                    "gameName": "Kirby Super Star",
                    "answers": ["kirby super star", "kirby superstar"],
                    "songs": {
                        "ID_2086": {
                            "title": "Green Greens",
                            "link": "https://youtu.be/QCQa2tIXWok",
                            "difficulty": "1"
                        },
                        "ID_2087": {
                            "title": "Float Islands",
                            "link": "https://youtu.be/DqUr9Z4yHmw",
                            "difficulty": "1"
                        },
                        "ID_2088": {
                            "title": "Bubbly Clouds",
                            "link": "https://youtu.be/80wM_F4SdRU",
                            "difficulty": "1"
                        },
                        "ID_2089": {
                            "title": "King Dedede's Theme",
                            "link": "https://youtu.be/qEvxbJROGuQ",
                            "difficulty": "1"
                        },
                        "ID_2090": {
                            "title": "White Wing Dynablade",
                            "link": "https://youtu.be/QmGiv8Rw3po",
                            "difficulty": "1"
                        },
                        "ID_2091": {
                            "title": "Peanut Plain",
                            "link": "https://youtu.be/jZa8b-5oX1s",
                            "difficulty": "1"
                        },
                        "ID_2092": {
                            "title": "Cocoa Cave",
                            "link": "https://youtu.be/o0UlGDsH2R4",
                            "difficulty": "1"
                        },
                        "ID_2093": {
                            "title": "Candy Mountain",
                            "link": "https://youtu.be/1fz_xsHzSvQ",
                            "difficulty": "1"
                        },
                        "ID_2094": {
                            "title": "Meta Knight's Revenge",
                            "link": "https://youtu.be/qxhQghflIqg",
                            "difficulty": "1"
                        },
                        "ID_2095": {
                            "title": "Gourmet Race",
                            "link": "https://youtu.be/Se1uh3PS78Y",
                            "difficulty": "1"
                        },
                        "ID_2096": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/Iha6_y4XR0M",
                            "difficulty": "1"
                        }
                    }
                },
                "Kirby Triple Deluxe": {
                    "gameName": "Kirby Triple Deluxe",
                    "answers": ["kirby triple deluxe", "triple deluxe"],
                    "songs": {
                        "ID_2183": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/RROyc07lR-I",
                            "difficulty": "1"
                        },
                        "ID_2184": {
                            "title": "Green Greens",
                            "link": "https://youtu.be/cIpbJ0Osvpc",
                            "difficulty": "1"
                        },
                        "ID_2185": {
                            "title": "Dedede's Royal Payback",
                            "link": "https://youtu.be/5ddOT_TJnKg",
                            "difficulty": "1"
                        },
                        "ID_2186": {
                            "title": "Moonstruck Blossom",
                            "link": "https://youtu.be/EBfz1Edo9-Q",
                            "difficulty": "1"
                        }
                    }
                },
                "Kirby's Adventure": {
                    "gameName": "Kirby's Adventure",
                    "answers": ["kirby's adventure", "kirbys adventure"],
                    "songs": {
                        "ID_2067": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/DKSECyvqflE",
                            "difficulty": "1"
                        },
                        "ID_2068": {
                            "title": "Vegetable Valley",
                            "link": "https://youtu.be/-XoWiv4xf1U",
                            "difficulty": "1"
                        },
                        "ID_2069": {
                            "title": "Butter Building",
                            "link": "https://youtu.be/7loQmAngM94",
                            "difficulty": "1"
                        },
                        "ID_2070": {
                            "title": "Crane Game",
                            "link": "https://youtu.be/s2ck09LLCEw",
                            "difficulty": "1"
                        },
                        "ID_2071": {
                            "title": "Green Greens",
                            "link": "https://youtu.be/9yr9A_V4Fhs",
                            "difficulty": "1"
                        },
                        "ID_2072": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/FB8lYcnt-S0",
                            "difficulty": "1"
                        }
                    }
                },
                "Kirby's Dream Course": {
                    "gameName": "Kirby's Dream Course",
                    "answers": ["kirby's dream course", "kirbys dream course", "dream course"],
                    "songs": {
                        "ID_2073": {
                            "title": "The First Hole",
                            "link": "https://youtu.be/GID4kDJDxaQ",
                            "difficulty": "1"
                        },
                        "ID_2074": {
                            "title": "Cloudy Mountain Peaks",
                            "link": "https://youtu.be/9gkpG9kpmPs",
                            "difficulty": "1"
                        },
                        "ID_2075": {
                            "title": "Jigsaw Plains",
                            "link": "https://youtu.be/SXN2KM-qMKo",
                            "difficulty": "1"
                        },
                        "ID_2076": {
                            "title": "Castles of Cake",
                            "link": "https://youtu.be/LAUBLKL_NQ4",
                            "difficulty": "1"
                        },
                        "ID_2077": {
                            "title": "Dedede is Getting Closer!",
                            "link": "https://youtu.be/Mc_z_ymdTyY",
                            "difficulty": "1"
                        },
                        "ID_2078": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/jfhRc5FHsro",
                            "difficulty": "1"
                        }
                    }
                },
                "Kirby's Dream Land": {
                    "gameName": "Kirby's Dream Land",
                    "answers": ["kirby's dream land", "kirbys dream land", "dream land", "kirbys dreamland", "dreamland"],
                    "songs": {
                        "ID_2079": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/aZRhXBsFNDw",
                            "difficulty": "1"
                        },
                        "ID_2080": {
                            "title": "Green Greens",
                            "link": "https://youtu.be/OCH6nQYflwY",
                            "difficulty": "1"
                        },
                        "ID_2081": {
                            "title": "Castle Lololo",
                            "link": "https://youtu.be/cwgVjhTbtzg",
                            "difficulty": "1"
                        },
                        "ID_2082": {
                            "title": "Float Islands",
                            "link": "https://youtu.be/7Lj1aw4J8ZA",
                            "difficulty": "1"
                        },
                        "ID_2083": {
                            "title": "Bubbly Clouds",
                            "link": "https://youtu.be/K6lz3Akqr_U",
                            "difficulty": "1"
                        },
                        "ID_2084": {
                            "title": "Mt. Dedede",
                            "link": "https://youtu.be/qFesrZLSYsM",
                            "difficulty": "1"
                        },
                        "ID_2085": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/xtjvaCm0GHw",
                            "difficulty": "1"
                        }
                    }
                },
                "Kirby's Return to Dream Land": {
                    "gameName": "Kirby's Return to Dream Land",
                    "answers": ["kirby's return to dream land", "kirbys return to dream land", "kirbys return to dream land", "kirbys return to dreamland", "kirbys return to dreamland", "return to dream land", "return to dreamland"],
                    "songs": {
                        "ID_2360": {
                            "title": "Through the Forest",
                            "link": "https://youtu.be/njejHICStGM",
                            "difficulty": "1"
                        },
                        "ID_2361": {
                            "title": "Eerie Area",
                            "link": "https://youtu.be/T2dP_jh5Ayk",
                            "difficulty": "1"
                        },
                        "ID_2362": {
                            "title": "Sky Waltz",
                            "link": "https://youtu.be/Dz5xqZUmW2Q",
                            "difficulty": "1"
                        },
                        "ID_2363": {
                            "title": "Underworld",
                            "link": "https://youtu.be/3OGxhQq3BAk",
                            "difficulty": "1"
                        },
                        "ID_2364": {
                            "title": "Galacta Knight",
                            "link": "https://youtu.be/69cqx_lDAWQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "L.A. Noire": {
            "seriesName": "L.A. Noire",
            "seriesColor": "red",
            "game": {
                "L.A. Noire": {
                    "gameName": "L.A. Noire",
                    "answers": ["l.a. noire", "la noire", "l a noire"],
                    "songs": {
                        "ID_2097": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/xiGKxCAg_0o",
                            "difficulty": "1"
                        },
                        "ID_2098": {
                            "title": "New Beginning (Part 1)",
                            "link": "https://youtu.be/PoNenPST-Z4",
                            "difficulty": "1"
                        },
                        "ID_2099": {
                            "title": "Homicide - Use And Abuse (Part 4)",
                            "link": "https://youtu.be/3wHJFuYJDjM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Lemmings": {
            "seriesName": "Lemmings",
            "seriesColor": "red",
            "game": {
                "Lemmings (Gameboy)": {
                    "gameName": "Lemmings (Gameboy)",
                    "answers": ["lemmings (gameboy)", "lemmings"],
                    "songs": {
                        "ID_2100": {
                            "title": "Dance of the Reed Flutes",
                            "link": "https://youtu.be/v1SCv01124k",
                            "difficulty": "1"
                        },
                        "ID_2101": {
                            "title": "The Galop (Can-Can)",
                            "link": "https://youtu.be/rsqMrLsH9mU",
                            "difficulty": "1"
                        },
                        "ID_2102": {
                            "title": "Rondo Alla Turca",
                            "link": "https://youtu.be/VYq_nAQ3DlM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Life Is Strange": {
            "seriesName": "Life Is Strange",
            "seriesColor": "red",
            "game": {
                "Life Is Strange": {
                    "gameName": "Life Is Strange",
                    "answers": ["life is strange", "lis"],
                    "songs": {
                        "ID_1694": {
                            "title": "To All Of You",
                            "link": "https://youtu.be/LnG6icGIm0o",
                            "difficulty": "1"
                        },
                        "ID_1695": {
                            "title": "Mt. Washington",
                            "link": "https://youtu.be/tS_03_JO260",
                            "difficulty": "1"
                        },
                        "ID_1696": {
                            "title": "Mountains",
                            "link": "https://youtu.be/AZQuvl3bfqQ",
                            "difficulty": "1"
                        },
                        "ID_1697": {
                            "title": "Obstacles",
                            "link": "https://youtu.be/GGuHtbcCDEA",
                            "difficulty": "1"
                        }
                    }
                },
                "Life Is Strange: Before The Storm": {
                    "gameName": "Life Is Strange: Before The Storm",
                    "answers": ["life is strange: before the storm", "life is strange before the storm", "lis before the storm", "before the storm"],
                    "songs": {
                        "ID_1698": {
                            "title": "Burn It Down",
                            "link": "https://youtu.be/-TNJB3x5OXU",
                            "difficulty": "1"
                        },
                        "ID_1699": {
                            "title": "Departure",
                            "link": "https://youtu.be/R8QFtgzKyzY",
                            "difficulty": "1"
                        },
                        "ID_1700": {
                            "title": "Flaws",
                            "link": "https://youtu.be/goj3J6rU4Dc",
                            "difficulty": "1"
                        },
                        "ID_1701": {
                            "title": "Witches",
                            "link": "https://youtu.be/t4frxBDoT6c",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Lovely Planet": {
            "seriesName": "Lovely Planet",
            "seriesColor": "red",
            "game": {
                "Lovely Planet": {
                    "gameName": "Lovely Planet",
                    "answers": ["lovely planet"],
                    "songs": {
                        "ID_2103": {
                            "title": "Lovely City",
                            "link": "https://youtu.be/bzT73XKYAgA",
                            "difficulty": "1"
                        },
                        "ID_2104": {
                            "title": "Lovely Village",
                            "link": "https://youtu.be/rxhb7TrVxQ0",
                            "difficulty": "1"
                        },
                        "ID_2105": {
                            "title": "Lovely Mountains",
                            "link": "https://youtu.be/Lw8veE2ZxDQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Lufia": {
            "seriesName": "Lufia",
            "seriesColor": "red",
            "game": {
                "Lufia II: Rise of the Sinistrals": {
                    "gameName": "Lufia II: Rise of the Sinistrals",
                    "answers": ["lufia ii: rise of the sinistrals", "lufia 2", "lufia 2 rise of the sinistrals", "rise of the sinistrals"],
                    "songs": {
                        "ID_1987": {
                            "title": "Battle Theme 1",
                            "link": "https://youtu.be/NcsdauLE6VE",
                            "difficulty": "1"
                        },
                        "ID_1988": {
                            "title": "Battle Theme 2",
                            "link": "https://youtu.be/tbBg5Mb0avI",
                            "difficulty": "1"
                        },
                        "ID_1989": {
                            "title": "Battle Theme 3",
                            "link": "https://youtu.be/BLIrE5ivseQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mamorukun Curse!": {
            "seriesName": "Mamorukun Curse!",
            "seriesColor": "red",
            "game": {
                "Mamorukun Curse!": {
                    "gameName": "Mamorukun Curse!",
                    "answers": ["mamorukun curse!", "mamorukun curse", "mamo curse"],
                    "songs": {
                        "ID_1336": {
                            "title": "Yo-Kai Disco (Hell's Entrance World)",
                            "link": "https://youtu.be/K-PZixk0UgQ",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mario": {
            "seriesName": "Mario",
            "seriesColor": "red",
            "game": {
                "Mario Paint": {
                    "gameName": "Mario Paint",
                    "answers": ["mario paint"],
                    "songs": {
                        "ID_2106": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/0GdapZ1FZhI",
                            "difficulty": "1"
                        },
                        "ID_2107": {
                            "title": "BGM 1",
                            "link": "https://youtu.be/6j0HiMpV1HE",
                            "difficulty": "1"
                        },
                        "ID_2108": {
                            "title": "Gnat Attack 1",
                            "link": "https://youtu.be/HH8zHEjZZZ4",
                            "difficulty": "1"
                        }
                    }
                },
                "New Super Mario Bros.": {
                    "gameName": "New Super Mario Bros.",
                    "answers": ["new super mario bros.", "nsmb", "new super mario bros", "new mario bros"],
                    "songs": {
                        "ID_1271": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/-GK41pLUuP0",
                            "difficulty": "1"
                        },
                        "ID_1272": {
                            "title": "Athletic Theme",
                            "link": "https://youtu.be/6rvMRbcqTfk",
                            "difficulty": "1"
                        }
                    }
                },
                "New Super Mario Bros. Wii": {
                    "gameName": "New Super Mario Bros. Wii",
                    "answers": ["new super mario bros. wii", "nsmb wii", "new super mario wii", "new super mario bros wii"],
                    "songs": {
                        "ID_1283": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/wLg8oUE4H9E",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario 3D Land": {
                    "gameName": "Super Mario 3D Land",
                    "answers": ["super mario 3d land", "mario 3d land", "3d land"],
                    "songs": {
                        "ID_1292": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/89VuI2nyINw",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario 3D World": {
                    "gameName": "Super Mario 3D World",
                    "answers": ["super mario 3d world", "mario 3d world", "3d world"],
                    "songs": {
                        "ID_1293": {
                            "title": "Super Bell Hill",
                            "link": "https://youtu.be/wFxzHKx1BYQ",
                            "difficulty": "1"
                        },
                        "ID_1294": {
                            "title": "Snowball Park",
                            "link": "https://youtu.be/8wR6cHwoZtM",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario 64": {
                    "gameName": "Super Mario 64",
                    "answers": ["super mario 64", "sm64", "sm 64", "mario 64", "m64"],
                    "songs": {
                        "ID_1230": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/pYAjvWCVkH0",
                            "difficulty": "1"
                        },
                        "ID_1231": {
                            "title": "Super Mario 64 (Main Theme)",
                            "link": "https://youtu.be/7hT04AB1JU4",
                            "difficulty": "1"
                        },
                        "ID_1232": {
                            "title": "Slider",
                            "link": "https://youtu.be/l7I8dYKeke8",
                            "difficulty": "1"
                        },
                        "ID_1233": {
                            "title": "Inside the Castle Walls",
                            "link": "https://youtu.be/ZkFpUQc3Y2o",
                            "difficulty": "1"
                        },
                        "ID_1234": {
                            "title": "Dire, Dire Docks",
                            "link": "https://youtu.be/Zqa2mgjbOIM",
                            "difficulty": "1"
                        },
                        "ID_1235": {
                            "title": "Cool, Cool Mountain",
                            "link": "https://youtu.be/LOADdASJnak",
                            "difficulty": "1"
                        },
                        "ID_1236": {
                            "title": "Pirahna Plant's Lullaby",
                            "link": "https://youtu.be/V1SdZyfXfOs",
                            "difficulty": "1"
                        },
                        "ID_1237": {
                            "title": "File Select",
                            "link": "https://youtu.be/hrJNgLGbYg0",
                            "difficulty": "1"
                        },
                        "ID_1238": {
                            "title": "Stage Boss",
                            "link": "https://youtu.be/kasePUUDdK8",
                            "difficulty": "1"
                        },
                        "ID_1239": {
                            "title": "Bowser's Road",
                            "link": "https://youtu.be/3WnQBZ6idbU",
                            "difficulty": "1"
                        },
                        "ID_1240": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/o-xRxXYpavU",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Bros.": {
                    "gameName": "Super Mario Bros.",
                    "answers": ["super mario bros.", "smb", "mario bros", "super mario bros", "mario"],
                    "songs": {
                        "ID_1207": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/iy3qq7zc4EY",
                            "difficulty": "1"
                        },
                        "ID_1208": {
                            "title": "Underground Theme",
                            "link": "https://youtu.be/UOwyFPgjPQ4",
                            "difficulty": "1"
                        },
                        "ID_1209": {
                            "title": "Underwater Theme",
                            "link": "https://youtu.be/zc28zcBIX7U",
                            "difficulty": "1"
                        },
                        "ID_1210": {
                            "title": "Castle Theme",
                            "link": "https://youtu.be/In8WfBgBEis",
                            "difficulty": "1"
                        },
                        "ID_1211": {
                            "title": "Star Theme",
                            "link": "https://youtu.be/TLb33K8UO30",
                            "difficulty": "1"
                        },
                        "ID_1212": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/P1dcLvDlbCw",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Bros. 2": {
                    "gameName": "Super Mario Bros. 2",
                    "answers": ["super mario bros. 2", "smb2", "mario bros 2", "super mario bros 2", "mario 2", "smb 2"],
                    "songs": {
                        "ID_1213": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/fqtKBlK3YII",
                            "difficulty": "1"
                        },
                        "ID_1214": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/P9Ee4TevHfA",
                            "difficulty": "1"
                        },
                        "ID_1215": {
                            "title": "Dark World",
                            "link": "https://youtu.be/DqlQe9in1RU",
                            "difficulty": "1"
                        },
                        "ID_1216": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/1gQOprzFxxQ",
                            "difficulty": "1"
                        },
                        "ID_1217": {
                            "title": "Wart Battle",
                            "link": "https://youtu.be/krwnYb0g_Gg",
                            "difficulty": "1"
                        },
                        "ID_1218": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/9GB8SSIK0sQ",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Bros. 3": {
                    "gameName": "Super Mario Bros. 3",
                    "answers": ["super mario bros. 3", "smb 3", "smb3", "super mario bros 3", "mario 3", "smb 3"],
                    "songs": {
                        "ID_1219": {
                            "title": "Overworld Theme 1",
                            "link": "https://youtu.be/Qd78OMGLkVA",
                            "difficulty": "1"
                        },
                        "ID_1220": {
                            "title": "Overworld Theme 2",
                            "link": "https://youtu.be/2sH-l2xN3gU",
                            "difficulty": "1"
                        },
                        "ID_1221": {
                            "title": "Underground Theme",
                            "link": "https://youtu.be/decbYrsCjOk",
                            "difficulty": "1"
                        },
                        "ID_1222": {
                            "title": "Underwater Theme",
                            "link": "https://youtu.be/B7D0GKJDU3I",
                            "difficulty": "1"
                        },
                        "ID_1223": {
                            "title": "Castle Theme",
                            "link": "https://youtu.be/ixA3SzX6uUc",
                            "difficulty": "1"
                        },
                        "ID_1224": {
                            "title": "World Map 1",
                            "link": "https://youtu.be/1yfxp1NhLIs",
                            "difficulty": "1"
                        },
                        "ID_1225": {
                            "title": "World Map 3",
                            "link": "https://youtu.be/crth5dpq8Ns",
                            "difficulty": "1"
                        },
                        "ID_1226": {
                            "title": "World Map 6",
                            "link": "https://youtu.be/LF94p687yns",
                            "difficulty": "1"
                        },
                        "ID_1227": {
                            "title": "Recorder Theme",
                            "link": "https://youtu.be/tZqOqfgSWKU",
                            "difficulty": "1"
                        },
                        "ID_1228": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/8Tj3-bmDnS8",
                            "difficulty": "1"
                        },
                        "ID_1229": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/GzN-6zYmdAw",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Galaxy": {
                    "gameName": "Super Mario Galaxy",
                    "answers": ["super mario galaxy", "mario galaxy", "galaxy", "smg"],
                    "songs": {
                        "ID_1273": {
                            "title": "Overture",
                            "link": "https://youtu.be/Z0MFN_gTFM8",
                            "difficulty": "1"
                        },
                        "ID_1274": {
                            "title": "Luma",
                            "link": "https://youtu.be/LY_qs-ra_88",
                            "difficulty": "1"
                        },
                        "ID_1275": {
                            "title": "Good Egg Galaxy",
                            "link": "https://youtu.be/qy8Sn6DHIi0",
                            "difficulty": "1"
                        },
                        "ID_1276": {
                            "title": "Comet Observatory 1",
                            "link": "https://youtu.be/8iqMMGNixvk",
                            "difficulty": "1"
                        },
                        "ID_1277": {
                            "title": "Bowser Jr.",
                            "link": "https://youtu.be/smfAA6NN5Cs",
                            "difficulty": "1"
                        },
                        "ID_1278": {
                            "title": "Space Junk Galaxy",
                            "link": "https://youtu.be/EuYNxzSFRk8",
                            "difficulty": "1"
                        },
                        "ID_1279": {
                            "title": "Battlerock Galaxy",
                            "link": "https://youtu.be/KYhmHovdBxY",
                            "difficulty": "1"
                        },
                        "ID_1280": {
                            "title": "Buoy Base Galaxy",
                            "link": "https://youtu.be/z29bt-wjS88",
                            "difficulty": "1"
                        },
                        "ID_1281": {
                            "title": "Sad Story",
                            "link": "https://youtu.be/zNxRNSCGvaY",
                            "difficulty": "1"
                        },
                        "ID_1282": {
                            "title": "Gusty Garden Galaxy",
                            "link": "https://youtu.be/QWhhMxrX-Us",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Galaxy 2": {
                    "gameName": "Super Mario Galaxy 2",
                    "answers": ["super mario galaxy 2", "smg2", "mario galaxy 2", "smg 2", "galaxy 2"],
                    "songs": {
                        "ID_1284": {
                            "title": "Overture",
                            "link": "https://youtu.be/u9oRXhtotuc",
                            "difficulty": "1"
                        },
                        "ID_1285": {
                            "title": "Another Story",
                            "link": "https://youtu.be/CuMrIZdeEIE",
                            "difficulty": "1"
                        },
                        "ID_1286": {
                            "title": "Sky Station Galaxy",
                            "link": "https://youtu.be/WTht2pC-9AA",
                            "difficulty": "1"
                        },
                        "ID_1287": {
                            "title": "Starship Mario 1",
                            "link": "https://youtu.be/g1fhegjp_Po",
                            "difficulty": "1"
                        },
                        "ID_1288": {
                            "title": "Puzzle Plank Galaxy",
                            "link": "https://youtu.be/Oaf2gUhy74o",
                            "difficulty": "1"
                        },
                        "ID_1289": {
                            "title": "Slider",
                            "link": "https://youtu.be/ZOeEQVbPp9Y",
                            "difficulty": "1"
                        },
                        "ID_1290": {
                            "title": "Throwback Galaxy",
                            "link": "https://youtu.be/fVt61oE5BfE",
                            "difficulty": "1"
                        },
                        "ID_1291": {
                            "title": "Rosalina",
                            "link": "https://youtu.be/xqqYECCYohY",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Land": {
                    "gameName": "Super Mario Land",
                    "answers": ["super mario land", "mario land"],
                    "songs": {
                        "ID_1248": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/Gb33Qnbw520",
                            "difficulty": "1"
                        },
                        "ID_1249": {
                            "title": "Muda Kingdom",
                            "link": "https://youtu.be/N7Ol9YqAu6M",
                            "difficulty": "1"
                        },
                        "ID_1250": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/xYtBAbqJO9k",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Land 2": {
                    "gameName": "Super Mario Land 2",
                    "answers": ["super mario land 2", "mario land 2"],
                    "songs": {
                        "ID_1251": {
                            "title": "Choose Your Pipe",
                            "link": "https://youtu.be/5q6PNPSdQ8A",
                            "difficulty": "1"
                        },
                        "ID_1252": {
                            "title": "Overworld Map",
                            "link": "https://youtu.be/yIWRa39K1gs",
                            "difficulty": "1"
                        },
                        "ID_1253": {
                            "title": "Athletic Theme",
                            "link": "https://youtu.be/tdESE94vQwg",
                            "difficulty": "1"
                        },
                        "ID_1254": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/J-eOtcyP9l4",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Odyssey": {
                    "gameName": "Super Mario Odyssey",
                    "answers": ["super mario odyssey", "odyssey", "mario odyssey"],
                    "songs": {
                        "ID_1241": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/pAIOQIkZv1c",
                            "difficulty": "1"
                        },
                        "ID_1242": {
                            "title": "Bonneton",
                            "link": "https://youtu.be/KDeMFxTLCIM",
                            "difficulty": "1"
                        },
                        "ID_1243": {
                            "title": "Fossil Falls",
                            "link": "https://youtu.be/1y58yAB3Uvw",
                            "difficulty": "1"
                        },
                        "ID_1244": {
                            "title": "Steam Gardens",
                            "link": "https://youtu.be/s8Mx18uR1dY",
                            "difficulty": "1"
                        },
                        "ID_1245": {
                            "title": "New Donk City: Daytime",
                            "link": "https://youtu.be/4vWAZfLuNoE",
                            "difficulty": "1"
                        },
                        "ID_1246": {
                            "title": "Jump Up, Super Star!",
                            "link": "https://youtu.be/e9r5hx47kxM",
                            "difficulty": "1"
                        },
                        "ID_1247": {
                            "title": "New Donk City (Café)",
                            "link": "https://youtu.be/nrCNjM6wvsU",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Sunshine": {
                    "gameName": "Super Mario Sunshine",
                    "answers": ["super mario sunshine", "mario sunshine", "sms"],
                    "songs": {
                        "ID_888": {
                            "title": "Shadow Mario",
                            "link": "https://youtu.be/bwRIQX8iLbI",
                            "difficulty": "1"
                        },
                        "ID_889": {
                            "title": "Bianco Hills",
                            "link": "https://youtu.be/JA8JClD7jDg",
                            "difficulty": "1"
                        },
                        "ID_890": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/-uFpYEOGqV4",
                            "difficulty": "1"
                        },
                        "ID_891": {
                            "title": "Secret Course",
                            "link": "https://youtu.be/DvZWxiUfrNo",
                            "difficulty": "1"
                        },
                        "ID_892": {
                            "title": "Ricco Harbor",
                            "link": "https://youtu.be/P5iSWG8RHAs",
                            "difficulty": "1"
                        },
                        "ID_893": {
                            "title": "Gelato Beach",
                            "link": "https://youtu.be/el_r5y_AcrE",
                            "difficulty": "1"
                        },
                        "ID_894": {
                            "title": "Secret Course: Sky & Sea",
                            "link": "https://youtu.be/pVpKQljWtyo",
                            "difficulty": "1"
                        },
                        "ID_895": {
                            "title": "Pinna Park",
                            "link": "https://youtu.be/2HqGNaEMF70",
                            "difficulty": "1"
                        },
                        "ID_896": {
                            "title": "Pinna Beach",
                            "link": "https://youtu.be/WcSM-p1ch8E",
                            "difficulty": "1"
                        },
                        "ID_897": {
                            "title": "Noki Bay",
                            "link": "https://youtu.be/HqY0FnkqD98",
                            "difficulty": "1"
                        },
                        "ID_898": {
                            "title": "Sirena Beach",
                            "link": "https://youtu.be/Kr2C0jkVQfE",
                            "difficulty": "1"
                        },
                        "ID_899": {
                            "title": "Hotel Delfino",
                            "link": "https://youtu.be/E0Y6uNRtCfs",
                            "difficulty": "1"
                        },
                        "ID_900": {
                            "title": "Pianta Village",
                            "link": "https://youtu.be/etYb-p8uhWA",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario World": {
                    "gameName": "Super Mario World",
                    "answers": ["super mario world", "mario world"],
                    "songs": {
                        "ID_1255": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/qEpaZR2Dvlg",
                            "difficulty": "1"
                        },
                        "ID_1256": {
                            "title": "Vanilla Dome",
                            "link": "https://youtu.be/3suEhQUt5Us",
                            "difficulty": "1"
                        },
                        "ID_1257": {
                            "title": "Forest of Illusion",
                            "link": "https://youtu.be/j89GDcp9H2k",
                            "difficulty": "1"
                        },
                        "ID_1258": {
                            "title": "Star Road",
                            "link": "https://youtu.be/wKiUx6vAwRY",
                            "difficulty": "1"
                        },
                        "ID_1259": {
                            "title": "Underwater Theme",
                            "link": "https://youtu.be/BHCBzTsg854",
                            "difficulty": "1"
                        },
                        "ID_1260": {
                            "title": "Castle Theme",
                            "link": "https://youtu.be/fdmS4ndSAT8",
                            "difficulty": "1"
                        },
                        "ID_1261": {
                            "title": "Bonus Screen",
                            "link": "https://youtu.be/wASQJUxZvaQ",
                            "difficulty": "1"
                        },
                        "ID_1262": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/tAaGKo4XVvM",
                            "difficulty": "1"
                        },
                        "ID_1263": {
                            "title": "Athletic Theme",
                            "link": "https://youtu.be/ksTILugMwZc",
                            "difficulty": "1"
                        },
                        "ID_1264": {
                            "title": "Ending",
                            "link": "https://youtu.be/98d4D6AQkSE",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario World 2: Yoshi's Island": {
                    "gameName": "Super Mario World 2: Yoshi's Island",
                    "answers": ["super mario world 2: yoshi's island", "mario world 2", "yoshis island", "yoshi's island", "super mario world 2"],
                    "songs": {
                        "ID_1265": {
                            "title": "Story Music Box",
                            "link": "https://youtu.be/if7Ekscjaq4",
                            "difficulty": "1"
                        },
                        "ID_1266": {
                            "title": "Flower Garden",
                            "link": "https://youtu.be/pqQq4hla0xo",
                            "difficulty": "1"
                        },
                        "ID_1267": {
                            "title": "Athletic",
                            "link": "https://youtu.be/tw7HHUItwAg",
                            "difficulty": "1"
                        },
                        "ID_1268": {
                            "title": "Overworld",
                            "link": "https://youtu.be/ryD1B3b6yug",
                            "difficulty": "1"
                        },
                        "ID_1269": {
                            "title": "Big Boss",
                            "link": "https://youtu.be/hYN15hD_hLg",
                            "difficulty": "1"
                        },
                        "ID_1270": {
                            "title": "Bowser",
                            "link": "https://youtu.be/44vSEmdSNww",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mario & Luigi": {
            "seriesName": "Mario & Luigi",
            "seriesColor": "red",
            "game": {
                "Mario & Luigi: Dream Team": {
                    "gameName": "Mario & Luigi: Dream Team",
                    "answers": ["mario & luigi: dream team", "mario and luigi dream team", "dream team", "mario & luigi dream team"],
                    "songs": {
                        "ID_2365": {
                            "title": "Never Let Up!",
                            "link": "https://youtu.be/bpn1x_OILHE",
                            "difficulty": "1"
                        },
                        "ID_2366": {
                            "title": "Size Up Your Enemy",
                            "link": "https://youtu.be/jCULfPd9ALw",
                            "difficulty": "1"
                        },
                        "ID_2367": {
                            "title": "Lofty Mount Pajamaja",
                            "link": "https://youtu.be/5sBl0iQ1i18",
                            "difficulty": "1"
                        },
                        "ID_2368": {
                            "title": "Sacred Somnom Woods",
                            "link": "https://youtu.be/NUmmCDyB0EI",
                            "difficulty": "1"
                        },
                        "ID_2369": {
                            "title": "Victory in the Dream World",
                            "link": "https://youtu.be/B43bXrRVPFE",
                            "difficulty": "1"
                        },
                        "ID_2370": {
                            "title": "The Final Antasma Battle",
                            "link": "https://youtu.be/PrAYVhPU-9g",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario & Luigi: Superstar Saga": {
                    "gameName": "Mario & Luigi: Superstar Saga",
                    "answers": ["mario & luigi: superstar saga", "mario and luigi superstar saga", "superstar saga", "mario & luigi superstar saga"],
                    "songs": {
                        "ID_2371": {
                            "title": "Preparing for Travelling",
                            "link": "https://youtu.be/5mxxIgVqaXc",
                            "difficulty": "1"
                        },
                        "ID_2372": {
                            "title": "Menu Screen",
                            "link": "https://youtu.be/byGqqe0f92Y",
                            "difficulty": "1"
                        },
                        "ID_2373": {
                            "title": "Koopa Tutorials",
                            "link": "https://youtu.be/k8HyUqi6Rng",
                            "difficulty": "1"
                        },
                        "ID_2374": {
                            "title": "Come On!",
                            "link": "https://youtu.be/NQEf2Cy_TlA",
                            "difficulty": "1"
                        },
                        "ID_2375": {
                            "title": "Come On, Again!",
                            "link": "https://youtu.be/eH79b2u12XM",
                            "difficulty": "1"
                        },
                        "ID_2376": {
                            "title": "Professor E. Gadd",
                            "link": "https://youtu.be/lXf3QKExm1E",
                            "difficulty": "1"
                        },
                        "ID_2377": {
                            "title": "The End of Traveling",
                            "link": "https://youtu.be/XB9mBmG7Etg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mario Golf": {
            "seriesName": "Mario Golf",
            "seriesColor": "red",
            "game": {
                "Mario Golf 64": {
                    "gameName": "Mario Golf 64",
                    "answers": ["mario golf 64", "mario golf", "mario golf 64"],
                    "songs": {
                        "ID_783": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/T0hNPBfVu1U",
                            "difficulty": "1"
                        },
                        "ID_784": {
                            "title": "Ring Shot",
                            "link": "https://youtu.be/6sw3HNfWvhQ",
                            "difficulty": "1"
                        },
                        "ID_785": {
                            "title": "Mini Golf",
                            "link": "https://youtu.be/eAeQ8FGSTdQ",
                            "difficulty": "1"
                        },
                        "ID_786": {
                            "title": "Dormie Hole",
                            "link": "https://youtu.be/Psur418k86U",
                            "difficulty": "1"
                        },
                        "ID_787": {
                            "title": "Toad Highlands",
                            "link": "https://youtu.be/gelz7iduUgY",
                            "difficulty": "1"
                        },
                        "ID_788": {
                            "title": "Koopa Park",
                            "link": "https://youtu.be/RcKDgpfx8Rw",
                            "difficulty": "1"
                        },
                        "ID_789": {
                            "title": "Yoshi's Island",
                            "link": "https://youtu.be/cwxMADY-dok",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mario Kart": {
            "seriesName": "Mario Kart",
            "seriesColor": "red",
            "game": {
                "Mario Kart 64": {
                    "gameName": "Mario Kart 64",
                    "answers": ["mario kart 64", "mk 64", "mk64"],
                    "songs": {
                        "ID_1162": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/s3ZZ-RXLgxU",
                            "difficulty": "1"
                        },
                        "ID_1163": {
                            "title": "Setup and Kart Select",
                            "link": "https://youtu.be/Z3IsodCVEOc",
                            "difficulty": "1"
                        },
                        "ID_1164": {
                            "title": "Raceways",
                            "link": "https://youtu.be/IfLfUWBuygY",
                            "difficulty": "1"
                        },
                        "ID_1165": {
                            "title": "Moo Moo Farm",
                            "link": "https://youtu.be/O9DDMYif4eQ",
                            "difficulty": "1"
                        },
                        "ID_1166": {
                            "title": "Koopa Troopa Beach",
                            "link": "https://youtu.be/fwxnNZql554",
                            "difficulty": "1"
                        },
                        "ID_1167": {
                            "title": "Toad's Turnpike",
                            "link": "https://youtu.be/r1VFMRCY5aE",
                            "difficulty": "1"
                        },
                        "ID_1168": {
                            "title": "Frappe Snowland",
                            "link": "https://youtu.be/HW9WHjictHc",
                            "difficulty": "1"
                        },
                        "ID_1169": {
                            "title": "Choco Mountain",
                            "link": "https://youtu.be/N4FZgWjBas0",
                            "difficulty": "1"
                        },
                        "ID_1170": {
                            "title": "DK's Jungle Park",
                            "link": "https://youtu.be/mivjTMo6AcI",
                            "difficulty": "1"
                        },
                        "ID_1171": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/shvbqQ-1vww",
                            "difficulty": "1"
                        },
                        "ID_1172": {
                            "title": "Winning Results",
                            "link": "https://youtu.be/a9SPWok6CuY",
                            "difficulty": "1"
                        },
                        "ID_1173": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/shvbqQ-1vww",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario Kart 7": {
                    "gameName": "Mario Kart 7",
                    "answers": ["mario kart 7", "mk 7", "mk7"],
                    "songs": {
                        "ID_1192": {
                            "title": "Wuhu Loop",
                            "link": "https://youtu.be/A0b3JraEY-k",
                            "difficulty": "1"
                        },
                        "ID_1193": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/FhWplirtLnQ",
                            "difficulty": "1"
                        },
                        "ID_1194": {
                            "title": "Rainbow Road (Moon)",
                            "link": "https://youtu.be/5gLkMsKu4-8",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario Kart 8": {
                    "gameName": "Mario Kart 8",
                    "answers": ["mario kart 8", "mk 8", "mk8"],
                    "songs": {
                        "ID_1195": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/OUkM4Kycj8c",
                            "difficulty": "1"
                        },
                        "ID_1196": {
                            "title": "Mario Kart Stadium",
                            "link": "https://youtu.be/LmmDXnnaWC4",
                            "difficulty": "1"
                        },
                        "ID_1197": {
                            "title": "Mario Circuit",
                            "link": "https://youtu.be/UO88SxpZiWY",
                            "difficulty": "1"
                        },
                        "ID_1198": {
                            "title": "Toad Harbor",
                            "link": "https://youtu.be/m3ALip0VUHQ",
                            "difficulty": "1"
                        },
                        "ID_1199": {
                            "title": "Sunshine Airport",
                            "link": "https://youtu.be/XBq7gHHioS4",
                            "difficulty": "1"
                        },
                        "ID_1200": {
                            "title": "Dolphin Shoals",
                            "link": "https://youtu.be/-ytaJRn0RSU",
                            "difficulty": "1"
                        },
                        "ID_1201": {
                            "title": "Electrodome",
                            "link": "https://youtu.be/xkfpgWvpBMg",
                            "difficulty": "1"
                        },
                        "ID_1202": {
                            "title": "Mount Wario",
                            "link": "https://youtu.be/OcMjtg8J6hc",
                            "difficulty": "1"
                        },
                        "ID_1203": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/s7pe0VrcZXQ",
                            "difficulty": "1"
                        },
                        "ID_1204": {
                            "title": "Mute City",
                            "link": "https://youtu.be/PcpNJcVJ11k",
                            "difficulty": "1"
                        },
                        "ID_1205": {
                            "title": "Hyrule Circuit",
                            "link": "https://youtu.be/o6tKCjFYXDM",
                            "difficulty": "1"
                        },
                        "ID_1206": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/Ob708MC9O6Q",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario Kart DS": {
                    "gameName": "Mario Kart DS",
                    "answers": ["mario kart ds", "mk ds", "mkds"],
                    "songs": {
                        "ID_1179": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/x4OIAKCsOQk",
                            "difficulty": "1"
                        },
                        "ID_1180": {
                            "title": "Yoshi Falls",
                            "link": "https://youtu.be/AHT5mZBNDZQ",
                            "difficulty": "1"
                        },
                        "ID_1181": {
                            "title": "Cheep Cheep Beach",
                            "link": "https://youtu.be/BGHdNU952kc",
                            "difficulty": "1"
                        },
                        "ID_1182": {
                            "title": "Luigi's Mansion",
                            "link": "https://youtu.be/XrFmsYIkiCA",
                            "difficulty": "1"
                        },
                        "ID_1183": {
                            "title": "Delfino Square",
                            "link": "https://youtu.be/gjMVjCsv_iU",
                            "difficulty": "1"
                        },
                        "ID_1184": {
                            "title": "Waluigi Pinball",
                            "link": "https://youtu.be/FT6PZUTdd04",
                            "difficulty": "1"
                        },
                        "ID_1185": {
                            "title": "Peach Gardens",
                            "link": "https://youtu.be/ko5Ea635M7U",
                            "difficulty": "1"
                        },
                        "ID_1186": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/Zn9VjMEh9CM",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario Kart Wii": {
                    "gameName": "Mario Kart Wii",
                    "answers": ["mario kart wii", "mario kart wii", "mariokart wii", "mk wii"],
                    "songs": {
                        "ID_825": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/hm1JaJD4s9Y",
                            "difficulty": "1"
                        },
                        "ID_826": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/Qlmurjko1NM",
                            "difficulty": "1"
                        },
                        "ID_827": {
                            "title": "Moo Moo Meadows",
                            "link": "https://youtu.be/Dgsa4sPWsYA",
                            "difficulty": "1"
                        },
                        "ID_828": {
                            "title": "Mushroom Gorge",
                            "link": "https://youtu.be/sKU40Ahiofg",
                            "difficulty": "1"
                        },
                        "ID_829": {
                            "title": "Toad's Factory",
                            "link": "https://youtu.be/NbWazKpuiC8",
                            "difficulty": "1"
                        },
                        "ID_830": {
                            "title": "Coconut Mall",
                            "link": "https://youtu.be/QY7SxnKqMmE",
                            "difficulty": "1"
                        },
                        "ID_831": {
                            "title": "DK Summit",
                            "link": "https://youtu.be/be337mef4XA",
                            "difficulty": "1"
                        },
                        "ID_832": {
                            "title": "Daisy Circuit",
                            "link": "https://youtu.be/O84YXguVcoc",
                            "difficulty": "1"
                        },
                        "ID_833": {
                            "title": "Koopa Cape",
                            "link": "https://youtu.be/IVjh8eKVSKM",
                            "difficulty": "1"
                        },
                        "ID_834": {
                            "title": "Maple Treeway",
                            "link": "https://youtu.be/YyTK5-d2nWU",
                            "difficulty": "1"
                        },
                        "ID_835": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/rrx0XWPOplM",
                            "difficulty": "1"
                        },
                        "ID_836": {
                            "title": "Top Results",
                            "link": "https://youtu.be/_f1iv3qZJOs",
                            "difficulty": "1"
                        },
                        "ID_837": {
                            "title": "Wi-Fi Menu",
                            "link": "https://youtu.be/FT5EMBGKdhY",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario Kart: Double Dash!!": {
                    "gameName": "Mario Kart: Double Dash!!",
                    "answers": ["mario kart: double dash!!", "mk dd", "double dash", "mkdd", "mario kart double dash"],
                    "songs": {
                        "ID_1187": {
                            "title": "Circuit Theme",
                            "link": "https://youtu.be/FKC5EfjgyT8",
                            "difficulty": "1"
                        },
                        "ID_1188": {
                            "title": "Baby Park",
                            "link": "https://youtu.be/y99wX-JZGJo",
                            "difficulty": "1"
                        },
                        "ID_1189": {
                            "title": "Waluigi Stadium & Wario Colosseum",
                            "link": "https://youtu.be/vMyFkraDzyY",
                            "difficulty": "1"
                        },
                        "ID_1190": {
                            "title": "DK Mountain & Dino Dino Jungle",
                            "link": "https://youtu.be/PbU6CCGhmeU",
                            "difficulty": "1"
                        },
                        "ID_1191": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/FHdEjH_7YY8",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Mario Kart": {
                    "gameName": "Super Mario Kart",
                    "answers": ["super mario kart", "smk", "mario kart snes"],
                    "songs": {
                        "ID_1175": {
                            "title": "Mario Circuit",
                            "link": "https://youtu.be/0cWb4DN44WU",
                            "difficulty": "1"
                        },
                        "ID_1176": {
                            "title": "Koopa Beach",
                            "link": "https://youtu.be/VWwGKT5jU-4",
                            "difficulty": "1"
                        },
                        "ID_1177": {
                            "title": "Bowser's Castle",
                            "link": "https://youtu.be/7NMQUBOXu1g",
                            "difficulty": "1"
                        },
                        "ID_1178": {
                            "title": "Rainbow Road",
                            "link": "https://youtu.be/K03ATBNi3Vw",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mario Party": {
            "seriesName": "Mario Party",
            "seriesColor": "red",
            "game": {
                "Mario Party": {
                    "gameName": "Mario Party",
                    "answers": ["mario party", "mario party", "mario party 1"],
                    "songs": {
                        "ID_790": {
                            "title": "Winner",
                            "link": "https://youtu.be/NhEH0aZAyCo",
                            "difficulty": "1"
                        },
                        "ID_791": {
                            "title": "Wide, Wide Ocean",
                            "link": "https://youtu.be/-UsOr5_PTBY",
                            "difficulty": "1"
                        },
                        "ID_792": {
                            "title": "Where Have The Stars Gone?",
                            "link": "https://youtu.be/rH9Otxf-G8c",
                            "difficulty": "1"
                        },
                        "ID_793": {
                            "title": "Tropical Island (Yoshi's Board)",
                            "link": "https://youtu.be/vHcMArHUYK4",
                            "difficulty": "1"
                        },
                        "ID_794": {
                            "title": "The Stolen Star",
                            "link": "https://youtu.be/9tZkxgEXpfE",
                            "difficulty": "1"
                        },
                        "ID_795": {
                            "title": "The Room Underground",
                            "link": "https://youtu.be/wPz59NlIZKs",
                            "difficulty": "1"
                        },
                        "ID_796": {
                            "title": "Slowly, Slowly",
                            "link": "https://youtu.be/AdhmG8Rppzw",
                            "difficulty": "1"
                        },
                        "ID_797": {
                            "title": "Saving Courage",
                            "link": "https://youtu.be/w_GOrEYkirg",
                            "difficulty": "1"
                        },
                        "ID_798": {
                            "title": "Results",
                            "link": "https://youtu.be/_bPtlScYnXI",
                            "difficulty": "1"
                        },
                        "ID_799": {
                            "title": "Rainbow Castle (Mario's Board)",
                            "link": "https://youtu.be/n47B16L6qo4",
                            "difficulty": "1"
                        },
                        "ID_800": {
                            "title": "Play A Mini-Game",
                            "link": "https://youtu.be/TGrWq6CvD04",
                            "difficulty": "1"
                        },
                        "ID_801": {
                            "title": "Peaceful Mushroom Village",
                            "link": "https://youtu.be/LLnbcbZMFuA",
                            "difficulty": "1"
                        },
                        "ID_802": {
                            "title": "Outcome of Adventure",
                            "link": "https://youtu.be/GI3zJ-dx010",
                            "difficulty": "1"
                        },
                        "ID_803": {
                            "title": "Option House Theme",
                            "link": "https://youtu.be/iS3zWtJWNt0",
                            "difficulty": "1"
                        },
                        "ID_804": {
                            "title": "Move To The Mambo!",
                            "link": "https://youtu.be/xB4m21mAyEQ",
                            "difficulty": "1"
                        },
                        "ID_805": {
                            "title": "Koopa Troopa's Theme",
                            "link": "https://youtu.be/7QDDhH8J1HE",
                            "difficulty": "1"
                        },
                        "ID_806": {
                            "title": "Hit or Miss Chance Game",
                            "link": "https://youtu.be/tIQ_qI871Ss",
                            "difficulty": "1"
                        },
                        "ID_807": {
                            "title": "Mario Party Theme",
                            "link": "https://youtu.be/9zcXQEjiZtc",
                            "difficulty": "1"
                        },
                        "ID_808": {
                            "title": "Let's Limbo!",
                            "link": "https://youtu.be/iQavbF9CCvI",
                            "difficulty": "1"
                        },
                        "ID_809": {
                            "title": "Let's Go Lightly",
                            "link": "https://youtu.be/iLClxxM0GSY",
                            "difficulty": "1"
                        },
                        "ID_810": {
                            "title": "Full of Danger",
                            "link": "https://youtu.be/F1N86WNDMbM",
                            "difficulty": "1"
                        },
                        "ID_811": {
                            "title": "Faster Than All",
                            "link": "https://youtu.be/TUkcoptWXDU",
                            "difficulty": "1"
                        },
                        "ID_812": {
                            "title": "Everyone's A SuperStar!",
                            "link": "https://youtu.be/zN2HJDDcKe0",
                            "difficulty": "1"
                        },
                        "ID_813": {
                            "title": "Engine Room (Luigi's Board)",
                            "link": "https://youtu.be/FfkCR4hZTro",
                            "difficulty": "1"
                        },
                        "ID_814": {
                            "title": "Ducking and Dodging (Mini-Game)",
                            "link": "https://youtu.be/gWPcaB5puKU",
                            "difficulty": "1"
                        },
                        "ID_815": {
                            "title": "Dodging Danger",
                            "link": "https://youtu.be/qM3NTI48jW8",
                            "difficulty": "1"
                        },
                        "ID_816": {
                            "title": "Coins of the World",
                            "link": "https://youtu.be/Bshe0RYNCgg",
                            "difficulty": "1"
                        },
                        "ID_817": {
                            "title": "Can It Be Done",
                            "link": "https://youtu.be/tzP6DiVqhLw",
                            "difficulty": "1"
                        },
                        "ID_818": {
                            "title": "Bowser's Theme",
                            "link": "https://youtu.be/o8rZ3IZuQf0",
                            "difficulty": "1"
                        },
                        "ID_819": {
                            "title": "Board Map (Overview)",
                            "link": "https://youtu.be/bn_7SUcQHnY",
                            "difficulty": "1"
                        },
                        "ID_820": {
                            "title": "Birthday Cake (Peach's Board)",
                            "link": "https://youtu.be/tFvIhW4ZNP0",
                            "difficulty": "1"
                        },
                        "ID_821": {
                            "title": "After The Victory",
                            "link": "https://youtu.be/IOmclZ-hv7g",
                            "difficulty": "1"
                        },
                        "ID_822": {
                            "title": "Battle Canyon (Wario's Board)",
                            "link": "https://youtu.be/VRlJXOVNzKs",
                            "difficulty": "1"
                        },
                        "ID_823": {
                            "title": "Adventure Begins",
                            "link": "https://youtu.be/otSddH7CSZg",
                            "difficulty": "1"
                        },
                        "ID_824": {
                            "title": "Mini-Game Island (All-In-One)",
                            "link": "https://youtu.be/4Swlo3DQPWA",
                            "difficulty": "1"
                        }
                    }
                },
                "Mario Party 2": {
                    "gameName": "Mario Party 2",
                    "answers": ["mario party 2"],
                    "songs": {
                        "ID_2109": {
                            "title": "In The Pipe",
                            "link": "https://youtu.be/dNeJ8yC-tMc",
                            "difficulty": "1"
                        },
                        "ID_2110": {
                            "title": "Adventure Begins",
                            "link": "https://youtu.be/wPRAt3pYfjM",
                            "difficulty": "1"
                        },
                        "ID_2111": {
                            "title": "Pirate Island",
                            "link": "https://youtu.be/w1jLG8rEwz0",
                            "difficulty": "1"
                        },
                        "ID_2112": {
                            "title": "Western Land",
                            "link": "https://youtu.be/l9cfpn81pyA",
                            "difficulty": "1"
                        },
                        "ID_2113": {
                            "title": "Space Land",
                            "link": "https://youtu.be/gyuzAHoRxFc",
                            "difficulty": "1"
                        },
                        "ID_2114": {
                            "title": "Going Somewhere",
                            "link": "https://youtu.be/UX8r-bkoYso",
                            "difficulty": "1"
                        },
                        "ID_2115": {
                            "title": "The Adventure Ends",
                            "link": "https://youtu.be/z6tbHbpVomM",
                            "difficulty": "1"
                        },
                        "ID_2116": {
                            "title": "Let the Game Begin",
                            "link": "https://youtu.be/T30OETu-jd4",
                            "difficulty": "1"
                        },
                        "ID_2117": {
                            "title": "Credits",
                            "link": "https://youtu.be/jZOiFOKAQJg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Marvel vs. Capcom": {
            "seriesName": "Marvel vs. Capcom",
            "seriesColor": "red",
            "game": {
                "Ultimate Marvel vs. Capcom 3": {
                    "gameName": "Ultimate Marvel vs. Capcom 3",
                    "answers": ["ultimate marvel vs. capcom 3", "umvc3", "umvc 3", "ultimate marvel vs capcom 3", "ultimate marvel versus capcom 3", "", "marvel vs capcom 3", "mvc 3"],
                    "songs": {
                        "ID_2118": {
                            "title": "Theme of Phoenix Wright",
                            "link": "https://youtu.be/Lbv5AJDh9o8",
                            "difficulty": "1"
                        },
                        "ID_2119": {
                            "title": "Theme of Amaterasu",
                            "link": "https://youtu.be/CoaTNWnqiok",
                            "difficulty": "1"
                        },
                        "ID_2120": {
                            "title": "Theme of Phoenix Wright (Turnabout Mode)",
                            "link": "https://youtu.be/IP9PoBlFDp4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mega Man": {
            "seriesName": "Mega Man",
            "seriesColor": "red",
            "game": {
                "Mega Man": {
                    "gameName": "Mega Man",
                    "answers": ["mega man", "mega man 1", "megaman"],
                    "songs": {
                        "ID_1604": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/8nHAde9X_D4",
                            "difficulty": "1"
                        },
                        "ID_1605": {
                            "title": "Cut Man Stage",
                            "link": "https://youtu.be/GsXEqfDL40k",
                            "difficulty": "1"
                        },
                        "ID_1606": {
                            "title": "Elec Man Stage",
                            "link": "https://youtu.be/CJdFxTOysjo",
                            "difficulty": "1"
                        },
                        "ID_1607": {
                            "title": "Guts Man Stage",
                            "link": "https://youtu.be/m2jq2YCxAuE",
                            "difficulty": "1"
                        },
                        "ID_1608": {
                            "title": "Bomb Man Stage",
                            "link": "https://youtu.be/avjuNvutxsw",
                            "difficulty": "1"
                        },
                        "ID_1609": {
                            "title": "Fire Man Stage",
                            "link": "https://youtu.be/CTIdRD5qrag",
                            "difficulty": "1"
                        },
                        "ID_1610": {
                            "title": "Ice Man Stage",
                            "link": "https://youtu.be/CUZlDht8iro",
                            "difficulty": "1"
                        },
                        "ID_1611": {
                            "title": "Wily Fortress 1",
                            "link": "https://youtu.be/gg97ZlbUJXY",
                            "difficulty": "1"
                        },
                        "ID_1612": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/5WduvI0CZ4c",
                            "difficulty": "1"
                        },
                        "ID_1613": {
                            "title": "Wily Battle",
                            "link": "https://youtu.be/ojWBRzs8-ts",
                            "difficulty": "1"
                        },
                        "ID_1614": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/9LmdO3TCzpM",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 10": {
                    "gameName": "Mega Man 10",
                    "answers": ["mega man 10", "megaman 10", "mm 10", "mm10"],
                    "songs": {
                        "ID_2148": {
                            "title": "Opening (Usual Day)",
                            "link": "https://youtu.be/Tj8IeOzrn-Q",
                            "difficulty": "1"
                        },
                        "ID_2149": {
                            "title": "Opening (Go Together)",
                            "link": "https://youtu.be/5sXKNyhLMbE",
                            "difficulty": "1"
                        },
                        "ID_2150": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/_KvBofCOjy0",
                            "difficulty": "1"
                        },
                        "ID_2151": {
                            "title": "Menu Theme",
                            "link": "https://youtu.be/v0OZdSYiPfk",
                            "difficulty": "1"
                        },
                        "ID_2152": {
                            "title": "Stage Select",
                            "link": "https://youtu.be/ewGHHsiDtjs",
                            "difficulty": "1"
                        },
                        "ID_2153": {
                            "title": "Blade Man (King of Blades)",
                            "link": "https://youtu.be/rwE7KyFcZ_Y",
                            "difficulty": "1"
                        },
                        "ID_2154": {
                            "title": "Chill Man (Absolute Chill)",
                            "link": "https://youtu.be/aoleEdOSRFw",
                            "difficulty": "1"
                        },
                        "ID_2155": {
                            "title": "Strike Man (Fireball Strike)",
                            "link": "https://youtu.be/zJHsrxAv-7Q",
                            "difficulty": "1"
                        },
                        "ID_2156": {
                            "title": "Nitro Man (Nitro Rider)",
                            "link": "https://youtu.be/wsfjSBeKJRE",
                            "difficulty": "1"
                        },
                        "ID_2157": {
                            "title": "Solar Man (Solar Inferno)",
                            "link": "https://youtu.be/2JK3keY09dU",
                            "difficulty": "1"
                        },
                        "ID_2158": {
                            "title": "Boss",
                            "link": "https://youtu.be/bWpO9nyQ4iw",
                            "difficulty": "1"
                        },
                        "ID_2159": {
                            "title": "Shop (Mega Man)",
                            "link": "https://youtu.be/va0XG4mX1Tc",
                            "difficulty": "1"
                        },
                        "ID_2160": {
                            "title": "Dr. Wily Stage Boss",
                            "link": "https://youtu.be/IjzYS68bVXk",
                            "difficulty": "1"
                        },
                        "ID_2161": {
                            "title": "Endless Stage (Endless Struggle)",
                            "link": "https://youtu.be/zoyTqyEtLZg",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 2": {
                    "gameName": "Mega Man 2",
                    "answers": ["mega man 2", "megaman 2"],
                    "songs": {
                        "ID_1615": {
                            "title": "Opening",
                            "link": "https://youtu.be/CL02gX8hSTk",
                            "difficulty": "1"
                        },
                        "ID_1616": {
                            "title": "Title",
                            "link": "https://youtu.be/vFdby6ljawk",
                            "difficulty": "1"
                        },
                        "ID_1617": {
                            "title": "Menu Screen",
                            "link": "https://youtu.be/K_1IgParl80",
                            "difficulty": "1"
                        },
                        "ID_1618": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/SZUI_QQjxRc",
                            "difficulty": "1"
                        },
                        "ID_1619": {
                            "title": "Metal Man Stage",
                            "link": "https://youtu.be/uQXA9RkC_-c",
                            "difficulty": "1"
                        },
                        "ID_1620": {
                            "title": "Air Man Stage",
                            "link": "https://youtu.be/IhK4D3ytYMc",
                            "difficulty": "1"
                        },
                        "ID_1621": {
                            "title": "Bubble Man Stage",
                            "link": "https://youtu.be/FEULEvmq7yE",
                            "difficulty": "1"
                        },
                        "ID_1622": {
                            "title": "Quick Man Stage",
                            "link": "https://youtu.be/FRa4LHSJf_M",
                            "difficulty": "1"
                        },
                        "ID_1623": {
                            "title": "Crash Man Stage",
                            "link": "https://youtu.be/7oO7QC32Wfs",
                            "difficulty": "1"
                        },
                        "ID_1624": {
                            "title": "Flash Man Stage",
                            "link": "https://youtu.be/26MopY4DTZU",
                            "difficulty": "1"
                        },
                        "ID_1625": {
                            "title": "Heat Man Stage",
                            "link": "https://youtu.be/2OJphbcA9SY",
                            "difficulty": "1"
                        },
                        "ID_1626": {
                            "title": "Wood Man Stage",
                            "link": "https://youtu.be/WvAAOmoEftg",
                            "difficulty": "1"
                        },
                        "ID_1627": {
                            "title": "Wily Fortress 1",
                            "link": "https://youtu.be/aTbfpkByIM8",
                            "difficulty": "1"
                        },
                        "ID_1628": {
                            "title": "Wily Fortress 2",
                            "link": "https://youtu.be/tgY2Sf5vitQ",
                            "difficulty": "1"
                        },
                        "ID_1629": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/GPVDroHSUic",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 3": {
                    "gameName": "Mega Man 3",
                    "answers": ["mega man 3", "megaman 3"],
                    "songs": {
                        "ID_1630": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/U2kTeh7FNl0",
                            "difficulty": "1"
                        },
                        "ID_1631": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/Xix6u4HyGPo",
                            "difficulty": "1"
                        },
                        "ID_1632": {
                            "title": "Gemini Man Stage",
                            "link": "https://youtu.be/J2LF3YR2dNM",
                            "difficulty": "1"
                        },
                        "ID_1633": {
                            "title": "Needle Man Stage",
                            "link": "https://youtu.be/wDJbOB1h2EU",
                            "difficulty": "1"
                        },
                        "ID_1634": {
                            "title": "Shadow Man Stage",
                            "link": "https://youtu.be/Usl7cw6VnLU",
                            "difficulty": "1"
                        },
                        "ID_1635": {
                            "title": "Snake Man Stage",
                            "link": "https://youtu.be/ZqGLXispP08",
                            "difficulty": "1"
                        },
                        "ID_1636": {
                            "title": "Spark Man Stage",
                            "link": "https://youtu.be/6J5cN87c2yM",
                            "difficulty": "1"
                        },
                        "ID_1637": {
                            "title": "Top Man Stage",
                            "link": "https://youtu.be/4dgtHw-uAxY",
                            "difficulty": "1"
                        },
                        "ID_1638": {
                            "title": "Hard Man Stage",
                            "link": "https://youtu.be/JzzJwrIN6Mc",
                            "difficulty": "1"
                        },
                        "ID_1639": {
                            "title": "Magnet Man Stage",
                            "link": "https://youtu.be/fuKQCXRseU8",
                            "difficulty": "1"
                        },
                        "ID_1640": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/y3t6peqsorE",
                            "difficulty": "1"
                        },
                        "ID_1641": {
                            "title": "Wily Fortress 1",
                            "link": "https://youtu.be/sfOE4rJnYYc",
                            "difficulty": "1"
                        },
                        "ID_1642": {
                            "title": "Proto Man Theme",
                            "link": "https://youtu.be/MIDkiPAqhhk",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 4": {
                    "gameName": "Mega Man 4",
                    "answers": ["mega man 4", "mm 4", "megaman 4", "mm4"],
                    "songs": {
                        "ID_1643": {
                            "title": "Bright Man Stage",
                            "link": "https://youtu.be/xf4zUAKB08g",
                            "difficulty": "1"
                        },
                        "ID_1644": {
                            "title": "Dive Man Stage",
                            "link": "https://youtu.be/6bXE8ldC2DA",
                            "difficulty": "1"
                        },
                        "ID_1645": {
                            "title": "Drill Man Stage",
                            "link": "https://youtu.be/Tud96HogGbo",
                            "difficulty": "1"
                        },
                        "ID_1646": {
                            "title": "Dust Man Stage",
                            "link": "https://youtu.be/o65s78WI3oI",
                            "difficulty": "1"
                        },
                        "ID_1647": {
                            "title": "Skull Man Stage",
                            "link": "https://youtu.be/V-z1HLxLJto",
                            "difficulty": "1"
                        },
                        "ID_1648": {
                            "title": "Cossack Fortress 1",
                            "link": "https://youtu.be/AUCLT7cj4FU",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 5": {
                    "gameName": "Mega Man 5",
                    "answers": ["mega man 5", "mm 5", "megaman 5", "mm5"],
                    "songs": {
                        "ID_1649": {
                            "title": "Gravity Man Stage",
                            "link": "https://youtu.be/nPiKZ4AZR8A",
                            "difficulty": "1"
                        },
                        "ID_1650": {
                            "title": "Gyro Man Stage",
                            "link": "https://youtu.be/FZWDWJNYEhk",
                            "difficulty": "1"
                        },
                        "ID_1651": {
                            "title": "Napalm Man Stage",
                            "link": "https://youtu.be/vLI6FzBY_JA",
                            "difficulty": "1"
                        },
                        "ID_1652": {
                            "title": "Star Man Stage",
                            "link": "https://youtu.be/zCJss_gW2Qw",
                            "difficulty": "1"
                        },
                        "ID_1653": {
                            "title": "Charge Man Stage",
                            "link": "https://youtu.be/C75Q7bdQAQA",
                            "difficulty": "1"
                        },
                        "ID_1654": {
                            "title": "Dark Man Stage",
                            "link": "https://youtu.be/_ipPeVc0i7I",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 7": {
                    "gameName": "Mega Man 7",
                    "answers": ["mega man 7", "megaman 7", "mm 7", "mm7"],
                    "songs": {
                        "ID_2121": {
                            "title": "Opening Stage (Ruined Street)",
                            "link": "https://youtu.be/OoK9mkQcczo",
                            "difficulty": "1"
                        },
                        "ID_2122": {
                            "title": "Password Screen",
                            "link": "https://youtu.be/MLw0Ipdw4TM",
                            "difficulty": "1"
                        },
                        "ID_2123": {
                            "title": "Stage Select",
                            "link": "https://youtu.be/84Z4z9wCDU8",
                            "difficulty": "1"
                        },
                        "ID_2124": {
                            "title": "Junk Man Stage (Forgotten Factory)",
                            "link": "https://youtu.be/ri8MuT4M84s",
                            "difficulty": "1"
                        },
                        "ID_2125": {
                            "title": "Burst Man Stage (Medical Science Lab)",
                            "link": "https://youtu.be/WeVVckMnI0E",
                            "difficulty": "1"
                        },
                        "ID_2126": {
                            "title": "Spring Man Stage (Boyoyon Paradise)",
                            "link": "https://youtu.be/3KksczzImr0",
                            "difficulty": "1"
                        },
                        "ID_2127": {
                            "title": "Shade Man Stage (Horror Fortress)",
                            "link": "https://youtu.be/lLhrSSw_4vU",
                            "difficulty": "1"
                        },
                        "ID_2128": {
                            "title": "Turbo Man Stage (Giant Trailers)",
                            "link": "https://youtu.be/fE9GuCypaew",
                            "difficulty": "1"
                        },
                        "ID_2129": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/gX5H39sPaio",
                            "difficulty": "1"
                        },
                        "ID_2130": {
                            "title": "Wily Stage 1 (Entrance)",
                            "link": "https://youtu.be/dI6Zq6QD-rU",
                            "difficulty": "1"
                        },
                        "ID_2131": {
                            "title": "Ending ~ A Hero Returns",
                            "link": "https://youtu.be/OKRcsis3pCA",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man 9": {
                    "gameName": "Mega Man 9",
                    "answers": ["mega man 9", "megaman 9", "mm 9", "mm9"],
                    "songs": {
                        "ID_2132": {
                            "title": "Opening",
                            "link": "https://youtu.be/tJcdVpOXjwM",
                            "difficulty": "1"
                        },
                        "ID_2133": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/EazDwW8rhXY",
                            "difficulty": "1"
                        },
                        "ID_2134": {
                            "title": "Menu Theme",
                            "link": "https://youtu.be/SL7T__zF8yI",
                            "difficulty": "1"
                        },
                        "ID_2135": {
                            "title": "Stage Select",
                            "link": "https://youtu.be/_czfdhgxbEA",
                            "difficulty": "1"
                        },
                        "ID_2136": {
                            "title": "Concrete Man (Concrete Jungle)",
                            "link": "https://youtu.be/G_VIEXDZM6Y",
                            "difficulty": "1"
                        },
                        "ID_2137": {
                            "title": "Tornado Man (Thunder Tornado)",
                            "link": "https://youtu.be/BaOWZ04PrAs",
                            "difficulty": "1"
                        },
                        "ID_2138": {
                            "title": "Splash Woman (Splash Blue)",
                            "link": "https://youtu.be/H38v6Px8euk",
                            "difficulty": "1"
                        },
                        "ID_2139": {
                            "title": "Plug Man (Plug Electric)",
                            "link": "https://youtu.be/QC_b_78cLfk",
                            "difficulty": "1"
                        },
                        "ID_2140": {
                            "title": "Jewel Man (Jewel Temptation)",
                            "link": "https://youtu.be/bIuFz3b9lPc",
                            "difficulty": "1"
                        },
                        "ID_2141": {
                            "title": "Hornet Man (Hornet Dance)",
                            "link": "https://youtu.be/bI-Omk4GD8c",
                            "difficulty": "1"
                        },
                        "ID_2142": {
                            "title": "Magma Man (Magma Burning)",
                            "link": "https://youtu.be/AFc64PjQwGo",
                            "difficulty": "1"
                        },
                        "ID_2143": {
                            "title": "Galaxy Man (Galaxy Fantasy)",
                            "link": "https://youtu.be/Hw8cChTxlLk",
                            "difficulty": "1"
                        },
                        "ID_2144": {
                            "title": "Boss",
                            "link": "https://youtu.be/_luMGvRZVGI",
                            "difficulty": "1"
                        },
                        "ID_2145": {
                            "title": "Shop",
                            "link": "https://youtu.be/mZ2b2hAPYJE",
                            "difficulty": "1"
                        },
                        "ID_2146": {
                            "title": "Dr. Wily Stage 1 (Flash in the Dark)",
                            "link": "https://youtu.be/0t_GUB_aB4s",
                            "difficulty": "1"
                        },
                        "ID_2147": {
                            "title": "Endless Stage (Maze of Death)",
                            "link": "https://youtu.be/nyTA36BfvtE",
                            "difficulty": "1"
                        }
                    }
                },
                "Mega Man X": {
                    "gameName": "Mega Man X",
                    "answers": ["mega man x", "megaman x", "mmx", "mm x"],
                    "songs": {
                        "ID_2302": {
                            "title": "Title",
                            "link": "https://youtu.be/KVGv1Kejhy8",
                            "difficulty": "1"
                        },
                        "ID_2303": {
                            "title": "Password",
                            "link": "https://youtu.be/ZWov_XGruT8",
                            "difficulty": "1"
                        },
                        "ID_2304": {
                            "title": "Opening Stage (Highway Stage)",
                            "link": "https://youtu.be/MkhIGJsYb4I",
                            "difficulty": "1"
                        },
                        "ID_2305": {
                            "title": "Vile 2 (Sigma Boss Theme)",
                            "link": "https://youtu.be/NlEyuLz6pFY",
                            "difficulty": "1"
                        },
                        "ID_2306": {
                            "title": "Zero (Enter Zero)",
                            "link": "https://youtu.be/bYqQDjWAez8",
                            "difficulty": "1"
                        },
                        "ID_2307": {
                            "title": "Stage Select",
                            "link": "https://youtu.be/6ElpsYf8I0g",
                            "difficulty": "1"
                        },
                        "ID_2308": {
                            "title": "Launch Octopus (Ocean Stage)",
                            "link": "https://youtu.be/Ik8kWVBBn-w",
                            "difficulty": "1"
                        },
                        "ID_2309": {
                            "title": "Chill Penguin (Snow Mountain Stage)",
                            "link": "https://youtu.be/fcOjHuAD6SI",
                            "difficulty": "1"
                        },
                        "ID_2310": {
                            "title": "Flame Mammoth (Factory Stage)",
                            "link": "https://youtu.be/YmKu84IpMt8",
                            "difficulty": "1"
                        },
                        "ID_2311": {
                            "title": "Boomer Kuwanger (Tower Stage)",
                            "link": "https://youtu.be/qESMvA1Y7Hw",
                            "difficulty": "1"
                        },
                        "ID_2312": {
                            "title": "Sting Chameleon (Forest Stage)",
                            "link": "https://youtu.be/LsJ-wvyflA0",
                            "difficulty": "1"
                        },
                        "ID_2313": {
                            "title": "Spark Mandrill (Power Plant Stage)",
                            "link": "https://youtu.be/P9YU7E483SI",
                            "difficulty": "1"
                        },
                        "ID_2314": {
                            "title": "Storm Eagle (Sky Stage)",
                            "link": "https://youtu.be/HdpBgxeOw7w",
                            "difficulty": "1"
                        },
                        "ID_2315": {
                            "title": "Armored Armadillo (Gallery Stage)",
                            "link": "https://youtu.be/eAGRVDZdB3Q",
                            "difficulty": "1"
                        },
                        "ID_2316": {
                            "title": "Boss 2 (Boss Theme)",
                            "link": "https://youtu.be/n_doL_kvx18",
                            "difficulty": "1"
                        },
                        "ID_2317": {
                            "title": "Sigma Stage 2",
                            "link": "https://youtu.be/cTmeaZW9QvI",
                            "difficulty": "1"
                        },
                        "ID_2318": {
                            "title": "Cast Roll",
                            "link": "https://youtu.be/aNZ88wdq1rY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Metal Gear": {
            "seriesName": "Metal Gear",
            "seriesColor": "red",
            "game": {
                "Metal Gear": {
                    "gameName": "Metal Gear",
                    "answers": ["metal gear"],
                    "songs": {
                        "ID_2263": {
                            "title": "Red Alert",
                            "link": "https://youtu.be/6YQm2M-v4l0",
                            "difficulty": "1"
                        },
                        "ID_2264": {
                            "title": "Theme Of Tara",
                            "link": "https://youtu.be/t4SHQSSeib4",
                            "difficulty": "1"
                        },
                        "ID_2265": {
                            "title": "Jungle Theme",
                            "link": "https://youtu.be/Dmokw0GkEKU",
                            "difficulty": "1"
                        }
                    }
                },
                "Metal Gear 2: Solid Snake": {
                    "gameName": "Metal Gear 2: Solid Snake",
                    "answers": ["metal gear 2: solid snake", "metal gear 2", "solid snake"],
                    "songs": {
                        "ID_2266": {
                            "title": "Theme of Solid Snake",
                            "link": "https://youtu.be/wqWG9RdXhxw",
                            "difficulty": "1"
                        },
                        "ID_2267": {
                            "title": "Frequency 140.85",
                            "link": "https://youtu.be/P5BglnoVOlI",
                            "difficulty": "1"
                        }
                    }
                },
                "Metal Gear Rising: Revengeance": {
                    "gameName": "Metal Gear Rising: Revengeance",
                    "answers": ["metal gear rising: revengeance", "metal gear rising revengeance", "metal gear rising: revengeance", "mgr revengeance", "mgr", "revengeance"],
                    "songs": {
                        "ID_869": {
                            "title": "Rules of Nature (Platinum Mix)",
                            "link": "https://youtu.be/_vfkzMAWWKE",
                            "difficulty": "1"
                        },
                        "ID_870": {
                            "title": "The Only Thing I Know for Real (Maniac Agenda Mix)",
                            "link": "https://youtu.be/ZDupR9FXwCU",
                            "difficulty": "1"
                        },
                        "ID_871": {
                            "title": "Dark Skies (Platinum Mix)",
                            "link": "https://youtu.be/R7UVSupZ2ks",
                            "difficulty": "1"
                        },
                        "ID_872": {
                            "title": "I'm My Own Master Now (Platinum Mix)",
                            "link": "https://youtu.be/EPDDkrDpZhU",
                            "difficulty": "1"
                        },
                        "ID_873": {
                            "title": "A Stranger I Remain (Maniac Agenda Mix)",
                            "link": "https://youtu.be/QTnuw77_vzw",
                            "difficulty": "1"
                        },
                        "ID_874": {
                            "title": "Return to Ashes (Platinum Mix)",
                            "link": "https://youtu.be/1Bi6IGYRptY",
                            "difficulty": "1"
                        },
                        "ID_875": {
                            "title": "The Stains of Time (Maniac Agenda Mix)",
                            "link": "https://youtu.be/PEXB_Ewjmsk",
                            "difficulty": "1"
                        },
                        "ID_876": {
                            "title": "Red Sun (Maniac Agenda Mix)",
                            "link": "https://youtu.be/-PA9HmD42DE",
                            "difficulty": "1"
                        },
                        "ID_877": {
                            "title": "A Soul Can't Be Cut (Platinum Mix)",
                            "link": "https://youtu.be/jHYA0yVMjYw",
                            "difficulty": "1"
                        },
                        "ID_878": {
                            "title": "Collective Consciousness (Maniac Agenda Mix)",
                            "link": "https://youtu.be/ZYnDsr8z4iU",
                            "difficulty": "1"
                        },
                        "ID_879": {
                            "title": "It Has to Be This Way (Platinum Mix)",
                            "link": "https://youtu.be/fxq_B2KPQDY",
                            "difficulty": "1"
                        },
                        "ID_880": {
                            "title": "The War Still Rages Within",
                            "link": "https://youtu.be/LehMuyIkxNE",
                            "difficulty": "1"
                        }
                    }
                },
                "Metal Gear Solid": {
                    "gameName": "Metal Gear Solid",
                    "answers": ["metal gear solid", "mgs", "metal gear solid"],
                    "songs": {
                        "ID_881": {
                            "title": "Metal Gear Solid Main Theme",
                            "link": "https://youtu.be/tAKi13Gb7es",
                            "difficulty": "1"
                        },
                        "ID_882": {
                            "title": "Cavern",
                            "link": "https://youtu.be/11uCccWmz0M",
                            "difficulty": "1"
                        },
                        "ID_883": {
                            "title": "Encounter",
                            "link": "https://youtu.be/n1fWzyDVesc",
                            "difficulty": "1"
                        },
                        "ID_884": {
                            "title": "Duel",
                            "link": "https://youtu.be/hnp_JgJSLoc",
                            "difficulty": "1"
                        },
                        "ID_885": {
                            "title": "Enclosure",
                            "link": "https://youtu.be/R7twkqY852I",
                            "difficulty": "1"
                        },
                        "ID_886": {
                            "title": "Escape",
                            "link": "https://youtu.be/LqZVNzNc23w",
                            "difficulty": "1"
                        },
                        "ID_887": {
                            "title": "End Title (The Best is Yet to Come)",
                            "link": "https://youtu.be/OReM-Vm2vj4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Metal Gear Solid": {
            "seriesName": "Metal Gear Solid",
            "seriesColor": "red",
            "game": {
                "Metal Gear Solid 2: Sons of Liberty": {
                    "gameName": "Metal Gear Solid 2: Sons of Liberty",
                    "answers": ["metal gear solid 2: sons of liberty", "mgs 2", "mgs2", "sons of liberty", "metal gear solid 2 sons of liberty", "metal gear solid 2"],
                    "songs": {
                        "ID_1704": {
                            "title": "Metal Gear Solid Main Theme",
                            "link": "https://youtu.be/EXS-fVqrboo",
                            "difficulty": "1"
                        },
                        "ID_1705": {
                            "title": "Sons of Liberty Main Titles",
                            "link": "https://youtu.be/E3KU10Tp73M",
                            "difficulty": "1"
                        },
                        "ID_1706": {
                            "title": "Confronting Olga",
                            "link": "https://youtu.be/SQgepz8wMhk",
                            "difficulty": "1"
                        },
                        "ID_1707": {
                            "title": "Infiltration",
                            "link": "https://youtu.be/jXJRHjhQC_A",
                            "difficulty": "1"
                        },
                        "ID_1708": {
                            "title": "Fortune",
                            "link": "https://youtu.be/NVMKh85ZdZU",
                            "difficulty": "1"
                        },
                        "ID_1709": {
                            "title": "Big Shell Alert",
                            "link": "https://youtu.be/JJQ7aleP3tg",
                            "difficulty": "1"
                        },
                        "ID_1710": {
                            "title": "Yell 'Dead Cell'",
                            "link": "https://youtu.be/wu5v5u6m90c",
                            "difficulty": "1"
                        },
                        "ID_1711": {
                            "title": "Father & Son",
                            "link": "https://youtu.be/V1lbrV6GtA0",
                            "difficulty": "1"
                        },
                        "ID_1712": {
                            "title": "Can't Say Goodbye To Yesterday",
                            "link": "https://youtu.be/2-xDqmebxnM",
                            "difficulty": "1"
                        }
                    }
                },
                "Metal Gear Solid 3: Snake Eater": {
                    "gameName": "Metal Gear Solid 3: Snake Eater",
                    "answers": ["metal gear solid 3: snake eater", "mgs 3", "mgs3", "snake eater", "metal gear solid 3", "metal gear solid 3 snake eater"],
                    "songs": {
                        "ID_1713": {
                            "title": "Snake Eater",
                            "link": "https://youtu.be/4pqgYgLGELU",
                            "difficulty": "1"
                        },
                        "ID_1714": {
                            "title": "METAL GEAR SOLID Main Theme",
                            "link": "https://youtu.be/O1Xj_DwLBKQ",
                            "difficulty": "1"
                        },
                        "ID_1715": {
                            "title": "Debriefing",
                            "link": "https://youtu.be/8_9-YNXST1U",
                            "difficulty": "1"
                        },
                        "ID_1716": {
                            "title": "Way to Fall",
                            "link": "https://youtu.be/WvUdYCbmJAI",
                            "difficulty": "1"
                        }
                    }
                },
                "Metal Gear Solid 4: Guns of the Patriots": {
                    "gameName": "Metal Gear Solid 4: Guns of the Patriots",
                    "answers": ["metal gear solid 4: guns of the patriots", "mgs 4", "mgs4", "guns of the patriots", "metal gear solid 4 guns of the patriots"],
                    "songs": {
                        "ID_1717": {
                            "title": "Metal Gear Saga",
                            "link": "https://youtu.be/bBsGIC-XzCQ",
                            "difficulty": "1"
                        },
                        "ID_1718": {
                            "title": "Father and Son",
                            "link": "https://youtu.be/MqHo2AbXB_A",
                            "difficulty": "1"
                        },
                        "ID_1719": {
                            "title": "Love Theme",
                            "link": "https://youtu.be/DNqAbcVlaBc",
                            "difficulty": "1"
                        },
                        "ID_1720": {
                            "title": "Enclosure",
                            "link": "https://youtu.be/m0NqNq_hnqQ",
                            "difficulty": "1"
                        },
                        "ID_1721": {
                            "title": "Sunny's Theme",
                            "link": "https://youtu.be/B6X3WypKJIQ",
                            "difficulty": "1"
                        },
                        "ID_1722": {
                            "title": "Encounter",
                            "link": "https://youtu.be/VKaGF5gbE5E",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Metroid": {
            "seriesName": "Metroid",
            "seriesColor": "red",
            "game": {
                "Metroid": {
                    "gameName": "Metroid",
                    "answers": ["metroid"],
                    "songs": {
                        "ID_2046": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/M-U3sVX2G3w",
                            "difficulty": "1"
                        },
                        "ID_2047": {
                            "title": "Brinstar Theme",
                            "link": "https://youtu.be/WVTzg2kvNaQ",
                            "difficulty": "1"
                        },
                        "ID_2048": {
                            "title": "Kraids Hideout",
                            "link": "https://youtu.be/v1sTdewueiY",
                            "difficulty": "1"
                        },
                        "ID_2049": {
                            "title": "Ridleys Hideout",
                            "link": "https://youtu.be/noETLCpz0pQ",
                            "difficulty": "1"
                        },
                        "ID_2050": {
                            "title": "Mother Brain Battle",
                            "link": "https://youtu.be/rGVATCsEPfQ",
                            "difficulty": "1"
                        },
                        "ID_2051": {
                            "title": "Escape Theme",
                            "link": "https://youtu.be/V2k01qmi99k",
                            "difficulty": "1"
                        },
                        "ID_2052": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/gFUGG6SFiQQ",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Metroid": {
                    "gameName": "Super Metroid",
                    "answers": ["super metroid"],
                    "songs": {
                        "ID_2162": {
                            "title": "Theme of Super Metroid",
                            "link": "https://youtu.be/5vYsVk23oxA",
                            "difficulty": "1"
                        },
                        "ID_2163": {
                            "title": "Brinstar Overgrown with Vegetation Area",
                            "link": "https://youtu.be/zLcyg4Tq5uY",
                            "difficulty": "1"
                        },
                        "ID_2164": {
                            "title": "Norfair Ancient Ruins",
                            "link": "https://youtu.be/OoHm2BZeWbQ",
                            "difficulty": "1"
                        },
                        "ID_2165": {
                            "title": "Big Boss Confrontation 1",
                            "link": "https://youtu.be/wqrF-X67BZo",
                            "difficulty": "1"
                        },
                        "ID_2166": {
                            "title": "Escape",
                            "link": "https://youtu.be/uCvn_ieo1Vc",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Michael Jackson's Moonwalker": {
            "seriesName": "Michael Jackson's Moonwalker",
            "seriesColor": "red",
            "game": {
                "Michael Jackson's Moonwalker": {
                    "gameName": "Michael Jackson's Moonwalker",
                    "answers": ["michael jackson's moonwalker", "moonwalker", "michael jacksons moonwalker"],
                    "songs": {
                        "ID_2167": {
                            "title": "Smooth Criminal",
                            "link": "https://youtu.be/NptBUN0j5MI",
                            "difficulty": "1"
                        },
                        "ID_2168": {
                            "title": "Beat It",
                            "link": "https://youtu.be/P3_eAHEdOyo",
                            "difficulty": "1"
                        },
                        "ID_2169": {
                            "title": "Billie Jean",
                            "link": "https://youtu.be/jTGFJBR4E1g",
                            "difficulty": "1"
                        },
                        "ID_2170": {
                            "title": "Bad",
                            "link": "https://youtu.be/zHz-dMfmyJ8",
                            "difficulty": "1"
                        },
                        "ID_2171": {
                            "title": "Dances",
                            "link": "https://youtu.be/YrYlCPTO8V4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mighty Switch Force": {
            "seriesName": "Mighty Switch Force",
            "seriesColor": "red",
            "game": {
                "Mighty Switch Force": {
                    "gameName": "Mighty Switch Force",
                    "answers": ["mighty switch force", "msf", "mighty switch force", "mighty switch force 1", "msf1"],
                    "songs": {
                        "ID_846": {
                            "title": "Title",
                            "link": "https://youtu.be/gAQMtSM0zRk",
                            "difficulty": "1"
                        },
                        "ID_847": {
                            "title": "Caught Red Handed",
                            "link": "https://youtu.be/RCkoI4PGZNk",
                            "difficulty": "1"
                        },
                        "ID_848": {
                            "title": "Love You Love You Love",
                            "link": "https://youtu.be/eRyR27l7vks",
                            "difficulty": "1"
                        },
                        "ID_849": {
                            "title": "Jive Bot",
                            "link": "https://youtu.be/8-ngX7IWlUs",
                            "difficulty": "1"
                        },
                        "ID_850": {
                            "title": "Whoa I'm In Space Cuba",
                            "link": "https://youtu.be/anw6cFmR9hM",
                            "difficulty": "1"
                        },
                        "ID_851": {
                            "title": "Tally Screen",
                            "link": "https://youtu.be/xxknxT6VvFE",
                            "difficulty": "1"
                        }
                    }
                },
                "Mighty Switch Force 2": {
                    "gameName": "Mighty Switch Force 2",
                    "answers": ["mighty switch force 2", "msf2", "mighty switch force 2"],
                    "songs": {
                        "ID_852": {
                            "title": "Title",
                            "link": "https://youtu.be/Ia33wFGsHbg",
                            "difficulty": "1"
                        },
                        "ID_853": {
                            "title": "Exothermic",
                            "link": "https://youtu.be/QPJUzunUJVc",
                            "difficulty": "1"
                        },
                        "ID_854": {
                            "title": "Tally Screen",
                            "link": "https://youtu.be/_shWlfgnzZw",
                            "difficulty": "1"
                        },
                        "ID_855": {
                            "title": "Final Boss",
                            "link": "https://youtu.be/fMJzywHs0ls",
                            "difficulty": "1"
                        },
                        "ID_856": {
                            "title": "Credits (Rescue Girl)",
                            "link": "https://youtu.be/RiTB5NL-aUg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Minecraft": {
            "seriesName": "Minecraft",
            "seriesColor": "red",
            "game": {
                "Minecraft": {
                    "gameName": "Minecraft",
                    "answers": ["minecraft"],
                    "songs": {
                        "ID_1723": {
                            "title": "Minecraft",
                            "link": "https://youtu.be/qq-RGFyaq0U",
                            "difficulty": "1"
                        },
                        "ID_1724": {
                            "title": "Subwoofer Lullaby",
                            "link": "https://youtu.be/Gpd85y_iTxY",
                            "difficulty": "1"
                        },
                        "ID_1725": {
                            "title": "Haggstrom",
                            "link": "https://youtu.be/laZusNy8QiY",
                            "difficulty": "1"
                        },
                        "ID_1726": {
                            "title": "Dry Hands",
                            "link": "https://youtu.be/4i0d6CPLSGo",
                            "difficulty": "1"
                        },
                        "ID_1727": {
                            "title": "Wet Hands",
                            "link": "https://youtu.be/mukiMaOSLEs",
                            "difficulty": "1"
                        },
                        "ID_1728": {
                            "title": "Sweden",
                            "link": "https://youtu.be/aBkTkxKDduc",
                            "difficulty": "1"
                        },
                        "ID_1729": {
                            "title": "Cat",
                            "link": "https://youtu.be/9lX-hVpvN3E",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Mirror's Edge": {
            "seriesName": "Mirror's Edge",
            "seriesColor": "red",
            "game": {
                "Mirror's Edge": {
                    "gameName": "Mirror's Edge",
                    "answers": ["mirror's edge", "mirrors edge"],
                    "songs": {
                        "ID_937": {
                            "title": "Still Alive",
                            "link": "https://youtu.be/FleMt6ChQOI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "MOTHER": {
            "seriesName": "MOTHER",
            "seriesColor": "red",
            "game": {
                "Mother": {
                    "gameName": "Mother",
                    "answers": ["mother", "earthbound beginnings"],
                    "songs": {
                        "ID_1067": {
                            "title": "Bein' Friends",
                            "link": "https://youtu.be/h-uNMPU6GtA",
                            "difficulty": "1"
                        }
                    }
                },
                "Mother 2": {
                    "gameName": "Mother 2",
                    "answers": ["mother 2", "earthbound"],
                    "songs": {
                        "ID_1060": {
                            "title": "Battle Against an Otherworldly Foe",
                            "link": "https://youtu.be/BChh_cBLij0",
                            "difficulty": "1"
                        },
                        "ID_1061": {
                            "title": "Buy Somethin' Will Ya!",
                            "link": "https://youtu.be/xIt4u-VdAP4",
                            "difficulty": "1"
                        },
                        "ID_1062": {
                            "title": "Battle Against a Weak Opponent",
                            "link": "https://youtu.be/AOSMoEKox8g",
                            "difficulty": "1"
                        },
                        "ID_1063": {
                            "title": "Sanctuary Guardian",
                            "link": "https://youtu.be/dmEvNtjD9OE",
                            "difficulty": "1"
                        },
                        "ID_1064": {
                            "title": "New Age Retro Hippie",
                            "link": "https://youtu.be/b1impjQvhvk",
                            "difficulty": "1"
                        },
                        "ID_1065": {
                            "title": "Onett",
                            "link": "https://youtu.be/6ppBSY92rzg",
                            "difficulty": "1"
                        },
                        "ID_1066": {
                            "title": "Fourside",
                            "link": "https://youtu.be/a9sp3emk1QA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "NieR": {
            "seriesName": "NieR",
            "seriesColor": "red",
            "game": {
                "NieR": {
                    "gameName": "NieR",
                    "answers": ["nier"],
                    "songs": {
                        "ID_1731": {
                            "title": "Grandma",
                            "link": "https://youtu.be/Gm-X7KBBacM",
                            "difficulty": "1"
                        },
                        "ID_1732": {
                            "title": "Snow in Summer",
                            "link": "https://youtu.be/t6kXb0NL1PE",
                            "difficulty": "1"
                        },
                        "ID_1733": {
                            "title": "Hills of Radiant Wind",
                            "link": "https://youtu.be/CJHppNnNZL4",
                            "difficulty": "1"
                        },
                        "ID_1734": {
                            "title": "Song of the Ancients ~ Devola",
                            "link": "https://youtu.be/qCKEXPXtrEU",
                            "difficulty": "1"
                        },
                        "ID_1735": {
                            "title": "Song of the Ancients ~ Popola",
                            "link": "https://youtu.be/IZdnJLdmRlI",
                            "difficulty": "1"
                        },
                        "ID_1736": {
                            "title": "Song of the Ancients ~ Fate",
                            "link": "https://youtu.be/ady--PNMsfI",
                            "difficulty": "1"
                        },
                        "ID_1737": {
                            "title": "Emil ~ Karma",
                            "link": "https://youtu.be/Y5ZQYURYaAs",
                            "difficulty": "1"
                        }
                    }
                },
                "NieR:Automata": {
                    "gameName": "NieR:Automata",
                    "answers": ["nier:automata", "nier automata"],
                    "songs": {
                        "ID_1738": {
                            "title": "Peaceful Sleep",
                            "link": "https://youtu.be/NU5X14O2e6s",
                            "difficulty": "1"
                        },
                        "ID_1739": {
                            "title": "Weight of the World (English Version)",
                            "link": "https://youtu.be/OPfniBbr4Rg",
                            "difficulty": "1"
                        },
                        "ID_1740": {
                            "title": "Song of the Ancients - Atonement",
                            "link": "https://youtu.be/ciJAWo4DLKI",
                            "difficulty": "1"
                        },
                        "ID_1741": {
                            "title": "A Beautiful Song",
                            "link": "https://youtu.be/EBGV3bUhBgU",
                            "difficulty": "1"
                        },
                        "ID_1742": {
                            "title": "Bipolar Nightmare",
                            "link": "https://youtu.be/QzsqX8bnQPY",
                            "difficulty": "1"
                        },
                        "ID_1743": {
                            "title": "Birth of a Wish",
                            "link": "https://youtu.be/SU27QSYIaVw",
                            "difficulty": "1"
                        },
                        "ID_1744": {
                            "title": "The Dark Colossus Destroys All",
                            "link": "https://youtu.be/Wi2JHGM4MMI",
                            "difficulty": "1"
                        },
                        "ID_1745": {
                            "title": "Vague Hope",
                            "link": "https://youtu.be/f5TSpEDSzac",
                            "difficulty": "1"
                        },
                        "ID_1746": {
                            "title": "Emil (Despair)",
                            "link": "https://youtu.be/zNE4WM-Si7g",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Octopath Traveler": {
            "seriesName": "Octopath Traveler",
            "seriesColor": "red",
            "game": {
                "Octopath Traveler": {
                    "gameName": "Octopath Traveler",
                    "answers": ["octopath traveler", "octopath"],
                    "songs": {
                        "ID_2172": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/kH1zuIpp-5U",
                            "difficulty": "1"
                        },
                        "ID_2173": {
                            "title": "Battle I",
                            "link": "https://youtu.be/-bl8K84E98c",
                            "difficulty": "1"
                        },
                        "ID_2174": {
                            "title": "Victory Fanfare",
                            "link": "https://youtu.be/0fK0Boz8efk",
                            "difficulty": "1"
                        },
                        "ID_2175": {
                            "title": "Decisive Battle I",
                            "link": "https://youtu.be/G5MwN509S-k",
                            "difficulty": "1"
                        },
                        "ID_2176": {
                            "title": "Battle II",
                            "link": "https://youtu.be/_TBDzx4PUGo",
                            "difficulty": "1"
                        },
                        "ID_2177": {
                            "title": "Decisive Battle II",
                            "link": "https://youtu.be/oZQVqIwA5Ss",
                            "difficulty": "1"
                        },
                        "ID_2178": {
                            "title": "Battle III",
                            "link": "https://youtu.be/RsAE0aLJbvU",
                            "difficulty": "1"
                        },
                        "ID_2179": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/82wDt1dBN5Y",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Overwatch": {
            "seriesName": "Overwatch",
            "seriesColor": "red",
            "game": {
                "Overwatch": {
                    "gameName": "Overwatch",
                    "answers": ["overwatch", "ow"],
                    "songs": {
                        "ID_2038": {
                            "title": "Rally the Heroes",
                            "link": "https://youtu.be/ThKQCnF2kXg",
                            "difficulty": "1"
                        },
                        "ID_2039": {
                            "title": "Temple of Anubis",
                            "link": "https://youtu.be/kuXf54tMHg4",
                            "difficulty": "1"
                        },
                        "ID_2040": {
                            "title": "King's Row",
                            "link": "https://youtu.be/nm6VFEo5wLY",
                            "difficulty": "1"
                        },
                        "ID_2041": {
                            "title": "Hollywood",
                            "link": "https://youtu.be/HElAirND0aE",
                            "difficulty": "1"
                        },
                        "ID_2042": {
                            "title": "Dorado",
                            "link": "https://youtu.be/BvWM6oGYWLw",
                            "difficulty": "1"
                        },
                        "ID_2043": {
                            "title": "Eichenwalde",
                            "link": "https://youtu.be/ibQ-1KijZE8",
                            "difficulty": "1"
                        },
                        "ID_2044": {
                            "title": "Ilios",
                            "link": "https://youtu.be/RQ6F8V8w2ZM",
                            "difficulty": "1"
                        },
                        "ID_2045": {
                            "title": "Victory",
                            "link": "https://youtu.be/keJPapmHDPg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Paper Mario": {
            "seriesName": "Paper Mario",
            "seriesColor": "red",
            "game": {
                "Paper Mario: The Thousand-Year Door": {
                    "gameName": "Paper Mario: The Thousand-Year Door",
                    "answers": ["paper mario: the thousand-year door", "paper mario the thousand-year door", "paper mario thousand-year door", "paper mario the thousand year door", "paper mario thousand year door", "paper mario ttyd", "ttyd"],
                    "songs": {
                        "ID_2180": {
                            "title": "Intro Story",
                            "link": "https://youtu.be/GAwUaiWHgL8",
                            "difficulty": "1"
                        },
                        "ID_2181": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/q-ZiCJnUYPA",
                            "difficulty": "1"
                        },
                        "ID_2182": {
                            "title": "Battle Theme",
                            "link": "https://youtu.be/VRXKF3lMh8k",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Papers, Please": {
            "seriesName": "Papers, Please",
            "seriesColor": "red",
            "game": {
                "Papers, Please": {
                    "gameName": "Papers, Please",
                    "answers": ["papers, please", "papers please"],
                    "songs": {
                        "ID_1299": {
                            "title": "Papers, Please",
                            "link": "https://youtu.be/OBQE_TNI7zw",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Parappa the Rapper": {
            "seriesName": "Parappa the Rapper",
            "seriesColor": "red",
            "game": {
                "Parappa the Rapper": {
                    "gameName": "Parappa the Rapper",
                    "answers": ["parappa the rapper", "parappa"],
                    "songs": {
                        "ID_2187": {
                            "title": "Chop Chop Master Onion Rap",
                            "link": "https://youtu.be/nJ3o3kQZWm8",
                            "difficulty": "1"
                        },
                        "ID_2188": {
                            "title": "Instructor Mooselini's Car Rap",
                            "link": "https://youtu.be/RoqllL8Vl6o",
                            "difficulty": "1"
                        },
                        "ID_2189": {
                            "title": "Cheap Cheap the Cooking Chicken Rap",
                            "link": "https://youtu.be/xh6BtPs-KNk",
                            "difficulty": "1"
                        },
                        "ID_2190": {
                            "title": "All Master's Rap (Bathroom Song)",
                            "link": "https://youtu.be/tEUiaO9KZQI",
                            "difficulty": "1"
                        },
                        "ID_2191": {
                            "title": "Katty Kat and Sunny Funny Theme Song",
                            "link": "https://youtu.be/kW9JmL9w0YM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Perfect Dark": {
            "seriesName": "Perfect Dark",
            "seriesColor": "red",
            "game": {
                "Perfect Dark": {
                    "gameName": "Perfect Dark",
                    "answers": ["perfect dark"],
                    "songs": {
                        "ID_1073": {
                            "title": "Datadyne Central Defection",
                            "link": "https://youtu.be/ZLDJhm4Arzk",
                            "difficulty": "1"
                        },
                        "ID_1074": {
                            "title": "Datadyne Central Extraction",
                            "link": "https://youtu.be/whjfd7pqaTo",
                            "difficulty": "1"
                        },
                        "ID_1075": {
                            "title": "Chicago Stealth",
                            "link": "https://youtu.be/UV3RC2sDwQs",
                            "difficulty": "1"
                        },
                        "ID_1076": {
                            "title": "Area 51 Infiltration",
                            "link": "https://youtu.be/xKF1__kloY8",
                            "difficulty": "1"
                        },
                        "ID_1077": {
                            "title": "Carrington Institute",
                            "link": "https://youtu.be/6kLZP5LpAf8",
                            "difficulty": "1"
                        },
                        "ID_1078": {
                            "title": "Combat Simulator",
                            "link": "https://youtu.be/PJXrHu5O-08",
                            "difficulty": "1"
                        },
                        "ID_1079": {
                            "title": "Credits",
                            "link": "https://youtu.be/zvHrea_qQuA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "PES": {
            "seriesName": "PES",
            "seriesColor": "red",
            "game": {
                "PES 5": {
                    "gameName": "PES 5",
                    "answers": ["pes 5", "pes5", "pro evolution soccer 5"],
                    "songs": {
                        "ID_706": {
                            "title": "Main Menu Music (Spiral 2005)",
                            "link": "https://youtu.be/k6rPnOVVPjw",
                            "difficulty": "1"
                        },
                        "ID_707": {
                            "title": "Formation Screen",
                            "link": "https://youtu.be/4gHa8Lq3kyc",
                            "difficulty": "1"
                        },
                        "ID_708": {
                            "title": "Master League",
                            "link": "https://youtu.be/q1wDlX7EL3o",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Pictionary": {
            "seriesName": "Pictionary",
            "seriesColor": "red",
            "game": {
                "Pictionary": {
                    "gameName": "Pictionary",
                    "answers": ["pictionary"],
                    "songs": {
                        "ID_2192": {
                            "title": "Title Screen Theme",
                            "link": "https://youtu.be/SJwh3erQlyE",
                            "difficulty": "1"
                        },
                        "ID_2193": {
                            "title": "Move Piece",
                            "link": "https://youtu.be/hU0wBHtgycc",
                            "difficulty": "1"
                        },
                        "ID_2194": {
                            "title": "Drawing Game",
                            "link": "https://youtu.be/x8bVrwQxDXc",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Pokemon": {
            "seriesName": "Pokemon",
            "seriesColor": "red",
            "game": {
                "Pokemon Black 2 and White 2": {
                    "gameName": "Pokemon Black 2 and White 2",
                    "answers": ["pokemon black 2 and white 2", "bw2", "pokemon black 2", "pokemon white 2", "white 2", "black 2", "white2", "black2", "pokemon bw2"],
                    "songs": {
                        "ID_1007": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/CKjnlySgqOk",
                            "difficulty": "1"
                        },
                        "ID_1008": {
                            "title": "Virkbank City",
                            "link": "https://youtu.be/6IJsv3ai89M",
                            "difficulty": "1"
                        },
                        "ID_1009": {
                            "title": "Battle! Neo Plasma",
                            "link": "https://youtu.be/-vCbwiGamBw",
                            "difficulty": "1"
                        },
                        "ID_1010": {
                            "title": "Lentimas Town",
                            "link": "https://youtu.be/ILf8Lw24N4E",
                            "difficulty": "1"
                        },
                        "ID_1011": {
                            "title": "Reversal Mountain (Black)",
                            "link": "https://youtu.be/VlQKaJLbapE",
                            "difficulty": "1"
                        },
                        "ID_1012": {
                            "title": "N's Room",
                            "link": "https://youtu.be/nmZ5pSjeQVc",
                            "difficulty": "1"
                        },
                        "ID_1013": {
                            "title": "Battle! N",
                            "link": "https://youtu.be/AiRMLJIDnXM",
                            "difficulty": "1"
                        },
                        "ID_1014": {
                            "title": "Battle! Champion Iris",
                            "link": "https://youtu.be/G1kHPeGqSw8",
                            "difficulty": "1"
                        },
                        "ID_1015": {
                            "title": "Battle! Colress",
                            "link": "https://youtu.be/2FN2EfesYR0",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Black and White": {
                    "gameName": "Pokemon Black and White",
                    "answers": ["pokemon black and white", "bw", "pokemon black", "pokemon white", "pokemon black 2", "pokemon white 2", "black", "white", "black 2", "white 2", "pokemon bw", "pokemon bw2"],
                    "songs": {
                        "ID_991": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/Rl6A4oGpOSw",
                            "difficulty": "1"
                        },
                        "ID_992": {
                            "title": "Skyarrow Bridge",
                            "link": "https://youtu.be/G4N8a08SVtk",
                            "difficulty": "1"
                        },
                        "ID_993": {
                            "title": "Unwavering Emotion",
                            "link": "https://youtu.be/kaEDY2eTg-M",
                            "difficulty": "1"
                        },
                        "ID_994": {
                            "title": "Battle! N",
                            "link": "https://youtu.be/pZCbK4G44S0",
                            "difficulty": "1"
                        },
                        "ID_995": {
                            "title": "Crisis in Battle!",
                            "link": "https://youtu.be/Y8OTqnErCuY",
                            "difficulty": "1"
                        },
                        "ID_996": {
                            "title": "Driftveil City",
                            "link": "https://youtu.be/FHkvQX26EA4",
                            "difficulty": "1"
                        },
                        "ID_997": {
                            "title": "Route 6 (Winter)",
                            "link": "https://youtu.be/K0rvJ4SLcuM",
                            "difficulty": "1"
                        },
                        "ID_998": {
                            "title": "Opelucid City (White)",
                            "link": "https://youtu.be/hEmATwp7IC8",
                            "difficulty": "1"
                        },
                        "ID_999": {
                            "title": "Opelucid City (Black)",
                            "link": "https://youtu.be/V1zHBoRFSrM",
                            "difficulty": "1"
                        },
                        "ID_1000": {
                            "title": "Route 10",
                            "link": "https://youtu.be/kt-ZzBeDHQs",
                            "difficulty": "1"
                        },
                        "ID_1001": {
                            "title": "Battle! Elite 4",
                            "link": "https://youtu.be/W3kqLhOuzu0",
                            "difficulty": "1"
                        },
                        "ID_1002": {
                            "title": "Battle! Reshiram and Zekrom",
                            "link": "https://youtu.be/tObYNbbAIw0",
                            "difficulty": "1"
                        },
                        "ID_1003": {
                            "title": "Battle! Ghetsis",
                            "link": "https://youtu.be/ktqqE5cmE8M",
                            "difficulty": "1"
                        },
                        "ID_1004": {
                            "title": "Battle! Legendary Pokemon",
                            "link": "https://youtu.be/o20vpORCWdI",
                            "difficulty": "1"
                        },
                        "ID_1005": {
                            "title": "Black City",
                            "link": "https://youtu.be/o20vpORCWdI",
                            "difficulty": "1"
                        },
                        "ID_1006": {
                            "title": "Village Bridge",
                            "link": "https://youtu.be/LY4QQ1fuEyo",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Colosseum": {
                    "gameName": "Pokemon Colosseum",
                    "answers": ["pokemon colosseum", "colosseum"],
                    "songs": {
                        "ID_764": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/yQKUxSKSZ88",
                            "difficulty": "1"
                        },
                        "ID_765": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/QimoJx4lbNY",
                            "difficulty": "1"
                        },
                        "ID_766": {
                            "title": "Friendly Battle",
                            "link": "https://youtu.be/JkSeSjwppw4",
                            "difficulty": "1"
                        },
                        "ID_767": {
                            "title": "Normal Battle",
                            "link": "https://youtu.be/qrfhwpdjbPQ",
                            "difficulty": "1"
                        },
                        "ID_768": {
                            "title": "Phenac City",
                            "link": "https://youtu.be/BoBZqp25Dvs",
                            "difficulty": "1"
                        },
                        "ID_769": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/UAdKWm-aMyE",
                            "difficulty": "1"
                        },
                        "ID_770": {
                            "title": "Snagem Hideout",
                            "link": "https://youtu.be/GMZCGEPIKvo",
                            "difficulty": "1"
                        },
                        "ID_771": {
                            "title": "Cipher Syndicate",
                            "link": "https://youtu.be/LnVPiA1zC4o",
                            "difficulty": "1"
                        },
                        "ID_772": {
                            "title": "Miror B.'s Retro Groove",
                            "link": "https://youtu.be/X67YWv5C6qQ",
                            "difficulty": "1"
                        },
                        "ID_773": {
                            "title": "Cipher Peon Battle",
                            "link": "https://youtu.be/0U5f_XivxDk",
                            "difficulty": "1"
                        },
                        "ID_774": {
                            "title": "Pyrite Town",
                            "link": "https://youtu.be/_QR-cfd6hCs",
                            "difficulty": "1"
                        },
                        "ID_775": {
                            "title": "Pyrite Building",
                            "link": "https://youtu.be/J8NBYomZ9MY",
                            "difficulty": "1"
                        },
                        "ID_776": {
                            "title": "Cipher Admin Battle",
                            "link": "https://youtu.be/5QvMqYZTR5Y",
                            "difficulty": "1"
                        },
                        "ID_777": {
                            "title": "Mirakle B. Imitation Groove",
                            "link": "https://youtu.be/8ZoqGBFdWf8",
                            "difficulty": "1"
                        },
                        "ID_778": {
                            "title": "Agate Village",
                            "link": "https://youtu.be/MxvZsYOVtO0",
                            "difficulty": "1"
                        },
                        "ID_779": {
                            "title": "Relic Forest",
                            "link": "https://youtu.be/I9v1DcE7a1E",
                            "difficulty": "1"
                        },
                        "ID_780": {
                            "title": "The Under",
                            "link": "https://youtu.be/pvFFxx3k38A",
                            "difficulty": "1"
                        },
                        "ID_781": {
                            "title": "Final Battle",
                            "link": "https://youtu.be/um0pkcPFCLs",
                            "difficulty": "1"
                        },
                        "ID_782": {
                            "title": "Staff Roll (US/PAL)",
                            "link": "https://youtu.be/yO7qWWD8VIU",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Diamond and Pearl": {
                    "gameName": "Pokemon Diamond and Pearl",
                    "answers": ["pokemon diamond and pearl", "dppt", "pokemon diamond", "pokemon pearl", "diamond", "pearl", "platinum", "pokemon platinum", "pokemon dppt"],
                    "songs": {
                        "ID_962": {
                            "title": "Team Galactic HQ",
                            "link": "https://youtu.be/1r2j54GCiEw",
                            "difficulty": "1"
                        },
                        "ID_963": {
                            "title": "Jubilife City (Night)",
                            "link": "https://youtu.be/lAKZZYNb8YI",
                            "difficulty": "1"
                        },
                        "ID_964": {
                            "title": "Oreburgh City (Day)",
                            "link": "https://youtu.be/TYfuavaMf10",
                            "difficulty": "1"
                        },
                        "ID_965": {
                            "title": "Eterna Forest",
                            "link": "https://youtu.be/y0Fg9xtjFxk",
                            "difficulty": "1"
                        },
                        "ID_966": {
                            "title": "Eterna City (Night)",
                            "link": "https://youtu.be/QRFmXPrOf3o",
                            "difficulty": "1"
                        },
                        "ID_967": {
                            "title": "Battle Galactic Cyrus",
                            "link": "https://youtu.be/SE5dBmWml34",
                            "difficulty": "1"
                        },
                        "ID_968": {
                            "title": "Route 216 (Day)",
                            "link": "https://youtu.be/1NALkdPuHDQ",
                            "difficulty": "1"
                        },
                        "ID_969": {
                            "title": "Mt. Coronet",
                            "link": "https://youtu.be/UhmygATFpLI",
                            "difficulty": "1"
                        },
                        "ID_970": {
                            "title": "Battle! Dialga and Palkia",
                            "link": "https://youtu.be/r6c99c4HKq8",
                            "difficulty": "1"
                        },
                        "ID_971": {
                            "title": "Route 225 (Night)",
                            "link": "https://youtu.be/xJ7TRUH-vWo",
                            "difficulty": "1"
                        },
                        "ID_972": {
                            "title": "Stark Mountain",
                            "link": "https://youtu.be/Db07wCTqQoE",
                            "difficulty": "1"
                        },
                        "ID_973": {
                            "title": "Route 228 (Night)",
                            "link": "https://youtu.be/BKerdWYF1SU",
                            "difficulty": "1"
                        },
                        "ID_974": {
                            "title": "Pokemon League (Night)",
                            "link": "https://youtu.be/7dzZl8ge1z0",
                            "difficulty": "1"
                        },
                        "ID_975": {
                            "title": "Encounter! Champion Cynthia",
                            "link": "https://youtu.be/K3l2H2uIb94",
                            "difficulty": "1"
                        },
                        "ID_976": {
                            "title": "Battle! Champion Cynthia",
                            "link": "https://youtu.be/DvlHaZIrndA",
                            "difficulty": "1"
                        },
                        "ID_977": {
                            "title": "Battle! Arceus",
                            "link": "https://youtu.be/glhEem71H-E",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Fire Red and Leaf Green": {
                    "gameName": "Pokemon Fire Red and Leaf Green",
                    "answers": ["pokemon fire red and leaf green", "fire red and leaf green", "frlg", "fire red", "firered", "leaf green", "leafgreen", "pokemon fire red", "pokemon leaf green"],
                    "songs": {
                        "ID_2561": {
                            "title": "Pallet Town",
                            "link": "https://youtu.be/DKn_eDhoGzo",
                            "difficulty": "1"
                        },
                        "ID_2562": {
                            "title": "Professor Oak's Theme",
                            "link": "https://youtu.be/VFl7PvVCDOA",
                            "difficulty": "1"
                        },
                        "ID_2563": {
                            "title": "Professor Oak's Laboratory",
                            "link": "https://youtu.be/c25XN4mTMvQ",
                            "difficulty": "1"
                        },
                        "ID_2564": {
                            "title": "Route 1",
                            "link": "https://youtu.be/8RGDdRFxkco",
                            "difficulty": "1"
                        },
                        "ID_2565": {
                            "title": "Battle! Wild Pokemon",
                            "link": "https://youtu.be/byTN_tvhovk",
                            "difficulty": "1"
                        },
                        "ID_2566": {
                            "title": "Viridian City",
                            "link": "https://youtu.be/gzYwQYp8vNs",
                            "difficulty": "1"
                        },
                        "ID_2567": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/dl9kOir5VD4",
                            "difficulty": "1"
                        },
                        "ID_2568": {
                            "title": "Viridian Forest",
                            "link": "https://youtu.be/3hJC6PuuT2E",
                            "difficulty": "1"
                        },
                        "ID_2569": {
                            "title": "Battle! Trainer",
                            "link": "https://youtu.be/kKGlU7GaQ-0",
                            "difficulty": "1"
                        },
                        "ID_2570": {
                            "title": "Pokemon Gym",
                            "link": "https://youtu.be/bBuZMIWSmR4",
                            "difficulty": "1"
                        },
                        "ID_2571": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/bBuZMIWSmR4",
                            "difficulty": "1"
                        },
                        "ID_2572": {
                            "title": "Route 3",
                            "link": "https://youtu.be/0LIOeGNQ3to",
                            "difficulty": "1"
                        },
                        "ID_2573": {
                            "title": "Cerulean City",
                            "link": "https://youtu.be/pxaiWfCBXjg",
                            "difficulty": "1"
                        },
                        "ID_2574": {
                            "title": "Route 24",
                            "link": "https://youtu.be/pxaiWfCBXjg",
                            "difficulty": "1"
                        },
                        "ID_2575": {
                            "title": "Vermilion City",
                            "link": "https://youtu.be/MJV8gjJjG_M",
                            "difficulty": "1"
                        },
                        "ID_2576": {
                            "title": "Bicycle Theme",
                            "link": "https://youtu.be/xhPlikdTesc",
                            "difficulty": "1"
                        },
                        "ID_2577": {
                            "title": "Route 11",
                            "link": "https://youtu.be/xhPlikdTesc",
                            "difficulty": "1"
                        },
                        "ID_2578": {
                            "title": "Lavender Town",
                            "link": "https://youtu.be/6LO03IieYyE",
                            "difficulty": "1"
                        },
                        "ID_2579": {
                            "title": "Pokemon Tower",
                            "link": "https://youtu.be/VCLxPp4tvT8",
                            "difficulty": "1"
                        },
                        "ID_2580": {
                            "title": "Celadon City",
                            "link": "https://youtu.be/Ybp-CC0ogZg",
                            "difficulty": "1"
                        },
                        "ID_2581": {
                            "title": "Team Rocket Hideout",
                            "link": "https://youtu.be/KCEaFMtlgcs",
                            "difficulty": "1"
                        },
                        "ID_2582": {
                            "title": "Surf Theme",
                            "link": "https://youtu.be/LR3JGxLfxoc",
                            "difficulty": "1"
                        },
                        "ID_2583": {
                            "title": "Battle! Articuno, Zapdos & Moltres",
                            "link": "https://youtu.be/Y07aGKUT9So",
                            "difficulty": "1"
                        },
                        "ID_2584": {
                            "title": "Cinnabar Island",
                            "link": "https://youtu.be/VH69th-_QWE",
                            "difficulty": "1"
                        },
                        "ID_2585": {
                            "title": "Battle! Mewtwo",
                            "link": "https://youtu.be/zu2ATvvwVB4",
                            "difficulty": "1"
                        },
                        "ID_2586": {
                            "title": "Battle! Deoxys",
                            "link": "https://youtu.be/5I779wqEt2Y",
                            "difficulty": "1"
                        },
                        "ID_2587": {
                            "title": "Victory Road (Last Road)",
                            "link": "https://youtu.be/DMai9ra6BCA",
                            "difficulty": "1"
                        },
                        "ID_2588": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/aoOjZFQzGgo",
                            "difficulty": "1"
                        },
                        "ID_2589": {
                            "title": "Hall of Fame",
                            "link": "https://youtu.be/UZSwnEkz0eA",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Gold and Silver": {
                    "gameName": "Pokemon Gold and Silver",
                    "answers": ["pokemon gold and silver", "gold and silver", "pokemon gold", "pokemon silver", "pokemon crystal", "gsc", "gen 2", "gold", "silver", "crystal"],
                    "songs": {
                        "ID_2470": {
                            "title": "Intro & Title Screen",
                            "link": "https://youtu.be/uOtElWoKPKw",
                            "difficulty": "1"
                        },
                        "ID_2471": {
                            "title": "Continue",
                            "link": "https://youtu.be/2_lEIs-CyAY",
                            "difficulty": "1"
                        },
                        "ID_2472": {
                            "title": "Welcome to the World of Pokemon",
                            "link": "https://youtu.be/Ok84CfBX6Go",
                            "difficulty": "1"
                        },
                        "ID_2473": {
                            "title": "Pokemon Lab",
                            "link": "https://youtu.be/hrG1OvGouHk",
                            "difficulty": "1"
                        },
                        "ID_2474": {
                            "title": "Radio - Oak's Pokemon Talk",
                            "link": "https://youtu.be/BTUcZEJSS0c",
                            "difficulty": "1"
                        },
                        "ID_2475": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/3hHQpyLPzi0",
                            "difficulty": "1"
                        },
                        "ID_2476": {
                            "title": "Battle! Wild Pokemon (Johto)",
                            "link": "https://youtu.be/ZQ7UpTUiixk",
                            "difficulty": "1"
                        },
                        "ID_2477": {
                            "title": "New Bark Town",
                            "link": "https://youtu.be/2y9qGM17SpM",
                            "difficulty": "1"
                        },
                        "ID_2478": {
                            "title": "Route 29",
                            "link": "https://youtu.be/lP1vP21-Kp0",
                            "difficulty": "1"
                        },
                        "ID_2479": {
                            "title": "Route 32",
                            "link": "https://youtu.be/ZFCfyEQ2ihY",
                            "difficulty": "1"
                        },
                        "ID_2480": {
                            "title": "Cherrygrove City",
                            "link": "https://youtu.be/UhXiUxHhHIU",
                            "difficulty": "1"
                        },
                        "ID_2481": {
                            "title": "Cherrygrove City Tour",
                            "link": "https://youtu.be/yaE7QRcUQMg",
                            "difficulty": "1"
                        },
                        "ID_2482": {
                            "title": "Route 30",
                            "link": "https://youtu.be/bPfaVO0gPoI",
                            "difficulty": "1"
                        },
                        "ID_2483": {
                            "title": "Chat with Professor Oak",
                            "link": "https://youtu.be/NphT2NYEt-w",
                            "difficulty": "1"
                        },
                        "ID_2484": {
                            "title": "Battle! Rival",
                            "link": "https://youtu.be/1nGUYMr6Jws",
                            "difficulty": "1"
                        },
                        "ID_2485": {
                            "title": "Battle! Trainer",
                            "link": "https://youtu.be/GOgMqbWMiOo",
                            "difficulty": "1"
                        },
                        "ID_2486": {
                            "title": "Dark Cave",
                            "link": "https://youtu.be/EXORGSyIqe4",
                            "difficulty": "1"
                        },
                        "ID_2487": {
                            "title": "Violet City",
                            "link": "https://youtu.be/CS_ZMPj21IE",
                            "difficulty": "1"
                        },
                        "ID_2488": {
                            "title": "Pokemon Gym",
                            "link": "https://youtu.be/Xv0n0Pddlm4",
                            "difficulty": "1"
                        },
                        "ID_2489": {
                            "title": "Battle! Gym Leader (Johto)",
                            "link": "https://youtu.be/e9UNWmjMXcw",
                            "difficulty": "1"
                        },
                        "ID_2490": {
                            "title": "Ruins of Alph",
                            "link": "https://youtu.be/teDTFUuZBPI",
                            "difficulty": "1"
                        },
                        "ID_2491": {
                            "title": "Azalea Town",
                            "link": "https://youtu.be/64obE19g6Mk",
                            "difficulty": "1"
                        },
                        "ID_2492": {
                            "title": "Game Corner",
                            "link": "https://youtu.be/kBGc8j539O8",
                            "difficulty": "1"
                        },
                        "ID_2493": {
                            "title": "Goldenrod City",
                            "link": "https://youtu.be/Tp8nuM-nwPE",
                            "difficulty": "1"
                        },
                        "ID_2494": {
                            "title": "Bicycle Theme",
                            "link": "https://youtu.be/_kuJVW1kXTM",
                            "difficulty": "1"
                        },
                        "ID_2495": {
                            "title": "National Park",
                            "link": "https://youtu.be/rWwyIee0GwE",
                            "difficulty": "1"
                        },
                        "ID_2496": {
                            "title": "Ecruteak City",
                            "link": "https://youtu.be/GhJhR96tJwk",
                            "difficulty": "1"
                        },
                        "ID_2497": {
                            "title": "Surf Theme",
                            "link": "https://youtu.be/q-p6_aupNGc",
                            "difficulty": "1"
                        },
                        "ID_2498": {
                            "title": "Route 38",
                            "link": "https://youtu.be/fRSqy1puIaU",
                            "difficulty": "1"
                        },
                        "ID_2499": {
                            "title": "Route 42",
                            "link": "https://youtu.be/O1lxaU-0I3Y",
                            "difficulty": "1"
                        },
                        "ID_2500": {
                            "title": "Rocket Hideout",
                            "link": "https://youtu.be/G6pglnWy2mo",
                            "difficulty": "1"
                        },
                        "ID_2501": {
                            "title": "Rocket Tower Takeover",
                            "link": "https://youtu.be/SASncz_P4Zc",
                            "difficulty": "1"
                        },
                        "ID_2502": {
                            "title": "Bug-Catching Contest",
                            "link": "https://youtu.be/xyLWtwDMiLM",
                            "difficulty": "1"
                        },
                        "ID_2503": {
                            "title": "Route 26",
                            "link": "https://youtu.be/eVXu6RErLkE",
                            "difficulty": "1"
                        },
                        "ID_2504": {
                            "title": "Radio - Places & People",
                            "link": "https://youtu.be/uPqjBEGRLhs",
                            "difficulty": "1"
                        },
                        "ID_2505": {
                            "title": "Indigo Plateau",
                            "link": "https://youtu.be/WGocSnTRB1U",
                            "difficulty": "1"
                        },
                        "ID_2506": {
                            "title": "Mt. Silver",
                            "link": "https://youtu.be/0P6JA2pNxVg",
                            "difficulty": "1"
                        },
                        "ID_2507": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/gpMKVAcjeTg",
                            "difficulty": "1"
                        },
                        "ID_2508": {
                            "title": "Battle! Wild Pokemon (Kanto)",
                            "link": "https://youtu.be/lGAnaPCzk_s",
                            "difficulty": "1"
                        },
                        "ID_2509": {
                            "title": "Vermilion City",
                            "link": "https://youtu.be/5y9_-34IUuk",
                            "difficulty": "1"
                        },
                        "ID_2510": {
                            "title": "Battle! Gym Leader (Kanto)",
                            "link": "https://youtu.be/bk-9xWqZZXY",
                            "difficulty": "1"
                        },
                        "ID_2511": {
                            "title": "Saffron City",
                            "link": "https://youtu.be/UCYd4QZzMko",
                            "difficulty": "1"
                        },
                        "ID_2512": {
                            "title": "Underground Path",
                            "link": "https://youtu.be/Ztr4Ru6MuIQ",
                            "difficulty": "1"
                        },
                        "ID_2513": {
                            "title": "Lavender Town",
                            "link": "https://youtu.be/JOqDF7FucWI",
                            "difficulty": "1"
                        },
                        "ID_2514": {
                            "title": "Route 11",
                            "link": "https://youtu.be/e3_-PuUsZ1c",
                            "difficulty": "1"
                        },
                        "ID_2515": {
                            "title": "Celadon City",
                            "link": "https://youtu.be/DrUuQ07frtM",
                            "difficulty": "1"
                        },
                        "ID_2516": {
                            "title": "Cycling Road",
                            "link": "https://youtu.be/wxRI9PatDEc",
                            "difficulty": "1"
                        },
                        "ID_2517": {
                            "title": "Route 2",
                            "link": "https://youtu.be/j0f1WqBMR30",
                            "difficulty": "1"
                        },
                        "ID_2518": {
                            "title": "Route 1",
                            "link": "https://youtu.be/DhAdvlTaMOA",
                            "difficulty": "1"
                        },
                        "ID_2519": {
                            "title": "Pallet Town",
                            "link": "https://youtu.be/4mcX-0c2Ebw",
                            "difficulty": "1"
                        },
                        "ID_2520": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/ptu5ldfr3WA",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon HeartGold and SoulSilver": {
                    "gameName": "Pokemon HeartGold and SoulSilver",
                    "answers": ["pokemon heartgold and soulsilver", "hgss", "pokemon heartgold", "pokemon soulsilver", "pokemon heart gold", "pokemon soul silver", "heartgold", "soulsilver", "heart gold", "soul silver", "pokemon hgss"],
                    "songs": {
                        "ID_980": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/9t03YXkyPrg",
                            "difficulty": "1"
                        },
                        "ID_981": {
                            "title": "Battle! Entei",
                            "link": "https://youtu.be/q7bLZdr4vOY",
                            "difficulty": "1"
                        },
                        "ID_982": {
                            "title": "Battle! Gym Leader (Kanto)",
                            "link": "https://youtu.be/V7e8j-EFkdQ",
                            "difficulty": "1"
                        },
                        "ID_983": {
                            "title": "Battle! Gym Leader (Johto)",
                            "link": "https://youtu.be/1lefOgf5ST4",
                            "difficulty": "1"
                        },
                        "ID_984": {
                            "title": "Battle! Lugia",
                            "link": "https://youtu.be/l9OdbpRU87I",
                            "difficulty": "1"
                        },
                        "ID_985": {
                            "title": "Battle! Trainer (Kanto)",
                            "link": "https://youtu.be/6ikAKfWkBeY",
                            "difficulty": "1"
                        },
                        "ID_986": {
                            "title": "Goldenrod City",
                            "link": "https://youtu.be/y5c3ZdABEsg",
                            "difficulty": "1"
                        },
                        "ID_987": {
                            "title": "Ice Path",
                            "link": "https://youtu.be/ygNaSq_lOhw",
                            "difficulty": "1"
                        },
                        "ID_988": {
                            "title": "Route 47",
                            "link": "https://youtu.be/BNd6YxZKlq0",
                            "difficulty": "1"
                        },
                        "ID_989": {
                            "title": "Sinjoh Ruins",
                            "link": "https://youtu.be/HGYcq23JeSo",
                            "difficulty": "1"
                        },
                        "ID_990": {
                            "title": "Encounter! Team Rocket",
                            "link": "https://youtu.be/hpgDFUhOvwQ",
                            "difficulty": "1"
                        },
                        "ID_1747": {
                            "title": "Opening",
                            "link": "https://youtu.be/aJHRUCm4vIg",
                            "difficulty": "1"
                        },
                        "ID_1748": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/CUnPnQzIL-Q",
                            "difficulty": "1"
                        },
                        "ID_1749": {
                            "title": "New Bark Town",
                            "link": "https://youtu.be/iney2we6iTs",
                            "difficulty": "1"
                        },
                        "ID_1750": {
                            "title": "Route 29",
                            "link": "https://youtu.be/qU9FnTBtVyE",
                            "difficulty": "1"
                        },
                        "ID_1751": {
                            "title": "Johto Wild Pokémon Battle",
                            "link": "https://youtu.be/9CAhIhUAdEI",
                            "difficulty": "1"
                        },
                        "ID_1752": {
                            "title": "Cherrygrove City",
                            "link": "https://youtu.be/Roo3ZUIYnRg",
                            "difficulty": "1"
                        },
                        "ID_1753": {
                            "title": "Come Along",
                            "link": "https://youtu.be/H7x4XMHzOvY",
                            "difficulty": "1"
                        },
                        "ID_1754": {
                            "title": "Pokémon Center",
                            "link": "https://youtu.be/D6v20qnqcXY",
                            "difficulty": "1"
                        },
                        "ID_1755": {
                            "title": "Route 30",
                            "link": "https://youtu.be/L5AwqvlTU20",
                            "difficulty": "1"
                        },
                        "ID_1756": {
                            "title": "Johto Trainer Battle",
                            "link": "https://youtu.be/o7wMJVMQglk",
                            "difficulty": "1"
                        },
                        "ID_1757": {
                            "title": "Dark Cave",
                            "link": "https://youtu.be/yAnBYBGEif0",
                            "difficulty": "1"
                        },
                        "ID_1758": {
                            "title": "Violet City",
                            "link": "https://youtu.be/6jauAYIjYQk",
                            "difficulty": "1"
                        },
                        "ID_1759": {
                            "title": "PokeMart",
                            "link": "https://youtu.be/eJUIYO7V86w",
                            "difficulty": "1"
                        },
                        "ID_1760": {
                            "title": "Route 32",
                            "link": "https://youtu.be/-FGC-DmPUnU",
                            "difficulty": "1"
                        },
                        "ID_1761": {
                            "title": "Azalea Town",
                            "link": "https://youtu.be/CSI3sjAl4tE",
                            "difficulty": "1"
                        },
                        "ID_1762": {
                            "title": "Rival Battle",
                            "link": "https://youtu.be/UxOeaT1iZDk",
                            "difficulty": "1"
                        },
                        "ID_1763": {
                            "title": "Goldenrod City",
                            "link": "https://youtu.be/WB1nJq5V828",
                            "difficulty": "1"
                        },
                        "ID_1764": {
                            "title": "Game Corner",
                            "link": "https://youtu.be/OjtZ4EXIZM0",
                            "difficulty": "1"
                        },
                        "ID_1765": {
                            "title": "Bicycle",
                            "link": "https://youtu.be/iet2C4Acik0",
                            "difficulty": "1"
                        },
                        "ID_1766": {
                            "title": "National Park",
                            "link": "https://youtu.be/sfpZSvKbavY",
                            "difficulty": "1"
                        },
                        "ID_1767": {
                            "title": "Ecruteak City",
                            "link": "https://youtu.be/hVFnud60qmU",
                            "difficulty": "1"
                        },
                        "ID_1768": {
                            "title": "Surf",
                            "link": "https://youtu.be/fMFtAR-sCEM",
                            "difficulty": "1"
                        },
                        "ID_1769": {
                            "title": "Cianwood City",
                            "link": "https://youtu.be/m3cR0zmPXgA",
                            "difficulty": "1"
                        },
                        "ID_1770": {
                            "title": "Route 42",
                            "link": "https://youtu.be/niH72ICTrTc",
                            "difficulty": "1"
                        },
                        "ID_1771": {
                            "title": "Route 26",
                            "link": "https://youtu.be/6HMHjvm11Gk",
                            "difficulty": "1"
                        },
                        "ID_1772": {
                            "title": "Vermillion City",
                            "link": "https://youtu.be/4dvYfZlMZCU",
                            "difficulty": "1"
                        },
                        "ID_1773": {
                            "title": "Route 11",
                            "link": "https://youtu.be/2RntDa2oef0",
                            "difficulty": "1"
                        },
                        "ID_1774": {
                            "title": "Lavender Town",
                            "link": "https://youtu.be/HdoWXh8iJis",
                            "difficulty": "1"
                        },
                        "ID_1775": {
                            "title": "Route 3",
                            "link": "https://youtu.be/kcMXm5W2B7k",
                            "difficulty": "1"
                        },
                        "ID_1776": {
                            "title": "Pewter City",
                            "link": "https://youtu.be/5csCWgFAPGo",
                            "difficulty": "1"
                        },
                        "ID_1777": {
                            "title": "Cerulean City",
                            "link": "https://youtu.be/DhnHXZXO5oE",
                            "difficulty": "1"
                        },
                        "ID_1778": {
                            "title": "Route 24",
                            "link": "https://youtu.be/2bDoPFtUghM",
                            "difficulty": "1"
                        },
                        "ID_1779": {
                            "title": "Celadon City",
                            "link": "https://youtu.be/8k-GfaXf1cM",
                            "difficulty": "1"
                        },
                        "ID_1780": {
                            "title": "Viridian Forest",
                            "link": "https://youtu.be/DJc4EtPpOys",
                            "difficulty": "1"
                        },
                        "ID_1781": {
                            "title": "Route 1",
                            "link": "https://youtu.be/QJilgu88qd0",
                            "difficulty": "1"
                        },
                        "ID_1782": {
                            "title": "Pallet Town",
                            "link": "https://youtu.be/2V_3UnD7PLc",
                            "difficulty": "1"
                        },
                        "ID_1783": {
                            "title": "Victory Road",
                            "link": "https://youtu.be/ytYcV6Z5_UA",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Omega Ruby and Alpha Sapphire": {
                    "gameName": "Pokemon Omega Ruby and Alpha Sapphire",
                    "answers": ["pokemon omega ruby and alpha sapphire", "oras", "pokemon omega ruby", "pokemon alpha sapphire", "omega ruby", "alpha sapphire", "pokemon oras"],
                    "songs": {
                        "ID_1028": {
                            "title": "Battle! Wally",
                            "link": "https://youtu.be/9sX_54hHcEE",
                            "difficulty": "1"
                        },
                        "ID_1029": {
                            "title": "Battle! Lorekeeper Zinnia",
                            "link": "https://youtu.be/GIn8_Q27WFY",
                            "difficulty": "1"
                        },
                        "ID_1030": {
                            "title": "Battle! Aqua and Magma Leader",
                            "link": "https://youtu.be/dA3mccI1DjY",
                            "difficulty": "1"
                        },
                        "ID_1031": {
                            "title": "Battle! Champion Steven",
                            "link": "https://youtu.be/UDFWznA_L2k",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Platinum": {
                    "gameName": "Pokemon Platinum",
                    "answers": ["pokemon platinum", "dppt", "pokemon platinum", "platinum", "pokemon dppt"],
                    "songs": {
                        "ID_978": {
                            "title": "Battle! Giratina",
                            "link": "https://youtu.be/EfFqkIsn88U",
                            "difficulty": "1"
                        },
                        "ID_979": {
                            "title": "Battle! Frontier Brain",
                            "link": "https://youtu.be/W_4nBxJY5kM",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Red and Blue": {
                    "gameName": "Pokemon Red and Blue",
                    "answers": ["pokemon red and blue", "red and blue", "pokemon red", "pokemon blue", "rby", "gen 1", "red", "blue"],
                    "songs": {
                        "ID_2439": {
                            "title": "Opening",
                            "link": "https://youtu.be/kN9400LZ1tU",
                            "difficulty": "1"
                        },
                        "ID_2440": {
                            "title": "Pallet Town",
                            "link": "https://youtu.be/X-ctKr8YctU",
                            "difficulty": "1"
                        },
                        "ID_2441": {
                            "title": "Professor Oak",
                            "link": "https://youtu.be/znLforV9pgE",
                            "difficulty": "1"
                        },
                        "ID_2442": {
                            "title": "Oak Laboratory",
                            "link": "https://youtu.be/JrTdQ-Vvp-g",
                            "difficulty": "1"
                        },
                        "ID_2443": {
                            "title": "Route 1",
                            "link": "https://youtu.be/u4cVF9dKHvc",
                            "difficulty": "1"
                        },
                        "ID_2444": {
                            "title": "Battle! Wild Pokemon",
                            "link": "https://youtu.be/vkrdK40V_7c",
                            "difficulty": "1"
                        },
                        "ID_2445": {
                            "title": "Pewter City",
                            "link": "https://youtu.be/AdKj5cmt_OA",
                            "difficulty": "1"
                        },
                        "ID_2446": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/L-hK0m_i3Go",
                            "difficulty": "1"
                        },
                        "ID_2447": {
                            "title": "Viridian Forest",
                            "link": "https://youtu.be/jc-1ndC7cr8",
                            "difficulty": "1"
                        },
                        "ID_2448": {
                            "title": "Battle! Trainer",
                            "link": "https://youtu.be/v1xivdTB8qY",
                            "difficulty": "1"
                        },
                        "ID_2449": {
                            "title": "Mt. Moon Cave",
                            "link": "https://youtu.be/xfH1e2E2hKM",
                            "difficulty": "1"
                        },
                        "ID_2450": {
                            "title": "Route 4",
                            "link": "https://youtu.be/c_XEAfV5Iys",
                            "difficulty": "1"
                        },
                        "ID_2451": {
                            "title": "Cerulean City",
                            "link": "https://youtu.be/gnLHjgaisPc",
                            "difficulty": "1"
                        },
                        "ID_2452": {
                            "title": "Pokemon Gym",
                            "link": "https://youtu.be/Vx5p1Jv27Zk",
                            "difficulty": "1"
                        },
                        "ID_2453": {
                            "title": "Route 24",
                            "link": "https://youtu.be/FbHERgfJq38",
                            "difficulty": "1"
                        },
                        "ID_2454": {
                            "title": "Vermilion City",
                            "link": "https://youtu.be/AIb0EG1BQFA",
                            "difficulty": "1"
                        },
                        "ID_2455": {
                            "title": "S.S. Anne",
                            "link": "https://youtu.be/AtQqYMWFafM",
                            "difficulty": "1"
                        },
                        "ID_2456": {
                            "title": "Route 11",
                            "link": "https://youtu.be/AtQqYMWFafM",
                            "difficulty": "1"
                        },
                        "ID_2457": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/e2bmMCmWs9A",
                            "difficulty": "1"
                        },
                        "ID_2458": {
                            "title": "Cycling",
                            "link": "https://youtu.be/J1VtrL7lP8s",
                            "difficulty": "1"
                        },
                        "ID_2459": {
                            "title": "Lavender Town",
                            "link": "https://youtu.be/YLEw185e7SM",
                            "difficulty": "1"
                        },
                        "ID_2460": {
                            "title": "Pokemon Tower",
                            "link": "https://youtu.be/j7AUnYyG1Rk",
                            "difficulty": "1"
                        },
                        "ID_2461": {
                            "title": "Celadon City",
                            "link": "https://youtu.be/kXQfg_Y0t1M",
                            "difficulty": "1"
                        },
                        "ID_2462": {
                            "title": "Rocket Hideout",
                            "link": "https://youtu.be/Hu8eoZ0j0fs",
                            "difficulty": "1"
                        },
                        "ID_2463": {
                            "title": "Silph Co.",
                            "link": "https://youtu.be/E-rcps1nn2M",
                            "difficulty": "1"
                        },
                        "ID_2464": {
                            "title": "Surfing",
                            "link": "https://youtu.be/Y2pzvMmuyB8",
                            "difficulty": "1"
                        },
                        "ID_2465": {
                            "title": "Cinnabar Island",
                            "link": "https://youtu.be/e2K6yJjrtPE",
                            "difficulty": "1"
                        },
                        "ID_2466": {
                            "title": "Victory Road",
                            "link": "https://youtu.be/naSBf3yOKcY",
                            "difficulty": "1"
                        },
                        "ID_2467": {
                            "title": "Last Battle (Vs. Rival)",
                            "link": "https://youtu.be/QjA0V57kzR8",
                            "difficulty": "1"
                        },
                        "ID_2468": {
                            "title": "Induction to the Hall of Fame",
                            "link": "https://youtu.be/MjrGWD8RG68",
                            "difficulty": "1"
                        },
                        "ID_2469": {
                            "title": "Ending",
                            "link": "https://youtu.be/CtzE-T6v8FE",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Ruby and Sapphire": {
                    "gameName": "Pokemon Ruby and Sapphire",
                    "answers": ["pokemon ruby and sapphire", "ruby and sapphire", "pokemon ruby", "pokemon sapphire", "pokemon emerald", "rse", "gen 3", "ruby", "sapphire", "emerald"],
                    "songs": {
                        "ID_2521": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/2s6Ei1LfBAY",
                            "difficulty": "1"
                        },
                        "ID_2522": {
                            "title": "Littleroot Town",
                            "link": "https://youtu.be/vkP454i0iVk",
                            "difficulty": "1"
                        },
                        "ID_2523": {
                            "title": "Battle! Wild Pokemon",
                            "link": "https://youtu.be/Y4vx0jJYxAY",
                            "difficulty": "1"
                        },
                        "ID_2524": {
                            "title": "Route 101",
                            "link": "https://youtu.be/OVovTN6y-ko",
                            "difficulty": "1"
                        },
                        "ID_2525": {
                            "title": "Oldale Town",
                            "link": "https://youtu.be/3M3jyhNvbh0",
                            "difficulty": "1"
                        },
                        "ID_2526": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/s8RWjVOAjs0",
                            "difficulty": "1"
                        },
                        "ID_2527": {
                            "title": "Battle! Trainer",
                            "link": "https://youtu.be/-cQKhYFFxLc",
                            "difficulty": "1"
                        },
                        "ID_2528": {
                            "title": "Petalburg City",
                            "link": "https://youtu.be/iIqz0M2MOk0",
                            "difficulty": "1"
                        },
                        "ID_2529": {
                            "title": "PokeMart",
                            "link": "https://youtu.be/FekQqazQEZk",
                            "difficulty": "1"
                        },
                        "ID_2530": {
                            "title": "Route 104",
                            "link": "https://youtu.be/gSv_uvf3I0Q",
                            "difficulty": "1"
                        },
                        "ID_2531": {
                            "title": "Petalburg Woods",
                            "link": "https://youtu.be/TnrR9f0T9xQ",
                            "difficulty": "1"
                        },
                        "ID_2532": {
                            "title": "Battle! Team Magma & Aqua",
                            "link": "https://youtu.be/krT_5sVlzx0",
                            "difficulty": "1"
                        },
                        "ID_2533": {
                            "title": "Rustboro City",
                            "link": "https://youtu.be/uONnfXj4Ng4",
                            "difficulty": "1"
                        },
                        "ID_2534": {
                            "title": "Dewford Town",
                            "link": "https://youtu.be/tB9X3gCXuo4",
                            "difficulty": "1"
                        },
                        "ID_2535": {
                            "title": "Pokemon Gym",
                            "link": "https://youtu.be/t2twNTtY0jU",
                            "difficulty": "1"
                        },
                        "ID_2536": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/MT-Cf5Wam0k",
                            "difficulty": "1"
                        },
                        "ID_2537": {
                            "title": "Slateport City",
                            "link": "https://youtu.be/fqXzKS_Ld1k",
                            "difficulty": "1"
                        },
                        "ID_2538": {
                            "title": "Route 110",
                            "link": "https://youtu.be/11RPaeao8Pc",
                            "difficulty": "1"
                        },
                        "ID_2539": {
                            "title": "Bicycle Theme",
                            "link": "https://youtu.be/mrqpuQwhKG4",
                            "difficulty": "1"
                        },
                        "ID_2540": {
                            "title": "Verdanturf Town",
                            "link": "https://youtu.be/7YbEAR_6g-4",
                            "difficulty": "1"
                        },
                        "ID_2541": {
                            "title": "Route 113",
                            "link": "https://youtu.be/7YbEAR_6g-4",
                            "difficulty": "1"
                        },
                        "ID_2542": {
                            "title": "Fallarbor Town",
                            "link": "https://youtu.be/IQgwaEehg4I",
                            "difficulty": "1"
                        },
                        "ID_2543": {
                            "title": "Surf Theme",
                            "link": "https://youtu.be/V03B5F3Woow",
                            "difficulty": "1"
                        },
                        "ID_2544": {
                            "title": "Route 119",
                            "link": "https://youtu.be/PDxk2II9VpU",
                            "difficulty": "1"
                        },
                        "ID_2545": {
                            "title": "May's Theme",
                            "link": "https://youtu.be/AVHDqwiXOs0",
                            "difficulty": "1"
                        },
                        "ID_2546": {
                            "title": "Battle! Rival",
                            "link": "https://youtu.be/Qg6tbgGtL-E",
                            "difficulty": "1"
                        },
                        "ID_2547": {
                            "title": "Fortree City",
                            "link": "https://youtu.be/c5LiwvRpVMs",
                            "difficulty": "1"
                        },
                        "ID_2548": {
                            "title": "Route 120",
                            "link": "https://youtu.be/LGvR7QNr8j0",
                            "difficulty": "1"
                        },
                        "ID_2549": {
                            "title": "Lilycove City",
                            "link": "https://youtu.be/X8eempNLeeE",
                            "difficulty": "1"
                        },
                        "ID_2550": {
                            "title": "Team Magma & Aqua Hideout",
                            "link": "https://youtu.be/8p93ra1ZAKs",
                            "difficulty": "1"
                        },
                        "ID_2551": {
                            "title": "Battle! Team Magma & Aqua Leader",
                            "link": "https://youtu.be/NlsHqqv-InE",
                            "difficulty": "1"
                        },
                        "ID_2552": {
                            "title": "Battle! Groudon, Kyogre & Rayquaza",
                            "link": "https://youtu.be/rnBvdwVK_a4",
                            "difficulty": "1"
                        },
                        "ID_2553": {
                            "title": "Sootopolis City",
                            "link": "https://youtu.be/vW3TfSOthUU",
                            "difficulty": "1"
                        },
                        "ID_2554": {
                            "title": "Ever Grande City",
                            "link": "https://youtu.be/pPWuD97ZkM0",
                            "difficulty": "1"
                        },
                        "ID_2555": {
                            "title": "Battle! Regirock, Regice & Registeel",
                            "link": "https://youtu.be/olY9nNkN6hA",
                            "difficulty": "1"
                        },
                        "ID_2556": {
                            "title": "Battle Tower",
                            "link": "https://youtu.be/wIhwjacXUVI",
                            "difficulty": "1"
                        },
                        "ID_2557": {
                            "title": "Victory Road",
                            "link": "https://youtu.be/NE00ckCTwDo",
                            "difficulty": "1"
                        },
                        "ID_2558": {
                            "title": "Battle! Elite Four",
                            "link": "https://youtu.be/5jgps-Xr_Zw",
                            "difficulty": "1"
                        },
                        "ID_2559": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/duqctwQXn7M",
                            "difficulty": "1"
                        },
                        "ID_2560": {
                            "title": "Ending",
                            "link": "https://youtu.be/8mLcJTuXkGc",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Sun and Moon": {
                    "gameName": "Pokemon Sun and Moon",
                    "answers": ["pokemon sun and moon", "sm", "pokemon sun", "pokemon moon", "pokemon ultra sun", "pokemon ultra moon", "moon", "sun", "ultra sun", "ultra moon", "pokemon sm", "pokemon usum"],
                    "songs": {
                        "ID_1025": {
                            "title": "Battle! Champion Title Match",
                            "link": "https://youtu.be/-dkK9r57BNk",
                            "difficulty": "1"
                        },
                        "ID_1026": {
                            "title": "Battle! Guzma",
                            "link": "https://youtu.be/OwzjXOPbz9Q",
                            "difficulty": "1"
                        },
                        "ID_1027": {
                            "title": "Battle! Plumeria",
                            "link": "https://youtu.be/OwzjXOPbz9Q",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Sword and Shield": {
                    "gameName": "Pokemon Sword and Shield",
                    "answers": ["pokemon sword and shield", "swsh", "pokemon sword", "pokemon shield", "sword", "shield", "pokemon swsh"],
                    "songs": {
                        "ID_1016": {
                            "title": "Battle! Bede",
                            "link": "https://youtu.be/z_TPXbH7ee4",
                            "difficulty": "1"
                        },
                        "ID_1017": {
                            "title": "Battle! Gym Leader Piers",
                            "link": "https://youtu.be/EeFJRaH2Mz8",
                            "difficulty": "1"
                        },
                        "ID_1018": {
                            "title": "Motostoke",
                            "link": "https://youtu.be/KEbqVR61O3k",
                            "difficulty": "1"
                        },
                        "ID_1019": {
                            "title": "Wyndon",
                            "link": "https://youtu.be/0GmX6x4v09Y",
                            "difficulty": "1"
                        },
                        "ID_1020": {
                            "title": "Battle! Battle Tower",
                            "link": "https://youtu.be/Pvm5yDtaGiY",
                            "difficulty": "1"
                        },
                        "ID_1021": {
                            "title": "Battle! Chairman Rose",
                            "link": "https://youtu.be/ugyONbAGE8E",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon Ultra Sun and Ultra Moon": {
                    "gameName": "Pokemon Ultra Sun and Ultra Moon",
                    "answers": ["pokemon ultra sun and ultra moon", "usum", "pokemon ultra sun", "pokemon ultra moon", "ultra sun", "ultra moon"],
                    "songs": {
                        "ID_1022": {
                            "title": "Battle! Flare Boss Lysandre",
                            "link": "https://youtu.be/IBTqAsYC7NI",
                            "difficulty": "1"
                        },
                        "ID_1023": {
                            "title": "Battle! Galactic Boss Cyrus",
                            "link": "https://youtu.be/eqjb2vEIW4I",
                            "difficulty": "1"
                        },
                        "ID_1024": {
                            "title": "Battle! Ultra Necrozma",
                            "link": "https://youtu.be/NFTemk99fLU",
                            "difficulty": "1"
                        }
                    }
                },
                "Pokemon X and Y": {
                    "gameName": "Pokemon X and Y",
                    "answers": ["pokemon x and y", "x and y", "pokemon x and y", "pokemon x", "pokemon y", "xy", "gen 6"],
                    "songs": {
                        "ID_2590": {
                            "title": "Kalos Region",
                            "link": "https://youtu.be/H8E9mUIDaxE",
                            "difficulty": "1"
                        },
                        "ID_2591": {
                            "title": "Vaniville Town",
                            "link": "https://youtu.be/MOkWNuGfCD0",
                            "difficulty": "1"
                        },
                        "ID_2592": {
                            "title": "Route 1",
                            "link": "https://youtu.be/lk6h88C9keY",
                            "difficulty": "1"
                        },
                        "ID_2593": {
                            "title": "Friends Theme (A New Meeting)",
                            "link": "https://youtu.be/ZOxUSuHDnq4",
                            "difficulty": "1"
                        },
                        "ID_2594": {
                            "title": "Battle! Friend",
                            "link": "https://youtu.be/mFWk2HMaV3k",
                            "difficulty": "1"
                        },
                        "ID_2595": {
                            "title": "Battle! Wild Pokemon",
                            "link": "https://youtu.be/O84ehSXozec",
                            "difficulty": "1"
                        },
                        "ID_2596": {
                            "title": "Santalune City",
                            "link": "https://youtu.be/0PYFE_9uL8g",
                            "difficulty": "1"
                        },
                        "ID_2597": {
                            "title": "Pokemon Center",
                            "link": "https://youtu.be/jzln19McUqg",
                            "difficulty": "1"
                        },
                        "ID_2598": {
                            "title": "Pokemon Gym",
                            "link": "https://youtu.be/Z0f-7y3Izlo",
                            "difficulty": "1"
                        },
                        "ID_2599": {
                            "title": "Battle! Gym Leader",
                            "link": "https://youtu.be/OSuQ3kBzXdk",
                            "difficulty": "1"
                        },
                        "ID_2600": {
                            "title": "Route 4",
                            "link": "https://youtu.be/zvnEoMcYDdA",
                            "difficulty": "1"
                        },
                        "ID_2601": {
                            "title": "Gate",
                            "link": "https://youtu.be/IRXv4ryvYnE",
                            "difficulty": "1"
                        },
                        "ID_2602": {
                            "title": "Lumiose City",
                            "link": "https://youtu.be/2AfxpCJXcr0",
                            "difficulty": "1"
                        },
                        "ID_2603": {
                            "title": "Professor Sycamore's Theme",
                            "link": "https://youtu.be/BOslj3Zr9bY",
                            "difficulty": "1"
                        },
                        "ID_2604": {
                            "title": "Camphrier Town",
                            "link": "https://youtu.be/DaLcx2k-hxg",
                            "difficulty": "1"
                        },
                        "ID_2605": {
                            "title": "Parfum Palace",
                            "link": "https://youtu.be/deeMbQT-eE8",
                            "difficulty": "1"
                        },
                        "ID_2606": {
                            "title": "Route 8",
                            "link": "https://youtu.be/h05TzXFBKJQ",
                            "difficulty": "1"
                        },
                        "ID_2607": {
                            "title": "Cyllage City",
                            "link": "https://youtu.be/dAwgrcRDu88",
                            "difficulty": "1"
                        },
                        "ID_2608": {
                            "title": "Bicycle Theme",
                            "link": "https://youtu.be/dAwgrcRDu88",
                            "difficulty": "1"
                        },
                        "ID_2609": {
                            "title": "Geosenge Town",
                            "link": "https://youtu.be/4V8Y-BOnXmQ",
                            "difficulty": "1"
                        },
                        "ID_2610": {
                            "title": "Battle! Successor Korrina",
                            "link": "https://youtu.be/UWFio5arA6g",
                            "difficulty": "1"
                        },
                        "ID_2611": {
                            "title": "Surf Theme",
                            "link": "https://youtu.be/iRYjSFfjjfo",
                            "difficulty": "1"
                        },
                        "ID_2612": {
                            "title": "An Unwavering Heart",
                            "link": "https://youtu.be/5glICAquk_c",
                            "difficulty": "1"
                        },
                        "ID_2613": {
                            "title": "The Kalos Power Plant",
                            "link": "https://youtu.be/DeA53uP_bxU",
                            "difficulty": "1"
                        },
                        "ID_2614": {
                            "title": "Battle! Team Flare",
                            "link": "https://youtu.be/Xz6kS4FcAeA",
                            "difficulty": "1"
                        },
                        "ID_2615": {
                            "title": "Friends Theme (Reunited)",
                            "link": "https://youtu.be/un9m4Iz2IzI",
                            "difficulty": "1"
                        },
                        "ID_2616": {
                            "title": "Laverre City",
                            "link": "https://youtu.be/_ZfQQiwUKKo",
                            "difficulty": "1"
                        },
                        "ID_2617": {
                            "title": "Route 15",
                            "link": "https://youtu.be/SCH4wVasiD4",
                            "difficulty": "1"
                        },
                        "ID_2618": {
                            "title": "Dendemille Town",
                            "link": "https://youtu.be/6MAyhUE7x6w",
                            "difficulty": "1"
                        },
                        "ID_2619": {
                            "title": "Anistar City",
                            "link": "https://youtu.be/6k091sH8m0Y",
                            "difficulty": "1"
                        },
                        "ID_2620": {
                            "title": "Battle! Xerneas & Yveltal",
                            "link": "https://youtu.be/NOvIgZYoYkk",
                            "difficulty": "1"
                        },
                        "ID_2621": {
                            "title": "Battle! Lysandre",
                            "link": "https://youtu.be/na-H5aSJRjs",
                            "difficulty": "1"
                        },
                        "ID_2622": {
                            "title": "AZ",
                            "link": "https://youtu.be/BNTAgfytAo4",
                            "difficulty": "1"
                        },
                        "ID_2623": {
                            "title": "Route 18",
                            "link": "https://youtu.be/Cd4HrMRrHWo",
                            "difficulty": "1"
                        },
                        "ID_2624": {
                            "title": "Friends Theme (Friends Forever)",
                            "link": "https://youtu.be/yw5sK0kgY5c",
                            "difficulty": "1"
                        },
                        "ID_2625": {
                            "title": "Snowbelle City",
                            "link": "https://youtu.be/iabhM-i43XI",
                            "difficulty": "1"
                        },
                        "ID_2626": {
                            "title": "Jubilife City",
                            "link": "https://youtu.be/aWTtLUeODLQ",
                            "difficulty": "1"
                        },
                        "ID_2627": {
                            "title": "Victory Road",
                            "link": "https://youtu.be/g5azPTJ4NaQ",
                            "difficulty": "1"
                        },
                        "ID_2628": {
                            "title": "The Pokemon League",
                            "link": "https://youtu.be/XDtK3Me_dEs",
                            "difficulty": "1"
                        },
                        "ID_2629": {
                            "title": "Battle! Elite Four",
                            "link": "https://youtu.be/b_ZnRwrhlZE",
                            "difficulty": "1"
                        },
                        "ID_2630": {
                            "title": "Battle! Champion",
                            "link": "https://youtu.be/Ty2RFGvU92Q",
                            "difficulty": "1"
                        },
                        "ID_2631": {
                            "title": "Kiseki",
                            "link": "https://youtu.be/akZwbF50fPI",
                            "difficulty": "1"
                        },
                        "ID_2632": {
                            "title": "Kiloude City",
                            "link": "https://youtu.be/kpzLZUUTMeE",
                            "difficulty": "1"
                        },
                        "ID_2633": {
                            "title": "Shopping",
                            "link": "https://youtu.be/7KED6H1hwrE",
                            "difficulty": "1"
                        },
                        "ID_2634": {
                            "title": "Boutique",
                            "link": "https://youtu.be/7KED6H1hwrE",
                            "difficulty": "1"
                        },
                        "ID_2635": {
                            "title": "Hotel Richissme",
                            "link": "https://youtu.be/nLAFkmY1JsI",
                            "difficulty": "1"
                        },
                        "ID_2636": {
                            "title": "Emma's Theme",
                            "link": "https://youtu.be/81CzU4X7x5w",
                            "difficulty": "1"
                        },
                        "ID_2637": {
                            "title": "Secret Super Training",
                            "link": "https://youtu.be/IoeVEnPtCdM",
                            "difficulty": "1"
                        },
                        "ID_2638": {
                            "title": "Battle! Mewtwo",
                            "link": "https://youtu.be/Sb7Eldc2SAU",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Portal": {
            "seriesName": "Portal",
            "seriesColor": "red",
            "game": {
                "Portal": {
                    "gameName": "Portal",
                    "answers": ["portal", "portal"],
                    "songs": {
                        "ID_932": {
                            "title": "Still Alive",
                            "link": "https://youtu.be/Mk0PqG79JQI",
                            "difficulty": "1"
                        }
                    }
                },
                "Portal 2": {
                    "gameName": "Portal 2",
                    "answers": ["portal 2"],
                    "songs": {
                        "ID_858": {
                            "title": "Science is Fun",
                            "link": "https://youtu.be/zxb1zoj-hcM",
                            "difficulty": "1"
                        },
                        "ID_859": {
                            "title": "The Future Starts With You",
                            "link": "https://youtu.be/GzITksXiErI",
                            "difficulty": "1"
                        },
                        "ID_860": {
                            "title": "The Friendly Faith Plate",
                            "link": "https://youtu.be/aATyrpOMsOU",
                            "difficulty": "1"
                        },
                        "ID_861": {
                            "title": "I Saw a Deer Today",
                            "link": "https://youtu.be/GCTBPlEqsUw",
                            "difficulty": "1"
                        },
                        "ID_862": {
                            "title": "Turret Wife Serenade",
                            "link": "https://youtu.be/5UNISuSde1c",
                            "difficulty": "1"
                        },
                        "ID_863": {
                            "title": "Machiavellian Bach",
                            "link": "https://youtu.be/FJMXdikWpfk",
                            "difficulty": "1"
                        },
                        "ID_864": {
                            "title": "OMG, What Has He Done?",
                            "link": "https://youtu.be/3Qgwb9KaLp0",
                            "difficulty": "1"
                        },
                        "ID_865": {
                            "title": "Cara Mia Addio",
                            "link": "https://youtu.be/hpaiZHvweJc",
                            "difficulty": "1"
                        },
                        "ID_866": {
                            "title": "Want You Gone",
                            "link": "https://youtu.be/y_hD-aVeL2k",
                            "difficulty": "1"
                        },
                        "ID_867": {
                            "title": "Robots FTW",
                            "link": "https://youtu.be/bBak9CMoXoc",
                            "difficulty": "1"
                        },
                        "ID_868": {
                            "title": "Reconstructing More Science",
                            "link": "https://youtu.be/MjHmPZmi-k8",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Professor Layton": {
            "seriesName": "Professor Layton",
            "seriesColor": "red",
            "game": {
                "Curious Village": {
                    "gameName": "Curious Village",
                    "answers": ["curious village", "professor layton", "professor layton and the curious village", "professor layton curious village"],
                    "songs": {
                        "ID_91": {
                            "title": "Layton's Theme",
                            "link": "https://youtu.be/dFBKHSitIjo",
                            "difficulty": "1"
                        },
                        "ID_92": {
                            "title": "The Curious Village",
                            "link": "https://youtu.be/qPfAwPp9Apw",
                            "difficulty": "1"
                        },
                        "ID_93": {
                            "title": "Walking in the Village",
                            "link": "https://youtu.be/PDt86F-QWm0",
                            "difficulty": "1"
                        },
                        "ID_94": {
                            "title": "Mysterious Girl",
                            "link": "https://youtu.be/J1KmliLXVkE",
                            "difficulty": "1"
                        },
                        "ID_95": {
                            "title": "Puzzle",
                            "link": "https://youtu.be/x2nPysfmt0U",
                            "difficulty": "1"
                        },
                        "ID_96": {
                            "title": "Something Happens",
                            "link": "https://youtu.be/1FuyqT0MsNU",
                            "difficulty": "1"
                        },
                        "ID_97": {
                            "title": "Pursuit at Night",
                            "link": "https://youtu.be/NE_WVSv4sVo",
                            "difficulty": "1"
                        },
                        "ID_98": {
                            "title": "Night Falls",
                            "link": "https://youtu.be/ZPbImzHs5DE",
                            "difficulty": "1"
                        },
                        "ID_99": {
                            "title": "The Village Starts Moving",
                            "link": "https://youtu.be/HxS4AAPb7to",
                            "difficulty": "1"
                        },
                        "ID_100": {
                            "title": "Ferris Wheel Park",
                            "link": "https://youtu.be/xVP_E8IkbPM",
                            "difficulty": "1"
                        },
                        "ID_101": {
                            "title": "Memory of the Village",
                            "link": "https://youtu.be/UBGERI7m63Q",
                            "difficulty": "1"
                        },
                        "ID_102": {
                            "title": "Ending Theme",
                            "link": "https://youtu.be/SlICVgNj690",
                            "difficulty": "1"
                        }
                    }
                },
                "Lost / Unwound Future": {
                    "gameName": "Lost / Unwound Future",
                    "answers": ["lost / unwound future", "professor layton lf", "professor layton uf", "unwound future", "lost future"],
                    "songs": {
                        "ID_553": {
                            "title": "The Unwound Future / The Lost Future",
                            "link": "https://youtu.be/K05xxq1-9ZY",
                            "difficulty": "1"
                        },
                        "ID_554": {
                            "title": "Puzzles (Reinvented)",
                            "link": "https://youtu.be/nXwm7AVhx_A",
                            "difficulty": "1"
                        },
                        "ID_555": {
                            "title": "London Streets",
                            "link": "https://youtu.be/MuSmUI25Ulw",
                            "difficulty": "1"
                        },
                        "ID_556": {
                            "title": "Tension",
                            "link": "https://youtu.be/GzDLP-jHmz4",
                            "difficulty": "1"
                        },
                        "ID_557": {
                            "title": "A Quiet Town",
                            "link": "https://youtu.be/PCokkvGl2AE",
                            "difficulty": "1"
                        },
                        "ID_558": {
                            "title": "Sorrow",
                            "link": "https://youtu.be/aWMpDVrcyvw",
                            "difficulty": "1"
                        },
                        "ID_559": {
                            "title": "Suspicion",
                            "link": "https://youtu.be/LUToNKrxT74",
                            "difficulty": "1"
                        },
                        "ID_560": {
                            "title": "Puzzle Battle",
                            "link": "https://youtu.be/w7xAH0NMd2s",
                            "difficulty": "1"
                        },
                        "ID_561": {
                            "title": "Memories",
                            "link": "https://youtu.be/hlG6-NK6N8Q",
                            "difficulty": "1"
                        },
                        "ID_562": {
                            "title": "The Professors Deductions",
                            "link": "https://youtu.be/3gbWiFxMvNU",
                            "difficulty": "1"
                        },
                        "ID_563": {
                            "title": "Don Paolo's Theme",
                            "link": "https://youtu.be/ohizEQsS6jY",
                            "difficulty": "1"
                        },
                        "ID_564": {
                            "title": "Puzzles Reinvented 2",
                            "link": "https://youtu.be/_hhRNn107lo",
                            "difficulty": "1"
                        },
                        "ID_565": {
                            "title": "The Research Facility",
                            "link": "https://youtu.be/wF4LCLp-xSo",
                            "difficulty": "1"
                        },
                        "ID_566": {
                            "title": "The Mobile Fortress",
                            "link": "https://youtu.be/ehCTkparvHI",
                            "difficulty": "1"
                        },
                        "ID_567": {
                            "title": "The Toy Car",
                            "link": "https://youtu.be/3agpqUJ0JeI",
                            "difficulty": "1"
                        },
                        "ID_568": {
                            "title": "Time Travel [Instrumental]",
                            "link": "https://youtu.be/jmX9uJBVWH0",
                            "difficulty": "1"
                        }
                    }
                },
                "Pandora's / Diabolical Box": {
                    "gameName": "Pandora's / Diabolical Box",
                    "answers": ["pandora's / diabolical box", "professor layton pb", "professor layton db", "professor layton pandoras box", "professor layton pandora's box", "professor layton diabolical box", "professor layton and the diabolical box", "diabolical box", "pandoras box", "pandora's box"],
                    "songs": {
                        "ID_544": {
                            "title": "Theme of Diabolical Box",
                            "link": "https://youtu.be/WCZ-_U3md4I",
                            "difficulty": "1"
                        },
                        "ID_545": {
                            "title": "London",
                            "link": "https://youtu.be/HDyT-msFFCg",
                            "difficulty": "1"
                        },
                        "ID_546": {
                            "title": "The Molentary Express",
                            "link": "https://youtu.be/RR8_BMN68Ok",
                            "difficulty": "1"
                        },
                        "ID_547": {
                            "title": "Suspense",
                            "link": "https://youtu.be/7t2AMjtVv28",
                            "difficulty": "1"
                        },
                        "ID_548": {
                            "title": "Dropstone",
                            "link": "https://youtu.be/Z5wVNSvl1io",
                            "difficulty": "1"
                        },
                        "ID_549": {
                            "title": "A Disquieting Atmosphere",
                            "link": "https://youtu.be/DZWXHK0s5Dg",
                            "difficulty": "1"
                        },
                        "ID_550": {
                            "title": "Folsense",
                            "link": "https://youtu.be/t2OmAxetWrc",
                            "difficulty": "1"
                        },
                        "ID_551": {
                            "title": "Lost Forest",
                            "link": "https://youtu.be/mE-QE4_73KU",
                            "difficulty": "1"
                        },
                        "ID_552": {
                            "title": "Iris",
                            "link": "https://youtu.be/ngKf9Uummqk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Professor Layton vs. Ace Attorney": {
            "seriesName": "Professor Layton vs. Ace Attorney",
            "seriesColor": "red",
            "game": {
                "Professor Layton vs. Phoenix Wright: Ace Attorney": {
                    "gameName": "Professor Layton vs. Phoenix Wright: Ace Attorney",
                    "answers": ["professor layton vs. phoenix wright: ace attorney", "professor layton vs ace attorney", "professor layton vs phoenix wright ace attorney", "professor layton vs phoenix wright", "layton vs wright", "layton vs ace attorney", "layton vs aa"],
                    "songs": {
                        "ID_2319": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/yz0-xcOY_8c",
                            "difficulty": "1"
                        },
                        "ID_2320": {
                            "title": "Professor Layton's Theme",
                            "link": "https://youtu.be/uiCf_Urxggc",
                            "difficulty": "1"
                        },
                        "ID_2321": {
                            "title": "About Town",
                            "link": "https://youtu.be/yIzrWD9BArY",
                            "difficulty": "1"
                        },
                        "ID_2322": {
                            "title": "Bewitching Puzzles",
                            "link": "https://youtu.be/IZTAkpQFzy8",
                            "difficulty": "1"
                        },
                        "ID_2323": {
                            "title": "Quiet Moments",
                            "link": "https://youtu.be/jG-cO1zylOs",
                            "difficulty": "1"
                        },
                        "ID_2324": {
                            "title": "The Professor's Deductions",
                            "link": "https://youtu.be/HNZlKL1X70U",
                            "difficulty": "1"
                        },
                        "ID_2325": {
                            "title": "Into the Forest",
                            "link": "https://youtu.be/NwB0mcahSSA",
                            "difficulty": "1"
                        },
                        "ID_2326": {
                            "title": "Courtroom Lounge ~ Opening Prelude",
                            "link": "https://youtu.be/Kk-41BWJ-_4",
                            "difficulty": "1"
                        },
                        "ID_2327": {
                            "title": "Court Begins",
                            "link": "https://youtu.be/OXwj-FGljGM",
                            "difficulty": "1"
                        },
                        "ID_2328": {
                            "title": "Logic and Tricks",
                            "link": "https://youtu.be/qZvUXs9eyQw",
                            "difficulty": "1"
                        },
                        "ID_2329": {
                            "title": "Cross-Examination ~ Moderato",
                            "link": "https://youtu.be/M9dv9V7WwGg",
                            "difficulty": "1"
                        },
                        "ID_2330": {
                            "title": "Phoenix Wright ~ Objection!",
                            "link": "https://youtu.be/BEiaYPPB9MM",
                            "difficulty": "1"
                        },
                        "ID_2331": {
                            "title": "Cornered",
                            "link": "https://youtu.be/FfM70egWauo",
                            "difficulty": "1"
                        },
                        "ID_2332": {
                            "title": "Won the Case! ~ First Victory",
                            "link": "https://youtu.be/i6FXbxkxRAI",
                            "difficulty": "1"
                        },
                        "ID_2333": {
                            "title": "Phoenix Wright ~ Objection! 2012",
                            "link": "https://youtu.be/N_Mtx_4nJj0",
                            "difficulty": "1"
                        },
                        "ID_2334": {
                            "title": "Mass Inquisition ~ Allegro",
                            "link": "https://youtu.be/VPgXjUhyRm8",
                            "difficulty": "1"
                        },
                        "ID_2335": {
                            "title": "Cornered ~ Spell-breaker",
                            "link": "https://youtu.be/FYg0J2rE0Aw",
                            "difficulty": "1"
                        },
                        "ID_2336": {
                            "title": "Turnabout Sisters ~ Music Box Melody",
                            "link": "https://youtu.be/1hbiQzWGkXA",
                            "difficulty": "1"
                        },
                        "ID_2337": {
                            "title": "Tale's End",
                            "link": "https://youtu.be/l_2bCujQP1k",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Punch-Out!!": {
            "seriesName": "Punch-Out!!",
            "seriesColor": "red",
            "game": {
                "Mike Tyson's Punch-Out!!": {
                    "gameName": "Mike Tyson's Punch-Out!!",
                    "answers": ["mike tyson's punch-out!!", "mike tysons punch out", "mike tysons punch-out", "mike tysons punchout", "mike tyson's punch out", "mike tyson's punch-out", "mike tyson's punchout", "punch-out", "punch out", "punchout"],
                    "songs": {
                        "ID_2195": {
                            "title": "Title Part 1",
                            "link": "https://youtu.be/dh7SoGXWlnc",
                            "difficulty": "1"
                        },
                        "ID_2196": {
                            "title": "Fight Theme",
                            "link": "https://youtu.be/VE8vKLEK6A8",
                            "difficulty": "1"
                        },
                        "ID_2197": {
                            "title": "Bicycle Training",
                            "link": "https://youtu.be/HE8pyBoFdww",
                            "difficulty": "1"
                        },
                        "ID_2198": {
                            "title": "Little Mac Down",
                            "link": "https://youtu.be/w3IZjfvXvIE",
                            "difficulty": "1"
                        }
                    }
                },
                "Punch-Out!!": {
                    "gameName": "Punch-Out!!",
                    "answers": ["punch-out!!", "punch out", "punchout", "punch-out"],
                    "songs": {
                        "ID_2199": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/MQurUl4Snio",
                            "difficulty": "1"
                        },
                        "ID_2200": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/D-kIRD5zPQU",
                            "difficulty": "1"
                        },
                        "ID_2201": {
                            "title": "Exhibition Mode",
                            "link": "https://youtu.be/ZWRLrkJrxuw",
                            "difficulty": "1"
                        },
                        "ID_2202": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/8Ph13N5bDA4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Rhythm Heaven": {
            "seriesName": "Rhythm Heaven",
            "seriesColor": "red",
            "game": {
                "Rhythm Heaven (DS)": {
                    "gameName": "Rhythm Heaven (DS)",
                    "answers": ["rhythm heaven (ds)", "rhythm heaven ds", "rhythm heaven", "rhythm paradise", "rhythm paradise ds"],
                    "songs": {
                        "ID_103": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/TmQtwXr9PSo",
                            "difficulty": "1"
                        },
                        "ID_104": {
                            "title": "Game Select",
                            "link": "https://youtu.be/gjioI1QgyoY",
                            "difficulty": "1"
                        },
                        "ID_105": {
                            "title": "Built to Scale",
                            "link": "https://youtu.be/GbeQafrErOY",
                            "difficulty": "1"
                        },
                        "ID_106": {
                            "title": "Glee Club",
                            "link": "https://youtu.be/Mc4odqtZKFk",
                            "difficulty": "1"
                        },
                        "ID_107": {
                            "title": "Thrilling! Is this Love?",
                            "link": "https://youtu.be/XHXVFBKZ9i8",
                            "difficulty": "1"
                        },
                        "ID_108": {
                            "title": "Remix 1",
                            "link": "https://youtu.be/jz39FqoWA20",
                            "difficulty": "1"
                        },
                        "ID_109": {
                            "title": "Rhythm Rally",
                            "link": "https://youtu.be/Ix1Etc5eKck",
                            "difficulty": "1"
                        },
                        "ID_110": {
                            "title": "Remix 2",
                            "link": "https://youtu.be/qLUv4jj2640",
                            "difficulty": "1"
                        },
                        "ID_111": {
                            "title": "Love Ooh Ooh Paradise",
                            "link": "https://youtu.be/MhN1xBvmq2w",
                            "difficulty": "1"
                        },
                        "ID_112": {
                            "title": "Remix 3",
                            "link": "https://youtu.be/0SZMGTXKhNw",
                            "difficulty": "1"
                        },
                        "ID_113": {
                            "title": "Love Lab",
                            "link": "https://youtu.be/sScjtRcE7SQ",
                            "difficulty": "1"
                        },
                        "ID_114": {
                            "title": "Remix 4",
                            "link": "https://youtu.be/LxyG2WRmOD0",
                            "difficulty": "1"
                        },
                        "ID_115": {
                            "title": "Tunnel",
                            "link": "https://youtu.be/v7fphvqlx5I",
                            "difficulty": "1"
                        },
                        "ID_116": {
                            "title": "Tears of a Dog Ninja",
                            "link": "https://youtu.be/A67fTNF-kz8",
                            "difficulty": "1"
                        },
                        "ID_117": {
                            "title": "Remix 5",
                            "link": "https://youtu.be/2pWK8K3YBM0",
                            "difficulty": "1"
                        },
                        "ID_118": {
                            "title": "Lockstep",
                            "link": "https://youtu.be/6ixtYsFcaHw",
                            "difficulty": "1"
                        },
                        "ID_119": {
                            "title": "Rockers",
                            "link": "https://youtu.be/ZaDUZfbc9uY",
                            "difficulty": "1"
                        },
                        "ID_120": {
                            "title": "Karate Man (Struck by the Rain)",
                            "link": "https://youtu.be/b6fqlTB-nSo",
                            "difficulty": "1"
                        },
                        "ID_121": {
                            "title": "Remix 6",
                            "link": "https://youtu.be/IybcisI5oJc",
                            "difficulty": "1"
                        },
                        "ID_122": {
                            "title": "Staff Credits (That's Paradise)",
                            "link": "https://youtu.be/aKAFoq0m2CA",
                            "difficulty": "1"
                        },
                        "ID_123": {
                            "title": "Cast",
                            "link": "https://youtu.be/P3Wm4WuyZew",
                            "difficulty": "1"
                        },
                        "ID_124": {
                            "title": "Game Select 2",
                            "link": "https://youtu.be/2BIoQbGtSWE",
                            "difficulty": "1"
                        },
                        "ID_125": {
                            "title": "Remix 7",
                            "link": "https://youtu.be/0rD7i8qDDrM",
                            "difficulty": "1"
                        },
                        "ID_126": {
                            "title": "Rhythm Rally 2",
                            "link": "https://youtu.be/sgDl-eXB-i8",
                            "difficulty": "1"
                        },
                        "ID_127": {
                            "title": "Remix 8",
                            "link": "https://youtu.be/pHKkgTZS5K8",
                            "difficulty": "1"
                        },
                        "ID_128": {
                            "title": "Space Soccer 2",
                            "link": "https://youtu.be/Vz8g87hZ8qs",
                            "difficulty": "1"
                        },
                        "ID_129": {
                            "title": "Remix 9",
                            "link": "https://youtu.be/A0MGFrh0GBQ",
                            "difficulty": "1"
                        },
                        "ID_130": {
                            "title": "Munchy Monk Circus",
                            "link": "https://youtu.be/dC8kM1opPCg",
                            "difficulty": "1"
                        },
                        "ID_131": {
                            "title": "Shoot-'Em-Up 2",
                            "link": "https://youtu.be/W0wzAjKry7I",
                            "difficulty": "1"
                        },
                        "ID_132": {
                            "title": "Rockers 2",
                            "link": "https://youtu.be/gOCsXr6o3Nk",
                            "difficulty": "1"
                        },
                        "ID_133": {
                            "title": "Remix 10",
                            "link": "https://youtu.be/QYcyLdhgqQI",
                            "difficulty": "1"
                        }
                    }
                },
                "Rhythm Heaven Fever": {
                    "gameName": "Rhythm Heaven Fever",
                    "answers": ["rhythm heaven fever", "rhythm heaven fever", "beat the beat rhythm paradise", "beat the beat: rhythm paradise", "rhythm heaven wii", "rhythm paradise wii"],
                    "songs": {
                        "ID_134": {
                            "title": "Game Select 1",
                            "link": "https://youtu.be/0rF96AqSwmI",
                            "difficulty": "1"
                        },
                        "ID_135": {
                            "title": "Hole in One",
                            "link": "https://youtu.be/s_QQGykxEPI",
                            "difficulty": "1"
                        },
                        "ID_136": {
                            "title": "Remix 1",
                            "link": "https://youtu.be/TcufdwbnF0k",
                            "difficulty": "1"
                        },
                        "ID_137": {
                            "title": "Tambourine",
                            "link": "https://youtu.be/Ll43omBpo6E",
                            "difficulty": "1"
                        },
                        "ID_138": {
                            "title": "Monkey Watch",
                            "link": "https://youtu.be/Z_z2NYEOKXM",
                            "difficulty": "1"
                        },
                        "ID_139": {
                            "title": "Built to Scale",
                            "link": "https://youtu.be/NSAt95BnfM0",
                            "difficulty": "1"
                        },
                        "ID_140": {
                            "title": "Air Rally",
                            "link": "https://youtu.be/1MBM0ndrpB8",
                            "difficulty": "1"
                        },
                        "ID_141": {
                            "title": "Remix 3 ~ I Feel Fine!! (Japanese)",
                            "link": "https://youtu.be/boz_n3N_p5U",
                            "difficulty": "1"
                        },
                        "ID_142": {
                            "title": "Ringside",
                            "link": "https://youtu.be/tgPFSiIeP14",
                            "difficulty": "1"
                        },
                        "ID_143": {
                            "title": "Packing Pests",
                            "link": "https://youtu.be/ebdCqKixkgE",
                            "difficulty": "1"
                        },
                        "ID_144": {
                            "title": "Remix 4",
                            "link": "https://youtu.be/-XWxoXdeSOU",
                            "difficulty": "1"
                        },
                        "ID_145": {
                            "title": "Flipper Flop",
                            "link": "https://youtu.be/EcQ4upwXgX0",
                            "difficulty": "1"
                        },
                        "ID_146": {
                            "title": "Exhibition Match",
                            "link": "https://youtu.be/X1eCEd22UcQ",
                            "difficulty": "1"
                        },
                        "ID_147": {
                            "title": "Flock Step",
                            "link": "https://youtu.be/4HvtGK9-tD8",
                            "difficulty": "1"
                        },
                        "ID_148": {
                            "title": "Remix 5",
                            "link": "https://youtu.be/CHT2wj0qo9I",
                            "difficulty": "1"
                        },
                        "ID_149": {
                            "title": "Bossa Nova",
                            "link": "https://youtu.be/lZptJeDYtGs",
                            "difficulty": "1"
                        },
                        "ID_150": {
                            "title": "Remix 6",
                            "link": "https://youtu.be/F2WmMMfNFdQ",
                            "difficulty": "1"
                        },
                        "ID_151": {
                            "title": "Tap Troupe",
                            "link": "https://youtu.be/yhpfl45_HYs",
                            "difficulty": "1"
                        },
                        "ID_152": {
                            "title": "Cheer Readers",
                            "link": "https://youtu.be/HZ3eo3XSRWw",
                            "difficulty": "1"
                        },
                        "ID_153": {
                            "title": "Karate Man (Japanese)",
                            "link": "https://youtu.be/iy-obB3oLsg",
                            "difficulty": "1"
                        },
                        "ID_154": {
                            "title": "Remix 7",
                            "link": "https://youtu.be/KI6jFsrs-28",
                            "difficulty": "1"
                        },
                        "ID_155": {
                            "title": "Night Walk (Japanese)",
                            "link": "https://youtu.be/J05QRBGZ1sU",
                            "difficulty": "1"
                        },
                        "ID_156": {
                            "title": "Character Cast",
                            "link": "https://youtu.be/gXY5Mv4rqIk",
                            "difficulty": "1"
                        },
                        "ID_157": {
                            "title": "Game Select 2",
                            "link": "https://youtu.be/9gmk3IPraj8",
                            "difficulty": "1"
                        },
                        "ID_158": {
                            "title": "Built to Scale 2",
                            "link": "https://youtu.be/xOzgsI3wlwo",
                            "difficulty": "1"
                        },
                        "ID_159": {
                            "title": "Remix 8 (Japanese)",
                            "link": "https://youtu.be/dGpu0HZkEBg",
                            "difficulty": "1"
                        },
                        "ID_160": {
                            "title": "Cheer Readers 2",
                            "link": "https://youtu.be/sStZ-s85Cw4",
                            "difficulty": "1"
                        },
                        "ID_161": {
                            "title": "Remix 9 (Japanese)",
                            "link": "https://youtu.be/ORVMXQMVJxM",
                            "difficulty": "1"
                        },
                        "ID_162": {
                            "title": "Packing Pests 2",
                            "link": "https://youtu.be/YVzxJpxmiAA",
                            "difficulty": "1"
                        },
                        "ID_163": {
                            "title": "Karate Man 2 (Japanese)",
                            "link": "https://youtu.be/oCinvV0oooE",
                            "difficulty": "1"
                        },
                        "ID_164": {
                            "title": "Remix 10",
                            "link": "https://youtu.be/8tbDJYUc0z0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ribbit King": {
            "seriesName": "Ribbit King",
            "seriesColor": "red",
            "game": {
                "Ribbit King": {
                    "gameName": "Ribbit King",
                    "answers": ["ribbit king"],
                    "songs": {
                        "ID_1307": {
                            "title": "Ribbetopia 1",
                            "link": "https://youtu.be/V0njPAsdeoU",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Rivals of Aether": {
            "seriesName": "Rivals of Aether",
            "seriesColor": "red",
            "game": {
                "Rivals of Aether": {
                    "gameName": "Rivals of Aether",
                    "answers": ["rivals of aether"],
                    "songs": {
                        "ID_2268": {
                            "title": "Fighter Select",
                            "link": "https://youtu.be/UtAAMGfpgRw",
                            "difficulty": "1"
                        },
                        "ID_2269": {
                            "title": "Customization",
                            "link": "https://youtu.be/qT1s6K16rJs",
                            "difficulty": "1"
                        },
                        "ID_2270": {
                            "title": "Fighter Select Final",
                            "link": "https://youtu.be/Lzz1nvDL9tA",
                            "difficulty": "1"
                        },
                        "ID_2271": {
                            "title": "Fiery Ambitions",
                            "link": "https://youtu.be/XY9h1NRLiI4",
                            "difficulty": "1"
                        },
                        "ID_2272": {
                            "title": "Fight And Flight",
                            "link": "https://youtu.be/XUR8xcucUnE",
                            "difficulty": "1"
                        },
                        "ID_2273": {
                            "title": "Luna Ascension EX",
                            "link": "https://youtu.be/jWzt8PJxndw",
                            "difficulty": "1"
                        },
                        "ID_2274": {
                            "title": "Conflict",
                            "link": "https://youtu.be/32DFRPmJ1IM",
                            "difficulty": "1"
                        },
                        "ID_2275": {
                            "title": "Decisive Encounter",
                            "link": "https://youtu.be/XLGuoZ37vYU",
                            "difficulty": "1"
                        },
                        "ID_2276": {
                            "title": "In the Halls of the Usurper (Rivals ver.)",
                            "link": "https://youtu.be/64wh6sQ4Dwg",
                            "difficulty": "1"
                        },
                        "ID_2277": {
                            "title": "Fire's Last Hope (Neo Fire Captial)",
                            "link": "https://youtu.be/BPrBgWW-CGY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Runescape": {
            "seriesName": "Runescape",
            "seriesColor": "red",
            "game": {
                "Old School Runescape": {
                    "gameName": "Old School Runescape",
                    "answers": ["old school runescape", "osrs", "runescape", "runescape 07"],
                    "songs": {
                        "ID_1924": {
                            "title": "Yesteryear",
                            "link": "https://youtu.be/FMNAcMNedOc",
                            "difficulty": "1"
                        },
                        "ID_1925": {
                            "title": "Unknown Land",
                            "link": "https://youtu.be/q4a0Dj4M66c",
                            "difficulty": "1"
                        },
                        "ID_1926": {
                            "title": "Newbie Melody",
                            "link": "https://youtu.be/VNW9TAwImBY",
                            "difficulty": "1"
                        },
                        "ID_1927": {
                            "title": "Harmony",
                            "link": "https://youtu.be/QSkvyG3H_KM",
                            "difficulty": "1"
                        },
                        "ID_1928": {
                            "title": "Flute Salad",
                            "link": "https://youtu.be/LFgvAyJWkjU",
                            "difficulty": "1"
                        },
                        "ID_1929": {
                            "title": "Autumn Voyage",
                            "link": "https://youtu.be/I4M4XTsx2cA",
                            "difficulty": "1"
                        },
                        "ID_1930": {
                            "title": "Evil Bob's Island",
                            "link": "https://youtu.be/us4IsTmBo48",
                            "difficulty": "1"
                        },
                        "ID_1931": {
                            "title": "Sea Shanty2",
                            "link": "https://youtu.be/BJhF0L7pfo8",
                            "difficulty": "1"
                        },
                        "ID_1932": {
                            "title": "Scape Main",
                            "link": "https://youtu.be/HL8oQw0nm0M",
                            "difficulty": "1"
                        },
                        "ID_1933": {
                            "title": "Mudskipper Melody",
                            "link": "https://youtu.be/K8gYcdFts00",
                            "difficulty": "1"
                        },
                        "ID_1934": {
                            "title": "The Trade Parade",
                            "link": "https://youtu.be/LS6PfoPIgns",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Scott Pilgrim vs. The World": {
            "seriesName": "Scott Pilgrim vs. The World",
            "seriesColor": "red",
            "game": {
                "Scott Pilgrim vs. The World: The Game": {
                    "gameName": "Scott Pilgrim vs. The World: The Game",
                    "answers": ["scott pilgrim vs. the world: the game", "scott pilgrim the game", "scott pilgrim", "scott pilgrim vs the world", "scott pilgrim versus the world"],
                    "songs": {
                        "ID_2025": {
                            "title": "Scott Pilgrim Anthem",
                            "link": "https://youtu.be/eN1ZYVLczWw",
                            "difficulty": "1"
                        },
                        "ID_2026": {
                            "title": "Another Winter",
                            "link": "https://youtu.be/Jz41ys4_z_c",
                            "difficulty": "1"
                        },
                        "ID_2027": {
                            "title": "Skate or Live",
                            "link": "https://youtu.be/jMJTelAu3Ps",
                            "difficulty": "1"
                        },
                        "ID_2028": {
                            "title": "Rock Club",
                            "link": "https://youtu.be/ZbKySy1XXxw",
                            "difficulty": "1"
                        },
                        "ID_2029": {
                            "title": "Twin Dragons",
                            "link": "https://youtu.be/LiXfgfgSdhs",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Shadow of the Colossus": {
            "seriesName": "Shadow of the Colossus",
            "seriesColor": "red",
            "game": {
                "Shadow of the Colossus": {
                    "gameName": "Shadow of the Colossus",
                    "answers": ["shadow of the colossus", "sotc"],
                    "songs": {
                        "ID_2203": {
                            "title": "Prologue ~ To the Ancient Land",
                            "link": "https://youtu.be/NnH3kWz-w6Q",
                            "difficulty": "1"
                        },
                        "ID_2204": {
                            "title": "Grotesque Figures ~ Battle With the Colossus",
                            "link": "https://youtu.be/AEEn1DPzTWc",
                            "difficulty": "1"
                        },
                        "ID_2205": {
                            "title": "The Opened Way ~ Battle With the Colossus",
                            "link": "https://youtu.be/SHkObxuPZoU",
                            "difficulty": "1"
                        },
                        "ID_2206": {
                            "title": "The End of the Battle",
                            "link": "https://youtu.be/--bUKWIAHmo",
                            "difficulty": "1"
                        },
                        "ID_2207": {
                            "title": "A Violent Encounter ~ Battle With the Colossus",
                            "link": "https://youtu.be/8ZOztBRZZH8",
                            "difficulty": "1"
                        },
                        "ID_2208": {
                            "title": "Revived Power ~ Battle With the Colossus",
                            "link": "https://youtu.be/qbPiyQRFNFw",
                            "difficulty": "1"
                        },
                        "ID_2209": {
                            "title": "In Awe of the Power ~ Battle With the Colossus",
                            "link": "https://youtu.be/ue4QJqCVNVM",
                            "difficulty": "1"
                        },
                        "ID_2210": {
                            "title": "Sky Burial",
                            "link": "https://youtu.be/fwimESljaFE",
                            "difficulty": "1"
                        },
                        "ID_2211": {
                            "title": "Final Battle",
                            "link": "https://youtu.be/hlpLcZMv_K4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Shenmue": {
            "seriesName": "Shenmue",
            "seriesColor": "red",
            "game": {
                "Shenmue": {
                    "gameName": "Shenmue",
                    "answers": ["shenmue"],
                    "songs": {
                        "ID_2212": {
                            "title": "Shenhua",
                            "link": "https://youtu.be/Lw6w0iF94ew",
                            "difficulty": "1"
                        },
                        "ID_2213": {
                            "title": "Tomato Convenience Store",
                            "link": "https://youtu.be/XruY72JamWc",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Shin Megami Tensei": {
            "seriesName": "Shin Megami Tensei",
            "seriesColor": "red",
            "game": {
                "Persona 3": {
                    "gameName": "Persona 3",
                    "answers": ["persona 3", "persona 3", "p3"],
                    "songs": {
                        "ID_754": {
                            "title": "Burn My Dread",
                            "link": "https://youtu.be/AcCoPQE6g10",
                            "difficulty": "1"
                        },
                        "ID_755": {
                            "title": "Unavoidable Battle",
                            "link": "https://youtu.be/sqbsVjwXo3o",
                            "difficulty": "1"
                        },
                        "ID_756": {
                            "title": "When The Moon's Reaching Out Stars",
                            "link": "https://youtu.be/-kRJUKA_dFw",
                            "difficulty": "1"
                        },
                        "ID_757": {
                            "title": "Iwatodai Station",
                            "link": "https://youtu.be/egKF1UvMcZA",
                            "difficulty": "1"
                        },
                        "ID_758": {
                            "title": "Mass Destruction",
                            "link": "https://youtu.be/BjQHhDTbPCA",
                            "difficulty": "1"
                        },
                        "ID_759": {
                            "title": "Joy",
                            "link": "https://youtu.be/y7nIywla0DU",
                            "difficulty": "1"
                        },
                        "ID_760": {
                            "title": "Living With Determination",
                            "link": "https://youtu.be/oYuzXkDRRXE",
                            "difficulty": "1"
                        },
                        "ID_761": {
                            "title": "The Battle for Everyone's Souls",
                            "link": "https://youtu.be/DwzOrmQ43MQ",
                            "difficulty": "1"
                        },
                        "ID_762": {
                            "title": "Burn My Dread -Last Battle-",
                            "link": "https://youtu.be/-chq2BWWMhA",
                            "difficulty": "1"
                        },
                        "ID_763": {
                            "title": "Memories of You",
                            "link": "https://youtu.be/JiKMzXwOH-E",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 3 FES": {
                    "gameName": "Persona 3 FES",
                    "answers": ["persona 3 fes", "persona 3 fes", "p3 fes", "p3 fes", "persona 3 festival", "p3 festival"],
                    "songs": {
                        "ID_751": {
                            "title": "Brand New days -The Beginning-",
                            "link": "https://youtu.be/HmTLEeM8A4Y",
                            "difficulty": "1"
                        },
                        "ID_752": {
                            "title": "Heartful Cry",
                            "link": "https://youtu.be/C3emFUXbC5U",
                            "difficulty": "1"
                        },
                        "ID_753": {
                            "title": "Brand New Days",
                            "link": "https://youtu.be/pNgFR_ttx2s",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 3 Portable": {
                    "gameName": "Persona 3 Portable",
                    "answers": ["persona 3 portable", "p3p", "persona 3 portable", "p3 portable", "persona 3 p", "p3 psp", "persona 3 psp"],
                    "songs": {
                        "ID_748": {
                            "title": "Soul Phrase",
                            "link": "https://youtu.be/SjNYJGHB2Ss",
                            "difficulty": "1"
                        },
                        "ID_749": {
                            "title": "A Way of Life",
                            "link": "https://youtu.be/Fd6MW-XhO5I",
                            "difficulty": "1"
                        },
                        "ID_750": {
                            "title": "Danger Zone",
                            "link": "https://youtu.be/cwABWVby-Xw",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 4": {
                    "gameName": "Persona 4",
                    "answers": ["persona 4", "p4", "p4g", "persona 4 golden"],
                    "songs": {
                        "ID_1032": {
                            "title": "Backside of The TV",
                            "link": "https://youtu.be/3_cp4g7YGic",
                            "difficulty": "1"
                        },
                        "ID_1033": {
                            "title": "I'll Face Myself",
                            "link": "https://youtu.be/OtIxJwEZ-DY",
                            "difficulty": "1"
                        },
                        "ID_1034": {
                            "title": "Sauna",
                            "link": "https://youtu.be/B0uHhmSIjtY",
                            "difficulty": "1"
                        },
                        "ID_1035": {
                            "title": "Reach Out to the Truth",
                            "link": "https://youtu.be/Vd_PuNxt5Jg",
                            "difficulty": "1"
                        },
                        "ID_1036": {
                            "title": "Specialist",
                            "link": "https://youtu.be/4iPABiSH0Zg",
                            "difficulty": "1"
                        },
                        "ID_1037": {
                            "title": "Heartbeat, Heartbreak",
                            "link": "https://youtu.be/YzS9fxRFuNQ",
                            "difficulty": "1"
                        },
                        "ID_1038": {
                            "title": "New World Fool",
                            "link": "https://youtu.be/wbuMkOryqY8",
                            "difficulty": "1"
                        },
                        "ID_1039": {
                            "title": "The Fog",
                            "link": "https://youtu.be/GpVOjYty8kk",
                            "difficulty": "1"
                        },
                        "ID_1040": {
                            "title": "Junes Theme",
                            "link": "https://youtu.be/MJaLQhEObXY",
                            "difficulty": "1"
                        },
                        "ID_1041": {
                            "title": "Secret Base",
                            "link": "https://youtu.be/tVVk0LEUGmw",
                            "difficulty": "1"
                        },
                        "ID_1042": {
                            "title": "Heaven",
                            "link": "https://youtu.be/zQ7H4tZa8-k",
                            "difficulty": "1"
                        },
                        "ID_1043": {
                            "title": "Long Way",
                            "link": "https://youtu.be/IOgWP625RRE",
                            "difficulty": "1"
                        },
                        "ID_1044": {
                            "title": "Electronica in The Velvet Room",
                            "link": "https://youtu.be/UrjeZHsgxqg",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 4 Arena": {
                    "gameName": "Persona 4 Arena",
                    "answers": ["persona 4 arena", "p4a", "p4 arena", "p4au", "p4au", "persona 4 arena ultimax"],
                    "songs": {
                        "ID_1054": {
                            "title": "Reach Out to the Truth",
                            "link": "https://youtu.be/xZ9ZAB3Jfr4",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 4 Arena Ultimax": {
                    "gameName": "Persona 4 Arena Ultimax",
                    "answers": ["persona 4 arena ultimax", "p4au"],
                    "songs": {
                        "ID_1055": {
                            "title": "Break out of...",
                            "link": "https://youtu.be/PM5L9Zyk3UQ",
                            "difficulty": "1"
                        },
                        "ID_1056": {
                            "title": "A Fool or Clown?",
                            "link": "https://youtu.be/p5-3EQ0itcY",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 4 Dancing All Night": {
                    "gameName": "Persona 4 Dancing All Night",
                    "answers": ["persona 4 dancing all night", "persona 4 dancing", "p4d"],
                    "songs": {
                        "ID_742": {
                            "title": "Dance!",
                            "link": "https://youtu.be/hCpCsZCwDfs",
                            "difficulty": "1"
                        },
                        "ID_743": {
                            "title": "Pursuing My True Self - Kozuka Remix",
                            "link": "https://youtu.be/LCi2b6ZIghU",
                            "difficulty": "1"
                        },
                        "ID_744": {
                            "title": "Junes Theme - Vocal Version",
                            "link": "https://youtu.be/naFdddnyNFo",
                            "difficulty": "1"
                        },
                        "ID_745": {
                            "title": "Heartbeat, Heartbreak - Towa Tei Remix",
                            "link": "https://youtu.be/6dRNyLa3zF4",
                            "difficulty": "1"
                        },
                        "ID_746": {
                            "title": "Your Affection - Daisuke Asakura Remix",
                            "link": "https://youtu.be/WO7P3Vamwmk",
                            "difficulty": "1"
                        },
                        "ID_747": {
                            "title": "Dance Hymn of the Soul (Disco in Velvet Room)",
                            "link": "https://youtu.be/dO__cEi0ZUg",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 4 Golden": {
                    "gameName": "Persona 4 Golden",
                    "answers": ["persona 4 golden", "p4g"],
                    "songs": {
                        "ID_1045": {
                            "title": "Time to Make History",
                            "link": "https://youtu.be/D8AGET-XQOA",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 4 Golden The Animation": {
                    "gameName": "Persona 4 Golden The Animation",
                    "answers": ["persona 4 golden the animation", "p4a", "p4 anime", "persona 4 golden", "persona 4", "p4", "p4g"],
                    "songs": {
                        "ID_1046": {
                            "title": "Ying Yang",
                            "link": "https://youtu.be/OIsrm7ZFH1U",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 5": {
                    "gameName": "Persona 5",
                    "answers": ["persona 5", "persona 5 royal", "persona 5 royal", "p5", "p5r", "persona 5 the royal"],
                    "songs": {
                        "ID_709": {
                            "title": "Wake Up, Get Up, Get Out There",
                            "link": "https://youtu.be/SmQ1ZXTHNKA",
                            "difficulty": "1"
                        },
                        "ID_710": {
                            "title": "Phantom",
                            "link": "https://youtu.be/qI_g-fGLT7c",
                            "difficulty": "1"
                        },
                        "ID_711": {
                            "title": "Life Will Change",
                            "link": "https://youtu.be/r47XMimB2sw",
                            "difficulty": "1"
                        },
                        "ID_712": {
                            "title": "Interrogation Room",
                            "link": "https://youtu.be/8dgEOYcxSYU",
                            "difficulty": "1"
                        },
                        "ID_713": {
                            "title": "The Poem of Everyone’s Souls",
                            "link": "https://youtu.be/0y7isajW_r8",
                            "difficulty": "1"
                        },
                        "ID_714": {
                            "title": "Awakening",
                            "link": "https://youtu.be/ERJcBO_Yn7U",
                            "difficulty": "1"
                        },
                        "ID_715": {
                            "title": "Will Power",
                            "link": "https://youtu.be/KfeLWYThNAk",
                            "difficulty": "1"
                        },
                        "ID_716": {
                            "title": "King, Queen and Slave",
                            "link": "https://youtu.be/jSvDbFcSfvs",
                            "difficulty": "1"
                        },
                        "ID_717": {
                            "title": "Last Surprise",
                            "link": "https://youtu.be/qOp4TZeZ8mY",
                            "difficulty": "1"
                        },
                        "ID_718": {
                            "title": "Victory",
                            "link": "https://youtu.be/qMrqZuI-PuQ",
                            "difficulty": "1"
                        },
                        "ID_719": {
                            "title": "Layer Cake",
                            "link": "https://youtu.be/TFJxgfPYiMI",
                            "difficulty": "1"
                        },
                        "ID_720": {
                            "title": "Blooming Villain",
                            "link": "https://youtu.be/E8l57E8OKdI",
                            "difficulty": "1"
                        },
                        "ID_721": {
                            "title": "Beneath the Mask",
                            "link": "https://youtu.be/0-R0jxIxvh8",
                            "difficulty": "1"
                        },
                        "ID_722": {
                            "title": "Tokyo Daylight",
                            "link": "https://youtu.be/gyHTjoSI5qc",
                            "difficulty": "1"
                        },
                        "ID_723": {
                            "title": "Butterfly Kiss",
                            "link": "https://youtu.be/fTM2j1LWUa4",
                            "difficulty": "1"
                        },
                        "ID_724": {
                            "title": "Mementos",
                            "link": "https://youtu.be/e_57t7Z3ocQ",
                            "difficulty": "1"
                        },
                        "ID_725": {
                            "title": "Price",
                            "link": "https://youtu.be/bwpMx6BOJ78",
                            "difficulty": "1"
                        },
                        "ID_726": {
                            "title": "Price Another Version",
                            "link": "https://youtu.be/YZ7GYjJ5gT4",
                            "difficulty": "1"
                        },
                        "ID_727": {
                            "title": "Keeper of Lust",
                            "link": "https://youtu.be/tRag8osHZJs",
                            "difficulty": "1"
                        },
                        "ID_728": {
                            "title": "The Days When My Mother Was There",
                            "link": "https://youtu.be/jQXsCphBpw8",
                            "difficulty": "1"
                        },
                        "ID_729": {
                            "title": "New Beginning",
                            "link": "https://youtu.be/VZ-ylzqehKo",
                            "difficulty": "1"
                        },
                        "ID_730": {
                            "title": "Hawaii",
                            "link": "https://youtu.be/5Fxb6RjRF1o",
                            "difficulty": "1"
                        },
                        "ID_731": {
                            "title": "Break it Down Elp Version",
                            "link": "https://youtu.be/zGxXoeexhnM",
                            "difficulty": "1"
                        },
                        "ID_732": {
                            "title": "Sweatshop",
                            "link": "https://youtu.be/_VWV7ffGYJw",
                            "difficulty": "1"
                        },
                        "ID_733": {
                            "title": "The Whims of Fate",
                            "link": "https://youtu.be/58p--cGb8Rw",
                            "difficulty": "1"
                        },
                        "ID_734": {
                            "title": "Rivers In the Desert",
                            "link": "https://youtu.be/pwagDounDbM",
                            "difficulty": "1"
                        },
                        "ID_735": {
                            "title": "Jaldabaoth",
                            "link": "https://youtu.be/HawzmsbBC34",
                            "difficulty": "1"
                        },
                        "ID_736": {
                            "title": "Swear to My Bones",
                            "link": "https://youtu.be/5dUT-1zBuaA",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona 5 Royal": {
                    "gameName": "Persona 5 Royal",
                    "answers": ["persona 5 royal", "persona 5 r", "p5r"],
                    "songs": {
                        "ID_737": {
                            "title": "Royal Days",
                            "link": "https://youtu.be/f8EzwCzII5s",
                            "difficulty": "1"
                        },
                        "ID_738": {
                            "title": "Take Over",
                            "link": "https://youtu.be/JhEL_OQfz2w",
                            "difficulty": "1"
                        },
                        "ID_739": {
                            "title": "No More What Ifs",
                            "link": "https://youtu.be/kCbU6HY8DOU",
                            "difficulty": "1"
                        },
                        "ID_740": {
                            "title": "Gentle Madman",
                            "link": "https://youtu.be/JaT0BNd7ymk",
                            "difficulty": "1"
                        },
                        "ID_741": {
                            "title": "Throw Away Your Mask",
                            "link": "https://youtu.be/94uGn2L_eXE",
                            "difficulty": "1"
                        }
                    }
                },
                "Persona Q2: New Cinema Labyrinth": {
                    "gameName": "Persona Q2: New Cinema Labyrinth",
                    "answers": ["persona q2: new cinema labyrinth", "pq2", "new cinema labyrinth", "persona q2", "persona q2 new cinema labyrinth"],
                    "songs": {
                        "ID_1052": {
                            "title": "Road Less Taken",
                            "link": "https://youtu.be/lGS9flfg8Vg",
                            "difficulty": "1"
                        },
                        "ID_1053": {
                            "title": "Pull the Trigger",
                            "link": "https://youtu.be/n5O_jq1CSv0",
                            "difficulty": "1"
                        }
                    }
                },
                "SMT: Nocturne": {
                    "gameName": "SMT: Nocturne",
                    "answers": ["smt: nocturne", "smt 3", "smt3", "nocturne", "smt nocturne"],
                    "songs": {
                        "ID_1954": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/jSXIhGhLjfc",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Shovel Knight": {
            "seriesName": "Shovel Knight",
            "seriesColor": "red",
            "game": {
                "Shovel Knight": {
                    "gameName": "Shovel Knight",
                    "answers": ["shovel knight"],
                    "songs": {
                        "ID_1337": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/FrceWR4XnVU",
                            "difficulty": "1"
                        },
                        "ID_1338": {
                            "title": "Strike the Earth! (Plains of Passage)",
                            "link": "https://youtu.be/W7rhEKTX-sE",
                            "difficulty": "1"
                        },
                        "ID_1339": {
                            "title": "The Rival (Black Knight - First Battle)",
                            "link": "https://youtu.be/T0IxUMu036k",
                            "difficulty": "1"
                        },
                        "ID_1340": {
                            "title": "The Starlit Wilds (Campfire Scene)",
                            "link": "https://youtu.be/7ZcWxeae-iY",
                            "difficulty": "1"
                        },
                        "ID_1341": {
                            "title": "The Adventure Awaits (Map Screen)",
                            "link": "https://youtu.be/TxBfxAac9wQ",
                            "difficulty": "1"
                        },
                        "ID_1342": {
                            "title": "In the Halls of the Usurper (Pridemoor Keep)",
                            "link": "https://youtu.be/8Ao3clVneKk",
                            "difficulty": "1"
                        },
                        "ID_1343": {
                            "title": "The Decadent Dandy (King Knight Battle)",
                            "link": "https://youtu.be/sxuBtbkyX2o",
                            "difficulty": "1"
                        },
                        "ID_1344": {
                            "title": "High Above the Land (The Flying Machine)",
                            "link": "https://youtu.be/ywaT65aXoq8",
                            "difficulty": "1"
                        },
                        "ID_1345": {
                            "title": "The Spin Controller (Propeller Knight Battle)",
                            "link": "https://youtu.be/FiAkgsgHxLs",
                            "difficulty": "1"
                        },
                        "ID_1346": {
                            "title": "An Underlying Problem (The Lost City)",
                            "link": "https://youtu.be/bxvCLqFdb2w",
                            "difficulty": "1"
                        },
                        "ID_1347": {
                            "title": "The Claws of Fate (Mole Knight Battle)",
                            "link": "https://youtu.be/2kEefPFhiNY",
                            "difficulty": "1"
                        },
                        "ID_1348": {
                            "title": "No Weapons Here (Village)",
                            "link": "https://youtu.be/AUZMNjslueQ",
                            "difficulty": "1"
                        },
                        "ID_1349": {
                            "title": "Watch Me Dance!",
                            "link": "https://youtu.be/tB20JkBts3k",
                            "difficulty": "1"
                        },
                        "ID_1350": {
                            "title": "Spin Ye Bottle (Minigame)",
                            "link": "https://youtu.be/-bwHsbC9JNY",
                            "difficulty": "1"
                        },
                        "ID_1351": {
                            "title": "The Bounty Hunter (Treasure Knight Battle)",
                            "link": "https://youtu.be/vpjF1oOP6tc",
                            "difficulty": "1"
                        },
                        "ID_1352": {
                            "title": "Of Devious Machinations (Clockwork Tower)",
                            "link": "https://youtu.be/fqWetH8EpNg",
                            "difficulty": "1"
                        },
                        "ID_1353": {
                            "title": "The Schemer (Tinker Knight Battle)",
                            "link": "https://youtu.be/UhsoJcGt0ag",
                            "difficulty": "1"
                        },
                        "ID_1354": {
                            "title": "The Donor's Despair (Hall of Champions)",
                            "link": "https://youtu.be/0TdJXBH_D-M",
                            "difficulty": "1"
                        },
                        "ID_1355": {
                            "title": "The Requiem of Shield Knight",
                            "link": "https://youtu.be/hs-Ar6lvKDw",
                            "difficulty": "1"
                        },
                        "ID_1356": {
                            "title": "The Defender (Black Knight Battle)",
                            "link": "https://youtu.be/YPPXkIHwfyY",
                            "difficulty": "1"
                        },
                        "ID_1357": {
                            "title": "The Vital Vitriol (Plague Knight Battle)",
                            "link": "https://youtu.be/Dc6iIij7FgA",
                            "difficulty": "1"
                        },
                        "ID_1358": {
                            "title": "La Danse Macabre (Lich Yard)",
                            "link": "https://youtu.be/pDGaqUskBRM",
                            "difficulty": "1"
                        },
                        "ID_1359": {
                            "title": "The Apparition (Spectre Knight Battle)",
                            "link": "https://youtu.be/aRPxI2dU4uU",
                            "difficulty": "1"
                        },
                        "ID_1360": {
                            "title": "The Stalwart (Polar Knight Battle)",
                            "link": "https://youtu.be/q73fhG-rJnE",
                            "difficulty": "1"
                        },
                        "ID_1361": {
                            "title": "End of Days (Endgame Map Screen)",
                            "link": "https://youtu.be/g1YVC8AeJ3Y",
                            "difficulty": "1"
                        },
                        "ID_1362": {
                            "title": "The Possessor (Enchantress Battle)",
                            "link": "https://youtu.be/AMX_OsxMGDM",
                            "difficulty": "1"
                        },
                        "ID_1363": {
                            "title": "The Betrayer (Enchantress Final Form)",
                            "link": "https://youtu.be/sV2XpIll2I0",
                            "difficulty": "1"
                        },
                        "ID_1364": {
                            "title": "Reprise (Credits)",
                            "link": "https://youtu.be/MVxoqBhxTI0",
                            "difficulty": "1"
                        }
                    }
                },
                "Shovel Knight: Plague of Shadows": {
                    "gameName": "Shovel Knight: Plague of Shadows",
                    "answers": ["shovel knight: plague of shadows", "shovel knight", "plague of shadows", "shovel knight plague of shadows"],
                    "songs": {
                        "ID_1666": {
                            "title": "Tango of the Troupple King",
                            "link": "https://youtu.be/8SiwyCDmt8Y",
                            "difficulty": "1"
                        },
                        "ID_1667": {
                            "title": "Battling the Burrower",
                            "link": "https://youtu.be/T6zbIKRNjQo",
                            "difficulty": "1"
                        },
                        "ID_1668": {
                            "title": "Disturbing The Peace",
                            "link": "https://youtu.be/z_TSwN8qbOE",
                            "difficulty": "1"
                        },
                        "ID_1669": {
                            "title": "Out Of The Shadows",
                            "link": "https://youtu.be/nJ0-xsqVsyA",
                            "difficulty": "1"
                        },
                        "ID_1670": {
                            "title": "Art Through Adversity",
                            "link": "https://youtu.be/07TA4xUCU1I",
                            "difficulty": "1"
                        },
                        "ID_1671": {
                            "title": "The Final Note",
                            "link": "https://youtu.be/8yttJQRZ5cM",
                            "difficulty": "1"
                        }
                    }
                },
                "Shovel Knight: Specter of Torment": {
                    "gameName": "Shovel Knight: Specter of Torment",
                    "answers": ["shovel knight: specter of torment", "shovel knight", "specter of torment", "shovel knight specter of torment"],
                    "songs": {
                        "ID_1655": {
                            "title": "Tools of War (Clockwork Tower)",
                            "link": "https://youtu.be/hrmuH4aqfi4",
                            "difficulty": "1"
                        },
                        "ID_1656": {
                            "title": "Aqua Vitae (Explodatorium)",
                            "link": "https://youtu.be/pZEvg7qVzdo",
                            "difficulty": "1"
                        },
                        "ID_1657": {
                            "title": "Facing The Task (Lost City) ",
                            "link": "https://youtu.be/pZEvg7qVzdo",
                            "difficulty": "1"
                        },
                        "ID_1658": {
                            "title": "A Cargo Of Fineries (Flying Machine) ",
                            "link": "https://youtu.be/-v1WTgPvuCY",
                            "difficulty": "1"
                        },
                        "ID_1659": {
                            "title": "The Price Of Doing Business (Iron Whale) ",
                            "link": "https://youtu.be/-v1WTgPvuCY",
                            "difficulty": "1"
                        },
                        "ID_1660": {
                            "title": "A Wintry Paradise (Stranded Ship)",
                            "link": "https://youtu.be/SxnC6nU7ZQg",
                            "difficulty": "1"
                        },
                        "ID_1661": {
                            "title": "In The Halls Of The King (Pridemoor Keep)",
                            "link": "https://youtu.be/-hBbSo5jyY4",
                            "difficulty": "1"
                        },
                        "ID_1662": {
                            "title": "Hidden By Night (The Lich Yard)",
                            "link": "https://youtu.be/ZTtrxKMF3Yc",
                            "difficulty": "1"
                        },
                        "ID_1663": {
                            "title": "Hitting Close To Home (Tower Of Fates Entrance) ",
                            "link": "https://youtu.be/5-I-0yHyRic",
                            "difficulty": "1"
                        },
                        "ID_1664": {
                            "title": "Incompleto Sin Ti",
                            "link": "https://youtu.be/DNmjtpL-yzs",
                            "difficulty": "1"
                        },
                        "ID_1665": {
                            "title": "An Imposition Of Order",
                            "link": "https://youtu.be/hWPXFzkxooI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Sonic the Hedgehog": {
            "seriesName": "Sonic the Hedgehog",
            "seriesColor": "red",
            "game": {
                "Shadow the Hedgehog": {
                    "gameName": "Shadow the Hedgehog",
                    "answers": ["shadow the hedgehog"],
                    "songs": {
                        "ID_1411": {
                            "title": "I Am (All of Me)",
                            "link": "https://youtu.be/8V1pMQKDPco",
                            "difficulty": "1"
                        },
                        "ID_1412": {
                            "title": "Westopolis ",
                            "link": "https://youtu.be/Ai_OJy_0qkY",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Adventure": {
                    "gameName": "Sonic Adventure",
                    "answers": ["sonic adventure", "sa1", "sa", "sonic adventure dx", "sonic adventure dx directors cut"],
                    "songs": {
                        "ID_1380": {
                            "title": "It Doesn't Matter",
                            "link": "https://youtu.be/pJs1iJOXFN8",
                            "difficulty": "1"
                        },
                        "ID_1381": {
                            "title": "My Sweet Passion",
                            "link": "https://youtu.be/OqmFbfVlvD4",
                            "difficulty": "1"
                        },
                        "ID_1382": {
                            "title": "Lazy Days (Livin' in Paradise)",
                            "link": "https://youtu.be/pAFpv6-A9D0",
                            "difficulty": "1"
                        },
                        "ID_1383": {
                            "title": "Unknown From M.E.",
                            "link": "https://youtu.be/6kVIwFPwYys",
                            "difficulty": "1"
                        },
                        "ID_1384": {
                            "title": "Welcome to Station Square",
                            "link": "https://youtu.be/dWbSg0VOSgg",
                            "difficulty": "1"
                        },
                        "ID_1385": {
                            "title": "Windy and Ripply (Emerald Coast)",
                            "link": "https://youtu.be/oTJtkEVL-7I",
                            "difficulty": "1"
                        },
                        "ID_1386": {
                            "title": "Theme of Chao",
                            "link": "https://youtu.be/U9mT1oBczzk",
                            "difficulty": "1"
                        },
                        "ID_1387": {
                            "title": "Theme of Dr. Eggman",
                            "link": "https://youtu.be/LWtfU0CyK6E",
                            "difficulty": "1"
                        },
                        "ID_1388": {
                            "title": "Windy Hill (Windy Valley)",
                            "link": "https://youtu.be/FvKQLPHWuwU",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Adventure 2": {
                    "gameName": "Sonic Adventure 2",
                    "answers": ["sonic adventure 2", "sa2", "sa2b", "sonic adventure 2 battle"],
                    "songs": {
                        "ID_1389": {
                            "title": "It Doesn't Matter",
                            "link": "https://youtu.be/ohm5CVdutrw",
                            "difficulty": "1"
                        },
                        "ID_1390": {
                            "title": "Believe in Myself",
                            "link": "https://youtu.be/-279WY54YnI",
                            "difficulty": "1"
                        },
                        "ID_1391": {
                            "title": "Unknown From M.E.",
                            "link": "https://youtu.be/JntQ1X46qgg",
                            "difficulty": "1"
                        },
                        "ID_1392": {
                            "title": "E.G.G.M.A.N.",
                            "link": "https://youtu.be/y4mPkze9AEs",
                            "difficulty": "1"
                        },
                        "ID_1393": {
                            "title": "Fly in the Freedom",
                            "link": "https://youtu.be/XspKmxaC9Tw",
                            "difficulty": "1"
                        },
                        "ID_1394": {
                            "title": "Throw It All Away",
                            "link": "https://youtu.be/OxLH0nnUnCY",
                            "difficulty": "1"
                        },
                        "ID_1395": {
                            "title": "City Escape",
                            "link": "https://youtu.be/XmVagnlM-Ys",
                            "difficulty": "1"
                        },
                        "ID_1396": {
                            "title": "That's the Way I Like It (Metal Harbor)",
                            "link": "https://youtu.be/ds4gZ6pwg6U",
                            "difficulty": "1"
                        },
                        "ID_1397": {
                            "title": "Won't Stop, Just Go! (Green Forest)",
                            "link": "https://youtu.be/sIx8rJxfarI",
                            "difficulty": "1"
                        },
                        "ID_1398": {
                            "title": "Keys the Ruin (Pyramid Cave)",
                            "link": "https://youtu.be/Vc3ffItUtlc",
                            "difficulty": "1"
                        },
                        "ID_1399": {
                            "title": "Kick the Rock! (Wild Canyon)",
                            "link": "https://youtu.be/59RIVbWC4oE",
                            "difficulty": "1"
                        },
                        "ID_1400": {
                            "title": "A Ghost's Pumpkin Soup (Pumpkin Hill)",
                            "link": "https://youtu.be/vxL_r-0VC1k",
                            "difficulty": "1"
                        },
                        "ID_1401": {
                            "title": "Dive Into the Mellow (Aquatic Mine)",
                            "link": "https://youtu.be/f84w1gEAXYQ",
                            "difficulty": "1"
                        },
                        "ID_1402": {
                            "title": "Rhythm and Balance (White Jungle)",
                            "link": "https://youtu.be/we8MYuZ6fEQ",
                            "difficulty": "1"
                        },
                        "ID_1403": {
                            "title": "Live and Learn",
                            "link": "https://youtu.be/z1BRZg0GG0A",
                            "difficulty": "1"
                        },
                        "ID_1404": {
                            "title": "Chao Race",
                            "link": "https://youtu.be/yzIw_g7F0uE",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic and the Secret Rings": {
                    "gameName": "Sonic and the Secret Rings",
                    "answers": ["sonic and the secret rings"],
                    "songs": {
                        "ID_1409": {
                            "title": "Seven Rings in Hand",
                            "link": "https://youtu.be/UxbyOQgTsVc",
                            "difficulty": "1"
                        },
                        "ID_1410": {
                            "title": "The Palace That Was Found",
                            "link": "https://youtu.be/ZS3wG_4SHJk",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic CD": {
                    "gameName": "Sonic CD",
                    "answers": ["sonic cd"],
                    "songs": {
                        "ID_1378": {
                            "title": "Sonic Boom",
                            "link": "https://youtu.be/nnVboYhEe5Q",
                            "difficulty": "1"
                        },
                        "ID_1379": {
                            "title": "Stardust Speedway",
                            "link": "https://youtu.be/8XGtW4FIM2M",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Colors": {
                    "gameName": "Sonic Colors",
                    "answers": ["sonic colors"],
                    "songs": {
                        "ID_1405": {
                            "title": "Reach for the Stars (Opening Theme)",
                            "link": "https://youtu.be/5eUswq5owJk",
                            "difficulty": "1"
                        },
                        "ID_1406": {
                            "title": "Planet Wisp (Act 1)",
                            "link": "https://youtu.be/uFUSim9dvQw",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Forces": {
                    "gameName": "Sonic Forces",
                    "answers": ["sonic forces"],
                    "songs": {
                        "ID_1422": {
                            "title": "Fist Bump",
                            "link": "https://youtu.be/4OqmUlI0GSQ",
                            "difficulty": "1"
                        },
                        "ID_1423": {
                            "title": "Lost Valley",
                            "link": "https://youtu.be/V0IKoGY3OqM",
                            "difficulty": "1"
                        },
                        "ID_1424": {
                            "title": "Fist Bump (Piano Version)",
                            "link": "https://youtu.be/kI7q4qmhTj0",
                            "difficulty": "1"
                        },
                        "ID_1425": {
                            "title": "Infinite",
                            "link": "https://youtu.be/ScgKRuZfvKc",
                            "difficulty": "1"
                        },
                        "ID_1426": {
                            "title": "Fist Bump (FM Version)",
                            "link": "https://youtu.be/LPvnCp48Im4",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Generations": {
                    "gameName": "Sonic Generations",
                    "answers": ["sonic generations"],
                    "songs": {
                        "ID_1413": {
                            "title": "City Escape (Classic)",
                            "link": "https://youtu.be/SS9gGnFQ-Ig",
                            "difficulty": "1"
                        },
                        "ID_1414": {
                            "title": "City Escape (Modern)",
                            "link": "https://youtu.be/jBihcsxGFLo",
                            "difficulty": "1"
                        },
                        "ID_1415": {
                            "title": "Rooftop Run (Modern)",
                            "link": "https://youtu.be/xnTyqig1R7I",
                            "difficulty": "1"
                        },
                        "ID_1416": {
                            "title": "Planet Wisp (Modern)",
                            "link": "https://youtu.be/GNPSzcvo_ho",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Mania": {
                    "gameName": "Sonic Mania",
                    "answers": ["sonic mania"],
                    "songs": {
                        "ID_1427": {
                            "title": "Lights, Camera, Action! (Studiopolis Zone Act 1)",
                            "link": "https://youtu.be/MMwM6hLEyeY",
                            "difficulty": "1"
                        },
                        "ID_1428": {
                            "title": "Hydrocity Zone Act 1",
                            "link": "https://youtu.be/e48OijK2LiI",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic R": {
                    "gameName": "Sonic R",
                    "answers": ["sonic r"],
                    "songs": {
                        "ID_1329": {
                            "title": "Super Sonic Racing",
                            "link": "https://youtu.be/EvuAVr88XoM",
                            "difficulty": "1"
                        },
                        "ID_1330": {
                            "title": "Can You Feel the Sunshine",
                            "link": "https://youtu.be/dgJWZiBt6_w",
                            "difficulty": "1"
                        },
                        "ID_1331": {
                            "title": "Living in the City",
                            "link": "https://youtu.be/XdwnHWnB7fM",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Rush": {
                    "gameName": "Sonic Rush",
                    "answers": ["sonic rush"],
                    "songs": {
                        "ID_1946": {
                            "title": "Right There, Ride On",
                            "link": "https://youtu.be/hkD7ee0Qz64",
                            "difficulty": "1"
                        },
                        "ID_1947": {
                            "title": "Back 2 Back",
                            "link": "https://youtu.be/0JY3W5J2UeI",
                            "difficulty": "1"
                        },
                        "ID_1948": {
                            "title": "What U Need",
                            "link": "https://youtu.be/neN6N5tKTTU",
                            "difficulty": "1"
                        },
                        "ID_1949": {
                            "title": "Jeh Jeh Rocket",
                            "link": "https://youtu.be/e5BG14-5WXA",
                            "difficulty": "1"
                        },
                        "ID_1950": {
                            "title": "Ska Cha Cha",
                            "link": "https://youtu.be/0XFXoWTn9iA",
                            "difficulty": "1"
                        },
                        "ID_1951": {
                            "title": "Vela-Nova",
                            "link": "https://youtu.be/-7WQn-SXYZ4",
                            "difficulty": "1"
                        },
                        "ID_1952": {
                            "title": "Wrapped In Black",
                            "link": "https://youtu.be/MlCK5RWO54E",
                            "difficulty": "1"
                        },
                        "ID_1953": {
                            "title": "Medley Rush",
                            "link": "https://youtu.be/idXp8qoV_ss",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic the Hedgehog": {
                    "gameName": "Sonic the Hedgehog",
                    "answers": ["sonic the hedgehog", "sonic", "sonic 1"],
                    "songs": {
                        "ID_1365": {
                            "title": "Green Hill Zone",
                            "link": "https://youtu.be/G-i8HYi1QH0",
                            "difficulty": "1"
                        },
                        "ID_1366": {
                            "title": "Spring Yard Zone",
                            "link": "https://youtu.be/Owc5NNYSLwY",
                            "difficulty": "1"
                        },
                        "ID_1367": {
                            "title": "Starlight Zone",
                            "link": "https://youtu.be/NVoNyufMUpo",
                            "difficulty": "1"
                        },
                        "ID_1368": {
                            "title": "Robotnik",
                            "link": "https://youtu.be/S5NW3HQ0SRI",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic the Hedgehog (2006)": {
                    "gameName": "Sonic the Hedgehog (2006)",
                    "answers": ["sonic the hedgehog (2006)", "sonic 06", "sonic the hedgehog"],
                    "songs": {
                        "ID_1417": {
                            "title": "His World (Theme of Sonic)",
                            "link": "https://youtu.be/BWWfjK0v8eM",
                            "difficulty": "1"
                        },
                        "ID_1418": {
                            "title": "Result",
                            "link": "https://youtu.be/pWakcyO-3KM",
                            "difficulty": "1"
                        },
                        "ID_1419": {
                            "title": "Crisis City",
                            "link": "https://youtu.be/TKNQEol9OXM",
                            "difficulty": "1"
                        },
                        "ID_1420": {
                            "title": "Solaris Phase 2",
                            "link": "https://youtu.be/qAx3hTZeyBw",
                            "difficulty": "1"
                        },
                        "ID_1421": {
                            "title": "His World (Zebrahead Version)",
                            "link": "https://youtu.be/hOju2ThS--M",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic the Hedgehog 2": {
                    "gameName": "Sonic the Hedgehog 2",
                    "answers": ["sonic the hedgehog 2", "sonic 2"],
                    "songs": {
                        "ID_1369": {
                            "title": "Emerald Hill Zone",
                            "link": "https://youtu.be/kiT9yLezwbE",
                            "difficulty": "1"
                        },
                        "ID_1370": {
                            "title": "Chemical Plant Zone",
                            "link": "https://youtu.be/VeHui01Svjo",
                            "difficulty": "1"
                        },
                        "ID_1371": {
                            "title": "Metropolis Zone",
                            "link": "https://youtu.be/UUw6Vqdz2vo",
                            "difficulty": "1"
                        },
                        "ID_1372": {
                            "title": "Boss",
                            "link": "https://youtu.be/ujspBYQXSdY",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic the Hedgehog 3": {
                    "gameName": "Sonic the Hedgehog 3",
                    "answers": ["sonic the hedgehog 3", "sonic the hedgehog 3 and knuckles", "sonic 3", "sonic 3 and knuckles"],
                    "songs": {
                        "ID_1373": {
                            "title": "Hydrocity Zone Act 1",
                            "link": "https://youtu.be/WKQt7Q4M7Pc",
                            "difficulty": "1"
                        },
                        "ID_1374": {
                            "title": "Carnival Zone Night Act 1",
                            "link": "https://youtu.be/kEFXb2yPgAw",
                            "difficulty": "1"
                        },
                        "ID_1375": {
                            "title": "Ice Cap Zone Act 1",
                            "link": "https://youtu.be/2_5BV4N9uqQ",
                            "difficulty": "1"
                        },
                        "ID_1376": {
                            "title": "Flying Battery Zone Act 1",
                            "link": "https://youtu.be/pd_sXmARxjw",
                            "difficulty": "1"
                        },
                        "ID_1377": {
                            "title": "Sky Sanctuary Zone",
                            "link": "https://youtu.be/wuVUsicOXPA",
                            "difficulty": "1"
                        }
                    }
                },
                "Sonic Unleashed": {
                    "gameName": "Sonic Unleashed",
                    "answers": ["sonic unleashed"],
                    "songs": {
                        "ID_1407": {
                            "title": "Rooftop Run (Day)",
                            "link": "https://youtu.be/B0I9M86BnF4",
                            "difficulty": "1"
                        },
                        "ID_1408": {
                            "title": "Endless Possibility",
                            "link": "https://youtu.be/tJjxKhjR9H4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Soulcalibur": {
            "seriesName": "Soulcalibur",
            "seriesColor": "red",
            "game": {
                "Soul Edge": {
                    "gameName": "Soul Edge",
                    "answers": ["soul edge", "soul blade", "soul blade"],
                    "songs": {
                        "ID_1858": {
                            "title": "Edge of Soul",
                            "link": "https://youtu.be/l90bz08OVHA",
                            "difficulty": "1"
                        }
                    }
                },
                "Soulcalibur": {
                    "gameName": "Soulcalibur",
                    "answers": ["soulcalibur", "soul calibur"],
                    "songs": {
                        "ID_1842": {
                            "title": "The Stage Of History (Character Select)",
                            "link": "https://youtu.be/22wPCTaHqs8",
                            "difficulty": "1"
                        }
                    }
                },
                "Soulcalibur II": {
                    "gameName": "Soulcalibur II",
                    "answers": ["soulcalibur ii", "soulcalibur 2", "soul calibur 2"],
                    "songs": {
                        "ID_1843": {
                            "title": "History Unfolds",
                            "link": "https://youtu.be/qLx9H_ueaqY",
                            "difficulty": "1"
                        },
                        "ID_1844": {
                            "title": "Guided By Wind",
                            "link": "https://youtu.be/DvcKA8emz-M",
                            "difficulty": "1"
                        },
                        "ID_1845": {
                            "title": "Raise Thy Sword",
                            "link": "https://youtu.be/EefN3oOlHEA",
                            "difficulty": "1"
                        },
                        "ID_1846": {
                            "title": "Eternal Struggle",
                            "link": "https://youtu.be/CklYp5n-TQw",
                            "difficulty": "1"
                        },
                        "ID_1847": {
                            "title": "Confrontation",
                            "link": "https://youtu.be/-CWywLxwQw8",
                            "difficulty": "1"
                        },
                        "ID_1848": {
                            "title": "Quest For Glory",
                            "link": "https://youtu.be/NysuTigVYvo",
                            "difficulty": "1"
                        }
                    }
                },
                "Soulcalibur III": {
                    "gameName": "Soulcalibur III",
                    "answers": ["soulcalibur iii", "soulcalibur 3", "soul calibur 3"],
                    "songs": {
                        "ID_1849": {
                            "title": "History Beckons",
                            "link": "https://youtu.be/ztqXseYrCOY",
                            "difficulty": "1"
                        },
                        "ID_1850": {
                            "title": "Sail Over the Storm",
                            "link": "https://youtu.be/F-PjcSBmBhc",
                            "difficulty": "1"
                        },
                        "ID_1851": {
                            "title": "Forsaken Sanctuary",
                            "link": "https://youtu.be/It5FROsDNoA",
                            "difficulty": "1"
                        },
                        "ID_1852": {
                            "title": "Eternal Wayfarer",
                            "link": "https://youtu.be/CZSzbOj2QnI",
                            "difficulty": "1"
                        },
                        "ID_1853": {
                            "title": "The Ordeal",
                            "link": "https://youtu.be/hMur6JFB-G8",
                            "difficulty": "1"
                        },
                        "ID_1854": {
                            "title": "The Intruder",
                            "link": "https://youtu.be/Y5hGmylXSgE",
                            "difficulty": "1"
                        },
                        "ID_1855": {
                            "title": "Battle for the Crown",
                            "link": "https://youtu.be/UHTNx2OO-z0",
                            "difficulty": "1"
                        },
                        "ID_1856": {
                            "title": "Path of Destiny",
                            "link": "https://youtu.be/gJRprcmVrCk",
                            "difficulty": "1"
                        },
                        "ID_1857": {
                            "title": "Healing Winds",
                            "link": "https://youtu.be/JfyN2FxURLY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Souls": {
            "seriesName": "Souls",
            "seriesColor": "red",
            "game": {
                "Dark Souls": {
                    "gameName": "Dark Souls",
                    "answers": ["dark souls"],
                    "songs": {
                        "ID_1894": {
                            "title": "Firelink Shrine",
                            "link": "https://youtu.be/M6GK8HhjQQE",
                            "difficulty": "1"
                        },
                        "ID_1895": {
                            "title": "Gwyn, Lord of Cinder",
                            "link": "https://youtu.be/AB6sOhQan9Y",
                            "difficulty": "1"
                        }
                    }
                },
                "Dark Souls II": {
                    "gameName": "Dark Souls II",
                    "answers": ["dark souls ii", "dark souls 2"],
                    "songs": {
                        "ID_1896": {
                            "title": "Fire Keepers",
                            "link": "https://youtu.be/MulF7tHT5oo",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Street Fighter": {
            "seriesName": "Street Fighter",
            "seriesColor": "red",
            "game": {
                "Street Fighter II": {
                    "gameName": "Street Fighter II",
                    "answers": ["street fighter ii", "street fighter 2", "sf2", "sf 2"],
                    "songs": {
                        "ID_2293": {
                            "title": "Opening Title",
                            "link": "https://youtu.be/vMqUEFIb-EI",
                            "difficulty": "1"
                        },
                        "ID_2294": {
                            "title": "Player Select",
                            "link": "https://youtu.be/41SjKq4096g",
                            "difficulty": "1"
                        },
                        "ID_2295": {
                            "title": "Ryu Stage",
                            "link": "https://youtu.be/IFbn4nuTMj8",
                            "difficulty": "1"
                        },
                        "ID_2296": {
                            "title": "Guile Stage",
                            "link": "https://youtu.be/B74wsIXY8pM",
                            "difficulty": "1"
                        },
                        "ID_2297": {
                            "title": "Ken Stage",
                            "link": "https://youtu.be/KLakZvVQmPw",
                            "difficulty": "1"
                        },
                        "ID_2298": {
                            "title": "Balrog Stage",
                            "link": "https://youtu.be/MGNE79fsE-A",
                            "difficulty": "1"
                        },
                        "ID_2299": {
                            "title": "Vega Stage",
                            "link": "https://youtu.be/SvHiyPuCe4Q",
                            "difficulty": "1"
                        },
                        "ID_2300": {
                            "title": "M.Bison Stage",
                            "link": "https://youtu.be/ahG2vkrkNww",
                            "difficulty": "1"
                        },
                        "ID_2301": {
                            "title": "Staff Roll",
                            "link": "https://youtu.be/TAgEVP-uNus",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Super Hexagon": {
            "seriesName": "Super Hexagon",
            "seriesColor": "red",
            "game": {
                "Super Hexagon": {
                    "gameName": "Super Hexagon",
                    "answers": ["super hexagon", "super hexagon"],
                    "songs": {
                        "ID_917": {
                            "title": "Courtesy",
                            "link": "https://youtu.be/Jb0FPAnxSjY",
                            "difficulty": "1"
                        },
                        "ID_918": {
                            "title": "Otis",
                            "link": "https://youtu.be/0_gBrYzLy3Y",
                            "difficulty": "1"
                        },
                        "ID_919": {
                            "title": "Focus",
                            "link": "https://youtu.be/wD3j1O1XHQY",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Super Meat Boy": {
            "seriesName": "Super Meat Boy",
            "seriesColor": "red",
            "game": {
                "Super Meat Boy": {
                    "gameName": "Super Meat Boy",
                    "answers": ["super meat boy", "super meat boy", "meat boy"],
                    "songs": {
                        "ID_838": {
                            "title": "Forest Funk",
                            "link": "https://youtu.be/3xHttYIwocY",
                            "difficulty": "1"
                        },
                        "ID_839": {
                            "title": "The Battle of Lil' Slugger",
                            "link": "https://youtu.be/WL-8rU8ltA4",
                            "difficulty": "1"
                        },
                        "ID_840": {
                            "title": "Betus Blues",
                            "link": "https://youtu.be/6Kf7ycHajX4",
                            "difficulty": "1"
                        },
                        "ID_841": {
                            "title": "Can o' Salt",
                            "link": "https://youtu.be/VKNJTrpQWsE",
                            "difficulty": "1"
                        },
                        "ID_842": {
                            "title": "Hot Damned",
                            "link": "https://youtu.be/AlAQ8fdqoFA",
                            "difficulty": "1"
                        },
                        "ID_843": {
                            "title": "It Ends",
                            "link": "https://youtu.be/s87s5CWfRus",
                            "difficulty": "1"
                        },
                        "ID_844": {
                            "title": "Dr Fetus' Castle",
                            "link": "https://youtu.be/LE_Lrs8LomE",
                            "difficulty": "1"
                        },
                        "ID_845": {
                            "title": "McLarty Party People",
                            "link": "https://youtu.be/H37HJSEl4ug",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Super Smash Bros.": {
            "seriesName": "Super Smash Bros.",
            "seriesColor": "red",
            "game": {
                "Super Smash Bros. Brawl": {
                    "gameName": "Super Smash Bros. Brawl",
                    "answers": ["super smash bros. brawl", "brawl", "smash brawl", "super smash bros brawl", "smash bros brawl", "ssbb", "ssb brawl"],
                    "songs": {
                        "ID_1828": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/zeKE0NHUtUw",
                            "difficulty": "1"
                        },
                        "ID_1829": {
                            "title": "Menu 1",
                            "link": "https://youtu.be/Nur18hoGH3E",
                            "difficulty": "1"
                        },
                        "ID_1830": {
                            "title": "Battlefield",
                            "link": "https://youtu.be/CYHc6o4ZtyE",
                            "difficulty": "1"
                        },
                        "ID_1831": {
                            "title": "Final Destination",
                            "link": "https://youtu.be/yGyo3XhKd2s",
                            "difficulty": "1"
                        },
                        "ID_1832": {
                            "title": "Ground Theme (Super Mario Bros.)",
                            "link": "https://youtu.be/u589pvON9nE",
                            "difficulty": "1"
                        }
                    }
                },
                "Super Smash Bros. Melee": {
                    "gameName": "Super Smash Bros. Melee",
                    "answers": ["super smash bros. melee", "melee", "smash melee", "super smash bros melee", "smash bros melee", "ssbm", "ssb melee"],
                    "songs": {
                        "ID_1792": {
                            "title": "Opening",
                            "link": "https://youtu.be/witvUes32B4",
                            "difficulty": "1"
                        },
                        "ID_1793": {
                            "title": "Menu 1",
                            "link": "https://youtu.be/Q2Ax21yobJ0",
                            "difficulty": "1"
                        },
                        "ID_1794": {
                            "title": "Princess Peach's Castle",
                            "link": "https://youtu.be/qzKqRal7mUg",
                            "difficulty": "1"
                        },
                        "ID_1795": {
                            "title": "Rainbow Cruise",
                            "link": "https://youtu.be/RniFX_iphuo",
                            "difficulty": "1"
                        },
                        "ID_1796": {
                            "title": "Kongo Jungle",
                            "link": "https://youtu.be/oU4vh4LX2Gk",
                            "difficulty": "1"
                        },
                        "ID_1797": {
                            "title": "Jungle Japes",
                            "link": "https://youtu.be/JIBlo8GdHa0",
                            "difficulty": "1"
                        },
                        "ID_1798": {
                            "title": "Great Bay",
                            "link": "https://youtu.be/sPegm_sIf0U",
                            "difficulty": "1"
                        },
                        "ID_1799": {
                            "title": "Hyrule Temple",
                            "link": "https://youtu.be/XD2Il7Ys0us",
                            "difficulty": "1"
                        },
                        "ID_1800": {
                            "title": "Brinstar",
                            "link": "https://youtu.be/GR47lpQoPc8",
                            "difficulty": "1"
                        },
                        "ID_1801": {
                            "title": "Brinstar Depths",
                            "link": "https://youtu.be/eGsNKWAEArw",
                            "difficulty": "1"
                        },
                        "ID_1802": {
                            "title": "Yoshi's Story",
                            "link": "https://youtu.be/EcHiSeA57TU",
                            "difficulty": "1"
                        },
                        "ID_1803": {
                            "title": "Yoshi's Island",
                            "link": "https://youtu.be/ZSeXmMf0dgk",
                            "difficulty": "1"
                        },
                        "ID_1804": {
                            "title": "Fountain of Dreams",
                            "link": "https://youtu.be/pz3BQFXjEOI",
                            "difficulty": "1"
                        },
                        "ID_1805": {
                            "title": "Green Greens",
                            "link": "https://youtu.be/ZNmzmnSzZEg",
                            "difficulty": "1"
                        },
                        "ID_1806": {
                            "title": "Corneria",
                            "link": "https://youtu.be/5KKoo_5v8rM",
                            "difficulty": "1"
                        },
                        "ID_1807": {
                            "title": "Pokemon Stadium",
                            "link": "https://youtu.be/awayMiW9zpk",
                            "difficulty": "1"
                        },
                        "ID_1808": {
                            "title": "Poke Floats",
                            "link": "https://youtu.be/HS5OGrmE8j0",
                            "difficulty": "1"
                        },
                        "ID_1809": {
                            "title": "Mute City",
                            "link": "https://youtu.be/HidFV5XLugs",
                            "difficulty": "1"
                        },
                        "ID_1810": {
                            "title": "Big Blue",
                            "link": "https://youtu.be/B3jzYwX-pa0",
                            "difficulty": "1"
                        },
                        "ID_1811": {
                            "title": "Mother",
                            "link": "https://youtu.be/NgAdgZguFSw",
                            "difficulty": "1"
                        },
                        "ID_1812": {
                            "title": "Earthbound",
                            "link": "https://youtu.be/Rl29TKZDh3c",
                            "difficulty": "1"
                        },
                        "ID_1813": {
                            "title": "Icicle Mountain",
                            "link": "https://youtu.be/EUChBiDcccY",
                            "difficulty": "1"
                        },
                        "ID_1814": {
                            "title": "Flat Zone",
                            "link": "https://youtu.be/DMWyIqpguNc",
                            "difficulty": "1"
                        },
                        "ID_1815": {
                            "title": "Super Mario Bros. 3",
                            "link": "https://youtu.be/cuj4gcUQ1MA",
                            "difficulty": "1"
                        },
                        "ID_1816": {
                            "title": "Pokemon Battle! (Gold/Silver)",
                            "link": "https://youtu.be/L9vKYgCvHAw",
                            "difficulty": "1"
                        },
                        "ID_1817": {
                            "title": "Fire Emblem",
                            "link": "https://youtu.be/75VzljdUE-s",
                            "difficulty": "1"
                        },
                        "ID_1818": {
                            "title": "Mother 2",
                            "link": "https://youtu.be/Ij0HptqoBxI",
                            "difficulty": "1"
                        },
                        "ID_1819": {
                            "title": "Dr. Mario",
                            "link": "https://youtu.be/XyPivh5SGT4",
                            "difficulty": "1"
                        },
                        "ID_1820": {
                            "title": "Balloon Fight",
                            "link": "https://youtu.be/Rv10snOJ3-w",
                            "difficulty": "1"
                        },
                        "ID_1821": {
                            "title": "Battlefield",
                            "link": "https://youtu.be/5toVjFq0O_4",
                            "difficulty": "1"
                        },
                        "ID_1822": {
                            "title": "Final Destination",
                            "link": "https://youtu.be/poBRGkYK6k8",
                            "difficulty": "1"
                        },
                        "ID_1823": {
                            "title": "Menu 2",
                            "link": "https://youtu.be/XbOqFrTrFR0",
                            "difficulty": "1"
                        },
                        "ID_1824": {
                            "title": "How to Play",
                            "link": "https://youtu.be/CAnIZbWT4nY",
                            "difficulty": "1"
                        },
                        "ID_1825": {
                            "title": "Break the Targets",
                            "link": "https://youtu.be/waMXTrx4SGw",
                            "difficulty": "1"
                        },
                        "ID_1826": {
                            "title": "All-Star Rest Area",
                            "link": "https://youtu.be/J6ZdLr4AY1g",
                            "difficulty": "1"
                        },
                        "ID_1827": {
                            "title": "Trophy",
                            "link": "https://youtu.be/cU_QuldpVG0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Teenage Mutant Ninja Turtles": {
            "seriesName": "Teenage Mutant Ninja Turtles",
            "seriesColor": "red",
            "game": {
                "Teenage Mutant Ninja Turtles IV: Turtles in Time": {
                    "gameName": "Teenage Mutant Ninja Turtles IV: Turtles in Time",
                    "answers": ["teenage mutant ninja turtles iv: turtles in time", "tmnt 4", "tmnt4", "turtles in time", "teenage mutant ninja turtles 4 turtles in time", "tmnt 4 turtles in time", "tmnt4 turtles in time"],
                    "songs": {
                        "ID_2214": {
                            "title": "Technodrome ~ Let's Kick Shell!",
                            "link": "https://youtu.be/VtOFsZk1CX8",
                            "difficulty": "1"
                        },
                        "ID_2215": {
                            "title": "Sewer Surfin'",
                            "link": "https://youtu.be/tLKnlzYwVz4",
                            "difficulty": "1"
                        },
                        "ID_2216": {
                            "title": "Alleycat Blues",
                            "link": "https://youtu.be/RM2oRKfMq2w",
                            "difficulty": "1"
                        },
                        "ID_2217": {
                            "title": "Big Apple, 3 A.M.",
                            "link": "https://youtu.be/o0e69e_B_SE",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Terraria": {
            "seriesName": "Terraria",
            "seriesColor": "red",
            "game": {
                "Terraria": {
                    "gameName": "Terraria",
                    "answers": ["terraria"],
                    "songs": {
                        "ID_1516": {
                            "title": "Plantera",
                            "link": "https://youtu.be/xmijN_nZeOU",
                            "difficulty": "1"
                        },
                        "ID_1517": {
                            "title": "Frost Moon",
                            "link": "https://youtu.be/wTKvewEtnRY",
                            "difficulty": "1"
                        },
                        "ID_1518": {
                            "title": "Underground",
                            "link": "https://youtu.be/c-OttnZEXZo",
                            "difficulty": "1"
                        },
                        "ID_1519": {
                            "title": "Underground Crimson",
                            "link": "https://youtu.be/1MPrk78diZo",
                            "difficulty": "1"
                        },
                        "ID_1520": {
                            "title": "Alternate Day",
                            "link": "https://youtu.be/vB7lYs4z7kE",
                            "difficulty": "1"
                        },
                        "ID_1521": {
                            "title": "Town Day Theme",
                            "link": "https://youtu.be/h8Q0CyunBHo",
                            "difficulty": "1"
                        },
                        "ID_1522": {
                            "title": "Rain",
                            "link": "https://youtu.be/0dmzWlm4_V0",
                            "difficulty": "1"
                        },
                        "ID_1523": {
                            "title": "Ice",
                            "link": "https://youtu.be/WvrciA9TTTw",
                            "difficulty": "1"
                        },
                        "ID_1524": {
                            "title": "Underground Ice",
                            "link": "https://youtu.be/cYPgRwuAO4I",
                            "difficulty": "1"
                        },
                        "ID_1525": {
                            "title": "Sandstorm",
                            "link": "https://youtu.be/4FfrhUgvgDw",
                            "difficulty": "1"
                        },
                        "ID_1526": {
                            "title": "Jungle",
                            "link": "https://youtu.be/ehMCqtBBUXU",
                            "difficulty": "1"
                        },
                        "ID_1527": {
                            "title": "Lihzahrd",
                            "link": "https://youtu.be/_LxrYpJH-v0",
                            "difficulty": "1"
                        },
                        "ID_1528": {
                            "title": "Ocean",
                            "link": "https://youtu.be/fdi06Y6oFDo",
                            "difficulty": "1"
                        },
                        "ID_1529": {
                            "title": "Ocean Night",
                            "link": "https://youtu.be/hQWyBbDx2oY",
                            "difficulty": "1"
                        },
                        "ID_1530": {
                            "title": "Space",
                            "link": "https://youtu.be/EroCygxKHwk",
                            "difficulty": "1"
                        },
                        "ID_1531": {
                            "title": "Corruption",
                            "link": "https://youtu.be/HkZ-Z0u5eGc",
                            "difficulty": "1"
                        },
                        "ID_1532": {
                            "title": "Underground Corruption",
                            "link": "https://youtu.be/cZEpGtePF4M",
                            "difficulty": "1"
                        },
                        "ID_1533": {
                            "title": "Crimson",
                            "link": "https://youtu.be/p1QY1CAFiK0",
                            "difficulty": "1"
                        },
                        "ID_1534": {
                            "title": "Crimson",
                            "link": "https://youtu.be/IOEjEbjAR3c",
                            "difficulty": "1"
                        },
                        "ID_1535": {
                            "title": "Mushrooms",
                            "link": "https://youtu.be/7wp1xknPA5A",
                            "difficulty": "1"
                        },
                        "ID_1536": {
                            "title": "Dungeon",
                            "link": "https://youtu.be/cxRovfKFoI4",
                            "difficulty": "1"
                        },
                        "ID_1537": {
                            "title": "Underworld",
                            "link": "https://youtu.be/d5tEk9puWH4",
                            "difficulty": "1"
                        },
                        "ID_1538": {
                            "title": "Eerie",
                            "link": "https://youtu.be/R2Hs-v5XEFQ",
                            "difficulty": "1"
                        },
                        "ID_1539": {
                            "title": "Eclipse",
                            "link": "https://youtu.be/pMNUlKUMw0E",
                            "difficulty": "1"
                        },
                        "ID_1540": {
                            "title": "Slime Rain",
                            "link": "https://youtu.be/CHSY3tl9Gs4",
                            "difficulty": "1"
                        },
                        "ID_1541": {
                            "title": "Goblin Army",
                            "link": "https://youtu.be/azRSVHjhbXU",
                            "difficulty": "1"
                        },
                        "ID_1542": {
                            "title": "Pirate Invasion",
                            "link": "https://youtu.be/E2neOO8N8G8",
                            "difficulty": "1"
                        },
                        "ID_1543": {
                            "title": "Pumpkin Moon",
                            "link": "https://youtu.be/lOyhMudpA48",
                            "difficulty": "1"
                        },
                        "ID_1544": {
                            "title": "Martian Madness",
                            "link": "https://youtu.be/2xpOGAkYR_s",
                            "difficulty": "1"
                        },
                        "ID_1545": {
                            "title": "Lunar Towers",
                            "link": "https://youtu.be/I4bHZF6bOdY",
                            "difficulty": "1"
                        },
                        "ID_1546": {
                            "title": "Boss 1",
                            "link": "https://youtu.be/jp_rl-1rYpQ",
                            "difficulty": "1"
                        },
                        "ID_1547": {
                            "title": "Boss 2",
                            "link": "https://youtu.be/8E8YdqLG5c8",
                            "difficulty": "1"
                        },
                        "ID_1548": {
                            "title": "Boss 3",
                            "link": "https://youtu.be/XdLq3b6uZj8",
                            "difficulty": "1"
                        },
                        "ID_1549": {
                            "title": "Queen Bee",
                            "link": "https://youtu.be/XdLq3b6uZj8",
                            "difficulty": "1"
                        },
                        "ID_1550": {
                            "title": "Golem",
                            "link": "https://youtu.be/ifzNfr6DAFk",
                            "difficulty": "1"
                        },
                        "ID_1551": {
                            "title": "Empress of Light",
                            "link": "https://youtu.be/mP3RAMSgrnI",
                            "difficulty": "1"
                        },
                        "ID_1552": {
                            "title": "Moon Lord",
                            "link": "https://youtu.be/2o0_30JaUhY",
                            "difficulty": "1"
                        },
                        "ID_1553": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/LFmnZ6VMd_4",
                            "difficulty": "1"
                        }
                    }
                },
                "Terraria Calamity Mod": {
                    "gameName": "Terraria Calamity Mod",
                    "answers": ["terraria calamity mod", "terraria calamity", "calamity", "calamity mod"],
                    "songs": {
                        "ID_1554": {
                            "title": "Guardian of The Former Seas",
                            "link": "https://youtu.be/hPEQLU-aD3I",
                            "difficulty": "1"
                        },
                        "ID_1555": {
                            "title": "1NF3S+@+!0N",
                            "link": "https://youtu.be/17IZjvr5c1I",
                            "difficulty": "1"
                        },
                        "ID_1556": {
                            "title": "Fly of Beelzebub",
                            "link": "https://youtu.be/fmt-2Uqx0K4",
                            "difficulty": "1"
                        },
                        "ID_1557": {
                            "title": "Roar of The Jungle Dragon",
                            "link": "https://youtu.be/8rEw9sCwo8E",
                            "difficulty": "1"
                        },
                        "ID_1558": {
                            "title": "Gelatine Throne",
                            "link": "https://youtu.be/j6MI9-okM6k",
                            "difficulty": "1"
                        },
                        "ID_1559": {
                            "title": "It Sees Everything",
                            "link": "https://youtu.be/V2W2Mo61l3o",
                            "difficulty": "1"
                        },
                        "ID_1560": {
                            "title": "Corrosion!",
                            "link": "https://youtu.be/1OotwWvp434",
                            "difficulty": "1"
                        },
                        "ID_1561": {
                            "title": "Crimson Cortex",
                            "link": "https://youtu.be/_YX5POvOlUs",
                            "difficulty": "1"
                        },
                        "ID_1562": {
                            "title": "Blood Coagulent",
                            "link": "https://youtu.be/8oVUDA7WmAQ",
                            "difficulty": "1"
                        },
                        "ID_1563": {
                            "title": "The Filthy Mind",
                            "link": "https://youtu.be/1NbQFGnQaCE",
                            "difficulty": "1"
                        },
                        "ID_1564": {
                            "title": "Stinging Onslaught",
                            "link": "https://youtu.be/uA3--qzsDCQ",
                            "difficulty": "1"
                        },
                        "ID_1565": {
                            "title": "wasteland",
                            "link": "https://youtu.be/ASIPPu_LXmY",
                            "difficulty": "1"
                        },
                        "ID_1566": {
                            "title": "Hadopelagic Pressure",
                            "link": "https://youtu.be/cG_EgFBhG2c",
                            "difficulty": "1"
                        },
                        "ID_1567": {
                            "title": "Return To Slime",
                            "link": "https://youtu.be/W70Q1R-inLc",
                            "difficulty": "1"
                        },
                        "ID_1568": {
                            "title": "The Heaven-Sent Abomination",
                            "link": "https://youtu.be/cZ4Q2WLmUII",
                            "difficulty": "1"
                        },
                        "ID_1569": {
                            "title": "Treasures Within The Abomination",
                            "link": "https://youtu.be/e3t_dbLaw-M",
                            "difficulty": "1"
                        },
                        "ID_1570": {
                            "title": "Antarctic Reinforment",
                            "link": "https://youtu.be/PtvS4-VqxRA",
                            "difficulty": "1"
                        },
                        "ID_1571": {
                            "title": "Playing with Firepower",
                            "link": "https://youtu.be/pnmfsHWot64",
                            "difficulty": "1"
                        },
                        "ID_1572": {
                            "title": "Raw, Unfiltered Calamity",
                            "link": "https://youtu.be/ysBWFTxxoak",
                            "difficulty": "1"
                        },
                        "ID_1573": {
                            "title": "Siren's Call & Forbidden Lullaby",
                            "link": "https://youtu.be/EpXNHYldIE0",
                            "difficulty": "1"
                        },
                        "ID_1574": {
                            "title": "Interstellar Stomper",
                            "link": "https://youtu.be/-NKaXqLhN3c",
                            "difficulty": "1"
                        },
                        "ID_1575": {
                            "title": "Open Frenzy",
                            "link": "https://youtu.be/pSclJ-tjkYg",
                            "difficulty": "1"
                        },
                        "ID_1576": {
                            "title": "Pest of The Cosmos",
                            "link": "https://youtu.be/KJHNdl3R8GM",
                            "difficulty": "1"
                        },
                        "ID_1577": {
                            "title": "Unholy Ambush",
                            "link": "https://youtu.be/P5r9WCfA3y4",
                            "difficulty": "1"
                        },
                        "ID_1578": {
                            "title": "Murderswarm",
                            "link": "https://youtu.be/KU7VZRgjYaE",
                            "difficulty": "1"
                        },
                        "ID_1579": {
                            "title": "Unholy Insurgency",
                            "link": "https://youtu.be/6Q57JfIz2Mg",
                            "difficulty": "1"
                        },
                        "ID_1580": {
                            "title": "Feral Amalgamation",
                            "link": "https://youtu.be/abkUjD3qark",
                            "difficulty": "1"
                        },
                        "ID_1581": {
                            "title": "Toxic Wisdom",
                            "link": "https://youtu.be/vY38TtlEPns",
                            "difficulty": "1"
                        },
                        "ID_1582": {
                            "title": "Cosmic Disgust",
                            "link": "https://youtu.be/ibFdltiLuKM",
                            "difficulty": "1"
                        },
                        "ID_1583": {
                            "title": "Universal Collapse",
                            "link": "https://youtu.be/srjhoxEE4Uk",
                            "difficulty": "1"
                        },
                        "ID_1584": {
                            "title": "Infernal Catharsis",
                            "link": "https://youtu.be/Avp6YE7qINg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Tetris": {
            "seriesName": "Tetris",
            "seriesColor": "red",
            "game": {
                "Tetris (GB)": {
                    "gameName": "Tetris (GB)",
                    "answers": ["tetris (gb)", "tetris"],
                    "songs": {
                        "ID_2221": {
                            "title": "Title",
                            "link": "https://youtu.be/6MsXiUnHHqU",
                            "difficulty": "1"
                        },
                        "ID_2222": {
                            "title": "A-Type",
                            "link": "https://youtu.be/S098e4mSLDY",
                            "difficulty": "1"
                        },
                        "ID_2223": {
                            "title": "B-Type",
                            "link": "https://youtu.be/20RSkwVRGZ4",
                            "difficulty": "1"
                        },
                        "ID_2224": {
                            "title": "C-Type",
                            "link": "https://youtu.be/hfxO9RU4VGI",
                            "difficulty": "1"
                        },
                        "ID_2225": {
                            "title": "High Score",
                            "link": "https://youtu.be/VsK0Ezwa-p0",
                            "difficulty": "1"
                        }
                    }
                },
                "Tetris (NES)": {
                    "gameName": "Tetris (NES)",
                    "answers": ["tetris (nes)", "tetris"],
                    "songs": {
                        "ID_2218": {
                            "title": "Music 01",
                            "link": "https://youtu.be/KdPevomELLc",
                            "difficulty": "1"
                        },
                        "ID_2219": {
                            "title": "Music 02",
                            "link": "https://youtu.be/IU7_39ORGCo",
                            "difficulty": "1"
                        },
                        "ID_2220": {
                            "title": "Victory Theme",
                            "link": "https://youtu.be/jGcCFADbW2w",
                            "difficulty": "1"
                        }
                    }
                },
                "Tetris 99": {
                    "gameName": "Tetris 99",
                    "answers": ["tetris 99"],
                    "songs": {
                        "ID_2226": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/63hoSNvS6Z4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "The Last of Us": {
            "seriesName": "The Last of Us",
            "seriesColor": "red",
            "game": {
                "The Last of Us": {
                    "gameName": "The Last of Us",
                    "answers": ["the last of us", "tlou", "last of us", "lou"],
                    "songs": {
                        "ID_920": {
                            "title": "The Last of Us",
                            "link": "https://youtu.be/8p2DjSwt4_g",
                            "difficulty": "1"
                        },
                        "ID_921": {
                            "title": "Vanishing Grace",
                            "link": "https://youtu.be/27wG5zSD-qI",
                            "difficulty": "1"
                        },
                        "ID_922": {
                            "title": "All Gone",
                            "link": "https://youtu.be/ihdpkjEukaM",
                            "difficulty": "1"
                        },
                        "ID_923": {
                            "title": "The Choice",
                            "link": "https://youtu.be/o2-tlEOMgzU",
                            "difficulty": "1"
                        },
                        "ID_924": {
                            "title": "All Gone (Aftermath)",
                            "link": "https://youtu.be/SDTS5Sohv4o",
                            "difficulty": "1"
                        },
                        "ID_925": {
                            "title": "The Path",
                            "link": "https://youtu.be/wjs6RAfrd60",
                            "difficulty": "1"
                        },
                        "ID_926": {
                            "title": "The Path (A New Beginning)",
                            "link": "https://youtu.be/STyGc4rMOeo",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "The Legend of Zelda": {
            "seriesName": "The Legend of Zelda",
            "seriesColor": "red",
            "game": {
                "A Link to the Past": {
                    "gameName": "A Link to the Past",
                    "answers": ["a hat in time", "ahit"],
                    "songs": {
                        "ID_1095": {
                            "title": "Beginning of the Journey",
                            "link": "https://youtu.be/8rA_u3CCPa4",
                            "difficulty": "1"
                        },
                        "ID_1096": {
                            "title": "Hyrule Castle",
                            "link": "https://youtu.be/_uR7doemZD0",
                            "difficulty": "1"
                        },
                        "ID_1097": {
                            "title": "Hyrule Field Main Theme",
                            "link": "https://youtu.be/r4MhlyFwmrA",
                            "difficulty": "1"
                        },
                        "ID_1098": {
                            "title": "Kakariko Village",
                            "link": "https://youtu.be/fw1O6-LjfeA",
                            "difficulty": "1"
                        },
                        "ID_1099": {
                            "title": "Lost Ancient Ruins",
                            "link": "https://youtu.be/zi0APizJuRU",
                            "difficulty": "1"
                        },
                        "ID_1100": {
                            "title": "Forest of Mystery",
                            "link": "https://youtu.be/X1CKttAmNKA",
                            "difficulty": "1"
                        },
                        "ID_1101": {
                            "title": "The Dark World",
                            "link": "https://youtu.be/BStjuHfP238",
                            "difficulty": "1"
                        }
                    }
                },
                "Breath of the Wild": {
                    "gameName": "Breath of the Wild",
                    "answers": ["breath of the wild", "botw", "breath of the wild", "leg of zeg", "zelda botw", "loz botw"],
                    "songs": {
                        "ID_1161": {
                            "title": "Riding - Night",
                            "link": "https://youtu.be/f2LgPr9xtAo",
                            "difficulty": "1"
                        }
                    }
                },
                "Link's Awakening": {
                    "gameName": "Link's Awakening",
                    "answers": ["link's awakening", "link's awakening", "links awakening", "zelda awakening", "zelda links awakening", "zelda link's awakening"],
                    "songs": {
                        "ID_1102": {
                            "title": "Title",
                            "link": "https://youtu.be/EgtyT0NEP_g",
                            "difficulty": "1"
                        },
                        "ID_1103": {
                            "title": "Overworld",
                            "link": "https://youtu.be/9FYkL2D3d7M",
                            "difficulty": "1"
                        }
                    }
                },
                "Majora's Mask": {
                    "gameName": "Majora's Mask",
                    "answers": ["majora's mask", "majora", "majoras mask", "majora's mask", "zelda mm", "zelda majoras mask"],
                    "songs": {
                        "ID_1132": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/AortGYe1sTI",
                            "difficulty": "1"
                        },
                        "ID_1133": {
                            "title": "Majora's Theme",
                            "link": "https://youtu.be/gJQu3iTi54M",
                            "difficulty": "1"
                        },
                        "ID_1134": {
                            "title": "Clock Town, First Day",
                            "link": "https://youtu.be/JaflMqvxIqA",
                            "difficulty": "1"
                        },
                        "ID_1135": {
                            "title": "Milk Bar",
                            "link": "https://youtu.be/tIhZrn8XxH4",
                            "difficulty": "1"
                        },
                        "ID_1136": {
                            "title": "Clock Town, Second Day",
                            "link": "https://youtu.be/eS_42yIISl8",
                            "difficulty": "1"
                        },
                        "ID_1137": {
                            "title": "Shop",
                            "link": "https://youtu.be/WUWlFnxFNF8",
                            "difficulty": "1"
                        },
                        "ID_1138": {
                            "title": "Clock Town, Third Day",
                            "link": "https://youtu.be/la40d6pm17w",
                            "difficulty": "1"
                        },
                        "ID_1139": {
                            "title": "Astral Observatory",
                            "link": "https://youtu.be/ErWVpxkdX_o",
                            "difficulty": "1"
                        },
                        "ID_1140": {
                            "title": "Battle",
                            "link": "https://youtu.be/9aWkaMI2fGc",
                            "difficulty": "1"
                        },
                        "ID_1141": {
                            "title": "Deku Palace",
                            "link": "https://youtu.be/2foI62hzyQ8",
                            "difficulty": "1"
                        },
                        "ID_1142": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/rbHz6IttTpg",
                            "difficulty": "1"
                        },
                        "ID_1143": {
                            "title": "Romani Ranch",
                            "link": "https://youtu.be/NHZygqc7-NU",
                            "difficulty": "1"
                        },
                        "ID_1144": {
                            "title": "Music Box House",
                            "link": "https://youtu.be/2uxk5lefp68",
                            "difficulty": "1"
                        },
                        "ID_1145": {
                            "title": "The End Credits",
                            "link": "https://youtu.be/joMEQmwV8Q8",
                            "difficulty": "1"
                        }
                    }
                },
                "Ocarina of Time": {
                    "gameName": "Ocarina of Time",
                    "answers": ["ocarina of time", "oot", "zelda ocarina", "zelda ocarina", "zelda ocarina of time", "ocarina of time", "the legend of zelda ocarina of time"],
                    "songs": {
                        "ID_1115": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/CHsAFs7w3ro",
                            "difficulty": "1"
                        },
                        "ID_1116": {
                            "title": "House",
                            "link": "https://youtu.be/hFj8ijstduI",
                            "difficulty": "1"
                        },
                        "ID_1117": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/uEmWdiMndok",
                            "difficulty": "1"
                        },
                        "ID_1118": {
                            "title": "Hyrule Field",
                            "link": "https://youtu.be/KG3kHhSHF0U",
                            "difficulty": "1"
                        },
                        "ID_1119": {
                            "title": "Market",
                            "link": "https://youtu.be/I_pJpCgT7Qs",
                            "difficulty": "1"
                        },
                        "ID_1120": {
                            "title": "Zora's Domain",
                            "link": "https://youtu.be/_VK9xWhZEyg",
                            "difficulty": "1"
                        },
                        "ID_1121": {
                            "title": "Forest Temple",
                            "link": "https://youtu.be/y2pdg9yGtyQ",
                            "difficulty": "1"
                        },
                        "ID_1122": {
                            "title": "Ganondorf Battle",
                            "link": "https://youtu.be/mNT-FouWfnw",
                            "difficulty": "1"
                        },
                        "ID_1123": {
                            "title": "Gerudo Valley",
                            "link": "https://youtu.be/aebc7Panr5Q",
                            "difficulty": "1"
                        },
                        "ID_1124": {
                            "title": "Hyrule Castle Courtyard",
                            "link": "https://youtu.be/uHubgxagyeQ",
                            "difficulty": "1"
                        },
                        "ID_1125": {
                            "title": "Kakariko Village",
                            "link": "https://youtu.be/8gbpIbQ5vvk",
                            "difficulty": "1"
                        },
                        "ID_1126": {
                            "title": "Kokiri Forest",
                            "link": "https://youtu.be/gEhERNugLzY",
                            "difficulty": "1"
                        },
                        "ID_1127": {
                            "title": "Lost Woods",
                            "link": "https://youtu.be/MqcEYdzZc6U",
                            "difficulty": "1"
                        },
                        "ID_1128": {
                            "title": "Shop",
                            "link": "https://youtu.be/HwZg6veZTUk",
                            "difficulty": "1"
                        },
                        "ID_1129": {
                            "title": "Windmill Hut",
                            "link": "https://youtu.be/dMpk6tAbonM",
                            "difficulty": "1"
                        },
                        "ID_1130": {
                            "title": "Zelda's Theme",
                            "link": "https://youtu.be/2OtDwn34iWY",
                            "difficulty": "1"
                        },
                        "ID_1131": {
                            "title": "Last Battle",
                            "link": "https://youtu.be/1U4Vv65OjVE",
                            "difficulty": "1"
                        }
                    }
                },
                "Phantom Hourglass": {
                    "gameName": "Phantom Hourglass",
                    "answers": ["phantom hourglass", "phantom hourglass", "loz ph", "zelda phantom hourglass", "loz phantom hourglass", "the legend of zelda phantom hourglass"],
                    "songs": {
                        "ID_1104": {
                            "title": "Set Sail for Adventure (Title)",
                            "link": "https://youtu.be/G3gfqPdF7eQ",
                            "difficulty": "1"
                        },
                        "ID_1105": {
                            "title": "The Pirate Ship",
                            "link": "https://youtu.be/j3Zp9M5XwOY",
                            "difficulty": "1"
                        },
                        "ID_1106": {
                            "title": "Princess Zelda",
                            "link": "https://youtu.be/MMu79gKkPbM",
                            "difficulty": "1"
                        },
                        "ID_1107": {
                            "title": "Linebeck's Theme",
                            "link": "https://youtu.be/_HvVSQPGRzA",
                            "difficulty": "1"
                        },
                        "ID_1108": {
                            "title": "Boss Battle",
                            "link": "https://youtu.be/UGSxZBe6Uic",
                            "difficulty": "1"
                        }
                    }
                },
                "Skyward Sword": {
                    "gameName": "Skyward Sword",
                    "answers": ["skyward sword", "zelda skyward sword", "the legend of zelda skyward sword", "legend of zelda skyward sword"],
                    "songs": {
                        "ID_2004": {
                            "title": "Ballad of the Goddess",
                            "link": "https://youtu.be/23hJeaLotEw",
                            "difficulty": "1"
                        },
                        "ID_2005": {
                            "title": "Skyloft",
                            "link": "https://youtu.be/aH4T38gw6Wk",
                            "difficulty": "1"
                        },
                        "ID_2006": {
                            "title": "Groose's Theme",
                            "link": "https://youtu.be/5xD1FAOJI84",
                            "difficulty": "1"
                        },
                        "ID_2007": {
                            "title": "Follow Fi",
                            "link": "https://youtu.be/cCpAFkdy9Ls",
                            "difficulty": "1"
                        },
                        "ID_2008": {
                            "title": "Fi's Theme",
                            "link": "https://youtu.be/KRPheoucN_0",
                            "difficulty": "1"
                        },
                        "ID_2009": {
                            "title": "Bazaar",
                            "link": "https://youtu.be/JHCXwA18EHA",
                            "difficulty": "1"
                        },
                        "ID_2010": {
                            "title": "The Sky",
                            "link": "https://youtu.be/nRbROTdOgj0",
                            "difficulty": "1"
                        },
                        "ID_2011": {
                            "title": "Faron Woods",
                            "link": "https://youtu.be/H_2zBH30HJU",
                            "difficulty": "1"
                        },
                        "ID_2012": {
                            "title": "Ghirahim Battle",
                            "link": "https://youtu.be/PPTamRd4n1M",
                            "difficulty": "1"
                        },
                        "ID_2013": {
                            "title": "Eldin Volcano",
                            "link": "https://youtu.be/kKME0bbKFYE",
                            "difficulty": "1"
                        },
                        "ID_2014": {
                            "title": "Lanayru Desert",
                            "link": "https://youtu.be/0LfAcKnDYWQ",
                            "difficulty": "1"
                        },
                        "ID_2015": {
                            "title": "Lanayru Desert (Past)",
                            "link": "https://youtu.be/bJkSWdCYb8A",
                            "difficulty": "1"
                        },
                        "ID_2016": {
                            "title": "Lanayru Mining Facility",
                            "link": "https://youtu.be/UWKXwSZcQlo",
                            "difficulty": "1"
                        },
                        "ID_2017": {
                            "title": "Guardian's Awaken",
                            "link": "https://youtu.be/n8_LJN-dxtc",
                            "difficulty": "1"
                        },
                        "ID_2018": {
                            "title": "Koloktoss / Moldarach",
                            "link": "https://youtu.be/MzL4IA16k78",
                            "difficulty": "1"
                        },
                        "ID_2019": {
                            "title": "LD-002G Scervo",
                            "link": "https://youtu.be/Y8KqVQTpiyg",
                            "difficulty": "1"
                        },
                        "ID_2020": {
                            "title": "Imprisoned (Final)",
                            "link": "https://youtu.be/NsuTmevpCec",
                            "difficulty": "1"
                        },
                        "ID_2021": {
                            "title": "Final Ghirahim",
                            "link": "https://youtu.be/NWy_F29hJg0",
                            "difficulty": "1"
                        },
                        "ID_2022": {
                            "title": "Final Demise",
                            "link": "https://youtu.be/zR-rX20UCHE",
                            "difficulty": "1"
                        }
                    }
                },
                "Spirit Tracks": {
                    "gameName": "Spirit Tracks",
                    "answers": ["spirit tracks", "spirit tracks", "loz st", "zelda spirit tracks", "loz spirit tracks", "the legend of zelda spirit tracks"],
                    "songs": {
                        "ID_1109": {
                            "title": "Opening",
                            "link": "https://youtu.be/Cov0YhIRbis",
                            "difficulty": "1"
                        },
                        "ID_1110": {
                            "title": "File Select",
                            "link": "https://youtu.be/W1xZp3LlVP0",
                            "difficulty": "1"
                        },
                        "ID_1111": {
                            "title": "Princess Zelda",
                            "link": "https://youtu.be/aePE5JVqU9w",
                            "difficulty": "1"
                        },
                        "ID_1112": {
                            "title": "Realm Overworld",
                            "link": "https://youtu.be/5W_bFLwB0WY",
                            "difficulty": "1"
                        },
                        "ID_1113": {
                            "title": "Boss Battle: Fraaz",
                            "link": "https://youtu.be/aSV4s-N1E24",
                            "difficulty": "1"
                        },
                        "ID_1114": {
                            "title": "Boss Battle: Phytops",
                            "link": "https://youtu.be/1b9lQwMf_-I",
                            "difficulty": "1"
                        }
                    }
                },
                "The Legend of Zelda": {
                    "gameName": "The Legend of Zelda",
                    "answers": ["the legend of zelda", "loz", "zelda", "zelda 1"],
                    "songs": {
                        "ID_1089": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/LvytTVeTxCE",
                            "difficulty": "1"
                        },
                        "ID_1090": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/ncg72VswyTs",
                            "difficulty": "1"
                        },
                        "ID_1091": {
                            "title": "Dungeon Theme",
                            "link": "https://youtu.be/cMssCMqMHuk",
                            "difficulty": "1"
                        }
                    }
                },
                "The Wind Waker": {
                    "gameName": "The Wind Waker",
                    "answers": ["the wind waker", "wind waker", "loz wind waker", "loz ww", "the wind waker", "zelda wind waker", "zelda ww"],
                    "songs": {
                        "ID_1146": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/o78T9-I4OGA",
                            "difficulty": "1"
                        },
                        "ID_1147": {
                            "title": "File Select",
                            "link": "https://youtu.be/0Kcnmba7v9Q",
                            "difficulty": "1"
                        },
                        "ID_1148": {
                            "title": "The Legendary Hero",
                            "link": "https://youtu.be/2TOZwZIgPtI",
                            "difficulty": "1"
                        },
                        "ID_1149": {
                            "title": "Outset Island",
                            "link": "https://youtu.be/VJsviRJ4voc",
                            "difficulty": "1"
                        },
                        "ID_1150": {
                            "title": "Battle",
                            "link": "https://youtu.be/SRGii05yILI",
                            "difficulty": "1"
                        },
                        "ID_1151": {
                            "title": "Pirates",
                            "link": "https://youtu.be/lYCo08TfYlQ",
                            "difficulty": "1"
                        },
                        "ID_1152": {
                            "title": "Windfall Island",
                            "link": "https://youtu.be/go_XgaJNVgg",
                            "difficulty": "1"
                        },
                        "ID_1153": {
                            "title": "The Great Sea",
                            "link": "https://youtu.be/5J_bL2bjQ-k",
                            "difficulty": "1"
                        },
                        "ID_1154": {
                            "title": "Dragon Roost Island",
                            "link": "https://youtu.be/FkwhtdCW5rI",
                            "difficulty": "1"
                        },
                        "ID_1155": {
                            "title": "Princess Zelda's Theme",
                            "link": "https://youtu.be/kQRhQ9D6ZBQ",
                            "difficulty": "1"
                        },
                        "ID_1156": {
                            "title": "Fairy Spring",
                            "link": "https://youtu.be/9myFEqrzy9o",
                            "difficulty": "1"
                        },
                        "ID_1157": {
                            "title": "Molgera",
                            "link": "https://youtu.be/5CYQzPHpvU8",
                            "difficulty": "1"
                        },
                        "ID_1158": {
                            "title": "Ganondorf Battle",
                            "link": "https://youtu.be/MfbM3GTkTBo",
                            "difficulty": "1"
                        },
                        "ID_1159": {
                            "title": "Aryll's Theme",
                            "link": "https://youtu.be/1UZ1_UfZlUc",
                            "difficulty": "1"
                        },
                        "ID_1160": {
                            "title": "The Great Sea is Cursed",
                            "link": "https://youtu.be/uLTxak2HqAw",
                            "difficulty": "1"
                        }
                    }
                },
                "Twilight Princess": {
                    "gameName": "Twilight Princess",
                    "answers": ["twilight princess", "zelda twilight princess", "zelda tp", "the legend of zelda twilight princess", "legend of zelda twilight princess", "legend of zelda tp", "the legend of zelda tp"],
                    "songs": {
                        "ID_2278": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/9iltlMCj3Lw",
                            "difficulty": "1"
                        },
                        "ID_2279": {
                            "title": "Meet Ilia",
                            "link": "https://youtu.be/74W5WYFGlmQ",
                            "difficulty": "1"
                        },
                        "ID_2280": {
                            "title": "Ordon Ranch",
                            "link": "https://youtu.be/T1x-WoLHK9k",
                            "difficulty": "1"
                        },
                        "ID_2281": {
                            "title": "Spirit's Lament",
                            "link": "https://youtu.be/jDgoPXyzwQ0",
                            "difficulty": "1"
                        },
                        "ID_2282": {
                            "title": "Hero Chosen by the Gods",
                            "link": "https://youtu.be/MKO2d_lRxoI",
                            "difficulty": "1"
                        },
                        "ID_2283": {
                            "title": "Faron Woods",
                            "link": "https://youtu.be/WsVT_-RsONg",
                            "difficulty": "1"
                        },
                        "ID_2284": {
                            "title": "Link Will Save Us",
                            "link": "https://youtu.be/wftCKF8Fufc",
                            "difficulty": "1"
                        },
                        "ID_2285": {
                            "title": "Hyrule Field",
                            "link": "https://youtu.be/t6JgG__XbRA",
                            "difficulty": "1"
                        },
                        "ID_2286": {
                            "title": "Song of Healing",
                            "link": "https://youtu.be/nCdlZGnmgHs",
                            "difficulty": "1"
                        },
                        "ID_2287": {
                            "title": "Kakariko Village",
                            "link": "https://youtu.be/DlMGdW87Wuo",
                            "difficulty": "1"
                        },
                        "ID_2288": {
                            "title": "Save Ilia",
                            "link": "https://youtu.be/8qxGErvMQnE",
                            "difficulty": "1"
                        },
                        "ID_2289": {
                            "title": "Lake Hylia",
                            "link": "https://youtu.be/DdgEIRBsTaU",
                            "difficulty": "1"
                        },
                        "ID_2290": {
                            "title": "Hyrule Castle Town",
                            "link": "https://youtu.be/CSoTsfU102o",
                            "difficulty": "1"
                        },
                        "ID_2291": {
                            "title": "Midna's Lament",
                            "link": "https://youtu.be/NoBRdekWKxI",
                            "difficulty": "1"
                        },
                        "ID_2292": {
                            "title": "Meet Princess Zelda Again",
                            "link": "https://youtu.be/D53BB879bjQ",
                            "difficulty": "1"
                        }
                    }
                },
                "Zelda II: The Adventure of Link": {
                    "gameName": "Zelda II: The Adventure of Link",
                    "answers": ["zelda ii: the adventure of link", "loz2", "zelda 2"],
                    "songs": {
                        "ID_1092": {
                            "title": "Title Theme",
                            "link": "https://youtu.be/B2zxGm4cUB4",
                            "difficulty": "1"
                        },
                        "ID_1093": {
                            "title": "Overworld Theme",
                            "link": "https://youtu.be/RHS5jM6xBHo",
                            "difficulty": "1"
                        },
                        "ID_1094": {
                            "title": "Dungeon Theme",
                            "link": "https://youtu.be/W-VUVvvlQK8",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "The Somnium Files": {
            "seriesName": "The Somnium Files",
            "seriesColor": "red",
            "game": {
                "AI: The Somnium Files": {
                    "gameName": "AI: The Somnium Files",
                    "answers": ["ai: the somnium files", "somnium files", "ai the somnium files", "ai somnium files"],
                    "songs": {
                        "ID_664": {
                            "title": "-kokkAI 2- (Confession 2) [Title Theme]",
                            "link": "https://youtu.be/YkOlxeeK8qM",
                            "difficulty": "1"
                        },
                        "ID_665": {
                            "title": "-isAI- (Delegation)",
                            "link": "https://youtu.be/9a5JpoqgeAQ",
                            "difficulty": "1"
                        },
                        "ID_666": {
                            "title": "-tenkAI- (Commence) [Police Headquarters]",
                            "link": "https://youtu.be/yiy8K2Ie8Z0",
                            "difficulty": "1"
                        },
                        "ID_667": {
                            "title": "Artist, Inc. [Lemniscate]",
                            "link": "https://youtu.be/2holbGVEG7c",
                            "difficulty": "1"
                        },
                        "ID_668": {
                            "title": "-yakusAI- (Disaster)",
                            "link": "https://youtu.be/PbL9rR0hnYw",
                            "difficulty": "1"
                        },
                        "ID_669": {
                            "title": "-syuurAI- (Attack)",
                            "link": "https://youtu.be/wS0HZcUurhY",
                            "difficulty": "1"
                        },
                        "ID_670": {
                            "title": "Invincible Rainbow Arrow -Vocal Solo- - ENG ver.",
                            "link": "https://youtu.be/272GrLpPSQo",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "The Walking Dead": {
            "seriesName": "The Walking Dead",
            "seriesColor": "red",
            "game": {
                "The Walking Dead: Season One": {
                    "gameName": "The Walking Dead: Season One",
                    "answers": ["the walking dead: season one", "walking dead", "the walking dead season one", "the walking dead", "twd"],
                    "songs": {
                        "ID_1702": {
                            "title": "Alive Inside",
                            "link": "https://youtu.be/OFnnXt2etmU",
                            "difficulty": "1"
                        }
                    }
                },
                "The Walking Dead: Season Two": {
                    "gameName": "The Walking Dead: Season Two",
                    "answers": ["the walking dead: season two", "walking dead season 2", "the walking dead season two", "the walking dead season 2", "twd season 2", "twd s2"],
                    "songs": {
                        "ID_1703": {
                            "title": "In The Water",
                            "link": "https://youtu.be/YxB9_eOEeRM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "The Wolf Among Us": {
            "seriesName": "The Wolf Among Us",
            "seriesColor": "red",
            "game": {
                "The Wolf Among Us": {
                    "gameName": "The Wolf Among Us",
                    "answers": ["the wolf among us", "wolf among us", "wolf amogus"],
                    "songs": {
                        "ID_2254": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/EvRdMlc-XXQ",
                            "difficulty": "1"
                        },
                        "ID_2255": {
                            "title": "Opening Credits",
                            "link": "https://youtu.be/s5fUwjdeSHE",
                            "difficulty": "1"
                        },
                        "ID_2256": {
                            "title": "Credits",
                            "link": "https://youtu.be/Vz9sCGFDZ1U",
                            "difficulty": "1"
                        },
                        "ID_2257": {
                            "title": "Bigby's Place",
                            "link": "https://youtu.be/SQeiNCt_9XM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Timesplitters": {
            "seriesName": "Timesplitters",
            "seriesColor": "red",
            "game": {
                "Timesplitters 2": {
                    "gameName": "Timesplitters 2",
                    "answers": ["timesplitters 2", "ts2", "time splitters 2"],
                    "songs": {
                        "ID_939": {
                            "title": "Siberia",
                            "link": "https://youtu.be/AsetlRd-nvs",
                            "difficulty": "1"
                        },
                        "ID_940": {
                            "title": "Streets",
                            "link": "https://youtu.be/pSMZOU7lcK0",
                            "difficulty": "1"
                        },
                        "ID_941": {
                            "title": "TS2 Credits",
                            "link": "https://youtu.be/t443lJnz5Yc",
                            "difficulty": "1"
                        },
                        "ID_942": {
                            "title": "Return To Planet X",
                            "link": "https://youtu.be/3SF1yMNJ38k",
                            "difficulty": "1"
                        },
                        "ID_943": {
                            "title": "Retro Racer",
                            "link": "https://youtu.be/ArPOxUVmQaA",
                            "difficulty": "1"
                        },
                        "ID_944": {
                            "title": "Notre Dame",
                            "link": "https://youtu.be/w5ESVLi6_aA",
                            "difficulty": "1"
                        },
                        "ID_945": {
                            "title": "TS2 Industrial Tileset",
                            "link": "https://youtu.be/k9KdfMqzSG0",
                            "difficulty": "1"
                        },
                        "ID_946": {
                            "title": "Nightclub",
                            "link": "https://youtu.be/MsIDtDJvEck",
                            "difficulty": "1"
                        },
                        "ID_947": {
                            "title": "NeoTokyo",
                            "link": "https://youtu.be/NkQyJ2i86Tc",
                            "difficulty": "1"
                        },
                        "ID_948": {
                            "title": "Mexican Mission",
                            "link": "https://youtu.be/wQ9q8DwBBus",
                            "difficulty": "1"
                        },
                        "ID_949": {
                            "title": "Ice Station",
                            "link": "https://youtu.be/AIUl0thIKO4",
                            "difficulty": "1"
                        },
                        "ID_950": {
                            "title": "Circus",
                            "link": "https://youtu.be/rBfeKLafDUA",
                            "difficulty": "1"
                        },
                        "ID_951": {
                            "title": "TS2 Mission Failed",
                            "link": "https://youtu.be/WAnDCZGjoUM",
                            "difficulty": "1"
                        },
                        "ID_952": {
                            "title": "TS2 Mission Success",
                            "link": "https://youtu.be/cfnzXfyh_ds",
                            "difficulty": "1"
                        },
                        "ID_953": {
                            "title": "Chinese",
                            "link": "https://youtu.be/8iyHxf9oIWI",
                            "difficulty": "1"
                        },
                        "ID_954": {
                            "title": "TS2 Title Screen",
                            "link": "https://youtu.be/EshcPGYQCfo",
                            "difficulty": "1"
                        },
                        "ID_955": {
                            "title": "Chicago",
                            "link": "https://youtu.be/cykxQLTDf4s",
                            "difficulty": "1"
                        },
                        "ID_956": {
                            "title": "Aztec Interior",
                            "link": "https://youtu.be/kZ89aGXaL9A",
                            "difficulty": "1"
                        },
                        "ID_957": {
                            "title": "TS2 Virtual Tileset",
                            "link": "https://youtu.be/n_veFSRBTlQ",
                            "difficulty": "1"
                        },
                        "ID_958": {
                            "title": "Aztec Exterior",
                            "link": "https://youtu.be/IL4fdgFA2Lg",
                            "difficulty": "1"
                        },
                        "ID_959": {
                            "title": "Ufopia",
                            "link": "https://youtu.be/_v95qlOXD5w",
                            "difficulty": "1"
                        },
                        "ID_960": {
                            "title": "Wild West",
                            "link": "https://youtu.be/HMKX00bfSJI",
                            "difficulty": "1"
                        },
                        "ID_961": {
                            "title": "Anaconda",
                            "link": "https://youtu.be/08G7iGJyZKI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "To The Moon": {
            "seriesName": "To The Moon",
            "seriesColor": "red",
            "game": {
                "To The Moon": {
                    "gameName": "To The Moon",
                    "answers": ["to the moon"],
                    "songs": {
                        "ID_933": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/LsAsJUTsYxs",
                            "difficulty": "1"
                        },
                        "ID_934": {
                            "title": "Moonwisher",
                            "link": "https://youtu.be/TbdGWchHUAc",
                            "difficulty": "1"
                        },
                        "ID_935": {
                            "title": "For River - Piano (Johnny's Version)",
                            "link": "https://youtu.be/9QfPDmzpC2Q",
                            "difficulty": "1"
                        },
                        "ID_936": {
                            "title": "Everything's Alright",
                            "link": "https://youtu.be/OkvVr6n1cGk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Trauma Center": {
            "seriesName": "Trauma Center",
            "seriesColor": "red",
            "game": {
                "Trauma Center: Under the Knife 2": {
                    "gameName": "Trauma Center: Under the Knife 2",
                    "answers": ["trauma center: under the knife 2", "trauma center 4", "trauma center under the knife 2", "trauma center utk 2"],
                    "songs": {
                        "ID_2253": {
                            "title": "Gentle Breeze",
                            "link": "https://youtu.be/ttMdwUbSpBg",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Uncharted": {
            "seriesName": "Uncharted",
            "seriesColor": "red",
            "game": {
                "Uncharted 3: Drake's Deception": {
                    "gameName": "Uncharted 3: Drake's Deception",
                    "answers": ["uncharted 3: drake's deception", "uncharted 3"],
                    "songs": {
                        "ID_1085": {
                            "title": "Nate's Theme 3.0",
                            "link": "https://youtu.be/QGwnYwTBV7I",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "UNDERTALE": {
            "seriesName": "UNDERTALE",
            "seriesColor": "red",
            "game": {
                "UNDERTALE": {
                    "gameName": "UNDERTALE",
                    "answers": ["undertale", "undertale"],
                    "songs": {
                        "ID_402": {
                            "title": "Once Upon A Time",
                            "link": "https://youtu.be/s7RRgF5Ve_E",
                            "difficulty": "1"
                        },
                        "ID_403": {
                            "title": "Start Menu",
                            "link": "https://youtu.be/kRT9vY2f7tg",
                            "difficulty": "1"
                        },
                        "ID_404": {
                            "title": "Your Best Friend",
                            "link": "https://youtu.be/83jGCWCcBzc",
                            "difficulty": "1"
                        },
                        "ID_405": {
                            "title": "Fallen Down",
                            "link": "https://youtu.be/B69GfSqEZEs",
                            "difficulty": "1"
                        },
                        "ID_406": {
                            "title": "Ruins",
                            "link": "https://youtu.be/QyPR77rg1to",
                            "difficulty": "1"
                        },
                        "ID_407": {
                            "title": "Uwa!! So Temperate♫",
                            "link": "https://youtu.be/rHU4rpQUshg",
                            "difficulty": "1"
                        },
                        "ID_408": {
                            "title": "Anticipation",
                            "link": "https://youtu.be/t62zFJATVPM",
                            "difficulty": "1"
                        },
                        "ID_409": {
                            "title": "Unnecessary Tension",
                            "link": "https://youtu.be/OSPbX0lkTmQ",
                            "difficulty": "1"
                        },
                        "ID_410": {
                            "title": "Enemy Approaching",
                            "link": "https://youtu.be/JRU6GnETSN4",
                            "difficulty": "1"
                        },
                        "ID_411": {
                            "title": "Ghost Fight",
                            "link": "https://youtu.be/Zz1bfhtKsHM",
                            "difficulty": "1"
                        },
                        "ID_412": {
                            "title": "Determination",
                            "link": "https://youtu.be/W1i4mTyidOc",
                            "difficulty": "1"
                        },
                        "ID_413": {
                            "title": "Home",
                            "link": "https://youtu.be/5_E_y1AWAfc",
                            "difficulty": "1"
                        },
                        "ID_414": {
                            "title": "Home (Music Box)",
                            "link": "https://youtu.be/ANEsXjSiYxI",
                            "difficulty": "1"
                        },
                        "ID_415": {
                            "title": "Heartache",
                            "link": "https://youtu.be/xflkF-sqNaM",
                            "difficulty": "1"
                        },
                        "ID_416": {
                            "title": "sans.",
                            "link": "https://youtu.be/Zzo6L3wsf8c",
                            "difficulty": "1"
                        },
                        "ID_417": {
                            "title": "Nyeh Heh Heh!",
                            "link": "https://youtu.be/FKdtstAo6iU",
                            "difficulty": "1"
                        },
                        "ID_418": {
                            "title": "Snowy",
                            "link": "https://youtu.be/8BIeGdBjJiU",
                            "difficulty": "1"
                        },
                        "ID_419": {
                            "title": "Uwa!! So Holiday♫",
                            "link": "https://youtu.be/XnG7HG8bmkU",
                            "difficulty": "1"
                        },
                        "ID_420": {
                            "title": "Dogbass",
                            "link": "https://youtu.be/a1OLiuNLpEs",
                            "difficulty": "1"
                        },
                        "ID_421": {
                            "title": "Mysterious Place",
                            "link": "https://youtu.be/gC11HJ99Egs",
                            "difficulty": "1"
                        },
                        "ID_422": {
                            "title": "Dogsong",
                            "link": "https://youtu.be/woPff-Tpkns",
                            "difficulty": "1"
                        },
                        "ID_423": {
                            "title": "Snowdin Town",
                            "link": "https://youtu.be/z6LmMCuGjfA",
                            "difficulty": "1"
                        },
                        "ID_424": {
                            "title": "Shop",
                            "link": "https://youtu.be/jCQ_5Gj6jlg",
                            "difficulty": "1"
                        },
                        "ID_425": {
                            "title": "Bonetrousle",
                            "link": "https://youtu.be/zdeZwAk6ULE",
                            "difficulty": "1"
                        },
                        "ID_426": {
                            "title": "Dating Start!",
                            "link": "https://youtu.be/dtYwq4aBr0E",
                            "difficulty": "1"
                        },
                        "ID_427": {
                            "title": "Dating Tense!",
                            "link": "https://youtu.be/ShK_Tj-Ee3Y",
                            "difficulty": "1"
                        },
                        "ID_428": {
                            "title": "Dating Fight!",
                            "link": "https://youtu.be/JQ8bpWkoC7A",
                            "difficulty": "1"
                        },
                        "ID_429": {
                            "title": "Premonition",
                            "link": "https://youtu.be/sQDiDDb1_9k",
                            "difficulty": "1"
                        },
                        "ID_430": {
                            "title": "Danger Mystery",
                            "link": "https://youtu.be/FhpJN6Khesw",
                            "difficulty": "1"
                        },
                        "ID_431": {
                            "title": "Undyne",
                            "link": "https://youtu.be/VH6HIHmhvQU",
                            "difficulty": "1"
                        },
                        "ID_432": {
                            "title": "Waterfall",
                            "link": "https://youtu.be/v712NiVK5uY",
                            "difficulty": "1"
                        },
                        "ID_433": {
                            "title": "Run!",
                            "link": "https://youtu.be/PPapt88_3aU",
                            "difficulty": "1"
                        },
                        "ID_434": {
                            "title": "Quiet Water",
                            "link": "https://youtu.be/AsvhQ-soLdg",
                            "difficulty": "1"
                        },
                        "ID_435": {
                            "title": "Memory",
                            "link": "https://youtu.be/eijdNQMYikY",
                            "difficulty": "1"
                        },
                        "ID_436": {
                            "title": "Bird That Carries You Over A Disproportionately Small Gap",
                            "link": "https://youtu.be/Z51lfE2k7jU",
                            "difficulty": "1"
                        },
                        "ID_437": {
                            "title": "Dummy!",
                            "link": "https://youtu.be/N3epEVMNJdY",
                            "difficulty": "1"
                        },
                        "ID_438": {
                            "title": "Pathetic House",
                            "link": "https://youtu.be/nu_ruGyTNEs",
                            "difficulty": "1"
                        },
                        "ID_439": {
                            "title": "Spooktune",
                            "link": "https://youtu.be/K1qjt_1geiI",
                            "difficulty": "1"
                        },
                        "ID_440": {
                            "title": "Spookwave",
                            "link": "https://youtu.be/o251comtNfk",
                            "difficulty": "1"
                        },
                        "ID_441": {
                            "title": "Ghouliday",
                            "link": "https://youtu.be/lWP9s44i-YA",
                            "difficulty": "1"
                        },
                        "ID_442": {
                            "title": "Chill",
                            "link": "https://youtu.be/D4Ximn7nZdc",
                            "difficulty": "1"
                        },
                        "ID_443": {
                            "title": "Thundersnail",
                            "link": "https://youtu.be/ewxyxByJPP0",
                            "difficulty": "1"
                        },
                        "ID_444": {
                            "title": "Temmie Village",
                            "link": "https://youtu.be/rNlyF43Te6U",
                            "difficulty": "1"
                        },
                        "ID_445": {
                            "title": "Tem Shop",
                            "link": "https://youtu.be/y_qHuDjE3CQ",
                            "difficulty": "1"
                        },
                        "ID_446": {
                            "title": "NGAHHH!!",
                            "link": "https://youtu.be/PLDyWLbuptQ",
                            "difficulty": "1"
                        },
                        "ID_447": {
                            "title": "Spear of Justice",
                            "link": "https://youtu.be/qrBB3_rFPjg",
                            "difficulty": "1"
                        },
                        "ID_448": {
                            "title": "Ooo",
                            "link": "https://youtu.be/vdE3R3BeH-I",
                            "difficulty": "1"
                        },
                        "ID_449": {
                            "title": "Alphys",
                            "link": "https://youtu.be/xG2AtyD3elY",
                            "difficulty": "1"
                        },
                        "ID_450": {
                            "title": "It's Showtime!",
                            "link": "https://youtu.be/9uwEAugeH8w",
                            "difficulty": "1"
                        },
                        "ID_451": {
                            "title": "Metal Crusher",
                            "link": "https://youtu.be/P0PpyUsvT9w",
                            "difficulty": "1"
                        },
                        "ID_452": {
                            "title": "Another Medium",
                            "link": "https://youtu.be/xLsuam9o9BA",
                            "difficulty": "1"
                        },
                        "ID_453": {
                            "title": "Uwa!! So HEATS!!?",
                            "link": "https://youtu.be/wyShNqRkQ1I",
                            "difficulty": "1"
                        },
                        "ID_454": {
                            "title": "Stronger Monsters",
                            "link": "https://youtu.be/HnmHqWU0z5M",
                            "difficulty": "1"
                        },
                        "ID_455": {
                            "title": "Hotel",
                            "link": "https://youtu.be/8wSYwqbp4S4",
                            "difficulty": "1"
                        },
                        "ID_456": {
                            "title": "Can You Really Call This A Hotel I Didn't Receive A Mint On My Pillow",
                            "link": "https://youtu.be/wRUdj1WgwIE",
                            "difficulty": "1"
                        },
                        "ID_457": {
                            "title": "Confession",
                            "link": "https://youtu.be/qzQyP99Q0pE",
                            "difficulty": "1"
                        },
                        "ID_458": {
                            "title": "Live Report",
                            "link": "https://youtu.be/4oi_XcH2sAw",
                            "difficulty": "1"
                        },
                        "ID_459": {
                            "title": "Death Report",
                            "link": "https://youtu.be/Z3ZULqzMutw",
                            "difficulty": "1"
                        },
                        "ID_460": {
                            "title": "Spider Dance",
                            "link": "https://youtu.be/YZ3XjVVNagU",
                            "difficulty": "1"
                        },
                        "ID_461": {
                            "title": "Wrong Enemy",
                            "link": "https://youtu.be/gTCSQevpuOg",
                            "difficulty": "1"
                        },
                        "ID_462": {
                            "title": "Oh! One True Love",
                            "link": "https://youtu.be/JlKHChbEcps",
                            "difficulty": "1"
                        },
                        "ID_463": {
                            "title": "Oh! Dungeon",
                            "link": "https://youtu.be/5aRE_J4UvYM",
                            "difficulty": "1"
                        },
                        "ID_464": {
                            "title": "It's Raining Somewhere Else",
                            "link": "https://youtu.be/zNd4apsr3WE",
                            "difficulty": "1"
                        },
                        "ID_465": {
                            "title": "CORE Approach",
                            "link": "https://youtu.be/qNi_6kXc2cc",
                            "difficulty": "1"
                        },
                        "ID_466": {
                            "title": "CORE",
                            "link": "https://youtu.be/tDuEWw648jo",
                            "difficulty": "1"
                        },
                        "ID_467": {
                            "title": "Last Episode!",
                            "link": "https://youtu.be/pzhYcYwg4vE",
                            "difficulty": "1"
                        },
                        "ID_468": {
                            "title": "Oh My...",
                            "link": "https://youtu.be/r-IvDZ8Wljo",
                            "difficulty": "1"
                        },
                        "ID_469": {
                            "title": "Death by Glamour",
                            "link": "https://youtu.be/2TgO-tN5wAM",
                            "difficulty": "1"
                        },
                        "ID_470": {
                            "title": "For the Fans",
                            "link": "https://youtu.be/6nOHNgotIPM",
                            "difficulty": "1"
                        },
                        "ID_471": {
                            "title": "Long Elevator",
                            "link": "https://youtu.be/XDQGK6ztbLs",
                            "difficulty": "1"
                        },
                        "ID_472": {
                            "title": "Undertale",
                            "link": "https://youtu.be/EBhFHJMVfiI",
                            "difficulty": "1"
                        },
                        "ID_473": {
                            "title": "Song That Might Play When You Fight Sans",
                            "link": "https://youtu.be/41YOknSl0zw",
                            "difficulty": "1"
                        },
                        "ID_474": {
                            "title": "The Choice",
                            "link": "https://youtu.be/C4Wv5M9JPao",
                            "difficulty": "1"
                        },
                        "ID_475": {
                            "title": "Small Shock",
                            "link": "https://youtu.be/EUJA3xRyVVM",
                            "difficulty": "1"
                        },
                        "ID_476": {
                            "title": "Barrier",
                            "link": "https://youtu.be/nJfzf--xqeQ",
                            "difficulty": "1"
                        },
                        "ID_477": {
                            "title": "Bergentrückung",
                            "link": "https://youtu.be/YivzBeEwzWI",
                            "difficulty": "1"
                        },
                        "ID_478": {
                            "title": "ASGORE",
                            "link": "https://youtu.be/hMa4hZQbrms",
                            "difficulty": "1"
                        },
                        "ID_479": {
                            "title": "You Idiot",
                            "link": "https://youtu.be/eOqq5kNBVoM",
                            "difficulty": "1"
                        },
                        "ID_480": {
                            "title": "Your Best Nightmare",
                            "link": "https://youtu.be/eUcThHVbrXY",
                            "difficulty": "1"
                        },
                        "ID_481": {
                            "title": "Finale",
                            "link": "https://youtu.be/yWjavxcGfqM",
                            "difficulty": "1"
                        },
                        "ID_482": {
                            "title": "An Ending",
                            "link": "https://youtu.be/l3sJ79C1Zyo",
                            "difficulty": "1"
                        },
                        "ID_483": {
                            "title": "She's Playing Piano",
                            "link": "https://youtu.be/zEAN2dna9To",
                            "difficulty": "1"
                        },
                        "ID_484": {
                            "title": "Here We Are",
                            "link": "https://youtu.be/y49b8aiQVBg",
                            "difficulty": "1"
                        },
                        "ID_485": {
                            "title": "Amalgam",
                            "link": "https://youtu.be/71u0i6J-Qes",
                            "difficulty": "1"
                        },
                        "ID_486": {
                            "title": "Fallen Down (Reprise)",
                            "link": "https://youtu.be/cGBMTAGzWPs",
                            "difficulty": "1"
                        },
                        "ID_487": {
                            "title": "Don't Give Up",
                            "link": "https://youtu.be/B4qdpiad_Q0",
                            "difficulty": "1"
                        },
                        "ID_488": {
                            "title": "Hopes and Dreams",
                            "link": "https://youtu.be/tz82xbLvK_k",
                            "difficulty": "1"
                        },
                        "ID_489": {
                            "title": "Burn in Despair!",
                            "link": "https://youtu.be/pumVu-WWhKM",
                            "difficulty": "1"
                        },
                        "ID_490": {
                            "title": "SAVE the World",
                            "link": "https://youtu.be/mZRP7nQkfrM",
                            "difficulty": "1"
                        },
                        "ID_491": {
                            "title": "His Theme",
                            "link": "https://youtu.be/IkOK8tdEsFY",
                            "difficulty": "1"
                        },
                        "ID_492": {
                            "title": "Final Power",
                            "link": "https://youtu.be/6nQbkE1DS0o",
                            "difficulty": "1"
                        },
                        "ID_493": {
                            "title": "Reunited",
                            "link": "https://youtu.be/WgRfPc1lfJk",
                            "difficulty": "1"
                        },
                        "ID_494": {
                            "title": "Menu (Full)",
                            "link": "https://youtu.be/brP9Q08kEfk",
                            "difficulty": "1"
                        },
                        "ID_495": {
                            "title": "Respite",
                            "link": "https://youtu.be/E-fyLcHg4iM",
                            "difficulty": "1"
                        },
                        "ID_496": {
                            "title": "Bring It In, Guys!",
                            "link": "https://youtu.be/x_P5smsopK0",
                            "difficulty": "1"
                        },
                        "ID_497": {
                            "title": "Last Goodbye",
                            "link": "https://youtu.be/5P8V4mP5RLg",
                            "difficulty": "1"
                        },
                        "ID_498": {
                            "title": "But the Earth Refused to Die",
                            "link": "https://youtu.be/ML6OV8fG74w",
                            "difficulty": "1"
                        },
                        "ID_499": {
                            "title": "Battle Against a True Hero",
                            "link": "https://youtu.be/aWBtpBwzzdM",
                            "difficulty": "1"
                        },
                        "ID_500": {
                            "title": "Power of -NEO-",
                            "link": "https://youtu.be/mwrUem9vM_A",
                            "difficulty": "1"
                        },
                        "ID_501": {
                            "title": "Megalovania",
                            "link": "https://youtu.be/c5daGZ96QGU",
                            "difficulty": "1"
                        },
                        "ID_502": {
                            "title": "Good Night",
                            "link": "https://youtu.be/BGpJrPY563A",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "VA-11 HALL-A": {
            "seriesName": "VA-11 HALL-A",
            "seriesColor": "red",
            "game": {
                "VA-11 HALL-A": {
                    "gameName": "VA-11 HALL-A",
                    "answers": ["va-11 hall-a", "vallhalla", "va11 halla"],
                    "songs": {
                        "ID_1295": {
                            "title": "Hopes and Dreams",
                            "link": "https://youtu.be/utYouad0v5E",
                            "difficulty": "1"
                        },
                        "ID_1296": {
                            "title": "Welcome to VA-11 Hall-A",
                            "link": "https://youtu.be/2Cz6Y4iqUSA",
                            "difficulty": "1"
                        },
                        "ID_1297": {
                            "title": "Commencing Simulation",
                            "link": "https://youtu.be/WBT8aCfs5GQ",
                            "difficulty": "1"
                        },
                        "ID_1298": {
                            "title": "Friendly Conversation",
                            "link": "https://youtu.be/OOlWaWTlfuI",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "VOEZ": {
            "seriesName": "VOEZ",
            "seriesColor": "red",
            "game": {
                "VOEZ": {
                    "gameName": "VOEZ",
                    "answers": ["voez"],
                    "songs": {
                        "ID_1730": {
                            "title": "Colorful Voice",
                            "link": "https://youtu.be/K96SVqa0Puc",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "VVVVVV": {
            "seriesName": "VVVVVV",
            "seriesColor": "red",
            "game": {
                "VVVVVV": {
                    "gameName": "VVVVVV",
                    "answers": ["vvvvvv", "v"],
                    "songs": {
                        "ID_908": {
                            "title": "Presenting VVVVVV",
                            "link": "https://youtu.be/tdE3n-pxF5Y",
                            "difficulty": "1"
                        },
                        "ID_909": {
                            "title": "Pushing Onwards",
                            "link": "https://youtu.be/25m3Gk7mRQM",
                            "difficulty": "1"
                        },
                        "ID_910": {
                            "title": "Path Complete",
                            "link": "https://youtu.be/9QjRjmK-tXc",
                            "difficulty": "1"
                        },
                        "ID_911": {
                            "title": "Passion For Exploring",
                            "link": "https://youtu.be/C0j6pe043L4",
                            "difficulty": "1"
                        },
                        "ID_912": {
                            "title": "Positive Force",
                            "link": "https://youtu.be/Tp3qiOKuEBM",
                            "difficulty": "1"
                        },
                        "ID_913": {
                            "title": "Predestined Fate",
                            "link": "https://youtu.be/yv_lcgLFJmc",
                            "difficulty": "1"
                        },
                        "ID_914": {
                            "title": "Potential For Anything",
                            "link": "https://youtu.be/Uj8MsbgpjaQ",
                            "difficulty": "1"
                        },
                        "ID_915": {
                            "title": "Pressure Cooker",
                            "link": "https://youtu.be/L0gOUmQ39uk",
                            "difficulty": "1"
                        },
                        "ID_916": {
                            "title": "Popular Potpourri",
                            "link": "https://youtu.be/T1zxRWDb4V4",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Wario Ware": {
            "seriesName": "Wario Ware",
            "seriesColor": "red",
            "game": {
                "Wario Ware: Smooth Moves": {
                    "gameName": "Wario Ware: Smooth Moves",
                    "answers": ["wario ware: smooth moves", "wario ware wii", "wario ware smooth moves", "wario ware: smooth moves", "smooth moves"],
                    "songs": {
                        "ID_704": {
                            "title": "Level Select",
                            "link": "https://youtu.be/pZ2Y98ZRxyA",
                            "difficulty": "1"
                        },
                        "ID_705": {
                            "title": "Tomorrow Hill",
                            "link": "https://youtu.be/KTjltCVOMXA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Wii Sports": {
            "seriesName": "Wii Sports",
            "seriesColor": "red",
            "game": {
                "Wii Sports": {
                    "gameName": "Wii Sports",
                    "answers": ["wii sports"],
                    "songs": {
                        "ID_686": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/mYqkO6M4AKw",
                            "difficulty": "1"
                        },
                        "ID_687": {
                            "title": "Main Menu",
                            "link": "https://youtu.be/txqArZdIvR8",
                            "difficulty": "1"
                        },
                        "ID_688": {
                            "title": "Tennis (Result)",
                            "link": "https://youtu.be/7ODx9ZIrZ4A",
                            "difficulty": "1"
                        },
                        "ID_689": {
                            "title": "Baseball (Results)",
                            "link": "https://youtu.be/JbHOEcWFwww",
                            "difficulty": "1"
                        },
                        "ID_690": {
                            "title": "Bowling (Results)",
                            "link": "https://youtu.be/ViCoTVtQU9E",
                            "difficulty": "1"
                        },
                        "ID_691": {
                            "title": "Golf (Results)",
                            "link": "https://youtu.be/jzibJ4L88CQ",
                            "difficulty": "1"
                        },
                        "ID_692": {
                            "title": "Boxing (Results)",
                            "link": "https://youtu.be/-zzxrtOCyac",
                            "difficulty": "1"
                        },
                        "ID_693": {
                            "title": "Training Mode",
                            "link": "https://youtu.be/L9-7h5F6LPk",
                            "difficulty": "1"
                        }
                    }
                },
                "Wii Sports Resort": {
                    "gameName": "Wii Sports Resort",
                    "answers": ["wii sports resort"],
                    "songs": {
                        "ID_694": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/xnxqn22-qMk",
                            "difficulty": "1"
                        },
                        "ID_695": {
                            "title": "Select Screen",
                            "link": "https://youtu.be/x1WE4T8pdJs",
                            "difficulty": "1"
                        },
                        "ID_696": {
                            "title": "Tutorial",
                            "link": "https://youtu.be/F6poHenvGGA",
                            "difficulty": "1"
                        },
                        "ID_697": {
                            "title": "Archery: Results",
                            "link": "https://youtu.be/x7Lw1SO9JIw",
                            "difficulty": "1"
                        },
                        "ID_698": {
                            "title": "Bowling: Results",
                            "link": "https://youtu.be/7VO35gW1cLc",
                            "difficulty": "1"
                        },
                        "ID_699": {
                            "title": "Basketball: Results",
                            "link": "https://youtu.be/fhqXLNKAa1E",
                            "difficulty": "1"
                        },
                        "ID_700": {
                            "title": "Golf: Results",
                            "link": "https://youtu.be/kWvaaunH254",
                            "difficulty": "1"
                        },
                        "ID_701": {
                            "title": "Ping-Pong: Winning Results",
                            "link": "https://youtu.be/Hj-6x90Rp7Y",
                            "difficulty": "1"
                        },
                        "ID_702": {
                            "title": "Swordplay: Winning Results 1",
                            "link": "https://youtu.be/PtOfWEG-YMc",
                            "difficulty": "1"
                        },
                        "ID_703": {
                            "title": "Swordplay: Losing Results",
                            "link": "https://youtu.be/OgjJou9BSVM",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Worms": {
            "seriesName": "Worms",
            "seriesColor": "red",
            "game": {
                "Worms 3D": {
                    "gameName": "Worms 3D",
                    "answers": ["worms 3d"],
                    "songs": {
                        "ID_2227": {
                            "title": "Menu 1",
                            "link": "https://youtu.be/XGPgQjmZH2k",
                            "difficulty": "1"
                        },
                        "ID_2228": {
                            "title": "Title",
                            "link": "https://youtu.be/65LXOUMZcu0",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Xeno": {
            "seriesName": "Xeno",
            "seriesColor": "red",
            "game": {
                "Xenoblade Chronicles 2": {
                    "gameName": "Xenoblade Chronicles 2",
                    "answers": ["xenoblade chronicles 2", "xb 2", "xenoblade 2"],
                    "songs": {
                        "ID_1672": {
                            "title": "Gormott",
                            "link": "https://youtu.be/60Ih-D49QJE",
                            "difficulty": "1"
                        },
                        "ID_1673": {
                            "title": "Counterattack",
                            "link": "https://youtu.be/aElM_uHL00E",
                            "difficulty": "1"
                        },
                        "ID_1674": {
                            "title": "Garfont Mercenaries",
                            "link": "https://youtu.be/gwzY4UMbNMQ",
                            "difficulty": "1"
                        },
                        "ID_1675": {
                            "title": "Mor Ardain",
                            "link": "https://youtu.be/Tx3AbguQZHU",
                            "difficulty": "1"
                        },
                        "ID_1676": {
                            "title": "Where We Used To Be (Title Screen)",
                            "link": "https://youtu.be/KDukhKF36nw",
                            "difficulty": "1"
                        },
                        "ID_1677": {
                            "title": "Still, Move Forward!",
                            "link": "https://youtu.be/KDukhKF36nw",
                            "difficulty": "1"
                        },
                        "ID_1678": {
                            "title": "Battle!!",
                            "link": "https://youtu.be/-ohxjSV7mhw",
                            "difficulty": "1"
                        },
                        "ID_1679": {
                            "title": "You Will Recall Our Names",
                            "link": "https://youtu.be/NzZ2rUM9DEg",
                            "difficulty": "1"
                        }
                    }
                },
                "Xenogears": {
                    "gameName": "Xenogears",
                    "answers": ["xenogears"],
                    "songs": {
                        "ID_2411": {
                            "title": "Fuse",
                            "link": "https://youtu.be/NfEUfl1kzbw",
                            "difficulty": "1"
                        },
                        "ID_2412": {
                            "title": "Shevat -The Wind Calls-",
                            "link": "https://youtu.be/nNsAJ1OR70E",
                            "difficulty": "1"
                        },
                        "ID_2413": {
                            "title": "Shattering Egg of Dreams",
                            "link": "https://youtu.be/obHR0ed_7uo",
                            "difficulty": "1"
                        },
                        "ID_2414": {
                            "title": "Awakening",
                            "link": "https://youtu.be/beux0dXL5SI",
                            "difficulty": "1"
                        },
                        "ID_2415": {
                            "title": "June Mermaid",
                            "link": "https://youtu.be/LYCmED_YDqs",
                            "difficulty": "1"
                        },
                        "ID_2416": {
                            "title": "Omen",
                            "link": "https://youtu.be/FC43WgvkPIo",
                            "difficulty": "1"
                        },
                        "ID_2417": {
                            "title": "Pray for the People's Joy",
                            "link": "https://youtu.be/gX76p5Cx4ys",
                            "difficulty": "1"
                        },
                        "ID_2418": {
                            "title": "Knight of Fire (Boss Battle Music)",
                            "link": "https://youtu.be/aDb5WGZQMtY",
                            "difficulty": "1"
                        },
                        "ID_2419": {
                            "title": "One Who Bares Fangs at God",
                            "link": "https://youtu.be/2CwNsBhI8yk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Yakuza": {
            "seriesName": "Yakuza",
            "seriesColor": "red",
            "game": {
                "Yakuza 0": {
                    "gameName": "Yakuza 0",
                    "answers": ["yakuza 0"],
                    "songs": {
                        "ID_2243": {
                            "title": "24-hour Cinderella",
                            "link": "https://youtu.be/VZk0SChlebs",
                            "difficulty": "1"
                        },
                        "ID_2244": {
                            "title": "Baka Mitai",
                            "link": "https://youtu.be/F_rJFbWrK3Y",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Yoshi": {
            "seriesName": "Yoshi",
            "seriesColor": "red",
            "game": {
                "Yoshi's Story": {
                    "gameName": "Yoshi's Story",
                    "answers": ["yoshi's story", "yoshis story"],
                    "songs": {
                        "ID_2229": {
                            "title": "Love is in the Air",
                            "link": "https://youtu.be/uS74ixjy7PA",
                            "difficulty": "1"
                        },
                        "ID_2230": {
                            "title": "On the Beach",
                            "link": "https://youtu.be/8Uhxeihe6AM",
                            "difficulty": "1"
                        },
                        "ID_2231": {
                            "title": "Yoshi's Song",
                            "link": "https://youtu.be/d2c1qLVb2JI",
                            "difficulty": "1"
                        },
                        "ID_2232": {
                            "title": "Yoshi's Story",
                            "link": "https://youtu.be/Q6eZl-EAQlI",
                            "difficulty": "1"
                        }
                    }
                },
                "Yoshi's Woolly World": {
                    "gameName": "Yoshi's Woolly World",
                    "answers": ["yoshi's woolly world", "woolly world", "yoshis woolly world"],
                    "songs": {
                        "ID_2053": {
                            "title": "Bounceabout Woods",
                            "link": "https://youtu.be/mdV0eFN15zU",
                            "difficulty": "1"
                        },
                        "ID_2054": {
                            "title": "Shy But Deadly",
                            "link": "https://youtu.be/qySn2yDBKUg",
                            "difficulty": "1"
                        },
                        "ID_2055": {
                            "title": "Clawdaddy Beach",
                            "link": "https://youtu.be/dYKv8ogoXTU",
                            "difficulty": "1"
                        },
                        "ID_2056": {
                            "title": "Lava Scarves and Red Hot Blargss",
                            "link": "https://youtu.be/YqlIM2FiMGw",
                            "difficulty": "1"
                        },
                        "ID_2057": {
                            "title": "Yoshi and Cookies",
                            "link": "https://youtu.be/TT4mu-XWIlo",
                            "difficulty": "1"
                        },
                        "ID_2058": {
                            "title": "Monkeying Round and Round",
                            "link": "https://youtu.be/41hrrrL7oPY",
                            "difficulty": "1"
                        },
                        "ID_2059": {
                            "title": "Vs Naval Piranha",
                            "link": "https://youtu.be/R7RBXllM3oA",
                            "difficulty": "1"
                        },
                        "ID_2060": {
                            "title": "Title Screen",
                            "link": "https://youtu.be/tHpvvl-9NZA",
                            "difficulty": "1"
                        },
                        "ID_2061": {
                            "title": "Welcome to Yoshi's Woolly World!",
                            "link": "https://youtu.be/p0cgCVsq5oA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "You Have to Burn the Rope": {
            "seriesName": "You Have to Burn the Rope",
            "seriesColor": "red",
            "game": {
                "You Have to Burn the Rope": {
                    "gameName": "You Have to Burn the Rope",
                    "answers": ["you have to burn the rope", "burn the rope"],
                    "songs": {
                        "ID_857": {
                            "title": "Now You're a Hero",
                            "link": "https://youtu.be/VmuiwOGi5gA",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Ys": {
            "seriesName": "Ys",
            "seriesColor": "red",
            "game": {
                "Ys VIII -Lacrimosa of DANA-": {
                    "gameName": "Ys VIII -Lacrimosa of DANA-",
                    "answers": ["ys viii -lacrimosa of dana-", "ys 8", "ys8", "ys viii", "lacrimosa of dana", "ys 8 lacrimosa of dana"],
                    "songs": {
                        "ID_2233": {
                            "title": "Ricordo",
                            "link": "https://youtu.be/z-bXi4L6jZQ",
                            "difficulty": "1"
                        },
                        "ID_2234": {
                            "title": "Gens d'Armes",
                            "link": "https://youtu.be/EDllGOPr-Vg",
                            "difficulty": "1"
                        },
                        "ID_2235": {
                            "title": "Sunshine Coastline",
                            "link": "https://youtu.be/HvBla5NUlvk",
                            "difficulty": "1"
                        }
                    }
                }
            }
        },
        "Zero Escape": {
            "seriesName": "Zero Escape",
            "seriesColor": "red",
            "game": {
                "9 Hours, 9 Persons, 9 Doors": {
                    "gameName": "9 Hours, 9 Persons, 9 Doors",
                    "answers": ["9 hours, 9 persons, 9 doors", "999", "9 hours 9 persons 9 doors"],
                    "songs": {
                        "ID_20": {
                            "title": "Main Theme",
                            "link": "https://youtu.be/g9Qb3yDrj0c",
                            "difficulty": "1"
                        },
                        "ID_21": {
                            "title": "Recollection",
                            "link": "https://youtu.be/HlC9XkvWvKo",
                            "difficulty": "1"
                        },
                        "ID_22": {
                            "title": "Septenary Game",
                            "link": "https://youtu.be/hzQ3jse4ars",
                            "difficulty": "1"
                        },
                        "ID_23": {
                            "title": "Morphogenetic Sorrow",
                            "link": "https://youtu.be/U71iXAp0WRk",
                            "difficulty": "1"
                        },
                        "ID_24": {
                            "title": "Who Is Zero?",
                            "link": "https://youtu.be/rNnofSIGNWQ",
                            "difficulty": "1"
                        }
                    }
                },
                "Virtue's Last Reward": {
                    "gameName": "Virtue's Last Reward",
                    "answers": ["virtue's last reward", "virtues last reward", "vlr"],
                    "songs": {
                        "ID_25": {
                            "title": "Virtue's Last Reward ~Orchestra~",
                            "link": "https://youtu.be/9VSCJAWEPRo",
                            "difficulty": "1"
                        },
                        "ID_26": {
                            "title": "Biotope",
                            "link": "https://youtu.be/nJKKOpiKJGY",
                            "difficulty": "1"
                        },
                        "ID_27": {
                            "title": "Monitor",
                            "link": "https://youtu.be/E1yVqJA3u4Y",
                            "difficulty": "1"
                        },
                        "ID_28": {
                            "title": "Portentousness",
                            "link": "https://youtu.be/rp75JGQCW2Y",
                            "difficulty": "1"
                        },
                        "ID_29": {
                            "title": "Clarification",
                            "link": "https://youtu.be/GJvZwZQV7fs",
                            "difficulty": "1"
                        },
                        "ID_30": {
                            "title": "Confession",
                            "link": "https://youtu.be/J8E20i-dLBI",
                            "difficulty": "1"
                        },
                        "ID_31": {
                            "title": "Demise",
                            "link": "https://youtu.be/qkTmE6zyW9Y",
                            "difficulty": "1"
                        },
                        "ID_32": {
                            "title": "Blue Bird Lamentation",
                            "link": "https://youtu.be/gFJ1r6_4mW4",
                            "difficulty": "1"
                        }
                    }
                },
                "Zero Time Dilemma": {
                    "gameName": "Zero Time Dilemma",
                    "answers": ["zero time dilemma", "zero time dilemma", "ztd"],
                    "songs": {
                        "ID_33": {
                            "title": "Quondam Monitors [Monty Hall] [Monitor 2nd Mix]",
                            "link": "https://youtu.be/WzNS8Ah139Y",
                            "difficulty": "1"
                        },
                        "ID_34": {
                            "title": "Tough Decision [Make Your Choice]",
                            "link": "https://youtu.be/X_8o4si2A5w",
                            "difficulty": "1"
                        },
                        "ID_35": {
                            "title": "Nostalgic Scenery",
                            "link": "https://youtu.be/7eWaxTNbPJk",
                            "difficulty": "1"
                        },
                        "ID_36": {
                            "title": "Transient Tranquility",
                            "link": "https://youtu.be/N_WlaxEkyYY",
                            "difficulty": "1"
                        },
                        "ID_37": {
                            "title": "Morphogenetic Sorrow [Mix 3] ZTD Ver.",
                            "link": "https://youtu.be/fWYdW5JPQ7c",
                            "difficulty": "1"
                        },
                        "ID_38": {
                            "title": "Blue Bird",
                            "link": "https://youtu.be/4QOXPiSr8oQ",
                            "difficulty": "1"
                        },
                        "ID_39": {
                            "title": "Transient Tranquility",
                            "link": "https://youtu.be/N_WlaxEkyYY",
                            "difficulty": "1"
                        },
                        "ID_40": {
                            "title": "Zero Times",
                            "link": "https://youtu.be/4jBNXIWE7oE",
                            "difficulty": "1"
                        },
                        "ID_41": {
                            "title": "Blue Bird",
                            "link": "https://youtu.be/4QOXPiSr8oQ",
                            "difficulty": "1"
                        },
                        "ID_42": {
                            "title": "Zero Times",
                            "link": "https://youtu.be/4jBNXIWE7oE",
                            "difficulty": "1"
                        }
                    }
                }
            }
        }
    }
}`

const ALLSONGS = JSON.parse( ALLSONGS_JSON );