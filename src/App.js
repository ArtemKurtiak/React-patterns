import {createContext} from 'react';
import StatelessComponent from "./components/StatelessComponent";
import SpreadAttributesComponent from "./components/SpreadAttributesComponent";
import SpreadPropsComponent from "./components/SpreadPropsComponent";
import ConditionalRenderingComponent from "./components/ConditionalRenderingComponent";
import DifferentChildrenTypesComponent from "./components/DifferentChildrenTypesComponent";
import RenderCallbackComponent from "./components/RenderCallbackComponent";
import ProxyComponent from "./components/ProxyComponent";
import EventSwitchComponent from "./components/EventSwitchComponent";
import ContainerComponent from "./components/ContainerComponent";
import {RenderName, WithApiValues} from "./components/HOCComponent";

export const ColorContext = createContext(null)

const App = () => {
    return <ColorContext.Provider value={{color: 'green'}}>
        <StatelessComponent/>
        <SpreadAttributesComponent {...{text: 'Artem'}} />
        <br/>
        <SpreadPropsComponent car={'Tesla'} model={'X'}/>
        <ConditionalRenderingComponent success={false}/>
        <DifferentChildrenTypesComponent array={[<p style={{display: 'inline'}}>Hello</p>, 2, 3, 4, 5]}
                                         string={'Hello world'} functionn={() => {
            return 'Value from function'
        }}/>
        <br/>
        <RenderCallbackComponent >
            {value => {return `Value from input is ${value}`}}
        </RenderCallbackComponent>
        <br/>
        <ProxyComponent />
        <br/>
        <EventSwitchComponent/>
        <br/>
        <ContainerComponent />
        <br/>
        <WithApiValues yourName={'Artem'} Component={RenderName} />
    </ColorContext.Provider>
}

export default App;
