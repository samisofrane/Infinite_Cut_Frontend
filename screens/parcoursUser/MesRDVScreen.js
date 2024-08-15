import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function FormuleScreen({ navigation }) {

const fakeData = [
  {
    "date": "2024-08-14T09:00:00Z",
    "userPro": "66b0ec4dd43fe65b724e607b",
    "plageHoraire": "09:00 - 10:00"
  },
  {
    "date": "2024-08-15T11:00:00Z",
    "userPro": "66b0ec92d43fe65b724e607f",
    "plageHoraire": "11:00 - 12:00"
  },
  {
    "date": "2024-08-16T14:00:00Z",
    "userPro": "66b0ecb8d43fe65b724e6082",
    "plageHoraire": "14:00 - 15:00"
  },
  {
    "date": "2024-08-17T16:30:00Z",
    "userPro": "66b0ec92d43fe65b724e607f",
    "plageHoraire": "16:30 - 17:30"
  },
  {
    "date": "2024-08-18T08:00:00Z",
    "userPro": "66b0ecb8d43fe65b724e6082",
    "plageHoraire": "08:00 - 09:00"
  },
  {
    "date": "2024-08-19T10:00:00Z",
    "userPro": "66b7e8210e01f6846651d4ca",
    "plageHoraire": "10:00 - 11:00"
  },
  {
    "date": "2024-08-20T13:00:00Z",
    "userPro": "64d1e6b0f0e4a3a01f82e837",
    "plageHoraire": "13:00 - 14:00"
  },
  {
    "date": "2024-08-21T15:00:00Z",
    "userPro": "66b7f0b90e01f6846651d4cd",
    "plageHoraire": "15:00 - 16:00"
  },
  {
    "date": "2024-08-22T17:00:00Z",
    "userPro": "66b7f7a30e01f6846651d4d1",
    "plageHoraire": "17:00 - 18:00"
  },
  {
    "date": "2024-08-23T12:00:00Z",
    "userPro": "66b80cc80e01f6846651d4d4",
    "plageHoraire": "12:00 - 13:00"
  }
]






  const [isLiked, setIsLiked] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteRdvVisible, setModalDeleteRdvVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleDeleteCard = () => {
    setModalVisible(true);
  };

  const handleDeleteFormule = () => {
    setModalVisible(false);
    setModalDeleteRdvVisible(true);
    setTimeout(() => {
      setModalDeleteRdvVisible(false);
    }, 2400);
    setTimeout(() => {
      navigation.navigate("RDVs");
    }, 2500);
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
  }
  return (
    <View
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Header
          title="INFINITE CUT"
          colorScissors={false}
          colorUser={true}
          navigation={navigation}
        />
        <SubHeaderProfile
          firstText="Mes RDV"
          secondText="Mon Compte"
          navigation={navigation}
          styleFirstText="500"
        />
      </View>
      <View
        style={styles.page}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Mon prochain Rendez-vous</Text>
        <View style={styles.upContainer}>
          <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.rdvCard}>
              <View style={styles.informations}>
                <Text style={styles.date}>Vendredi 16 Août, 16h00</Text>
                <View style={styles.imageName}>
                  <Image
                    style={styles.img}
                    source={require("../../assets/background_home.jpg")}
                    alt="photo salon"
                  />
                  <Text style={styles.name}>
                    Lucie Saint Clair{"\n"}Adresse du salon
                  </Text>
                </View>
                <View style={styles.allIcons}>
                  <View style={styles.prestation}>
                    <Entypo name="scissors" size={24} color="#5E503F" />
                    <Text> N° formule</Text>
                  </View>
                  <View style={styles.tempsMoyen}>
                    <Entypo name="clock" size={24} color="#5E503F" />
                    <Text> 20 minutes</Text>
                  </View>
                </View>
              </View>
              <Modal visible={modalVisible} animationType="fade" transparent>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                      onPress={() => handleClose()}
                      style={styles.iconContainer}
                      activeOpacity={0.8}
                    >
                      <Entypo name="squared-cross" size={30} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.textModal}>
                      Vous êtes sur le point d'annuler votre rendez-vous.
                    </Text>
                    <TouchableOpacity
                      style={styles.confirmButton}
                      onPress={() => handleDeleteFormule()}
                    >
                      <Text style={styles.confirmButtonText}>Confirmer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("DatePicker")}
              >
                <Text style={styles.textButton}>Changer de RDV</Text>
              </TouchableOpacity>
              <View style={styles.calendarAndDelete}>
                <TouchableOpacity
                  style={styles.addToCalendar}
                  onPress={() => navigation.navigate("DatePicker")}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#5E503F"
                  />
                  <Text> Ajouter un {"\n"}nouveau RDV</Text>
                </TouchableOpacity>
                <Modal
                  visible={modalDeleteRdvVisible}
                  animationType="fade"
                  transparent
                >
                  <View style={styles.centeredCardView}>
                    <View style={styles.modalCardView}>
                      <Text style={styles.textCardModal}>
                        Votre rendez-vous a bien été supprimé. {"\n"} {"\n"}Et
                        si on en prenait un autre ?
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={styles.deleteRdv}
                  onPress={() => handleDeleteCard()}
                >
                  <Feather name="trash" size={24} color="red" />
                  <Text> Annuler le RDV</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rdvCard}>
              <View style={styles.informations}>
                <Text style={styles.date}>Vendredi 16 Août, 16h00</Text>
                <View style={styles.imageName}>
                  <Image
                    style={styles.img}
                    source={require("../../assets/background_home.jpg")}
                    alt="photo salon"
                  />
                  <Text style={styles.name}>
                    Lucie Saint Clair{"\n"}Adresse du salon
                  </Text>
                </View>
                <View style={styles.allIcons}>
                  <View style={styles.prestation}>
                    <Entypo name="scissors" size={24} color="#5E503F" />
                    <Text> N° formule</Text>
                  </View>
                  <View style={styles.tempsMoyen}>
                    <Entypo name="clock" size={24} color="#5E503F" />
                    <Text> 20 minutes</Text>
                  </View>
                </View>
              </View>
              <Modal visible={modalVisible} animationType="fade" transparent>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                      onPress={() => handleClose()}
                      style={styles.iconContainer}
                      activeOpacity={0.8}
                    >
                      <Entypo name="squared-cross" size={30} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.textModal}>
                      Vous êtes sur le point d'annuler votre rendez-vous.
                    </Text>
                    <TouchableOpacity
                      style={styles.confirmButton}
                      onPress={() => handleDeleteFormule()}
                    >
                      <Text style={styles.confirmButtonText}>Confirmer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("DatePicker")}
              >
                <Text style={styles.textButton}>Changer de RDV</Text>
              </TouchableOpacity>
              <View style={styles.calendarAndDelete}>
                <TouchableOpacity
                  style={styles.addToCalendar}
                  onPress={() => navigation.navigate("DatePicker")}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#5E503F"
                  />
                  <Text> Ajouter un {"\n"}nouveau RDV</Text>
                </TouchableOpacity>
                <Modal
                  visible={modalDeleteRdvVisible}
                  animationType="fade"
                  transparent
                >
                  <View style={styles.centeredCardView}>
                    <View style={styles.modalCardView}>
                      <Text style={styles.textCardModal}>
                        Votre rendez-vous a bien été supprimé. {"\n"} {"\n"}Et
                        si on en prenait un autre ?
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={styles.deleteRdv}
                  onPress={() => handleDeleteCard()}
                >
                  <Feather name="trash" size={24} color="red" />
                  <Text> Annuler le RDV</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Historique de rendez-vous</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.barber}>
            <View style={styles.leftCard}>
              <Image
                style={styles.img}
                source={require("../../assets/background_home.jpg")}
                alt="photo salon"
              />
              <View style={styles.nameAndNote}>
                <Text>Lucie Saint Clair</Text>
                <View style={styles.star}>{stars}</View>
              </View>
            </View>
            <Octicons
              name="heart-fill"
              size={30}
              color={isLiked ? "#C6AC8F" : "#22333B"}
              onPress={() => setIsLiked(!isLiked)}
            />
          </View>
          <View style={styles.barber}>
            <View style={styles.leftCard}>
              <Image
                style={styles.img}
                source={require("../../assets/background_home.jpg")}
                alt="photo salon"
              />
              <View style={styles.nameAndNote}>
                <Text>Lucie Saint Clair</Text>
                <View style={styles.star}>{stars}</View>
              </View>
            </View>
            <Octicons
              name="heart-fill"
              size={30}
              color={isLiked ? "#C6AC8F" : "#22333B"}
              onPress={() => setIsLiked(!isLiked)}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
  },
  page: {
    minHeight: "100vh",
    flexGrow: 1,
  },
  header: {
    width: "100%",
  },
  upContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 15,
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  titleContainer: {
    height: 100,
    marginLeft: 20,
  },
  rdvCard: {
    height: "85%",
    backgroundColor: "white",
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#22333B",
    marginLeft: 25,
  },
  informations: {
    width: "90%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: "60%",
    fontFamily: "Montserrat_500Medium",
  },
  date: {
    fontWeight: "500",
    margin: 15,
    fontFamily: "Montserrat_500Medium",
    padding: 5,
  },
  imageName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingBottom: 20,
  },
  name: {
    fontWeight: "bold",
    margin: 10,
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 20,
  },
  prestation: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  prestation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 3,
  },
  tempsMoyen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  calendarAndDelete: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  addToCalendar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  deleteRdv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    width: 150,
    backgroundColor: "#5E503F",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textButton: {
    color: "#EAE0D5",
    fontFamily: "Montserrat_500Medium",
  },
  barber: {
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: "#22333B",
    marginLeft: 40,
  },
  leftCard: {
    flexDirection: "row",
    height: 85,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  nameAndNote: {
    flexDirection: "column",
  },
  star: {
    flexDirection: "row",
  },
  img: {
    height: 85,
    width: 85,
    borderRadius: 20,
    marginRight: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#22333B",
    padding: 5,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModal: {
    color: "#5E503F",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  confirmButton: {
    width: 200,
    height: 70,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderWidth: 2,
    borderColor: "#C6AC8F",
  },
  confirmButtonText: {
    color: "#C6AC8F",
    letterSpacing: 5,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  centeredCardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCardView: {
    backgroundColor: "#C6AC8F",
    borderRadius: 20,
    borderColor: "#22333B",
    padding: 5,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textCardModal: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  iconContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  allIcons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
