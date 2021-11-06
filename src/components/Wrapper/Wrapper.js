import Styles from "./Wrapper.module.scss"

const Wrapper = (props) => {
    return (
        <div className={Styles.wrapper}>
            {props.children}
        </div>
    )
}

export default Wrapper