import React from "react";
import {Link} from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './Output.css'

const ProductLast = (props) => {
    const data = props.data;

    return (
        <>
            
          <Card className={'card-news'} >
            <Card.Img variant="top" className="img-news" src={data.pic} />
          
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                  <p>{data.date}</p>
                  <p><i class="fa fa-comments" aria-hidden="true"></i> <span>0</span></p>
              </ListGroupItem>
              
            </ListGroup>
             <Card.Body>
                            <Card.Title><h4 class="line2-ell ">{data.title}</h4></Card.Title>
                            <Card.Text>
                            <div class="line3-ell text-last-news my-3">{data.text1}
                            {data.text2}
                            {data.text3}
                            {data.text4}
                            </div>
                            </Card.Text>
                        </Card.Body>
            <Card.Body className={'link-more'}>
              <Card.Link  href="#">
                بیشتر<i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </Card.Link>
              
            </Card.Body>
          </Card>
           

        </>
    )

}

export default ProductLast