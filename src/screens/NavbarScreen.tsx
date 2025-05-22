import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph, List, Chip } from 'react-native-paper';

const NavbarScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Responsive Navbar Demo</Title>
          <Paragraph style={styles.description}>
            This page demonstrates the responsive navbar implementation. 
            The navbar adapts to different screen sizes automatically.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Desktop Features</Title>
          <List.Section>
            <List.Item
              title="Horizontal Menu Items"
              description="Navigation items displayed horizontally"
              left={props => <List.Icon {...props} icon="menu" />}
            />
            <List.Item
              title="Integrated Search"
              description="Search input visible in navbar"
              left={props => <List.Icon {...props} icon="magnify" />}
            />
            <List.Item
              title="Brand Logo"
              description="Company name/logo prominently displayed"
              left={props => <List.Icon {...props} icon="domain" />}
            />
          </List.Section>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Mobile Features</Title>
          <List.Section>
            <List.Item
              title="Hamburger Menu"
              description="Three-line menu icon for mobile navigation"
              left={props => <List.Icon {...props} icon="menu" />}
            />
            <List.Item
              title="Collapsible Menu"
              description="Menu slides down when hamburger is tapped"
              left={props => <List.Icon {...props} icon="chevron-down" />}
            />
            <List.Item
              title="Close Button"
              description="X button to close the mobile menu"
              left={props => <List.Icon {...props} icon="close" />}
            />
            <List.Item
              title="Mobile Search"
              description="Search input in mobile menu dropdown"
              left={props => <List.Icon {...props} icon="magnify" />}
            />
          </List.Section>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Technical Implementation</Title>
          <View style={styles.chipContainer}>
            <Chip style={styles.chip} icon="react">React Native</Chip>
            <Chip style={styles.chip} icon="language-typescript">TypeScript</Chip>
            <Chip style={styles.chip} icon="responsive">Responsive Design</Chip>
            <Chip style={styles.chip} icon="state-machine">Context API</Chip>
          </View>
          
          <Paragraph style={styles.techDescription}>
            The navbar uses Dimensions API to detect screen size and 
            automatically switches between desktop and mobile layouts. 
            State management is handled through Context API for menu 
            open/close states and search functionality.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>How to Test</Title>
          <List.Section>
            <List.Item
              title="Mobile View"
              description="Resize browser window or use mobile device"
              left={props => <List.Icon {...props} icon="cellphone" />}
            />
            <List.Item
              title="Menu Toggle"
              description="Tap hamburger icon to open/close menu"
              left={props => <List.Icon {...props} icon="gesture-tap" />}
            />
            <List.Item
              title="Search Function"
              description="Type in search box (UI only, no backend)"
              left={props => <List.Icon {...props} icon="keyboard" />}
            />
            <List.Item
              title="Navigation Items"
              description="Click menu items (console logs navigation)"
              left={props => <List.Icon {...props} icon="navigation" />}
            />
          </List.Section>
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
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
    color: '#6200ee',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  techDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginTop: 12,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  chip: {
    margin: 4,
  },
});

export default NavbarScreen;