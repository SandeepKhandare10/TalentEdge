import StepFormOneCard from "../../components/StepFormOneCard/StepFormOneCard";
import './StepFormOne.css';

const StepFormOne = () =>{
    const NextPage = () => {
        window.location.href = "/user-information-show-step3";
    };
    return(
        <div className="StepFormCont">
            <StepFormOneCard NextPage={NextPage}/>
        </div>
    );
}

export default StepFormOne;
