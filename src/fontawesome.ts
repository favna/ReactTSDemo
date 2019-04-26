import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default () => {
  library.add(faPencilAlt, faTrashAlt, faExclamationTriangle, faAddressBook);
};