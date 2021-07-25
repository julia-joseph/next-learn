import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
    const router = useRouter();

    console.log("router query", router.query);

    return (
        <div>
            The selected project of a given Client
        </div>
    )
}

export default SelectedClientProjectPage;