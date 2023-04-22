/**
 * This plugin tweaks the dazn.com media player.
 * It does this by removing the side panel, which shows
 * statistics about the game being shown. 
 * This allows the media player to be expanded.
 * 
 * The icon was created by [juicy_fish](https://www.flaticon.com/de/autoren/juicy-fish)
 * and can be found [here](https://www.flaticon.com/de/kostenloses-icon/videoplayer_9482573?term=player&page=1&position=95&origin=search&related_id=9482573)
 */


// TODO:
//  - toggle instead of removing node and css classes


/**
 * Remove the side menu to get more space.
 */
async function removeSideMenu() {
    try {
        const el = document.body.querySelector(
            "[class^=\"main__player-aside___\"]"
        );

        if (el && el.tagName === "ASIDE") {
            el.remove();
        } else {
            throw Error("Could not find side menu!");
        }
    } catch(error) {
        console.error(`[DAZN.MediaPlayer] ${error}`);
    }
}

/**
 * Remove CSS so that the media player uses the entire space.
 */
async function resizeMediaPlayer() {
    // Modify container
    try {
        const el = document.body.querySelector(
            "[class^=\"video-content__video-content-container___\"]",
            "[class$=\"video-content__video-content-container-with-panel___\"]"
        );

        if (el && el.tagName === "DIV" && el.parentElement.tagName === "MAIN") {
            for (const name of el.className.split(" ")) {
                el.classList.remove(
                    name
                );
            }
            el.style.width = "100vw";
        } else {
            throw Error("Could not find media player container!");
        }
        
        // Modify container element
        const child = el.querySelector(
            "[class^=video-content__video-content-element___"
        );

        if (child) {
            child.style.position = "static";
        } else {
            throw Error("Could not find media player container element!");
        }
    } catch(error) {
        console.error(`[DAZN.MediaPlayer] ${error}`);
    }
}


// main
async function main() {
    removeSideMenu();
    resizeMediaPlayer();
}
main();