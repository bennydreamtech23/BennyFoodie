import HeaderSection from '../../../components/headerSection/HeaderSection'
import Styles from '../our_story/OurStory.module.scss';

const HeroSection = () =>{
  return(
    <section>
    <HeaderSection title='Our Story' 
    className={Styles.Title}/>
    </section>
    )
}

export default HeroSection