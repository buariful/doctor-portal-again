import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <footer >
                <div className="footer p-10 place-items-center">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>

                <p className='text-[14px] py-5'>Copyright 2022 All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;