import React from "react";
import { Link } from "react-router-dom";

const NavBar1 = () => {

    const links = [
       
        {
            name : 'Comics',
            href : 'Comics',
        },
        {
            name : 'Contact',
            href : 'Contact',
        },
    ]
    const headerStyle = {
        backgroundColor : '#ffffff',
        height : '150px',
        paddingTop :'75px',
    display: 'flex',
   alignContent :'center',
   justifyContent: 'center',
      }
      const aStyle = {
            textDecoration:'none',
            color : '#f0131e',
            marginRight: '16px',
            fontSize : '50px',
            textAlign: 'center',
            paddingRight : '20px',
        }
        const titStyle = {
            textDecoration:'none',
            color : '#f0131e',
            fontSize : '50px',
            paddingRight: '1070px',
        }
return (

<div style={headerStyle}>
<Link style={titStyle} to={'/Home'}>Marvel ComicShop</Link>
  {links.map(x => (
    <Link style={aStyle} to={x.href}>{x.name}</Link>
  ) )}

</div>
)
}
export default NavBar1