export const getDataByPathParams = (data, locationType, locationName) => {
    return data.filter(d => {
        return d[locationType].toLowerCase() === locationName.toLowerCase()
    });
}