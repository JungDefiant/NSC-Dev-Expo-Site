import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

interface ClientSectionGroupProps {
  imgSrc: string;
  title: string;
}

export default function ClientSection() {
  return (
    <View style={styles.sectionContainer}>
      <LinearGradient start={{x:0.5, y:0}} end={{x:0.5, y:1}} colors={["#1A1A1A", "#808080"]}>

        <Text style={styles.titleText}>Clients</Text>
        <View style={styles.sectionGroupContainer}>
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="Girl Geek Con" />
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="Belinda's Closet" />
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="NSC Events" />
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="Pelletier Construction" />
        </View>
      </LinearGradient>

    </View>
  )
}

function ClientSectionEntry({ imgSrc, title }: ClientSectionGroupProps) {
  return (
    <View style={styles.sectionGroupEntryContainer}>
      <img style={{ alignSelf: 'center' }} src={imgSrc} width='80px' height='80px' />
      {/* <Text>Placeholder for image</Text> */}
      <Text style={styles.baseText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 588
  },
  sectionGroupContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  sectionGroupEntryContainer: {
    flex: 0,
    justifyContent: 'center',
    minWidth: "35%",
    minHeight: "35%",
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  baseText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 400,
    textAlign: 'center',
    color: 'white'
  },
});