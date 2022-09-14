import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'

import { ReactComponent as EditIcon } from './edit-icon.svg'
import { ReactComponent as MedalIcon } from './medal-icon.svg'
import { ReactComponent as InfoIcon } from './info-icon.svg'
import { ReactComponent as MenuIcon } from './menu-icon.svg'
import { ReactComponent as MealIcon } from './meal-icon.svg'

interface IconI {
  CustomIcon: any
  faChevronUp: IconDefinition
  faTimes: IconDefinition
}

const Icon: IconI = {
  CustomIcon: FontAwesomeIcon,
  faChevronUp,
  faTimes,
}

const SvgIcon = {
  EditIcon,
  MedalIcon,
  InfoIcon,
  MenuIcon,
  MealIcon,
}

export { Icon, SvgIcon }
