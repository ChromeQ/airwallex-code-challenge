import { useState } from 'react';

const useEndpoint = (url, method) => {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const request = async data => {
        if (isPending) {
            return;
        }

        setIsPending(true);

        const res = await fetch(url, {
            method,
            body: JSON.stringify(data)
        });
        const { errorMessage } = await res.json();

        setStatus(res.status);
        setErrorMessage(errorMessage);

        setIsPending(false);
    }

    return {
        request,
        isPending,
        status,
        errorMessage
    }
};

export default useEndpoint;