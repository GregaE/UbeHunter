import Coordinates from "src/interfaces/Coordinates"

export default function createMarker(coordinates: Coordinates) {
  return {
    options: { color: "indigo", draggable: false },
    coordinates: [coordinates.lng, coordinates.lat],
    popup: {
      options: {
        closeButton: true,
        closeOnClick: false,
        closeOnMove: false,
      },
      content: "XYZ",
    },
  }
}