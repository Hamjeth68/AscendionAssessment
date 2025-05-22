// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { useAppContext } from '../context/AppContext';
// import { Button, TextInput, Text, Card, Title } from 'react-native-paper';
// import { RFValue } from 'react-native-responsive-fontsize';

// const CalculatorScreen = () => {
//   const { state, dispatch } = useAppContext();
//   const { firstNumber, secondNumber, result, error } = state.calculator;

//   const handleCalculate = () => {
//     dispatch({ type: 'CALCULATE_SUM' });
//   };

//   const handleClear = () => {
//     dispatch({ type: 'CLEAR_CALCULATOR' });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Title style={styles.title}>Adding Two Numbers</Title>
          
//           <TextInput
//             label="First Number"
//             value={firstNumber}
//             onChangeText={(text) => dispatch({ type: 'SET_CALCULATOR_INPUT', field: 'firstNumber', value: text })}
//             keyboardType="numeric"
//             style={styles.input}
//             mode="outlined"
//           />

//           <TextInput
//             label="Second Number"
//             value={secondNumber}
//             onChangeText={(text) => dispatch({ type: 'SET_CALCULATOR_INPUT', field: 'secondNumber', value: text })}
//             keyboardType="numeric"
//             style={styles.input}
//             mode="outlined"
//           />

//           {error && <Text style={styles.error}>{error}</Text>}

//           <View style={styles.buttonContainer}>
//             <Button 
//               mode="contained" 
//               onPress={handleCalculate}
//               style={styles.button}
//             >
//               Add Two Numbers
//             </Button>
//             <Button 
//               mode="outlined" 
//               onPress={handleClear}
//               style={styles.button}
//             >
//               Clear
//             </Button>
//           </View>

//           {result !== null && (
//             <View style={styles.resultContainer}>
//               <Text style={styles.resultLabel}>Total:</Text>
//               <Text style={styles.resultValue}>{result}</Text>
//             </View>
//           )}
//         </Card.Content>
//       </Card>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: RFValue(16),
//   },
//   card: {
//     marginBottom: RFValue(16),
//   },
//   title: {
//     fontSize: RFValue(24),
//     marginBottom: RFValue(16),
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: RFValue(16),
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: RFValue(16),
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: RFValue(4),
//   },
//   resultContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: RFValue(16),
//   },
//   resultLabel: {
//     fontSize: RFValue(18),
//     fontWeight: 'bold',
//     marginRight: RFValue(8),
//   },
//   resultValue: {
//     fontSize: RFValue(24),
//     color: '#6200ee',
//   },
//   error: {
//     color: 'red',
//     marginBottom: RFValue(16),
//     textAlign: 'center',
//   },
// });

// export default CalculatorScreen;



import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { Button, TextInput, Text, Card, Title } from 'react-native-paper';

const CalculatorScreen = () => {
  const { state, dispatch } = useAppContext();
  const { firstNumber, secondNumber, result, error } = state.calculator;

  const handleCalculate = () => {
    dispatch({ type: 'CALCULATE_SUM' });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_CALCULATOR' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Adding Two Numbers</Title>
          
          <TextInput
            label="First Number"
            value={firstNumber}
            onChangeText={(text) => dispatch({ 
              type: 'SET_CALCULATOR_INPUT', 
              field: 'firstNumber', 
              value: text 
            })}
            keyboardType="numeric"
            style={styles.input}
            mode="outlined"
            placeholder="Enter first number"
          />

          <TextInput
            label="Second Number"
            value={secondNumber}
            onChangeText={(text) => dispatch({ 
              type: 'SET_CALCULATOR_INPUT', 
              field: 'secondNumber', 
              value: text 
            })}
            keyboardType="numeric"
            style={styles.input}
            mode="outlined"
            placeholder="Enter second number"
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <View style={styles.buttonContainer}>
            <Button 
              mode="contained" 
              onPress={handleCalculate}
              style={styles.button}
              icon="calculator"
            >
              Add Two Numbers
            </Button>
            <Button 
              mode="outlined" 
              onPress={handleClear}
              style={styles.button}
              icon="eraser"
            >
              Clear
            </Button>
          </View>

          {result !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Total:</Text>
              <Text style={styles.resultValue}>{result}</Text>
            </View>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#6200ee',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#e8f5e8',
    borderRadius: 8,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333',
  },
  resultValue: {
    fontSize: 28,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  error: {
    color: '#d32f2f',
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#ffebee',
    padding: 8,
    borderRadius: 4,
  },
});

export default CalculatorScreen;