import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Mobile Assessment</Title>
          <Paragraph style={styles.description}>
            Please select one of the challenges below to view the implementation.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Challenge 1: Calculator</Title>
          <Paragraph>
            Create a calculator that can add two numbers.
          </Paragraph>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Calculator')}
            style={styles.button}
          >
            View Calculator
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Challenge 2: Navbar</Title>
          <Paragraph>
            Create a responsive navbar with hamburger menu for mobile.
          </Paragraph>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Navbar')}
            style={styles.button}
          >
            View Navbar
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Challenge 3: Two Sum Algorithm</Title>
          <Paragraph>
            Implement the Two Sum II algorithm with a user interface.
          </Paragraph>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('TwoSum')}
            style={styles.button}
          >
            View Two Sum
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: RFValue(16),
  },
  card: {
    marginBottom: RFValue(16),
  },
  title: {
    fontSize: RFValue(24),
    marginBottom: RFValue(8),
    textAlign: 'center',
  },
  description: {
    fontSize: RFValue(16),
    textAlign: 'center',
    marginBottom: RFValue(16),
  },
  button: {
    marginTop: RFValue(16),
  },
});

export default HomeScreen;