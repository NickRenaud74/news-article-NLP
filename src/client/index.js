import { updateUi } from './js/updateUi'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import icon from './images/robot-icon.jpg'
import iconLarge from './images/robot-icon-main.jpg'

//Append Robot Icon for header
const robotIcon = new Image();
robotIcon.src = icon;
robotIcon.className = 'robot-icon';

document.querySelector('.logo').appendChild(robotIcon);


//Append Robot Icon for main section
const mainIcon = new Image();
mainIcon.src = iconLarge;
mainIcon.className = 'main-icon';

document.querySelector('.robot').appendChild(mainIcon);

export {
    updateUi,
    handleSubmit
}