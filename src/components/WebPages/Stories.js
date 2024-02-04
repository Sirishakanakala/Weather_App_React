import React from 'react';

export default function Stories() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const responsiveColStyle = {
    marginBottom: '1rem',
  };

  return (
    <>
      <div className="stories-container" style={containerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={responsiveColStyle}>
              {/* Content for the first div */}
              <div className="p-4 mb-4" style={{backgroundColor: "rgba(75, 18, 151, 0.3)", color:'white'}}>
                <h2>Blossoming Spring Symphony</h2>
                <p> Amidst blossoming cherry trees, a gentle breeze carried whispers of nature's symphony. Petals danced in the air, painting the world in hues of pink. Sunlight peeked through the branches, casting a warm glow on a tranquil afternoon. 
                  In the embrace of spring's melody, the beauty of renewal unfolded, a poetic dance of life.</p>
              </div>
            </div>
            <div className="col-md-4" style={responsiveColStyle}>
              {/* Content for the second div */}
              <div className="p-4 mb-4" style={{backgroundColor: "rgba(75, 18, 151, 0.3)",color:'white'}}>
                <h2>Desert Mirage</h2>
                <br></br>
                <p>In the vast desert, heatwaves created illusions on the horizon, a mirage of oasis and mirabilia. Sand dunes sculpted by the wind told tales of time, their patterns shifting like ancient hieroglyphs.
                   As the sun dipped below the dunes, the desert's silence spoke of solitude and the ephemeral nature of illusions.</p>
              </div>
            </div>
            <div className="col-md-4" style={responsiveColStyle}>
              {/* Content for the third div */}
              <div className="p-4 mb-4" style={{backgroundColor: "rgba(75, 18, 151, 0.3)" , color:'white'}}>
                <h2>Autumn's Golden Lullaby</h2>
                <p>A carpet of golden leaves covered the ground, rustling softly in the autumn breeze.
                   Trees whispered tales of change as their leaves donned hues of amber and crimson.
                    The air held a nostalgic melody, a lullaby sung by nature, preparing for the serene slumber of winter. 
                    In the tranquil beauty of autumn, the world embraced the poetry of letting go.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
