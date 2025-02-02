export const getDataPlanet = async (setData: any, setIsLoading: any, name: string) => {
    setIsLoading(true);
    const requestOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch(
            `https://api.api-ninjas.com/v1/planets?name=${name}&X-Api-Key=AlcA2ESOwH7L5aTPiTziBA==5BtcmhmcOkmBQq32`,
            requestOptions
        );
        const result = await response.json();
        setData(result[0]);
    } catch (error) {
        console.log(error);
    }
    setIsLoading(false);
};