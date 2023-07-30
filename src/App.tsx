import ListGroup from './components/ListGroup';
import HeroSectionMessage from './components/HeroSectionMessage';
import AppCss from  './App.module.css'

function App() {
// JSX; Javascript XML
return (
    <>
    <div className={AppCss.motherSection}>
        <div className={AppCss.childSection}><HeroSectionMessage/></div>
        <div className={AppCss.child2Section}><ListGroup /></div>
    </div>
    </>
);
}

export default App;