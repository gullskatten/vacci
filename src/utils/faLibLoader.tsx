import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faVirus,
  faPalette,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { faMap } from "@fortawesome/free-regular-svg-icons";

export default function loadIcons() {
  library.add(faVirus, faCoffee, faPalette, faTimes, faMap);
}
