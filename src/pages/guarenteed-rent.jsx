import React from 'react';
import Layout from '../components/layout'
import Contact from '../components/contact'

const GuarenteedRent = () => {
    return(
        <Layout>
            <div>
            <div className="guarenteed-rent">
                <h1>Guarenteed Rent</h1>
                <div className="guarenteed-rent-p1">
                    <p>Bermwood Estates specialises in rent guarantee which is ideal if you're a landlord looking for a guarenteed fixed monthly income regardless of whether the property is vacant. The rental guarantee can be achieved from a period of 1 to 5 years.</p>
                    <p>We cover guarenteed rental leases for studios, individual family units,  HMO's(Houses of multiple occupants), detached homes, blocks of flats and more.</p>
                </div>
                <div className="guarenteed-rent-p2">
                    <ul>
                        <li>No more dealing with problem tenants</li>
                        <li>No setup fees, monthly commission or hidden extras</li>
                        <li>Your property can be leased for between 1-5 years</li>
                        <li>No void periods</li>
                        <li>We deal with all the maintenance issues associated with wear and tear ( as a result of our tenant footfall)</li>
                        <li>Get up to 3 months' rent in advance</li>
                        <li>0% management fees </li>
                        <li>Property checked every fortnight</li>
                        <li>Your peace of mind.</li>
                        <li>Property returned in same condition it was received</li>
                        <li>We deal with all the tenants complaints and queries</li>
                    </ul>
                </div>
                <div className="guarenteed-rent-p1">
                    <h3>How does it work?</h3>
                    <p>We effectively become your tenant, guaranteeing you a fixed rental income. We then sub-let the property, taking great care to select the right tenants and then manage the property throughout the full duration of the tenancy – leaving you to get on with your busy life.</p>
                    <p>We will take care of the Assured short-hold tenancy agreement (AST). If they stop paying, leave without notice, damage the property or force us to take out an eviction order, we will incur this financial burden, not you.</p>
                    <p>guarenteed rent is precisely what it says on the tin; regardless of whether your property is left unoccupied, we'll ensure the agreed rent is paid every month and  may also be able to offer up to 2-months' rent in advance. We are here for you and your tenants 24/7, 365 days of the year so you don't have to worry about anything else. Our hands-on approach will mean your property will be adequately maintained giving you total peace of mind.</p>
                </div>
                <Contact />
            </div>
            </div>
        </Layout>
    )
}

export default GuarenteedRent