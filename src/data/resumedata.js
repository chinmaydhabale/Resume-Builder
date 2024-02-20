import Firstresume from "../Component/resume-template/Firstresume/Firstresume";
import Secondresume from "../Component/resume-template/Secondresume/Secondresume";
import Thirdresume from "../Component/resume-template/Thirdresume/Thirdresume";
import Forthresume from "../Component/resume-template/Forthresume/Forthresume";
import resumetemplate1 from '../Utility/photos/resumetemplate1.jpg'
import resumetemplate2 from '../Utility/photos/resumetemplate2.jpg'
import resumetemplate3 from '../Utility/photos/resumetemplate3.jpg'
import resumetemplate4 from '../Utility/photos/resumetemplate4.jpg'




// Stores All Templates As a json State 
const temp = [
    {
        thumbnail: resumetemplate1,
        data: <Firstresume key='1' />,
        id: 'one'
    },

    {
        thumbnail: resumetemplate2,
        data: <Secondresume key="2" />,
        id: 'two'
    },

    {
        thumbnail: resumetemplate3,
        data: <Thirdresume key="3" />,
        id: 'three'
    },

    {
        thumbnail: resumetemplate4,
        data: <Forthresume key="4" />,
        id: 'four'
    }

]

export default temp;