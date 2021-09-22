import './styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="header">Contact</div>

    <div className="body-text">
      I'm Michael Gatmaitan from Marilao, Bulacan, Philippines and hoping to
      land my first job in tech this year 2021.
    </div>

    <div className="icons">
      <IconLink iconName="github" link="https://github.com/Michael-Gatmaitan" />
      <IconLink iconName="facebook" link="https://www.facebook.com/michael.gatmaitan29" />
      <IconLink iconName="instagram" link="https://www.instagram.com/mchlgtmtn/" />
      <IconLink iconName="twitter" link="https://twitter.com/MichaelGatmait3" />
      <IconLink iconName="portfolio" link="https://www.google.com/" />
    </div>
  </div>
);

const IconLink = ({ iconName, link }) => {

  let capitalizedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  
  return (
    <a className="icon-link" href="link">
      <div className="icon-container">
        <img src={`./svg_icons/${iconName}.svg`} width="38" alt="" />
      </div>
      <div className="textlink-container">
        <div href={link}>{capitalizedIconName}</div>
      </div>
    </a>
  );
}

export default Contact;