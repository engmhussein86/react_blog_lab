function Nav() {

    
    const navLinks = [
        { id: 1, title: "Women's" },
        { id: 2, title: "Men's" },
        { id: 3, title: "On the Street" },
        { id: 4, title: "The Catwalk" },
        { id: 5, title: "AdWatch" },
        { id: 6, title: "About" },
    ];

    return (
               <nav className="header_nav" aria-label="Main Navigation" role="navigation">
        <ul>
        {navLinks.map((link,index)=>(<li key={link.id} 
        >{link.title}</li>))}
        </ul>
      </nav>

    )
  }
  
  export default Nav;