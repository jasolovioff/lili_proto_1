import React, {Component} from "react";

class LiliAttr extends Component{
    render() {
        let prueba = {};
        prueba.elemPhoto = 'col-lg-6';
        prueba.elemText = 'col-lg-6';
        if(this.props.photoSide == 'left'){
            prueba.elemPhoto += ' order-lg-2';
            prueba.elemText += ' order-lg-1';
        }
        return(
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={prueba.elemPhoto}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={"img/"+this.props.image} alt=""/>
                            </div>
                        </div>
                        <div className={prueba.elemText}>
                            <div className="p-5">
                                <h2 className="display-4">{this.props.title}</h2>
                                <p>{prueba.photo} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio
                                    veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis
                                    recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default (LiliAttr);