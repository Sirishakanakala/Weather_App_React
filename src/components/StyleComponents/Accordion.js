import React from 'react';

export default function Accordion() {
  const Data = {
    rainProbability: 30,
    temperature: { min: 15, max: 25 },
    precipitation: 10,
    idealTravelTimes: 'Spring and Fall',
    packingSuggestions: 'Light clothing and sunscreen',
  };

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{backgroundColor: "rgba(75, 18, 151, 0.3)" }}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Event Handlers
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body dark-background">
              <div>
                <p style={{color:"whitesmoke"}}>Rain Probability: {Data.rainProbability}%</p>
                <p style={{color:"whitesmoke"}}>
                  Temperature Range: {Data.temperature.min}°C -{' '}
                  {Data.temperature.max}°C
                </p>
                <p style={{color:"whitesmoke"}}>Wind Speed: </p>
                <p style={{color:"whitesmoke"}}>UV Index: </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: "rgba(75, 18, 151, 0.3)"}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed dark-accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Farmers
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body light-background">
              <p style={{color:"whitesmoke"}}>Precipitation Levels: {Data.precipitation}mm</p>
              <p style={{color:"whitesmoke"}}>
                Temperature Extremes: {Data.temperature.min}°C -{' '}
                {Data.temperature.max}°C
              </p>
              <p style={{color:"whitesmoke"}}>
                Growing Degree Days: Include growing degree day information to
                help with crop growth prediction.
              </p>
              <p style={{color:"whitesmoke"}}>
                Soil Moisture Content: Display soil moisture content for better
                irrigation management.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: "rgba(75, 18, 151, 0.3)"}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed dark-accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Travelers
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body dark-background">
              <p style={{color:"whitesmoke"}}>Ideal Travel Times: {Data.idealTravelTimes}</p>
              <p style={{color:"whitesmoke"}}>Packing Suggestions: {Data.packingSuggestions}</p>
              <p style={{color:"whitesmoke"}}>
                Local Events: Highlight any local events or festivals influenced
                by the weather.
              </p>
              <p style={{color:"whitesmoke"}}>
                Outdoor Activity Recommendations: Recommend outdoor activities
                based on the current weather.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
