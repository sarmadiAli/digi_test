
import style from './main.module.scss';
export default function Main({ children }) {
    return (
        <div className={style.main}>
            {children}
        </div>
    )
}
