import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, ActionType } from '@/types';
import { twoSum, runTwoSumTests } from '@/utils/algorithms';

const initialState: AppState = {
  calculator: {
    firstNumber: '',
    secondNumber: '',
    result: null,
    error: null,
  },
  navbar: {
    isMenuOpen: false,
    searchQuery: '',
  },
  twoSum: {
    inputArray: '',
    targetValue: '',
    result: null,
    error: null,
    testResults: [],
  },
};

const appReducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case 'SET_CALCULATOR_INPUT':
      return {
        ...state,
        calculator: {
          ...state.calculator,
          [action.field]: action.value,
          error: null,
        },
      };

    case 'CALCULATE_SUM': {
      const { firstNumber, secondNumber } = state.calculator;
      
      if (!firstNumber.trim() || !secondNumber.trim()) {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            error: 'Please enter both numbers',
            result: null,
          },
        };
      }

      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);

      if (isNaN(num1) || isNaN(num2)) {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            error: 'Please enter valid numbers',
            result: null,
          },
        };
      }

      return {
        ...state,
        calculator: {
          ...state.calculator,
          result: num1 + num2,
          error: null,
        },
      };
    }

    case 'CLEAR_CALCULATOR':
      return {
        ...state,
        calculator: initialState.calculator,
      };

    case 'TOGGLE_MENU':
      return {
        ...state,
        navbar: {
          ...state.navbar,
          isMenuOpen: !state.navbar.isMenuOpen,
        },
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchQuery: action.value,
        },
      };

    case 'SET_TWO_SUM_INPUT':
      return {
        ...state,
        twoSum: {
          ...state.twoSum,
          [action.field]: action.value,
          error: null,
        },
      };

    case 'CALCULATE_TWO_SUM': {
      const { inputArray, targetValue } = state.twoSum;
      
      try {
        const numbers = inputArray
          .replace(/[\[\]]/g, '')
          .split(',')
          .map(str => parseInt(str.trim()))
          .filter(num => !isNaN(num));

        const target = parseInt(targetValue);

        if (numbers.length < 2) {
          throw new Error('Array must contain at least 2 numbers');
        }

        if (isNaN(target)) {
          throw new Error('Please enter a valid target number');
        }

        for (let i = 1; i < numbers.length; i++) {
          // Ensure the array is sorted in non-decreasing order as required by the twoSum algorithm
          if (numbers[i] < numbers[i - 1]) {
            throw new Error('Array must be sorted in non-decreasing order');
          }
        }

        const result = twoSum(numbers, target);

        if (result.length === 0) {
          throw new Error('No solution found for the given target');
        }

        return {
          ...state,
          twoSum: {
            ...state.twoSum,
            result,
            error: null,
          },
        };
      } catch (error) {
        return {
          ...state,
          twoSum: {
            ...state.twoSum,
            result: null,
            error: error instanceof Error ? error.message : 'An error occurred',
          },
        };
      }
    }

    case 'CLEAR_TWO_SUM':
      return {
        ...state,
        twoSum: {
          ...initialState.twoSum,
          testResults: state.twoSum.testResults,
        },
      };

    case 'RUN_TWO_SUM_TESTS':
      return {
        ...state,
        twoSum: {
          ...state.twoSum,
          testResults: runTwoSumTests(),
        },
      };

    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ActionType>;
} | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};