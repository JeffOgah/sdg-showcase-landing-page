import React from 'react';
import './Footer.scss';
import Upsroll from '../Upscroll';



export default function Footer() {
    

    return (
        <div>
            <footer className="footer foote">
                
                <Upsroll/>
                <div className="footer-background">
                    <div className="footer-text">
                        <p>This website was built by  <a style={{ color: '#000' }} href="https://www.google.com/">Femi</a>, a Programme Assistant in the <span style={{ color: '#0fddff' }}>#BUILDFORSDG.</span></p>
                        <h2 className="footer-heading">Africans can build amazing products.</h2>
                        <p className="footer-heading">We just need opportunities...</p>
                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}