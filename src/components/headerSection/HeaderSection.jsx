import {Container} from 'react-bootstrap'
import Styles from './HeaderSection.module.scss'
const HeaderSection = (props) =>{
  return(
    <section className={Styles.Container}>
    <h2 className={Styles.title}>
    {props.title}
    </h2>
    </section>
    )
}

export default HeaderSection