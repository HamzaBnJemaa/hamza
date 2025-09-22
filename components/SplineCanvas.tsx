import Spline from '@splinetool/react-spline';

export default function SplineCanvas() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Spline scene="https://prod.spline.design/5kkP7FG2ZmnbZ7sO/scene.splinecode" />
    </div>
  );
}
