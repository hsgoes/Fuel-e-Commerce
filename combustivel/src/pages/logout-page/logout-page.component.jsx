import React, { Component } from 'react';


import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './logout-page.styless.scss';
import { Link, withRouter } from 'react-router-dom';
import { resetCart } from '../../redux/cart/cart.actions';
import { addressReset } from '../../redux/address/address.actions';
import { resetUser } from '../../redux/user/user.actions';

import CustomButton from '../../components/custom-button/custom-button.component';

class LogoutPage extends Component {
    render() {

        const {RESET_CART, RESET_ADDRESS,RESET_USER, history} = this.props
        return (
            <div className="logout-container">
                <Container>
                    <Row className="justify-content-center  collumn-flex">
                        <h1>Você está saindo!</h1>
                        <div className="logout-image"></div>
                        <Link to="/">Quero voltar</Link>
                        <CustomButton
                            handleClick={(e) => {
                                localStorage.clear()
                                RESET_USER();
                                RESET_CART();
                                RESET_ADDRESS();
                                history.push("/");
                            }}>
                            Sair
                                </CustomButton>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    RESET_CART : () => dispatch(resetCart()),
    RESET_ADDRESS : () => dispatch(addressReset()),
    RESET_USER : () => dispatch(resetUser())
})

export default withRouter(connect(null, mapDispatchToProps)(LogoutPage));
