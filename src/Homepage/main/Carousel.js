import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonPlay,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Play from '../img/play.png';
import Pause from '../img/pause.png';
import Back from '../img/back.png';
import Next from '../img/next.png';
const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.2}
    totalSlides={3}
    style={{ width: '450px' }}
    isPlaying={true}
    interval={3000}
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
        <img src={Back} alt='backbutton' />
      </ButtonBack>
      <ButtonPlay
        childrenPaused={
          <div>
            <img src={Play} alt='' />
          </div>
        }
        childrenPlaying={
          <div>
            <img src={Pause} alt='' />
          </div>
        }
      ></ButtonPlay>
      <ButtonNext style={{ padding: '20px' }}>
        <img src={Next} alt='Next' />
      </ButtonNext>
    </div>
  </CarouselProvider>
);

export default CardCarousel;
