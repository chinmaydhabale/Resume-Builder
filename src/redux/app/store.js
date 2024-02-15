import { configureStore } from '@reduxjs/toolkit';
import resumeinfoslice from '../slice/resumeinfoslice';
import templateslice from '../slice/templateslice';

export default configureStore({
    reducer: {
        resumeinfo: resumeinfoslice,
        template: templateslice,
    },
});
