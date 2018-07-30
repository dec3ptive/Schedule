import React, { component} from 'react';
import LibraryCourse from './libraryCourse';
import * as actions from '../../actions';
import { connect } from 'tls';


class Library extends Component {
    componentDidMount() {
        
    }
    
    
    
    render() {
        this.props.fetchCourses()
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
        )
    }
}

export default connect(null, actions)(library);