import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { Button, TextInput, Text, Card, Title, DataTable, Chip } from 'react-native-paper';

const TwoSumScreen = () => {
  const { state, dispatch } = useAppContext();
  const { inputArray, targetValue, result, error, testResults } = state.twoSum;

  const handleCalculate = () => {
    dispatch({ type: 'CALCULATE_TWO_SUM' });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_TWO_SUM' });
  };

  const runTests = () => {
    dispatch({ type: 'RUN_TWO_SUM_TESTS' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Two Sum II - Input Array Is Sorted</Title>
          
          <Text style={styles.description}>
            Given a 1-indexed array of integers sorted in non-decreasing order, 
            find two numbers that add up to a specific target number. 
            Returns the indices of the two numbers as [index1, index2].
          </Text>

          <View style={styles.algorithmInfo}>
            <Text style={styles.algorithmTitle}>Algorithm Details:</Text>
            <Text style={styles.algorithmText}>• Uses two-pointer technique</Text>
            <Text style={styles.algorithmText}>• Time Complexity: O(n)</Text>
            <Text style={styles.algorithmText}>• Space Complexity: O(1)</Text>
          </View>

          <TextInput
            label="Input Array (e.g., [2,7,11,15])"
            value={inputArray}
            onChangeText={(text) => dispatch({ 
              type: 'SET_TWO_SUM_INPUT', 
              field: 'inputArray', 
              value: text 
            })}
            style={styles.input}
            mode="outlined"
            placeholder="Enter sorted array like [1,2,3,4,5]"
            multiline
          />

          <TextInput
            label="Target Value"
            value={targetValue}
            onChangeText={(text) => dispatch({ 
              type: 'SET_TWO_SUM_INPUT', 
              field: 'targetValue', 
              value: text 
            })}
            keyboardType="numeric"
            style={styles.input}
            mode="outlined"
            placeholder="Enter target sum"
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <View style={styles.buttonContainer}>
            <Button 
              mode="contained" 
              onPress={handleCalculate}
              style={styles.button}
              icon="calculator-variant"
            >
              Find Two Sum
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
              <Text style={styles.resultLabel}>Result:</Text>
              <Chip style={styles.resultChip} textStyle={styles.resultChipText}>
                [{result.join(', ')}]
              </Chip>
            </View>
          )}

          <Button 
            mode="contained" 
            onPress={runTests}
            style={styles.testButton}
            icon="test-tube"
            buttonColor="#2e7d32"
          >
            Run All Test Cases
          </Button>

          {testResults.length > 0 && (
            <View style={styles.testResultsContainer}>
              <Title style={styles.testResultsTitle}>Test Results</Title>
              
              <View style={styles.testSummary}>
                <Text style={styles.testSummaryText}>
                  Passed: {testResults.filter(t => t.isCorrect).length} / {testResults.length}
                </Text>
              </View>

              <DataTable style={styles.table}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title textStyle={styles.tableHeaderText}>Input</DataTable.Title>
                  <DataTable.Title textStyle={styles.tableHeaderText} numeric>Target</DataTable.Title>
                  <DataTable.Title textStyle={styles.tableHeaderText}>Output</DataTable.Title>
                  <DataTable.Title textStyle={styles.tableHeaderText}>Expected</DataTable.Title>
                  <DataTable.Title textStyle={styles.tableHeaderText} numeric>Status</DataTable.Title>
                </DataTable.Header>

                {testResults.map((test, index) => (
                  <DataTable.Row key={index} style={test.isCorrect ? styles.passRow : styles.failRow}>
                    <DataTable.Cell textStyle={styles.tableCellText}>
                      [{test.input.join(', ')}]
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.tableCellText} numeric>
                      {test.target}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.tableCellText}>
                      [{test.output.join(', ')}]
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={styles.tableCellText}>
                      [{test.expected.join(', ')}]
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                      <Text style={test.isCorrect ? styles.passText : styles.failText}>
                        {test.isCorrect ? '✓ PASS' : '✗ FAIL'}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
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
  description: {
    fontSize: 14,
    marginBottom: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  algorithmInfo: {
    backgroundColor: '#e8f5e8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  algorithmTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2e7d32',
  },
  algorithmText: {
    fontSize: 14,
    color: '#2e7d32',
    marginBottom: 2,
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
  testButton: {
    marginBottom: 16,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#e8f5e8',
    borderRadius: 8,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333',
  },
  resultChip: {
    backgroundColor: '#6200ee',
  },
  resultChipText: {
    color: 'white',
    fontSize: 16,
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
  testResultsContainer: {
    marginTop: 16,
  },
  testResultsTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: '#2e7d32',
  },
  testSummary: {
    backgroundColor: '#e3f2fd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  testSummaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976d2',
    textAlign: 'center',
  },
  table: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#333',
  },
  tableCellText: {
    fontSize: 12,
    color: '#666',
  },
  passRow: {
    backgroundColor: '#f1f8e9',
  },
  failRow: {
    backgroundColor: '#ffebee',
  },
  passText: {
    color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 12,
  },
  failText: {
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default TwoSumScreen;