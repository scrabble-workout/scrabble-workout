import { prepareWords } from './prepare-words';

it('should return grouped, sorted and deduplicated anagrams', () => {
    expect(prepareWords(`
        abcdefg
        zzzzzzz
        a1a1a1a
        zzzzzzz
        zzzzzzz

        defgabc
        aaaa111
        111aaaa
        bbbbbbb
    `)).toEqual([
        ['111aaaa', 'a1a1a1a', 'aaaa111'],
        ['abcdefg', 'defgabc'],
        ['bbbbbbb'],
        ['zzzzzzz'],
    ]);
});
