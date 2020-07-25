const authenticate = async (url, bodyObj, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${authToken}`;

        const response = await promise.json();

        if (response.username && authToken) {
            onSuccess()
        } else {
            onFailure()
        }

    } catch (error) {
        onFailure()
    }
}

export default authenticate;