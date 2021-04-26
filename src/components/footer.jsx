import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby'; 
import '../style/footer.css'

const Footer = () => {
    // const data = useStaticQuery(graphql`
    // query MyQuery {
    //     site {
    //       siteMetadata {
    //         author
    //         description
    //         title
    //       }
    //     }
    //   }
    // `)
    return ( 
        <footer>
          <ul className="footer-all-list">
            <li className="footer-list">Features</li>
            <li className="footer-list">About</li>
            <li className="footer-list">Testimonials</li>
            <li className="footer-list">Contact</li>
            <li className="footer-list">Download</li>
          </ul>
        <p>Registered Office: 136 Artesian House,  Grange Road, London, SE1 3GF</p>  
        <p>© Bermwood UK LTD</p>  
        {/* <p>Created by {data.site.siteMetadata.author}</p> */}
      </footer>
     );
}
 
export default Footer;
