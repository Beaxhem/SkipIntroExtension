setInterval(() => {
    const buttons = document.getElementsByClassName("watch-video--skip-content-button");
    if (buttons.length === 0) {
        return;
    }

    const button = buttons[0];
    button.click();
}, 1000)
