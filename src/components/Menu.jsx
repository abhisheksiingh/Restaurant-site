import React, { Component, useState } from "react";
import { Form, Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import DishDetailComponent from "./DishDetailComponent";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDisk:null
        };
    }
    onDishSelectItem(dishItem){
        this.setState({selectedDisk:dishItem});
    }

    renderDish(dishItem){
        if(dishItem != null)
        return(
            <Card>
                <CardImg top src={dishItem.image} alt={dishItem.name} />
                <CardBody>
                  <CardTitle>{dishItem.name}</CardTitle>
                  <CardText>{dishItem.description}</CardText>
                </CardBody>
            </Card>
        );
        else
        return(
            <div></div>
        )
    }
    render(){
        const menu = this.props.dishes.map((dishItem) => {
            return(
                <div className="col-12 col-md-5 m-1">
                <Card key={dishItem.id}
                  onClick={() => this.onDishSelectItem(dishItem)}>
                  <CardImg width="100%" src={dishItem.image} alt={dishItem.name} />
                  <CardImgOverlay>
                      <CardTitle>{dishItem.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
   
                    
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDisk)}
                    </div>
                </div>

            </div>
        )
    }
}
export default Menu;