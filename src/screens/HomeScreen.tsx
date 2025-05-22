import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Avatar } from 'react-native-paper';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const challenges = [
    {
      id: 'Calculator',
      title: 'Challenge 1: Calculator',
      description: 'Create a React Native calculator that can add two numbers with input validation and error handling.',
      icon: 'calculator',
      color: '#2196F3',
      route: 'Calculator'
    },
    {
      id: 'Navbar',
      title: 'Challenge 2: Responsive Navbar',
      description: 'Build a responsive navbar with hamburger menu for mobile and search functionality.',
      icon: 'menu',
      color: '#4CAF50',
      route: 'Navbar'
    },
    {
      id: 'TwoSum',
      title: 'Challenge 3: Two Sum Algorithm',
      description: 'Implement the Two Sum II algorithm with UI, test cases, and performance optimization.',
      icon: 'code-array',
      color: '#FF9800',
      route: 'TwoSum'
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.headerCard}>
        <Card.Content>
          <Title style={styles.mainTitle}>React Native Assessment</Title>
          <Paragraph style={styles.subtitle}>
            Complete mobile development challenges showcasing React Native expertise
          </Paragraph>
        </Card.Content>
      </Card>

      {challenges.map((challenge) => (
        <Card key={challenge.id} style={styles.challengeCard}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Avatar.Icon 
                size={48} 
                icon={challenge.icon} 
                style={[styles.avatar, { backgroundColor: challenge.color }]}
              />
              <View style={styles.cardTitleContainer}>
                <Title style={styles.challengeTitle}>{challenge.title}</Title>
              </View>
            </View>
            
            <Paragraph style={styles.challengeDescription}>
              {challenge.description}
            </Paragraph>
            
            <Button 
              mode="contained" 
              onPress={() => navigation.navigate(challenge.route)}
              style={[styles.button, { backgroundColor: challenge.color }]}
              icon={challenge.icon}
            >
              View {challenge.title.split(':')[0]}
            </Button>
          </Card.Content>
        </Card>
      ))}

      <Card style={styles.infoCard}>
        <Card.Content>
          <Title style={styles.infoTitle}>Technical Stack</Title>
          <View style={styles.techStack}>
            <View style={styles.techItem}>
              <Avatar.Icon size={32} icon="react" style={styles.techIcon} />
              <Paragraph style={styles.techText}>React Native</Paragraph>
            </View>
            <View style={styles.techItem}>
              <Avatar.Icon size={32} icon="language-typescript" style={styles.techIcon} />
              <Paragraph style={styles.techText}>TypeScript</Paragraph>
            </View>
            <View style={styles.techItem}>
              <Avatar.Icon size={32} icon="state-machine" style={styles.techIcon} />
              <Paragraph style={styles.techText}>Context API</Paragraph>
            </View>
            <View style={styles.techItem}>
              <Avatar.Icon size={32} icon="material-design" style={styles.techIcon} />
              <Paragraph style={styles.techText}>Material Design</Paragraph>
            </View>
          </View>
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
  headerCard: {
    marginBottom: 20,
    elevation: 4,
    backgroundColor: '#6200ee',
  },
  mainTitle: {
    fontSize: 28,
    marginBottom: 8,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
  },
  challengeCard: {
    marginBottom: 16,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    marginRight: 16,
  },
  cardTitleContainer: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    marginTop: 8,
  },
  infoCard: {
    marginTop: 8,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  techItem: {
    alignItems: 'center',
    margin: 8,
    width: '40%',
  },
  techIcon: {
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
  },
  techText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
});

export default HomeScreen;