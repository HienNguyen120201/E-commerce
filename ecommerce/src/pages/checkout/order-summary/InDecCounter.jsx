import {useState} from "react";
import Button from '@material-ui/core/Button';
import './indecbutton.css'
function IncDecCounter(){
    let [num, setNum]= useState(0);
    let incNum = () => {
        if (num < 10){
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0){
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        if (e.target.value > 10) {
            setNum(10)
        }
        else if(e.target.value < 0) {
            setNum(0)
        }
        else {
            setNum(e.target.value)
        }
    }

    return(
        <>
        <div className="col-xl-1">
            <div class="indec-group">
                <div class="input-group-prepend">
                    <button type="button" onClick={decNum}><div className="op">-</div></button>
                </div>
                <input type="text" class="indec-message" value={num} onChange={handleChange}/>
                <div class="input-group-prepend">
                    <button type="button" onClick={incNum}><div className="op">+</div></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default IncDecCounter;