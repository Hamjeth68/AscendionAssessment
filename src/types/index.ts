export interface CalculatorState {
  firstNumber: string;
  secondNumber: string;
  result: number | null;
  error: string | null;
}

export interface NavbarState {
  isMenuOpen: boolean;
  searchQuery: string;
}

export interface TwoSumState {
  inputArray: string;
  targetValue: string;
  result: number[] | null;
  error: string | null;
  testResults: Array<{
    input: number[];
    target: number;
    output: number[];
    expected: number[];
    isCorrect: boolean;
  }>;
}

export interface AppState {
  calculator: CalculatorState;
  navbar: NavbarState;
  twoSum: TwoSumState;
}

export type ActionType =
  | { type: 'SET_CALCULATOR_INPUT'; field: 'firstNumber' | 'secondNumber'; value: string }
  | { type: 'CALCULATE_SUM' }
  | { type: 'CLEAR_CALCULATOR' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'SET_SEARCH_QUERY'; value: string }
  | { type: 'SET_TWO_SUM_INPUT'; field: 'inputArray' | 'targetValue'; value: string }
  | { type: 'CALCULATE_TWO_SUM' }
  | { type: 'CLEAR_TWO_SUM' }
  | { type: 'RUN_TWO_SUM_TESTS' };