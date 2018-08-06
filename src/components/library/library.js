import React, { component} from 'react';
import LibraryCourse from './libraryCourse';
import * as actions from '../../actions';
import { connect } from 'tls';


class Library extends Component {
    componentWillMount() {
        this.props.fetchCourses()
    }
    
    
    render() {
        console.log(this.props.courses);
        this.props.fetchCourses()
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                {this.renderCourses()}
            </div>
        )
    }
}

function mapStateToProp(state) {
    return 
    {  
        courses: state.courses
    }
}

export default connect(mapStateToProps, actions)(library);