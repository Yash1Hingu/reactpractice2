import styled from './ErrorDialog.module.css';

const ErrorDialog = (props) => {
    return (
        <div className={styled.user_err} style={{ display: !(props.open) ? 'none' : '' }} onClick={props.onDialogClick}>
            <div className={styled.user_err__box}>
                <h2 className={styled.user_err__head}>Invaild Input</h2>
                <p>{props.message}</p>
                <button>Cancel</button>
            </div>
        </div>
    );
}
export default ErrorDialog;