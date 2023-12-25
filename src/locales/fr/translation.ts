import { ALERT_TRANSLATION } from './alert';
import { CONFIRM_TRANSLATION } from './confirm';
import { ERROR_TRANSLATION } from './error';

export const TRANSLATION_FR = {
    // A
    available: 'Disponible',
    ...ALERT_TRANSLATION,
    // B
    // C
    contact: {
        title: 'Contact',
        message: 'Veuillez remplir le formulaire pour nous contacter',
    },
    CONFIRM_TRANSLATION, // Assuming CONFIRM_TRANSLATION is an object with its own alphabetical order
    // D
    date: 'Date',
    description: 'Description',
    destination: 'Destination',
    destination_details: 'Détails de la destination',
    duration: 'Durée',
    // E
    ERROR_TRANSLATION, // Assuming ERROR_TRANSLATION is an object with its own alphabetical order
    email: 'E-mail',
    excluded_services: {
        food_drink: 'Nourriture et boissons.',
        monuments_entrance: 'Entrées des monuments.',
        tip_propina: 'Pourboire.',
    },
    // F
    firstName: 'Prénom',
    // G
    // H
    highlights: 'Grand moment',
    // I
    included_services: {
        private_tour: {
            name: 'Visite privée',
            description:
                "Il n'y aura plus de personnes dans le groupe. Vous pouvez vous arrêter quand vous le souhaitez.",
        },
        pickup_at: {
            name: 'Rendes-vous',
            description: "Rendes-vous à l'hôtel, au riad, à l'aéroport ou où vous le souhaitez.",
        },
        transport: {
            name: 'Transport',
            description: 'Transport en 4x4, Minivan ou minibus, en fonction du nombre de voyageurs.',
        },
        driver_guide: {
            name: 'Chauffeur-guide',
            description: 'Espagnol, anglais, français',
        },
        expenses: {
            name: 'Dépenses',
            description: 'Carburant, péages et toutes les dépenses associées.',
        },
        local_guide: {
            name: 'Guide locale',
            description: 'Disponible',
        },
    },
    // J
    journey_time: 'Temps de trajet',
    // K
    // L
    lastName: 'Nom de famille',
    local_time: 'Heure locale',
    // M
    message: 'Message',
    // N
    // O
    // P
    pick_up_time_departure: 'Heure de départ',
    pick_up_and_drop_off_from_hotel: 'Prise en charge et dépôt depuis votre hôtel',
    pricing: 'Tarification',
    pricing_message:
        "Le prix de l'excursion dépend du nombre de voyageurs. Ci-dessous, nous indiquons les prix en fonction du nombre de voyageurs, ainsi que les services inclus. Faites votre choix et contactez-nous.",
    pricing_warning:
        "Prix valables toute l'année, sauf pendant Noël et Pâques (vérifiez les prix et la disponibilité).",
    // Q
    // R
    return_time: 'Heure de retour',
    // S
    submit: 'Envoyer',
    // T
    trip_details: 'Détails du voyage',
    // U
    // V
    // W
    whats_included: 'Ce qui est inclus',
    whats_not_included: "Ce qui n'est pas inclus",
    // X
    // Y
    // Z
    // ...
};
