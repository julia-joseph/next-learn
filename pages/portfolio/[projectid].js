import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
    const router = useRouter();

    console.log("router paths", router.pathname);
    console.log("router query", router.query);
    
    return (
        <div>
            Portfolio Project Page
        </div>
    )
}

export default PortfolioProjectPage;