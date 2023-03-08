import { Space } from 'antd';
import './App.css';
import AppHeader from './components/AppHeader/index';
import AppFooter from './components/AppFooter/index';
import PageContent from './components/PageContent/index';
import SideMenu from './components/SideMenu/index';
import TodoList from './pages/TodoList';
import Count from './components/count';
import Post from './components/post/Post';

function App() {
  return (
    // <div className='App'>
    //   <AppHeader />
    //   <div className='SideMenuAndPageContent'>
    //     <SideMenu></SideMenu>
    //     <PageContent></PageContent>
    //   </div>
    //   <AppFooter />
    // </div>
    // <TodoList />
    // <Count />
    <Post />
  );
}

export default App;
