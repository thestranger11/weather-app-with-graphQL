import {gql} from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
    query getCityByName($name: String!) {
        getCityByName(
            name: $name, 
            config: {
                units: metric
                lang: en
            }
        ){
            name,
            id,
            country,
            weather {
                temperature {
                    actual
                    feelsLike
                    min
                    max
                }
                summary {
                    title
                    description
                    icon
                }
                wind {
                    speed
                    deg
                }
                clouds {
                    all
                    visibility
                    humidity
                }
            }
        }
    }
`;