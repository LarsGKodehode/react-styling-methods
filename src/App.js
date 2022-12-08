// CSS
import './styles/global.css'
import './styles/basic.css'
import './styles/colorPalette.css'

// Data
import data from './data/data'

// Components
import Card from "./componets/Card";
import StyledWithGlobalCSS from './componets/StyledWithGlobalCSS';
import StyledWithInnlineCSS from './componets/StyledWithInnlineCSS';
import StyledWithCSSModules from './componets/StyledWithCSSModules/StyledWithCSSModules';
import { StyledDiv } from './componets/StyledWithStyledComponents';
import Counter from './componets/Counter';
import TodoList from './componets/TodoList';

const listOfJSX = data.map((element, index) => {
  return (
    <Card key={element.id} title={element.title} text={element.text}  />
  )
})

function App() {
  return (
    <div className="card-wrapper">

      {/* This component keeps track of if the pointere is inside it or not */}
      <StyledWithGlobalCSS />

      {/* This keeps the count as a state */}
      <Counter />

      {/* More advanced showcase of how to handle Array as a state */}
      <TodoList />

    </div>
  );
}

export default App;
