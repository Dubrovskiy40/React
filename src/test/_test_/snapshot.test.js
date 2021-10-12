import "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../../App";
import { store, persistor } from "../../store";
import { PersistGate } from 'redux-persist/integration/react'

describe('snapshot test', () => {
    it ('test reducer correct state after USER_LOGIN', () => {
        const component = render(
            <Provider store = { store }>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>, 
        );
        expect(component).toMatchSnapshot();
    });
});
