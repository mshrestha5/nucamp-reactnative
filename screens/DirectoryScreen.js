import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: campsite }) => {
    return (
      <ListItem>
        <Avatar source={campsite.image} rounded />
        <ListItem.Content>
          <ListItem.title>{campsite.name}</ListItem.title>
          <ListItem.Subtitle>{campsite.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={props.campsite}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
};
export default DirectoryScreen;
