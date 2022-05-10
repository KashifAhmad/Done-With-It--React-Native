import apiClient from "./client";
const endPoint = "users?pae=2";
const listingEndPoint = "users";
const getListings = () => apiClient.get(endPoint);
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("email", listing.title);
  data.append("password", listing.price);
  // data.append("categoryId", listing.category.value);
  // data.append("description", listing.description);
  // listing.images.array.forEach((image) => {
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image,
  //   });
  // });
  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));
  
  return apiClient.post(listingEndPoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded/progress.total),
  });
};
export default {
  addListing,
  getListings,
};
