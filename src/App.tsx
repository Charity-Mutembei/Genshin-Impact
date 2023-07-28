import ListGroup from './components/ListGroup';
import HeroSectionMessage from './components/HeroSectionMessage';
import AppCss from  './App.module.css'

function App() {
// JSX; Javascript XML
return <div className={AppCss.motherSection}>
    <div className="row">
        <div className="col">
        <div className={AppCss.childSection}><HeroSectionMessage/></div>
        </div>
        <div className="col-7">
        <div className={AppCss.child2Section}><ListGroup /></div>
        </div>
    </div>
    </div>;
}

export default App;