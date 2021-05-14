import * as React from 'react';
import * as actions from './actions';

const StateContext = React.createContext({
  url: null,
  markdown: null
});

function stateReducer(state, action) {
  switch (action.type) {
  case actions.ACTION_UPDATE_URL: {
    return { url: state.url };
  }
  case actions.ACTION_UPDATE_MARKDOWN: {
    return { markdown: state.markdown };
  }
  default: {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
  }
}

function StateProvider({children}) {
  const [state, dispatch] = React.useReducer(stateReducer, {count: 0});
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch};
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
}

function useCount() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a StateProvider');
  }
  return context;
}

export { StateProvider, useCount };
