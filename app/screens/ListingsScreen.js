import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings. </AppText>
          <AppText>Please try again later.</AppText>
          <Button title="Retry" onPress={loadListings}></Button>
        </>
      )}
      <ActivityIndicator visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.email}
            subtitle={"$" + item.first_name}
            imageUrl={item.avatar}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingsScreen;
