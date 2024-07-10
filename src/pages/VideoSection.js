import vdo from "./DigitalAgency.mp4";
export default function VideoPlayer() {
  return (
    <>
      {/* <iframe
        src={vdo}
        title="digital video"
        // style={{ width: "100%", height: "100vh" }}
        autoplay={false}
        allowfullscreen
      ></iframe> */}
      <video controls autoPlay src={vdo} width="100%" height="1000" />
    </>
  );
}
