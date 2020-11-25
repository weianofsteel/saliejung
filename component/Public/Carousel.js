import React, { useEffect } from 'react';

const Carousel = (props) => {
    
    const [count, setCount] = React.useState(0);

    const {
        img1,
        rotateBy,
        width,
        height,
        borderRadius
    } = props;

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const list = [];

    for(let i = 0; i <= img1.length - 1; i++) {
        list.push(
            <React.Fragment>
                {parseInt( count / rotateBy) % img1.length === i ?
                    <div style={{width:width, height:height, borderRadius:borderRadius}}>
                        <img src={img1[i]} style={{width:'100%', height:'100%'}}/>
                    </div>
                :''}
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
        
            {list}

        </React.Fragment>
    )
}

export default Carousel;