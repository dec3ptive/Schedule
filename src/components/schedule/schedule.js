import React, { component} from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    render() {
        <div className="library">
            <h1 className="schedule__title">My schedule</h1>
            <ScheduleCourse title={'Problem Solving'}/>
            <ScheduleCourse title={'Problem Solving'}/>
            <ScheduleCourse title={'Problem Solving'}/>
            <ProgressTracker/>
            <Gradient/>
        </div>
    }
}

export default Schedule;