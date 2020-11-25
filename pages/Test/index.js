import Carousel from '../../component/Public/Carousel.js';
import process01 from '../../public/process01.png';
import process02 from '../../public/process02.png';
import process03 from '../../public/process03.png';

const Test = () => {
    return(
        <React.Fragment>
            <div>Carousel</div>
            <Carousel
                img1={[process01, process02, process03]}
                rotateBy={2}
                width={'400px'}
                height={'400px'}
                borderRadius={'20px'}
            />
        </React.Fragment>
    )
}

export default Test;