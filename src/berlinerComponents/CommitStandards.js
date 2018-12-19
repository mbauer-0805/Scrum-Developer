import React, {Component} from 'react';
import '../HuoLong.css';


class CommitStandards extends Component {
    render() {
        return (
            <div className="contentleft">
                <h1 className="berlinercontent">Commit Standards</h1>
                <h2>Commits are Polaroids of us working, and we don't want to take a bad photograph, right?</h2>

                <h3>General Rules:</h3>
                <ul>
                    <li>Make atomic commits of changes, even across multiple files, 
                        in logical units</li>
                    <li>each commit should be focused on one specific purpose/ one task/ one fix</li>
                    <li>->commit the bug fix as one change, and the layout changes as a separate one</li>
                    <li>make sure a commit does not contain unnecessary whitespace changes (Return key, spacebar key, or the Tab key), can be checked with: $ git diff --check</li>
                    <li>don't have to invent a commit message style, probably your project coding standards already have some conventions</li>
                </ul>
                    <h3>Commit Message - bad Style:</h3>
                     <ul>
                    <li>Fixed unnecessary bug.</li>
                    <li>I must sleep... it's working... in just three hours...</li>
                    <li>fix bug, for realz</li>
                    <li>more ignored words</li>
                    <li>Don't push this commit</li>
                     </ul>
                <h3>Commit Message - good Style:</h3>
                <ul>
                    <li>no more than about 50 characters</li>
                    <li>start with Capital letter</li>
                    <li>describes the commit concisely</li>
                    <li>if more detailed explanations needed, create a blank line, followed by a more detailed explanation</li>
                    <li>use the imperative present tense:</li>
                        <ul>
                            <li>"Adding tests for" instead of "I added tests for"</li>
                            <li>"Changing x to y" instead of "Changed x to y"</li>
                         </ul>
                    </ul>
                <h3>Benefits:</h3>
                <ul>
                    <li>Easy to roll back without affecting other changes</li>
                    <li>Easy to make other changes on the fly</li>
                    <li>Easy to merge features to other branches</li>
                </ul>
                
            </div>

        );

    }
}

export default CommitStandards;
