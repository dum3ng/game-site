import { Redirect, useLocation } from '@docusaurus/router';
import { Apps } from '@site/src/constants';



export default function PrivacyApp() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const app = params.get('app')

  return <span>{app}</span>
}

/**
 * 
 *  when the app not in the collection, we just redirect to 404
 */

export function PrivacyNotFound() {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const app = params.get('app')
  if (!Apps.includes(app)) {
    return <Redirect to='/404' />
  } else {
    return <></>
  }
}