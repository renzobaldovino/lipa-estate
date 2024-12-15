import { useState, useEffect } from 'react';

export function useGeoLocation() {
    const [location, setLocation] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const refresh = () => {
        setLocation(null);
        setError(null);
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by this browser.");
            return;
        }

        function handleSuccess(position: any) {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        }

        function handleError(error: any) {
            setError(error.message);
        }

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    return { location, error, refresh };
}