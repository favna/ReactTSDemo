import { library } from '@fortawesome/fontawesome-svg-core';
import createFontAwesomeLibrary from 'fontawesome';

beforeAll(() => createFontAwesomeLibrary());

test('FontAwesome should only contain the tested icons', () => {
    const supportedSolidIcons = Object.keys(library.definitions.fas);
    const supportedRegularIcons = Object.keys(library.definitions.far);
    expect(supportedSolidIcons).toStrictEqual(['pencil-alt', 'trash-alt', 'exclamation-triangle']);
    expect(supportedRegularIcons).toStrictEqual(['address-book']);
});