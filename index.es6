import {curry3} from 'fj-curry';

let _insertBefore = (parent, newChild, refChild) =>
  parentElement.insertBefore(newChild, refChild)

export default curry3(_insertBefore);