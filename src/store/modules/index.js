const files = require.context('.', false, /\.js$|\.tsx/);
let actions = {};
let initialState = {};

files.keys().forEach(fileName => {
    if (fileName === './index.js') return;
    // const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
    initialState = {
        ...initialState,
        ...files(fileName).initialState
    };
    actions = {
        ...actions,
        ...files(fileName).default
    }
});

export default actions;
export {
    initialState
};
