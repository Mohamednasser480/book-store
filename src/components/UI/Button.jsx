import classes from './Button.module.css'
function Button(props){
    let tmp = props.className + ' ' + classes.Button;
    tmp += ' ';
    tmp += (props.active)?classes.isActive:'';
    return <button id = {props.id} onClick={props.onClickhandler} className={tmp}>{props.children}</button>
}
export default Button;