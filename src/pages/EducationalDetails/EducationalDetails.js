import EducationalDetailsCard from "../../components/EducationalDetails/EducationalDetailsCard";
import './EducationalDetails.css';
const EducationalDetails = () =>{
    const NextPage = () => {
        window.location.href = "/user-information-show-step3";
    };
    return(
        <div className="EduDetailsCont">
            <EducationalDetailsCard NextPage={NextPage}/>
        </div>
    );
}

export default EducationalDetails;
