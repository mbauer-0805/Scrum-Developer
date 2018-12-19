import React, { Component } from 'react';


class QualityCodeQualitySoftware extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Quality Code = Quality Software</h2>
                </p>

                <div className="contentleft">
                    <p>Code quality can translate into how useful and maintainable your code is: high-quality code can be re-used and re-developed; low-quality code doesn’t last.</p>
                    <p>Software projects can be subject to different constraints at different stages (from requirements to analysis, development, testing, deployment, and maintenance) which can sometimes lead to the code itself being handled as the least important aspect (function over form). However, one of the most important — and often forgotten — properties of good software is its code quality.</p>
                    <ul>
                        <li>Readability, consistency — how easy it is to read and understand sections of the code; this includes code clarity, simplicity, and documentation.</li>
                        <li>Predictability, reliability, and robustness — software behavior should be predictable, and not prone to hidden bugs.</li>
                        <li>Maintainability and extensibility — fixing, updating and improving software should be as simple as possible, not inherently complex.</li>
                    </ul>
                    <p>How does Quality Code result in Quality Software?</p>
                    <ul>
                        <li>Code that is highly readable, consistent and documented is easier to review, leading to a much lower development effort.</li>
                        <li>Clean and elegant code is also much easier to understand, maintain and extend.</li>
                        <li>•	Software that is well designed and achieves a lower code complexity also benefits a great deal in terms of testability and robustness (less prone to new bugs being introduced).</li>
                    </ul>
                </div>
            </div>

        );

    }
}

export default QualityCodeQualitySoftware;
