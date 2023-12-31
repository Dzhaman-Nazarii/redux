import { useDispatch} from "react-redux"
import { deposit, withdraw } from './redux/accountSlice'
import { Balance } from "../components/Balance"
import { useState } from "react"

export const Account = () => {

    const dispatch = useDispatch()
    const [inputValue, setnputValue] = useState(0)

    return (
        <div>
            <Balance />
            <input type="number" value={inputValue} onChange={evt => setnputValue(Number(evt.target.value))}></input>
            <button onClick={()=>{dispatch(deposit(inputValue))}}>Deposit</button>
            <button onClick={()=>{dispatch(withdraw(inputValue))}}>Withdraw</button>
        </div>
    )
}