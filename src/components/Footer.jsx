function Footer() {

    
    const navLinks = [
        { id: 1, title: "Women's" },
        { id: 2, title: "Men's" },
        { id: 3, title: "On the Street" },
        { id: 4, title: "The Catwalk" },
        { id: 5, title: "AdWatch" },
        { id: 6, title: "About" },
        { id: 7, title: "Tips" },
    ];

    return (
        <>
               <nav className="footer_nav" aria-label="Main Navigation" role="navigation">
        <ul>
        {navLinks.map((link,index)=>(<li key={link.id} 
        >{link.title}</li>))}
        </ul>
      </nav>
      <p className="copywrite">&copy; 2013 Valet Industries, Inc</p>
      </>

    )
  }
  
  export default Footer;