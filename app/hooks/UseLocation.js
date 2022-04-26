import { useState, useEffect } from "react";
import * as Location from "expo-location";
export default useLocation = () => {
  const [location, setLocation] = useState(null);
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (granted) {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude, longitude });
      } else return;
    } catch (error) {
      console.log("Location error:", error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
