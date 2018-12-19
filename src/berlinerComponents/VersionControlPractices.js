import React, { Component } from 'react';

class VersionControlPractices extends Component {
    render() {
        return (
            <div>
                <p className="berlinercontent">
                    <h2>Version Control best practices</h2>
                </p>
                <div className="contentleft">
                    <ul>
                        <li>Use a descriptive commit message</li>
                        <p>Users can search through the commit messages</p>
                        <li>Make each commit a logical unit </li>
                        <p>Each commit should have a single purpose and should completely implement that purpose. </p>
                        This makes it easier to locate the changes related to some particular feature or bug fix
                        <p><code>git add file1 file2</code></p>
                        <p><code>git commit -m "message"</code></p>
                        <p><code>git commit file1 file2 //commits the two named files.</code></p>
                        <p>If a single file contains changes that serve multiple purposes, you may need to save your all your edits, then re-introduce them in logical chunks, committing as you go.
                        Git contains more sophisticated ways to do this, such as staging some but not all of the changes in a given file to the index
                        </p>

                        <li>Incorporate others' changes frequently</li>
                        <p>Work with the most up-to-date version of the files as possible. </p>
                        <li>Share your changes frequently</li>
                        <p>Once you have committed the changes for a complete, logical unit of work, you should share those changes with your colleagues as soon as possible (by doing git push or hg push).</p>
                        <li>Coordinate with your co-workers</li>
                        <p>The version control system can often merge changes that different people made simultaneously. However, when two people edit the same line, then this is a conflict that a person must manually resolve. </p>
                        <li>Don't commit generated files</li>
                        <p>Version control is intended for files that people edit.</p>
                    </ul>
                </div>
            </div>
        );

    }
}

export default VersionControlPractices;
