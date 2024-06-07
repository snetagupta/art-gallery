const Filters = () => {
  const orentations = ["Landscape", "Portrait", "Square"];
  const Collections = ["HDR", "Limites Prints"];
  const Artworks = ["Nature", "Spaces", "People", "More"];
  const Prices = [
    "Below ₹5,000",
    "₹5,001 - ₹10,000",
    "₹10,001 - ₹25,000",
    "₹25,001 - ₹50,000",
    "Above ₹50,000",
  ];
  const Artists = [
    "Anunay Rai",
    "Arnab Roy",
    "Artoreal Exclusive",
    "Azania Thomas",
    "Charu Gandhi",
    "Jayesh Shrimali",
    "Kaveri Rangappa",
    "Manoj Sridhar",
    "Mayur Gangasagar",
    "Mohamed Abdul Rasheed",
    "Pankaj Parashar",
    "Sachin Bavkar",
    "Shilpam Sood",
    "Sudipta Chakraborty",
    "Suhasish Pachal",
  ];
  return (
    <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold">Filters</p>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Orientation</p>
        {orentations.map((orentation, index) => (
          <div key={index}>
            <input type="checkbox" />
            <label >{orentation}</label>
          </div>
        ))}
      </div>
      <div  className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Collection type</p>
        {Collections.map((Collection,index)=>(
            <div key={index}>
                 <input type="checkbox" />
                 <label>{Collection}</label>
            </div>

        ))}
      </div>
      <div  className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Artworks</p>
        {Artworks.map((Artwork,index)=>(
            <div key={index}>
                 <input type="checkbox" />
                 <label>{Artwork}</label>
            </div>

        ))}
      </div>
      <div  className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Prices</p>
        {Prices.map((price,index)=>(
            <div key={index}>
                 <input type="checkbox" />
                 <label>{price}</label>
            </div>

        ))}
      </div>
      <div  className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Artist(15)</p>
        {Artists.map((Artist,index)=>(
            <div key={index}>
                 <input type="checkbox" />
                 <label className="text-lg">{Artist}</label>
            </div>

        ))}
      </div>
    </div>
  );
};

export default Filters;
