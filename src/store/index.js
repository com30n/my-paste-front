import {createStore} from 'vuex'

export default createStore({
    state: {
        pasteObj: {
            ttl: 300,
            body: '',
            created_at: '',
            updated_at: '',
            permalink: '',
            deleted_at: ''
        }
    },
    mutations: {
        setPasteObj(
            state,
            payload
        ) {
            state.pasteObj.ttl = payload.ttl
            state.pasteObj.body = payload.body
            state.pasteObj.created_at = payload.created_at
            state.pasteObj.updated_at = payload.updated_at
            state.pasteObj.deleted_at = payload.deleted_at
            state.pasteObj.permalink = payload.permalink
        }
    },
    actions: {},
    modules: {}
})
