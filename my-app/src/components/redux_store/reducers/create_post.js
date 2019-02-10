const CLICK_BUTTON = 'CLICK_BUTTON'

const initialState = {
    messages_data:[],
    post: "",
    author: "Yan Khusid",
    clicked: false
}

export const post_reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_BUTTON:
            return { ...state, clicked: true, messages_data: [...state.messages_data, action.payload] }
            default: return state
    }
}