import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

const API_KEY = 'pk.eyJ1IjoiYWxleHJleWVzMDkxIiwiYSI6ImNsbmt6a2o5dTE2dDEycnBmMzRsenJxdWUifQ.jmxvqkO32A7CXLE13DBwIA'
mapboxgl.accessToken = API_KEY;


export const getDistance = (fristPoint, secondPoint) => {

    try {
        // Primer punto de coordenadas
        const splitFirstPoint = fristPoint.split(",");
        const fristPointLongth = splitFirstPoint[0];
        const firstPointLatitud = splitFirstPoint[1];

        // Segundo punto de coordenadas
        const splitSecondPoint = secondPoint.split(",");
        const secondPointLongth = splitSecondPoint[0];
        const secondPointLatitud = splitSecondPoint[1];

        // Calculo de distancias
        const point1 = turf.point([fristPointLongth, firstPointLatitud]);
        const point2 = turf.point([secondPointLongth, secondPointLatitud]);
        // Definicion de unidad
        const options = { units: 'kilometers' };

        const distance = turf.distance(point1, point2, options);

        return distance
    } catch (error) {
        console.log(`Error al tratar de calcular la distancia: ${error}`)
        return 0
    }

}


export const getMapPoint = (coordinates = {}) => {
    const { length, latitude } = coordinates;

    try {
        const map = new mapboxgl.Map({
            container: 'map', // ID de un div en tu HTML donde se mostrará el mapa
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [length, latitude], // Coordenadas iniciales del mapa
            zoom: 10, // Nivel de zoom inicial
        });

        return map;
    } catch (error) {
        console.log(`Error al tratar de cargar el mapa: ${error}`)
        return {}
    }
}