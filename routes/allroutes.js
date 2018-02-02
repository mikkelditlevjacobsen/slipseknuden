
module.exports = function (app) { // module.exports opslutter her routesne

    // Index page
    app.get('/', function (req, res) {
        res.render('pages/index', {
            side: "index"
        });
    });


    app.get('/garanti', function (req, res) {
        res.render('pages/index', {
            side: "garanti"
        });
    });


    app.get('/kontakt', function (req, res) {
        res.render('pages/index', {
            side: "kontakt"
        });
    });

    app.get('/nyheder', function (req, res) {
        res.render('pages/index', {
            side: "nyheder"
        });
    });


    app.get('/produkter', function (req, res) {
        var produkter = [
            {
                "varenr": 1,
                "navn": "Klassisk Brun",
                "pris": 900,
                "producent": "Shoon Slips",
                "beskrivelse": {
                    "tekst": "Et klassisk slips til den brune habit",
                    "billede": "1_klassisk_brun.jpg"
                }
            },
            {
                "varenr": 2,
                "navn": "Stribet Stil",
                "pris": 650,
                "producent": "Shoon Slips",
                "beskrivelse": {
                    "tekst": "Sort stribet - et rigtigt direktørslips",
                    "billede": "2_stribet_stil.jpg"
                }
            },
            {
                "varenr": 3,
                "navn": "Brudgommens favorit",
                "pris": 350,
                "producent": "Korea Special",
                "beskrivelse": {
                    "billede": "3_brudgommens_favorit.jpg",
                    "tekst": "Skal du giftes? så skal det være det her!"
                }
            },
            {
                "varenr": 4,
                "navn": "Sølvpil",
                "pris": 600,
                "producent": "US Imports",
                "beskrivelse": {
                    "tekst": "Er du til fest og farver så vælg dette fantastiske slips.",
                    "billede": "4_soelvpil.jpg"
                }
            },
            {
                "varenr": 5,
                "navn": "Rød F11",
                "pris": 700,
                "producent": "US Imports",
                "beskrivelse": {
                    "tekst": "Slipset til den store charmør",
                    "billede": "5_roed_f11.jpg"
                }
            },
            {
                "varenr": 6,
                "navn": "Blå kant",
                "pris": 560,
                "producent": "Sleek Fabrics UK",
                "beskrivelse": {
                    "billede": "6_blaa_kant.jpg",
                    "tekst": "køb vores blå slips til barnedåben!"
                }
            },
            {
                "varenr": 7,
                "navn": "Fars favorit",
                "pris": 900,
                "producent": "Sleek Fabrics UK",
                "beskrivelse": {
                    "billede": "7_fars_favorit.jpg",
                    "tekst": "klassisk slips med et twist"
                }
            },
            {
                "varenr": 8,
                "navn": "Sort nat",
                "pris": 800,
                "producent": "Sleek Fabrics UK",
                "beskrivelse": {
                    "tekst": "slipset til den ultra stilbeviste",
                    "billede": "8_sort_nat.jpg"
                }
            },
            {
                "varenr": 9,
                "navn": "Blue",
                "pris": 450,
                "producent": "Shoon Slips",
                "beskrivelse": {
                    "tekst": "Blåt med striber.",
                    "billede": "9_blue.jpg"
                }
            },
            {
                "varenr": 10,
                "navn": "Tern",
                "pris": 800,
                "producent": "Sleek Fabrics UK",
                "beskrivelse": {
                    "tekst": "Perfekt til den klassiske blå skjorte.",
                    "billede": "10_tern.jpg"
                }
            },
            {
                "varenr": 11,
                "navn": "Ræven",
                "pris": 790,
                "producent": "US Imports",
                "beskrivelse": {
                    "tekst": "Lækkert ræverødt slips.",
                    "billede": "11_raeven.jpg"
                }
            },
            {
                "varenr": 12,
                "navn": "Kinini",
                "pris": 780,
                "producent": "Korea Special",
                "beskrivelse": {
                    "tekst": "Et lækkert slips i høj kvalitet",
                    "billede": "12_kinini.jpg"
                }
            },
            {
                "varenr": 13,
                "navn": "Europa",
                "pris": 500,
                "producent": "Sleek Fabrics UK",
                "beskrivelse": {
                    "tekst": "et lækkert slips i en super kvalitet.",
                    "billede": "13_europa.jpg"
                }
            },
            {
                "varenr": 14,
                "navn": "Kina",
                "pris": 800,
                "producent": "Korea Special",
                "beskrivelse": {
                    "tekst": "Et super slips fra vores kinesiske designer",
                    "billede": "14_kina.jpg"
                }
            }
        ]
        res.render('pages/index', {
            side: "produkter",
            produkter: produkter
        });
    });


    app.get('/omslipseknuden', function (req, res) {

        var omslips = [
            {
                "navn": "Anders Hansen",
                "stilling": "Direktør",
                "mail": "chefen@slipseknuden.eu ",
                "billede": "anders.jpg"
            },
            {
                "navn": "Annelise Johnson",
                "stilling": "Sekretær",
                "mail": "info@@slipseknuden.eu",
                "billede": "annelise.jpg"
            },
            {
                "navn": "Jan Frandsen",
                "stilling": "Sælger",
                "mail": "jf@slipseknuden.eu",
                "billede": "jan.jpg"
            },
            {
                "navn": "Joe Baylie",
                "stilling": "Sælger",
                "mail": "jb@slipseknuden.eu",
                "billede": "joe.jpg"
            }
        ]
        console.log(omslips)
        res.render('pages/index', {
            side: "omslipseknuden", 
            omslips: omslips
        });
    });


};