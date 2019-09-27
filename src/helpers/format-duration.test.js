import { formatDuration } from './format-duration';

test.each`
    duration    |   expected
    ${1}        |   ${'0:00'}
    ${10}       |   ${'0:00'}
    ${1001}     |   ${'0:01'}
    ${1999}     |   ${'0:01'}
    ${120001}   |   ${'2:00'}
    ${3599999}  |   ${'59:59'}
    ${3600000}  |   ${'0:00'}
`('given duration $duration returns $expected', ({ duration, expected }) => {
    expect(formatDuration(duration)).toEqual(expected);
});
