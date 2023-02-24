import { Link, useParams } from "react-router-dom";

function ProductDatailPage() {

    const params = useParams();

    return (
        <>

            <h1>Product details</h1>
            <p>{params.productId}</p>
            <p><Link to={'..'} relative={'path'}>Back</Link></p>
        </>
    )
}

export default ProductDatailPage;