import React, {Component} from 'react';
import './HuoLong.css';

class TestPracticesComponent extends Component {

    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Development Tests & Practices</h2>
                </p>
                <div className="contentleft">
                    <p>In the context of software or information modeling, a happy path is a default scenario featuring no exceptional or error conditions, and comprises the sequence of activities executed if everything goes as expected.</p>
                    <p>For example, the happy path for a function validating credit card numbers would be where none of the validation rules raise an error, thus letting execution continue successfully to the end, generating a positive response.</p>
                    <p>Focusing on the happy path and creating the required functionality leaves room for bugs in production, when end users stray from the happy path into the alternative path or the exception path.</p>
                    <p>A test case which yields no result like entering invalid username and invalid password on a login screen is Sad path. These test cases will actually be scenarios which will not take you further. </p>
                </div>
            </div>

        );

    }
}
export default TestPracticesComponent;