const GOOGLE_API_KEY = "AIzaSyA7mwpg7GgJ13gtwylXV1taugaUwr9KMhE"
export const getMapPreview =(lat, lng)=>{
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyAszXC1be8aJ37eHuNcBm_-O1clWkPUwV4`

    return imagePreviewUrl
}