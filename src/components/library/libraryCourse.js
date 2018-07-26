import React, { Component } from 'react';
import Icon from '../icon';

class LibraryCourse extends Component {
    render () {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', "library-course__icon") }
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label> course__description</label>
                    <p>Sometimes chicken sounds like it could just not when you start typing random threads into the word box to the end of this filler line</p>

                </div>
            </div>
        )
    }
}

export default LibraryCourse;