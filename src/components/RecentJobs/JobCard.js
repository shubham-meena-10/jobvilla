
import { FaBriefcase, FaMapMarkerAlt, FaRupeeSign, FaAngleDoubleRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
const JobCard = (props) => {
    const navigate = useNavigate();
    function gotoRegister() {
        navigate('/applyjob');
    }
    return (
        <>
            <div className='company-details'>
                <div className='job-update'>
                    <h4>{props.jobtype}</h4>
                    <p>{props.companyName}</p>
                    <FaBriefcase className='fa-icons' /><span>{props.exprience}</span><br />
                    <FaRupeeSign className='fa-icons' /><span> {props.package}</span><br />
                    <FaMapMarkerAlt className='fa-icons' /><span> {props.place}</span><br />
                    <p>Skills <FaAngleDoubleRight className='fa-icons' /><small>{props.skills.skill_1}</small><small>{props.skills.skill_2}</small><small>{props.skills.skill_3}</small><small>{props.skills.skill_4}</small>
                    </p>
                    <p>Description <FaAngleDoubleRight className='fa-icons' />{props.description}<Link className='read-more' > Read More</Link></p>
                </div>
                <div className='apply-btn'>
                    <button type='button' className='btn btn-primary' onClick={gotoRegister}>Apply</button>
                </div>
            </div>
        </>
    )
}

export default JobCard;
