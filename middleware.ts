import { NextRequest, NextResponse } from "next/server";

// Maps suburb slugs to their region for redirect purposes
// This handles the /driving-lessons-[suburb] → /locations/[region]/[suburb] redirect
const suburbRegionMap: Record<string, string> = {
    // Inner Brisbane
    "bardon": "inner-brisbane", "bowen-hills": "inner-brisbane", "brisbane-city": "inner-brisbane",
    "east-brisbane": "inner-brisbane", "fortitude-valley": "inner-brisbane", "herston": "inner-brisbane",
    "highgate-hill": "inner-brisbane", "kangaroo-point": "inner-brisbane", "kelvin-grove": "inner-brisbane",
    "new-farm": "inner-brisbane", "newstead": "inner-brisbane", "paddington": "inner-brisbane",
    "petrie-terrace": "inner-brisbane", "red-hill": "inner-brisbane", "south-brisbane": "inner-brisbane",
    "spring-hill": "inner-brisbane", "teneriffe": "inner-brisbane", "west-end": "inner-brisbane",
    "woolloongabba": "inner-brisbane",
    // Northern Brisbane
    "albion": "northern-brisbane", "alderley": "northern-brisbane", "arana-hills": "northern-brisbane",
    "ascot": "northern-brisbane", "aspley": "northern-brisbane", "bald-hills": "northern-brisbane",
    "banyo": "northern-brisbane", "boondall": "northern-brisbane", "bracken-ridge": "northern-brisbane",
    "bridgeman-downs": "northern-brisbane", "brighton": "northern-brisbane", "caboolture": "northern-brisbane",
    "carseldine": "northern-brisbane", "chermside": "northern-brisbane", "chermside-west": "northern-brisbane",
    "clayfield": "northern-brisbane", "deagon": "northern-brisbane", "eagle-farm": "northern-brisbane",
    "everton-park": "northern-brisbane", "ferny-grove": "northern-brisbane", "fitzgibbon": "northern-brisbane",
    "gaythorne": "northern-brisbane", "geebung": "northern-brisbane", "grange": "northern-brisbane",
    "hendra": "northern-brisbane", "keperra": "northern-brisbane", "kalinga": "northern-brisbane",
    "kedron": "northern-brisbane", "lutwyche": "northern-brisbane", "mcdowall": "northern-brisbane",
    "mitchelton": "northern-brisbane", "myrtletown": "northern-brisbane", "newmarket": "northern-brisbane",
    "northgate": "northern-brisbane", "nudgee": "northern-brisbane", "nudgee-beach": "northern-brisbane",
    "nundah": "northern-brisbane", "pinkenba": "northern-brisbane", "redcliffe": "northern-brisbane",
    "sandgate": "northern-brisbane", "shorncliffe": "northern-brisbane", "stafford": "northern-brisbane",
    "stafford-heights": "northern-brisbane", "strathpine": "northern-brisbane", "taigum": "northern-brisbane",
    "virginia": "northern-brisbane", "wavell-heights": "northern-brisbane", "wilston": "northern-brisbane",
    "windsor": "northern-brisbane",
    // Southern Brisbane
    "acacia-ridge": "southern-brisbane", "algester": "southern-brisbane", "annerley": "southern-brisbane",
    "archerfield": "southern-brisbane", "burbank": "southern-brisbane", "calamvale": "southern-brisbane",
    "coopers-plains": "southern-brisbane", "darra": "southern-brisbane", "doolandella": "southern-brisbane",
    "drewvale": "southern-brisbane", "durack": "southern-brisbane", "dutton-park": "southern-brisbane",
    "eight-mile-plains": "southern-brisbane", "ellen-grove": "southern-brisbane", "fairfield": "southern-brisbane",
    "forest-lake": "southern-brisbane", "greenslopes": "southern-brisbane", "heathwood": "southern-brisbane",
    "holland-park": "southern-brisbane", "holland-park-west": "southern-brisbane", "inala": "southern-brisbane",
    "karawatha": "southern-brisbane", "kuraby": "southern-brisbane", "larapinta": "southern-brisbane",
    "logan-city": "southern-brisbane", "macgregor": "southern-brisbane", "mackenzie": "southern-brisbane",
    "mansfield": "southern-brisbane", "moorooka": "southern-brisbane", "mount-gravatt": "southern-brisbane",
    "mount-gravatt-east": "southern-brisbane", "nathan": "southern-brisbane", "pallara": "southern-brisbane",
    "parkinson": "southern-brisbane", "richlands": "southern-brisbane", "robertson": "southern-brisbane",
    "rochedale": "southern-brisbane", "rocklea": "southern-brisbane", "runcorn": "southern-brisbane",
    "salisbury": "southern-brisbane", "seventeen-mile-rocks": "southern-brisbane", "sinnamon-park": "southern-brisbane",
    "stones-corner": "southern-brisbane", "stretton": "southern-brisbane", "sumner": "southern-brisbane",
    "sunnybank": "southern-brisbane", "sunnybank-hills": "southern-brisbane", "tarragindi": "southern-brisbane",
    "tennyson": "southern-brisbane", "upper-mount-gravatt": "southern-brisbane", "wacol": "southern-brisbane",
    "willawong": "southern-brisbane", "wishart": "southern-brisbane", "yeerongpilly": "southern-brisbane",
    "yeronga": "southern-brisbane",
    // Eastern Brisbane
    "balmoral": "eastern-brisbane", "belmont": "eastern-brisbane", "bulimba": "eastern-brisbane",
    "camp-hill": "eastern-brisbane", "cannon-hill": "eastern-brisbane", "carina": "eastern-brisbane",
    "carina-heights": "eastern-brisbane", "carindale": "eastern-brisbane", "chandler": "eastern-brisbane",
    "cleveland": "eastern-brisbane", "coorparoo": "eastern-brisbane", "gumdale": "eastern-brisbane",
    "hawthorne": "eastern-brisbane", "hemmant": "eastern-brisbane", "lota": "eastern-brisbane",
    "lytton": "eastern-brisbane", "manly": "eastern-brisbane", "manly-west": "eastern-brisbane",
    "morningside": "eastern-brisbane", "murarrie": "eastern-brisbane", "norman-park": "eastern-brisbane",
    "port-of-brisbane": "eastern-brisbane", "ransome": "eastern-brisbane", "seven-hills": "eastern-brisbane",
    "tingalpa": "eastern-brisbane", "wakerley": "eastern-brisbane", "wynnum": "eastern-brisbane",
    "wynnum-west": "eastern-brisbane",
    // Western Brisbane
    "anstead": "western-brisbane", "ashgrove": "western-brisbane", "auchenflower": "western-brisbane",
    "bardon-west": "western-brisbane", "bellbowrie": "western-brisbane", "brookfield": "western-brisbane",
    "chapel-hill": "western-brisbane", "chelmer": "western-brisbane", "chuwar": "western-brisbane",
    "corinda": "western-brisbane", "enoggera": "western-brisbane", "enoggera-reservoir": "western-brisbane",
    "fig-tree-pocket": "western-brisbane", "graceville": "western-brisbane", "indooroopilly": "western-brisbane",
    "jamboree-heights": "western-brisbane", "jindalee": "western-brisbane", "karana-downs": "western-brisbane",
    "kenmore": "western-brisbane", "kenmore-hills": "western-brisbane", "kholo": "western-brisbane",
    "lake-manchester": "western-brisbane", "middle-park": "western-brisbane", "milton": "western-brisbane",
    "moggill": "western-brisbane", "mount-coot-tha": "western-brisbane", "mount-crosby": "western-brisbane",
    "mount-ommaney": "western-brisbane", "oxley": "western-brisbane", "pinjarra-hills": "western-brisbane",
    "pullenvale": "western-brisbane", "riverhills": "western-brisbane", "sherwood": "western-brisbane",
    "st-lucia": "western-brisbane", "taringa": "western-brisbane", "the-gap": "western-brisbane",
    "toowong": "western-brisbane", "upper-brookfield": "western-brisbane", "upper-kedron": "western-brisbane",
    "westlake": "western-brisbane", "wooloowin": "western-brisbane", "zillmere": "western-brisbane",
    // Logan City
    "bahrs-scrub": "logan-city", "bannockburn": "logan-city", "beenleigh": "logan-city",
    "belivah": "logan-city", "berrinba": "logan-city", "bethania": "logan-city",
    "boronia-heights": "logan-city", "browns-plains": "logan-city", "buccan": "logan-city",
    "carbrook": "logan-city", "cedar-creek": "logan-city", "cedar-grove": "logan-city",
    "cedar-vale": "logan-city", "chambers-flat": "logan-city", "cornubia": "logan-city",
    "crestmead": "logan-city", "eagleby": "logan-city", "edens-landing": "logan-city",
    "flagstone": "logan-city", "flinders-lakes": "logan-city", "glenlogan": "logan-city",
    "greenbank": "logan-city", "heritage-park": "logan-city", "hillcrest": "logan-city",
    "holmview": "logan-city", "jimboomba": "logan-city", "kagaru": "logan-city",
    "kingston": "logan-city", "logan-central": "logan-city", "logan-reserve": "logan-city",
    "logan-village": "logan-city", "loganholme": "logan-city", "loganlea": "logan-city",
    "lyons": "logan-city", "marsden": "logan-city", "meadowbrook": "logan-city",
    "monarch-glen": "logan-city", "mount-warren-park": "logan-city", "mundoolun": "logan-city",
    "munruben": "logan-city", "new-beith": "logan-city", "north-maclean": "logan-city",
    "park-ridge": "logan-city", "park-ridge-south": "logan-city", "priestdale": "logan-city",
    "regents-park": "logan-city", "riverbend": "logan-city", "rochedale-south": "logan-city",
    "shailer-park": "logan-city", "silverbark-ridge": "logan-city", "slacks-creek": "logan-city",
    "springwood": "logan-city", "south-maclean": "logan-city", "stockleigh": "logan-city",
    "tamborine": "logan-city", "tanah-merah": "logan-city", "underwood": "logan-city",
    "undullah": "logan-city", "veresdale": "logan-city", "veresdale-scrub": "logan-city",
    "waterford": "logan-city", "waterford-west": "logan-city", "windaroo": "logan-city",
    "wolffdene": "logan-city", "woodhill": "logan-city", "woodridge": "logan-city",
    "yarrabilba": "logan-city",
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Handle /driving-lessons-[suburb] → /locations/[region]/[suburb]
    const match = pathname.match(/^\/driving-lessons-(.+)$/);
    if (match) {
        const suburbSlug = match[1];
        const region = suburbRegionMap[suburbSlug];
        if (region) {
            return NextResponse.redirect(
                new URL(`/locations/${region}/${suburbSlug}`, request.url),
                308
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/driving-lessons-:path*",
};
