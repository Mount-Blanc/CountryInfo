import Earth from './assets/Earth.mp4'


function Video () {
    return (
        <div>
       <video src={Earth} autoPlay loop/>
        </div>
    )
}
export default Video