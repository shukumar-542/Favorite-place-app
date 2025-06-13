const GOOGLE_API_KEY = "AIzaSyAszXC1be8aJ37eHuNcBm_-O1clWkPUwV4"
export const getMapPreview =(lat, lng)=>{
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyAszXC1be8aJ37eHuNcBm_-O1clWkPUwV4`

    return imagePreviewUrl
}

export const getAddress = async(lat , lng)=>{
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    const response  =  await fetch(url);
    if(!response.ok){
      throw new Error("Failed to fetch address!")  
    }
    const data = await response.json();
    const address = data.results[0].formatted_address;
    return address;
}