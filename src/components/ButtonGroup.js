import React from 'react';
import { SubNav } from '@primer/react';

const Navigation = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SubNav aria-label="Main">
                <SubNav.Links>
                    <SubNav.Link href="#all" selected>
                        All
                    </SubNav.Link>
                    <SubNav.Link href="#music">Music</SubNav.Link>
                    <SubNav.Link href="#gaming">Gaming</SubNav.Link>
                    <SubNav.Link href="#python">Python</SubNav.Link>
                    <SubNav.Link href="#trailers">Trailers</SubNav.Link>
                    <SubNav.Link href="#sitcoms">Sitcoms</SubNav.Link>
                    <SubNav.Link href="#software-framework">Software Framework</SubNav.Link>
                    <SubNav.Link href="#live">Live</SubNav.Link>
                    <SubNav.Link href="#superheroes">Superheroes</SubNav.Link>
                    <SubNav.Link href="#bootstrap">Bootstrap</SubNav.Link>
                    <SubNav.Link href="#mixes">Mixes</SubNav.Link>
                    <SubNav.Link href="#sketch-comedy">Sketch Comedy</SubNav.Link>
                    <SubNav.Link href="#podcasts">Podcasts</SubNav.Link>
                    <SubNav.Link href="#al">Al</SubNav.Link>
                </SubNav.Links>
            </SubNav>
        </div>
    );
};

export default Navigation;
