import { Page01Cover } from './pages/page01Cover.tsx';
import { Page02Problem } from './pages/page02Problem.tsx';
import { Page04UserSegmentation } from './pages/page04UserSegmentation.tsx';
import { Page05TargetMarket } from './pages/page05TargetMarket.tsx';
import { Page09UserPersona } from './pages/page09UserPersona.tsx';
import { Page10UserPersona } from './pages/page10UserPersona.tsx';
import { Page11UserPersona } from './pages/page11UserPersona.tsx';
import { Page06Surveys } from './pages/page06Surveys.tsx';
import { Page07Surveys } from './pages/page07Surveys.tsx';
import { Page08Interviews } from './pages/page08Interviews.tsx';
import { Page12CurrentScenario } from './pages/page12CurrentScenario.tsx';
import { Page13CurrentScenario } from './pages/page13CurrentScenario.tsx';
import { Page14CurrentScenario } from './pages/page14CurrentScenario.tsx';
import { Page15Narrative } from './pages/page15Narrative.tsx';
import { Page17PrioritizationGrid } from './pages/page17PrioritizationGrid.tsx';
import { Page18UserStoryMap } from './pages/page18UserStoryMap.tsx';
import { Page19Appendix } from './pages/page19Appendix.tsx';
import { Page03Problem } from '@/pages/page03Problem.tsx';
import { Page16Narrative } from '@/pages/page16Narrative.tsx';

export default function App() {
  return (
    <div className="flex flex-col gap-4 mt-4 print:gap-0 print:mt-0">
      <Page01Cover />
      <Page02Problem />
      <Page03Problem />
      <Page04UserSegmentation />
      <Page05TargetMarket />
      <Page06Surveys />
      <Page07Surveys />
      <Page08Interviews />
      <Page09UserPersona />
      <Page10UserPersona />
      <Page11UserPersona />
      <Page12CurrentScenario />
      <Page13CurrentScenario />
      <Page14CurrentScenario />
      <Page15Narrative />
      <Page16Narrative />
      <Page17PrioritizationGrid />
      <Page18UserStoryMap />
      <Page19Appendix />
    </div>
  );
}
