import HeaderSection from '../../../components/headerSection/HeaderSection';
import Styles from '../event/Event.module.scss';

const HeroSection = () =>{
  return(
    <section>
    <HeaderSection
    title='Catering Service'
    className={Styles.title}/>
    </section>
    )
}

export default HeroSection