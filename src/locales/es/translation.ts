import { ALERT_TRANSLATION } from './alert';
import { CONFIRM_TRANSLATION } from './confirm';
import { ERROR_TRANSLATION } from './error';

export const TRANSLATION_ES = {
    // A
    available: 'Disponible',
    ...ALERT_TRANSLATION,
    // B
    // C
    contact: {
        title: 'Contacto',
        message: 'Por favor, complete el formulario para contactarnos',
    },
    CONFIRM_TRANSLATION, // Assuming CONFIRM_TRANSLATION is an object with its own alphabetical order
    // D
    date: 'Fecha',
    description: 'Descripción',
    destination: 'Destino',
    destination_details: 'Detalles del destino',
    duration: 'Duración',
    // E
    ERROR_TRANSLATION, // Assuming ERROR_TRANSLATION is an object with its own alphabetical order
    email: 'Correo electrónico',
    excluded_services: {
        food_drink: 'Comida y bebida.',
        monuments_entrance: 'Entradas de los monumentos.',
        tip_propina: 'Propina.',
    },
    // F
    firstName: 'Nombre',
    // G
    // H
    highlights: 'Aspectos destacados',
    // I
    included_services: {
        private_tour: {
            name: 'Tour privado',
            description: 'No habrá más personas en el grupo. Puedes detenerte cuando quieras.',
        },
        pickup_at: {
            name: 'Recogida en',
            description: 'Recogida en el hotel, riad, aeropuerto o donde desees.',
        },
        transport: {
            name: 'Transporte',
            description: 'Transporte en 4x4, Minivan o minibús, dependiendo del número de viajeros.',
        },
        driver_guide: {
            name: 'Conductor-guía',
            description: 'Español, inglés, francés',
        },
        expenses: {
            name: 'Gastos',
            description: 'Combustible, peajes y todos los gastos asociados.',
        },
        local_guide: {
            name: 'Guía local',
            description: 'Disponible',
        },
    },
    // J
    journey_time: 'Tiempo de viaje',
    // K
    // L
    lastName: 'Apellido',
    local_time: 'Hora local',
    // M
    message: 'Mensaje',
    // N
    // O
    // P
    pick_up_time_departure: 'Hora de recogida/salida',
    pick_up_and_drop_off_from_hotel: 'Recogida y entrega en su hotel',
    pricing: 'Precios',
    pricing_message:
        'El precio de la excursión depende del número de viajeros. A continuación, indicamos los precios según el número de viajeros, así como los servicios incluidos. Decídase y contáctenos.',
    pricing_warning:
        "Precios válidos para cualquier época del año, excepto Navidad y Semana Santa (verifique precios y disponibilidad).",
    // Q
    // R
    return_time: 'Hora de regreso',
    // S
    submit: 'Enviar',
    // T
    trip_details: 'Detalles del viaje',
    // U
    // V
    // W
    whats_included: 'Lo que está incluido',
    whats_not_included: "Lo que no está incluido",
    // X
    // Y
    // Z
    // ...
};
