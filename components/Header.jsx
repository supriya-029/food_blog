import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1>Food Blog</h1>
      </div>
      <img
        className="headerImg"
        src="http://images6.fanpop.com/image/photos/35500000/Dessert-food-35554326-2300-1515.jpg"
        alt="" height="600" width="1800"
      />
    </div>
  );
}