// import Carousel2 from '../../component/Public/Carousel2.js';
import process01 from '../../public/process01.png';
import process02 from '../../public/process02.png';
import process03 from '../../public/process03.png';
import photo3 from '../../public/3.jpeg';
import photo4 from '../../public/4.jpeg';
import Typewriter from '../../component/Public/Typewriter';

const Test = () => {
    return(
        <React.Fragment>
            <div>Carousel</div>
            <Typewriter
                heading={'Typewriter'}
                dataText={['ONE', 'TWOOOOOOOOOO', 'THREE', 'FOUR']}
            />
            
        </React.Fragment>
    )
}

export default Test;