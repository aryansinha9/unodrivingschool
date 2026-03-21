interface TestCentreDef {
    name: string;
    address: string;
    mapUrl: string;
}

export const OFFICIAL_CENTRES: Record<string, TestCentreDef> = {
    "Carseldine": {
        name: "Carseldine Customer Service Centre",
        address: "Carseldine Customer Service Centre — 532 Beams Rd, Carseldine QLD 4034",
        mapUrl: "https://maps.google.com/maps?q=Carseldine+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "Chermside": {
        name: "Chermside Customer Service Centre",
        address: "Chermside Customer Service Centre — Gympie Rd & Hamilton Rd, Chermside QLD 4032",
        mapUrl: "https://maps.google.com/maps?q=Chermside+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "Toowong": {
        name: "Toowong Customer Service Centre",
        address: "Toowong Customer Service Centre — 170 Milton Rd, Toowong QLD 4066",
        mapUrl: "https://maps.google.com/maps?q=Toowong+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "Sherwood": {
        name: "Sherwood Customer Service Centre",
        address: "Sherwood Customer Service Centre — 400 Sherwood Rd, Sherwood QLD 4075",
        mapUrl: "https://maps.google.com/maps?q=Sherwood+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "Greenslopes": {
        name: "Greenslopes Customer Service Centre",
        address: "Greenslopes Customer Service Centre — 700 Logan Rd, Greenslopes QLD 4120",
        mapUrl: "https://maps.google.com/maps?q=Greenslopes+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "MacGregor": {
        name: "MacGregor Customer Service Centre",
        address: "MacGregor Customer Service Centre — 522 Kessels Rd, MacGregor QLD 4109",
        mapUrl: "https://maps.google.com/maps?q=MacGregor+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "Logan Central / Beenleigh": {
        name: "Logan Central / Beenleigh Customer Service Centre",
        address: "Logan Central Customer Service Centre — 43-45 Wembley Rd, Logan Central QLD 4114",
        mapUrl: "https://maps.google.com/maps?q=Logan+Central+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    },
    "Wynnum": {
        name: "Wynnum Customer Service Centre",
        address: "Wynnum Customer Service Centre — 143 Florence St, Wynnum QLD 4178",
        mapUrl: "https://maps.google.com/maps?q=Wynnum+Customer+Service+Centre,+QLD,+Australia&output=embed&z=15"
    }
};

export const testCentreMap: Record<string, string> = {
    // North Brisbane -> Carseldine
    "zillmere": "Carseldine", "wooloowin": "Carseldine", "aspley": "Carseldine", 
    "chermside-west": "Carseldine", "wavell-heights": "Carseldine", "nundah": "Carseldine", 
    "northgate": "Carseldine", "geebung": "Carseldine", "banyo": "Carseldine", 
    "albion": "Carseldine", "virginia": "Carseldine", "taigum": "Carseldine", 
    "bracken-ridge": "Carseldine", "bald-hills": "Carseldine", "bridgeman-downs": "Carseldine", 
    "boondall": "Carseldine", "carseldine": "Carseldine", "mitchelton": "Carseldine", 
    "everton-park": "Carseldine", "ferny-grove": "Carseldine", "keperra": "Carseldine", 
    "mcdowall": "Carseldine", "lutwyche": "Carseldine", "kedron": "Carseldine", 
    "grange": "Carseldine", "windsor": "Carseldine", "newmarket": "Carseldine", 
    "kalinga": "Carseldine", "hendra": "Carseldine", "gaythorne": "Carseldine", 
    "clayfield": "Carseldine", "eagle-farm": "Carseldine", "deagon": "Carseldine", 
    "fitzgibbon": "Carseldine", "sandgate": "Carseldine", "shorncliffe": "Carseldine", 
    "nudgee": "Carseldine", "nudgee-beach": "Carseldine", "petrie-terrace": "Carseldine", 
    "bowen-hills": "Carseldine", "newstead": "Carseldine", "ascot": "Carseldine",
    
    // North-East / Northern suburbs -> Chermside
    "chermside": "Chermside", // Chermside listed in prompt? Wait, let's just make it Chermside. Prompt says North Brisbane -> Carseldine but Chermside is in "North-East / Northern suburbs" -> Chermside Customer Service Centre
    "brighton": "Chermside",
    "gordon-park": "Chermside",
    
    // West / Inner Brisbane -> Toowong
    "toowong": "Toowong", "taringa": "Toowong", "st-lucia": "Toowong", "milton": "Toowong", 
    "bardon": "Toowong", "auchenflower": "Toowong", "ashgrove": "Toowong", "kelvin-grove": "Toowong", 
    "highgate-hill": "Toowong", "west-end": "Toowong", "paddington": "Toowong", "spring-hill": "Toowong", 
    "brisbane-city": "Toowong", "fortitude-valley": "Toowong", "new-farm": "Toowong", 
    "teneriffe": "Toowong", "kangaroo-point": "Toowong", "herston": "Toowong", 
    "stones-corner": "Toowong", "coorparoo": "Toowong", "fairfield": "Toowong", "dutton-park": "Toowong", 
    "yeronga": "Toowong", "yeerongpilly": "Toowong", "woolloongabba": "Toowong", "upper-kedron": "Toowong", 
    "upper-brookfield": "Toowong", "the-gap": "Toowong", "chapel-hill": "Toowong", "indooroopilly": "Toowong", 
    "fig-tree-pocket": "Toowong", "kenmore": "Toowong", "kenmore-hills": "Toowong", "pullenvale": "Toowong", 
    "pinjarra-hills": "Toowong", "brookfield": "Toowong", "moggill": "Toowong", "mount-coot-tha": "Toowong", 
    "mount-crosby": "Toowong", "kholo": "Toowong", "lake-manchester": "Toowong", "bellbowie": "Toowong", 
    "bellbowrie": "Toowong", "anstead": "Toowong", "red-hill": "Toowong", "south-brisbane": "Toowong",

    // South-West / Western suburbs -> Sherwood
    "sherwood": "Sherwood", "sinnamon-park": "Sherwood", "jindalee": "Sherwood", 
    "jamboree-heights": "Sherwood", "middle-park": "Sherwood", "corinda": "Sherwood", 
    "chelmer": "Sherwood", "tennyson": "Sherwood", "mount-ommaney": "Sherwood", 
    "riverhills": "Sherwood", "oxley": "Sherwood", "richlands": "Sherwood", "rocklea": "Sherwood", 
    "darra": "Sherwood", "durack": "Sherwood", "inala": "Sherwood", "seventeen-mile-rocks": "Sherwood", 
    "wacol": "Sherwood",

    // South / South-East Brisbane -> Greenslopes
    "greenslopes": "Greenslopes", "holland-park": "Greenslopes", "holland-park-west": "Greenslopes", 
    "carina": "Greenslopes", "carina-heights": "Greenslopes", "carindale": "Greenslopes", 
    "chandler": "Greenslopes", "belmont": "Greenslopes", "balmoral": "Greenslopes", 
    "camp-hill": "Greenslopes", "cannon-hill": "Greenslopes", "bulimba": "Greenslopes", 
    "gumdale": "Greenslopes", "hawthorne": "Greenslopes", "manly": "Greenslopes", 
    "manly-west": "Greenslopes", "tingalpa": "Greenslopes", "seven-hills": "Greenslopes", 
    "ransome": "Greenslopes", "wakerley": "Greenslopes", "wynnum": "Wynnum", // Wynnum is assigned below but listing here if there's overlap. Prompt says Wynnum -> Wynnum CSC
    "wynnum-west": "Greenslopes", "norman-park": "Greenslopes", "morningside": "Greenslopes", 
    "east-brisbane": "Greenslopes", // East Brisbane assigned Toowong / Greenslopes, Greenslopes preferred by user 4th group

    // South / South-East inner suburbs -> MacGregor
    "macgregor": "MacGregor", "eight-mile-plains": "MacGregor", "upper-mount-gravatt": "MacGregor", 
    "mount-gravatt": "MacGregor", "mount-gravatt-east": "MacGregor", "nathan": "MacGregor", 
    "robertson": "MacGregor", "wishart": "MacGregor", "mansfield": "MacGregor", 
    "mackenzie": "MacGregor", "kuraby": "MacGregor", "karawatha": "MacGregor", 
    "larapinta": "MacGregor", "calamvale": "MacGregor", "stretton": "MacGregor", "sumner": "MacGregor", 
    "sunnybank": "MacGregor", "sunnybank-hills": "MacGregor", "runcorn": "MacGregor", 
    "salisbury": "MacGregor", "pallara": "MacGregor", "parkinson": "MacGregor", 
    "willawong": "MacGregor", "moorooka": "MacGregor", "archerfield": "MacGregor", 
    "drewvale": "MacGregor", "doolandella": "MacGregor", "heathwood": "MacGregor", 
    "acacia-ridge": "MacGregor", "algester": "MacGregor", "burbank": "MacGregor", 
    "forest-lake": "MacGregor", "ellen-grove": "MacGregor", "coopers-plains": "MacGregor", 
    "tarragindi": "MacGregor", "annerley": "MacGregor",

    // East Brisbane / Bayside -> Wynnum
    "lota": "Wynnum", "murarrie": "Wynnum", "hemmant": "Wynnum", "lytton": "Wynnum", 
    "port-of-brisbane": "Wynnum",
};

export const getTestCentreObject = (suburbSlug: string): TestCentreDef => {
    // Exact mapping check
    if (testCentreMap[suburbSlug]) {
        return OFFICIAL_CENTRES[testCentreMap[suburbSlug]];
    }

    // Geographic fallback logic for edge-case suburbs:
    // For anything south/logan string logic we catch Logan Central:
    const loganKeywords = ['logan', 'beenleigh', 'slacks', 'woodridge', 'kingston', 'daisy', 'browns'];
    if (loganKeywords.some(k => suburbSlug.includes(k))) {
        return OFFICIAL_CENTRES["Logan Central / Beenleigh"];
    }

    // Otherwise default fallback
    return OFFICIAL_CENTRES["Toowong"];
}
