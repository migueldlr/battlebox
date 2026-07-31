import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/lib/types/decklists.ts';
const src = readFileSync(path, 'utf8');

const marker = 'export const decklistData: Decklist[] = [';
const arrStart = src.indexOf(marker);
if (arrStart === -1) throw new Error('array declaration not found');
const openBracket = src.indexOf('[', arrStart);

// Scan for the matching close bracket of the top-level array, skipping strings.
function findMatchingBracket(str, open, openCh, closeCh) {
	let depth = 1;
	let inStr = false;
	let quote = '';
	for (let i = open + 1; i < str.length; i++) {
		const c = str[i];
		const p = str[i - 1];
		if (inStr) {
			if (c === quote && p !== '\\') inStr = false;
			continue;
		}
		if (c === "'" || c === '"' || c === '`') {
			inStr = true;
			quote = c;
			continue;
		}
		if (c === openCh) depth++;
		else if (c === closeCh) {
			depth--;
			if (depth === 0) return i;
		}
	}
	throw new Error('no matching bracket');
}

const arrClose = findMatchingBracket(src, openBracket, '[', ']');
const head = src.slice(0, openBracket + 1);
const tail = src.slice(arrClose); // starts with ]
const body = src.slice(openBracket + 1, arrClose);

// Split body into top-level element objects by scanning brace depth.
const elems = [];
let j = 0;
const n = body.length;
while (j < n) {
	while (j < n && /[\s,]/.test(body[j])) j++;
	if (j >= n) break;
	if (body[j] !== '{') throw new Error('Unexpected top-level char: ' + JSON.stringify(body.slice(j, j + 30)));
	const start = j;
	let d = 0;
	let inStr = false;
	let quote = '';
	for (; j < n; j++) {
		const c = body[j];
		const p = body[j - 1];
		if (inStr) {
			if (c === quote && p !== '\\') inStr = false;
			continue;
		}
		if (c === "'" || c === '"' || c === '`') {
			inStr = true;
			quote = c;
			continue;
		}
		if (c === '{') d++;
		else if (c === '}') {
			d--;
			if (d === 0) {
				j++;
				break;
			}
		}
	}
	elems.push(body.slice(start, j));
}

const nick = (e) => (e.match(/nickname: '([^']+)'/) || [])[1];
console.log('element count:', elems.length);
console.log('current:', elems.map(nick).join(', '));

const runners = elems.slice(0, 3);
const corps = elems.slice(3);
const order = ['LEO', 'PTU', 'Nebula', 'Zwicky'];
const byNick = Object.fromEntries(corps.map((e) => [nick(e), e]));
const missing = order.filter((o) => !byNick[o]);
if (missing.length) throw new Error('Missing corp(s): ' + missing.join(','));
if (corps.length !== order.length) throw new Error('Corp count mismatch: ' + corps.length);

const newElems = [...runners, ...order.map((o) => byNick[o])];
console.log('new:', newElems.map(nick).join(', '));

const newBody = '\n\t' + newElems.join(',\n\t') + '\n';
writeFileSync(path, head + newBody + tail);
console.log('written');
