interface HeaderProps {
    title: string;
    backIcon?: boolean;
    transparent?: boolean;
}

interface LandingProps {
    setLanding: React.Dispatch<React.SetStateAction<boolean>>;
}


interface ItemType {
    item: PlanetCardType
}

interface PlanetCardType {
    image: string
    name: string
    distanceFromEarth: number
}

interface NavigationProps {
    navigate(
        route: string,
        options: {
            screen: string;
            params: {
                name: string;
                image: string;
            };
        }
    ): void;
}

interface Planet {
    name: string;
    id: string | number
    image: string,
    distanceFromEarth: number
}

interface Planet {
    name: string;
}

interface PlanetListProps {
    data: Planet[];
    renderItemComponent?: PlanetCardType
}

interface ContextTypes {
    state: Planet[];
    isLoading: boolean;
    handlerFavoritePlanet: (planet: Planet) => void;
    setIsLoading: (loading: boolean) => void;
}

interface PlanetDetails {
    name: string;
    image: string;
    distance_light_year: string;
    temperature: number;
    period: number;
    radius: string;
    mass: string;
}

interface DetailProps {
    route: {
        params: {
            name: string;
            image: string;
        };
    };
}