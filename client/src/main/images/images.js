 import two from '../images/2.jpg';
import three from '../images/3.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import nine from '../images/9.jpg';
import ten from '../images/10.jpg';
import thirteen from '../images/13.jpg';
import fourteen from '../images/14.jpg';
import fifteen from '../images/15.jpg';
import sixteen from '../images/16.jpg';
import twentyTwo from '../images/22.jpg';
import twentyThree from '../images/23.jpg';
import twentyFour from '../images/24.jpg';
import twentySeven from '../images/27.jpg';
import twentyEight from '../images/28.jpg';
import thirty from '../images/30.jpg';
import thirtyTwo from '../images/32.jpg';
import thirtyThree from '../images/33.jpg';
import thirtyFour from '../images/34.jpg';
import thirtyEight from '../images/38.jpg';

const images = [two, three, five, six, seven, eight, nine, ten,
                thirteen, fourteen, fifteen, sixteen, 
                twentyTwo, twentyThree, twentyFour, 
                twentySeven, twentyEight, thirty, thirtyTwo, thirtyThree,
                thirtyFour, thirtyEight];

const randomImage = () => {
    let value = (Math.floor(Math.random() * (22 - 1 + 1) + 1));
    return images[value - 1];
}

export default randomImage;
