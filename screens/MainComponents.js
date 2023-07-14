import { CAMPSITES } from "../shared/campsites";
import { useState } from "react";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native-animatable";
import CampsiteInfoScreen from "./campsiteInfoScreen";

const Main = () => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [selectedCampsiteId, setSelectCampsiteId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        campsites={campsites}
        onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
      />
      <CampsiteInfoScreen
        campsite={
          campsites.filter((campsite) => campsite.id === selectedCampsiteId)[0]
        }
      />
    </View>
  );
};

export default Main;
