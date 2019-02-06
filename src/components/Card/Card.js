import React from 'react';
import './Card.css';

export default function Card() {
    return (
        <div className="card_wrapper">
            <section>
                <div className='form'>
                    <div className='flex_column top_bottom'>
                        <section className="flex">
                            <h2>Notifications</h2>
                            <div className="switch">
                                <label>
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                </label>
                            </div>
                        </section>
                        <h3>How many days do you want to pass by before a notification is sent?</h3>
                        <div className="input-field number_input">
                            <input type="number" className="validate" placeholder='0' />
                        </div>
                    </div>

                    <div className='flex_column'>
                        <h2> Emails</h2>
                        <h3>Set the default emails.</h3>
                        <div>
                            <div className="input-field ">
                                <input type="text" style={{ height: '30px' }} placeholder='Shipping:' />
                            </div>
                            <div className="input-field ">
                                <input type="text" style={{ height: '30px' }} placeholder='Billing:' />
                            </div>
                            <div className="input-field ">
                                <input type="text" style={{ height: '30px' }} placeholder='Another Email:' />
                            </div>
                        </div>
                    </div>

                    <div className='flex_column top_bottom'>
                        <h2>Text Messages</h2>
                        <h3>Enter your cell phone number to recieve texts from loop minded</h3>
                        <div className="input-field ">
                            <input type="text" className="validate" style={{ height: '30px' }} placeholder='Cell Number:' />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}