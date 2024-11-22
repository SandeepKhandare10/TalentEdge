import StepFormOneCard from "../../components/StepFormOneCard/StepFormOneCard";
import './StepFormOne.css';

const StepFormOne = () =>{
    const NextPage = () => {
        window.location.href = "/educationaldetails";
    };
    return(
        <div className="StepFormCont">
            <StepFormOneCard NextPage={NextPage}/>
        </div>
    );
}

export default StepFormOne;
