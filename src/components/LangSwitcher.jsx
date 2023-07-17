import { useSelector} from "react-redux/es/hooks/useSelector"
import { changeLang } from "./redux/localeSlice";
import { useDispatch } from "react-redux";

export const LangSwitcher = () => {

    const dispatch = useDispatch();
    const lang = useSelector(state => state.locale.lang);

    return (
        <select
            value={lang}
            onChange={evt => dispatch(changeLang(evt.target.value))}>
            <option value={'ua'}>UA</option>
            <option value={'en'}>EN</option>
            <option value={'pl'}>PL</option>
        </select>
    )
}