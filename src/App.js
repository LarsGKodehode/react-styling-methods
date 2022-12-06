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

const listOfJSX = data.map((element, index) => {
  return (
    <Card key={index} {...element} />
  )
})

function App() {
  return (
    <div className="card-wrapper">
      {/* {listOfJSX} */}
      <StyledWithGlobalCSS />
      <StyledWithInnlineCSS />
      <StyledWithCSSModules />

      <StyledDiv>
        <h3>This is inside a styled-components div</h3>
      </StyledDiv>
    </div>
  );
}

export default App;
