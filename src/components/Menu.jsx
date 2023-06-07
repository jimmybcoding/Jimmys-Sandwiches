function Menu({menuItems}) {
  return (
    <section className='menu'>
        <h1>Menu</h1>
        <h2>Sandwiches</h2>
        <p className="make-meal">Make it a meal! Add fries and a drink for $4 extra</p>
        <ul className='menu-list'>
            {menuItems.map(item => 
                {
                    return (
                        <li key={item.id}>
                            <h3>{item.name} {item.icon} </h3> 
                            <p>{item.description}</p>
                            <p className='menu-price'>{item.price}</p>
                        </li>
                    )
                }
                )}
        </ul>
    </section>
  )
}

export default Menu

