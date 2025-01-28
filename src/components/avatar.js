import React from 'react';

export default function Avatar() {
    return (
        <>

            <div className="avatar avatar--vertical">
                <img className="avatar__photo avatar__photo--xl" alt="Osama Ata" src="https://github.com/osama-ata.png" />
                <div className="avatar__intro">
                    <div className="avatar__name">Osama Ata</div>
                    <small class="avatar__subtitle">Contracts Manager, Interested in Technology and Innovation.</small>
                    <div className="authorSocials_rSDt">
                        <a href="https://github.com/osama-ata" target="_blank" rel="noopener noreferrer" className="authorSocialLink_owbf" title="GitHub" style={{ marginRight: '10px' }}>
                        </a>
                        <a href="https://www.linkedin.com/in/osamata/" target="_blank" rel="noopener noreferrer" className="authorSocialLink_owbf" title="LinkedIn" style={{ marginRight: '10px' }}>
                        </a>
                        <a href="https://osamata.com" target="_blank" rel="noopener noreferrer" className="authorSocialLink_owbf" title="newsletter" style={{ marginRight: '10px' }}>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}