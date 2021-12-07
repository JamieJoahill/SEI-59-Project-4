<nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <span role='img' aria-label='logo' className='title'>
            <Link to='/' className='navbar-brand-text'>
              Festivents
            </Link>
          </span>
        </div>

        <div className='navbar-start'>
          <div className='navbar-item'>
            <Link className=' navbar-btn-link' to='/events'>
              EVENTS
            </Link>
            {userIsAuth() ? (
              <>
                <Link to='/events/new' className=' navbar-btn-link'>
                  Create an event
                </Link>
                {/* <Link to="/venues/new" className=" navbar-btn-link">Add Venue</Link> */}
              </>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='search-form-container'>
          <form onSubmit={handleSearchSubmit} className='search-form'>
            <input
              type='text'
              placeholder='Search for an event or venue'
              className='navbar-search'
              onChange={(e) => setInput(e)}
            />
          </form>
        </div>

        <div className='navbar-end'>
          {!userIsAuth() ? (
            <>
              <div className='navbar-item navbar-btn'>
                <Link className='navbar-btn-link' to='/register'>
                  Register
                </Link>
              </div>
              <div className='navbar-item navbar-btn'>
                <Link className='navbar-btn-link login' to='/login'>
                  Log in
                </Link>
              </div>
            </>
          ) : (
            <div className='navbar-item navbar-btn'>
              <Link className='navbar-btn-link' onClick={handleLogout} to='/'>
                Log out ({getUsername[0]})
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>