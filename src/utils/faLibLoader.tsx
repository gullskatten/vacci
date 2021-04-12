import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faVirus,
  faPalette,
  faTimes,
  faArrowRight,
  faScroll,
  faVirusSlash,
  faTruckLoading,
  faHandHoldingMedical,
  faShieldVirus,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faMap,
  faChartBar,
  faFrownOpen,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";

export default function loadIcons() {
  library.add(
    faVirus,
    faCoffee,
    faPalette,
    faTimes,
    faMap,
    faChartBar,
    faFrownOpen,
    faArrowRight,
    faLightbulb,
    faScroll,
    faVirusSlash,
    faTruckLoading,
    faHandHoldingMedical,
    faShieldVirus,
    faChevronDown
  );
}
