import { useState } from "react";
import './Component2.css';
import SelectCompletionYear from "../SelectCompletionYear/SelectCompletionYear";

const Component2 = () =>{

    const[pursuing, setPursuing] = useState("");
    const handleChangeCheckbox = () =>{
        setPursuing("Yes");
    }

    return(
        <div className="master-container-compo2">
            <div className="still-pursuing">
                <div className="still-pursuing-inner-container">
                    <div className="form-check-cont2">
                        <input className="form-check-input-cont2" type="checkbox" id="pursuing_bachlor" name="pursuingCourse" value={"checked"} onChange={handleChangeCheckbox}></input>
                        <label className="form-check-label-cont2" for="pursuing_bachlor">Still pursuing the course</label>
                    </div>
                </div>
                
            </div>
            {pursuing === "Yes" && <SelectCompletionYear/>}
        </div>
    )
}

export default Component2;
