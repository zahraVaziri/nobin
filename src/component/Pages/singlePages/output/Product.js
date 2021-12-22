import React from "react";
import {Link} from "react-router-dom";
import { Card } from "react-bootstrap";
import './Output.css'

const Product = (props) => {
    const data = props.data;

    return (
        <>
            <Link to={'/detail/' + data.id}>
                <Card >
                    <Card.Img variant="top" src={data.pic} />
                     <div class="card-img-overlay">
                         <div >
                         <i class="fa fa-link" aria-hidden="true"></i>
                         </div>
                     </div>
                </Card>  
                <h5 className="title-card-product p-3 pb-0">{data.title}</h5>
            </Link>

        </>
    )

}

export default Product