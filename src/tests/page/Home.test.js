import Home from "../../pages/Home";
import { shallow } from 'enzyme';

describe('Pruebas en <Home/>', () => {
    test('Guardar el snapshot', () => {
        const wrapper = shallow(<Home/>);
        expect( wrapper ).toMatchSnapshot();
    })
})