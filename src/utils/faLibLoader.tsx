import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faVirus,
  faPalette,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function loadIcons() {
  library.add(faVirus, faCoffee, faPalette, faTimes);
}
