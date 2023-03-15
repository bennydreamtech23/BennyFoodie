import {Container} from 'react-bootstrap'
import Styles from './HeaderSection.module.scss'
const HeaderSection = (props) =>{
  return(
    <section className={Styles.Container}>
    <h2 className={props.className}>
    {props.title}
    </h2>
    </section>
    )
}

export default HeaderSection