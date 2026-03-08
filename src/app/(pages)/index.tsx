import { View, Text } from 'react-native';
import ClientSection from 'src/components/ClientSection';
import Hello from '../../components/Hello';
import Hero from "../../components/Hero";

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Page!</Text>
      <Hero />
      <Text>Welcome to the Home Page!</Text>
      <Hello/>
      <ClientSection />
    </View>
  );
}