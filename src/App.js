import { Space } from 'antd';
import './App.css';
import AppHeader from './components/AppHeader/index';
import AppFooter from './components/AppFooter/index';
import PageContent from './components/PageContent/index';
import SideMenu from './components/SideMenu/index';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <div className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
