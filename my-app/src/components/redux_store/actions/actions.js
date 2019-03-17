 const CLICK_BUTTON = 'CLICK_BUTTON'


 const clickOn = (newClick) => {
    return {
        type: CLICK_BUTTON,
        payload: newClick
    }
}

export default clickOn



