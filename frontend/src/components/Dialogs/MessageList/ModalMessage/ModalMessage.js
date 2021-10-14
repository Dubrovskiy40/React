import { useDispatch, useSelector } from 'react-redux';
import { hideModalMessage } from '../../../../actions/modalMessageActions';
import style from './ModalMessage.module.css';
import { Snackbar, Typography } from '@material-ui/core';

const ModalMessage = () => {

   const modalMessage = useSelector((state) => state.modalMessage);
   const dispatch = useDispatch();

   const handleClose = (close) => {
      if (close === 'clickaway') {
         return
      }
      dispatch(hideModalMessage(false));
   };

   return (
      <Snackbar
         open={modalMessage.show}
         autoHideDuration={2000}
         onClose={handleClose}>
         <Typography className={style.modalBox}>
            {modalMessage.message}
         </Typography>
      </Snackbar>
   )
}
export default ModalMessage;