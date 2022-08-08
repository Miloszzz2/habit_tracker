import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonPlay,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Play from './img/play.png';
import Pause from './img/pause.png';
import Back from './img/back.png';
import Next from './img/next.png';
import { motion } from 'framer-motion';
const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.2}
    totalSlides={3}
    style={{ width: '450px' }}
    isPlaying={true}
    interval={5000}
    infinite={true}
    lockOnWindowScroll={true}
    touchEnabled={false}
  >
    <Slider>
      <Slide index={0} style={{ backgroundColor: '#FFF89A ' }}>
        <h1>hello</h1>
      </Slide>
      <Slide index={1} style={{ backgroundColor: '#C4DFAA' }}>
        I am the second Slide.
      </Slide>
      <Slide index={2} style={{ backgroundColor: '#A1CAE2' }}>
        I am the third Slide.
      </Slide>
    </Slider>
    <div className='buttons'>
      <ButtonBack>
        <motion.img
          src={Back}
          alt='backbutton'
          whileHover={{ opacity: 0.85 }}
          transition={{ type: 'spring' }}
        />
      </ButtonBack>
      <ButtonPlay
        childrenPaused={
          <motion.img
            src={Play}
            alt='playbutton'
            whileHover={{ opacity: 0.8 }}
            transition={{ type: 'spring' }}
          />
        }
        childrenPlaying={
          <motion.img
            src={Pause}
            alt='pausebutton'
            whileHover={{ opacity: 0.8 }}
            transition={{ type: 'spring' }}
          />
        }
      ></ButtonPlay>
      <ButtonNext style={{ padding: '20px' }}>
        <motion.img
          whileHover={{ opacity: 0.8 }}
          transition={{ type: 'spring' }}
          src={Next}
          alt='nextbutton'
        />
      </ButtonNext>
    </div>
  </CarouselProvider>
);

export default CardCarousel;
