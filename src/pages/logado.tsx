import { getAPIClient } from "@/services/axios";
import { BeakerIcon } from "@heroicons/react/solid";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";


export default function Logado() {
    return (
        <div>
            <BeakerIcon className="h-6 w-6 text-green-700" />
            <p>LOGADÃO!!!!!!</p>
        </div>


    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['nextauth.token']: token } = parseCookies(ctx)
    console.log(apiClient)

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}