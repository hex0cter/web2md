import * as React from 'react';
import * as actions from './actions';

const StateContext = React.createContext({
  url: null,
  markdown: null
});

function stateReducer(state, action) {
  // debugger;
  // console.log(`action is ${JSON.stringify(action)}, old state is ${JSON.stringify(state)}`);

  switch (action.type) {
  case actions.ACTION_UPDATE_URL: {
    return {
      ...state,
      url: action.url
    };
  }
  case actions.ACTION_UPDATE_MARKDOWN: {
    return {
      ...state,
      markdown: action.markdown
    };
  }
  default: {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
  }
}

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(stateReducer, { url: null });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
}

function useStateContext() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
}

export { StateProvider, useStateContext };
