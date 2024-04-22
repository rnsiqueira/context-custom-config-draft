type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
    await delay()

    return {
        token: 'tejttgngnghkkfToken',
        user: {
            name: 'Rafael Siqueira',
            email: 'rafael@nrs.com.br',
            avatar_url: 'https://github.com/rnsiqueira.png'
        }
    }
}

export async function recoverUserInformation() {
    await delay()

    return {
        user: {
            name: 'Rafael Siqueira',
            email: 'rafael@rns.com.br',
            avatar_url: 'https://github.com/rnsiqueira.png'
        }
    }
}