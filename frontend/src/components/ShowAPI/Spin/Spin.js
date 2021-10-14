import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import style from './Spinner.module.css';

const Spin = (props) => {
  const spinner = useSelector(state => state.loadReducer.loading);
console.log('spinner-->', spinner)
  return (
    <div className={style.spinner__wrap}>
      <Loader 
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
      />
    </div>
  )
}

export default Spin;