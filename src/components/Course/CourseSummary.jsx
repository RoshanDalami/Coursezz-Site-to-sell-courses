import classes from './CourseSummary.module.css'
import {FaBookOpen} from 'react-icons/fa'

const MealsSummary=()=>{
 return(
    <section className={classes.summary}>
        <h2><FaBookOpen /> &nbsp; Learn , Be Better</h2>
        <p>Unlock your potential and transform your future</p>

    </section>
 );
};
export default MealsSummary;