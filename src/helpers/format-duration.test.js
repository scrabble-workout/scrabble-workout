import { formatDuration } from './format-duration';

test.each`
    duration    |   expected
    ${0}        |   ${'0:00'}
    ${1}        |   ${'0:00'}
    ${10}       |   ${'0:00'}
    ${1001}     |   ${'0:01'}
    ${1999}     |   ${'0:01'}
    ${120001}   |   ${'2:00'}
    ${3599999}  |   ${'59:59'}
    ${3600000}  |   ${'60:00'}
    ${6000000}  |   ${'100:00'}
`('Given duration $duration formatDuration function returns $expected', ({ duration, expected }) => {
    expect(formatDuration(duration)).toEqual(expected);
});

test('Given a negative number formatDuration function returns undefined', () => {
    expect(formatDuration(-1)).toBeUndefined;
});


const errMsg = 'Error in formatDuration function: parameter is not a non-negative integer. Please provide a proper parameter';

test.each`
    parameter       |   expected
    ${0.4}          |   ${errMsg}
    ${NaN}          |   ${errMsg}
    ${Infinity}     |   ${errMsg}
    ${'string'}     |   ${errMsg}
    ${{}}           |   ${errMsg}
    ${null}         |   ${errMsg}
    ${undefined}    |   ${errMsg}
`('formatDuration function throws an error when provided $parameter', ({ parameter, expected }) => {
    expect(() => formatDuration(parameter)).toThrow(expected);
});
