 const CLICK_BUTTON = 'CLICK_BUTTON'


 const clickOn = (newClick) => {
    return {
        type: CLICK_BUTTON,
        payload: newClick
    }
}

export default clickOn



// const mountPost = (post_data) => {
//     return {
//         type: MOUNT_POST,
//         payload: post_data
//     }
// }
