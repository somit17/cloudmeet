import { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalState {
  dialog: {
    isRegistrationOpen: boolean;
    openRegistration: () => void;
    closeRegistration: () => void;
  };
  auth: {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  };
  navMeeting:{
    meeting : boolean;
    joinMeeting:()=>void;
    closeMeeting: () => void;
  }
  theme: {
    currentTheme: 'light' | 'dark';
    toggleTheme: () => void;
  };
}

/**
 * Create the context with an undefined default value
 */
const GlobalContext = createContext<GlobalState | undefined>(undefined);

/**
 * Custom hook to use the global context
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

/**
 * GlobalProvider component to manage global state
 */
interface GlobalProviderProps {
  children: ReactNode; // Type for children prop
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  // Dialog State
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);


  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [meeting, setMeeting] = useState(false);

  // Theme State
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const joinMeeting = () => {
    console.log('Opening Join Meeting Dialog');
    setMeeting(true);
  };

  /**
   * Function to close the dialog
   */
  const closeMeeting = () => {
    console.log('Closing Join Meeting Dialog');
    setMeeting(false);
  };
  /**
   * Combine all states and actions into a single object
   */
  const globalState: GlobalState = {
    dialog: {
      isRegistrationOpen,
      openRegistration: () => {console.log('Event Fired');setIsRegistrationOpen(true)},
      closeRegistration: () => {console.log('Event Fired');setIsRegistrationOpen(false)}
    },
    auth: {
      isAuthenticated,
      login: () => setIsAuthenticated(true),
      logout: () => setIsAuthenticated(false),
    },
    theme: {
      currentTheme,
      toggleTheme: () => setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')),
    },
    navMeeting:{
      meeting,
      joinMeeting,
      closeMeeting,
    }
  };

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};