import React, { Component } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import '../css/css_file.css';
import $ from 'jquery';


const HeaderImage = require('../assets/w_img.jpg');

const label_for_check = (
    <p className='label_ck'> Check this box to receive monthly newsletters</p>
);

const sub_img = {
    backgroundImage: `url(${require("../assets/submit_img.JPG")})`,
    background: 'cover',
    cursor: 'pointer'
};

class Home extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //lifecycle method runnning after the first render
    componentDidMount() {
        localStorage.clear();
        this.yn.value = '';
        this.em.value = '';
        this.ch.checked = false;


        if (document.cookie == '') {

            if (window.screen.availWidth > 760) {
                
                $(document).ready(() => {
                    $('.assumed_viewport').on('mouseleave', () => {
                        $('.pop_up').show();
                    })

                })
            }
            if (window.screen.availWidth < 760 || window.screen.availWidth == 760) {

                this.timerHandle = setTimeout(() => this.show_form(), 5000);

            }
        }

    }


    //button click to close form
    close_form = () => {
        document.getElementById('btn_form_close').style.display = 'none';
        //cookie creation on form close
        var today = new Date();
        document.cookie = "username =" + "user_who_closed_popup" + ";expires=" + (new Date(today.getTime() + 1 * 24 * 3600 * 1000)).toDateString() + ";path=/";
    }


    //mobile dislay form
    show_form = () => {
        document.getElementById('btn_form_close').style.display = 'block';
    }


    //form submit function
    handleSubmit = (e) => {
        let name, email;
        name = this.yn.value;
        email = this.em.value;

        if (email == '' || !this.ch.checked) {
            window.alert('please enter your email address / check newsletter box');
        }

        if (this.yn.value != '' && this.em.value != '') {
            localStorage.setItem('name1', this.yn.value);
            localStorage.setItem('email1', this.em.value);
        }

        if (localStorage.getItem('name1') != '' && localStorage.getItem('email1') != '' && this.ch.checked) {
            //cookie creation on form submit
            var today = new Date();
            document.cookie = "username =" + this.yn.value + ";expires=" + (new Date(today.getTime() + 1 * 24 * 3600 * 1000)).toDateString() + ";path=/";
            window.alert('Your response has been submitted & cookies created');
            document.getElementById('btn_form_close').style.display = 'none';
        }


        e.preventDefault();

    }






    render() {
        return (
            <div className='assumed_viewport'>

                <div id='basic_screen'>
                    <p className='text_hme'>
                        Assumed Home page.
                    Exit intent pop-up in desktop/ Auto appear popup in mobile</p>
                </div>


                <div className='pop_up' id='btn_form_close'>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="baseline"
                    >
                        <Button onClick={this.close_form} className='btn_close'><b>X</b></Button>
                    </Grid>

                    &nbsp;&nbsp;

                    <Grid container spacing={24}>

                        <Grid item sm={6} md={6} xs={12} style={{ paddingLeft: '20px' }}>

                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="baseline"
                            >
                                <Typography style={{ color: 'black', fontSize: '14px', fontWeight: '400' }}><b>GET $10 PERCENT OFF WHEN YOU SIGN UP FOR</b></Typography>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="baseline"
                            >
                                <Typography style={{ color: 'black', fontSize: '14px', fontWeight: '100' }}>SAVINGS,NEWS-UPDATES AND MORE</Typography>
                            </Grid>
                            <br />
                            <form onSubmit={this.handleSubmit} method='get'>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="baseline"
                                >

                                    <input className='input_bx' type='text' placeholder='your name' ref={(yn) => this.yn = yn} />

                                </Grid>
                                <br />
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="baseline"
                                >

                                    <input className='input_bx' type='text' placeholder='email address' ref={(em) => this.em = em} />

                                </Grid>
                                <br />
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="baseline"
                                >

                                    <input className='input_chbx' type='checkbox' name='check1' ref={(ch) => this.ch = ch} />
                                    <label for="check1"> {label_for_check}</label><br />
                                </Grid>
                                <br />
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="baseline"
                                >

                                    <input onClick={this.handleSubmit} type='submit' className='input_sub' value='' style={sub_img} />


                                </Grid>

                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="baseline"
                                >

                                    <a id='privacy_link' ><u>PRIVACY POLICY</u></a>


                                </Grid>
                            </form>

                        </Grid>

                        <Grid item sm={6} md={6} xs={12} className='mobile_version_check' style={{ paddingLeft: '25px' }}>

                            <img src={HeaderImage} id='image_banner' />

                        </Grid>
                    </Grid>

                </div>


            </div >
        );
    }
}

export default Home;