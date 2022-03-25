import {useState} from "react";
import '../../../css/PaymentStyle/indecbutton.css'
function IncDecCounter(){
    let [num, setNum]= useState(0);
    let incNum = () => {
        if (num < 9){
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0){
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        if (e.target.value > 9) {
            setNum(9)
        }
        else if(e.target.value < 0) {
            setNum(0)
        }
        else {
            setNum(e.target.value)
        }
    }

    return(
        <div class="indec-group">
            <div class="input-group-prepend">
                <button type="button" onClick={decNum}><div className="op">-</div></button>
            </div>
            <input type="text" class="indec-message" value={num} onChange={handleChange}/>
            <div class="input-group-prepend">
                <button type="button" onClick={incNum}><div className="op">+</div></button>
            </div>
        </div>
    );
}

export default IncDecCounter;