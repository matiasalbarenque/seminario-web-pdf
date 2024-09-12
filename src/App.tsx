import { Page1Intro } from './pages/Page1Intro';
import { Page2 } from './pages/Page2';

export default function App() {
  return (
    <div className="flex flex-col gap-4 mt-4 print:gap-0 print:mt-0">
      <Page1Intro />
      <Page2 />
    </div>
  );
}
