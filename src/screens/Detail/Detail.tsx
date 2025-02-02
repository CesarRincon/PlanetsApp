import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ThermometerIcon from '../../components/Icons/ThermometerIcon';
import RotationIcon from '../../components/Icons/RotationIcon';
import RuleIcon from '../../components/Icons/RuleIcon';
import MassIcon from '../../components/Icons/MassIcon';
import { useContextState } from '../../context/Context';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import stylesDetail from './DetailStyles';
import { getDataPlanet } from '../../utils/fetcher';

export default function Detail({ route }: DetailProps) {
    const { isLoading, setIsLoading } = useContextState();
    const [data, setData] = useState<PlanetDetails | null>(null);
    const { name, image } = route.params;


    useEffect(() => {
        if (name) {
            getDataPlanet(setData, setIsLoading, name);
        }
    }, [name]);

    if (isLoading) return <Loader />;

    return (
        <ScrollView contentContainerStyle={stylesDetail.container}>
            <Header title="" transparent />
            <Text style={stylesDetail.titlePlanet}>{data?.name}</Text>
            <View style={stylesDetail.containerImage}>
                <Image source={{ uri: image }} width={280} height={280} />
            </View>
            <View style={stylesDetail.containerDistance}>
                <Text style={stylesDetail.textTitleDistance}>Distance from Earth</Text>
                <Text style={stylesDetail.textSubtitleDistance}>{data?.distance_light_year}</Text>
            </View>
            <View style={stylesDetail.containerDescription}>
                <View style={stylesDetail.containerItem}>
                    <View style={stylesDetail.containerIcon}>
                        <ThermometerIcon />
                    </View>
                    <View>
                        <Text style={stylesDetail.titleItem}>Temperature:</Text>
                        <Text style={stylesDetail.descriptionItem}>{data?.temperature}°</Text>
                    </View>
                </View>
                <View style={stylesDetail.containerItem}>
                    <View style={stylesDetail.containerIcon}>
                        <RotationIcon />
                    </View>
                    <View>
                        <Text style={stylesDetail.titleItem}>Orbital period:</Text>
                        <Text style={stylesDetail.descriptionItem}>{data?.period} Days</Text>
                    </View>
                </View>
                <View style={stylesDetail.containerItem}>
                    <View style={stylesDetail.containerIcon}>
                        <RuleIcon />
                    </View>
                    <View>
                        <Text style={stylesDetail.titleItem}>Radius:</Text>
                        <Text style={stylesDetail.descriptionItem}>{data?.radius} of the Earth</Text>
                    </View>
                </View>
                <View style={stylesDetail.containerItem}>
                    <View style={stylesDetail.containerIcon}>
                        <MassIcon />
                    </View>
                    <View>
                        <Text style={stylesDetail.titleItem}>Mass:</Text>
                        <Text style={stylesDetail.descriptionItem}>{data?.mass} of the Earth</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
