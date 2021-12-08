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


<div className="section register-container form-wrapper">
      <form className="section container" onSubmit={handleSubmit}>
        <h2 className="register-form-headline container  column is-two-fifths">Register to post your event</h2>
        <hr />
        <div className="field is-two-fifths container column">
          <label className="label">Username</label>
          <div className="control">
            <input 
              className="input"
              type="text" 
              placeholder="e.g Alex Smith"
              name="username"
              value={formData.username}
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className="field is-two-fifths container column">
          <label className="label">Email</label>
          <div className="control">
            <input 
              className="input" 
              type="email" 
              placeholder="e.g. alexsmith@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field is-two-fifths container column">
          <label className="label">Password</label>
          <div className="control">
            <input 
              className="input" 
              type="password" 
              placeholder="e.g. Password123"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field is-two-fifths container column">
          <label className="label">Password Confirmation</label>
          <div className="control">
            <input 
              className="input" 
              type="password" 
              placeholder="Password Confirmation" 
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field is-grouped is-grouped-right container column is-two-fifths">
          <p className="control">
            <button className="button">
              Submit
            </button>
          </p>
          <p className="control">
            <button className="button" onClick={handleClick}>
              Cancel
            </button>
          </p>
        </div>

      </form>
    </div>

<div className="venue-overlay">
<div className="container">
  <div className='split-venue venue-overlay'>
    <div className="drop-down-venue">
      <div className="venue-title">
        <h3 className='title is-3'>Venue</h3>
        <h2 className='title is-2'>{venue.name}</h2>
      </div>
      <div className="venue-image">
        <figure className="image image-is-1by1">
          <img src={venue.venue_image} alt={venue.title} className="show-venue-custom-image"/>
        </figure>
      </div>
    </div>
    

  </div>

  <div className='container'>
    <div>this is venue description</div>
    <div>this is venue description</div>
    <div>this is venue description</div>
    <div>this is venue description</div>
  </div>
  
</div>


</div>

<footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Festivents</strong> by <Link to="github.com">Jamie Joahill</Link>
        </p>
      </div>
    </footer>


<div className='venue-overlay'>
      {venue ? (
        <div className='venue-page'>
          <div className='venue-header'>
            <div className='container position-relative'>
              <div className='split-venue-title-image'>
                <div className='venue-title'>
                  <div className='venue-title-header'>
                    <h3 className='title is-3 has-text-white'>Venue</h3>
                    <h1 className='title is-1 custom-h1'>{venue.name}</h1>
                  </div>
                </div>
                <div className='venue-image'>
                  <figure className='image image-is-1by1 show-venue-custom-image'>
                    <img
                      src={venue.venue_image}
                      alt={venue.title}
                      className='show-venue-custom-image'
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="info-container container myDiv">
            info
          </div>
          
        </div>
      ) : (
        <h2 className='title has-text-centered'>
          {hasError ? 'We could not get that venue' : 'Venue Loading...'}
        </h2>
      )}
    </div>