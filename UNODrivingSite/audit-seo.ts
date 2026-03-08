import { locations } from './app/data/locations';
import { suburbSEO } from './app/data/suburb-seo';

const allSuburbs = Object.values(locations).flat();
const missingSuburbs: string[] = [];

allSuburbs.forEach(suburb => {
    const slug = suburb.toLowerCase().replace(/ /g, "-");
    if (!suburbSEO[slug]) {
        missingSuburbs.push(suburb);
    }
});

console.log(`\n=== AUDIT REPORT ===`);
console.log(`Total Locations: ${allSuburbs.length}`);
console.log(`SEO Pages Present: ${Object.keys(suburbSEO).length}`);
console.log(`Missing SEO Pages (Legacy Template): ${missingSuburbs.length}`);
console.log(`\nList of Missing Suburbs:`);
missingSuburbs.forEach(s => console.log(`- ${s}`));
console.log(`\n`);
