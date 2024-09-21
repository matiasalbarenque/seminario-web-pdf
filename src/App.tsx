import { PageCover } from './pages/PageCover';
import { PageProblem } from './pages/PageProblem';
import { PageUserSegmentation } from './pages/PageUserSegmentation';
import { PageTargetMarket } from './pages/PageTargetMarket';
import { PageUserPersona1 } from './pages/PageUserPersona1';
import { PageUserPersona2 } from './pages/PageUserPersona2';
import { PageUserPersona3 } from './pages/PageUserPersona3';
import { PageSurveys } from './pages/PageSurveys';
import { PageNarrative } from './pages/PageNarrative';
import { PrioritizationGrid } from './pages/PagePrioritizationGrid';

export default function App() {
  return (
    <div className="flex flex-col gap-4 mt-4 print:gap-0 print:mt-0">
      <PageCover />
      <PageProblem />
      <PageUserSegmentation />
      <PageTargetMarket />
      <PageSurveys />
      <PageUserPersona1 />
      <PageUserPersona2 />
      <PageUserPersona3 />
      <PageNarrative />
      <PrioritizationGrid />
    </div>
  );
}
