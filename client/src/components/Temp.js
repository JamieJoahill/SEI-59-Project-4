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


// Old Form

{/* Old Form */}

<div className="field is-two-fifths container">
<label className="label">Title</label>
<div className="control">
  <input 
    type="text" 
    className="input" 
    placeholder="Event title"
    name="title"
    value={formData.title}
    onChange={handleChange}
    errors={errorData}
  />
</div>
</div>

<div className="field is-two-fifths container">
<label className="label">Description</label>
<div className="control">
  <textarea 
    type="text" 
    className="textarea" 
    placeholder="Enter your description"
    name="description"
    value={formData.description}
    onChange={handleChange}
    errors={errorData}
  />
</div>
</div>

<div className="field is-two-fifths container">
<div className="control">
  <ImageUploadField
    value={formData.photo}
    name="photo"
    handleImageUrl={handleImageUrl}
  />
</div>
</div>

{/* Date */}
<div className="field is-two-fifths container">
<label className="label">Date</label>
<div className="control">
  <input 
    type="date" 
    className="input"
    name="date"
    value={formData.date}
    onChange={handleChange}
    errors={errorData}
  />
</div>
</div>

{/* Photo Upload */}

{/* Location */}
<div className="field is-two-fifths container">
<label className="label">Location</label>
<div className="control">
  <input 
    type="text" 
    className="input" 
    placeholder="e.g. Shoreditch, London"
    name="location"
    value={formData.location}
    onChange={handleChange}
    errors={errorData}
  />
</div>
</div>

{/* Start time */}
<div className="field is-two-fifths container">
<label className="label">Start Time</label>
<div className="control">
  <input 
    type="time" 
    className="input"
    name="start_time"
    placeholder={formData.start_time}
    value={formData.start_time}
    onChange={handleChange}
    errors={errorData}
  />
</div>
</div>

{/* Finish time */}
<div className="field is-two-fifths container">
<label className="label">Finish Time</label>
<div className="control">
  <input 
    type="time" 
    className="input"
    name="finish_time"
    placeholder={formData.finish_time}
    value={formData.finish_time}
    onChange={handleChange}
    errors={errorData}
  />
</div>
</div>

{/* Category */}
<div className="field is-two-fifths container">
<label className="label">Category</label>
<div className="control">
  <div className="select">
    <select name="category" onChange={handleChange}>
      <option>Select Category</option>
      {categories.map(category => {
        return (
          <option key={category.id} value={category.id}>{category.category}</option>
        )
      })}
    </select>
  </div>
  <i className="fas fa-plus" onClick={toggleCategoryModal}></i>
</div>
</div>


{/* Venue */}
<div className="field is-two-fifths container">
<label className="label">Venue</label>
<div className="control">
  <div className="select">
    <select name="venue" onChange={handleChange}>
      <option value="">Select Venue</option>
      {venues.map(venue => {
        return (
          <option key={venue.id} value={venue.id}>{venue.name}</option>
        )
      })}
    </select>
  </div>
  <i className="fas fa-plus" onClick={toggleVenueModal}></i>
</div>
</div>

<div className="field is-grouped">
<div className="control">
  <button className="button is-primary">Submit</button>
</div>
<div className="control">
  <button className="button" onClick={handleFormCancel}>Cancel</button>
</div>
</div>

{/* Template */}

          {/* <div className='field is-two-fifths container column justify-input'>
            <div className='field is-two-fifths'>
              <input
                className='form-input'
                type='text'
                placeholder='Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
                autoComplete='off'
                errors={errorData}
              />
            </div>
          </div> */}


          {/* Template */}