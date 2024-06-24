import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //using this to set values from the first one (0)
  const [isDeleting, setIsDeleting] = useState(false); // showing if text is being deleted
  const [text, setText] = useState(''); // what text is being shown
  const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast a letter appears after the first letter/s are typed
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Mobile Developer", "UI/UX Designer"];
  const period = 2000; // transition time between each word

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker); };
  }, [text]);

  //function responsible for typing and deleting
  //lets define the tick function
  const tick = () => {
    let i = loopNum % toRotate.length; // once the list that we have is done the sysytem will go back to 0
    let fullText = toRotate[i]; //rotate the i-th element
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) // for deleting, so during deletion of course we subtract the letters by one
      : fullText.substring(0, text.length + 1); // and if we are not deleting let the current letter be one letter ahead of the full text
    setText(updatedText); //updating state to our updated text

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2); // the speed of deleting text has to be faster than that of typing text
    }

    if (!isDeleting && updatedText === fullText) // checking if system is still deleting
    {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period); //setting delta back to its normal pace
    } else if (isDeleting && updatedText === '') //checking if system has finished deleting text
    {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); //moving to the next text
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={10}>
            <span className="tagline"> Karibu to this Web App </span>
            <h1> {'Hello my name is Art Ndiema but you can call me Awesome hehehe'} <span className="wrap"> {text}</span> </h1>
            <p> <h3> Something something about me , long story short, lets say you have read alot of lines here and you are impressed😊</h3></p>
            <button onClick={() => console.log('Madam, the connect button was clicked')}> Let&apos;s connect<ArrowRightCircle size={30} /> </button>
          </Col>
          <Col xs={12} md={6} xl={8}>
            <img src={headerImg} alt="Header image bro" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};