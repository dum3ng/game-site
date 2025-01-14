import { Redirect, useLocation } from '@docusaurus/router';
import { Apps } from '@site/src/constants';



export default function PrivacyApp() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const app = params.get('app')
  const appname = app ? toPascalCase(app) : ''

  return <span>{appname}</span>
}

function isNil(a) {
  return a === undefined || a === null
}
/**
 * 
 *  when the app not in the collection, we just redirect to 404
 */

export function PrivacyNotFound() {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const app = params.get('app')

  if (isNil(app) || !Apps.includes(toPascalCase(app))) {
    return <Redirect to='/404' />
  } else {
    return <></>
  }
}

function toPascalCase(str) {
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .split('_') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(''); // Join all the words together without spaces
}
