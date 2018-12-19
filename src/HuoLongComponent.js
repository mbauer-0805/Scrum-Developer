import React, {Component} from 'react';
import BDUF from "./huolongComponents/BDUF";
import Bugs from "./huolongComponents/Bugs";
import ContiniousIntegration from "./huolongComponents/ContiniousIntegration";
import EmergentArchitecture from "./huolongComponents/EmergentArchitecture";
import FIRST from "./huolongComponents/FIRST";
import IdealDay from "./huolongComponents/IdealDay";
import Manifesto6 from "./huolongComponents/Manifesto6";
import Increment from "./huolongComponents/Increment";
import ReviewMeeting from "./huolongComponents/ReviewMeeting";
import ScrumBacklog from "./huolongComponents/ScrumBacklog";
import ScrumMaster from "./huolongComponents/ScrumMaster";
import ScrumTeam from "./huolongComponents/ScrumTeam";
import SprintPlanning from "./huolongComponents/SprintPlanning";
import SprintReview from "./huolongComponents/SprintReview";
import Tasks from "./huolongComponents/Tasks";
import TDD from "./huolongComponents/TDD";
import UnitTestBestPractices from "./huolongComponents/UnitTestBestPractices";
import UnitTests from "./huolongComponents/UnitTests";
import UserStories from "./huolongComponents/UserStories";

class HuoLongComponent extends Component {

    render() {
        return (
            <div className="CustomComponent">
<BDUF/>
                <Bugs/>
                <ContiniousIntegration/>
                <EmergentArchitecture/>
                <FIRST/>
                <IdealDay/>
                <Manifesto6/>
                <Increment/>
                <ReviewMeeting/>
                <ScrumBacklog/>
                <ScrumMaster/>
                <ScrumTeam/>
                <SprintPlanning/>
                <SprintReview/>
                <Tasks/>
                <TDD/>
                <UnitTestBestPractices/>
                <UnitTests/>
                <UserStories/>


            </div>
        );
    }
}

export default HuoLongComponent;