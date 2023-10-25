import { ALERT_TRANSLATION } from './alert';
import { CONFIRM_TRANSLATION } from './confirm';
import { ERROR_TRANSLATION } from './error';

export const TRANSLATION_FR = {
    // A
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
    // K
    // L
    lastName: 'Nom de famille',
    // M
    message: 'Message',
    // N
    // O
    // P
    // Q
    // R
    // S
    submit: 'Envoyer',
    // T
    // U
    // V
    // W
    // X
    // Y
    // Z
    // ...
};
