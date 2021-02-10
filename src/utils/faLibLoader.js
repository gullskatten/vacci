import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faVirus } from '@fortawesome/free-solid-svg-icons'

export default function loadIcons() {
    library.add(faVirus, faCoffee);
}