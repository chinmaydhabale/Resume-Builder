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
        data: <Firstresume />,
        id: 1
    },

    {
        thumbnail: resumetemplate2,
        data: <Secondresume />,
        id: 2
    },

    {
        thumbnail: resumetemplate3,
        data: <Thirdresume />,
        id: 3
    },

    {
        thumbnail: resumetemplate4,
        data: <Forthresume />,
        id: 4
    }

]

export default temp;