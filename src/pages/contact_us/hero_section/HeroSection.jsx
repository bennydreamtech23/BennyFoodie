import HeaderSection from '../../../components/headerSection/HeaderSection'
import Styles from "../form/Form.module.scss"

const HeroSection = () =>{
  return(
    <section>
    <HeaderSection 
    title='Contact Us'
    className={Styles.Title}/>
    </section>
    )
}

export default HeroSection