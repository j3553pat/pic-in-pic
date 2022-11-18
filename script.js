const videoElement = document.getElementById("video")
const button = document.getElementById('button')

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        console.log('Error was found:', error)
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true
    //start
    await videoElement.requestPictureInPicture()

    button.disabled = false

})

selectMediaStream()