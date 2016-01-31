import { apiStore } from './store.js';

import { apiGetData, apiAddItem } from './actions.js';

const store = apiStore();

store.dispatch(apiGetData('all'));

let item = {
    "type": "post",
    "content": {
        "title": "Cool. Both async redux methods should be working together now!",
        "body": "this is it"
    }
};

// store.dispatch(apiAddItem(item));