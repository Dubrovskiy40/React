import DialogList from './DialogList/DialogList';
import style from './Dialogs.module.css';
import MessageList from './MessageList/MessageList';

const Dialogs = (props) => {

    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogs__list}>
                    <DialogList />
                </div>
                <div className={style.messages__list}>
                    <MessageList />
                </div>
            </div>
        </div>
    )
}
export default Dialogs; 