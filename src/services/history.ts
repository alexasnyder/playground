import { createBrowserHistory } from 'history';

// create our own history instance so that we can programatically
// change route outside the context of a component
// https://stackoverflow.com/a/45849608/6147893
export default createBrowserHistory();