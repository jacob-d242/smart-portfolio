import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import {lightTheme} from "./components/Themes"
import { Switch,Route } from 'react-router-dom';

import Main from './components/Main';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';

function App() {
  return <>
    <GlobalStyles />
    
    <ThemeProvider theme={lightTheme}>
      <Switch >
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="skills/" component={MySkillsPage} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

