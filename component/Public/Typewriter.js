import React from 'react';
import styles from '../../css/Public.module.css';

class Typewriter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 150,
            isCursor: true
        }

        this.handleType = this.handleType.bind(this);
        this.handleCursor = this.handleCursor.bind(this);
        this.timer = this.timer.bind(this);
    }
  
    componentDidMount() {
      this.handleType();
      this.handleCursor();
    }

    componentWillUnmount() {
        clearInterval(this.handleCursor);
    }

    handleCursor() {
        setInterval(()=>{this.timer();},500);
    }

    timer() {
        if(this.state.isCursor === true) {
            this.setState({isCursor: false});
        } else {
            this.setState({isCursor: true});
        }        
    }

  
    handleType() {
      const { dataText, rotateSpeed, typeSpeed } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? (typeSpeed?typeSpeed:150) : 150
      });
  
      if (!isDeleting && text === fullText) {     
        setTimeout(() => this.setState({ isDeleting: true }), (rotateSpeed?rotateSpeed:500));   
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });      
      }
  
      setTimeout(this.handleType, typingSpeed);
    };


  
    render() {    
      
        const {
            heading
        } = this.props;
      
        return (
        <h1>{ heading }&nbsp;
          <span>{ this.state.text }</span>
          { this.state.isCursor === true ?
            <span className={styles.cursor}></span>
          :''}  
        </h1>
      );
    }
}

export default Typewriter;