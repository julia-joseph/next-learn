import { useRouter } from "next/router";

const ClientsProjectPage = () => {
    const router = useRouter();

    console.log(router.query);

    const projectHandler = () => {
        router.push({
            pathname: '/clients/[id]/[clientprojectsid]',
            query: {
                id: 'jeremy',
                clientprojectsid: 'projecta'
            }
        })
    }

    return (
        <div>
            <h1>List of projects of a given Client</h1>
            <button onClick={projectHandler}> Load Project A </button>
        </div>
    )
}

export default ClientsProjectPage;