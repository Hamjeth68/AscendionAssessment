import { useAppContext } from '@/context/AppContext';
import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Appbar, TextInput, Button, Menu, Divider, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = 'AEON' }) => {
  const { state, dispatch } = useAppContext();
  const { isMenuOpen, searchQuery } = state.navbar;

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const handleSearch = (text: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', value: text });
  };

  const menuItems = [
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Templates',
    'Enterprise',
  ];

  const handleMenuItemPress = (item: string) => {
    console.log(`Navigating to ${item}`);
    // In a real app, you would navigate to the respective page
    if (isMobile) {
      toggleMenu(); // Close menu on mobile after selection
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        {isMobile ? (
          <>
            {/* Mobile Layout */}
            <Appbar.Content title={title} titleStyle={styles.title} />
            <Appbar.Action 
              icon={isMenuOpen ? 'close' : 'menu'} 
              onPress={toggleMenu}
              iconColor="#fff"
            />
          </>
        ) : (
          <>
            {/* Desktop Layout */}
            <View style={styles.desktopContainer}>
              <Text style={styles.desktopTitle}>{title}</Text>
              
              <View style={styles.navItems}>
                {menuItems.map(item => (
                  <TouchableOpacity 
                    key={item} 
                    onPress={() => handleMenuItemPress(item)}
                    style={styles.navItem}
                  >
                    <Text style={styles.navItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                placeholder="Search documentation..."
                value={searchQuery}
                onChangeText={handleSearch}
                style={styles.searchInput}
                mode="outlined"
                right={<TextInput.Icon icon="magnify" />}
                contentStyle={styles.searchInputContent}
              />
            </View>
          </>
        )}
      </Appbar.Header>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <View style={styles.mobileMenu}>
          <View style={styles.mobileMenuHeader}>
            <Text style={styles.mobileMenuTitle}>Navigation</Text>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          
          {menuItems.map(item => (
            <TouchableOpacity 
              key={item} 
              onPress={() => handleMenuItemPress(item)}
              style={styles.mobileMenuItem}
            >
              <Text style={styles.mobileMenuItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
          
          <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearch}
            style={styles.mobileSearchInput}
            mode="outlined"
            right={<TextInput.Icon icon="magnify" />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  header: {
    backgroundColor: '#6200ee',
    elevation: 4,
    paddingHorizontal: 8,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desktopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  desktopTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  navItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  searchInput: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
  },
  searchInputContent: {
    fontSize: 14,
  },
  mobileMenu: {
    backgroundColor: 'white',
    padding: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  mobileMenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mobileMenuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 20,
    color: '#666',
    padding: 4,
  },
  mobileMenuItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mobileMenuItemText: {
    fontSize: 16,
    color: '#333',
  },
  mobileSearchInput: {
    marginTop: 16,
    backgroundColor: 'white',
  },
});

export default Navbar;