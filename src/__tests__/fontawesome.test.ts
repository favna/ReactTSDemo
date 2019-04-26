import { library } from '@fortawesome/fontawesome-svg-core';
import createFontAwesomeLibrary from 'fontawesome';

beforeAll(() => createFontAwesomeLibrary());

test('FontAwesome should only contain the tested icons', () => {
    const supportedIcons = Object.keys(library.definitions.fas); // This returns an array of all the icons that were added to the library in the end-user configuration
    expect(supportedIcons).toEqual(['pencil-alt', 'trash-alt', 'exclamation-triangle']);
});