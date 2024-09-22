import { PageCover } from './pages/PageCover';
import { PageProblem } from './pages/PageProblem';
import { PageUserSegmentation } from './pages/PageUserSegmentation';
import { PageTargetMarket } from './pages/PageTargetMarket';
import { PageUserPersona1 } from './pages/PageUserPersona1';
import { PageUserPersona2 } from './pages/PageUserPersona2';
import { PageUserPersona3 } from './pages/PageUserPersona3';
import { PageSurveys } from './pages/PageSurveys';
import { PageSurveysDetails } from './pages/PageSurveysDetails';
import { PageCurrentScenario1 } from './pages/PageCurrentScenario1';
import { PageCurrentScenario2 } from './pages/PageCurrentScenario2';
import { PageCurrentScenario3 } from './pages/PageCurrentScenario3';
import { PageNarrative } from './pages/PageNarrative';
import { PagePrioritizationGrid } from './pages/PagePrioritizationGrid';
import { PageUserStoryMap } from './pages/PageUserStoryMap';
import { PageAppendix } from './pages/PageAppendix';

export default function App() {
  return (
    <div className="flex flex-col gap-4 mt-4 print:gap-0 print:mt-0">
      <PageCover />
      <PageProblem />
      <PageUserSegmentation />
      <PageTargetMarket />
      <PageSurveys />
      <PageSurveysDetails />
      <PageUserPersona1 />
      <PageUserPersona2 />
      <PageUserPersona3 />
      <PageCurrentScenario1 />
      <PageCurrentScenario2 />
      <PageCurrentScenario3 />
      <PageNarrative />
      <PagePrioritizationGrid />
      <PageUserStoryMap />
      <PageAppendix />
    </div>
  );
}
