import Spline from '@splinetool/react-spline';

export default function SplineCanvas() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Spline 
        scene="https://prod.spline.design/5kkP7FG2ZmnbZ7sO/scene.splinecode"
        onLoad={(spline) => {
          console.log("Spline object on load:", spline);
          // const robotHead = spline.findByName("Head"); // Assuming the robot's head object is named "Head"
          // if (robotHead) {
          //   window.addEventListener("mousemove", (e) => {
          //     const rotationX = (e.clientY / window.innerHeight - 0.5) * 2; // Normalize to -1 to 1
          //     const rotationY = (e.clientX / window.innerWidth - 0.5) * 2; // Normalize to -1 to 1
          //     robotHead.rotation.x = rotationX * 0.5; // Adjust sensitivity
          //     robotHead.rotation.y = rotationY * 0.5; // Adjust sensitivity
          //   });
          // }
        }}
      />
    </div>
  );
}
