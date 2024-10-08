export const WaveTopPage = () => (
  <svg viewBox="0 0 1440 320">
    <path
      className="fill-primary"
      fillOpacity="1"
      d="M0,256L120,218.7C240,181,480,107,720,69.3C960,32,1200,32,1320,32L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
    />
  </svg>
);

export const WaveBottomPage = () => (
  <svg viewBox="0 0 1440 320">
    <path
      className="fill-primary"
      fillOpacity="1"
      d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
  </svg>
);

export const Stain1 = (props: Partial<HTMLElement>) => (
  <svg viewBox="0 0 200 200" className={props.className}>
    <path
      className="fill-primary"
      d="M54.5,-65.3C70,-51.9,81.5,-34.1,80.7,-17.4C79.9,-0.6,66.7,15.1,54,25.6C41.3,36,29,41,15.7,47.9C2.4,54.8,-12,63.6,-24.4,61.5C-36.7,59.3,-47.1,46.3,-50.2,32.9C-53.3,19.5,-49.1,5.8,-46.9,-8.5C-44.7,-22.9,-44.5,-37.8,-37,-52.7C-29.5,-67.5,-14.8,-82.2,2.4,-85C19.5,-87.8,38.9,-78.7,54.5,-65.3Z"
      transform="translate(100 100)"
    />
  </svg>
);
